// Screenshots the homepage hero across browsers and viewport widths for visual review.
// Usage: npm run screenshot -- [label] --width <px> [--width <px> ...]
import {mkdir} from 'node:fs/promises';
import {parseArgs} from 'node:util';
import {chromium, webkit} from 'playwright';

const usage = 'Usage: npm run screenshot -- [label] --width <px> [--width <px> ...]';
const url = 'http://localhost:3000';

function exitWithUsage() {
  console.error(usage);
  process.exit(1);
}

let values, positionals;
try {
  ({values, positionals} = parseArgs({
    allowPositionals: true,
    options: {
      width: {type: 'string', multiple: true},
    },
  }));
} catch {
  exitWithUsage();
}

const widths = (values.width ?? []).map(Number);
if (widths.length === 0 || widths.some((width) => !Number.isInteger(width) || width <= 0)) {
  exitWithUsage();
}

const label = positionals[0] ?? 'current';
const browserTypes = [chromium, webkit];

const outDir = `screenshots/${label}`;
await mkdir(outDir, {recursive: true});

for (const browserType of browserTypes) {
  const browser = await browserType.launch();
  for (const width of widths) {
    const page = await browser.newPage({viewport: {width, height: 900}});
    await page.goto(url, {waitUntil: 'networkidle'});
    const path = `${outDir}/hero-${browserType.name()}-${width}.png`;
    await page.locator('header:has(h1)').screenshot({path});
    console.log(path);
  }
  await browser.close();
}

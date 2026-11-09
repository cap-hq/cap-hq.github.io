// Renders scripts/social-card.html to the Open Graph image referenced by themeConfig.image.
// Usage: npm run social-card
import {chromium} from 'playwright';

const source = new URL('./social-card.html', import.meta.url);
const path = 'static/img/social-card.png';

const browser = await chromium.launch();
const page = await browser.newPage({viewport: {width: 1200, height: 630}});
await page.goto(source.href, {waitUntil: 'networkidle'});
await page.screenshot({path});
await browser.close();
console.log(path);

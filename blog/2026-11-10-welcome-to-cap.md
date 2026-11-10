---
slug: welcome-to-cap
title: Welcome to CAP Field Notes 👋
description: Welcome to CAP. We're building a simpler way to build, deploy, and operate modern applications, while also working toward open source.
authors: [nina,michael]
tags: [cap, open-source, kubecon, developer-experience]
hide_table_of_contents: false
---

# Welcome to CAP Field Notes

Whether you chatted with us at our booth, caught our keynote, or perhaps simply found our one-pager floating around KubeCon this year in Salt Lake City, congrats! You've officially found your way to CAP's online home. We'll be sharing a lot more about CAP as we gear up our open sourcing efforts, and by checking in over this way, you'll be the first to know.

{/* truncate */}

CAP is a fully managed, self-service platform for deploying, hosting, and managing the building blocks of modern applications: services, databases, object storage buckets, streaming topics, caches, and more.

With CAP, all you need to get started is a single container image. **The platform handles the rest.**

## The Road to Open Source

This week at KubeCon, we've announced our intent to make CAP open source. While we're excited for the challenge, it would be negligent to ignore the scope of the undertaking. We've built a fully functional platform heavily used within a complex enterprise, and while open sourcing CAP was always part of the plan, it'll take time for us to get everything ready for a future of open collaboration.

Rather than waiting to open source all of CAP at once, we're taking a deliberate approach of releasing CAP component by component. The hardest part of open sourcing will come as we move all of our internal development processes and project management to be external and fully public. As a result, each component we open source will follow the same basic trajectory: first, the code will be made available under the Apache 2.0 license but in a read-only mode; next, we'll wire up public CI and artifact hosting; finally, we'll open the doors for public contribution and move all of our project management into the appropriate publicly accessible tooling.

We're getting the ball rolling this week with the heart of CAP, its Registry API. The Registry API manages application metadata and teams, and serves as the basis for platform authentication. We'll be posting about it in more detail later this week.

We believe our incremental approach will permit us to get CAP open sourced more quickly than waiting for everything to line up. We're hopeful it will also let us solicit meaningful feedback from the community much earlier in the process.

## You May Be Early!

If you're reading this before [Wednesday's keynote](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/program/schedule/?id=1302691), you're getting a little sneak peak!

We'll be sharing much more about why we built CAP, what we've learned along the way, why we're thinking about application platforms differently in the age of AI agents, and why we believe taking CAP into the open is the right next step.

A longer version of the CAP story is also coming Wednesday to the [CVS Health Tech Blog](https://medium.com/cvs-health-tech-blog). We'll share a link here after it has been formally published. 

## While You're Here...

We'll use this site to share more of the CAP story as we go, including detailed platform architecture, design decisions, open source progress, experiments, lessons learned, and probably a few things that didn't go according to plan. Because if we're going to do this in the open, we should actually do this in the open.

- [Check out CAP on GitHub](https://github.com/cap-hq).
- If you're at KubeCon NA 2026, come say hi at the booth! We are in the Cosmic Canyon, right next to the Project Pavilion.
- Check back for more blog posts and updates this week.

Thanks for reading. We're so happy you're here!

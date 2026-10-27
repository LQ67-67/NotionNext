<div align="center">

# 🪐 Skim's Blog · liuqi.cc

**A Notion-powered personal blog — write in Notion, publish as a standalone site in one click.**

This repository is a customized fork of [NotionNext](https://github.com/notionnext-org/NotionNext). All content is managed in Notion, rendered into a high-performance static site with Next.js, and deployed on Vercel.

[![liuqi.cc](https://img.shields.io/badge/🌐-liuqi.cc-2563eb?style=for-the-badge&logo=googlechrome)](https://liuqi.cc)
[![Vercel](https://img.shields.io/badge/⚡-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)
[![GitHub](https://img.shields.io/badge/GitHub-LQ67-67-181717?style=for-the-badge&logo=github)](https://github.com/LQ67-67)
[![RSS](https://img.shields.io/badge/RSS-Feed-f4404c?style=for-the-badge&logo=rss)](https://www.liuqi.cc/rss/feed.xml)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

中文 → [README.md](./README.md)

</div>

---

## ✨ Overview

> *“Writing in Notion, publishing in one click.”*

`liuqi.cc` is the personal blog and portfolio of Skim (Qi Liu) — technical notes, life in the making, and project write-ups. Everything is authored in Notion and stays in sync with the live site automatically.

- **Custom domain**: [liuqi.cc](https://liuqi.cc)
- **Mirror deployment**: [skim67.vercel.app](https://skim67.vercel.app)
- **RSS subscription**: [rss/feed.xml](https://www.liuqi.cc/rss/feed.xml) (full-content feed)
- **Sitemap**: [sitemap.xml](https://www.liuqi.cc/sitemap.xml)
- **About**: [liuqi.cc/aboutme](https://liuqi.cc/aboutme)

## 🎨 Theme & Experience

- **EndSpace theme**: a minimal, restrained visual style that keeps the focus on content; dark mode by default, with automatic light/dark switching by time of day.
- **Responsive everywhere**: a tuned browsing experience on mobile, tablet, and desktop.
- **Multimedia touches**: background music player, typewriter greetings, Prism code highlighting, and other small details that make reading pleasant.
- **Reader interaction**: pluggable comment systems (Giscus / Cusdis / Utterances) turn posts into conversations.
- **Discoverability**: full-text search plus tag, category, and archive timelines to browse the whole archive from any angle.

## 🏗 Tech Stack

| Layer | Choice | Notes |
| --- | --- | --- |
| Framework | Next.js (React) + TypeScript | Hybrid SSR/ISR, SSG-first |
| Styling | Tailwind CSS | Utility-first CSS; themes as plugins |
| Content source | Notion API (`@notionhq/client`) | Posts, categories, tags, and menus live in Notion |
| Incremental cache | ISR (60 s revalidation) | No repeated Notion fetches per visit; updates propagate quickly |
| Deployment | Vercel CI/CD | Build on push, custom domain out of the box |
| Observability | Vercel Analytics | Anonymous, privacy-friendly stats |
| Subscription | RSS (full-content) | Standard feed, compatible with any reader |

**Configuration**: site behavior is consolidated in [blog.config.js](./blog.config.js) and the `conf/` directory (comments, analytics, images, fonts, animations, performance, and more). Every sensitive value can be overridden via environment variables, keeping config cleanly decoupled from code.

## 🖥 Local Development

```bash
# 1. Install dependencies (Node >= 22, Yarn 1)
yarn install --frozen-lockfile

# 2. Configure environment variables
cp .env.example .env    # fill in NOTION_TOKEN / NOTION_PAGE_ID, etc.

# 3. Start the dev server
yarn dev
```

| Command | Purpose |
| --- | --- |
| `yarn dev` | Start the dev server with hot reload |
| `yarn build` | Production build (CI mode) |
| `yarn test` | Run the Jest test suite |
| `yarn lint:fix` / `yarn format` | Auto-fix linting and format code |
| `yarn type-check` | TypeScript type checking |
| `yarn post-build` | Generate sitemap.xml |

## 📣 Social & Contact

| Platform | Link |
| --- | --- |
| GitHub | [LQ67-67](https://github.com/LQ67-67) |
| X / Twitter | [@67_skim](https://x.com/67_skim) |
| LinkedIn | [Qi Liu](https://www.linkedin.com/in/qiliu6677/) |
| Bilibili | [37369151](https://space.bilibili.com/37369151) |
| YouTube | [@Skim-67](https://www.youtube.com/@Skim-67) |
| Instagram | [@67_liu_qi](https://www.instagram.com/67_liu_qi) |
| More work | [bluer.site](https://www.bluer.site) |

## 📄 Acknowledgements & License

- Built on [NotionNext](https://github.com/notionnext-org/NotionNext) (MIT) — thanks to the original author [tangly1024](https://github.com/tangly1024) and community contributors.
- Site content is owned by the author; code is released under the [MIT License](./LICENSE).

MIT © [LQ67-67](https://github.com/LQ67-67)

<div align="center">

**Write in Notion, publish with Next.js — focus on the content, let the tooling handle the rest.**

</div>

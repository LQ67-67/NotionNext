<div align="center">

# 🪐 Skim's Blog · liuqi.cc

**一个由 Notion 驱动的独立博客 —— 在 Notion 中写作，一键发布为个人站点。**

本仓库是 [NotionNext](https://github.com/notionnext-org/NotionNext) 的定制分支：内容全部托管在 Notion 中管理，通过 Next.js 渲染为高性能静态站点，并部署在 Vercel 上。

[![liuqi.cc](https://img.shields.io/badge/🌐-liuqi.cc-2563eb?style=for-the-badge&logo=googlechrome)](https://liuqi.cc)
[![Vercel](https://img.shields.io/badge/⚡-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)
[![GitHub](https://img.shields.io/badge/GitHub-LQ67-67-181717?style=for-the-badge&logo=github)](https://github.com/LQ67-67)
[![RSS](https://img.shields.io/badge/RSS-Feed-f4404c?style=for-the-badge&logo=rss)](https://www.liuqi.cc/rss/feed.xml)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

**English** → [README_EN.md](./README_EN.md)

</div>

---

## ✨ 站点概览

> *“Writing in Notion, publishing in one click.”*

`liuqi.cc` 是 Skim（Qi Liu）的个人博客与作品集：技术笔记、生活记录与项目分享，全部以 Markdown/Notion 的方式写作，网站自动同步更新。

- **自定义域名**：[liuqi.cc](https://liuqi.cc)
- **镜像部署**：[skim67.vercel.app](https://skim67.vercel.app)
- **RSS 订阅**：[rss/feed.xml](https://www.liuqi.cc/rss/feed.xml)（全文推送）
- **站点地图**：[sitemap.xml](https://www.liuqi.cc/sitemap.xml)
- **关于我**：[liuqi.cc/aboutme](https://liuqi.cc/aboutme)

## 🎨 主题与体验

- **EndSpace 主题**：极简、克制的视觉风格，专注内容本身；默认深色模式，可随系统时间自动切换。
- **全平台适配**：移动端、平板、桌面端均有精心调优的浏览体验。
- **多媒体增强**：背景音乐播放器、打字机问候语、代码高亮（Prism）等细节打磨。
- **读者互动**：可选接入 Giscus / Cusdis / Utterances 等评论系统，让文章成为对话的起点。
- **可发现性**：全文搜索、标签 / 分类 / 归档时间轴，方便按任意维度浏览全部历史内容。

## 🏗 技术架构

| 层 | 选型 | 说明 |
| --- | --- | --- |
| 框架 | Next.js (React) + TypeScript | SSR / ISR 混合渲染，SSG 优先 |
| 样式 | Tailwind CSS | 原子化 CSS，主题即插件 |
| 内容源 | Notion API（`@notionhq/client`） | 文章、分类、标签、菜单全部在 Notion 中维护 |
| 增量缓存 | ISR（60s 再验证） | 访问不重复拉取 Notion，更新延迟可控 |
| 部署 | Vercel 持续集成 | Push 即构建，自动绑定自定义域名 |
| 可观测 | Vercel Analytics | 匿名统计，尊重隐私 |
| 订阅 | RSS（全文模式） | 标准 feed，兼容各类阅读器 |

**关键配置**：站点行为集中收敛于 [blog.config.js](./blog.config.js) 与 `conf/` 目录（评论、统计、图片、字体、动效、性能等），所有敏感项均可通过环境变量覆盖，配置与代码解耦。

## 🖥 本地开发

```bash
# 1. 安装依赖（Node >= 22，Yarn 1）
yarn install --frozen-lockfile

# 2. 配置环境变量
cp .env.example .env    # 填入 NOTION_TOKEN / NOTION_PAGE_ID 等

# 3. 启动开发服务器
yarn dev
```

| 命令 | 用途 |
| --- | --- |
| `yarn dev` | 本地开发，热更新 |
| `yarn build` | 生产构建（CI 模式） |
| `yarn test` | 运行 Jest 测试套件 |
| `yarn lint:fix` / `yarn format` | 代码规范修复与格式化 |
| `yarn type-check` | TypeScript 类型检查 |
| `yarn post-build` | 生成 sitemap.xml |

## 📣 社交与联系

| 平台 | 链接 |
| --- | --- |
| GitHub | [LQ67-67](https://github.com/LQ67-67) |
| X / Twitter | [@67_skim](https://x.com/67_skim) |
| LinkedIn | [Qi Liu](https://www.linkedin.com/in/qiliu6677/) |
| Bilibili | [37369151](https://space.bilibili.com/37369151) |
| YouTube | [@Skim-67](https://www.youtube.com/@Skim-67) |
| Instagram | [@67_liu_qi](https://www.instagram.com/67_liu_qi) |
| 其他作品 | [bluer.site](https://www.bluer.site) |

## 📄 致谢与许可证

- 基于 [NotionNext](https://github.com/notionnext-org/NotionNext)（MIT），感谢原作者 [tangly1024](https://github.com/tangly1024) 与社区贡献者。
- 本站内容归作者所有；代码遵循 [MIT License](./LICENSE)。

MIT © [LQ67-67](https://github.com/LQ67-67)

<div align="center">

**用 Notion 写作，用 Next.js 发布 —— 专注内容，其余交给工具。**

</div>

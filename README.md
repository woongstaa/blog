## 개인 개발 블로그 jay.log

### url

[배포링크](https://jaylog.dev)

### tech stack

- next.js
- typescript
- tailwind
- vercel

### structure

- [FSD 아키텍처](https://feature-sliced.design/kr/docs/get-started/overview)를 활용하였습니다

```
.
├── _pages
│   ├── Home.tsx
│   ├── Portfolio.tsx
│   ├── PostDetail.tsx
│   ├── PostList.tsx
│   └── index.ts
├── app
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── portfolio
│   │   └── page.tsx
│   ├── posts
│   │   ├── [category]
│   │   │   └── [id]
│   │   │       ├── layout.tsx
│   │   │       └── page.tsx
│   │   └── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── entities
│   ├── Categories.ts
│   ├── Post.ts
│   ├── Posts.ts
│   └── index.ts
├── features
│   ├── NavigateToHref.tsx
│   ├── TableOfContents.tsx
│   └── index.ts
├── shared
│   ├── MDXComponent.tsx
│   ├── PageLayout.tsx
│   ├── const.ts
│   ├── index.ts
│   ├── markdown
│   │   ├── 기록
│   │   │   ├── 1.md
│   │   │   ├── 2.md
│   │   │   ├── 3.md
│   │   │   └── 4.md
│   │   └── 회고
│   │       └── 1.md
│   ├── portfolio
│   │   └── portfolio.md
│   ├── types.ts
│   └── utils.ts
└── widgets
    ├── Footer.tsx
    ├── Header.tsx
    ├── PostItems.tsx
    ├── PostSummary.tsx
    ├── PostsCategoryNav.tsx
    ├── Profile.tsx
    ├── ScrollProgressBar.tsx
    └── index.ts
```

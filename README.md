## 개인 개발 블로그 jay.log

### url

[임시링크](https://blog-jinungs-projects.vercel.app/)

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
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── portfolio
│   │   ├── page.tsx
│   │   └── portfolio.md
│   └── posts
│       ├── [category]
│       │   └── [id]
│       │       ├── layout.tsx
│       │       └── page.tsx
│       └── page.tsx
├── entities
│   ├── Categories.ts
│   ├── Post.ts
│   ├── Posts.ts
│   └── index.ts
├── features
│   ├── NavigateToHref.tsx
│   ├── PostsCategoryNav.tsx
│   └── index.ts
├── mdx-components.tsx
├── shared
│   ├── PageLayout.tsx
│   ├── index.ts
│   ├── markdown
│   │   └── study
│   │       └── zustand.mdx
│   ├── types.ts
│   └── utils.ts
└── widgets
    ├── Footer.tsx
    ├── Header.tsx
    ├── MDXComponent.tsx
    ├── PostItemCard.tsx
    ├── PostSummary.tsx
    ├── Profile.tsx
    ├── ScrollProgressBar.tsx
    ├── TableOfContents.tsx
    └── index.ts
```

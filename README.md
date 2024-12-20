## 개인 개발 블로그 jay.log

### url

[배포링크](https://jaylog.dev)

### tech stack

- next.js
- typescript
- tailwind
- vercel

### details

블로그 개발에 대한 설명을 블로그에 기록해놓았습니다.

[Next.js 15 App Router 환경에서 블로그 만들기 (1)](https://www.jaylog.dev/posts/기록/3)
[Next.js 15 App Router 환경에서 블로그 만들기 (2)](https://www.jaylog.dev/posts/기록/4)

### structure

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
│   │   └── 회고
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

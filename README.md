## 개인 개발 블로그 jay.log

jay.log는 **Next.js 15 App Router**와 **TypeScript**를 기반으로 구축한 개인 기술 블로그입니다.  
MDX 기반 포스팅, 카테고리별 분류, 테이블오브컨텐츠(TOC) 등 **문서 중심** 기능을 구현했으며,  
**Tailwind CSS**로 반응형 UI를 구성했습니다.

### tech stack

- next.js
- typescript
- tailwind
- vercel

### feature

- MDX 문법으로 글을 작성할 수 있음
- 테이블 오브 컨텐츠(TableOfContents)로 스크롤 위치에 따라 현재 섹션을 강조
- 카테고리 분류 및 카테고리 네비게이션
- Next.js App Router 사용
- Tailwind로 반응형 UI 구현
- SEO 최적화 (robots.ts, sitemap.ts 등)
- Vercel로 CI/CD 구축

### blog preview & link
<img width="2007" alt="스크린샷 2024-12-26 오후 5 06 18" src="https://github.com/user-attachments/assets/d2143b94-1f83-4743-b264-98cb22bc8c63" />
<img width="2011" alt="스크린샷 2024-12-26 오후 5 06 38" src="https://github.com/user-attachments/assets/e9fa9d36-d6ee-4b05-9fd6-a12476b66954" />

[배포링크](https://jaylog.dev)

### posts

블로그 개발에 대한 설명을 블로그에 기록해놓았습니다.

[Next.js 15 App Router 환경에서 블로그 만들기 (1)](https://www.jaylog.dev/posts/기록/3)

[Next.js 15 App Router 환경에서 블로그 만들기 (2)](https://www.jaylog.dev/posts/기록/4)

### structure

```
.
├── _pages # 실제 페이지 레이어
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

### roadmap

- [ ] 리스트 페이지네이션
- [ ] 댓글 기능
- [ ] 검색 기능
- [ ] 라이트 / 다크 모드 지원

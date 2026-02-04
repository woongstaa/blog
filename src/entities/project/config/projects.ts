import { Project } from '../model/types';

export const PROJECTS: Project[] = [
  {
    id: 'dangol-money',
    title: '단골머니 2.0',
    company: '1인치',
    period: '2025.06 - 2025.08',
    description: 'React Native 기반 지갑/충전/차감/내역/공유모임 UX 개선',
    techStack: ['React Native', 'React Query', 'Zustand', 'TypeScript'],
    achievements: ['성공적인 서비스 런칭 (v3.0.0)', '프론트엔드 2인 중 70% 구현 주도'],
    metrics: [
      { label: '구현 기여도', value: '70%' },
      { label: '개발 기간', value: '3개월' }
    ],
    detailedDescription: `단골머니 2.0은 기존 서비스의 피보팅으로 "바코드 머니"라는 프랜차이즈 할인 결제 서비스를 추가하고, 기존 서비스의 UI / UX 개선을 위한 대규모 리뉴얼 프로젝트였습니다.

프로젝트에서 지갑 / 충전 / 차감 / 내역 / 공유모임 전반의 UX 개선과 안정화를 수행했습니다.

특히 단골머니라는 현금으로 충전하는 가상재화를 관리하기 때문에 유저에게 보여지는 단골머니의 상태관리가 중요하여 페이지 간 머니상태 불일치가 발생하지 않도록 작업하였으며, React Query를 이용해 불필요한 네트워크 요청을 최소화하고, 상태 일관성을 확보했습니다.

비록 해당 프로젝트 완료 후 경영사정 악화로 정리해고 되었지만, 뚜렷한 성과를 만들어냈습니다.`,
    challenges: ['React Query 쿼리키 중복으로 인한 상태 불일치', '간헐적인 안드로이드 결제 실패', '결제/차감 플로우에서 발생했던 중복 요청 문제', 'Android 15 Edge-to-Edge 디스플레이 대응', '결제 웹뷰 보안 강화 필요', '기존 코드베이스 마이그레이션'],
    solutions: ['QueryKey를 도메인별로 객체로 묶어 일정한 패턴으로 체계화', '백엔드에서 제공하는 Webview url을 header에서 받아 리다이렉트하는 대신 body에 담아 명확하게 받아서 PG사 웹뷰 렌더링 ', 'useRef를 활용해 리렌더링이 되더라도 함수가 재실행 되지 않도록 커스텀훅 생성', 'SafeAreaInsets를 활용해 Android SDK 버전 기준 분기하여 UI 적응', '앱스킴 및 화이트리스트 기반 웹뷰 보안 강화', 'Text, Spacing, Tabs, Button 같은 재사용할수 있는 작은 단위의 컴포넌트들을 만들어 작업시간을 단축시켰습니다.'],
    results: ['단골머니 2.0 성공적인 서비스 런칭 (v3.0.0)', '단골머니 상태 값 불일치 이슈 100% 해결', 'Android 15 호환성 확보'],
    links: {
      homepage: 'https://www.danngol.com/',
      appStore: 'https://apps.apple.com/kr/app/%EB%8B%A8%EA%B3%A8%EA%B0%80%EA%B2%8C/id1588177241?platform=iphone'
    }
  },
  {
    id: 'babygo-market',
    title: '애가마켓',
    company: '애기야가자',
    period: '2022.07 - 2024.10',
    description: 'Next.js 기반 SSR 설계와 SEO 최적화 상품 판매 채널 구축',
    techStack: ['Next.js', 'React', 'TypeScript', 'React Query', 'Zustand'],
    achievements: ['FSD + 컴파운드 컴포넌트 적용', 'Lighthouse SEO 100점 달성', '메타/OG 태그 동적 삽입 자동화', '프론트엔드 2인 중 80% 구현 주도'],
    metrics: [
      { label: 'SEO 점수', value: '100' },
      { label: 'Performance', value: '90' },
      { label: '구현 기여도', value: '80%' }
    ],
    detailedDescription: `애가마켓은 기존 네이버 스마트 스토어로 운영하던 자사몰 서비스를 인앱 및 웹에서 이용할 수 있도록 만든 서비스로, Next.js 기반 SSR 설계와 SEO 최적화로 웹/앱(Webview) 통합 상품 판매 채널을 구축했습니다.

FSD 아키텍처와 컴파운드 컴포넌트를 적용하여 재사용성을 향상시키고 개발 리드타임을 단축했으며, Lighthouse SEO 100점, Best Practices 96점, Performance(데스크탑) 90점을 달성하여 검색 엔진 최적화와 성능을 모두 확보했습니다.`,
    challenges: ['SEO 최적화와 성능 양립', '앱에서 애가마켓 웹뷰를 경유한 결제 플로우', 'Next.js App route 방식으로 페이지 구현'],
    solutions: ['Next.js SSR을 통해 SEO 최적화 및 이미지 Lazy Loading을 통해 성능 개선', 'onMessage 이벤트를 통해 웹뷰와 앱간의 데이터를 주고받아 별도의 앱 내부 결제 페이지로 네비게이션 시키도록 기능 작업', 'FSD 아키텍처로 관심사 분리 및 Server/Client component 구분하여 구현'],
    results: ['Lighthouse SEO 100점, Best Practices 96점, Performance(데스크탑) 90점을 달성', '이미지 Lazy Loading으로 페이지 로딩 속도 50% 개선'],
    links: {
      homepage: 'https://babygo.kr/store'
    }
  },
  {
    id: 'babygo-app',
    title: '애기야가자 v2.0',
    company: '애기야가자',
    period: '2022.07 - 2024.10',
    description: 'React Native 기반 FSD 아키텍처 및 디자인 시스템 도입',
    techStack: ['React Native', 'TypeScript', 'React Query', 'Recoil'],
    achievements: ['FSD 아키텍처 기반 모듈화', '컴파운드 컴포넌트 헤드리스 디자인 시스템', '위치기반 구글 지도 API 장소 소개 기능', '프론트엔드 3인 중 60% 구조 개선 주도'],
    metrics: [
      { label: 'MAU', value: '100K' },
      { label: 'DAU', value: '3K' },
      { label: '구현 기여도', value: '60%' }
    ],
    detailedDescription: `애기야가자 v2.0은 기존 앱의 전면적인 리뉴얼 프로젝트로, React Native 기반 FSD 아키텍처 및 디자인 시스템을 도입하여 유지보수성과 앱 UX 품질 일관성을 확보했습니다.

FSD 아키텍처 기반 모듈화 및 단방향 의존성 구조를 설계하여 코드의 가독성과 확장성을 크게 개선했으며, 컴파운드 컴포넌트를 활용한 재사용 가능한 헤드리스 디자인 시스템을 구축하여 개발 효율성과 사용자 경험을 동시에 향상시켰습니다.

MAU 100,000명, DAU 3,000명 규모의 서비스에서 안정적인 성능과 사용자 경험을 제공하고 있습니다.`,
    challenges: ['Legacy 코드베이스 마이그레이션', 'Google Maps API 성능 최적화', '일관된 디자인 시스템 구축'],
    solutions: ['FSD 아키텍처로 점진적 마이그레이션', 'Maps Clustering과 Lazy Loading', '컴파운드 컴포넌트 기반 시스템'],
    results: ['MAU 100K 달성', 'DAU 3K 안정적 유지', '앱 크래시율 90% 감소', '개발 속도 60% 향상'],
    links: {
      homepage: 'https://babygo.kr/',
      appStore: 'https://apps.apple.com/kr/app/%EC%95%A0%EA%B8%B0%EC%95%BC%EA%B0%80%EC%9E%90-%ED%82%A4%EC%A6%88-%EC%97%AC%ED%96%89-%EB%86%80%EC%9D%B4-%ED%95%AB%ED%94%8C-%EC%A0%95%EB%B3%B4-%EC%9C%A1%EC%95%84%EC%95%B1/id1479205228'
    }
  },
  {
    id: 'api-docs',
    title: 'API 문서화 체계',
    company: '애기야가자',
    period: '2022.07 - 2024.10',
    description: 'Swagger/OpenAPI와 Orval로 명세 우선 협업 표준화',
    techStack: ['Swagger', 'OpenAPI', 'Orval', 'TypeScript'],
    achievements: ['Swagger 기반 API 명세 자동화 체계', 'Orval로 요청 함수/타입 자동 생성', 'GitHub-Slack 연동 PR/배포 알림', '명세 불일치 이슈 감소로 핸드오프 품질 개선'],
    metrics: [
      { label: '타입 안정성', value: '100%' },
      { label: '반복 작업 감소', value: '80%' }
    ],
    detailedDescription: `API 문서화 체계는 프론트엔드-백엔드 협업의 효율성을 극대화하기 위한 개발 인프라 구축 프로젝트였습니다.

Swagger(OpenAPI) 기반 API 명세 자동화 체계를 구축하여 명세 우선 협업을 표준화하였으며, Orval을 활용해 요청 함수와 타입을 자동 생성함으로써 타입 세이프티를 강화하고 반복적인 작업을 크게 줄였습니다. 또한 GitHub-Slack 연동을 통한 PR/배포 알림 시스템을 구축하여 협업 속도를 향상시켰습니다.

API 명세와 실제 구현 간의 불일치 문제를 해결하여 핸드오프 품질을 개선하고, 팀 간 커뮤니케이션 효율성을 크게 높였으며, 이를 통해 개발자 만족도가 대폭 상승하고 전체적인 개발 생산성이 향상되었습니다.`,
    challenges: ['API 명세와 실제 구현의 불일치', '반복적인 타입 정의 작업', '팀 간 커뮤니케이션 비효율', 'API 변경사항 추적의 어려움'],
    solutions: ['Swagger 기반 명세 우선 개발 도입', 'Orval을 통한 타입/함수 자동 생성', 'GitHub-Slack 연동 자동 알림', 'Version 관리와 변경사항 추적'],
    results: ['API 타입 안정성 100% 확보', '반복 작업 80% 감소', '핸드오프 품질 현저한 개선', '개발자 만족도 대폭 상승']
  }
];

export const TECH_STACKS = {
  frontend: ['React', 'React Native', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  state: ['React Query', 'Recoil', 'Zustand'],
  devops: ['Git', 'GitHub Actions', 'AWS']
};

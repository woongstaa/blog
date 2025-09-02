import { Project } from '@/entities/Project';

export const PROJECTS: Project[] = [
  {
    id: 'dangol-money',
    title: '단골머니 2.0',
    company: '1인치',
    period: '2025.06 - 2025.08',
    description: 'React Native 기반 지갑/충전/차감/내역/공유모임 UX 개선',
    techStack: ['React Native', 'React Query', 'TypeScript'],
    achievements: ['React Query 쿼리키 재설계로 상태 불일치 제거', '결제 웹뷰 화이트리스트 강화', 'Android 15 Edge-to-Edge 대응', '프론트엔드 2인 중 70% 구현 주도'],
    metrics: [
      { label: '구현 기여도', value: '70%' },
      { label: '개발 기간', value: '3개월' }
    ],
    detailedDescription: `단골머니 2.0은 기존 서비스의 UX 개선을 위한 대규모 리뉴얼 프로젝트였습니다. 
    특히 React Query의 쿼리키 재설계를 통해 상태 불일치 문제를 해결하고, 
    Android 15의 새로운 Edge-to-Edge 디스플레이에 대응했습니다.`,
    challenges: ['React Query 쿼리키 중복으로 인한 상태 불일치', 'Android 15 Edge-to-Edge 디스플레이 대응', '결제 웹뷰 보안 강화 필요', '기존 코드베이스 마이그레이션'],
    solutions: ['QueryKey Factory 패턴으로 쿼리키 체계화', 'SafeAreaView와 insets를 활용한 UI 적응', '화이트리스트 기반 웹뷰 보안 강화', '단계적 마이그레이션과 테스트 자동화'],
    results: ['상태 불일치 이슈 100% 해결', 'Android 15 호환성 확보', '보안 취약점 0건 달성', '개발 생산성 40% 향상'],
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
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    achievements: ['FSD + 컴파운드 컴포넌트 적용', 'Lighthouse SEO 100점 달성', '메타/OG 태그 동적 삽입 자동화', '프론트엔드 2인 중 80% 구현 주도'],
    metrics: [
      { label: 'SEO 점수', value: '100' },
      { label: 'Performance', value: '90' },
      { label: '구현 기여도', value: '80%' }
    ],
    detailedDescription: `애가마켓은 유아용품 전문 이커머스 플랫폼으로, Next.js의 SSR을 활용한 SEO 최적화와 
    FSD 아키텍처를 통한 확장 가능한 구조를 구현했습니다.`,
    challenges: ['SEO 최적화와 성능 양립', '복잡한 상품 필터링 로직', '반응형 디자인 구현', '상태 관리의 복잡성'],
    solutions: ['Next.js SSR과 ISR 전략적 활용', '컴파운드 컴포넌트로 필터 UI 모듈화', 'Tailwind CSS 기반 반응형 시스템', 'FSD 아키텍처로 관심사 분리'],
    results: ['Lighthouse SEO 100점 달성', '페이지 로딩 속도 50% 개선', '모바일 전환율 25% 증가', '코드 재사용성 80% 향상'],
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
    techStack: ['React Native', 'TypeScript', 'Google Maps API'],
    achievements: ['FSD 아키텍처 기반 모듈화', '컴파운드 컴포넌트 헤드리스 디자인 시스템', '위치기반 구글 지도 API 장소 소개 기능', '프론트엔드 3인 중 60% 구조 개선 주도'],
    metrics: [
      { label: 'MAU', value: '100K' },
      { label: 'DAU', value: '3K' },
      { label: '구현 기여도', value: '60%' }
    ],
    detailedDescription: `애기야가자 v2.0은 기존 앱의 전면적인 리뉴얼로, FSD 아키텍처와 
    헤드리스 디자인 시스템을 도입하여 개발 효율성과 사용자 경험을 크게 개선했습니다.`,
    challenges: ['Legacy 코드베이스 마이그레이션', 'Google Maps API 성능 최적화', '일관된 디자인 시스템 구축', 'iOS/Android 플랫폼별 대응'],
    solutions: ['FSD 아키텍처로 점진적 마이그레이션', 'Maps Clustering과 Lazy Loading', '컴파운드 컴포넌트 기반 시스템', 'Platform-specific 컴포넌트 분리'],
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
    detailedDescription: `API 문서화 체계는 프론트엔드-백엔드 협업의 효율성을 극대화하기 위한 
    개발 인프라 구축 프로젝트였습니다. Swagger 명세 기반의 자동화된 워크플로우를 구축했습니다.`,
    challenges: ['API 명세와 실제 구현의 불일치', '반복적인 타입 정의 작업', '팀 간 커뮤니케이션 비효율', 'API 변경사항 추적의 어려움'],
    solutions: ['Swagger 기반 명세 우선 개발 도입', 'Orval을 통한 타입/함수 자동 생성', 'GitHub-Slack 연동 자동 알림', 'Version 관리와 변경사항 추적'],
    results: ['API 타입 안정성 100% 확보', '반복 작업 80% 감소', '핸드오프 품질 현저한 개선', '개발자 만족도 대폭 상승']
  }
];

export const TECH_STACKS = {
  frontend: ['React', 'React Native', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  state: ['React Query', 'Recoil', 'Zustand'],
  devops: ['Git', 'GitHub Actions', 'AWS', 'Swagger']
};

import { Project } from '../model/types';

export const PROJECTS: Project[] = [
  {
    id: 'maum-ad-sdk',
    title: '마음 앱 - 광고 SDK 네이티브 결함 분석',
    company: '라이프오아시스',
    period: '2025.09 - 2026.09',
    description: '외부 SDK의 대응을 기다리지 않고 Android·iOS 네이티브 코드를 직접 분석·패치해 앱 안정성 회복',
    techStack: ['React Native', 'Android', 'iOS', 'patch-package', 'Sentry'],
    achievements: ['ANR 73%·비정상 종료 71% 감소', 'Android·iOS 네이티브 패치 1,200줄을 patch-package로 관리'],
    metrics: [
      { label: 'ANR 감소', value: '73%' },
      { label: '비정상 종료 감소', value: '71%' }
    ],
    detailedDescription: `누적 이용자 800만 규모의 앱에서 Play Console ANR 1·2위 스택을 추적해, 화면에서 분리(detach)된 광고 뷰에 SDK가 메인 스레드 작업을 상한 없이 쌓다가 재부착 시 일괄 실행하며 멈추는 원인을 규명했습니다.

SDK 바이너리 내부라 수정할 수 없는 부분은 네이티브 컨테이너가 detach 후 지연 해제하도록 패치해 우회했고, 배너 부착 시 레이아웃 이벤트 연쇄와 광고 미충전 시 무한 로드 문제도 함께 차단했습니다.

React Native 업그레이드(New Architecture·targetSdk 35) 이후 급증한 크래시는 LiveKit 통화 종료 뒤에도 이벤트를 내보내던 경로에서 찾아 종료 가드로 60% 이상 줄였고, 파일·라인 단위 원인 분석을 문서화해 재발을 막았습니다.`,
    challenges: ['광고 뷰 detach 후 메인 스레드 작업이 누적되어 재부착 시 ANR 발생', 'SDK 바이너리 내부 코드라 직접 수정 불가', 'RN 업그레이드 이후 급증한 크래시', 'SDK 버전이 올라가면 패치가 유실되는 문제'],
    solutions: [
      '네이티브 컨테이너가 detach 후 지연 해제하도록 패치해 우회',
      '배너 측정·레이아웃 1회로 축소, 화면 전환이 끝난 뒤 부착',
      'LiveKit 통화 종료 뒤 이벤트 경로에 종료 가드 추가',
      'Android·iOS 패치 1,200줄을 patch-package로 관리해 재적용',
      'Sentry 이벤트 스크러버로 인증 헤더·민감 입력값 마스킹'
    ],
    results: ['ANR 73% 감소', '비정상 종료 71% 감소', 'RN 업그레이드 크래시 60% 이상 감소'],
    links: {
      appStore: 'https://play.google.com/store/apps/details?id=land.lifeoasis.maum'
    }
  },
  {
    id: 'maum-fsd',
    title: '마음 앱 - 레거시 구조의 FSD 단계적 전환',
    company: '라이프오아시스',
    period: '2025.09 - 2026.09',
    description: '5년 된 레거시 앱의 코드 약 60%를 출시 중단 없이 FSD로 이전',
    techStack: ['React Native', 'TypeScript', 'FSD', 'TanStack Query', 'Zustand', 'Jest'],
    achievements: ['출시 중단 없이 도메인 단위 점진 이전, 전환 기간 앱·웹 출시 122회 병행', '이전 단위마다 테스트를 같은 PR에 붙여 단위 테스트 90여 개 확보'],
    metrics: [
      { label: 'FSD 이전 비율', value: '60%' },
      { label: '전환 중 출시', value: '122회' },
      { label: '단위 테스트', value: '90+' }
    ],
    detailedDescription: `레이어 구분이 없던 앱에 FSD 레이어를 처음부터 설계·도입하고, 서비스를 계속 배포하면서 도메인 단위로 점진 이전했습니다.

화면마다 복제된 로직을 공용 모듈 80여 개로 추출하고, 여러 플래그로 흩어진 앱 시작·로그인 상태를 단일 흐름으로 통합했습니다.

도메인을 이전할 때마다 모델·스토어 단위 테스트를 같은 PR에 함께 붙여 90여 개를 확보했고, 테스트 없는 이전은 하지 않는 원칙으로 전환 중 회귀를 막았습니다.`,
    challenges: ['레이어 구분 없이 5년간 쌓인 코드베이스', '전환 중에도 매주 출시를 멈출 수 없는 상황', '화면마다 복제된 로직과 흩어진 앱 시작·로그인 상태'],
    solutions: ['도메인 단위 점진 이전으로 출시와 전환을 병행', '공용 모듈 80여 개 추출, 앱 시작·로그인 상태를 단일 흐름으로 통합', '이전 단위마다 Jest·RNTL 단위 테스트를 같은 PR에 포함'],
    results: ['레거시 코드 약 60% FSD 이전 (코드 줄 수 기준)', '전환 기간 앱·웹 출시 122회', '단위 테스트 90여 개 확보']
  },
  {
    id: 'maum-onboarding',
    title: '마음 앱 - 신규 유저 온보딩 튜토리얼',
    company: '라이프오아시스',
    period: '2026.08',
    description: '신규 유저가 핵심 기능을 발견하지 못하고 이탈하는 문제를 직접 발굴해 기획 초안부터 출시까지 담당',
    techStack: ['React Native', 'TypeScript', 'Jest'],
    achievements: ['무료 체험 기능의 신규 유저 사용률 한국·일본 전 세그먼트에서 6배 이상 상승', '재설치 악용을 서버 상태 기준으로 차단해 초과 지급 0건'],
    metrics: [
      { label: '신규 유저 사용률', value: '6배↑' },
      { label: '초과 지급', value: '0건' }
    ],
    detailedDescription: `"부담이 낮은 기능부터 → 유료 기능은 무료로 한 번 → 통화는 안내만"이라는 순서 원칙을 세우고, 결정 항목·리스크·출시 기준을 담은 기획 초안을 작성해 PO·디자이너와 확정했습니다.

재설치로 무료 체험을 반복 수령하는 악용을 서버 상태 기준으로 차단했고, 단계 전이·매핑 로직은 Jest로 검증했습니다. 무료 체험 미제공 국가를 대조군으로 두어 효과를 검증했습니다.`,
    challenges: ['신규 유저가 핵심 기능을 발견하지 못하고 이탈', '재설치로 무료 체험을 반복 수령하는 악용 가능성', '효과를 어떻게 검증할 것인가'],
    solutions: ['단계 순서 원칙을 세우고 기획 초안을 직접 작성해 PO·디자이너와 확정', '무료 체험 지급을 서버 상태 기준으로 판단', '무료 체험 미제공 국가를 대조군으로 비교'],
    results: ['무료 체험 기능 신규 유저 사용률 6배 이상 상승', '초과 지급 0건, 단계 순서를 건너뛴 완료 0건']
  },
  {
    id: 'ficchat-payment',
    title: '픽챗 웹 - 결제·본인인증',
    company: '라이프오아시스',
    period: '2026.03 - 2026.07',
    description: 'AI 캐릭터챗 웹 서비스에 토스페이먼츠 결제 플로우와 PG 본인인증 게이트 구축',
    techStack: ['Next.js 15', 'TanStack Query', 'TossPayments', 'MSW', 'Playwright', 'Vitest'],
    achievements: ['서버 승인 후에만 성공 화면을 보여주도록 설계해 금액 위변조·미승인 결제 차단', 'MSW 목 서버 위에서 핵심 경로 10개를 Playwright E2E로 자동 검증'],
    metrics: [
      { label: 'E2E 핵심 경로', value: '10' },
      { label: '투입 기간', value: '4개월' }
    ],
    detailedDescription: `토스페이먼츠 v2 결제위젯을 연동해 재화 결제 플로우를 구축했습니다. 클라이언트가 만들던 주문 ID를 서버 생성으로 옮기고, 결제 인증 후 서버 승인이 끝나야만 성공 화면을 보여주도록 설계해 금액 위변조·미승인 결제를 차단했습니다.

재화 부족(HTTP 402) 응답을 에러 코드 상수로 중앙화하고, 에러 토스트 대신 구매 바텀시트로 연결해 결제 전환 경로를 확보했습니다. 성인 콘텐츠 제작 시 PG 본인인증(PASS)을 요구하는 게이트는 인증 팝업과 메인 탭을 postMessage로 연결해 구현했습니다.

서버 API가 준비되기 전에도 검증이 돌도록 MSW 목 서버를 구축하고, 결제·본인인증·게스트 로그인·SSE 토큰 갱신 등 핵심 경로를 Playwright E2E로, 결제 승인·본인인증 상태 로직은 Vitest 단위 테스트로 고정했습니다.`,
    challenges: ['클라이언트 주문 ID 생성으로 인한 금액 위변조 가능성', '결제 실패·이탈 경로 처리', '서버 API 준비 전 프론트 검증'],
    solutions: ['주문 생성을 서버로 옮기고 서버 승인 후에만 성공 화면 노출', '실패 코드별 안내와 결제 후 원래 화면 복귀 처리', 'MSW 목 서버 + Playwright E2E + Vitest 단위 테스트'],
    results: ['금액 위변조·미승인 결제 차단', '핵심 경로 10개 자동 검증', '재화 부족 시 결제 전환 경로 확보'],
    links: {
      homepage: 'https://ficchat.app'
    }
  },
  {
    id: 'team-standards',
    title: '팀 표준 · Claude Code 플러그인',
    company: '라이프오아시스',
    period: '2026.07 - 재직 중',
    description: '프론트엔드 리드로서 팀과 합의한 규약을 AI 개발 도구에 내장해 배포',
    techStack: ['Claude Code', 'TypeScript 7', 'GitHub Actions'],
    achievements: ['프론트엔드 4명과 6주간 합의한 표준을 Claude Code 스킬·리뷰 에이전트로 배포', 'TypeScript 7 타입 검사 병행 도입: 타입 오류 152건 해소, 검사 7.4초 → 1.2초'],
    metrics: [
      { label: '타입 검사', value: '7.4s → 1.2s' },
      { label: '빌드 시간', value: '6분 → 1~3분' }
    ],
    detailedDescription: `사내 프론트엔드 표준(아키텍처·코딩 컨벤션·리뷰 기준)을 프론트엔드 개발자 4명과 6주간 정기 미팅·GitHub 논의로 합의했습니다.

합의한 표준을 Claude Code 플러그인(스킬·리뷰 에이전트)으로 배포해, 누구든 같은 기준으로 코드를 작성하고 1차 리뷰를 받도록 구성했습니다. 좋은 기준은 혼자 지키는 것이 아니라 팀의 기본값이 되어야 한다고 생각합니다.

TypeScript 7(네이티브 컴파일러) 타입 검사를 기존 검사와 병행 도입해 누적 타입 오류 152건을 해소하고 미사용 코드 900여 줄을 제거했으며, 네이티브 빌드 캐시를 도입해 빌드 시간을 줄였습니다.`,
    challenges: ['개발자마다 다른 아키텍처·컨벤션 해석', '문서로만 존재하는 규약은 지켜지지 않음', '느린 타입 검사와 네이티브 빌드'],
    solutions: ['6주간 정기 미팅·GitHub 논의로 표준 합의', '규약을 Claude Code 스킬·리뷰 에이전트로 코드화', 'TypeScript 7 병행 도입, 네이티브 빌드 캐시 도입'],
    results: ['팀 표준 플러그인 배포', '타입 오류 152건 해소, 검사 시간 7.4초 → 1.2초', '빌드 시간 6분 이상 → 1~3분']
  },
  {
    id: 'dangol-money',
    title: '단골머니 2.0',
    company: '1인치',
    period: '2025.06 - 2025.08',
    description: '지갑·결제·차감·내역·공유모임 전반의 UI·UX 개선과 안정화',
    techStack: ['React Native', 'TanStack Query', 'Zustand', 'TypeScript'],
    achievements: ['결제·차감 중복 요청 차단으로 이중 처리와 CS 비용 축소', 'Android WebView PG 결제 페이지 렌더링 문제 해결'],
    metrics: [{ label: '개발 기간', value: '3개월' }],
    detailedDescription: `단골머니 2.0은 기존 서비스의 피보팅으로 "바코드머니"라는 프랜차이즈 할인 결제 서비스를 추가하고, 기존 서비스의 UI·UX를 개선한 리뉴얼 프로젝트였습니다.

현금으로 충전하는 가상재화를 다루기 때문에 페이지 간 잔액 불일치가 생기지 않도록 쿼리 키를 도메인별 객체 키로 정규화하고 갱신 로직을 커스텀 훅으로 표준화했습니다. 결제·차감 버튼 연타로 발생하던 중복 요청은 커스텀 훅으로 차단했습니다.`,
    challenges: ['페이지 간 잔액 불일치', 'Android WebView에서 PG 결제 페이지가 뜨지 않는 문제', '결제·차감 플로우의 중복 요청', 'Android 15 Edge-to-Edge로 핵심 CTA가 시스템 UI와 겹침'],
    solutions: ['쿼리 키를 도메인별 객체 키로 정규화, 갱신 로직을 커스텀 훅으로 표준화', '응답 URL 의존을 응답 본문 직접 로드 방식으로 전환', '중복 요청 차단 커스텀 훅', 'Safe Area Insets 대응 컴포넌트', 'Tab·Button·Label 등 디자인 시스템 컴포넌트를 헤드리스·토큰 기반으로 경량화'],
    results: ['단골머니 2.0 서비스 오픈', '페이지 간 잔액 불일치 해소', 'Android 15 호환성 확보'],
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
    description: '네이버 스토어 자사몰을 Next.js SSR 기반 웹·앱(WebView) 판매 채널로 구축',
    techStack: ['Next.js 14', 'React Native', 'TanStack Query', 'Zustand', 'Tailwind'],
    achievements: ['Lighthouse SEO 100 달성', 'WebView ↔ React Native 결제 네비게이션 연동'],
    metrics: [
      { label: 'SEO 점수', value: '100' },
      { label: 'Performance', value: '90' }
    ],
    detailedDescription: `애가마켓은 네이버 스마트 스토어로 운영하던 자사몰의 이탈률을 낮추고 앱 활성화를 유도하기 위해 만든 웹·앱(WebView) 판매 채널입니다.

Next.js 14(App Router) 기반 SSR과 Server/Client 컴포넌트 분리, 도메인 단위 폴더 구조로 확장성과 재사용성을 확보했고, 외부 라이브러리는 어댑터 레이어로 감싸 의존성을 최소화했습니다. 페이지별 동적 metadata·Open Graph 구성으로 Lighthouse SEO 100을 달성했습니다.`,
    challenges: ['SEO 최적화와 성능 양립', '앱에서 WebView를 경유한 결제 플로우', 'Next.js App Router 기반 페이지 구현'],
    solutions: ['SSR과 동적 metadata·Open Graph 구성', 'WebView ↔ React Native message 이벤트로 결제 네비게이션 구현', 'Server/Client 컴포넌트 분리, 외부 라이브러리 어댑터 레이어'],
    results: ['Lighthouse SEO 100, Best Practices 96, Performance(데스크탑) 90'],
    links: {
      homepage: 'https://babygo.kr/store'
    }
  },
  {
    id: 'babygo-app',
    title: '애기야가자 앱',
    company: '애기야가자',
    period: '2022.07 - 2024.10',
    description: 'MAU 100,000 키즈/육아 앱의 신규 기능 개발과 도메인·레이어 기준 점진 리팩토링',
    techStack: ['React Native', 'TypeScript', 'TanStack Query'],
    achievements: ['Google Maps 지도 컴포넌트 훅 캡슐화, 클러스터링·부분 렌더링 적용', '딥링크 라우팅 개선으로 비개발자도 어드민에서 직접 딥링크 생성'],
    metrics: [
      { label: 'MAU', value: '100K' },
      { label: 'DAU', value: '3K' }
    ],
    detailedDescription: `도메인·레이어 기준으로 점진 리팩토링해 중복·비결정적 로직을 해소하고 변경 비용을 줄였습니다.

Google Maps API 기반 지도 컴포넌트를 훅으로 캡슐화하고 클러스터링·부분 렌더링을 적용해 성능과 재사용성을 개선했습니다. 스키마 URL·쿼리 파라미터 기반 딥링크 라우팅을 개선해 비개발자도 어드민에서 직접 딥링크를 만들 수 있게 했고, 리뷰·프로필 이미지 업로드를 AWS S3 pre-signed URL 방식으로 전환했습니다.`,
    challenges: ['중복·비결정적 로직이 흩어진 레거시 코드베이스', 'Google Maps 성능', '딥링크 생성이 개발자에게 집중되어 소통 비용 발생', '이미지 업로드 지연·실패'],
    solutions: ['도메인·레이어 기준 점진 리팩토링', '지도 컴포넌트 훅 캡슐화, 클러스터링·부분 렌더링', '스키마 URL·쿼리 파라미터 기반 딥링크 라우팅 개선', 'AWS S3 pre-signed URL 업로드 전환'],
    results: ['변경 비용 축소', '비개발자 딥링크 생성으로 유입 이벤트 소통 비용 절감', '업로드 지연·실패 축소'],
    links: {
      homepage: 'https://babygo.kr/',
      appStore: 'https://apps.apple.com/kr/app/%EC%95%A0%EA%B8%B0%EC%95%BC%EA%B0%80%EC%9E%90-%ED%82%A4%EC%A6%88-%EC%97%AC%ED%96%89-%EB%86%80%EC%9D%B4-%ED%95%AB%ED%94%8C-%EC%A0%95%EB%B3%B4-%EC%9C%A1%EC%95%84%EC%95%B1/id1479205228'
    }
  },
  {
    id: 'api-docs',
    title: '업무 프로세스 개선 및 API 문서화',
    company: '애기야가자',
    period: '2022.07 - 2024.10',
    description: 'OAS(YAML) 기반 사전 합의와 Orval 자동 생성으로 명세 불일치 문제 해결',
    techStack: ['OpenAPI', 'Orval', 'GitHub Actions', 'TypeScript'],
    achievements: ['기능 단위 PR과 OAS 사전 합의 후 병합하는 협업 프로세스 정착', 'GitHub Actions·Orval 파이프라인으로 요청 함수·타입 자동 생성'],
    detailedDescription: `백엔드 개발자와 협업 시 발생하던 명세 불일치 문제를 해결하기 위한 협업 프로세스 개선이었습니다.

기능 단위 PR과 OAS(YAML) 기반 사전 합의 후 메인 브랜치에 병합하는 프로세스를 정착시켰고, GitHub Actions·Orval 파이프라인으로 프론트엔드 요청 함수와 타입 인터페이스를 자동 생성했습니다. GitHub–Slack 연동으로 PR 스레드 히스토리를 축적해 비참여자도 빠르게 온보딩할 수 있게 했습니다.`,
    challenges: ['API 명세와 실제 구현의 불일치', '반복적인 타입 정의 작업', 'PR 논의 히스토리가 흩어짐'],
    solutions: ['OAS(YAML) 기반 사전 합의 후 병합', 'Orval로 요청 함수·타입 자동 생성', 'GitHub–Slack 연동으로 PR 스레드 축적'],
    results: ['명세 불일치로 인한 재작업 감소', '요청 함수·타입 수동 작성 제거', '비참여자 온보딩 속도 향상']
  }
];

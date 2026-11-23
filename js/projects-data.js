const PROJECTS = {
  maru: {
    title: "MY서울루틴",
    titleEn: "Maru",
    category: "해커톤 프로젝트",
    periodLabel: "2026.10 – 2026.11 · 팀 프로젝트",
    award: "2026 청년취업사관학교 해커톤 장려상",
    description:
      "고립·은둔 직전의 서울 청년이 AI가 맞춰 주는 작은 미션으로 일상을 되찾고, 익명 응원과 지지 속에서 다시 사람과 이어지도록 돕는 일상 루틴 추천 서비스입니다. 서울 청년 정책 프로그램으로 이어 주는 다음 단계는 365 서울챌린지 청년 트랙으로 제안했습니다. 2026 청년취업사관학교 해커톤에서 기획 1명, 개발 2명으로 구성된 팀의 개발을 맡았으며, AI 코딩 도구와 협업해 명세 중심(OpenSpec)으로 개발했습니다.",
    tags: ["Expo", "TypeScript", "Supabase", "Gemini API", "OpenSpec"],
    contributions: [
      "Expo 기반 웹·모바일 앱 개발 전반 담당",
      "회원가입 없이 바로 쓸 수 있는 익명 로그인 적용, 사용자가 자신의 데이터만 다룰 수 있도록 접근 권한 설정, 정해진 시간에 실행되는 예약 작업 구성 (Supabase)",
      "AI 미션 추천, 미션 인증 사진 판정, 응원 글 검수 기능을 서버 함수로 구현 (Supabase Edge Function)",
      "기능마다 명세를 먼저 작성하고, 명세에 맞춰 AI 코딩 도구로 구현·검증하는 방식으로 개발 (OpenSpec)",
      "웹 버전 배포 (EAS Hosting)",
      "발표 자료와 시연 영상 제작",
    ],
    challenges: [
      "AI 응답을 받지 못할 때는 미리 정한 규칙으로 결과를 대신 보여 주도록 하고, 기능별 대기 시간 상한(추천 25초, 판정 20초, 검수 10초)을 두었습니다. 그런데 Gemini가 혼잡할 때 AI 결과 대신 규칙 결과로만 동작하는 문제가 있었습니다. 원인을 찾아보니 기본 모델이 응답 없이 멈춰 있었고, SDK가 내부에서 자동으로 재시도하느라 대기 시간을 다 써 버렸습니다. 그 탓에 실제 오류가 로그에도 남지 않아 원인이 보이지 않았습니다.",
      "기본 모델이 6초 안에 답하지 않거나 바로 실패하면 경량 모델을 함께 호출해 먼저 온 결과를 쓰도록 했습니다. SDK 자동 재시도는 꺼서 실제 오류가 로그에 남게 했고, 모델의 추론 수준도 낮춰 응답 시간을 줄였습니다.",
      "응원 글·릴레이·우체통의 검수 규칙을 공통 모듈 하나로 합치고, AI에 보내기 전에 개인정보를 가리도록 했습니다.",
      "팀원이 추가한 미션 기준 사진 기능의 효과를 확인하려고 평가 스크립트와 테스트 사진 데이터셋을 만들어 전후를 비교했습니다. 기준 사진을 함께 넘기자 같은 장소 사진을 잘못 거절하는 경우가 4/17에서 0/17로 줄었고, 기준 사진을 읽지 못할 때의 판정 오류도 바로잡았습니다.",
    ],
    retrospective: [
      "익숙하지 않은 React Native 환경에서 AI 코딩 도구와 협업해 개발하며, 무엇을 만들지 명세로 먼저 정하고 결과를 테스트와 측정으로 확인하는 일이 코드를 직접 쓰는 것만큼 중요하다는 것을 배웠습니다.",
      "AI 기능은 잘 동작하는 경우만큼 실패하는 경우를 먼저 설계해야 서비스로 쓸 수 있다는 것을 확인했고, 기능의 효과를 감이 아니라 정확도 같은 숫자로 확인하는 습관을 갖게 되었습니다.",
    ],
    links: [
      { label: "운영 서비스", url: "https://seoul-challenge.expo.app" },
      { label: "시연 영상", url: "https://youtu.be/8dw_5ZdjkjE" },
    ],
    github: "https://github.com/koolunkle/maru",
  },
  "yak-allim": {
    title: "약올림",
    titleEn: "Yak-Allim",
    category: "개인 프로젝트",
    periodLabel: "2026.07 – 2026.10",
    description:
      "복약 안내서를 OCR로 분석해 약품명·복용량·복용 일수를 자동으로 추출하고, 복용 일정에 맞춰 알림을 예약해주는 개인 프로젝트입니다. Android 앱부터 백엔드 서버, 인프라까지 전 영역을 직접 설계하고 구축했습니다.",
    tags: ["Compose", "Hilt", "CameraX", "FCM", "Spring Boot", "Redis", "n8n"],
    motivation: [
      "전 직장에서 OCR 서비스의 MVP 서버를 혼자 개발하며 문서 인식을 처음 다뤘습니다. 그때 익힌 방식을 실제 생활 문제에 적용해 보고 싶어, 종이 복약 안내서를 찍으면 복용 알람까지 이어지는 앱을 만들었습니다.",
    ],
    contributions: [
      "Compose 기반 UI 설계 및 전체 화면 구현",
      "CameraX를 활용한 복약 안내서 촬영 및 OCR 연동 플로우 구현",
      "Hilt를 이용한 의존성 주입 구조 설계",
      "FCM 기반 복용 일정 알림 기능 구현",
      "Android 앱·서버·인프라 전 영역을 1인 개발로 구축",
    ],
    challenges: [
      "처음에는 서버에서 OCR 모델을 직접 실행하고, 잘못 읽힌 약품명은 글자를 비교해 교정했습니다. 하지만 예외가 늘수록 교정 코드가 계속 복잡해져, 외부 OCR 서비스로 글자를 읽고 그 결과를 LLM이 해석하는 방식으로 바꿨습니다. 이전 구현은 GitHub에 별도로 보관했습니다.",
      "그런데 실기기에서 검증해 보니, 사진에 없는 복용 정보를 LLM이 채워 넣거나 표의 빈칸 때문에 값이 한 칸씩 밀리는 문제가 있었습니다. 복약 정보에서는 빈 값보다 그럴듯한 틀린 값이 더 위험하다고 판단했습니다.",
      "그래서 OCR 글자 좌표로 열을 맞춰 값의 위치를 실제 배치 기준으로 판단하게 했고, 확인되지 않은 값은 비워 두고 사용자가 직접 입력해야 알람을 켤 수 있게 했습니다. 빈칸 유형별 시험용 안내서로 15회 실행해 모두 정확한 결과를 확인했습니다.",
      "분석에는 시간이 걸리기 때문에, 서버는 요청을 받으면 작업 번호를 먼저 돌려주고 분석은 뒤에서 진행하도록 했습니다. 앱은 진행률을 실시간으로 받아 화면에 표시하고(SSE), 완료나 실패는 푸시 알림으로 받습니다(FCM). 연결이 끊겨도 작업 번호로 결과를 다시 받을 수 있습니다.",
      "새 버전을 배포하는 중에도 진행 중인 분석이 끊기지 않도록, 작업 상태를 서버 내부가 아닌 외부 저장소(Redis)에 두었습니다. 서버가 여러 대여도 앱이 어느 서버에 연결되든 진행 상황을 받을 수 있게 했습니다.",
    ],
    retrospective: [
      "OCR을 서버에서 직접 추론하던 구조를 외부 OCR API와 LLM으로 바꾸면서, 직접 구현할 부분과 외부 서비스에 맡길 부분을 정확도·운영 부담·비용 기준으로 나눠 판단하게 되었습니다.",
      "Android 앱만 만들던 시야에서 벗어나 서버, CI/CD, 무중단 배포까지 직접 다뤄 보며, 기능 하나가 배포되어 사용자에게 닿기까지의 전체 흐름을 이해하게 되었습니다.",
    ],
    github: [
      { label: "Android", url: "https://github.com/koolunkle-yak-allim/yak-allim-android" },
      { label: "Server", url: "https://github.com/koolunkle-yak-allim/yak-allim-server" },
      { label: "Infra", url: "https://github.com/koolunkle-yak-allim/yak-allim-infra" },
      { label: "Landing", url: "https://github.com/koolunkle-yak-allim/yak-allim-landing" },
    ],
  },
  xitefleet: {
    title: "사이트플릿",
    titleEn: "XiteFleet",
    category: "커리어 프로젝트",
    periodLabel: "2024.12 – 2025.05",
    description:
      "건설 장비의 실시간 위치를 모니터링하고 작업 이력을 조회·분석하는 서비스의 Android 앱 개발을 담당했습니다.",
    tags: ["MVI", "Compose", "Ktor", "Room"],
    contributions: [
      "MVI 아키텍처 기반 화면 설계 및 구현",
      "Compose로 UI 개발",
      "Ktor 기반 네트워크 통신 모듈 구현",
      "Room을 활용한 로컬 데이터 캐싱 처리",
    ],
    github: null,
  },
  greenfollow: {
    title: "그린팔로우",
    titleEn: "GreenFollow",
    category: "커리어 프로젝트",
    periodLabel: "2024.08 – 2024.12",
    description:
      "스마트폰과 워치를 연동해 사용자를 따라오는 자율주행 골프 트롤리 서비스의 Android 앱 개발을 담당했습니다.",
    tags: ["Flutter", "MVVM", "BLE", "Google Maps"],
    contributions: [
      "Flutter 기반 MVVM 아키텍처로 앱 개발",
      "BLE 통신을 통한 트롤리 기기 연동 기능 구현",
      "Google Maps 연동 위치 추적 기능 구현",
    ],
    github: null,
  },
  mbrain: {
    title: "엠브레인",
    titleEn: "M.Brain",
    category: "커리어 프로젝트",
    periodLabel: "2024.02 – 2024.09",
    description:
      "블루투스 뇌파 측정기 데이터를 기반으로 운전자의 부주의를 모니터링하는 서비스의 Android 앱 버그 수정과 기능 개선을 담당했습니다.",
    tags: ["Bluetooth", "MediaPlayer", "CSV"],
    contributions: [
      "기존 Android 앱의 버그 수정 및 기능 개선 담당",
      "Bluetooth 통신 안정성 개선",
      "MediaPlayer 기반 알림 사운드 재생 로직 개선",
      "CSV 데이터 처리 로직 점검 및 수정",
    ],
    github: null,
  },
  dangke: {
    title: "당케",
    titleEn: null,
    category: "커리어 프로젝트",
    periodLabel: "2023.03 – 2023.12",
    description:
      "체중·식단·운동·연속혈당 등 건강 데이터를 기록하고 관리하는 헬스케어 서비스, 당신만을 위한 일상 건강케어의 Android 앱을 개발했습니다.",
    tags: ["MVVM", "Health Connect", "소셜 로그인"],
    contributions: [
      "MVVM 아키텍처 기반 앱 개발",
      "Health Connect 연동을 통한 건강 데이터 수집 기능 구현",
      "소셜 로그인 기능 구현",
    ],
    github: null,
  },
};

const PROJECTS = {
  "yak-allim": {
    title: "약올림",
    titleEn: "Yak-Allim",
    category: "개인 프로젝트",
    periodLabel: null,
    description:
      "복약 안내서를 OCR로 분석해 약품명·복용량·복용 일수를 자동으로 추출하고, 복용 일정에 맞춰 알림을 예약해주는 개인 프로젝트입니다. Android 앱부터 백엔드 서버, 인프라까지 전 영역을 직접 설계하고 구축했습니다.",
    tags: ["Compose", "Hilt", "CameraX", "FCM", "Spring Boot", "Redis", "n8n"],
    contributions: [
      "Compose 기반 UI 설계 및 전체 화면 구현",
      "CameraX를 활용한 복약 안내서 촬영 및 OCR 연동 플로우 구현",
      "Hilt를 이용한 의존성 주입 구조 설계",
      "FCM 기반 복용 일정 알림 기능 구현",
      "Android 앱·서버·인프라 전 영역을 1인 개발로 구축",
    ],
    challenges: [
      "서버에서 ONNX Runtime(PP-OCRv4)으로 직접 추론하던 OCR 구조를 n8n 워크플로우(외부 OCR API + LLM) 연동으로 전환했습니다. 이전 구현은 별도 브랜치(archive/onnx-local-ocr)에 보존했습니다.",
      "분석 요청은 작업 ID와 함께 202 Accepted를 즉시 반환하는 비동기 구조로 처리하고, 진행률은 SSE로, 완료·실패는 FCM으로 전달했습니다.",
      "블루-그린 배포 중에도 진행 중인 작업이 끊기지 않도록 작업 상태를 서버 밖 Redis에 두고, Redis Pub/Sub로 모든 서버 인스턴스의 SSE에 진행 이벤트를 전달했습니다.",
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
    periodLabel: "2024.12 – 2025.03",
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
  "cinema-storage": {
    title: "Cinema Storage",
    titleEn: null,
    category: "러닝 프로젝트",
    periodLabel: "미래IT캠퍼스 · 팀 프로젝트",
    description:
      "영화 정보와 사용자 리뷰를 공유하는 앱으로, 회원 관리와 리뷰 CRUD 기능을 Firebase 기반으로 구현했습니다.",
    tags: ["Firebase", "Realtime Database"],
    contributions: [
      "Firebase Realtime Database 연동 및 데이터 구조 설계",
      "리뷰 CRUD 기능 구현",
      "회원 관리(가입/로그인) 기능 구현",
    ],
    github:
      "https://github.com/koolunkle/native-mobile-archive/tree/main/android/training/mirae-it-campus/team-projects/cinema-storage",
  },
  "gudok-in": {
    title: "구독in",
    titleEn: null,
    category: "러닝 프로젝트",
    periodLabel: "넵플러스IT아카데미 · 팀 프로젝트",
    description:
      "세상의 모든 구독 상품을 탐색하고 장바구니에 담아 구독할 수 있는 커머스 앱으로, 로그인부터 장바구니까지의 흐름을 구현했습니다.",
    tags: ["소셜 로그인", "장바구니"],
    contributions: ["소셜 로그인 기능 구현", "장바구니 기능 구현"],
    github:
      "https://github.com/koolunkle/native-mobile-archive/tree/main/android/training/nepp-plus/team-projects/gudok-in",
  },
};

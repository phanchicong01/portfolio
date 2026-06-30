export const profile = {
  name: "Phan Chi Cong",
  role: {
    en: "Senior Frontend Developer",
    vi: "Lập trình viên Frontend cấp cao",
  },
  stack: "React / Next.js / TypeScript",
  tagline: {
    en: "I design and ship resilient frontend systems for fintech products, commerce platforms, and operational tools that teams actually rely on every day.",
    vi: "Tôi thiết kế và triển khai những hệ thống frontend bền vững cho sản phẩm fintech, nền tảng thương mại và công cụ vận hành mà đội ngũ có thể tin cậy mỗi ngày.",
  },
  status: {
    en: "Open to Senior Frontend / Lead Frontend roles",
    vi: "Sẵn sàng cho vai trò Senior Frontend / Lead Frontend",
  },
  location: "Ho Chi Minh City, Vietnam",
  email: "phanchicong01@gmail.com",
  phone: "+84 344 689 608",
  zalo: "+84 818 391 639",
  cvPath: "/Phan_Chi_Cong_CV.pdf",

  heroBadges: [
    { en: "6+ Years Experience", vi: "Hơn 6 năm kinh nghiệm" },
    { en: "System-minded Frontend", vi: "Frontend với tư duy hệ thống" },
    { en: "Fintech + commerce delivery", vi: "Triển khai fintech và thương mại" },
    { en: "Ho Chi Minh City, Vietnam", vi: "TP. Ho Chi Minh, Việt Nam" },
  ],

  capabilities: [
    { en: "Frontend Architecture", vi: "Kiến trúc Frontend" },
    { en: "Performance Optimization", vi: "Tối ưu hiệu năng" },
    { en: "API Integration", vi: "Tích hợp API" },
    { en: "Admin Systems", vi: "Hệ thống quản trị" },
    { en: "Real-time Data", vi: "Dữ liệu thời gian thực" },
  ],

  about: [
    {
      en: "For the last six-plus years, I have been the frontend engineer people pull into products that need to scale without turning fragile.",
      vi: "Trong hơn sáu năm qua, tôi thường là frontend engineer được kéo vào những sản phẩm cần mở rộng mà vẫn phải giữ được độ ổn định.",
    },
    {
      en: "My work sits at the intersection of product delivery and engineering discipline: architecture, reusable systems, API orchestration, and performance that still holds up when the roadmap gets messy.",
      vi: "Công việc của tôi nằm ở giao điểm giữa delivery sản phẩm và kỷ luật kỹ thuật: kiến trúc, hệ thống tái sử dụng, điều phối API và hiệu năng vẫn đứng vững khi roadmap trở nên phức tạp.",
    },
    {
      en: "Most of that work has lived inside fintech dashboards, commerce stacks, CMS-driven experiences, and internal tools where clarity matters as much as speed.",
      vi: "Phần lớn công việc đó nằm trong dashboard fintech, hệ thống thương mại, trải nghiệm điều khiển bởi CMS và công cụ nội bộ, nơi sự rõ ràng quan trọng không kém tốc độ.",
    },
  ],

  aboutHighlights: [
    {
      title: {
        en: "Architecture that survives growth",
        vi: "Kiến trúc chịu được lúc tăng trưởng",
      },
      description: {
        en: "Designing React and Next.js foundations that stay readable under shipping pressure.",
        vi: "Xây dựng nền tảng React và Next.js vẫn dễ đọc, dễ mở rộng ngay cả dưới áp lực phát hành liên tục.",
      },
    },
    {
      title: {
        en: "Cross-functional delivery",
        vi: "Delivery xuyên chức năng",
      },
      description: {
        en: "Turning BA, design, QC, backend, and mobile constraints into frontend decisions that hold together.",
        vi: "Chuyển những ràng buộc từ BA, design, QC, backend và mobile thành các quyết định frontend có tính kết nối và bền chắc.",
      },
    },
    {
      title: {
        en: "Performance with business context",
        vi: "Hiệu năng gắn với bài toán kinh doanh",
      },
      description: {
        en: "Improving rendering, bundle behavior, latency, and security where they affect actual product outcomes.",
        vi: "Cải thiện rendering, bundle, độ trễ và bảo mật ở những điểm tác động trực tiếp đến kết quả sản phẩm.",
      },
    },
  ],
} as const;

export const navLinks = [
  { label: { en: "About", vi: "Giới thiệu" }, href: "#about" },
  { label: { en: "Skills", vi: "Kỹ năng" }, href: "#skills" },
  { label: { en: "Projects", vi: "Dự án" }, href: "#projects" },
  { label: { en: "Experience", vi: "Kinh nghiệm" }, href: "#experience" },
  { label: { en: "Contact", vi: "Liên hệ" }, href: "#contact" },
] as const;

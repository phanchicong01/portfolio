import type { LocalizedText } from "@/lib/locale";

export interface Experience {
  company: string;
  role: LocalizedText;
  period: string;
  current?: boolean;
  description: LocalizedText;
  responsibilities: LocalizedText[];
}

export const experiences: Experience[] = [
  {
    company: "FintechAi",
    role: { en: "Frontend Developer", vi: "Lập trình viên Frontend" },
    period: "10/2025 – Present",
    current: true,
    description: {
      en: "Working on FinOMS, a financial order management system for investment portfolio management, multi-account securities connection, and automated trading workflows.",
      vi: "Làm việc trên FinOMS, hệ thống quản lý lệnh tài chính cho quản lý danh mục đầu tư, kết nối nhiều tài khoản chứng khoán và quy trình giao dịch tự động.",
    },
    responsibilities: [
      {
        en: "Collaborate with UI/UX Designers to review usability, performance, and technical feasibility",
        vi: "Phối hợp cùng UI/UX Designers để đánh giá usability, hiệu năng và tính khả thi kỹ thuật",
      },
      {
        en: "Analyze feature requests and change requirements from Business Analysts",
        vi: "Phân tích feature request và change request từ Business Analysts",
      },
      {
        en: "Clarify business logic, identify risks, and propose optimal implementation approaches",
        vi: "Làm rõ business logic, nhận diện rủi ro và đề xuất cách triển khai tối ưu",
      },
      {
        en: "Investigate QC feedback, clarify defects, and implement fixes",
        vi: "Điều tra feedback từ QC, làm rõ lỗi và triển khai bản sửa",
      },
      {
        en: "Own frontend architecture, component design, and coding standards",
        vi: "Chịu trách nhiệm về kiến trúc frontend, thiết kế component và coding standards",
      },
      {
        en: "Participate in code reviews and refactoring for performance and security",
        vi: "Tham gia code review và refactor để cải thiện hiệu năng và bảo mật",
      },
      {
        en: "Collaborate with Backend and Mobile teams to ensure consistency and reliable data flow",
        vi: "Phối hợp cùng Backend và Mobile để đảm bảo tính nhất quán và luồng dữ liệu ổn định",
      },
    ],
  },
  {
    company: "Canawan Global",
    role: { en: "Frontend Developer", vi: "Lập trình viên Frontend" },
    period: "09/2021 – 02/2025",
    description: {
      en: "Built and maintained multiple React.js and Next.js applications, mainly around e-commerce, CMS-driven storefronts, internal admin systems, product catalog workflows, and listing platforms.",
      vi: "Xây dựng và bảo trì nhiều ứng dụng React.js và Next.js, chủ yếu xoay quanh e-commerce, storefront điều khiển bởi CMS, hệ thống admin nội bộ, quy trình catalog và listing platform.",
    },
    responsibilities: [
      {
        en: "Built and maintained multiple web applications using React.js and Next.js",
        vi: "Xây dựng và bảo trì nhiều ứng dụng web dùng React.js và Next.js",
      },
      {
        en: "Developed key business features and ensured cross-browser compatibility",
        vi: "Phát triển các tính năng kinh doanh quan trọng và đảm bảo tương thích đa trình duyệt",
      },
      {
        en: "Integrated REST APIs and GraphQL APIs",
        vi: "Tích hợp REST API và GraphQL API",
      },
      {
        en: "Managed junior members and delegated frontend tasks",
        vi: "Hỗ trợ thành viên junior và phân chia nhiệm vụ frontend",
      },
      {
        en: "Led frontend development and built reusable modules",
        vi: "Dẫn dắt phát triển frontend và xây dựng module tái sử dụng",
      },
      {
        en: "Collected user requirements, analyzed technical needs, broke down tasks, and assigned work based on team expertise",
        vi: "Thu thập yêu cầu, phân tích nhu cầu kỹ thuật, chia nhỏ task và phân công theo thế mạnh từng thành viên",
      },
    ],
  },
  {
    company: "Alta Software",
    role: { en: "Frontend Developer", vi: "Lập trình viên Frontend" },
    period: "05/2019 – 05/2021",
    description: {
      en: "Developed React.js applications for device management systems, medical data systems, and internal platforms.",
      vi: "Phát triển ứng dụng React.js cho hệ thống quản lý thiết bị, dữ liệu y tế và nền tảng nội bộ.",
    },
    responsibilities: [
      {
        en: "Converted UI/UX designs into responsive web applications",
        vi: "Chuyển UI/UX design thành ứng dụng web responsive",
      },
      {
        en: "Handled API integration",
        vi: "Đảm nhận tích hợp API",
      },
      {
        en: "Created reusable frontend components",
        vi: "Tạo frontend component tái sử dụng",
      },
      {
        en: "Supported junior members and cross-functional projects",
        vi: "Hỗ trợ thành viên junior và các dự án xuyên chức năng",
      },
    ],
  },
];

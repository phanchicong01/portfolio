import type { LocalizedText } from "@/lib/locale";

export interface Project {
  slug: string;
  name: LocalizedText;
  category: LocalizedText;
  group: "FinTech" | "E-commerce" | "Internal Tools";
  role: LocalizedText;
  techStack: string[];
  description: LocalizedText;
  contributions: LocalizedText[];
  featured: boolean;
  imageSeed: string;
  impact: LocalizedText;
}

export const projects: Project[] = [
  {
    slug: "finoms",
    name: {
      en: "FinOMS — Financial Order Management System",
      vi: "FinOMS — Hệ thống Quản lý Lệnh Tài chính",
    },
    category: {
      en: "FinTech / Trading / Portfolio Management",
      vi: "FinTech / Giao dịch / Quản lý Danh mục",
    },
    group: "FinTech",
    role: { en: "Frontend Developer", vi: "Lập trình viên Frontend" },
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack React Query",
      "Socket.IO",
    ],
    description: {
      en: "A financial order management platform for managing investment portfolios, connecting multiple securities accounts, and supporting automated trading workflows for individual and institutional investors.",
      vi: "Nền tảng quản lý lệnh tài chính giúp quản lý danh mục đầu tư, kết nối nhiều tài khoản chứng khoán và hỗ trợ quy trình giao dịch tự động cho nhà đầu tư cá nhân lẫn tổ chức.",
    },
    contributions: [
      {
        en: "Took ownership of frontend architecture, component design, and coding standards",
        vi: "Chịu trách nhiệm về kiến trúc frontend, thiết kế component và coding standards",
      },
      {
        en: "Integrated APIs and real-time data flows with backend services",
        vi: "Tích hợp API và luồng dữ liệu thời gian thực với các dịch vụ backend",
      },
      {
        en: "Collaborated with UI/UX, BA, QC, Backend, and Mobile teams to clarify requirements and improve implementation quality",
        vi: "Phối hợp cùng UI/UX, BA, QC, Backend và Mobile để làm rõ yêu cầu và nâng cao chất lượng triển khai",
      },
      {
        en: "Refactored frontend code to improve rendering performance, bundle size, API usage, and UX latency",
        vi: "Refactor frontend để cải thiện rendering, kích thước bundle, cách dùng API và độ trễ UX",
      },
      {
        en: "Improved frontend security awareness around XSS prevention, sensitive data exposure, and token misuse",
        vi: "Tăng cường nhận thức bảo mật frontend quanh XSS, lộ dữ liệu nhạy cảm và việc dùng token sai cách",
      },
    ],
    featured: true,
    imageSeed: "finoms-terminal",
    impact: { en: "Real-time trading workflows", vi: "Quy trình giao dịch thời gian thực" },
  },
  {
    slug: "headless-magento",
    name: {
      en: "Headless Magento E-commerce Themes",
      vi: "Bộ giao diện E-commerce Headless Magento",
    },
    category: {
      en: "E-commerce / Headless Commerce / CMS",
      vi: "Thương mại điện tử / Headless Commerce / CMS",
    },
    group: "E-commerce",
    role: { en: "Frontend Developer", vi: "Lập trình viên Frontend" },
    techStack: ["Next.js", "React.js", "Redux", "Recoil", "Axios", "GraphQL"],
    description: {
      en: "A dynamic e-commerce theme system built with Next.js for multiple Magento-based storefronts.",
      vi: "Hệ thống giao diện thương mại điện tử động được xây bằng Next.js cho nhiều storefront dựa trên Magento.",
    },
    contributions: [
      {
        en: "Built a dynamic theme system using Next.js SSR",
        vi: "Xây dựng hệ thống giao diện động bằng Next.js SSR",
      },
      {
        en: "Developed a flexible page builder that consumes CMS-driven blocks and pages from backend data",
        vi: "Phát triển page builder linh hoạt nhận block và page được điều khiển bởi CMS từ backend",
      },
      {
        en: "Enabled multiple storefronts with different UI styles while sharing common logic and routing",
        vi: "Cho phép nhiều storefront có UI khác nhau nhưng vẫn dùng chung logic và routing",
      },
      {
        en: "Owned frontend architecture, API integration, and dynamic page generation logic",
        vi: "Phụ trách kiến trúc frontend, tích hợp API và logic tạo trang động",
      },
    ],
    featured: true,
    imageSeed: "editorial-commerce",
    impact: { en: "Multi-storefront architecture", vi: "Kiến trúc đa storefront" },
  },
  {
    slug: "adminhub",
    name: { en: "Adminhub System", vi: "Hệ thống Adminhub" },
    category: {
      en: "Internal Tools / Order Management",
      vi: "Công cụ nội bộ / Quản lý đơn hàng",
    },
    group: "Internal Tools",
    role: { en: "Frontend Developer", vi: "Lập trình viên Frontend" },
    techStack: ["React.js", "Recoil", "Axios", "Ant Design"],
    description: {
      en: "An internal admin system for managing orders from multiple sources before fulfillment.",
      vi: "Hệ thống admin nội bộ để quản lý đơn hàng từ nhiều nguồn trước khi xử lý fulfillment.",
    },
    contributions: [
      {
        en: "Developed order management interfaces for Customer Support teams",
        vi: "Phát triển giao diện quản lý đơn hàng cho đội Customer Support",
      },
      {
        en: "Integrated APIs for reviewing, updating, and processing orders",
        vi: "Tích hợp API để xem, cập nhật và xử lý đơn hàng",
      },
      {
        en: "Improved internal workflow visibility and operational efficiency",
        vi: "Cải thiện độ minh bạch của quy trình nội bộ và hiệu quả vận hành",
      },
      {
        en: "Built reusable frontend modules for admin workflows",
        vi: "Xây dựng các module frontend tái sử dụng cho quy trình admin",
      },
    ],
    featured: true,
    imageSeed: "ops-dashboard",
    impact: { en: "Support and operations clarity", vi: "Rõ ràng hơn cho support và vận hành" },
  },
  {
    slug: "dodgeprint",
    name: { en: "Dodgeprint", vi: "Dodgeprint" },
    category: {
      en: "E-commerce / Listing Management",
      vi: "Thương mại điện tử / Quản lý listing",
    },
    group: "E-commerce",
    role: { en: "Frontend Developer", vi: "Lập trình viên Frontend" },
    techStack: ["React.js", "Recoil", "Axios", "Ant Design"],
    description: {
      en: "A centralized listing system that allows users to publish products to multiple e-commerce platforms such as Etsy and TikTok.",
      vi: "Hệ thống listing tập trung cho phép người dùng đăng sản phẩm lên nhiều nền tảng thương mại điện tử như Etsy và TikTok.",
    },
    contributions: [
      {
        en: "Built listing management interfaces",
        vi: "Xây dựng giao diện quản lý listing",
      },
      {
        en: "Supported multi-platform product publishing workflows",
        vi: "Hỗ trợ quy trình đăng sản phẩm lên nhiều nền tảng",
      },
      {
        en: "Created reusable frontend modules for long-term maintenance",
        vi: "Tạo các module frontend tái sử dụng để bảo trì lâu dài",
      },
    ],
    featured: false,
    imageSeed: "listing-studio",
    impact: { en: "Channel publishing workflows", vi: "Quy trình đăng bán đa kênh" },
  },
  {
    slug: "catalog-system",
    name: { en: "Catalog System", vi: "Hệ thống Catalog" },
    category: {
      en: "Product Management / E-commerce Operations",
      vi: "Quản lý sản phẩm / Vận hành thương mại điện tử",
    },
    group: "E-commerce",
    role: { en: "Frontend Developer", vi: "Lập trình viên Frontend" },
    techStack: ["React.js", "Recoil", "Axios", "Ant Design"],
    description: {
      en: "A centralized product warehouse system for staging, categorizing, and preparing products before deployment to multiple sales platforms.",
      vi: "Hệ thống kho sản phẩm tập trung để staging, phân loại và chuẩn bị sản phẩm trước khi đẩy lên nhiều nền tảng bán hàng.",
    },
    contributions: [
      {
        en: "Built product staging and categorization workflows",
        vi: "Xây dựng quy trình staging và phân loại sản phẩm",
      },
      {
        en: "Developed reusable UI components for internal operations",
        vi: "Phát triển UI component tái sử dụng cho vận hành nội bộ",
      },
      {
        en: "Integrated backend APIs to support product preparation before deployment to Shopify, ShopBase, and BigCommerce",
        vi: "Tích hợp backend API để hỗ trợ chuẩn bị sản phẩm trước khi đẩy lên Shopify, ShopBase và BigCommerce",
      },
    ],
    featured: false,
    imageSeed: "catalog-ops",
    impact: { en: "Catalog staging system", vi: "Hệ thống staging catalog" },
  },
];

export const projectFilters = [
  "All",
  "FinTech",
  "E-commerce",
  "Internal Tools",
] as const;

import {
  Code2,
  PenTool,
  LayoutDashboard,
  ShoppingBag,
  Gauge,
  Recycle,
  type LucideIcon,
} from "lucide-react";
import type { LocalizedText } from "@/lib/locale";

export interface Service {
  title: LocalizedText;
  description: LocalizedText;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: { en: "Frontend Development", vi: "Phát triển Frontend" },
    description: {
      en: "React.js, Next.js, and TypeScript web application development.",
      vi: "Phát triển ứng dụng web bằng React.js, Next.js và TypeScript.",
    },
    icon: Code2,
  },
  {
    title: { en: "Figma to Next.js", vi: "Figma sang Next.js" },
    description: {
      en: "Convert Figma designs into responsive, production-ready frontend interfaces.",
      vi: "Chuyển thiết kế Figma thành giao diện frontend responsive, sẵn sàng cho production.",
    },
    icon: PenTool,
  },
  {
    title: { en: "Admin Dashboard Development", vi: "Phát triển Dashboard Admin" },
    description: {
      en: "Build internal tools, management systems, CRUD dashboards, and business workflows.",
      vi: "Xây dựng công cụ nội bộ, hệ thống quản lý, dashboard CRUD và các quy trình nghiệp vụ.",
    },
    icon: LayoutDashboard,
  },
  {
    title: { en: "E-commerce Frontend", vi: "Frontend E-commerce" },
    description: {
      en: "Build storefronts, catalog systems, product listing flows, and CMS-driven commerce pages.",
      vi: "Xây dựng storefront, hệ thống catalog, luồng listing sản phẩm và các trang thương mại điều khiển bởi CMS.",
    },
    icon: ShoppingBag,
  },
  {
    title: { en: "Performance Optimization", vi: "Tối ưu hiệu năng" },
    description: {
      en: "Improve rendering performance, bundle size, API usage, UX latency, and Core Web Vitals.",
      vi: "Cải thiện hiệu năng rendering, kích thước bundle, cách sử dụng API, độ trễ UX và Core Web Vitals.",
    },
    icon: Gauge,
  },
  {
    title: { en: "Frontend Refactoring", vi: "Refactor Frontend" },
    description: {
      en: "Clean up legacy frontend codebases, improve maintainability, and build reusable component systems.",
      vi: "Dọn dẹp codebase frontend cũ, tăng khả năng bảo trì và xây dựng hệ thống component tái sử dụng.",
    },
    icon: Recycle,
  },
];

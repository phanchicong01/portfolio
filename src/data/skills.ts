import type { LocalizedText } from "@/lib/locale";

export interface SkillGroup {
  category: LocalizedText;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: { en: "Frontend", vi: "Frontend" },
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Ant Design",
      "shadcn/ui",
    ],
  },
  {
    category: { en: "State & Data", vi: "State và Dữ liệu" },
    items: [
      "Redux",
      "Recoil",
      "Zustand",
      "TanStack React Query",
      "Axios",
      "REST API",
      "GraphQL",
      "Socket.IO",
    ],
  },
  {
    category: { en: "Forms & Validation", vi: "Form và Validation" },
    items: ["React Hook Form", "Formik", "Yup", "Zod"],
  },
  {
    category: { en: "Analytics & Tracking", vi: "Analytics và Tracking" },
    items: ["GA4", "GTM", "Facebook Pixel", "Klaviyo", "Meta CAPI", "Sentry"],
  },
  {
    category: { en: "Tooling", vi: "Công cụ" },
    items: ["GitHub", "GitLab", "Vite", "ESLint", "CI/CD", "Vercel"],
  },
  {
    category: { en: "Domains", vi: "Lĩnh vực" },
    items: [
      "E-commerce",
      "FinTech",
      "Admin Systems",
      "CMS",
      "Internal Tools",
      "Management Dashboards",
    ],
  },
];

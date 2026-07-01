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
  caseStudy: {
    client: LocalizedText;
    timeline: LocalizedText;
    team: LocalizedText;
    overview: LocalizedText;
    challenge: LocalizedText;
    responsibilities: LocalizedText[];
    approach: LocalizedText[];
    wins: LocalizedText[];
  };
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
    caseStudy: {
      client: {
        en: "Fintech product team serving portfolio management and order execution workflows",
        vi: "Đội ngũ sản phẩm fintech phục vụ quản lý danh mục và quy trình thực thi lệnh",
      },
      timeline: {
        en: "Multi-phase product delivery across core trading and portfolio modules",
        vi: "Nhiều giai đoạn triển khai cho các module giao dịch và danh mục cốt lõi",
      },
      team: {
        en: "Frontend, Backend, Mobile, BA, QC, and Product stakeholders",
        vi: "Frontend, Backend, Mobile, BA, QC và các bên liên quan phía sản phẩm",
      },
      overview: {
        en: "FinOMS needed to support a dense set of workflows: portfolio tracking, multi-account connectivity, basket orders, and responsive execution feedback. The frontend had to stay clear under heavy data and fast-changing states.",
        vi: "FinOMS cần hỗ trợ một tập workflow dày đặc: theo dõi danh mục, kết nối nhiều tài khoản, lệnh theo rổ và phản hồi thực thi gần thời gian thực. Frontend phải giữ được sự rõ ràng khi dữ liệu nhiều và trạng thái thay đổi liên tục.",
      },
      challenge: {
        en: "The biggest challenge was balancing real-time trading complexity with operator confidence. Screens could not feel laggy, ambiguous, or fragile because every extra second or unclear state affected user trust.",
        vi: "Thử thách lớn nhất là cân bằng độ phức tạp của giao dịch thời gian thực với cảm giác tin cậy khi vận hành. Màn hình không được chậm, mơ hồ hay mong manh vì chỉ cần thêm vài giây hoặc một trạng thái thiếu rõ ràng là niềm tin người dùng bị ảnh hưởng.",
      },
      responsibilities: [
        {
          en: "Defined frontend architecture boundaries and shared patterns for trading-oriented modules",
          vi: "Định nghĩa ranh giới kiến trúc frontend và các pattern dùng chung cho những module thiên về giao dịch",
        },
        {
          en: "Worked directly with backend and BA to shape request/response contracts into workable UI states",
          vi: "Làm việc trực tiếp với backend và BA để chuyển request/response contract thành các trạng thái UI khả thi",
        },
        {
          en: "Reviewed critical flows around portfolio updates, setup forms, and account-dependent actions",
          vi: "Review các luồng quan trọng quanh cập nhật danh mục, form thiết lập và các thao tác phụ thuộc tài khoản",
        },
      ],
      approach: [
        {
          en: "Split large flows into reusable stateful modules so basket orders, symbol setup, and account-driven validation could evolve without rewriting entire screens",
          vi: "Tách các luồng lớn thành module có trạng thái riêng để lệnh theo rổ, cấu hình mã và validation theo tài khoản có thể mở rộng mà không phải viết lại cả màn hình",
        },
        {
          en: "Improved API orchestration and data refresh timing to make live portfolio and order states feel more trustworthy",
          vi: "Cải thiện điều phối API và thời điểm refresh dữ liệu để trạng thái danh mục và lệnh đang chạy trở nên đáng tin cậy hơn",
        },
        {
          en: "Pushed for clearer component contracts and rendering discipline to reduce regressions in dense operational views",
          vi: "Đẩy mạnh contract rõ ràng giữa các component và kỷ luật render để giảm regression ở những màn hình vận hành dày đặc",
        },
      ],
      wins: [
        {
          en: "Made complex order-entry surfaces easier to extend and safer to iterate on",
          vi: "Biến các màn hình nhập lệnh phức tạp thành thứ dễ mở rộng và an toàn hơn khi tiếp tục iterate",
        },
        {
          en: "Reduced UI friction in workflows where traders and operators rely on timing and feedback clarity",
          vi: "Giảm ma sát UI ở những workflow mà trader và operator phụ thuộc mạnh vào tốc độ và độ rõ của phản hồi",
        },
        {
          en: "Raised frontend quality across performance, maintainability, and implementation consistency",
          vi: "Nâng chất lượng frontend ở cả hiệu năng, khả năng bảo trì và tính nhất quán khi triển khai",
        },
      ],
    },
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
    caseStudy: {
      client: {
        en: "Commerce teams operating multiple Magento storefronts with shared backend logic",
        vi: "Các đội vận hành thương mại điện tử quản lý nhiều storefront Magento với logic backend dùng chung",
      },
      timeline: {
        en: "Delivered across theme system work, CMS-driven pages, and storefront customization",
        vi: "Triển khai xuyên suốt theme system, trang điều khiển bởi CMS và tùy biến storefront",
      },
      team: {
        en: "Frontend, Backend, QA, and storefront stakeholders",
        vi: "Frontend, Backend, QA và các bên liên quan của storefront",
      },
      overview: {
        en: "This system needed one frontend foundation that could support multiple storefronts with different brand expressions, while still sharing routing, rendering logic, and CMS-controlled page structures.",
        vi: "Hệ thống này cần một nền tảng frontend đủ chung để phục vụ nhiều storefront với brand expression khác nhau, nhưng vẫn chia sẻ routing, rendering logic và cấu trúc trang do CMS điều khiển.",
      },
      challenge: {
        en: "The core challenge was avoiding theme-specific divergence. Once each storefront starts branching its own components and rules, maintenance cost grows quickly and delivery speed slows down.",
        vi: "Thử thách cốt lõi là tránh việc mỗi theme tách nhánh quá xa. Khi từng storefront bắt đầu có component và rule riêng, chi phí bảo trì tăng rất nhanh và tốc độ delivery bị chậm đi rõ rệt.",
      },
      responsibilities: [
        {
          en: "Built and maintained the theme architecture for multi-storefront delivery",
          vi: "Xây dựng và duy trì kiến trúc theme cho bài toán đa storefront",
        },
        {
          en: "Implemented CMS-driven page rendering and reusable page-builder behavior",
          vi: "Triển khai cơ chế render trang điều khiển bởi CMS và hành vi page-builder tái sử dụng được",
        },
        {
          en: "Connected frontend variations to shared backend contracts without duplicating business logic",
          vi: "Kết nối các biến thể giao diện với contract backend dùng chung mà không nhân đôi business logic",
        },
      ],
      approach: [
        {
          en: "Separated layout, content composition, and storefront-specific styling so the same rendering flow could serve different brand directions",
          vi: "Tách layout, cách ghép nội dung và styling đặc thù storefront để cùng một flow render có thể phục vụ nhiều hướng thương hiệu",
        },
        {
          en: "Used SSR and data-driven rendering to keep catalog and CMS pages flexible without degrading page consistency",
          vi: "Dùng SSR và render theo dữ liệu để vừa giữ được độ linh hoạt cho catalog/CMS page, vừa không làm chất lượng trang bị rời rạc",
        },
        {
          en: "Focused on reusable contracts between components and backend blocks to support long-term storefront growth",
          vi: "Tập trung vào contract tái sử dụng giữa component và block backend để hỗ trợ tăng trưởng storefront về lâu dài",
        },
      ],
      wins: [
        {
          en: "Enabled multiple storefront expressions without rewriting the entire frontend stack",
          vi: "Cho phép nhiều biểu hiện storefront khác nhau mà không phải viết lại toàn bộ frontend stack",
        },
        {
          en: "Made CMS-heavy pages more maintainable and faster to extend",
          vi: "Biến các trang phụ thuộc mạnh vào CMS trở nên dễ bảo trì và mở rộng nhanh hơn",
        },
        {
          en: "Protected shared logic from being fragmented across theme-specific branches",
          vi: "Giữ được phần logic dùng chung khỏi bị phân mảnh theo từng nhánh theme riêng",
        },
      ],
    },
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
    caseStudy: {
      client: {
        en: "Internal operations and customer-support teams handling order lifecycles",
        vi: "Các đội vận hành nội bộ và customer support xử lý vòng đời đơn hàng",
      },
      timeline: {
        en: "Operational rollout focused on order review, updates, and fulfillment prep",
        vi: "Quá trình rollout tập trung vào review đơn hàng, cập nhật trạng thái và chuẩn bị fulfillment",
      },
      team: {
        en: "Frontend, Backend, and operations users",
        vi: "Frontend, Backend và người dùng phía vận hành",
      },
      overview: {
        en: "Adminhub was an internal system designed to centralize order handling before fulfillment. The interface had to help support teams move quickly through repeated tasks without losing visibility across multiple order sources.",
        vi: "Adminhub là hệ thống nội bộ nhằm gom việc xử lý đơn hàng trước fulfillment về một nơi. Giao diện phải giúp đội support thao tác nhanh trên các tác vụ lặp lại mà vẫn giữ được khả năng quan sát ở nhiều nguồn đơn khác nhau.",
      },
      challenge: {
        en: "Internal tools often become dense and inconsistent because speed is prioritized over structure. The challenge here was to keep workflows practical while still building reusable modules that operations teams could rely on.",
        vi: "Tool nội bộ rất dễ trở nên dày đặc và thiếu nhất quán vì tốc độ thường được ưu tiên hơn cấu trúc. Bài toán ở đây là giữ workflow đủ thực dụng nhưng vẫn phải xây thành các module tái sử dụng được để đội vận hành có thể tin cậy lâu dài.",
      },
      responsibilities: [
        {
          en: "Built order-centric screens for review, update, and processing tasks",
          vi: "Xây dựng các màn hình xoay quanh review, cập nhật và xử lý đơn hàng",
        },
        {
          en: "Connected operational flows with backend APIs and status-driven UI states",
          vi: "Kết nối luồng vận hành với API backend và các trạng thái UI theo trạng thái đơn",
        },
        {
          en: "Created reusable admin modules for recurring internal workflows",
          vi: "Tạo các module admin tái sử dụng cho những workflow nội bộ lặp lại",
        },
      ],
      approach: [
        {
          en: "Designed UI around task completion and visibility, not just data display",
          vi: "Thiết kế UI xoay quanh việc hoàn thành tác vụ và khả năng quan sát, không chỉ đơn thuần là hiển thị dữ liệu",
        },
        {
          en: "Normalized recurring interaction patterns so support teams could move faster with less mental switching",
          vi: "Chuẩn hóa các pattern tương tác lặp lại để đội support thao tác nhanh hơn và giảm việc phải chuyển ngữ cảnh trong đầu",
        },
        {
          en: "Kept modules reusable so future admin workflows could build on the same frontend base",
          vi: "Giữ các module ở mức tái sử dụng được để những workflow admin về sau có thể dựa trên cùng nền frontend",
        },
      ],
      wins: [
        {
          en: "Improved operational clarity for teams handling large volumes of repetitive tasks",
          vi: "Tăng độ rõ ràng khi vận hành cho những đội phải xử lý nhiều tác vụ lặp lại với khối lượng lớn",
        },
        {
          en: "Reduced friction in order-handling flows that previously depended on scattered interfaces",
          vi: "Giảm ma sát trong luồng xử lý đơn hàng vốn trước đó dễ bị rời rạc ở nhiều giao diện khác nhau",
        },
        {
          en: "Established a cleaner baseline for future internal tooling work",
          vi: "Tạo được một baseline sạch hơn cho các công việc tool nội bộ về sau",
        },
      ],
    },
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
    caseStudy: {
      client: {
        en: "E-commerce teams publishing the same product catalog across external marketplaces",
        vi: "Các đội thương mại điện tử đăng cùng một catalog sản phẩm lên nhiều marketplace bên ngoài",
      },
      timeline: {
        en: "Product listing delivery focused on marketplace publishing efficiency",
        vi: "Quá trình triển khai tập trung vào hiệu quả đăng bán trên marketplace",
      },
      team: {
        en: "Frontend, Backend, and marketplace operations stakeholders",
        vi: "Frontend, Backend và các bên liên quan phía vận hành marketplace",
      },
      overview: {
        en: "Dodgeprint centralized product listing workflows so teams could prepare and publish products to channels like Etsy and TikTok from one interface instead of repeating manual work in each platform.",
        vi: "Dodgeprint gom workflow listing sản phẩm về một nơi để đội ngũ có thể chuẩn bị và đăng bán lên những kênh như Etsy hay TikTok từ một giao diện thay vì lặp lại thao tác thủ công trên từng nền tảng.",
      },
      challenge: {
        en: "Publishing across channels introduces repeated forms, inconsistent requirements, and maintenance-heavy UI logic. The challenge was to make multi-channel work feel unified without hiding important platform differences.",
        vi: "Đăng bán đa kênh kéo theo form lặp lại, yêu cầu không nhất quán và logic UI khó bảo trì. Bài toán là tạo cảm giác thống nhất cho công việc đa kênh mà vẫn không che mất những khác biệt quan trọng giữa các nền tảng.",
      },
      responsibilities: [
        {
          en: "Built the listing-management interface and reusable product-publishing modules",
          vi: "Xây dựng giao diện quản lý listing và các module tái sử dụng cho việc đăng sản phẩm",
        },
        {
          en: "Supported workflow states for cross-channel publishing and update cycles",
          vi: "Hỗ trợ các trạng thái workflow cho việc đăng và cập nhật sản phẩm đa kênh",
        },
        {
          en: "Kept the frontend maintainable for future marketplace integrations",
          vi: "Giữ frontend ở mức dễ bảo trì cho các tích hợp marketplace về sau",
        },
      ],
      approach: [
        {
          en: "Abstracted repeated publishing patterns while leaving room for marketplace-specific rules",
          vi: "Trừu tượng hóa các pattern đăng bán lặp lại nhưng vẫn chừa chỗ cho những rule riêng của từng marketplace",
        },
        {
          en: "Used reusable modules so future listing features would not require duplicating screen logic",
          vi: "Dùng module tái sử dụng để các tính năng listing mới không phải nhân đôi logic màn hình",
        },
        {
          en: "Kept the interaction flow centered on operator speed and low-friction updates",
          vi: "Giữ luồng tương tác xoay quanh tốc độ thao tác và việc cập nhật ít ma sát cho người vận hành",
        },
      ],
      wins: [
        {
          en: "Improved consistency across listing workflows for multiple external channels",
          vi: "Tăng tính nhất quán cho workflow listing trên nhiều kênh bên ngoài",
        },
        {
          en: "Reduced repeated effort for product publishing teams",
          vi: "Giảm công việc lặp lại cho đội ngũ phụ trách đăng bán sản phẩm",
        },
        {
          en: "Created a frontend base that could absorb future marketplace growth",
          vi: "Tạo được nền frontend có thể hấp thụ việc mở rộng sang marketplace mới về sau",
        },
      ],
    },
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
    caseStudy: {
      client: {
        en: "Operations teams preparing products before pushing them to downstream storefronts",
        vi: "Các đội vận hành chuẩn bị sản phẩm trước khi đẩy xuống các storefront phía sau",
      },
      timeline: {
        en: "Catalog tooling focused on preparation, categorization, and deployment readiness",
        vi: "Quá trình phát triển tool catalog tập trung vào chuẩn bị, phân loại và sẵn sàng triển khai",
      },
      team: {
        en: "Frontend, Backend, and internal catalog operators",
        vi: "Frontend, Backend và đội vận hành catalog nội bộ",
      },
      overview: {
        en: "The catalog system acted as a preparation layer before products were shipped to multiple commerce platforms. It helped teams stage, classify, and refine catalog data before publishing downstream.",
        vi: "Hệ thống catalog đóng vai trò như một lớp chuẩn bị trước khi sản phẩm được đẩy sang nhiều nền tảng thương mại khác nhau. Nó giúp đội ngũ staging, phân loại và tinh chỉnh dữ liệu catalog trước khi publish xuống các hệ thống phía sau.",
      },
      challenge: {
        en: "Catalog preparation tools can become messy when product attributes, destination-platform requirements, and operator workflows all converge in the same place. The challenge was to keep the system usable while carrying a lot of product detail.",
        vi: "Tool chuẩn bị catalog rất dễ trở nên lộn xộn khi thuộc tính sản phẩm, yêu cầu từ nền tảng đích và workflow vận hành cùng hội tụ vào một nơi. Thử thách là giữ hệ thống vẫn dễ dùng dù phải mang theo rất nhiều chi tiết sản phẩm.",
      },
      responsibilities: [
        {
          en: "Built interfaces for product staging and categorization",
          vi: "Xây dựng giao diện cho việc staging và phân loại sản phẩm",
        },
        {
          en: "Integrated APIs that prepare data for downstream platforms like Shopify and BigCommerce",
          vi: "Tích hợp các API chuẩn bị dữ liệu cho các nền tảng phía sau như Shopify và BigCommerce",
        },
        {
          en: "Created reusable UI modules for ongoing internal product operations",
          vi: "Tạo các module UI tái sử dụng cho công việc vận hành sản phẩm nội bộ kéo dài",
        },
      ],
      approach: [
        {
          en: "Focused the UI on preparation status, categorization clarity, and repeatable product actions",
          vi: "Tập trung UI vào trạng thái chuẩn bị, sự rõ ràng khi phân loại và các thao tác sản phẩm có thể lặp lại",
        },
        {
          en: "Kept shared modules flexible enough to support multiple downstream deployment targets",
          vi: "Giữ các module dùng chung đủ linh hoạt để hỗ trợ nhiều đích triển khai phía sau",
        },
        {
          en: "Reduced maintenance pressure by consolidating recurring product-operation patterns",
          vi: "Giảm áp lực bảo trì bằng cách gom các pattern vận hành sản phẩm lặp lại về chung một hướng",
        },
      ],
      wins: [
        {
          en: "Made product staging more structured before downstream deployment",
          vi: "Làm cho quá trình staging sản phẩm có cấu trúc hơn trước khi triển khai xuống hệ thống phía sau",
        },
        {
          en: "Improved clarity for internal catalog operators working across many product states",
          vi: "Tăng độ rõ ràng cho đội vận hành catalog nội bộ khi phải làm việc với nhiều trạng thái sản phẩm",
        },
        {
          en: "Built a reusable internal foundation for catalog-heavy workflows",
          vi: "Xây được một nền nội bộ tái sử dụng cho những workflow nặng về catalog",
        },
      ],
    },
  },
];

export const projectFilters = [
  "All",
  "FinTech",
  "E-commerce",
  "Internal Tools",
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

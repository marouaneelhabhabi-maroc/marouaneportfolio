import type { Locale } from "./config";

export type ProjectSlug = "l9a5dma" | "pdf2wordly";

export interface Project {
  slug: ProjectSlug;
  category: string;
  title: string;
  tagline: string;
  liveUrl: string;
  githubUrl: null;
  role: string;
  status: string;
  scope: string[];
  overview: string[];
  problem: string;
  concept: string;
  solution: string;
  features: string[];
  design: string;
  tech: string[];
  deploy: string;
  lessons: string;
  initials: string;
  accent: string;
}

const base: Record<ProjectSlug, { liveUrl: string; initials: string; accent: string }> = {
  l9a5dma: { liveUrl: "https://l9a5dma.ma/", initials: "L9", accent: "#2B5CFF" },
  pdf2wordly: { liveUrl: "https://pdf2wordly.com/", initials: "PW", accent: "#111214" },
};

const data: Record<Locale, Record<ProjectSlug, Project>> = {
  en: {
    l9a5dma: {
      ...base.l9a5dma, slug: "l9a5dma",
      category: "Services marketplace",
      title: "L9A5DMA — لقا خدمة",
      tagline: "A Moroccan marketplace connecting customers with local professionals.",
      githubUrl: null, role: "Design & Development", status: "Live",
      scope: ["UI/UX", "Responsive", "Database", "Auth", "Search", "Deployment", "SEO"],
      overview: [
        "L9A5DMA is a services marketplace designed and developed to connect customers with local professionals and skilled service providers across Morocco.",
        "Providers create professional profiles, showcase services and experience, and publish contact information. Customers discover professionals by service and location, then contact them directly.",
      ],
      problem: "Finding trusted local service providers is fragmented — scattered phone numbers, no profiles, no way to compare by service or city.",
      concept: "One directory where every provider has a clear professional profile: services, experience, location and direct contact.",
      solution: "A responsive marketplace with provider profiles, search by service and location, authentication for providers, and SEO foundations so services are discoverable.",
      features: ["Professional provider profiles", "Search by service and location", "Provider authentication and accounts", "Direct contact via WhatsApp and phone", "Ratings and reviews", "Responsive mobile-first layout", "SEO-ready service and profile pages"],
      design: "Clean cards, strong hierarchy and generous spacing. Mobile-first — most users browse services on their phone.",
      tech: ["Responsive web development", "Database integration for profiles and listings", "Authentication flows", "Search and filtering", "Deployment with SSL and hosting", "SEO metadata and semantic structure"],
      deploy: "Deployed with secure hosting, custom domain, and on-page SEO so each service and location can be found via search.",
      lessons: "Marketplaces live or die by clarity: provider profiles must answer who, what, where and how to contact in under ten seconds.",
    },
    pdf2wordly: {
      ...base.pdf2wordly, slug: "pdf2wordly",
      category: "SaaS product",
      title: "PDF2Wordly",
      tagline: "A web-based PDF-to-Word SaaS platform — simple online document conversion.",
      githubUrl: null, role: "Design & Development", status: "Live",
      scope: ["UI/UX", "Responsive", "PDF processing", "Auth", "Subscriptions", "Deployment", "SEO"],
      overview: [
        "PDF2Wordly is a web-based SaaS platform designed and developed to make PDF-to-Word conversion simple and accessible online.",
        "Users convert documents through a guided web workflow, manage accounts, and use subscription functionality — all in the browser.",
      ],
      problem: "Document conversion tools are often cluttered, confusing, or require downloads. Users want a fast, clear path: upload, convert, download.",
      concept: "A minimal conversion flow with honest pricing and accounts — a real SaaS loop, not a one-off tool page.",
      solution: "A responsive SaaS experience covering conversion workflows, authentication, subscriptions, deployment and SEO.",
      features: ["Online PDF-to-Word conversion workflow", "OCR for scanned PDFs", "User authentication and accounts", "Free and Pro plans", "Responsive converter interface", "Product and pricing pages", "SEO-ready SaaS structure"],
      design: "Distraction-free converter UI: one primary action per step, clear file states, reassuring progress feedback.",
      tech: ["Responsive web development", "PDF processing and conversion workflows", "Authentication and user accounts", "Subscription integration", "Deployment and hosting", "SaaS SEO architecture"],
      deploy: "Deployed as a production SaaS with secure hosting, structured pages for search, and performance budgets for the converter.",
      lessons: "SaaS trust is built in the details: file states, error messages and pricing clarity matter as much as the conversion itself.",
    },
  },
  fr: {
    l9a5dma: {
      ...base.l9a5dma, slug: "l9a5dma",
      category: "Marketplace de services",
      title: "L9A5DMA — لقا خدمة",
      tagline: "Une marketplace marocaine qui relie clients et professionnels locaux.",
      githubUrl: null, role: "Design & Développement", status: "En ligne",
      scope: ["UI/UX", "Responsive", "Base de données", "Auth", "Recherche", "Déploiement", "SEO"],
      overview: [
        "L9A5DMA est une marketplace conçue et développée pour connecter les clients aux professionnels et artisans locaux au Maroc.",
        "Les prestataires créent des profils professionnels, présentent services et expérience, et publient leurs coordonnées. Les clients découvrent les pros par service et par ville, puis les contactent directement.",
      ],
      problem: "Trouver un prestataire local de confiance est fragmenté — numéros dispersés, aucun profil, impossible de comparer par service ou ville.",
      concept: "Un annuaire où chaque prestataire a un profil clair : services, expérience, localisation et contact direct.",
      solution: "Une marketplace responsive avec profils, recherche par service et ville, authentification prestataires et bases SEO pour être trouvé.",
      features: ["Profils professionnels", "Recherche par service et ville", "Comptes et authentification", "Contact direct via WhatsApp et téléphone", "Notes et avis", "Layout mobile-first", "Pages SEO par service et profil"],
      design: "Cartes épurées, hiérarchie forte, espacements généreux. Mobile-first — la plupart consultent depuis leur téléphone.",
      tech: ["Développement responsive", "Base de données profils et annonces", "Flux d'authentification", "Recherche et filtres", "Déploiement SSL et hébergement", "Métadonnées SEO et structure sémantique"],
      deploy: "Déployé avec hébergement sécurisé, domaine personnalisé et SEO on-page pour être trouvé par service et ville.",
      lessons: "Une marketplace vit par sa clarté : un profil doit répondre à qui, quoi, où et comment contacter en dix secondes.",
    },
    pdf2wordly: {
      ...base.pdf2wordly, slug: "pdf2wordly",
      category: "Produit SaaS",
      title: "PDF2Wordly",
      tagline: "Une plateforme SaaS de conversion PDF vers Word — simple et en ligne.",
      githubUrl: null, role: "Design & Développement", status: "En ligne",
      scope: ["UI/UX", "Responsive", "Traitement PDF", "Auth", "Abonnements", "Déploiement", "SEO"],
      overview: [
        "PDF2Wordly est une plateforme SaaS conçue et développée pour rendre la conversion PDF vers Word simple et accessible en ligne.",
        "Les utilisateurs convertissent via un parcours guidé, gèrent leur compte et utilisent les abonnements — tout dans le navigateur.",
      ],
      problem: "Les outils de conversion sont souvent encombrés ou exigent des téléchargements. Les utilisateurs veulent : importer, convertir, télécharger.",
      concept: "Un flux minimal avec tarification claire et comptes — une vraie boucle SaaS, pas une simple page utilitaire.",
      solution: "Une expérience SaaS responsive : conversion, authentification, abonnements, déploiement et SEO.",
      features: ["Conversion PDF vers Word en ligne", "OCR pour PDF scannés", "Authentification et comptes", "Formules Free et Pro", "Interface de conversion responsive", "Pages produit et tarifs", "Structure SaaS SEO-ready"],
      design: "Interface sans distraction : une action principale par étape, états de fichier clairs, progression rassurante.",
      tech: ["Développement responsive", "Traitement PDF et workflows", "Authentification et comptes", "Intégration abonnements", "Déploiement et hébergement", "Architecture SEO SaaS"],
      deploy: "Déployé comme SaaS de production : hébergement sécurisé, pages structurées pour le SEO, budgets performance.",
      lessons: "La confiance SaaS se joue dans les détails : états de fichier, messages d'erreur et clarté tarifaire.",
    },
  },
  ar: {
    l9a5dma: {
      ...base.l9a5dma, slug: "l9a5dma",
      category: "سوق خدمات",
      title: "لقا خدمة — L9A5DMA",
      tagline: "سوق مغربي يربط الزبائن بالمهنيين المحليين.",
      githubUrl: null, role: "التصميم والتطوير", status: "حي",
      scope: ["UI/UX", "تجاوب", "قاعدة بيانات", "حسابات", "بحث", "النشر", "SEO"],
      overview: [
        "لقا خدمة سوق خدمات صُمم وطُوّر لربط الزبائن بالمهنيين ومقدمي الخدمات في المغرب.",
        "ينشئ المهنيون صفحات احترافية يعرضون فيها خدماتهم وخبرتهم ومعلومات التواصل. يكتشف الزبائن المهنيين حسب الخدمة والمدينة ثم يتواصلون مباشرة.",
      ],
      problem: "إيجاد مهني محلي موثوق صعب — أرقام مبعثرة ولا صفحات ولا مقارنة حسب الخدمة أو المدينة.",
      concept: "دليل واحد لكل مهني فيه صفحة واضحة: الخدمات والخبرة والمدينة والتواصل المباشر.",
      solution: "سوق متجاوب مع صفحات للمهنيين وبحث حسب الخدمة والمدينة وحسابات وأساسيات SEO.",
      features: ["صفحات مهنية للمهنيين", "بحث حسب الخدمة والمدينة", "حسابات وتسجيل دخول", "تواصل مباشر عبر واتساب والهاتف", "تقييمات وآراء", "تصميم يبدأ من الجوال", "صفحات مهيأة لمحركات البحث"],
      design: "بطاقات نظيفة وتسلسل قوي ومساحات سخية. الجوال أولًا — معظم المستخدمين يتصفحون من الهاتف.",
      tech: ["تطوير متجاوب", "قاعدة بيانات للصفحات والإعلانات", "تدفقات تسجيل الدخول", "بحث وتصفية", "نشر باستضافة آمنة", "بنية دلالية وSEO"],
      deploy: "منشور باستضافة آمنة ونطاق مخصص وSEO يسمح بالوصول عبر البحث حسب الخدمة والمدينة.",
      lessons: "نجاح الأسواق بالوضوح: صفحة المهني يجب أن تجيب من وماذا وأين وكيف تتواصل في عشر ثوانٍ.",
    },
    pdf2wordly: {
      ...base.pdf2wordly, slug: "pdf2wordly",
      category: "منتج SaaS",
      title: "PDF2Wordly",
      tagline: "منصة SaaS لتحويل PDF إلى Word عبر الويب — ببساطة.",
      githubUrl: null, role: "التصميم والتطوير", status: "حي",
      scope: ["UI/UX", "تجاوب", "معالجة PDF", "حسابات", "اشتراكات", "النشر", "SEO"],
      overview: [
        "PDF2Wordly منصة SaaS صُممت وطُورت لجعل تحويل PDF إلى Word سهلًا ومتاحًا عبر الإنترنت.",
        "يحوّل المستخدمون المستندات عبر تدفق موجّه ويديرون حساباتهم ويستخدمون الاشتراكات — كل ذلك في المتصفح.",
      ],
      problem: "أدوات التحويل مزدحمة أو تتطلب تنزيلات. المستخدم يريد مسارًا سريعًا: رفع ثم تحويل ثم تنزيل.",
      concept: "تدفق minimal بأسعار واضحة وحسابات — حلقة SaaS حقيقية لا صفحة أداة عابرة.",
      solution: "تجربة SaaS متجاوبة: تحويل وحسابات واشتراكات ونشر وSEO.",
      features: ["تحويل PDF إلى Word عبر الويب", "OCR للمستندات الممسوحة", "حسابات وتسجيل دخول", "خطتا Free وPro", "واجهة تحويل متجاوبة", "صفحات المنتج والأسعار", "بنية SaaS مهيأة للبحث"],
      design: "واجهة دون تشتيت: إجراء رئيسي واحد لكل خطوة وحالات ملف واضحة وتقدم مطمئن.",
      tech: ["تطوير متجاوب", "معالجة PDF وتدفقات التحويل", "الحسابات والمصادقة", "تكامل الاشتراكات", "النشر والاستضافة", "معمارية SEO للـSaaS"],
      deploy: "منشور كمنتج SaaS: استضافة آمنة وصفحات منظمة للبحث وميزانيات أداء للمحوّل.",
      lessons: "ثقة SaaS تُبنى في التفاصيل: حالات الملف ورسائل الخطأ ووضوح الأسعار.",
    },
  },
};

export function getProjects(locale: Locale): Project[] {
  return [data[locale].l9a5dma, data[locale].pdf2wordly];
}

export function getProject(locale: Locale, slug: string): Project | undefined {
  const l = data[locale] ?? data.en;
  return (l as Record<string, Project>)[slug];
}

export function getProjectSlugs(): ProjectSlug[] {
  return ["l9a5dma", "pdf2wordly"];
}

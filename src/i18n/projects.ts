import type { Locale } from "./config";

export type ProjectSlug = "land-book" | "startdownloading" | "l9a5dma" | "pdf2wordly";

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
  "land-book": { liveUrl: "https://land-book.com/", initials: "LB", accent: "#0F766E" },
  startdownloading: { liveUrl: "https://startdownloading.com/", initials: "SD", accent: "#7C2D12" },
  l9a5dma: { liveUrl: "https://l9a5dma.ma/", initials: "L9", accent: "#2B5CFF" },
  pdf2wordly: { liveUrl: "https://pdf2wordly.com/", initials: "PW", accent: "#111214" },
};

const data: Record<Locale, Record<ProjectSlug, Project>> = {
  en: {
    "land-book": {
      ...base["land-book"], slug: "land-book",
      category: "Design gallery",
      title: "Land-book",
      tagline: "A curated website design inspiration gallery featuring hand-picked references for creatives.",
      githubUrl: null, role: "Design & Development", status: "Live",
      scope: ["UI/UX", "Responsive", "Gallery", "Curation", "Search", "Deployment", "SEO"],
      overview: [
        "Land-book is a curated website design gallery designed and developed to showcase hand-picked website design inspiration for creatives.",
        "Visitors browse selected website references through a clean gallery experience and open the live sites directly for deeper exploration.",
      ],
      problem: "Design inspiration is scattered across the web — mixed quality, no curation, no single place to browse standout website design.",
      concept: "A curated gallery where every featured website is hand-picked: quality references for creatives, easy to browse and revisit.",
      solution: "A responsive gallery with curated listings, browsing by style and category, and direct links to each featured live website.",
      features: ["Hand-picked website selection", "Curated design gallery", "Browse by style and category", "Direct links to featured sites", "Search and discovery", "Responsive mobile-first layout", "SEO-ready gallery pages"],
      design: "Gallery-first layout with generous visuals and clear hierarchy. Browsing stays fast and distraction-free on every screen.",
      tech: ["Responsive web development", "Gallery and listing architecture", "Search and filtering", "Curation workflow", "Deployment with SSL and hosting", "SEO metadata and semantic structure"],
      deploy: "Deployed with secure hosting, custom domain, and on-page SEO so the gallery and its references are discoverable via search.",
      lessons: "Curation is the product: a gallery is only as good as its selection, so every entry must earn its place.",
    },
    startdownloading: {
      ...base.startdownloading, slug: "startdownloading",
      category: "Utility web app",
      title: "StartDownloading",
      tagline: "A fast, simple video downloader for popular platforms including YouTube, TikTok, Instagram and Twitter/X.",
      githubUrl: null, role: "Design & Development", status: "Live",
      scope: ["UI/UX", "Responsive", "Video tools", "Multi-device", "Deployment", "SEO"],
      overview: [
        "StartDownloading is a fast, simple video downloading website designed and developed for everyday users across devices.",
        "Users paste a video link, pick their option, and download — a short guided flow built around speed, quality and simplicity.",
      ],
      problem: "Downloading videos for offline use is often slow, cluttered with ads and confusing steps, or locked behind accounts and installs.",
      concept: "One simple flow: paste a link, choose quality, download — free, fast and working on any device.",
      solution: "A responsive web app supporting downloads from YouTube, TikTok, Instagram and Twitter/X, with a minimal interface and clear steps.",
      features: ["Downloads from YouTube, TikTok, Instagram and Twitter/X", "Simple paste-link workflow", "Fast, high-quality downloads", "Multi-device support", "Free access, no clutter", "Responsive mobile-first layout", "SEO-ready pages"],
      design: "One primary action per step: paste, choose, download. Clear states and feedback keep the flow effortless on mobile and desktop.",
      tech: ["Responsive web development", "Video download workflows", "Multi-platform link handling", "Performance-focused frontend", "Deployment and hosting", "SEO metadata and semantic structure"],
      deploy: "Deployed with secure hosting, custom domain, and performance budgets so the download flow stays fast on every device.",
      lessons: "Utility products win on speed and clarity: every extra step or distraction directly costs conversions.",
    },
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
    "land-book": {
      ...base["land-book"], slug: "land-book",
      category: "Galerie de design",
      title: "Land-book",
      tagline: "Une galerie d'inspiration web design avec une sélection de sites choisis pour les créatifs.",
      githubUrl: null, role: "Design & Développement", status: "En ligne",
      scope: ["UI/UX", "Responsive", "Galerie", "Curation", "Recherche", "Déploiement", "SEO"],
      overview: [
        "Land-book est une galerie de design web conçue et développée pour présenter une sélection d'inspirations choisies à la main pour les créatifs.",
        "Les visiteurs parcourent les références via une galerie épurée et ouvrent les sites en direct pour les explorer en détail.",
      ],
      problem: "L'inspiration design est dispersée sur le web — qualité inégale, aucune curation, aucun lieu unique pour parcourir le meilleur du web design.",
      concept: "Une galerie où chaque site est sélectionné à la main : des références de qualité pour les créatifs, faciles à parcourir.",
      solution: "Une galerie responsive avec sélections éditoriales, parcours par style et catégorie, et liens directs vers chaque site présenté.",
      features: ["Sélection de sites choisie à la main", "Galerie design éditoriale", "Parcours par style et catégorie", "Liens directs vers les sites", "Recherche et découverte", "Layout mobile-first", "Pages galerie SEO-ready"],
      design: "Une galerie d'abord visuelle : hiérarchie claire et rythme généreux. La navigation reste rapide et sans distraction sur tous les écrans.",
      tech: ["Développement responsive", "Architecture galerie et listings", "Recherche et filtres", "Workflow de curation", "Déploiement SSL et hébergement", "Métadonnées SEO et structure sémantique"],
      deploy: "Déployé avec hébergement sécurisé, domaine personnalisé et SEO on-page pour être trouvé via la recherche.",
      lessons: "La curation est le produit : une galerie ne vaut que par sa sélection, chaque entrée doit mériter sa place.",
    },
    startdownloading: {
      ...base.startdownloading, slug: "startdownloading",
      category: "Application web utilitaire",
      title: "StartDownloading",
      tagline: "Un téléchargeur vidéo rapide et simple pour YouTube, TikTok, Instagram et Twitter/X.",
      githubUrl: null, role: "Design & Développement", status: "En ligne",
      scope: ["UI/UX", "Responsive", "Outils vidéo", "Multi-appareils", "Déploiement", "SEO"],
      overview: [
        "StartDownloading est un site de téléchargement vidéo rapide et simple, conçu et développé pour un usage quotidien sur tous les appareils.",
        "L'utilisateur colle un lien, choisit son option et télécharge — un parcours guidé court axé sur vitesse, qualité et simplicité.",
      ],
      problem: "Télécharger des vidéos est souvent lent, encombré de publicités et d'étapes confuses, ou verrouillé derrière comptes et installations.",
      concept: "Un seul parcours simple : coller un lien, choisir la qualité, télécharger — gratuit, rapide, sur tout appareil.",
      solution: "Une web app responsive prenant en charge YouTube, TikTok, Instagram et Twitter/X, avec une interface minimale et des étapes claires.",
      features: ["Téléchargement depuis YouTube, TikTok, Instagram et Twitter/X", "Parcours simple par lien collé", "Téléchargements rapides en haute qualité", "Support multi-appareils", "Accès gratuit et sans encombre", "Interface mobile-first", "Pages SEO-ready"],
      design: "Une action principale par étape : coller, choisir, télécharger. Des états clairs pour un parcours sans effort sur mobile et desktop.",
      tech: ["Développement responsive", "Workflows de téléchargement vidéo", "Gestion de liens multi-plateformes", "Frontend axé performance", "Déploiement et hébergement", "Métadonnées SEO et structure sémantique"],
      deploy: "Déployé avec hébergement sécurisé, domaine personnalisé et budgets performance pour un parcours toujours rapide.",
      lessons: "Les utilitaires gagnent par vitesse et clarté : chaque étape superflue coûte directement des conversions.",
    },
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
    "land-book": {
      ...base["land-book"], slug: "land-book",
      category: "معرض تصاميم",
      title: "Land-book",
      tagline: "معرض مُنتقى لإلهام تصميم المواقع يعرض مراجع مختارة بعناية للمبدعين.",
      githubUrl: null, role: "التصميم والتطوير", status: "حي",
      scope: ["UI/UX", "تجاوب", "معرض", "انتقاء", "بحث", "النشر", "SEO"],
      overview: [
        "Land-book معرض لتصاميم المواقع صُمم وطُوّر لعرض إلهام مختار بعناية للمبدعين.",
        "يتصفح الزوار المراجع عبر تجربة معرض نظيفة ويفتحون المواقع الحيّة مباشرة لاستكشاف أعمق.",
      ],
      problem: "إلهام التصميم مبعثر عبر الويب — جودة متفاوتة ولا انتقاء ولا مكان واحد لتصفح أميز تصاميم المواقع.",
      concept: "معرض مُنتقى حيث كل موقع مختار بعناية: مراجع عالية الجودة للمبدعين سهلة التصفح والعودة إليها.",
      solution: "معرض متجاوب بقوائم منتقاة وتصفح حسب النمط والفئة وروابط مباشرة لكل موقع معروض.",
      features: ["اختيار يدوي للمواقع", "معرض تصميم مُنتقى", "تصفح حسب النمط والفئة", "روابط مباشرة للمواقع المعروضة", "بحث واكتشاف", "تصميم يبدأ من الجوال", "صفحات مهيأة لمحركات البحث"],
      design: "المعرض أولًا: صور سخية وتسلسل واضح. التصفح سريع ودون تشتيت على كل الشاشات.",
      tech: ["تطوير متجاوب", "بنية معرض وقوائم", "بحث وتصفية", "تدفق انتقاء المحتوى", "نشر باستضافة آمنة", "بنية دلالية وSEO"],
      deploy: "منشور باستضافة آمنة ونطاق مخصص وSEO يسمح بالوصول عبر البحث.",
      lessons: "الانتقاء هو المنتج: المعرض بقدر جودة اختياراته، وكل عنصر يجب أن يستحق مكانه.",
    },
    startdownloading: {
      ...base.startdownloading, slug: "startdownloading",
      category: "أداة ويب",
      title: "StartDownloading",
      tagline: "أداة سريعة وبسيطة لتنزيل الفيديو من منصات شهيرة منها YouTube وTikTok وInstagram وTwitter/X.",
      githubUrl: null, role: "التصميم والتطوير", status: "حي",
      scope: ["UI/UX", "تجاوب", "أدوات فيديو", "متعدد الأجهزة", "النشر", "SEO"],
      overview: [
        "StartDownloading موقع سريع وبسيط لتنزيل الفيديو صُمم وطُوّر للاستخدام اليومي على كل الأجهزة.",
        "يلصق المستخدم رابط الفيديو ويختار الخيار ثم يُنزّل — تدفق موجّه قصير يركز على السرعة والجودة والبساطة.",
      ],
      problem: "تنزيل الفيديو للمشاهدة دون اتصال غالبًا بطيء ومزدحم بالإعلانات والخطوات المربكة أو مقيد بحسابات وتثبيتات.",
      concept: "تدفق واحد بسيط: الصق الرابط واختر الجودة ثم نزّل — مجاني وسريع ويعمل على أي جهاز.",
      solution: "تطبيق ويب متجاوب يدعم التنزيل من YouTube وTikTok وInstagram وTwitter/X بواجهة بسيطة وخطوات واضحة.",
      features: ["تنزيل من YouTube وTikTok وInstagram وTwitter/X", "تدفق بسيط بلصق الرابط", "تنزيلات سريعة بجودة عالية", "دعم متعدد الأجهزة", "وصول مجاني دون ازدحام", "تصميم يبدأ من الجوال", "صفحات مهيأة للبحث"],
      design: "إجراء رئيسي واحد لكل خطوة: الصق ثم اختر ثم نزّل. حالات واضحة تجعل التدفق سهلًا على الجوال وسطح المكتب.",
      tech: ["تطوير متجاوب", "تدفقات تنزيل الفيديو", "معالجة روابط متعددة المنصات", "واجهة تركز على الأداء", "النشر والاستضافة", "بنية دلالية وSEO"],
      deploy: "منشور باستضافة آمنة ونطاق مخصص وميزانيات أداء ليبقى التدفق سريعًا على كل جهاز.",
      lessons: "الأدوات المساعدة تكسب بالسرعة والوضوح: كل خطوة زائدة تكلّف مباشرة.",
    },
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
  return [data[locale]["land-book"], data[locale].startdownloading, data[locale].l9a5dma, data[locale].pdf2wordly];
}

export function getProject(locale: Locale, slug: string): Project | undefined {
  const l = data[locale] ?? data.en;
  return (l as Record<string, Project>)[slug];
}

export function getProjectSlugs(): ProjectSlug[] {
  return ["land-book", "startdownloading", "l9a5dma", "pdf2wordly"];
}

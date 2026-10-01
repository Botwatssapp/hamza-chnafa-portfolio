export const LOCALES = ['en', 'fr', 'ar'] as const

export type Locale = (typeof LOCALES)[number]

export const NAV_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'contact'] as const

export type NavId = (typeof NAV_IDS)[number]

export type Direction = 'ltr' | 'rtl'

export const LOCALE_META: Record<
  Locale,
  { code: string; nativeName: string; dir: Direction; htmlLang: string; ogLocale: string }
> = {
  en: { code: 'EN', nativeName: 'English', dir: 'ltr', htmlLang: 'en', ogLocale: 'en_US' },
  fr: { code: 'FR', nativeName: 'Français', dir: 'ltr', htmlLang: 'fr', ogLocale: 'fr_FR' },
  ar: { code: 'AR', nativeName: 'العربية', dir: 'rtl', htmlLang: 'ar', ogLocale: 'ar_MA' },
}

type Dictionary = {
  nav: Record<NavId, string>
  aria: {
    mainNav: string
    language: string
    languageMenu: string
    openMenu: string
    closeMenu: string
    home: string
    skipToContent: string
  }
  document: {
    title: string
    description: string
  }
  hero: {
    eyebrow: string
    headline: string
    description: string
    primaryCta: string
    secondaryCta: string
    scroll: string
    illustrationAlt: string
  }
  about: {
    eyebrow: string
    heading: string
    statement: string
    paragraph1: string
    paragraph2: string
    educationTitle: string
    journeyTitle: string
    focusTitle: string
    focusRole: string
    focusAreas: string
    illustrationAlt: string
    eduOfficeYear: string
    eduOfficeTitle: string
    eduOfficeDetail: string
    eduBacYear: string
    eduBacTitle: string
    eduBacDetail: string
    eduOfpptYear: string
    eduOfpptTitle: string
    eduOfpptOption: string
    eduOfpptInstitution: string
    eduOfpptYear1: string
    eduOfpptYear2: string
    journeyOffice: string
    journeyBac: string
    journeyOfppt: string
    journeyOfpptMeta: string
    journeyNextYear: string
    journeyNext: string
  }
  skills: {
    eyebrow: string
    heading: string
    description: string
    illustrationAlt: string
    frontendTitle: string
    frontendDescription: string
    backendTitle: string
    backendDescription: string
    databaseTitle: string
    databaseDescription: string
    developmentTitle: string
    developmentDescription: string
    developmentItems: [string, string, string, string]
  }
  projects: {
    eyebrow: string
    heading: string
    description: string
    featuresLabel: string
    industrialCategory: string
    industrialTitle: string
    industrialDescription: string
    industrialFeatures: [string, string, string]
    industrialAlt: string
    medicalCategory: string
    medicalTitle: string
    medicalDescription: string
    medicalFeatures: [string, string, string]
    medicalAlt: string
  }
  experience: {
    eyebrow: string
    heading: string
    description: string
    year: string
    type: string
    company: string
    contributionsLabel: string
    contributions: [string, string]
    illustrationAlt: string
  }
  contact: {
    eyebrow: string
    heading: string
    description: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    submit: string
    sending: string
    nameRequired: string
    emailInvalid: string
    messageRequired: string
    success: string
    sendError: string
    emailMethod: string
    githubMethod: string
    linkedinMethod: string
    comingSoon: string
    illustrationAlt: string
  }
}

export const SKILL_TECH_GROUPS = [
  {
    id: 'frontend',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    id: 'backend',
    items: ['Laravel', 'PHP', 'REST APIs'],
  },
  {
    id: 'database',
    items: ['MySQL', 'Git', 'GitHub'],
  },
] as const

export const HERO_STACK = [
  'React',
  'Laravel',
  'PHP',
  'JavaScript',
  'MySQL',
  'Git',
] as const

export const PROJECTS_META = [
  {
    id: 'industrial',
    number: '01',
    image: '/images/projects/industrial-supervision.webp',
    techs: ['React', 'Laravel', 'WebSocket'],
    reverse: false,
  },
  {
    id: 'medical',
    number: '02',
    image: '/images/projects/medical-booking.webp',
    techs: ['Laravel', 'MySQL'],
    reverse: true,
  },
] as const

export const translations: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    aria: {
      mainNav: 'Main navigation',
      language: 'Language',
      languageMenu: 'Choose language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      home: 'Hamza Chnafa — Home',
      skipToContent: 'Skip to content',
    },
    document: {
      title: 'Hamza Chnafa — Full Stack Developer',
      description:
        'Hamza Chnafa is a Full Stack Developer from Morocco, building modern web applications with React, Laravel, PHP, JavaScript and MySQL.',
    },
    hero: {
      eyebrow: 'Full Stack Developer',
      headline: 'I turn ideas into\nmodern digital experiences.',
      description:
        "I'm Hamza Chnafa, a Full Stack Developer passionate about building modern web applications and turning ideas into useful digital products.",
      primaryCta: 'View My Projects',
      secondaryCta: 'Contact Me',
      scroll: 'Explore',
      illustrationAlt:
        'Illustration of a Full Stack Developer working at a desk',
    },
    about: {
      eyebrow: 'About me',
      heading: 'A developer passionate about turning ideas into digital experiences.',
      statement: "I'm Hamza Chnafa, a Full Stack Developer from Morocco.",
      paragraph1:
        'I enjoy building modern web applications and transforming ideas into practical digital solutions. My training has allowed me to explore both frontend and backend development, from creating user interfaces to developing APIs and working with databases.',
      paragraph2:
        "I'm continuously learning, experimenting with new technologies, and developing my skills through practical projects as I begin my professional journey in web development.",
      educationTitle: 'Education',
      journeyTitle: 'My journey',
      focusTitle: 'Current focus',
      focusRole: 'Full Stack Web Development',
      focusAreas: 'Frontend · Backend · APIs · Databases',
      illustrationAlt:
        'Illustration of a developer studying and building software in a calm workspace',
      eduOfficeYear: '2023',
      eduOfficeTitle: 'Diploma in Office Computing',
      eduOfficeDetail: 'Informatique Bureautique',
      eduBacYear: '2024',
      eduBacTitle: 'Baccalaureate — Physical Sciences',
      eduBacDetail: 'Sciences Physiques',
      eduOfpptYear: '2024 — 2026',
      eduOfpptTitle: 'Technicien Spécialisé en Développement Digital',
      eduOfpptOption: 'Web Full Stack',
      eduOfpptInstitution: 'OFPPT / ISTA',
      eduOfpptYear1: '1st year · 2024–2025',
      eduOfpptYear2: '2nd year · 2025–2026',
      journeyOffice: 'Diploma in Office Computing',
      journeyBac: 'Baccalaureate — Physical Sciences',
      journeyOfppt: 'Digital Development — Web Full Stack',
      journeyOfpptMeta: 'OFPPT / ISTA',
      journeyNextYear: '2026',
      journeyNext: 'Beginning my professional journey as a Full Stack Developer',
    },
    skills: {
      eyebrow: 'My skills',
      heading: 'Tools I use to build digital experiences.',
      description:
        'A practical set of technologies and development skills I use to create modern, responsive and useful web applications.',
      illustrationAlt: 'Developer working on a web development project',
      frontendTitle: 'Frontend',
      frontendDescription: 'Building responsive and interactive user interfaces.',
      backendTitle: 'Backend',
      backendDescription: 'Building application logic and connecting web services.',
      databaseTitle: 'Database & Tools',
      databaseDescription: 'Managing data and maintaining development workflows.',
      developmentTitle: 'Development',
      developmentDescription:
        'Combining frontend, backend and data into practical web solutions.',
      developmentItems: [
        'Full Stack Web Development',
        'Responsive Design',
        'API Integration',
        'Database Design',
      ],
    },
    projects: {
      eyebrow: 'Selected projects',
      heading: 'Things I’ve built.',
      description:
        'A selection of practical web projects developed to explore real-world interfaces, application logic, data management and connected systems.',
      featuresLabel: 'Key features',
      industrialCategory: 'Industrial / Web application',
      industrialTitle: 'Industrial Supervision System',
      industrialDescription:
        'A web-based supervision application designed to monitor industrial equipment and display operational data in real time.',
      industrialFeatures: [
        'Industrial equipment monitoring',
        'Real-time data display',
        'Web-based supervision interface',
      ],
      industrialAlt: 'Industrial supervision application concept',
      medicalCategory: 'Healthcare / Web application',
      medicalTitle: 'Medical Appointment Booking Application',
      medicalDescription:
        'A web platform designed to manage patient appointments and organize interactions between patients and doctors.',
      medicalFeatures: [
        'Patient and doctor user management',
        'Appointment management',
        'Organized medical booking workflow',
      ],
      medicalAlt: 'Medical appointment booking application concept',
    },
    experience: {
      eyebrow: 'Experience',
      heading: 'My professional journey.',
      description:
        'A first practical experience in web development, contributing to real web projects and discovering the professional development environment.',
      year: '2026',
      type: 'Web Development Internship',
      company: 'OCP Fauget Studio',
      contributionsLabel: 'Key contributions',
      contributions: ['Website creation', 'Participation in application development'],
      illustrationAlt: 'Full Stack Developer working in a professional workspace',
    },
    contact: {
      eyebrow: 'Get in touch',
      heading: 'Let’s build something together.',
      description:
        'Have a project, opportunity or idea in mind? Feel free to reach out. I’m always open to discussing web development projects and new opportunities.',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project or opportunity...',
      submit: 'Send Message',
      sending: 'Sending...',
      nameRequired: 'Name is required.',
      emailInvalid: 'Please enter a valid email address.',
      messageRequired: 'Message is required.',
      success: 'Message sent successfully. Thank you for contacting me.',
      sendError: 'Failed to send the message. Please try again.',
      emailMethod: 'Email',
      githubMethod: 'GitHub',
      linkedinMethod: 'LinkedIn',
      comingSoon: 'Coming soon',
      illustrationAlt: 'Calm developer workspace suggesting communication and collaboration',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Expérience',
      contact: 'Contact',
    },
    aria: {
      mainNav: 'Navigation principale',
      language: 'Langue',
      languageMenu: 'Choisir la langue',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      home: 'Hamza Chnafa — Accueil',
      skipToContent: 'Aller au contenu',
    },
    document: {
      title: 'Hamza Chnafa — Développeur Full Stack',
      description:
        'Hamza Chnafa est développeur Full Stack au Maroc. Il crée des applications web modernes avec React, Laravel, PHP, JavaScript et MySQL.',
    },
    hero: {
      eyebrow: 'Développeur Full Stack',
      headline: 'Je transforme les idées\nen expériences numériques modernes.',
      description:
        'Je suis Hamza Chnafa, développeur Full Stack passionné par la création d’applications web modernes et de solutions numériques utiles.',
      primaryCta: 'Voir mes projets',
      secondaryCta: 'Me contacter',
      scroll: 'Explorer',
      illustrationAlt:
        'Illustration d’un développeur Full Stack travaillant à son bureau',
    },
    about: {
      eyebrow: 'À propos de moi',
      heading:
        'Un développeur passionné par la transformation des idées en expériences numériques.',
      statement: 'Je suis Hamza Chnafa, développeur Full Stack au Maroc.',
      paragraph1:
        'J’aime créer des applications web modernes et transformer des idées en solutions numériques concrètes. Ma formation m’a permis d’explorer le développement frontend et backend, de la création des interfaces utilisateur au développement d’API et au travail avec les bases de données.',
      paragraph2:
        'Je continue à apprendre, à expérimenter de nouvelles technologies et à développer mes compétences à travers des projets pratiques, alors que je commence mon parcours professionnel dans le développement web.',
      educationTitle: 'Formation',
      journeyTitle: 'Mon parcours',
      focusTitle: 'Domaine actuel',
      focusRole: 'Développement Web Full Stack',
      focusAreas: 'Frontend · Backend · API · Bases de données',
      illustrationAlt:
        'Illustration d’un développeur qui apprend et développe des logiciels dans un espace de travail calme',
      eduOfficeYear: '2023',
      eduOfficeTitle: 'Diplôme en Informatique Bureautique',
      eduOfficeDetail: 'Informatique Bureautique',
      eduBacYear: '2024',
      eduBacTitle: 'Baccalauréat — Sciences Physiques',
      eduBacDetail: 'Sciences Physiques',
      eduOfpptYear: '2024 — 2026',
      eduOfpptTitle: 'Technicien Spécialisé en Développement Digital',
      eduOfpptOption: 'Option Web Full Stack',
      eduOfpptInstitution: 'OFPPT / ISTA',
      eduOfpptYear1: '1ère année · 2024–2025',
      eduOfpptYear2: '2ème année · 2025–2026',
      journeyOffice: 'Diplôme en Informatique Bureautique',
      journeyBac: 'Baccalauréat — Sciences Physiques',
      journeyOfppt: 'Développement Digital — Web Full Stack',
      journeyOfpptMeta: 'OFPPT / ISTA',
      journeyNextYear: '2026',
      journeyNext: 'Début de mon parcours professionnel en tant que développeur Full Stack',
    },
    skills: {
      eyebrow: 'Mes compétences',
      heading: 'Les outils que j’utilise pour créer des expériences numériques.',
      description:
        'Un ensemble pratique de technologies et de compétences que j’utilise pour créer des applications web modernes, adaptées à tous les écrans et utiles.',
      illustrationAlt: 'Développeur travaillant sur un projet de développement web',
      frontendTitle: 'Frontend',
      frontendDescription:
        'Création d’interfaces utilisateur interactives et adaptées à tous les écrans.',
      backendTitle: 'Backend',
      backendDescription:
        'Développement de la logique applicative et connexion aux services web.',
      databaseTitle: 'Base de données et outils',
      databaseDescription: 'Gestion des données et organisation du flux de développement.',
      developmentTitle: 'Développement',
      developmentDescription:
        'Combinaison du frontend, du backend et des données pour créer des solutions web pratiques.',
      developmentItems: [
        'Développement Web Full Stack',
        'Design responsive',
        'Intégration d’API',
        'Conception de bases de données',
      ],
    },
    projects: {
      eyebrow: 'Projets sélectionnés',
      heading: 'Des projets que j’ai réalisés.',
      description:
        'Une sélection de projets web pratiques développés pour explorer des interfaces réelles, la logique applicative, la gestion des données et les systèmes connectés.',
      featuresLabel: 'Fonctionnalités clés',
      industrialCategory: 'Industriel / Application web',
      industrialTitle: 'Système de supervision industrielle',
      industrialDescription:
        'Une application web de supervision conçue pour surveiller les équipements industriels et afficher les données opérationnelles en temps réel.',
      industrialFeatures: [
        'Surveillance des équipements industriels',
        'Affichage des données en temps réel',
        'Interface web de supervision',
      ],
      industrialAlt: 'Concept d’application de supervision industrielle',
      medicalCategory: 'Santé / Application web',
      medicalTitle: 'Application de réservation de rendez-vous médicaux',
      medicalDescription:
        'Une plateforme web conçue pour gérer les rendez-vous des patients et organiser les interactions entre patients et médecins.',
      medicalFeatures: [
        'Gestion des utilisateurs patients et médecins',
        'Gestion des rendez-vous',
        'Organisation du processus de réservation médicale',
      ],
      medicalAlt: 'Concept d’application de réservation de rendez-vous médicaux',
    },
    experience: {
      eyebrow: 'Expérience',
      heading: 'Mon parcours professionnel.',
      description:
        'Une première expérience concrète en développement web, à travers la contribution à des projets web et la découverte de l’environnement professionnel du développement.',
      year: '2026',
      type: 'Stage en Développement Web',
      company: 'OCP Fauget Studio',
      contributionsLabel: 'Contributions principales',
      contributions: [
        'Création d’un site web',
        'Participation au développement d’une application',
      ],
      illustrationAlt: 'Développeur Full Stack travaillant dans un espace professionnel',
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Construisons quelque chose ensemble.',
      description:
        'Vous avez un projet, une opportunité ou une idée en tête ? N’hésitez pas à me contacter. Je suis toujours ouvert aux projets de développement web et aux nouvelles opportunités.',
      nameLabel: 'Nom',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Email',
      emailPlaceholder: 'votre@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Parlez-moi de votre projet ou de votre opportunité...',
      submit: 'Envoyer le message',
      sending: 'Envoi...',
      nameRequired: 'Le nom est obligatoire.',
      emailInvalid: 'Veuillez saisir une adresse e-mail valide.',
      messageRequired: 'Le message est obligatoire.',
      success: 'Message envoyé avec succès. Merci de m’avoir contacté.',
      sendError: 'Échec de l’envoi du message. Veuillez réessayer.',
      emailMethod: 'Email',
      githubMethod: 'GitHub',
      linkedinMethod: 'LinkedIn',
      comingSoon: 'Bientôt disponible',
      illustrationAlt: 'Espace de travail calme évoquant l’échange et la collaboration',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'نبذة عني',
      skills: 'المهارات',
      projects: 'المشاريع',
      experience: 'الخبرة',
      contact: 'تواصل معي',
    },
    aria: {
      mainNav: 'التنقل الرئيسي',
      language: 'اللغة',
      languageMenu: 'اختيار اللغة',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      home: 'حمزة شنافة — الرئيسية',
      skipToContent: 'الانتقال إلى المحتوى',
    },
    document: {
      title: 'حمزة شنافة — مطوّر Full Stack',
      description:
        'حمزة شنافة مطوّر Full Stack من المغرب، يطوّر تطبيقات ويب حديثة باستخدام React وLaravel وPHP وJavaScript وMySQL.',
    },
    hero: {
      eyebrow: 'مُطوّر Full Stack',
      headline: 'أحوّل الأفكار إلى\nتجارب رقمية حديثة.',
      description:
        'أنا حمزة شنافة، مطوّر Full Stack شغوف بتطوير تطبيقات ويب حديثة وتحويل الأفكار إلى حلول رقمية مفيدة.',
      primaryCta: 'عرض مشاريعي',
      secondaryCta: 'تواصل معي',
      scroll: 'اكتشف',
      illustrationAlt: 'رسم توضيحي لمطوّر Full Stack يعمل على مكتبه',
    },
    about: {
      eyebrow: 'نبذة عني',
      heading: 'مطوّر شغوف بتحويل الأفكار إلى تجارب رقمية.',
      statement: 'أنا حمزة شنافة، مطوّر Full Stack من المغرب.',
      paragraph1:
        'أستمتع بتطوير تطبيقات ويب حديثة وتحويل الأفكار إلى حلول رقمية عملية. مكّنني تكويني من استكشاف تطوير الواجهات الأمامية والخلفية، بدءًا من إنشاء واجهات المستخدم وصولًا إلى تطوير واجهات API والعمل مع قواعد البيانات.',
      paragraph2:
        'أواصل التعلم وتجربة تقنيات جديدة وتطوير مهاراتي من خلال المشاريع التطبيقية، بينما أبدأ مساري المهني في مجال تطوير الويب.',
      educationTitle: 'التكوين',
      journeyTitle: 'مساري',
      focusTitle: 'مجالي الحالي',
      focusRole: 'تطوير الويب Full Stack',
      focusAreas: 'الواجهة الأمامية · الواجهة الخلفية · API · قواعد البيانات',
      illustrationAlt:
        'رسم توضيحي لمطوّر يتعلم ويطوّر برمجيات في فضاء عمل هادئ',
      eduOfficeYear: '2023',
      eduOfficeTitle: 'دبلوم في الإعلاميات المكتبية',
      eduOfficeDetail: 'Informatique Bureautique',
      eduBacYear: '2024',
      eduBacTitle: 'بكالوريا — العلوم الفيزيائية',
      eduBacDetail: 'Sciences Physiques',
      eduOfpptYear: '2024 — 2026',
      eduOfpptTitle: 'تقني متخصص في التطوير الرقمي',
      eduOfpptOption: 'ويب Full Stack',
      eduOfpptInstitution: 'OFPPT / ISTA',
      eduOfpptYear1: 'السنة الأولى · 2024–2025',
      eduOfpptYear2: 'السنة الثانية · 2025–2026',
      journeyOffice: 'دبلوم في الإعلاميات المكتبية',
      journeyBac: 'بكالوريا — العلوم الفيزيائية',
      journeyOfppt: 'التطوير الرقمي — الويب Full Stack',
      journeyOfpptMeta: 'OFPPT / ISTA',
      journeyNextYear: '2026',
      journeyNext: 'بداية مساري المهني كمطوّر Full Stack',
    },
    skills: {
      eyebrow: 'مهاراتي',
      heading: 'الأدوات التي أستخدمها لبناء تجارب رقمية.',
      description:
        'مجموعة عملية من التقنيات والمهارات التي أستخدمها لإنشاء تطبيقات ويب حديثة ومتجاوبة ومفيدة.',
      illustrationAlt: 'مطوّر يعمل على مشروع تطوير ويب',
      frontendTitle: 'الواجهة الأمامية',
      frontendDescription: 'بناء واجهات مستخدم متجاوبة وتفاعلية.',
      backendTitle: 'الواجهة الخلفية',
      backendDescription: 'بناء منطق التطبيقات وربط خدمات الويب.',
      databaseTitle: 'قواعد البيانات والأدوات',
      databaseDescription: 'إدارة البيانات وتنظيم سير العمل البرمجي.',
      developmentTitle: 'التطوير',
      developmentDescription:
        'دمج الواجهة الأمامية والخلفية والبيانات لإنشاء حلول ويب عملية.',
      developmentItems: [
        'تطوير الويب Full Stack',
        'التصميم المتجاوب',
        'تكامل API',
        'تصميم قواعد البيانات',
      ],
    },
    projects: {
      eyebrow: 'مشاريعي المختارة',
      heading: 'مشاريع قمت بتطويرها.',
      description:
        'مجموعة من المشاريع العملية التي طوّرتها لاستكشاف واجهات حقيقية، ومنطق التطبيقات، وإدارة البيانات والأنظمة المتصلة.',
      featuresLabel: 'الميزات الرئيسية',
      industrialCategory: 'صناعي / تطبيق ويب',
      industrialTitle: 'نظام المراقبة الصناعية',
      industrialDescription:
        'تطبيق ويب للمراقبة صُمّم لتتبع المعدات الصناعية وعرض البيانات التشغيلية في الوقت الفعلي.',
      industrialFeatures: [
        'مراقبة المعدات الصناعية',
        'عرض البيانات في الوقت الفعلي',
        'واجهة ويب للمراقبة',
      ],
      industrialAlt: 'مفهوم تطبيق المراقبة الصناعية',
      medicalCategory: 'رعاية صحية / تطبيق ويب',
      medicalTitle: 'تطبيق حجز المواعيد الطبية',
      medicalDescription:
        'منصة ويب مصممة لإدارة مواعيد المرضى وتنظيم التفاعل بين المرضى والأطباء.',
      medicalFeatures: [
        'إدارة المستخدمين من المرضى والأطباء',
        'إدارة المواعيد',
        'تنظيم عملية حجز المواعيد الطبية',
      ],
      medicalAlt: 'مفهوم تطبيق حجز المواعيد الطبية',
    },
    experience: {
      eyebrow: 'الخبرة',
      heading: 'مساري المهني.',
      description:
        'تجربة عملية أولى في مجال تطوير الويب، من خلال المساهمة في مشاريع ويب واكتشاف بيئة العمل المهنية في مجال التطوير.',
      year: '2026',
      type: 'تدريب في تطوير الويب',
      company: 'OCP Fauget Studio',
      contributionsLabel: 'المساهمات الرئيسية',
      contributions: ['إنشاء موقع ويب', 'المساهمة في تطوير تطبيق'],
      illustrationAlt: 'مطوّر Full Stack يعمل في فضاء عمل مهني',
    },
    contact: {
      eyebrow: 'تواصل معي',
      heading: 'لنبنِ شيئًا معًا.',
      description:
        'لديك مشروع أو فرصة أو فكرة؟ لا تتردد في التواصل معي. أنا منفتح على مشاريع تطوير الويب والفرص المهنية الجديدة.',
      nameLabel: 'الاسم',
      namePlaceholder: 'اسمك',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'you@email.com',
      messageLabel: 'الرسالة',
      messagePlaceholder: 'أخبرني عن مشروعك أو فرصتك...',
      submit: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال...',
      nameRequired: 'الاسم مطلوب.',
      emailInvalid: 'يرجى إدخال بريد إلكتروني صالح.',
      messageRequired: 'الرسالة مطلوبة.',
      success: 'تم إرسال الرسالة بنجاح. شكرًا لتواصلك معي.',
      sendError: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
      emailMethod: 'البريد الإلكتروني',
      githubMethod: 'GitHub',
      linkedinMethod: 'LinkedIn',
      comingSoon: 'قريبًا',
      illustrationAlt: 'فضاء عمل هادئ يوحي بالتواصل والتعاون',
    },
  },
}

const STORAGE_KEY = 'hc-locale'

function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'fr' || value === 'ar'
}

export function getStoredLocale(): Locale | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return isLocale(stored) ? stored : null
  } catch {
    return null
  }
}

export function storeLocale(locale: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // Ignore private-mode storage errors.
  }
}

export function detectInitialLocale(): Locale {
  const stored = getStoredLocale()
  if (stored) return stored

  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]

  for (const language of languages) {
    const code = language.toLowerCase()
    if (code.startsWith('ar')) return 'ar'
    if (code.startsWith('fr')) return 'fr'
    if (code.startsWith('en')) return 'en'
  }

  return 'en'
}

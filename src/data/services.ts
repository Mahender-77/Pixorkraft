export type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  category: "Core Services" | "Design & Print Services" | "Specialized Services";
  featured?: boolean;
};

export const services: ServiceItem[] = [
  {
    slug: "web-design",
    title: "Web Design",
    shortDescription: "Modern, responsive websites focused on leads and conversions.",
    longDescription:
      "We design business websites, landing pages, and web experiences that are fast, mobile-friendly, and built to convert visitors into customers.",
    highlights: ["UI/UX design", "Mobile responsiveness", "Performance-focused layouts"],
    category: "Core Services",
    featured: true,
  },
  {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    shortDescription: "Improve rankings and drive qualified organic traffic.",
    longDescription:
      "Our SEO service covers technical fixes, on-page optimization, and content strategy to help your business rank better and generate steady traffic.",
    highlights: ["On-page SEO", "Technical SEO", "Keyword strategy"],
    category: "Core Services",
    featured: true,
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    shortDescription: "Plan, create, and manage social media presence for growth.",
    longDescription:
      "We handle social media calendars, creatives, captions, posting, and optimization to build engagement and strengthen your brand online.",
    highlights: ["Content calendars", "Post design and copy", "Performance tracking"],
    category: "Core Services",
    featured: true,
  },
  {
    slug: "graphic-designing",
    title: "Graphic Designing",
    shortDescription: "Creative visual assets that reflect your brand identity.",
    longDescription:
      "From digital creatives to marketing collateral, we craft designs that communicate clearly, look professional, and stay consistent with your brand.",
    highlights: ["Brand-consistent creatives", "Marketing collateral", "Campaign visuals"],
    category: "Core Services",
    featured: true,
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    shortDescription: "Professional edits for ads, reels, promos, and brand videos.",
    longDescription:
      "We create polished videos with clean cuts, motion graphics, titles, and sound treatment to make your brand content engaging and impactful.",
    highlights: ["Reels and short-form edits", "Promo videos", "Motion graphics"],
    category: "Core Services",
    featured: true,
  },
  {
    slug: "corporate-films",
    title: "Corporate Films",
    shortDescription: "Tell your brand story with high-quality corporate videos.",
    longDescription:
      "We plan and produce corporate films that present your company profile, culture, product strengths, and business value with clarity and professionalism.",
    highlights: ["Company profile films", "Brand storytelling", "Product and process showcases"],
    category: "Core Services",
  },
  {
    slug: "logo-design",
    title: "Logo Design",
    shortDescription: "Distinctive logos designed for long-term brand recall.",
    longDescription:
      "We create memorable logos that align with your business identity and work effectively across digital and print formats.",
    highlights: ["Multiple concept options", "Scalable vector output", "Brand style alignment"],
    category: "Design & Print Services",
  },
  {
    slug: "banners",
    title: "Banners",
    shortDescription: "Attractive banner designs for digital and offline campaigns.",
    longDescription:
      "From event banners to online campaign creatives, we design banners that grab attention and communicate your message quickly.",
    highlights: ["Event banners", "Web banners", "Promotion-focused layouts"],
    category: "Design & Print Services",
  },
  {
    slug: "flyers",
    title: "Flyers",
    shortDescription: "Clean and impactful flyer designs for promotions and events.",
    longDescription:
      "We design flyers that balance visuals and information to deliver your offer clearly and improve response rates.",
    highlights: ["Offer flyers", "Event flyers", "Print-ready layouts"],
    category: "Design & Print Services",
  },
  {
    slug: "posters",
    title: "Posters",
    shortDescription: "Bold poster designs that stand out in any setting.",
    longDescription:
      "Our poster designs are crafted to attract attention while maintaining strong brand consistency and communication clarity.",
    highlights: ["Campaign posters", "Event posters", "Brand-centric design"],
    category: "Design & Print Services",
  },
  {
    slug: "brochure",
    title: "Brochure",
    shortDescription: "Professional brochures for products, services, and company profiles.",
    longDescription:
      "We design brochures that showcase your business in a structured, engaging format suitable for both digital sharing and print.",
    highlights: ["Bi-fold and tri-fold formats", "Company profile brochures", "Product brochures"],
    category: "Design & Print Services",
  },
  {
    slug: "business-cards-design",
    title: "Business Cards Design",
    shortDescription: "Premium card designs for a strong first impression.",
    longDescription:
      "We design business cards that reflect professionalism and brand identity, with practical layouts and high print quality standards.",
    highlights: ["Corporate card layouts", "Print-spec optimization", "Brand consistency"],
    category: "Design & Print Services",
  },
  {
    slug: "id-cards-design",
    title: "ID cards Design",
    shortDescription: "Professional employee and institutional ID card designs.",
    longDescription:
      "We design clear, secure, and professional ID card templates for organizations, schools, and businesses.",
    highlights: ["Staff ID templates", "Department-wise variants", "Readable, clean layouts"],
    category: "Design & Print Services",
  },
  {
    slug: "menu-cards",
    title: "Menu Cards",
    shortDescription: "Stylish printed menu card designs for restaurants and cafes.",
    longDescription:
      "We design easy-to-read menu cards that highlight your offerings while maintaining your venue's brand aesthetics.",
    highlights: ["Restaurant menu designs", "Multi-page formats", "Brand-themed layouts"],
    category: "Design & Print Services",
  },
  {
    slug: "digital-menu-cards",
    title: "Digital Menu Cards",
    shortDescription: "Digital-first menu designs suitable for mobile and QR usage.",
    longDescription:
      "We create digital menu cards optimized for phone viewing, QR scans, and online delivery channels.",
    highlights: ["Mobile-friendly layout", "QR-ready format", "Fast update support"],
    category: "Design & Print Services",
  },
  {
    slug: "catalogue",
    title: "Catalogue",
    shortDescription: "Detailed catalogues for products and service portfolios.",
    longDescription:
      "Our catalogue designs help you present multiple offerings in a neat, navigable format for clients and distributors.",
    highlights: ["Product catalogues", "Service catalogues", "Structured content layout"],
    category: "Design & Print Services",
  },
  {
    slug: "invitations",
    title: "Invitations",
    shortDescription: "Custom invitation designs for business and personal events.",
    longDescription:
      "We create invitation designs that match the tone of your event while maintaining visual elegance and clarity.",
    highlights: ["Event invitations", "Corporate invites", "Theme-based designs"],
    category: "Design & Print Services",
  },
  {
    slug: "digital-invitations",
    title: "Digital Invitations",
    shortDescription: "Shareable digital invitation creatives for modern events.",
    longDescription:
      "From static to animated designs, we craft digital invitations that look great on social platforms and messaging apps.",
    highlights: ["Social-share friendly", "Animated options", "Fast delivery"],
    category: "Design & Print Services",
  },
  {
    slug: "presentations",
    title: "Presentations",
    shortDescription: "Business presentation decks that communicate with impact.",
    longDescription:
      "We design presentation slides for sales, investor meetings, and corporate communication with clear storytelling and visuals.",
    highlights: ["Pitch decks", "Sales presentations", "Corporate templates"],
    category: "Design & Print Services",
  },
  {
    slug: "nfc-cards",
    title: "NFC Cards",
    shortDescription: "Smart contact cards with modern tap-and-share functionality.",
    longDescription:
      "We provide NFC card design support to help businesses create tech-enabled visiting cards for modern networking.",
    highlights: ["Brand-ready NFC card design", "Digital profile integration", "Modern networking format"],
    category: "Specialized Services",
  },
  {
    slug: "three-d-designs",
    title: "3D Designs",
    shortDescription: "3D visuals for products, concepts, and promotional assets.",
    longDescription:
      "We create 3D design concepts that bring ideas to life for marketing, demonstrations, and visual presentations.",
    highlights: ["Product mockups", "3D concept visuals", "Presentation-ready renders"],
    category: "Specialized Services",
  },
  {
    slug: "interior-works",
    title: "Interior works",
    shortDescription: "Creative interior design support for commercial spaces.",
    longDescription:
      "We support interior branding and design concepts for offices, retail stores, and other business spaces.",
    highlights: ["Commercial interior concepts", "Brand-led space styling", "Layout design support"],
    category: "Specialized Services",
  },
  {
    slug: "all-types-designing-and-print-works",
    title: "All types of Designing and print works",
    shortDescription: "End-to-end support for custom design and print requirements.",
    longDescription:
      "Need something unique? We handle custom design and print requests across formats, industries, and campaign needs.",
    highlights: ["Custom design requests", "Print execution support", "Flexible service scope"],
    category: "Specialized Services",
  },
];

export const featuredServices = services.filter((service) => service.featured);

export const serviceCategories = [
  "Core Services",
  "Design & Print Services",
  "Specialized Services",
] as const;

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

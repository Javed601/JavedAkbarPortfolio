// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project1b,
  project2,
  project3,
  project4,
  project5,
  project6,
  signageProjectImage01,
  signageProjectImage02,
  signageProjectImage03,
  ContractManagementSharePointImage,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";
import { getTextIcon } from "../utils/icon";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "resume",
    title: "Resume",
    link: "/resume",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: {
      de: "Office 365 Administration",
      en: "Office 365 Administration",
    },
    icon: backend,
  },
  {
    title: {
      de: "Webentwicklung",
      en: "Website Development",
    },
    icon: web,
  },
  {
    title: {
      de: "SharePoint SPFx Entwicklung",
      en: "SharePoint SPFx Development",
    },
    icon: creator,
  },
  {
    title: {
      de: "Desktop-Engineering",
      en: "Desktop Engineering",
    },
    icon: mobile,
  },
  {
    title: {
      de: "Endpoint-Management",
      en: "Endpoint Management",
    },
    icon: backend,
  },
  {
    title: {
      de: "Automatisierung & Support",
      en: "Automation & Support",
    },
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "Microsoft 365",
    icon: getTextIcon("Microsoft 365", "#2563eb", "#ffffff"),
  },
  {
    name: "Azure AD",
    icon: getTextIcon("Azure AD", "#0078d4", "#ffffff"),
  },
  {
    name: "SharePoint SPFx",
    icon: getTextIcon("SharePoint SPFx", "#0078d4", "#ffffff"),
  },
  {
    name: "PowerShell",
    icon: getTextIcon("PowerShell", "#5391fe", "#ffffff"),
  },
  {
    name: "Power Automate",
    icon: getTextIcon("Power Automate", "#e7811b", "#ffffff"),
  },
  {
    name: "Azure Functions",
    icon: getTextIcon("Azure Functions", "#0078d4", "#ffffff"),
  },
  {
    name: "Microsoft Graph API",
    icon: getTextIcon("Graph API", "#008272", "#ffffff"),
  },
  {
    name: "Teams",
    icon: getTextIcon("Microsoft Teams", "#6264a7", "#ffffff"),
  },
  {
    name: "JavaScript",
    icon: getTextIcon("JavaScript", "#f7df1e", "#000000"),
  },
  {
    name: "HTML 5",
    icon: getTextIcon("HTML 5", "#e34f26", "#ffffff"),
  },
  {
    name: "Python",
    icon: getTextIcon("Python", "#3776ab", "#ffffff"),
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: {
      de: "Office 365 Cloud Spezialist",
      en: "Office 365 Cloud Specialist",
    },
    company_name: "Carlisle Construction Materials GmbH",
    icon: backend,
    iconBg: "#383E56",
    date: {
      de: "Dez 2024 - Heute",
      en: "Dec 2024 - Present",
    },
    points: {
      de: [
        "M365-Administration: Verwaltung von Identitäten, Gruppen und Berechtigungen in Microsoft Entra ID, Exchange Online, Teams, OneDrive und SharePoint Online.",
        "SharePoint-Administration und Intranet: Verwaltung von SharePoint Online, Berechtigungen und Site Collections. Entwicklung und Pflege eines modernen SPFx-basierten Intranets zur besseren Informationsbereitstellung.",
        "SPFx-Lösungen: Erstellung von kundenspezifischen Webparts und Geschäftsanwendungen mit SharePoint Framework, Microsoft Graph API und Azure Functions.",
        "Vertragsmanagementsystem: Entwurf und Implementierung einer Vertragsmanagementlösung unter Einsatz von SharePoint-Dokumentbibliotheken, SPFx, Graph API und Azure Functions für Automatisierung und Integration.",
        "Automatisierung: Automatisierung von Geschäftsprozessen und administrativen Aufgaben mit Power Automate, Logic Apps und PowerShell-Skripten.",
        "Digital Signage: Betreuung einer Digital Signage CMS-Lösung, Gestaltung von Displayvorlagen und Entwicklung kundenspezifischer Anwendungen für Echtzeit-Produktions- und Betriebsdaten.",
      ],
      en: [
        "M365 Administration: Management of identities, groups, and permissions in Microsoft Entra ID, Exchange Online, Teams, OneDrive, and SharePoint Online.",
        "SharePoint administration and intranet: Managed SharePoint Online, permissions, and site collections. Developed and maintained a modern SPFx-based intranet for improved information access.",
        "SPFx solutions: Built custom web parts and business applications using SharePoint Framework, Microsoft Graph API, and Azure Functions.",
        "Contract management system: Designed and implemented a contract management solution leveraging SharePoint document libraries, SPFx, Graph API, and Azure Functions for automation and integration.",
        "Automation: Automated business processes and administrative tasks using Power Automate, Logic Apps, and PowerShell scripting.",
        "Digital signage: Managed digital signage CMS, designed display templates, and created custom applications for real-time production data and dashboards.",
      ],
    },
  },
  {
    title: {
      de: "Service Delivery Engineer",
      en: "Service Delivery Engineer",
    },
    company_name: "SThree GmbH",
    icon: backend,
    iconBg: "#E6DEDD",
    date: {
      de: "Feb 2023 - Dez 2024",
      en: "Feb 2023 - Dec 2024",
    },
    points: {
      de: [
        "Betreuung von Sicherheitsgruppen und M365-Diensten für über 700 Benutzer an 10 globalen Standorten.",
        "Unterstützung von Exchange-, Teams-, SharePoint- und Azure AD-Umgebungen für das Recruiting-Geschäft.",
        "Umsetzung von Sicherheits- und Compliance-Maßnahmen mit Conditional Access, MFA und DLP.",
        "Schulung und Support für Microsoft-Anwendungen und Geschäftssysteme bereitgestellt.",
      ],
      en: [
        "Managed security groups and M365 services for 700+ users across 10 global locations.",
        "Supported Exchange, Teams, SharePoint, and Azure AD environments for the hiring business.",
        "Implemented security and compliance practices using Conditional Access, MFA, and DLP.",
        "Provided training and support for Microsoft applications and business systems.",
      ],
    },
  },
  {
    title: {
      de: "Desktop Support Engineer",
      en: "Desktop Support Engineer",
    },
    company_name: "British American Tobacco",
    icon: backend,
    iconBg: "#383E56",
    date: {
      de: "Jan 2022 - Jan 2023",
      en: "Jan 2022 - Jan 2023",
    },
    points: {
      de: [
        "Bereitstellung von OS-, Netzwerk-, Drucker- und Microsoft 365-Support für interne Endanwender.",
        "Verwaltung von Onboarding, Hardware-/Software-Setup und Active Directory-Benutzerbereitstellung.",
        "Pflege des Asset-Lebenszyklus und Eskalation von Vorfällen mit hoher Priorität an Engineering-Teams.",
        "Unterstützung von Security & Compliance mit MFA, Conditional Access und DLP-Kontrollen.",
      ],
      en: [
        "Delivered OS, network, printer, and Microsoft 365 support for internal end users.",
        "Managed onboarding, hardware/software setup, and Active Directory user provisioning.",
        "Maintained asset lifecycle and escalated high-priority incidents to engineering teams.",
        "Contributed to Security & Compliance with MFA, Conditional Access, and DLP controls.",
      ],
    },
  },
  {
    title: {
      de: "IT- und E-Commerce-Spezialist",
      en: "IT and E-commerce Specialist",
    },
    company_name: "Crazyhorse-reitsport GmbH",
    icon: backend,
    iconBg: "#E6DEDD",
    date: {
      de: "Nov 2020 - Jan 2022",
      en: "Nov 2020 - Jan 2022",
    },
    points: {
      de: [
        "Installation und Wartung von Hardware, Betriebssystemen und Geschäftsanwendungen.",
        "Verwaltung von Netzwerk- und Systemdiagnosen für Unternehmens- und Einzelhandelsumgebungen.",
        "Erstellung einer WordPress-Website mit WooCommerce-Integration und SEO-optimierten Landingpages.",
        "Direkter Support für Benutzer und Pflege der E-Commerce-Plattform.",
      ],
      en: [
        "Installed and maintained hardware, operating systems, and business applications.",
        "Managed network and system diagnostics for corporate and retail environments.",
        "Built a WordPress website with WooCommerce integration and SEO-optimized landing pages.",
        "Provided direct support for users and maintained the e-commerce platform.",
      ],
    },
  },
  {
    title: {
      de: "WordPress Developer & SEO-Spezialist",
      en: "WordPress Developer & SEO Specialist",
    },
    company_name: "Koch Immobilien",
    icon: backend,
    iconBg: "#383E56",
    date: {
      de: "Jun 2020 - Okt 2021",
      en: "Jun 2020 - Oct 2021",
    },
    points: {
      de: [
        "Verwaltung des WordPress-CMS und Entwicklung von SEO-Strategien für Immobilienangebote.",
        "Durchführung von Keyword-Recherchen, Onpage-Optimierung und Linkbuilding-Kampagnen.",
        "Sicherstellung der Website-Performance und Aktualisierung von Inhalten zur besseren Sichtbarkeit.",
      ],
      en: [
        "Managed WordPress CMS and developed SEO strategies for real estate listings.",
        "Performed keyword research, on-page optimization, and link-building campaigns.",
        "Maintained website performance and content updates for improved search visibility.",
      ],
    },
  },
  {
    title: {
      de: "IT-Administrator",
      en: "IT Administrator",
    },
    company_name: "uNaice GmbH",
    icon: backend,
    iconBg: "#E6DEDD",
    date: {
      de: "Jan 2020 - Mai 2020",
      en: "Jan 2020 - May 2020",
    },
    points: {
      de: [
        "Lokalisierung von Shopify-Shops und Anpassung von WordPress-Websites für Geschäftskunden.",
        "Konfiguration von G Suite-Konten und Integration von CRM-Tools wie Pipedrive und Billomat.",
        "Unterstützung der täglichen IT-Administration und Softwarekonfiguration.",
      ],
      en: [
        "Localized Shopify stores and customized WordPress sites for business clients.",
        "Configured G Suite accounts and integrated CRM tools like Pipedrive and Billomat.",
        "Supported day-to-day IT administration and software configuration tasks.",
      ],
    },
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Digital Signage CMS",
    description: {
      de: "Verwaltung digitaler Signage-Inhalte, Gestaltung von Displayvorlagen und Bereitstellung benutzerdefinierter Anwendungen für Echtzeit-Produktions- und Betriebsdashboards.",
      en: "Managed digital signage content, designed display templates, and deployed custom applications for real-time production and operations dashboards.",
    },
    tags: [
      {
        name: "digital-signage",
        color: "blue-text-gradient",
      },
      {
        name: "cms",
        color: "green-text-gradient",
      },
      {
        name: "custom-apps",
        color: "pink-text-gradient",
      },
    ],
    images: [signageProjectImage01, signageProjectImage02, signageProjectImage03],
    source_code_link: "#",
    live_site_link: "#",
  },
  {
    name: "SharePoint Intranet Portal",
    description: {
      de: "Aufbau eines modernen Intranets mit SPFx-Webparts, Dokumentbibliotheken, Teamseiten und automatisierten Inhaltsworkflows für interne Zusammenarbeit.",
      en: "Built a modern intranet with SPFx web parts, document libraries, team sites, and automated content workflows for internal collaboration.",
    },
    tags: [
      {
        name: "intranet",
        color: "blue-text-gradient",
      },
      {
        name: "sharepoint",
        color: "green-text-gradient",
      },
      {
        name: "spfx",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "#",
    live_site_link: "#",
  },
  {
    name: "Contract Management Solution",
    description: {
      de: "Implementierung eines Vertragsmanagementsystems mit SharePoint-Dokumentbibliotheken, Azure Functions und Graph API für Genehmigungen, Benachrichtigungen und Nachverfolgung.",
      en: "Implemented a contract management system using SharePoint document libraries, Azure Functions, and Graph API for approvals, notifications, and tracking.",
    },
    tags: [
      {
        name: "contract-management",
        color: "blue-text-gradient",
      },
      {
        name: "azure-functions",
        color: "green-text-gradient",
      },
      {
        name: "graph-api",
        color: "pink-text-gradient",
      },
    ],
    image: ContractManagementSharePointImage,
    source_code_link: "#",
    live_site_link: "#",
  },
  {
    name: "Custom HTML / JavaScript Apps",
    description: {
      de: "Entwicklung kundenspezifischer HTML-, CSS- und JavaScript-Anwendungen zur Unterstützung von Geschäftsprozessen, Reporting und internen Produktivitätstools.",
      en: "Developed custom HTML, CSS and JavaScript applications to support business workflows, reporting, and internal productivity tools.",
    },
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "#",
    live_site_link: "#",
  },
  {
    name: "WordPress Website Development",
    description: {
      de: "Gestaltung von WordPress-Websites mit Theme-Anpassung, Plugin-Integration und responsiven Layouts für Geschäftskunden.",
      en: "Designed WordPress websites with theme customization, plugin integration, and responsive layouts for business clients.",
    },
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "web-design",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "#",
    live_site_link: "#",
  },
  {
    name: "Shopify & Frontend Development",
    description: {
      de: "Erstellung von Shopify-Shopfronts und individuellen Frontend-Erlebnissen mit HTML, JavaScript, CSS und Theme-Anpassungen.",
      en: "Built Shopify storefronts and customized frontend experiences using HTML, JavaScript, CSS, and theme settings.",
    },
    tags: [
      {
        name: "shopify",
        color: "blue-text-gradient",
      },
      {
        name: "ecommerce",
        color: "green-text-gradient",
      },
      {
        name: "frontend",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "#",
    live_site_link: "#",
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/javed-akbar-83a8991b0/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Javed601",
  },
] as const;


import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define all text content in both languages
export const translations = {
  de: {
    // Navigation
    home: "Home",
    about: "Über uns",
    services: "Leistungen",
    sectors: "Fachgebiete",
    targetAudiences: "Zielgruppen",
    projects: "Projekte / Referenzen",
    contact: "Kontakt",
    
    // Sectors
    sectorsTitle: "Fachgebiete",
    sectorsSubtitle: "Unsere geotechnischen Vorstudien sind speziell auf die Anforderungen verschiedener Bauvorhaben zugeschnitten. Wählen Sie Ihre Branche, um mehr über die spezifischen Vorteile und Leistungen zu erfahren, die wir für Ihr Projekt bieten können.",
    
    // Sector Categories
    sectorResidential: "Wohnungs- und Hochbau",
    sectorInfrastructure: "Infrastruktur und Verkehrsbau",
    sectorIndustrial: "Industrieanlagen und Logistik",
    sectorWater: "Wasserbau und Wasserwirtschaft",
    sectorRenewable: "Erneuerbare Energien",
    
    // Hero
    heroTitle: "Geotechnische Vorstudien für fundierte Entscheidungen",
    heroSubtitle: "Optimieren Sie Ihr Bauprojekt mit KI-gestützten geotechnischen Analysen",
    cta: "Beratungsgespräch vereinbaren",
    
    // Services
    servicesTitle: "Unsere Leistungen",
    servicesSubtitle: "Geotechnische Expertise für Ihren Erfolg",
    serviceGeologicalMap: "Geologische Kartenanalyse",
    serviceGeologicalMapDesc: "Detaillierte Analyse geologischer Karten für ein besseres Verständnis der Bodenbeschaffenheit.",
    serviceAiStudies: "KI-gestützte Vorstudien",
    serviceAiStudiesDesc: "Modernste KI-Technologie für präzise und kosteneffiziente geotechnische Analysen.",
    serviceDrillingOpt: "Optimierung von Bohrungen",
    serviceDrillingOptDesc: "Strategische Platzierung von Bohrungen und CPT-Tests für maximale Informationsgewinnung.",
    serviceReports: "Normkonforme Berichte",
    serviceReportsDesc: "Eurocode- und DIN-konforme Berichte, die allen regulatorischen Anforderungen entsprechen.",
    
    // About
    aboutTitle: "Über uns",
    aboutSubtitle: "Erfahrung und Innovation in der Geotechnik",
    aboutContent: "Als erfahrene Geologen kombinieren wir traditionelles Fachwissen mit innovativen KI-Technologien, um präzise und kosteneffiziente geotechnische Vorstudien durchzuführen. Unsere Expertise ermöglicht es uns, potenzielle Risiken frühzeitig zu identifizieren und Lösungen vorzuschlagen, die Zeit und Kosten sparen.",
    
    // Target Audiences
    targetTitle: "Zielgruppen",
    targetSubtitle: "Maßgeschneiderte Lösungen für verschiedene Branchen",
    targetConstructionCompanies: "Bauunternehmen",
    targetConstructionCompaniesDesc: "Reduzieren Sie Risiken und optimieren Sie Ihre Bauvorhaben mit unseren detaillierten geotechnischen Analysen.",
    targetPlanningOffices: "Planungsbüros",
    targetPlanningOfficesDesc: "Integrieren Sie präzise geotechnische Daten in Ihre Planungsprozesse für fundierte Entscheidungen.",
    targetMunicipalities: "Kommunen",
    targetMunicipalitiesDesc: "Unterstützung bei öffentlichen Infrastrukturprojekten durch zuverlässige geotechnische Bewertungen.",
    targetInvestors: "Investoren",
    targetInvestorsDesc: "Minimieren Sie Investitionsrisiken durch frühzeitige Erkennung potenzieller geotechnischer Herausforderungen.",
    
    // Projects
    projectsTitle: "Projekte / Referenzen",
    projectsSubtitle: "Unsere erfolgreichen Fallstudien",
    viewDetails: "Details ansehen",
    
    // Contact
    contactTitle: "Kontakt",
    contactSubtitle: "Sprechen Sie mit uns über Ihr Projekt",
    nameLabel: "Name",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
    messageLabel: "Nachricht",
    fileUploadLabel: "Dateien hochladen (Pläne, PDFs, CAD)",
    sendButton: "Nachricht senden",
    
    // Footer
    footerRights: "Alle Rechte vorbehalten",
    footerPrivacy: "Datenschutz",
    footerTerms: "Impressum",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    services: "Services",
    sectors: "Fields of Expertise",
    targetAudiences: "Target Audiences",
    projects: "Projects / References",
    contact: "Contact",
    
    // Sectors
    sectorsTitle: "Fields of Expertise",
    sectorsSubtitle: "Our geotechnical preliminary studies are tailored to the requirements of various construction projects. Choose your sector to learn more about the specific benefits and services we can offer for your project.",
    
    // Sector Categories
    sectorResidential: "Residential and Building Construction",
    sectorInfrastructure: "Infrastructure and Transportation",
    sectorIndustrial: "Industrial Facilities and Logistics",
    sectorWater: "Hydraulic Engineering and Water Management",
    sectorRenewable: "Renewable Energy",
    
    // Hero
    heroTitle: "Geotechnical Preliminary Studies for Informed Decisions",
    heroSubtitle: "Optimize your construction project with AI-supported geotechnical analyses",
    cta: "Schedule a consultation",
    
    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "Geotechnical Expertise for Your Success",
    serviceGeologicalMap: "Geological Map Analysis",
    serviceGeologicalMapDesc: "Detailed analysis of geological maps for a better understanding of soil conditions.",
    serviceAiStudies: "AI-Supported Preliminary Studies",
    serviceAiStudiesDesc: "State-of-the-art AI technology for precise and cost-efficient geotechnical analyses.",
    serviceDrillingOpt: "Drilling Optimization",
    serviceDrillingOptDesc: "Strategic placement of drillings and CPT tests for maximum information gain.",
    serviceReports: "Standard-Compliant Reports",
    serviceReportsDesc: "Eurocode and DIN-compliant reports that meet all regulatory requirements.",
    
    // About
    aboutTitle: "About Us",
    aboutSubtitle: "Experience and Innovation in Geotechnology",
    aboutContent: "As experienced geologists, we combine traditional expertise with innovative AI technologies to conduct precise and cost-efficient geotechnical preliminary studies. Our expertise allows us to identify potential risks early and propose solutions that save time and costs.",
    
    // Target Audiences
    targetTitle: "Target Audiences",
    targetSubtitle: "Tailored Solutions for Different Industries",
    targetConstructionCompanies: "Construction Companies",
    targetConstructionCompaniesDesc: "Reduce risks and optimize your construction projects with our detailed geotechnical analyses.",
    targetPlanningOffices: "Planning Offices",
    targetPlanningOfficesDesc: "Integrate precise geotechnical data into your planning processes for informed decisions.",
    targetMunicipalities: "Municipalities",
    targetMunicipalitiesDesc: "Support for public infrastructure projects through reliable geotechnical assessments.",
    targetInvestors: "Investors",
    targetInvestorsDesc: "Minimize investment risks by early detection of potential geotechnical challenges.",
    
    // Projects
    projectsTitle: "Projects / References",
    projectsSubtitle: "Our Successful Case Studies",
    viewDetails: "View details",
    
    // Contact
    contactTitle: "Contact",
    contactSubtitle: "Talk to us about your project",
    nameLabel: "Name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    messageLabel: "Message",
    fileUploadLabel: "Upload files (plans, PDFs, CAD)",
    sendButton: "Send message",
    
    // Footer
    footerRights: "All rights reserved",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms & Conditions",
  }
};

type Language = 'de' | 'en';
type TranslationsType = typeof translations;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof (typeof translations)['de']) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: keyof TranslationsType['de']) => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

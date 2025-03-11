
import React, { createContext, useState, useContext, ReactNode } from 'react';

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
    contactForConsultation: "Kontaktieren Sie uns für eine Beratung",
    
    // Footer
    footerRights: "Alle Rechte vorbehalten",
    footerPrivacy: "Datenschutz",
    footerTerms: "Impressum",
    
    // Updated and new translations
    serviceGeologicalRisk: "Geologische und Umweltrisikobewertung",
    serviceGeologicalRiskDesc: "Umfassende Analyse geologischer, hydrologischer und umweltrelevanter Faktoren durch Deep Research aus multiplen Datenquellen. Wir kombinieren historische Karten, Bohrprofile, Fernerkundungsdaten und amtliche Umweltkataster für eine fundierte Risikobewertung Ihres Standorts.",
    serviceGeologicalRiskDetail: "Unsere geologische und Umweltrisikobewertung bildet die Grundlage jeder geotechnischen Vorstudie und umfasst:\n\n- Systematische Auswertung geologischer Karten verschiedener Maßstäbe und Epochen\n- Deep Research in amtlichen und privaten Bohrdatenbanken im Umkreis des Projektstandorts\n- Analyse aktueller und historischer Satellitenbilder zur Erkennung von Oberflächenveränderungen\n- Auswertung digitaler Geländemodelle (DGM) zur Identifikation morphologischer Besonderheiten\n- Durchführung einer hydrologischen Grundwasseranalyse mit Ermittlung von Grundwasserständen und -schwankungen\n- Prüfung vorhandener Umweltkataster zur Erkennung potenzieller Altlasten und Kontaminationen\n- Bewertung historischer Nutzungen mit Fokus auf mögliche Baugrundrisiken\n- Zusammenführung aller Daten in einem georeferenzierten digitalen Modell\n- Erstbewertung der Erosions- und Hochwasseranfälligkeit des Standorts\n\nDurch den Einsatz unserer spezialisierten KI-Algorithmen können wir selbst in Datenbanken mit Millionen von Einträgen relevante Informationen für Ihren spezifischen Standort identifizieren und auswerten. Diese Methode liefert uns eine deutlich breitere Datenbasis als konventionelle Ansätze und ermöglicht eine präzisere Ersteinschätzung des Baugrunds – oft ohne dass in dieser Phase bereits kostenintensive Erkundungen vor Ort erforderlich sind.",
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
    contactForConsultation: "Contact us for consultation",
    
    // Footer
    footerRights: "All rights reserved",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms & Conditions",
    
    // Updated and new translations
    serviceGeologicalRisk: "Geological and Environmental Risk Assessment",
    serviceGeologicalRiskDesc: "Comprehensive analysis of geological, hydrological, and environmental factors through deep research from multiple data sources. We combine historical maps, borehole profiles, remote sensing data, and official environmental cadastres for a well-founded risk assessment of your site.",
    serviceGeologicalRiskDetail: "Our geological and environmental risk assessment forms the foundation of every geotechnical preliminary study and includes:\n\n- Systematic evaluation of geological maps of various scales and epochs\n- Deep research in official and private drilling databases in the vicinity of the project site\n- Analysis of current and historical satellite images to detect surface changes\n- Evaluation of digital terrain models (DTM) to identify morphological features\n- Conducting a hydrological groundwater analysis with determination of groundwater levels and fluctuations\n- Review of existing environmental cadastres to identify potential contaminated sites\n- Assessment of historical land uses with a focus on possible ground-related risks\n- Integration of all data in a georeferenced digital model\n- Initial assessment of the site's susceptibility to erosion and flooding\n\nThrough the use of our specialized AI algorithms, we can identify and evaluate relevant information for your specific location even in databases with millions of entries. This method provides us with a significantly broader data foundation than conventional approaches and enables a more precise initial assessment of the subsoil – often without requiring cost-intensive on-site investigations at this stage.",
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

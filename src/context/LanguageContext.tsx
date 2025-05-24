
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    // Navigation
    home: 'Startseite',
    about: 'Über uns',
    sectors: 'Fachgebiete',
    services: 'Leistungen',
    extendedServices: 'Erweiterte Leistungen',
    targetAudiences: 'Zielgruppen',
    contact: 'Kontakt',
    
    // Common
    cta: 'Kontakt aufnehmen',
    
    // Home page
    servicesTitle: 'Unsere Leistungen',
    servicesSubtitle: 'Professionelle geotechnische Analysen für verschiedene Bauprojekte',
    aboutTitle: 'Über GeoStudys',
    
    // Services
    serviceGeologicalRisk: 'Geologische Risikoanalyse',
    serviceGeologicalRiskDesc: 'Umfassende Bewertung geologischer Risiken für sichere Bauplanung',
    serviceAiStudies: 'KI-gestützte Vorstudien',
    serviceAiStudiesDescUpdated: 'Intelligente Datenanalyse für präzise geotechnische Vorhersagen',
    serviceDrillingOptimized: 'Optimierte Bohrplanung',
    serviceDrillingOptimizedDesc: 'Effiziente Erkundungsstrategie zur Kostenreduzierung',
    serviceReportsUpdated: 'Normkonforme Berichte',
    serviceReportsUpdatedDesc: 'Detaillierte Gutachten nach aktuellen Eurocode- und DIN-Standards',
    
    // Extended Services
    extendedServicesTitle: 'Erweiterte Leistungen',
    extendedServicesSubtitle: 'Umfassende Unterstützung für komplexe Bauprojekte',
    extendedServicesIntro: 'Neben unseren Kernleistungen bieten wir erweiterte Dienstleistungen für anspruchsvolle Projekte.',
    extendedServiceProjectManagement: 'Projektmanagement',
    extendedServiceProjectManagementDesc: 'Koordination und Überwachung geotechnischer Projektphasen',
    extendedServiceTenderManagement: 'Ausschreibungsmanagement',
    extendedServiceTenderManagementDesc: 'Unterstützung bei der Erstellung technischer Ausschreibungen',
    extendedServiceConstruction: 'Bauüberwachung',
    extendedServiceConstructionDesc: 'Fachkundige Begleitung während der Bauausführung',
    extendedServicePlanning: 'Planungsunterstützung',
    extendedServicePlanningDesc: 'Beratung in frühen Projektphasen für optimale Lösungen',
    extendedServicesCta: 'Erweiterte Leistungen anfragen',
    
    // Target Audiences
    targetTitle: 'Unsere Zielgruppen',
    targetSubtitle: 'Maßgeschneiderte Lösungen für verschiedene Branchen und Anforderungen',
    targetConstructionCompanies: 'Bauunternehmen',
    targetConstructionCompaniesDesc: 'Zuverlässige geotechnische Analysen für sichere und kostengünstige Bauprojekte',
    targetPlanningOffices: 'Planungsbüros',
    targetPlanningOfficesDesc: 'Fundierte Entscheidungsgrundlagen für Ihre Bauprojektplanungen',
    targetMunicipalities: 'Kommunen und Behörden',
    targetMunicipalitiesDesc: 'Professionelle Unterstützung bei öffentlichen Bauvorhaben und Infrastrukturprojekten',
    targetInvestors: 'Investoren und Entwickler',
    targetInvestorsDesc: 'Risikobewertung und Machbarkeitsstudien für Immobilienprojekte',
    
    // Benefits
    yourBenefits: 'Ihre Vorteile',
    constructionBenefit1: 'Reduzierung von Baurisiken und unvorhergesehenen Kosten',
    constructionBenefit2: 'Optimierte Fundamentplanung basierend auf präzisen Bodendaten',
    constructionBenefit3: 'Schnelle Verfügbarkeit geotechnischer Vorstudien',
    constructionBenefit4: 'Normkonforme Dokumentation für Genehmigungsverfahren',
    planningBenefit1: 'Fundierte Grundlage für Tragwerksplanung und Dimensionierung',
    planningBenefit2: 'Frühe Identifikation geologischer Herausforderungen',
    planningBenefit3: 'Kosteneffiziente Voruntersuchungen vor detaillierter Planung',
    planningBenefit4: 'Professionelle Berichte für Bauherren und Genehmigungsbehörden',
    municipalityBenefit1: 'Unterstützung bei der Bewertung von Baulandpotenzial',
    municipalityBenefit2: 'Risikoeinschätzung für öffentliche Infrastrukturprojekte',
    municipalityBenefit3: 'Objektive Grundlage für Planungsentscheidungen',
    municipalityBenefit4: 'Kosteneffiziente Alternative zu umfangreichen Gutachten',
    investorBenefit1: 'Schnelle Bewertung des geologischen Risikos von Standorten',
    investorBenefit2: 'Fundierte Grundlage für Investitionsentscheidungen',
    investorBenefit3: 'Identifikation von Kostentreibern in frühen Projektphasen',
    investorBenefit4: 'Professionelle Dokumentation für Due-Diligence-Prozesse',
    
    // Scenarios
    howWeCanHelp: 'Wie wir Ihnen helfen können',
    tailoredStudies: 'Unsere maßgeschneiderten Vorstudien für {audience} berücksichtigen die spezifischen Anforderungen Ihrer Projekte.',
    typicalScenario: 'Typisches Szenario',
    constructionScenario: 'Sie planen ein Wohnbauprojekt und benötigen schnell eine Einschätzung der Baugrundverhältnisse für die Kostenkalkulation.',
    planningScenario: 'Für Ihren Neubau benötigen Sie eine geotechnische Vorstudie zur Dimensionierung der Gründung.',
    municipalityScenario: 'Die Kommune prüft die Erschließung eines neuen Baugebiets und benötigt eine geologische Erstbewertung.',
    investorScenario: 'Vor dem Erwerb einer Immobilie möchten Sie das geologische Risiko und mögliche Zusatzkosten bewerten.',
    contactForConsultation: 'Kontakt für Beratung',
    
    // Added Values
    addedValueTitle: 'Unser Mehrwert',
    addedValueSubtitle: 'Warum Kunden unsere KI-gestützten geotechnischen Vorstudien wählen',
    valueTimeSavings: 'Zeitersparnis',
    valueTimeSavingsDesc: 'Schnelle Ergebnisse durch KI-gestützte Analyse bestehender Geodaten',
    valueCostOptimization: 'Kostenoptimierung',
    valueCostOptimizationDesc: 'Effiziente Vorstudien reduzieren Aufwand für aufwendige Erkundungen',
    valueExpertise: 'Fachexpertise',
    valueExpertiseDesc: 'Kombination aus KI-Technologie und jahrelanger geologischer Erfahrung',
    
    // Contact
    contactTitle: 'Kontakt',
    contactSubtitle: 'Nehmen Sie Kontakt mit uns auf für eine kostenlose Erstberatung',
    nameLabel: 'Name',
    emailLabel: 'E-Mail',
    phoneLabel: 'Telefon',
    messageLabel: 'Nachricht',
    fileUploadLabel: 'Dateien anhängen (optional)',
    sendButton: 'Nachricht senden',
    
    // CPT Analysis
    cptAnalysisTitle: 'CPT-Analyse',
    cptAnalysisSubtitle: 'KI-gestützte Auswertung von Drucksondierungen',
    cptAnalysisIntro: 'Professionelle Auswertung Ihrer CPT-Daten mit modernsten KI-Algorithmen und menschlicher Expertenverifikation.',
    cptAnalysisMethods: 'Verfügbare Analysemethoden',
    cptGermanStandards: 'Deutsche Standards',
    cptGermanStandardsDesc: 'Optimiert für deutsche Normen und Bodenverhältnisse',
    cptEuropeanStandards: 'Europäische Standards',
    cptEuropeanStandardsDesc: 'Harmonisierte Verfahren für EU-weite Projekte',
    cptSpecialApplications: 'Spezialanwendungen',
    cptSpecialApplicationsDesc: 'Erweiterte Methoden für komplexe Anforderungen',
    cptQuickSelection: 'Schnellauswahl',
    cptQuickSelectionDesc: 'Automatische Methodenauswahl basierend auf Projekttyp',
    cptQuickSelectionTitle: 'Schnellauswahl nach Anwendungsbereich',
    cptStandardGermany: 'Standard Deutschland',
    cptInternationalEU: 'International/EU',
    cptPileFoundations: 'Pfahlgründungen',
    cptSeismicAreas: 'Erdbebengefährdete Gebiete',
    cptUniversalApplication: 'Universelle Anwendung',
    cptResearchComplex: 'Forschung/Komplex',
    cptDetailedMethods: 'Detaillierte Methodenbeschreibung',
    cptSchneiderMethod: 'Schneider et al. (2008) - Deutsche Optimierung',
    cptRobertsonMethod: 'Robertson (1990) - Universalstandard',
    cptEurocodeMethod: 'Eurocode 7 Unified - EU-harmonisiert',
    cptServicesTitle: 'Unsere Leistungen',
    cptServicesOverview: 'Leistungsübersicht',
    cptWhyAI: 'Warum KI-gestützte CPT-Analyse?\n• Konsistente und objektive Auswertung\n• Verarbeitung großer Datenmengen\n• Vergleichende Analyse verschiedener Methoden\n• Qualitätssicherung durch Expertenvalidierung',
    cptContactTitle: 'CPT-Analyse beauftragen',
    cptProjectType: 'Projekttyp auswählen',
    cptAnalysisMethod: 'Analysemethode wählen',
    cptNumberSoundings: 'Anzahl Sondierungen',
    cptUploadFiles: 'CPT-Dateien hochladen',
    cptProjectDescription: 'Projektbeschreibung',
    cptRequestAnalysis: 'Analyse beauftragen',
    
    // Footer
    'footer.description': 'Professionelle geotechnische Vorstudien mit KI-Unterstützung und menschlicher Expertise.',
    'footer.navigation': 'Navigation',
    'footer.followLinkedIn': 'Folgen Sie uns auf LinkedIn',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    
    // About
    aboutSubtitle: 'Erfahrene Geologen und innovative KI-Technologie für präzise geotechnische Analysen'
  },
  
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    sectors: 'Sectors',
    services: 'Services',
    extendedServices: 'Extended Services',
    targetAudiences: 'Target Audiences',
    contact: 'Contact',
    
    // Common
    cta: 'Get in Touch',
    
    // Home page
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Professional geotechnical analyses for various construction projects',
    aboutTitle: 'About GeoStudys',
    
    // Services
    serviceGeologicalRisk: 'Geological Risk Analysis',
    serviceGeologicalRiskDesc: 'Comprehensive assessment of geological risks for safe construction planning',
    serviceAiStudies: 'AI-powered Preliminary Studies',
    serviceAiStudiesDescUpdated: 'Intelligent data analysis for precise geotechnical predictions',
    serviceDrillingOptimized: 'Optimized Drilling Planning',
    serviceDrillingOptimizedDesc: 'Efficient exploration strategy for cost reduction',
    serviceReportsUpdated: 'Standards-compliant Reports',
    serviceReportsUpdatedDesc: 'Detailed reports according to current Eurocode and DIN standards',
    
    // Extended Services
    extendedServicesTitle: 'Extended Services',
    extendedServicesSubtitle: 'Comprehensive support for complex construction projects',
    extendedServicesIntro: 'In addition to our core services, we offer extended services for demanding projects.',
    extendedServiceProjectManagement: 'Project Management',
    extendedServiceProjectManagementDesc: 'Coordination and supervision of geotechnical project phases',
    extendedServiceTenderManagement: 'Tender Management',
    extendedServiceTenderManagementDesc: 'Support in creating technical tenders',
    extendedServiceConstruction: 'Construction Supervision',
    extendedServiceConstructionDesc: 'Expert support during construction execution',
    extendedServicePlanning: 'Planning Support',
    extendedServicePlanningDesc: 'Consulting in early project phases for optimal solutions',
    extendedServicesCta: 'Request Extended Services',
    
    // Target Audiences
    targetTitle: 'Our Target Audiences',
    targetSubtitle: 'Tailored solutions for different industries and requirements',
    targetConstructionCompanies: 'Construction Companies',
    targetConstructionCompaniesDesc: 'Reliable geotechnical analyses for safe and cost-effective construction projects',
    targetPlanningOffices: 'Planning Offices',
    targetPlanningOfficesDesc: 'Well-founded decision basis for your construction project planning',
    targetMunicipalities: 'Municipalities and Authorities',
    targetMunicipalitiesDesc: 'Professional support for public construction projects and infrastructure projects',
    targetInvestors: 'Investors and Developers',
    targetInvestorsDesc: 'Risk assessment and feasibility studies for real estate projects',
    
    // Benefits
    yourBenefits: 'Your Benefits',
    constructionBenefit1: 'Reduction of construction risks and unforeseen costs',
    constructionBenefit2: 'Optimized foundation planning based on precise soil data',
    constructionBenefit3: 'Quick availability of geotechnical preliminary studies',
    constructionBenefit4: 'Standards-compliant documentation for approval procedures',
    planningBenefit1: 'Well-founded basis for structural planning and dimensioning',
    planningBenefit2: 'Early identification of geological challenges',
    planningBenefit3: 'Cost-effective preliminary investigations before detailed planning',
    planningBenefit4: 'Professional reports for clients and approval authorities',
    municipalityBenefit1: 'Support in evaluating building land potential',
    municipalityBenefit2: 'Risk assessment for public infrastructure projects',
    municipalityBenefit3: 'Objective basis for planning decisions',
    municipalityBenefit4: 'Cost-effective alternative to comprehensive reports',
    investorBenefit1: 'Quick assessment of geological risk of locations',
    investorBenefit2: 'Well-founded basis for investment decisions',
    investorBenefit3: 'Identification of cost drivers in early project phases',
    investorBenefit4: 'Professional documentation for due diligence processes',
    
    // Scenarios
    howWeCanHelp: 'How We Can Help You',
    tailoredStudies: 'Our tailored preliminary studies for {audience} consider the specific requirements of your projects.',
    typicalScenario: 'Typical Scenario',
    constructionScenario: 'You are planning a residential project and need a quick assessment of subsoil conditions for cost calculation.',
    planningScenario: 'For your new construction, you need a geotechnical preliminary study for foundation dimensioning.',
    municipalityScenario: 'The municipality is examining the development of a new building area and needs a geological initial assessment.',
    investorScenario: 'Before acquiring a property, you want to assess the geological risk and possible additional costs.',
    contactForConsultation: 'Contact for Consultation',
    
    // Added Values
    addedValueTitle: 'Our Added Value',
    addedValueSubtitle: 'Why customers choose our AI-powered geotechnical preliminary studies',
    valueTimeSavings: 'Time Savings',
    valueTimeSavingsDesc: 'Fast results through AI-powered analysis of existing geodata',
    valueCostOptimization: 'Cost Optimization',
    valueCostOptimizationDesc: 'Efficient preliminary studies reduce effort for expensive investigations',
    valueExpertise: 'Professional Expertise',
    valueExpertiseDesc: 'Combination of AI technology and years of geological experience',
    
    // Contact
    contactTitle: 'Contact',
    contactSubtitle: 'Get in touch with us for a free initial consultation',
    nameLabel: 'Name',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    messageLabel: 'Message',
    fileUploadLabel: 'Attach Files (optional)',
    sendButton: 'Send Message',
    
    // CPT Analysis
    cptAnalysisTitle: 'CPT Analysis',
    cptAnalysisSubtitle: 'AI-powered evaluation of cone penetration tests',
    cptAnalysisIntro: 'Professional evaluation of your CPT data with state-of-the-art AI algorithms and human expert verification.',
    cptAnalysisMethods: 'Available Analysis Methods',
    cptGermanStandards: 'German Standards',
    cptGermanStandardsDesc: 'Optimized for German standards and soil conditions',
    cptEuropeanStandards: 'European Standards',
    cptEuropeanStandardsDesc: 'Harmonized procedures for EU-wide projects',
    cptSpecialApplications: 'Special Applications',
    cptSpecialApplicationsDesc: 'Advanced methods for complex requirements',
    cptQuickSelection: 'Quick Selection',
    cptQuickSelectionDesc: 'Automatic method selection based on project type',
    cptQuickSelectionTitle: 'Quick Selection by Application Area',
    cptStandardGermany: 'Standard Germany',
    cptInternationalEU: 'International/EU',
    cptPileFoundations: 'Pile Foundations',
    cptSeismicAreas: 'Seismic Areas',
    cptUniversalApplication: 'Universal Application',
    cptResearchComplex: 'Research/Complex',
    cptDetailedMethods: 'Detailed Method Description',
    cptSchneiderMethod: 'Schneider et al. (2008) - German Optimization',
    cptRobertsonMethod: 'Robertson (1990) - Universal Standard',
    cptEurocodeMethod: 'Eurocode 7 Unified - EU Harmonized',
    cptServicesTitle: 'Our Services',
    cptServicesOverview: 'Service Overview',
    cptWhyAI: 'Why AI-powered CPT Analysis?\n• Consistent and objective evaluation\n• Processing of large data volumes\n• Comparative analysis of different methods\n• Quality assurance through expert validation',
    cptContactTitle: 'Request CPT Analysis',
    cptProjectType: 'Select Project Type',
    cptAnalysisMethod: 'Choose Analysis Method',
    cptNumberSoundings: 'Number of Soundings',
    cptUploadFiles: 'Upload CPT Files',
    cptProjectDescription: 'Project Description',
    cptRequestAnalysis: 'Request Analysis',
    
    // Footer
    'footer.description': 'Professional geotechnical preliminary studies with AI support and human expertise.',
    'footer.navigation': 'Navigation',
    'footer.followLinkedIn': 'Follow us on LinkedIn',
    'footer.rights': 'All rights reserved.',
    'footer.imprint': 'Legal Notice',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    
    // About
    aboutSubtitle: 'Experienced geologists and innovative AI technology for precise geotechnical analyses'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['de']] || key;
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

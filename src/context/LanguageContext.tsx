
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Defining the structure of our translations
type TranslationKeys = 
  | 'home' | 'about' | 'services' | 'sectors' | 'targetAudiences' | 'projects' 
  | 'extendedServices' | 'contact' | 'sectorsTitle' | 'sectorsSubtitle' 
  | 'sectorResidential' | 'sectorInfrastructure' | 'sectorIndustrial' | 'sectorWater' 
  | 'sectorRenewable' | 'heroTitle' | 'heroSubtitle' | 'cta' | 'servicesTitle' 
  | 'servicesSubtitle' | 'serviceGeologicalMap' | 'serviceGeologicalMapDesc' 
  | 'serviceAiStudies' | 'serviceAiStudiesDesc' | 'serviceAiStudiesDescUpdated' 
  | 'serviceDrillingOpt' | 'serviceDrillingOptDesc' | 'serviceDrillingOptimized' 
  | 'serviceDrillingOptimizedDesc' | 'serviceReports' | 'serviceReportsDesc' 
  | 'serviceReportsUpdated' | 'serviceReportsUpdatedDesc' | 'serviceGeologicalRisk' 
  | 'serviceGeologicalRiskDesc' | 'serviceGeologicalRiskDetail' | 'aboutTitle' 
  | 'aboutSubtitle' | 'aboutContent' | 'aboutExpandedContent' | 'targetTitle' 
  | 'targetSubtitle' | 'targetConstructionCompanies' | 'targetConstructionCompaniesDesc' 
  | 'targetPlanningOffices' | 'targetPlanningOfficesDesc' | 'targetMunicipalities' 
  | 'targetMunicipalitiesDesc' | 'targetInvestors' | 'targetInvestorsDesc' 
  | 'yourBenefits' | 'howWeCanHelp' | 'typicalScenario' | 'tailoredStudies' 
  | 'addedValueTitle' | 'addedValueSubtitle' | 'valueTimeSavings' | 'valueTimeSavingsDesc' 
  | 'valueCostOptimization' | 'valueCostOptimizationDesc' | 'valueExpertise' 
  | 'valueExpertiseDesc' | 'constructionBenefit1' | 'constructionBenefit2' 
  | 'constructionBenefit3' | 'constructionBenefit4' | 'constructionScenario' 
  | 'planningBenefit1' | 'planningBenefit2' | 'planningBenefit3' | 'planningBenefit4' 
  | 'planningScenario' | 'municipalityBenefit1' | 'municipalityBenefit2' 
  | 'municipalityBenefit3' | 'municipalityBenefit4' | 'municipalityScenario' 
  | 'investorBenefit1' | 'investorBenefit2' | 'investorBenefit3' | 'investorBenefit4' 
  | 'investorScenario' | 'contactForConsultation' | 'projectsTitle' | 'projectsSubtitle' 
  | 'viewDetails' | 'contactTitle' | 'contactSubtitle' | 'nameLabel' | 'emailLabel' 
  | 'phoneLabel' | 'messageLabel' | 'fileUploadLabel' | 'sendButton' | 'footerRights' 
  | 'footerPrivacy' | 'footerTerms' | 'extendedServicesTitle' | 'extendedServicesSubtitle' 
  | 'extendedServicesIntro' | 'extendedServiceProjectManagement' 
  | 'extendedServiceProjectManagementDesc' | 'extendedServiceTenderManagement' 
  | 'extendedServiceTenderManagementDesc' | 'extendedServiceConstruction' 
  | 'extendedServiceConstructionDesc' | 'extendedServicePlanning' 
  | 'extendedServicePlanningDesc' | 'extendedServicesCta';

export const translations: Record<'de' | 'en', Record<TranslationKeys, string>> = {
  de: {
    // Navigation
    home: "Home",
    about: "Über uns",
    services: "Leistungen",
    sectors: "Fachgebiete",
    targetAudiences: "Zielgruppen",
    projects: "Projekte / Referenzen",
    extendedServices: "Erweiterte Leistungen",
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
    serviceAiStudiesDescUpdated: "Modernste KI-Technologie für präzise, kosteneffiziente geotechnische Analysen und fundierte Entscheidungsgrundlagen.",
    serviceDrillingOpt: "Optimierung von Bohrungen",
    serviceDrillingOptDesc: "Strategische Platzierung von Bohrungen und CPT-Tests für maximale Informationsgewinnung.",
    serviceDrillingOptimized: "Optimierte Baugrunderkundungsplanung",
    serviceDrillingOptimizedDesc: "Strategische Platzierung von Bohrungen, CPT-Tests und Laboruntersuchungen für maximale Informationsgewinnung bei optimierten Kosten.",
    serviceReports: "Normkonforme Berichte",
    serviceReportsDesc: "Eurocode- und DIN-konforme Berichte, die allen regulatorischen Anforderungen entsprechen.",
    serviceReportsUpdated: "Fachliche Qualitätssicherung und Berichtserstellung",
    serviceReportsUpdatedDesc: "Eurocode- und DIN-konforme Berichte mit konkreten Empfehlungen, basierend auf fundierter Fachexpertise und modernster Analyse.",
    serviceGeologicalRisk: "Geologische und Umweltrisikobewertung",
    serviceGeologicalRiskDesc: "Umfassende Analyse geologischer, hydrologischer und umweltrelevanter Faktoren durch Deep Research aus multiplen Datenquellen.",
    serviceGeologicalRiskDetail: "Unsere geologische und Umweltrisikobewertung bildet die Grundlage jeder geotechnischen Vorstudie und umfasst:\n\n- Systematische Auswertung geologischer Karten verschiedener Maßstäbe und Epochen\n- Deep Research in amtlichen und privaten Bohrdatenbanken im Umkreis des Projektstandorts\n- Analyse aktueller und historischer Satellitenbilder zur Erkennung von Oberflächenveränderungen\n- Auswertung digitaler Geländemodelle (DGM) zur Identifikation morphologischer Besonderheiten\n- Durchführung einer hydrologischen Grundwasseranalyse mit Ermittlung von Grundwasserständen und -schwankungen\n- Prüfung vorhandener Umweltkataster zur Erkennung potenzieller Altlasten und Kontaminationen\n- Bewertung historischer Nutzungen mit Fokus auf mögliche Baugrundrisiken\n- Zusammenführung aller Daten in einem georeferenzierten digitalen Modell\n- Erstbewertung der Erosions- und Hochwasseranfälligkeit des Standorts\n\nDurch den Einsatz unserer spezialisierten KI-Algorithmen können wir selbst in Datenbanken mit Millionen von Einträgen relevante Informationen für Ihren spezifischen Standort identifizieren und auswerten. Diese Methode liefert uns eine deutlich breitere Datenbasis als konventionelle Ansätze und ermöglicht eine präzisere Ersteinschätzung des Baugrunds – oft ohne dass in dieser Phase bereits kostenintensive Erkundungen vor Ort erforderlich sind.",

    // About
    aboutTitle: "Über uns",
    aboutSubtitle: "Erfahrung und Innovation in der Geotechnik",
    aboutContent: "Als erfahrene Geologen kombinieren wir traditionelles Fachwissen mit innovativen KI-Technologien, um präzise und kosteneffiziente geotechnische Vorstudien durchzuführen. Unsere Expertise ermöglicht es uns, potenzielle Risiken frühzeitig zu identifizieren und Lösungen vorzuschlagen, die Zeit und Kosten sparen.",
    aboutExpandedContent: "Als erfahrene Geologen kombinieren wir traditionelles Fachwissen mit innovativen KI-Technologien, um präzise und kosteneffiziente geotechnische Vorstudien durchzuführen.\n\nUnser interdisziplinäres Experten-Netzwerk vereint Fachleute aus den Bereichen Geologie, Hydrologie, Bauingenieurwesen und Datenanalyse mit 10-25 Jahren Berufserfahrung in Deutschland und anderen europäischen Ländern. Diese moderne Netzwerkstruktur ermöglicht es uns, die Projekte unserer Kunden besonders effizient, normgerecht und kostengünstig voranzutreiben.\n\nUnsere Expertise ermöglicht es uns, potenzielle Risiken frühzeitig zu identifizieren und Lösungen vorzuschlagen, die Zeit und Kosten sparen.",
    
    // Target Audiences
    targetTitle: "Zielgruppen",
    targetSubtitle: "Maßgeschneiderte Lösungen für verschiedene Branchen",
    targetConstructionCompanies: "Bauunternehmen",
    targetConstructionCompaniesDesc: "Reduzieren Sie Risiken und optimieren Sie Ihre Bauprojekte mit unseren detaillierten geotechnischen Analysen.",
    targetPlanningOffices: "Planungsbüros",
    targetPlanningOfficesDesc: "Integrieren Sie präzise geotechnische Daten in Ihre Planungsprozesse für fundierte Entscheidungen.",
    targetMunicipalities: "Kommunen",
    targetMunicipalitiesDesc: "Unterstützung für öffentliche Infrastrukturprojekte durch zuverlässige geotechnische Bewertungen.",
    targetInvestors: "Investoren",
    targetInvestorsDesc: "Minimieren Sie Investitionsrisiken durch frühzeitige Erkennung potenzieller geotechnischer Herausforderungen.",
    
    // Target Audience Benefits
    yourBenefits: "Ihre Vorteile",
    howWeCanHelp: "Wie wir Ihnen helfen können",
    typicalScenario: "Typisches Szenario",
    tailoredStudies: "Unsere maßgeschneiderten geotechnischen Vorstudien sind speziell auf die Bedürfnisse von {audience} zugeschnitten. Wir liefern präzise, relevante Daten und Analysen, die direkt in Ihre Entscheidungsprozesse integriert werden können.",
    
    // Added Value Section (replacing Testimonials)
    addedValueTitle: "Mehrwert für Ihre Projekte",
    addedValueSubtitle: "Unsere geotechnischen Vorstudien bieten Ihnen entscheidende Vorteile für den Erfolg Ihrer Bauvorhaben:",
    valueTimeSavings: "Zeitersparnis durch moderne Technologie",
    valueTimeSavingsDesc: "Unsere KI-gestützte Analyse umfangreicher Datenbanken beschleunigt den Planungsprozess erheblich. Sie erhalten präzise Ergebnisse in einem Bruchteil der Zeit, die konventionelle Methoden benötigen, und können Ihr Projekt schneller vorantreiben.",
    valueCostOptimization: "Kostenoptimierung durch gezielte Erkundung",
    valueCostOptimizationDesc: "Mit unseren Vorstudien reduzieren Sie die Anzahl notwendiger Bohrungen und Sondierungen auf ein optimales Maß. Gleichzeitig minimieren Sie das Risiko unerwarteter Mehrkosten in der Bauphase durch frühzeitige Kenntnis kritischer Bodenverhältnisse.",
    valueExpertise: "Fachkompetenz durch interdisziplinäres Netzwerk",
    valueExpertiseDesc: "Wir verbinden moderne geotechnische Analysemethoden mit der Expertise eines Netzwerks von Spezialisten aus verschiedenen Disziplinen. Diese Kombination garantiert Ihnen normkonforme, praxistaugliche Lösungen für jede geotechnische Herausforderung.",
    
    // Construction companies benefits
    constructionBenefit1: "Reduzierung von Risiken und unerwarteten Kosten",
    constructionBenefit2: "Optimierung von Bauprozessen durch präzise Bodenkenntnis",
    constructionBenefit3: "Einhaltung regulatorischer Anforderungen",
    constructionBenefit4: "Effiziente Ressourcenplanung basierend auf geotechnischen Erkenntnissen",
    constructionScenario: "Ein Bauunternehmen kämpfte mit unerwartet weichen Bodenschichten in einem Wohnungsbauprojekt, was zu Verzögerungen und erheblichen Mehrkosten führte. Mit unserer geotechnischen Vorstudie konnte ein ähnliches Folgeprojekt optimal geplant werden, was zu Kosteneinsparungen von etwa 15% bei den Gründungsarbeiten führte.",
    
    // Planning offices benefits
    planningBenefit1: "Integration präziser geotechnischer Daten in Ihre Planung",
    planningBenefit2: "Vermeidung kostenintensiver Planungsänderungen",
    planningBenefit3: "Fundierte Entscheidungsgrundlagen für Gestaltungsentscheidungen",
    planningBenefit4: "Optimierung der Gründungsgestaltung und Bodenverbesserungsmaßnahmen",
    planningScenario: "Ein Planungsbüro musste die Gründungsgestaltung eines Industriegebäudes mehrfach anpassen, weil unerwartete Grundwasserverhältnisse erst während des Baus entdeckt wurden. Bei zukünftigen Projekten integrierte das Büro unsere detaillierten geotechnischen Vorstudien in den Planungsprozess, was zu präziseren Entwürfen von Anfang an führte.",
    
    // Municipalities benefits
    municipalityBenefit1: "Risikominimierung bei öffentlichen Infrastrukturprojekten",
    municipalityBenefit2: "Kostentransparenz und -kontrolle durch präzise Voruntersuchungen",
    municipalityBenefit3: "Normkonforme und rechtssichere Dokumentation",
    municipalityBenefit4: "Optimierung von Steuergeldern durch präzise Planungsgrundlagen",
    municipalityScenario: "Eine Kommune stand vor der Herausforderung, eine wirtschaftliche Trassenführung in geologisch komplexem Gelände für ein Infrastrukturprojekt zu finden. Unsere präzise geotechnische Vorstudie ermöglichte eine optimierte Route, die sowohl Kosten als auch Umwelteingriffe minimierte und die Genehmigungsverfahren beschleunigte.",
    
    // Investors benefits
    investorBenefit1: "Frühzeitige Risikobewertung vor Investitionsentscheidungen",
    investorBenefit2: "Kalkulierbare Kosten durch Ausräumung geotechnischer Unsicherheiten",
    investorBenefit3: "Fundierte Entscheidungsgrundlagen für Kaufentscheidungen",
    investorBenefit4: "Vermeidung kostenintensiver Überraschungen bei der Projektentwicklung",
    investorScenario: "Ein Investor konnte dank unserer frühzeitigen geotechnischen Risikoanalyse eine fundierte Entscheidung über den Kauf eines Grundstücks treffen. Die identifizierten bodenbedingten Risiken wurden in die Kaufpreisverhandlung einbezogen, was zu einer realistischen Einschätzung der zu erwartenden Projektkosten führte und spätere kostenintensive Überraschungen verhinderte.",
    
    contactForConsultation: "Kontaktieren Sie uns für eine Beratung",
    
    // Projects
    projectsTitle: "Projekte / Referenzen",
    projectsSubtitle: "Unsere erfolgreichen Fallstudien",
    viewDetails: "Details anzeigen",
    
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
    footerTerms: "AGB",
    
    // Extended Services
    extendedServicesTitle: "Erweiterte Leistungen",
    extendedServicesSubtitle: "Umfassende Betreuung Ihrer geotechnischen Projekte",
    extendedServicesIntro: "Neben unseren geotechnischen Vorstudien bieten wir Ihnen ein breites Spektrum an erweiterten Leistungen, die Ihre Projekte von der Planung bis zur Umsetzung begleiten. Profitieren Sie von unserer Expertise in allen Phasen Ihres Bauvorhabens.",
    
    extendedServiceProjectManagement: "Projektmanagement für<br>Baugrunderkundungen",
    extendedServiceProjectManagementDesc: "Wir übernehmen die Koordination Ihrer<br>Baugrunderkundungen – von der Planung bis<br>zum Gutachten. Dies umfasst Zeitplanung,<br>Kostenüberwachung und Qualitätssicherung<br>gemäß Eurocode 7.",
    
    extendedServiceTenderManagement: "Ausschreibungs&shy;management<br>und Vergabe",
    extendedServiceTenderManagementDesc: "Wir erstellen normgerechte Ausschreibungsunterlagen für Ihre Baugrunderkundungen, unterstützen Sie bei der Auswahl qualifizierter Anbieter und bewerten eingehende Angebote fachkundig. Dabei berücksichtigen wir sowohl technische Aspekte als auch das optimale Preis-Leistungs-Verhältnis.",
    
    extendedServiceConstruction: "Bauüberwachung und<br>Qualitätssicherung",
    extendedServiceConstructionDesc: "Unsere Experten überwachen die<br>Durchführung aller Bohr- und Sondierarbeiten<br>und stellen die Einhaltung der<br>Qualitätsstandards sicher. Die Kontrolle<br>gewährleistet zuverlässige Daten.",
    
    extendedServicePlanning: "Fachplanung und<br>Gutachtenerstellung",
    extendedServicePlanningDesc: "Basierend auf den geotechnischen Vorstudien und Baugrunderkundungen erstellen wir normkonforme Baugrundgutachten nach Eurocode 7 und den aktuellen DIN-Normen. Diese enthalten konkrete Empfehlungen für Gründungsvarianten, Erdarbeiten und geotechnische Sonderlösungen.",
    
    extendedServicesCta: "Kontaktieren Sie uns für Details",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    services: "Services",
    sectors: "Fields of Expertise",
    targetAudiences: "Target Groups",
    projects: "Projects / References",
    extendedServices: "Extended Services",
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
    serviceAiStudiesDescUpdated: "State-of-the-art AI technology for precise, cost-efficient geotechnical analyses and well-founded decision-making bases.",
    serviceDrillingOpt: "Drilling Optimization",
    serviceDrillingOptDesc: "Strategic placement of drillings and CPT tests for maximum information gain.",
    serviceDrillingOptimized: "Optimized Ground Investigation Planning",
    serviceDrillingOptimizedDesc: "Strategic placement of drillings, CPT tests, and laboratory analyses for maximum information gain at optimized costs.",
    serviceReports: "Standard-Compliant Reports",
    serviceReportsDesc: "Eurocode and DIN-compliant reports that meet all regulatory requirements.",
    serviceReportsUpdated: "Technical Quality Assurance and Report Creation",
    serviceReportsUpdatedDesc: "Eurocode and DIN-compliant reports with concrete recommendations, based on sound technical expertise and state-of-the-art analysis.",
    serviceGeologicalRisk: "Geological and Environmental Risk Assessment",
    serviceGeologicalRiskDesc: "Comprehensive analysis of geological, hydrological, and environmental factors through deep research from multiple data sources.",
    serviceGeologicalRiskDetail: "Our geological and environmental risk assessment forms the foundation of every geotechnical preliminary study and includes:\n\n- Systematic evaluation of geological maps of various scales and epochs\n- Deep research in official and private drilling databases in the vicinity of the project site\n- Analysis of current and historical satellite images to detect surface changes\n- Evaluation of digital terrain models (DTM) to identify morphological features\n- Conducting a hydrological groundwater analysis with determination of groundwater levels and fluctuations\n- Review of existing environmental cadastres to identify potential contaminated sites\n- Assessment of historical land uses with a focus on possible ground-related risks\n- Integration of all data in a georeferenced digital model\n- Initial assessment of the site's susceptibility to erosion and flooding\n\nThrough the use of our specialized AI algorithms, we can identify and evaluate relevant information for your specific location even in databases with millions of entries. This method provides us with a significantly broader data foundation than conventional approaches and enables a more precise initial assessment of the subsoil – often without requiring cost-intensive on-site investigations at this stage.",
    
    // About
    aboutTitle: "About Us",
    aboutSubtitle: "Experience and Innovation in Geotechnology",
    aboutContent: "As experienced geologists, we combine traditional expertise with innovative AI technologies to conduct precise and cost-efficient geotechnical preliminary studies. Our expertise allows us to identify potential risks early and propose solutions that save time and costs.",
    aboutExpandedContent: "As experienced geologists, we combine traditional expertise with innovative AI technologies to conduct precise and cost-efficient geotechnical preliminary studies.\n\nOur interdisciplinary expert network brings together professionals from the fields of geology, hydrology, civil engineering, and data analysis with 10-25 years of professional experience in Germany and other European countries. This modern network structure enables us to advance our clients' projects particularly efficiently, in compliance with standards, and cost-effectively.\n\nOur expertise allows us to identify potential risks early and propose solutions that save time and costs.",
    
    // Target Audiences
    targetTitle: "Target Groups",
    targetSubtitle: "Tailored Solutions for Different Industries",
    targetConstructionCompanies: "Construction Companies",
    targetConstructionCompaniesDesc: "Reduce risks and optimize your construction projects with our detailed geotechnical analyses.",
    targetPlanningOffices: "Planning Offices",
    targetPlanningOfficesDesc: "Integrate precise geotechnical data into your planning processes for well-founded decisions.",
    targetMunicipalities: "Municipalities",
    targetMunicipalitiesDesc: "Support for public infrastructure projects through reliable geotechnical assessments.",
    targetInvestors: "Investors",
    targetInvestorsDesc: "Minimize investment risks by early detection of potential geotechnical challenges.",
    
    // Target Audience Benefits
    yourBenefits: "Your Benefits",
    howWeCanHelp: "How We Can Help You",
    typicalScenario: "Typical Scenario",
    tailoredStudies: "Our tailored geotechnical preliminary studies are specifically designed for the needs of {audience}. We provide precise, relevant data and analyses that can be directly integrated into your decision-making processes.",
    
    // Added Value Section (replacing Testimonials)
    addedValueTitle: "Added Value for Your Projects",
    addedValueSubtitle: "Our geotechnical preliminary studies offer you decisive advantages for the success of your construction projects:",
    valueTimeSavings: "Time Savings through Modern Technology",
    valueTimeSavingsDesc: "Our AI-supported analysis of extensive databases significantly accelerates the planning process. You receive precise results in a fraction of the time conventional methods require, allowing you to advance your project more quickly.",
    valueCostOptimization: "Cost Optimization through Targeted Exploration",
    valueCostOptimizationDesc: "With our preliminary studies, you reduce the number of necessary drillings and soundings to an optimal level. At the same time, you minimize the risk of unexpected additional costs during the construction phase through early knowledge of critical soil conditions.",
    valueExpertise: "Professional Expertise through Interdisciplinary Network",
    valueExpertiseDesc: "We combine modern geotechnical analysis methods with the expertise of a network of specialists from various disciplines. This combination guarantees you standard-compliant, practical solutions for any geotechnical challenge.",
    
    // Construction companies benefits
    constructionBenefit1: "Reduction of risks and unexpected costs",
    constructionBenefit2: "Optimization of construction processes through precise soil knowledge",
    constructionBenefit3: "Compliance with regulatory requirements",
    constructionBenefit4: "Efficient resource planning based on geotechnical insights",
    constructionScenario: "A construction company struggled with unexpectedly soft soil layers in a residential construction project, leading to delays and significant additional costs. With our geotechnical preliminary study, a similar follow-up project could be optimally planned, resulting in cost savings of approximately 15% in foundation work.",
    
    // Planning offices benefits
    planningBenefit1: "Integration of precise geotechnical data into your planning",
    planningBenefit2: "Avoidance of cost-intensive planning changes",
    planningBenefit3: "Well-founded decision bases for design decisions",
    planningBenefit4: "Optimization of foundation design and soil stabilization measures",
    planningScenario: "A planning office had to adjust the foundation design of an industrial building multiple times because unexpected groundwater conditions were only discovered during construction. For future projects, the office integrated our detailed geotechnical preliminary studies into the planning process, leading to more precise designs from the beginning.",
    
    // Municipalities benefits
    municipalityBenefit1: "Risk minimization in public infrastructure projects",
    municipalityBenefit2: "Cost transparency and control through precise preliminary investigations",
    municipalityBenefit3: "Standard-compliant and legally secure documentation",
    municipalityBenefit4: "Optimization of taxpayers' money through precise planning foundations",
    municipalityScenario: "A municipality faced the challenge of finding an economical route alignment in geologically complex terrain for an infrastructure project. Our precise geotechnical preliminary study enabled an optimized route that minimized both costs and environmental interventions and accelerated the approval procedures.",
    
    // Investors benefits
    investorBenefit1: "Early risk assessment before investment decisions",
    investorBenefit2: "Calculable costs by eliminating geotechnical uncertainties",
    investorBenefit3: "Well-founded decision bases for purchase decisions",
    investorBenefit4: "Avoidance of cost-intensive surprises during project development",
    investorScenario: "An investor was able to make a well-informed decision about purchasing a property thanks to our early geotechnical risk analysis. The identified ground-related risks were included in the purchase price negotiation, leading to a realistic assessment of the expected project costs and preventing cost-intensive surprises later.",
    
    contactForConsultation: "Contact us for consultation",
    
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
    
    // Extended Services
    extendedServicesTitle: "Extended Services",
    extendedServicesSubtitle: "Comprehensive Support for Your Geotechnical Projects",
    extendedServicesIntro: "In addition to our geotechnical preliminary studies, we offer you a wide range of extended services that accompany your projects from planning to implementation. Benefit from our expertise in all phases of your construction project.",
    
    extendedServiceProjectManagement: "Project Management for<br>Ground Investigations",
    extendedServiceProjectManagementDesc: "We take over the coordination of your<br>ground investigations - from planning to<br>the final report. This includes scheduling,<br>cost monitoring, and quality assurance<br>according to Eurocode 7.",
    
    extendedServiceTenderManagement: "Tender Management<br>and Procurement",
    extendedServiceTenderManagementDesc: "We create standard-compliant tender documents for your ground investigations, support you in selecting qualified providers, and expertly evaluate incoming offers. We consider both technical aspects and the optimal price-performance ratio.",
    
    extendedServiceConstruction: "Construction Supervision and<br>Quality Assurance",
    extendedServiceConstructionDesc: "Our experts supervise the<br>execution of all drilling and probing work<br>and ensure compliance with<br>quality standards. The control<br>ensures reliable data.",
    
    extendedServicePlanning: "Specialized Planning and<br>Expert Report Creation",
    extendedServicePlanningDesc: "Based on the geotechnical preliminary studies and ground investigations, we create standard-compliant ground investigation reports according to Eurocode 7 and the current DIN standards. These contain concrete recommendations for foundation options, earthworks, and geotechnical special solutions.",
    
    extendedServicesCta: "Contact us for details",
  }
};

type Language = 'de' | 'en';
type TranslationsType = typeof translations;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: TranslationKeys) => {
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

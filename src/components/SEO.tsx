
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

// Definiere die Struktur der SEO-Einstellungen
interface SeoData {
  title: string;
  description: string;
}

// Definiere SEO-Daten für alle Seiten und Sprachen
const seoConfig: Record<string, Record<'de' | 'en', SeoData>> = {
  '/': {
    de: {
      title: 'Geostudys – Geotechnische Vorstudien & Baugrund‑Analysen',
      description: 'Professionelle geotechnische Vorstudien mit KI-Unterstützung für optimierte Bauprojekte, Risikominimierung und fundierte Entscheidungen bei Bauvorhaben.'
    },
    en: {
      title: 'Geostudys – Geotechnical Preliminary Studies & Ground Analysis',
      description: 'Professional geotechnical preliminary studies with AI support for optimized construction projects, risk minimization, and well-founded decisions.'
    }
  },
  '/about': {
    de: {
      title: 'Über uns | Geostudys – Experten für Geotechnik',
      description: 'Erfahren Sie mehr über unser interdisziplinäres Netzwerk aus Geologen, Hydrologen und Bauingenieuren mit langjähriger Erfahrung in der Geotechnik.'
    },
    en: {
      title: 'About Us | Geostudys – Geotechnical Experts',
      description: 'Learn more about our interdisciplinary network of geologists, hydrologists, and civil engineers with years of experience in geotechnics.'
    }
  },
  '/services': {
    de: {
      title: 'Unsere Leistungen | Geostudys – Geotechnische Analysen',
      description: 'Entdecken Sie unser umfassendes Angebot an geotechnischen Dienstleistungen, von KI-gestützten Vorstudien bis zu umfassenden Risikobewertungen.'
    },
    en: {
      title: 'Our Services | Geostudys – Geotechnical Analysis',
      description: 'Discover our comprehensive range of geotechnical services, from AI-supported preliminary studies to comprehensive risk assessments.'
    }
  },
  '/sectors': {
    de: {
      title: 'Fachgebiete | Geostudys – Branchenspezifische Lösungen',
      description: 'Maßgeschneiderte geotechnische Lösungen für verschiedene Bauvorhaben in Wohnungsbau, Infrastruktur, Industrie und erneuerbaren Energien.'
    },
    en: {
      title: 'Fields of Expertise | Geostudys – Industry-Specific Solutions',
      description: 'Tailored geotechnical solutions for various construction projects in residential construction, infrastructure, industry, and renewable energy.'
    }
  },
  '/target-audiences': {
    de: {
      title: 'Zielgruppen | Geostudys – Maßgeschneiderte Geotechnik',
      description: 'Spezialisierte geotechnische Dienstleistungen für Bauunternehmen, Planungsbüros, Kommunen und Investoren mit individuellen Anforderungen.'
    },
    en: {
      title: 'Target Groups | Geostudys – Tailored Geotechnics',
      description: 'Specialized geotechnical services for construction companies, planning offices, municipalities, and investors with individual requirements.'
    }
  },
  '/projects': {
    de: {
      title: 'Projekte & Referenzen | Geostudys – Erfolgreiche Fallstudien',
      description: 'Erfolgreiche Fallbeispiele unserer geotechnischen Analysen und Vorstudien für verschiedene Bauvorhaben und Herausforderungen.'
    },
    en: {
      title: 'Projects & References | Geostudys – Successful Case Studies',
      description: 'Successful case examples of our geotechnical analyses and preliminary studies for various construction projects and challenges.'
    }
  },
  '/contact': {
    de: {
      title: 'Kontakt | Geostudys – Geotechnische Beratung',
      description: 'Nehmen Sie Kontakt mit uns auf für eine kostenlose Erstberatung zu Ihrem Bauprojekt und profitieren Sie von unserer geotechnischen Expertise.'
    },
    en: {
      title: 'Contact | Geostudys – Geotechnical Consultation',
      description: 'Contact us for a free initial consultation on your construction project and benefit from our geotechnical expertise.'
    }
  },
  '/extended-services': {
    de: {
      title: 'Erweiterte Leistungen | Geostudys – Umfassende Baubegleitung',
      description: 'Ergänzende Dienstleistungen für Ihr Bauprojekt: Projektsteuerung, Ausschreibungsmanagement, Baubegleitung und Fachplanung aus einer Hand.'
    },
    en: {
      title: 'Extended Services | Geostudys – Comprehensive Construction Support',
      description: 'Additional services for your construction project: project management, tender management, construction support, and specialized planning from a single source.'
    }
  },
  '/wind-turbines': {
    de: {
      title: 'Windkraftanlagen | Geostudys – Geotechnische Vorstudien',
      description: 'Spezialisierte geotechnische Analysen für Windkraftanlagen mit KI-gestützten Methoden zur Optimierung der Fundamentplanung und Kostenreduzierung.'
    },
    en: {
      title: 'Wind Turbines | Geostudys – Geotechnical Preliminary Studies',
      description: 'Specialized geotechnical analyses for wind turbines using AI-supported methods to optimize foundation planning and reduce costs.'
    }
  },
  '/photovoltaic-parks': {
    de: {
      title: 'Photovoltaik-Parks | Geostudys – Geotechnische Vorstudien',
      description: 'Spezialisierte geotechnische Analysen für Solarparks mit KI-gestützten Methoden zur Optimierung der Fundamentplanung und Kostenreduzierung.'
    },
    en: {
      title: 'Photovoltaic Parks | Geostudys – Geotechnical Preliminary Studies',
      description: 'Specialized geotechnical analyses for solar parks using AI-supported methods to optimize foundation planning and reduce costs.'
    }
  }
};

// Standardwerte für nicht explizit definierte Seiten
const defaultSeo = {
  de: {
    title: 'Geostudys – Geotechnische Vorstudien & Analysen',
    description: 'Professionelle geotechnische Vorstudien und Analysen für Bauprojekte aller Art mit modernen Methoden und KI-Unterstützung.'
  },
  en: {
    title: 'Geostudys – Geotechnical Preliminary Studies & Analysis',
    description: 'Professional geotechnical preliminary studies and analyses for construction projects of all types with modern methods and AI support.'
  }
};

// Function to generate JSON-LD schema for Organization
const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GeoStudys",
    "url": "https://geostudys.com",
    "logo": "/geo-studies-portal/logo.svg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Am Stichkanal 2‑4",
      "postalCode": "14167",
      "addressLocality": "Berlin",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "info@geostudys.com",
      "telephone": "+49 157 88 33 0112"
    }
  };
};

// Function to generate JSON-LD schema for Service pages
const generateServiceSchema = (name: string, description: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "GeoStudys"
    }
  };
};

interface SEOProps {
  pagePath?: string;
}

const SEO = ({ pagePath }: SEOProps) => {
  const location = useLocation();
  const { language } = useLanguage();
  
  // Nutze entweder den übergebenen Pfad oder den aktuellen Pfad
  const currentPath = pagePath || location.pathname;
  
  // Hole die SEO-Daten für die aktuelle Seite oder nutze die Standardwerte
  const seoData = seoConfig[currentPath]?.[language] || defaultSeo[language];
  
  // Basis-URL für absolute URLs
  const baseUrl = 'https://geostudys.com'; // Hier die tatsächliche Domain einsetzen
  const currentUrl = `${baseUrl}${currentPath}`;
  
  // Generiere die alternativen URLs für hrefLang
  const alternateUrls = {
    de: currentUrl,
    en: currentUrl
  };

  // Determine if this is a service page
  const isServicePage = currentPath === '/services' || 
                        currentPath.includes('/residential-construction') ||
                        currentPath.includes('/infrastructure-construction') ||
                        currentPath.includes('/industrial-construction') ||
                        currentPath.includes('/water-construction') ||
                        currentPath.includes('/renewable-energy') ||
                        currentPath.includes('/wind-turbines') ||
                        currentPath.includes('/photovoltaic-parks') ||
                        currentPath.includes('/extended-services');

  // Generate appropriate schema based on page type
  const jsonLd = () => {
    if (currentPath === '/' && language === 'de') {
      return generateOrganizationSchema();
    } else if (isServicePage) {
      return generateServiceSchema(seoData.title, seoData.description);
    }
    return null;
  };

  const schemaData = jsonLd();

  return (
    <Helmet>
      {/* Grundlegende SEO-Tags */}
      <html lang={language} />
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      
      {/* Kanonische URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* HrefLang Attribute für Sprachvarianten - Korrektur von hreflang zu hrefLang */}
      <link rel="alternate" hrefLang="de" href={alternateUrls.de} />
      <link rel="alternate" hrefLang="en" href={alternateUrls.en} />
      <link rel="alternate" hrefLang="x-default" href={alternateUrls.de} />
      
      {/* Open Graph Meta Tags für besseres Social Sharing */}
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />

      {/* JSON-LD structured data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

const SEO = () => {
  const { language } = useLanguage();
  const location = useLocation();

  const getSEOData = (pathname: string, lang: string): SEOData => {
    const baseData = {
      de: {
        title: 'GeoStudys - KI-gestützte Geotechnische Dienstleistungen | CPT-Analyse | Deutschland',
        description: 'KI-gestützte geotechnische Analysen mit menschlicher Expertenverifikation. CPT-Analyse, Baugrundgutachten, Erdwärmepotenzial nach deutschen Standards.',
        keywords: 'Geotechnik Deutschland, CPT Analyse, Baugrundgutachten, KI Bodengutachten, Schneider 2008, Robertson 1990, Eurocode 7'
      },
      en: {
        title: 'GeoStudys - AI-powered Geotechnical Services | CPT Analysis | Germany',
        description: 'AI-powered geotechnical analyses with human expert verification. CPT analysis, ground investigations, geothermal potential according to German standards.',
        keywords: 'Geotechnical Germany, CPT Analysis, Ground Investigation, AI Soil Analysis, Schneider 2008, Robertson 1990, Eurocode 7'
      }
    };

    // Page-specific SEO data
    const pageData: Record<string, { de: SEOData; en: SEOData }> = {
      '/': baseData,
      '/about': {
        de: {
          title: 'Über GeoStudys - Erfahrene Geologen & KI-Technologie | Deutschland',
          description: 'Lernen Sie unser Expertenteam kennen. Erfahrene Geologen und Bauingenieure kombinieren traditionelles Fachwissen mit moderner KI-Technologie.',
          keywords: 'GeoStudys Team, Geologie Experten Deutschland, KI Geotechnik, Bauingenieure'
        },
        en: {
          title: 'About GeoStudys - Experienced Geologists & AI Technology | Germany',
          description: 'Meet our expert team. Experienced geologists and civil engineers combine traditional expertise with modern AI technology.',
          keywords: 'GeoStudys Team, Geology Experts Germany, AI Geotechnics, Civil Engineers'
        }
      },
      '/services': {
        de: {
          title: 'Geotechnische Dienstleistungen - CPT-Analyse & Baugrundgutachten | GeoStudys',
          description: 'Umfassende geotechnische Dienstleistungen: CPT-Analyse, Baugrundgutachten, Erdwärmepotenzial, KI-gestützte Bodenanalyse nach deutschen Standards.',
          keywords: 'Geotechnische Dienstleistungen, CPT Auswertung, Baugrundgutachten erstellen, Erdwärme Analyse'
        },
        en: {
          title: 'Geotechnical Services - CPT Analysis & Ground Investigation | GeoStudys',
          description: 'Comprehensive geotechnical services: CPT analysis, ground investigations, geothermal potential, AI-powered soil analysis according to German standards.',
          keywords: 'Geotechnical Services, CPT Evaluation, Ground Investigation Report, Geothermal Analysis'
        }
      },
      '/cpt-analysis': {
        de: {
          title: 'CPT-Analyse - KI-gestützte Drucksondierung nach Schneider & Robertson | GeoStudys',
          description: 'Professionelle CPT-Analyse mit KI-Unterstützung. Automatische Bodenklassifikation nach Schneider 2008, Robertson 1990 und Eurocode 7.',
          keywords: 'CPT Analyse Deutschland, Drucksondierung Auswertung, Schneider 2008, Robertson 1990, KI CPT'
        },
        en: {
          title: 'CPT Analysis - AI-powered Cone Penetration Testing Schneider & Robertson | GeoStudys',
          description: 'Professional CPT analysis with AI support. Automatic soil classification according to Schneider 2008, Robertson 1990 and Eurocode 7.',
          keywords: 'CPT Analysis Germany, Cone Penetration Testing, Schneider 2008, Robertson 1990, AI CPT'
        }
      },
      '/contact': {
        de: {
          title: 'Kontakt - Geotechnische Beratung & CPT-Analyse Anfrage | GeoStudys',
          description: 'Kontaktieren Sie unsere Geotechnik-Experten für eine kostenlose Erstberatung. Schnelle CPT-Analyse und Baugrundgutachten deutschlandweit.',
          keywords: 'Geotechnik Beratung, CPT Analyse Anfrage, Baugrundgutachten Kontakt, Geologe Deutschland'
        },
        en: {
          title: 'Contact - Geotechnical Consulting & CPT Analysis Request | GeoStudys',
          description: 'Contact our geotechnical experts for a free initial consultation. Fast CPT analysis and ground investigations throughout Germany.',
          keywords: 'Geotechnical Consulting, CPT Analysis Request, Ground Investigation Contact, Geologist Germany'
        }
      }
    };

    return pageData[pathname]?.[lang as 'de' | 'en'] || baseData[lang as 'de' | 'en'];
  };

  useEffect(() => {
    const seoData = getSEOData(location.pathname, language);
    
    // Update document title
    document.title = seoData.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoData.keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seoData.title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', seoData.description);
    }
    
    // Update voice keywords for voice search
    const voiceKeywords = document.querySelector('meta[name="voice-keywords"]');
    if (voiceKeywords) {
      voiceKeywords.setAttribute('content', seoData.keywords);
    }
    
    console.log(`SEO updated for ${location.pathname} (${language}):`, seoData);
  }, [location.pathname, language]);

  return null;
};

export default SEO;

import { useLanguage } from '@/context/LanguageContext';
import SEO from '@/components/SEO';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const About = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  // Effekt zum Verhindern des weißen Bildschirms
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Nur bei tatsächlichem Verlassen der Seite eingreifen
      if (event.currentTarget === window) {
        event.preventDefault();
      }
    };
    
    // Listener für Page Visibility hinzufügen
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        console.log('Tab ist wieder sichtbar');
      }
    });
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEO pagePath="/about" />
      
      {/* Header Section */}
      <section className="bg-geoblue-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="heading-primary-light">{t('aboutTitle')}</h1>
            <p className="text-xl max-w-3xl mx-auto">{t('aboutSubtitle')}</p>
          </div>
        </div>
      </section>
      
      {/* Main Content with restructured sections */}
      <section className="py-16">
        <div className="container-custom max-w-4xl mx-auto space-y-16">
          {/* Mission Section */}
          <div>
            <h2 className="text-3xl font-bold text-geoblue-800 mb-4">
              Unsere Mission
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Bei GeoStudy ist es unsere Mission, durch <strong>präzise geotechnische Vorstudien</strong> die Grundlage für fundierte Entscheidungen zu schaffen. Wir kombinieren <strong>traditionelles geologisches Fachwissen mit modernsten KI-Technologien</strong>, um kosteneffiziente und präzise Analysen zu liefern.
              </p>
              <p>
                Unser Ziel ist es, potenzielle Risiken frühzeitig zu identifizieren und Lösungen vorzuschlagen, die Zeit und Kosten sparen. Wir verstehen, dass jedes Projekt einzigartig ist und bieten daher maßgeschneiderte Lösungen für verschiedene Branchen und Anforderungen.
              </p>
            </div>
          </div>
          
          {/* Qualifications Section */}
          <div>
            <h2 className="text-3xl font-bold text-geoblue-800 mb-4">
              Unsere Qualifikationen
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Unser Team besteht aus erfahrenen Geologen mit umfassender Ausbildung und jahrelanger Praxis in der geotechnischen Analyse. Wir halten uns stets über die neuesten Entwicklungen und Technologien in unserem Bereich auf dem Laufenden.
              </p>
              <p>
                Unsere Expertise in der <strong>Implementierung von KI-gestützten Analysen</strong> ermöglicht es uns, große Mengen geologischer Daten effizient zu verarbeiten und präzise Vorhersagen zu treffen. Alle unsere Berichte entsprechen den aktuellen Eurocode- und DIN-Normen.
              </p>
            </div>
          </div>
          
          {/* Expert Network Section */}
          <div>
            <h2 className="text-3xl font-bold text-geoblue-800 mb-4">
              Unser interdisziplinäres Experten-Netzwerk
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Bei GeoStudy arbeiten wir in einer modernen Netzwerkstruktur, die Fachleute aus den Bereichen Geologie, Hydrologie, Bauingenieurwesen und Datenanalyse zusammenbringt. Unsere Spezialisten verfügen über <strong>10 bis 25 Jahre Berufserfahrung</strong> in Deutschland und anderen europäischen Ländern und haben sich durch <strong>interdisziplinäre Projektarbeit</strong> bewährt.
              </p>
              <p>
                Diese Vernetzung unter einem Dach ermöglicht es uns, die Projekte unserer Kunden besonders effizient, normgerecht und kostengünstig voranzutreiben. Die Kombination aus langjähriger Praxiserfahrung und moderner digitaler Methodik bildet die Grundlage für unsere maßgeschneiderten Lösungen.
              </p>
            </div>
          </div>
          
          {/* What Makes Us Special Section - with two-column layout for features */}
          <div>
            <h2 className="text-3xl font-bold text-geoblue-800 mb-6 text-center">
              Was uns auszeichnet
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-geolight p-6 rounded-lg shadow-md">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-geoblue-100 text-geoblue-800 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-geoblue-800 mb-2">Innovation</h3>
                </div>
                <p className="text-gray-600">
                  Wir setzen modernste KI-Technologien ein, um präzise und kosteneffiziente Analysen durchzuführen.
                </p>
              </div>
              
              <div className="bg-geolight p-6 rounded-lg shadow-md">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-geoblue-100 text-geoblue-800 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-geoblue-800 mb-2">Zuverlässigkeit</h3>
                </div>
                <p className="text-gray-600">
                  Unsere Berichte sind präzise, normkonform und bieten eine solide Grundlage für Entscheidungen.
                </p>
              </div>
              
              <div className="bg-geolight p-6 rounded-lg shadow-md md:col-span-2">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-geoblue-100 text-geoblue-800 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-geoblue-800 mb-2">Kundenorientierung</h3>
                </div>
                <p className="text-gray-600">
                  Wir verstehen die individuellen Bedürfnisse jedes Kunden und bieten maßgeschneiderte Lösungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Header Section */}
      <section className="bg-geoblue-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('aboutTitle')}</h1>
            <p className="text-xl max-w-3xl mx-auto">{t('aboutSubtitle')}</p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-geoblue-800 mb-6">
                Unsere Mission
              </h2>
              <p className="text-gray-600 mb-4">
                Bei GeoStudy ist es unsere Mission, durch präzise geotechnische Vorstudien die Grundlage für fundierte Entscheidungen zu schaffen. Wir kombinieren traditionelles geologisches Fachwissen mit modernsten KI-Technologien, um kosteneffiziente und präzise Analysen zu liefern.
              </p>
              <p className="text-gray-600 mb-4">
                Unser Ziel ist es, potenzielle Risiken frühzeitig zu identifizieren und Lösungen vorzuschlagen, die Zeit und Kosten sparen. Wir verstehen, dass jedes Projekt einzigartig ist und bieten daher maßgeschneiderte Lösungen für verschiedene Branchen und Anforderungen.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2069&auto=format&fit=crop" 
                alt="Geotechnical Engineering Mission"
                className="w-full h-auto" 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-7031287a879e?q=80&w=2070&auto=format&fit=crop" 
                alt="Geotechnical Engineering Team"
                className="w-full h-auto" 
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-geoblue-800 mb-6">
                Unsere Qualifikationen
              </h2>
              <p className="text-gray-600 mb-4">
                Unser Team besteht aus erfahrenen Geologen mit umfassender Ausbildung und jahrelanger Praxis in der geotechnischen Analyse. Wir halten uns stets über die neuesten Entwicklungen und Technologien in unserem Bereich auf dem Laufenden.
              </p>
              <p className="text-gray-600 mb-4">
                Unsere Expertise in der Implementierung von KI-gestützten Analysen ermöglicht es uns, große Mengen geologischer Daten effizient zu verarbeiten und präzise Vorhersagen zu treffen. Alle unsere Berichte entsprechen den aktuellen Eurocode- und DIN-Normen.
              </p>
            </div>
          </div>
          
          <div className="bg-geolight p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-geoblue-800 mb-6 text-center">
              Was uns auszeichnet
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-geoblue-100 text-geoblue-800 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-geoblue-800 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Wir setzen modernste KI-Technologien ein, um präzise und kosteneffiziente Analysen durchzuführen.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-geoblue-100 text-geoblue-800 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-geoblue-800 mb-2">Zuverlässigkeit</h3>
                <p className="text-gray-600">
                  Unsere Berichte sind präzise, normkonform und bieten eine solide Grundlage für Entscheidungen.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-geoblue-100 text-geoblue-800 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-geoblue-800 mb-2">Kundenorientierung</h3>
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

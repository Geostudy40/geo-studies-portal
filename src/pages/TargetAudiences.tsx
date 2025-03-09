
import { Building, PenTool, Landmark, BarChart4 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import TargetAudienceCard from '@/components/TargetAudienceCard';

const TargetAudiences = () => {
  const { t } = useLanguage();
  
  const audiences = [
    {
      title: t('targetConstructionCompanies'),
      description: t('targetConstructionCompaniesDesc'),
      icon: <Building size={24} className="text-white" />,
      benefits: [
        "Reduzierung von Risiken und unerwarteten Kosten",
        "Optimierung von Bauprozessen durch präzise Bodenkenntnis",
        "Einhaltung regulatorischer Anforderungen",
        "Effiziente Ressourcenplanung basierend auf geotechnischen Erkenntnissen"
      ]
    },
    {
      title: t('targetPlanningOffices'),
      description: t('targetPlanningOfficesDesc'),
      icon: <PenTool size={24} className="text-white" />,
      benefits: [
        "Integration präziser geotechnischer Daten in Ihre Planung",
        "Vermeidung kostenintensiver Planungsänderungen",
        "Fundierte Entscheidungsgrundlagen für Designentscheidungen",
        "Optimierung von Fundamentdesign und Bodenstabilisierungsmaßnahmen"
      ]
    },
    {
      title: t('targetMunicipalities'),
      description: t('targetMunicipalitiesDesc'),
      icon: <Landmark size={24} className="text-white" />,
      benefits: [
        "Risikominimierung bei öffentlichen Infrastrukturprojekten",
        "Kostentransparenz und -kontrolle durch präzise Voruntersuchungen",
        "Normkonforme und rechtssichere Dokumentation",
        "Optimierung der Steuergelder durch präzise Planungsgrundlagen"
      ]
    },
    {
      title: t('targetInvestors'),
      description: t('targetInvestorsDesc'),
      icon: <BarChart4 size={24} className="text-white" />,
      benefits: [
        "Frühzeitige Risikobewertung vor Investitionsentscheidungen",
        "Kalkulierbare Kosten durch Eliminierung geotechnischer Unsicherheiten",
        "Fundierte Entscheidungsgrundlagen für Kaufentscheidungen",
        "Vermeidung kostenintensiver Überraschungen während der Projektentwicklung"
      ]
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-geoblue-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('targetTitle')}</h1>
            <p className="text-xl max-w-3xl mx-auto">{t('targetSubtitle')}</p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {audiences.map((audience, index) => (
              <TargetAudienceCard
                key={index}
                title={audience.title}
                description={audience.description}
                icon={audience.icon}
              />
            ))}
          </div>
          
          {/* Detailed Sections for each audience */}
          {audiences.map((audience, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-geoblue-800 mb-6 border-l-4 border-geoblue-800 pl-4">
                Für {audience.title}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-600 mb-4">
                    {audience.description}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-geoblue-800 mb-4">Ihre Vorteile</h3>
                  <ul className="space-y-3">
                    {audience.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-6 w-6 text-geoblue-800 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-geolight rounded-lg p-6 shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold text-geoblue-800 mb-4">Wie wir Ihnen helfen können</h3>
                  <p className="text-gray-600 mb-4">
                    Unsere maßgeschneiderten geotechnischen Vorstudien sind speziell auf die Bedürfnisse von {audience.title} ausgerichtet. Wir liefern präzise, relevante Daten und Analysen, die direkt in Ihre Entscheidungsprozesse integriert werden können.
                  </p>
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <h4 className="font-semibold text-geoblue-800 mb-2">Typisches Szenario</h4>
                    <p className="text-gray-600 italic">
                      "Ein {audience.title.toLowerCase()} hatte mit unerwarteten Bodenbedingungen zu kämpfen, die zu Verzögerungen und Mehrkosten führten. Mit unseren geotechnischen Vorstudien hätten diese Probleme frühzeitig erkannt und angemessen geplant werden können."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-geolight">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-geoblue-800 mb-12 text-center">
            Was unsere Kunden sagen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-geoblue-100 flex items-center justify-center text-geoblue-800 font-bold text-xl mr-4">
                  B
                </div>
                <div>
                  <h3 className="font-semibold text-geoblue-800">Bauunternehmen GmbH</h3>
                  <p className="text-gray-500 text-sm">Wohnungsbau</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Die KI-gestützten Vorstudien von GeoStudy haben uns geholfen, den Umfang der Bohrungen zu reduzieren und gleichzeitig ein besseres Verständnis der Bodenverhältnisse zu erhalten."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-geoblue-100 flex items-center justify-center text-geoblue-800 font-bold text-xl mr-4">
                  P
                </div>
                <div>
                  <h3 className="font-semibold text-geoblue-800">Planungsbüro Mustermann</h3>
                  <p className="text-gray-500 text-sm">Architektur</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Die detaillierten geotechnischen Berichte ermöglichten es uns, effiziente und sichere Fundamentlösungen zu entwerfen, die zu erheblichen Kosteneinsparungen führten."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-geoblue-100 flex items-center justify-center text-geoblue-800 font-bold text-xl mr-4">
                  I
                </div>
                <div>
                  <h3 className="font-semibold text-geoblue-800">Invest Immo AG</h3>
                  <p className="text-gray-500 text-sm">Immobilieninvestment</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Die frühzeitige geotechnische Risikoidentifikation hat uns vor einer kostspieligen Fehlinvestition bewahrt. Der Mehrwert dieser Dienstleistung kann nicht hoch genug eingeschätzt werden."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TargetAudiences;

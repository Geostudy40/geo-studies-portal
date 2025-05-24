
import { useLanguage } from '@/context/LanguageContext';
import { getServicesData } from '../data/servicesData';
import ServiceHero from '@/components/ServiceHero';
import ServiceBlock from '@/components/ServiceBlock';
import AdditionalServices from '@/components/AdditionalServices';
import ProcessSection from '@/components/ProcessSection';

const Services = () => {
  console.log('[Services] Component loading...');
  
  const { language, t } = useLanguage();
  
  console.log('[Services] Language:', language);
  
  let servicesData;
  let coreServices;
  
  try {
    servicesData = getServicesData(language);
    coreServices = servicesData;
    console.log('[Services] Services data loaded successfully:', coreServices.length, 'services');
  } catch (error) {
    console.error('[Services] Error loading services data:', error);
    coreServices = [];
  }

  // Accent colors for gray blocks
  const accentColors = [
    'border-blue-700', // #1e40af
    'border-green-600', // #059669  
    'border-orange-600', // #ea580c
    'border-purple-600' // #9333ea
  ];

  return (
    <div>
      <ServiceHero />
      
      {/* Core Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">
            {language === 'de' ? 'Unsere Kernleistungen' : 'Our Core Services'}
          </h2>
          
          {coreServices && coreServices.length > 0 ? (
            coreServices.map((service, index) => (
              <ServiceBlock
                key={index}
                service={service}
                index={index}
                accentColor={accentColors[index % accentColors.length]}
                showContactButton={index === 0}
              />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">
                {language === 'de' ? 'Dienstleistungen werden geladen...' : 'Services are loading...'}
              </p>
            </div>
          )}
        </div>
      </section>
      
      <AdditionalServices />
      <ProcessSection />
    </div>
  );
};

export default Services;

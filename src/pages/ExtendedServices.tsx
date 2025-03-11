
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { ChartGantt, ClipboardList, ShieldCheck, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';

const ExtendedServices = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('extendedServiceProjectManagement'),
      description: t('extendedServiceProjectManagementDesc'),
      icon: <ChartGantt size={36} className="text-geoblue-800" />
    },
    {
      title: t('extendedServiceTenderManagement'),
      description: t('extendedServiceTenderManagementDesc'),
      icon: <ClipboardList size={36} className="text-geoblue-800" />
    },
    {
      title: t('extendedServiceConstruction'),
      description: t('extendedServiceConstructionDesc'),
      icon: <ShieldCheck size={36} className="text-geoblue-800" />
    },
    {
      title: t('extendedServicePlanning'),
      description: t('extendedServicePlanningDesc'),
      icon: <FileText size={36} className="text-geoblue-800" />
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-geoblue-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="heading-primary-light">{t('extendedServicesTitle')}</h1>
            <p className="text-xl max-w-3xl mx-auto">{t('extendedServicesSubtitle')}</p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-geolight">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              {t('extendedServicesIntro')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild className="bg-geoblue-800 hover:bg-geoblue-700 text-lg px-8 py-6">
              <Link to="/contact">{t('extendedServicesCta')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtendedServices;

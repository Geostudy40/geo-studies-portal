
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

interface ServiceData {
  title: string;
  description: string;
  icon: JSX.Element;
  detail: string;
}

interface ServiceBlockProps {
  service: ServiceData;
  index: number;
  accentColor: string;
  showContactButton?: boolean;
}

const ServiceBlock = ({ service, index, accentColor, showContactButton = false }: ServiceBlockProps) => {
  const { t } = useLanguage();

  // Simple function to format service details (no intro highlighting needed - already in data)
  const formatServiceDetail = (detail: string) => {
    if (!detail) return '';
    return detail; // Return as-is since formatting is already embedded in the data
  };

  return (
    <div className="mb-16 last:mb-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
          <div className={`bg-geolight p-8 rounded-lg shadow-md border border-gray-100 border-l-4 ${accentColor} h-full`}>
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-geoblue-100 text-geoblue-800 mb-6 mx-auto">
              {service.icon}
            </div>
            <h3 className="heading-secondary text-center">{service.title}</h3>
            <div 
              className="text-gray-600 mb-4 text-left"
              dangerouslySetInnerHTML={{ __html: service.description?.replace(/-/g, '•') || '' }}
            />
          </div>
        </div>
        
        <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
          <div 
            className="text-gray-600 mb-4"
            dangerouslySetInnerHTML={{ __html: formatServiceDetail(service.detail || '') }}
          />
          <div className="bg-geoblue-50 border-l-4 border-geoblue-800 p-4 mb-6">
            <p className="text-gray-700 italic">
              "Unsere {service.title} bietet eine solide Grundlage für kosteneffiziente und sichere Bauprojekte."
            </p>
          </div>
          
          {showContactButton && (
            <div className="mt-6">
              <Button asChild className="bg-geoblue-800 hover:bg-geoblue-900">
                <Link to="/contact">{t('contactForConsultation')}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceBlock;


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
  const { t, language } = useLanguage();

  // Function to format service details with highlighted introductory sentences
  const formatServiceDetail = (detail: string) => {
    if (!detail) return '';
    
    // Define introductory sentences to highlight (German)
    const germanIntros = [
      'Unsere geologische und hydrologische Bewertung geplanter Bauvorhaben bildet die Grundlage jeder geotechnischen Vorstudie und umfasst:',
      'Unsere KI-gestützten Leistungen umfassen:',
      'Wir bieten DIN- und Eurocode-konforme Baugrundgutachten und optimierte Erkundungsplanung:',
      'Unsere fachliche Begleitung während der Bauphase bietet praxisnahe Unterstützung:'
    ];
    
    // Define introductory sentences to highlight (English)
    const englishIntros = [
      'Our geological and hydrological assessment of planned construction projects forms the foundation of every geotechnical preliminary study and includes:',
      'Our AI-supported services include:',
      'We offer DIN and Eurocode-compliant soil investigation reports and optimized exploration planning:',
      'Our professional support during the construction phase offers practical assistance:'
    ];
    
    const introsToHighlight = language === 'en' ? englishIntros : germanIntros;
    
    let formattedDetail = detail.replace(/-/g, '•');
    
    // Wrap introductory sentences with highlighting - make them bold and larger
    introsToHighlight.forEach(intro => {
      if (formattedDetail.includes(intro)) {
        formattedDetail = formattedDetail.replace(
          intro,
          `<span class="font-bold text-lg text-geoblue-800 block mb-3">${intro}</span>`
        );
      }
    });
    
    return formattedDetail;
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

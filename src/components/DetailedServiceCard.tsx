
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { ServiceData } from '@/data/servicesData';

interface DetailedServiceCardProps {
  service: ServiceData;
  index: number;
}

// Helper function to render text with bold formatting
const renderFormattedText = (text: string) => {
  if (!text) return null;
  
  // Split the text by ** markers
  const parts = text.split(/(\*\*.*?\*\*)/g);
  
  return parts.map((part, i) => {
    // Check if part is surrounded by ** markers
    if (part.startsWith('**') && part.endsWith('**')) {
      // Remove the ** markers and render as bold
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    // Return regular text
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
};

const DetailedServiceCard = ({ service, index }: DetailedServiceCardProps) => {
  const { language, t } = useLanguage();
  
  // Process the detail text to preserve newlines
  const detailParagraphs = service.detail.split('\n\n').map((paragraph, idx) => {
    // Check if this paragraph contains a list
    if (paragraph.startsWith('- ')) {
      const listItems = paragraph.split('\n- ');
      return (
        <ul key={`list-${idx}`} className="list-disc pl-5 mb-4">
          {listItems.map((item, itemIdx) => {
            // Skip the first empty item if it exists
            if (itemIdx === 0 && item === '') return null;
            // Remove the "- " from the first item if needed
            const cleanItem = itemIdx === 0 ? item.replace(/^- /, '') : item;
            return (
              <li key={`item-${itemIdx}`} className="mb-2 text-gray-700">
                {renderFormattedText(cleanItem)}
              </li>
            );
          })}
        </ul>
      );
    } else {
      // Regular paragraph
      return (
        <p key={`p-${idx}`} className="text-gray-700 text-base leading-relaxed mb-4">
          {renderFormattedText(paragraph)}
        </p>
      );
    }
  });
  
  return (
    <div className="mb-16 last:mb-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
          <div className="bg-geolight p-8 rounded-lg shadow-md border border-gray-100 h-full">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-geoblue-100 text-geoblue-800 mb-6">
              {service.icon}
            </div>
            <h3 className="heading-secondary mb-4 text-geoblue-800">{service.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{renderFormattedText(service.description)}</p>
          </div>
        </div>
        
        <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
          <div className="prose max-w-none">
            {detailParagraphs}
          </div>
          
          <div className="bg-geoblue-50 border-l-4 border-geoblue-800 p-4 my-6">
            <p className="text-gray-700 italic leading-relaxed">
              {language === 'de' 
                ? `"Unsere ${service.title} bietet eine solide Grundlage für kosteneffiziente und sichere Bauprojekte."`
                : `"Our ${service.title} provides a solid foundation for cost-efficient and safe construction projects."`}
            </p>
          </div>
          
          <div className="mt-6">
            <Button asChild className="bg-geoblue-800 hover:bg-geoblue-700 text-white px-6 py-2 rounded shadow-sm transition-all">
              <Link to="/contact">{t('contactForConsultation')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedServiceCard;

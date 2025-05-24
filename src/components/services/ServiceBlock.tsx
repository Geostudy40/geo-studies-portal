
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export interface ServiceBlockItem {
  title: string;
  description: string;
  details: string[];
  advantages: string[];
  quote: string;
}

interface ServiceBlockProps {
  block: ServiceBlockItem;
  index: number;
}

// Helper function to render text with bold formatting
const renderFormattedText = (text: string) => {
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

const ServiceBlock = ({ block, index }: ServiceBlockProps) => {
  const { language } = useLanguage();
  
  return (
    <div className="mb-16 last:mb-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
          <div className="bg-geolight p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-geoblue-800 mb-4">{block.title}</h3>
            <p className="text-gray-600 mb-6">{block.description}</p>
          </div>
        </div>
        
        <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
          <div>
            <ul className="mb-6 list-disc pl-5">
              {block.details.map((item, i) => (
                <li key={`detail-${i}`} className="mb-2 text-gray-700">
                  {renderFormattedText(item)}
                </li>
              ))}
            </ul>
            
            <h4 className="font-medium text-geoblue-800 mb-3">
              {language === 'de' 
                ? 'Unsere integrierte Methodik bietet entscheidende Vorteile:' 
                : 'Our integrated methodology offers decisive advantages:'}
            </h4>
            
            <ul className="mb-6 list-disc pl-5">
              {block.advantages.map((item, i) => (
                <li key={`advantage-${i}`} className="mb-2 text-gray-700">
                  {renderFormattedText(item)}
                </li>
              ))}
            </ul>
            
            <div className="bg-geoblue-50 border-l-4 border-geoblue-800 p-4 my-6">
              <p className="text-gray-700 italic leading-relaxed">
                "{block.quote}"
              </p>
            </div>
            
            <div className="mt-6">
              <Button asChild className="bg-geoblue-800 hover:bg-geoblue-700 text-white px-6 py-2 rounded shadow-sm transition-all">
                <Link to="/contact">
                  {language === 'de' 
                    ? 'Kontaktieren Sie uns für eine Beratung' 
                    : 'Contact us for a consultation'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlock;

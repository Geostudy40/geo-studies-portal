
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 border border-gray-100 border-t-4 border-t-geoblue-600 p-6 h-full flex flex-col">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-geoblue-100 text-geoblue-800 mb-6 transition-colors duration-300 hover:bg-geoblue-200">
        {icon}
      </div>
      <h3 
        className="text-xl font-semibold text-geoblue-800 mb-3 hyphens-auto break-words transition-colors duration-300 hover:text-geoblue-700"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p 
        className="text-gray-600 text-sm md:text-base flex-grow leading-relaxed"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default ServiceCard;

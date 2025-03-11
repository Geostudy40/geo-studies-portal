
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100 p-6 h-full flex flex-col">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-geoblue-100 text-geoblue-800 mb-6">
        {icon}
      </div>
      <h3 
        className="text-xl font-semibold text-geoblue-800 mb-3"
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

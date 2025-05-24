
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  bulletPoints?: string[];
}

const ServiceCard = ({ title, description, icon, bulletPoints }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100 p-6 h-full flex flex-col">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-geoblue-100 text-geoblue-800 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-geoblue-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-base leading-relaxed mb-4">
        {description}
      </p>
      
      {bulletPoints && bulletPoints.length > 0 && (
        <ul className="text-gray-600 text-base leading-relaxed pl-5 mt-auto space-y-2">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-geoblue-800 mt-2 mr-2.5 flex-shrink-0"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;

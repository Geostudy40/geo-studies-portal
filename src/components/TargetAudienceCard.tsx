
import { ReactNode } from 'react';

interface TargetAudienceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const TargetAudienceCard = ({ title, description, icon }: TargetAudienceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full card-shadow">
      <div className="bg-geoblue-800 text-white p-4 flex items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TargetAudienceCard;


import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const ProjectCard = ({ id, title, description, image, category }: ProjectCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-geoblue-100 text-geoblue-800 rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-xl font-semibold text-geoblue-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={`/projects/${id}`} 
          className="text-geoblue-800 font-semibold hover:text-geoblue-600 inline-flex items-center"
        >
          {t('viewDetails')} 
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

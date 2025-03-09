
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

// Mock project data - can be replaced with real data later
const projectsData = [
  {
    id: 1,
    title: 'Wohnkomplex München',
    description: 'Geotechnische Voruntersuchung für einen Wohnkomplex mit 120 Einheiten.',
    imageUrl: 'https://images.unsplash.com/photo-1565636291290-4bd0dde13b30?q=80&w=2036&auto=format&fit=crop',
    category: 'residential'
  },
  {
    id: 2,
    title: 'Infrastrukturprojekt Berlin',
    description: 'Bodenanalyse und Risikobewertung für eine städtische Brückenerweiterung.',
    imageUrl: 'https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?q=80&w=2070&auto=format&fit=crop',
    category: 'infrastructure'
  },
  {
    id: 3,
    title: 'Industriepark Stuttgart',
    description: 'KI-gestützte geotechnische Analyse für einen neuen Industriepark.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    category: 'industrial'
  },
  {
    id: 4,
    title: 'Windpark Nordsee',
    description: 'Bodenstabilitätsanalyse für einen Offshore-Windpark.',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop',
    category: 'renewable'
  }
];

const Projects = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <div className="py-12 md:py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-geoblue-800 mb-4">
            {t('projectsTitle')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('projectsSubtitle')}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === 'all' ? 'bg-geoblue-800 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            Alle Projekte
          </button>
          <button 
            onClick={() => setFilter('residential')} 
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === 'residential' ? 'bg-geoblue-800 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            Wohnungsbau
          </button>
          <button 
            onClick={() => setFilter('infrastructure')} 
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === 'infrastructure' ? 'bg-geoblue-800 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            Infrastruktur
          </button>
          <button 
            onClick={() => setFilter('industrial')} 
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === 'industrial' ? 'bg-geoblue-800 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            Industriebau
          </button>
          <button 
            onClick={() => setFilter('renewable')} 
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === 'renewable' ? 'bg-geoblue-800 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            Erneuerbare Energien
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-geoblue-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-geoblue-800 font-medium flex items-center hover:underline">
                  {t('viewDetails')} <ExternalLink size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Keine Projekte in dieser Kategorie gefunden.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

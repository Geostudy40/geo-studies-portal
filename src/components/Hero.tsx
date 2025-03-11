
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

interface HeroProps {
  backgroundImage?: string;
}

const Hero = ({ backgroundImage }: HeroProps) => {
  const { t } = useLanguage();

  const defaultBg = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop';
  const bg = backgroundImage || defaultBg;

  return (
    <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${bg})` }} 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-geoblue-900/70 to-geoblue-800/50" />
      
      <div className="container-custom relative h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="heading-primary-light">
            {t('heroTitle')}
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-100 max-w-xl">
            {t('heroSubtitle')}
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary text-lg px-8 py-3">
              {t('cta')}
            </Link>
            
            <Link to="/services" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-semibold py-3 px-8 rounded-md transition-colors duration-300 text-lg">
              {t('services')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

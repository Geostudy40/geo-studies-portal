import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface HeroProps {
  backgroundImage?: string;
}

const Hero = ({ backgroundImage }: HeroProps) => {
  const { t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop");
  
  // Zuverlässige Fallback-Bilder
  const fallbacks = [
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop", // Baustelle mit Arbeitern
    "https://images.unsplash.com/photo-1587642313598-fedd44242a2e?q=80&w=2070&auto=format&fit=crop", // Große Baustelle aus der Luft
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop", // Bauarbeiter auf Baustelle
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2070&auto=format&fit=crop", // Fluss zwischen Bergen
    "/geo-studies-portal/placeholder.svg",
  ];
  
  useEffect(() => {
    console.log("Hero-Komponente geladen, versuche Bild zu laden:", imageSrc);
    
    // Überprüfe vorab, ob das Bild geladen werden kann
    const preloadImage = new Image();
    preloadImage.onload = () => {
      console.log("✅ Hero-Bild erfolgreich vorgeladen:", preloadImage.src);
      setImageLoaded(true);
      setImageSrc(preloadImage.src);
    };
    preloadImage.onerror = () => {
      console.error("❌ Hero-Bild konnte nicht geladen werden:", preloadImage.src);
      
      // Versuche das nächste Fallback-Bild
      const currentIndex = fallbacks.indexOf(imageSrc);
      if (currentIndex < fallbacks.length - 1) {
        const nextFallback = fallbacks[currentIndex + 1];
        console.log("🔄 Versuche nächstes Fallback-Bild:", nextFallback);
        setImageSrc(nextFallback);
      }
    };
    preloadImage.src = imageSrc;
  }, [imageSrc]);

  return (
    <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      <img
        src={imageSrc}
        className="absolute inset-0 h-full w-full object-cover"
        alt="Geologische Formation – geotechnisches Studienareal"
        loading="eager"
        fetchPriority="high"
        onError={(e) => {
          console.error("Fehler beim Laden des Hero-Bildes im DOM:", e);
          
          // Versuche das nächste Fallback-Bild
          const currentIndex = fallbacks.indexOf(imageSrc);
          if (currentIndex < fallbacks.length - 1) {
            console.log("🔄 Wechsle zu Fallback innerhalb des onError:", fallbacks[currentIndex + 1]);
            e.currentTarget.src = fallbacks[currentIndex + 1];
          }
        }}
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
            <Link to="/contact" className="bg-geoblue-800 hover:bg-geoblue-900 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 text-lg">
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

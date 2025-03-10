
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-geoblue-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-white font-montserrat font-bold text-xl mb-4 inline-block">
              GeoStudys
            </Link>
            <p className="text-gray-300 mt-4 max-w-md">
              Spezialisiert auf geotechnische Vorstudien mit modernsten Methoden und KI-Unterstützung für eine fundierte Entscheidungsfindung bei Bauprojekten.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">{t('home')}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">{t('about')}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">{t('services')}</Link></li>
              <li><Link to="/target-audiences" className="text-gray-300 hover:text-white transition-colors">{t('targetAudiences')}</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">{t('projects')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: info@geostudys.de</li>
              <li className="text-gray-300">Tel: +49 123 456789</li>
              <li className="text-gray-300">Musterstraße 1, 12345 Berlin</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} GeoStudys. {t('footerRights')}
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t('footerPrivacy')}
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t('footerTerms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

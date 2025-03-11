
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('sectors'), path: '/sectors' },
    { name: t('services'), path: '/services' },
    { name: t('targetAudiences'), path: '/target-audiences' },
    { name: t('projects'), path: '/projects' },
    { name: t('contact'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-geoblue-800 font-montserrat font-bold text-xl">
            GeoStudys
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-geoblue-800 hover:text-geoblue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-geoblue-800 border-b-2 border-geoblue-800'
                    : 'text-gray-600 hover:text-geoblue-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <LanguageSwitcher />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 bg-white">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 font-medium ${
                    isActive(link.path)
                      ? 'text-geoblue-800 bg-geoblue-50'
                      : 'text-gray-600 hover:text-geoblue-800 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

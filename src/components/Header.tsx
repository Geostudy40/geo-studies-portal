
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('sectors'), path: '/sectors' },
    { 
      name: t('services'), 
      path: '/services',
      dropdown: [
        { name: 'Kernleistungen', path: '/services' },
        { name: t('extendedServices'), path: '/extended-services' },
        { name: 'CPT-Analyse', path: '/cpt-analysis' }
      ]
    },
    { name: t('targetAudiences'), path: '/target-audiences' },
    { name: t('contact'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const handleServicesMouseEnter = () => {
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    setServicesDropdownOpen(false);
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
              <div 
                key={link.path}
                className="relative"
                onMouseEnter={link.dropdown ? handleServicesMouseEnter : undefined}
                onMouseLeave={link.dropdown ? handleServicesMouseLeave : undefined}
              >
                {link.dropdown ? (
                  <div>
                    <button
                      className={`font-medium transition-colors duration-300 flex items-center ${
                        isActive(link.path)
                          ? 'text-geoblue-800 border-b-2 border-geoblue-800'
                          : 'text-gray-600 hover:text-geoblue-800'
                      }`}
                    >
                      {link.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                        {link.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-geoblue-50 hover:text-geoblue-800 transition-colors"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-medium transition-colors duration-300 ${
                      isActive(link.path)
                        ? 'text-geoblue-800 border-b-2 border-geoblue-800'
                        : 'text-gray-600 hover:text-geoblue-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <LanguageSwitcher />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 bg-white">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    className={`px-4 py-2 font-medium block ${
                      isActive(link.path)
                        ? 'text-geoblue-800 bg-geoblue-50'
                        : 'text-gray-600 hover:text-geoblue-800 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-geoblue-800 hover:bg-gray-50"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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

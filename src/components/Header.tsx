
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const sectorLinks = [
    { name: t('sectorResidential'), path: '/sectors/residential' },
    { name: t('sectorInfrastructure'), path: '/sectors/infrastructure' },
    { name: t('sectorIndustrial'), path: '/sectors/industrial' },
    { name: t('sectorWater'), path: '/sectors/water' },
    { name: t('sectorRenewable'), path: '/sectors/renewable' },
  ];

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('services'), path: '/services' },
    { 
      name: t('projectSectors'), 
      path: '/sectors',
      hasDropdown: true,
      dropdownItems: sectorLinks
    },
    { name: t('targetAudiences'), path: '/target-audiences' },
    { name: t('projects'), path: '/projects' },
    { name: t('contact'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
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
              link.hasDropdown ? (
                <div className="relative" key={link.path}>
                  <button 
                    onClick={toggleDropdown}
                    className={`font-medium transition-colors duration-300 flex items-center ${
                      isActive(link.path)
                        ? 'text-geoblue-800 border-b-2 border-geoblue-800'
                        : 'text-gray-600 hover:text-geoblue-800'
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 py-2">
                      <Link
                        to={link.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-geoblue-50 hover:text-geoblue-800"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {link.name} - Übersicht
                      </Link>
                      <div className="border-t border-gray-100 my-1"></div>
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-geoblue-50 hover:text-geoblue-800"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            ))}
            <LanguageSwitcher />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 bg-white">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <div key={link.path} className="flex flex-col">
                    <Link
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
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="px-8 py-2 text-sm font-medium text-gray-600 hover:text-geoblue-800 hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ) : (
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
                )
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

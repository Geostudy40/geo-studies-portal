
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('de')}
        className={`flex items-center justify-center w-8 h-8 rounded-full ${
          language === 'de' ? 'bg-geoblue-100 text-geoblue-800' : 'text-gray-500 hover:text-geoblue-800'
        }`}
      >
        DE
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center justify-center w-8 h-8 rounded-full ${
          language === 'en' ? 'bg-geoblue-100 text-geoblue-800' : 'text-gray-500 hover:text-geoblue-800'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;

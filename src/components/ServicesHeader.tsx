
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const ServicesHeader = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-geoblue-800 text-white py-20">
      <div className="container-custom">
        <div className="text-center">
          <h1 className="heading-primary-light">{t('servicesTitle')}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t('servicesSubtitle')}</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeader;


import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ServiceBlock from './services/ServiceBlock';
import ProcessSteps from './services/ProcessSteps';
import { getServiceBlocks } from './services/serviceData';

const ServiceProcess = () => {
  const { language } = useLanguage();
  const serviceBlocks = getServiceBlocks(language);
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12 text-geoblue-800">
          {language === 'de' ? 'Unsere weiteren Leistungen' : 'Our Additional Services'}
        </h2>
        
        {serviceBlocks.map((block, index) => (
          <ServiceBlock 
            key={index} 
            block={block} 
            index={index} 
          />
        ))}
        
        {/* Process Steps */}
        <ProcessSteps />
      </div>
    </section>
  );
};

export default ServiceProcess;

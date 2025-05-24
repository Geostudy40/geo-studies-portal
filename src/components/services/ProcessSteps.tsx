
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface ProcessStep {
  number: number;
  titleDe: string;
  titleEn: string;
  descriptionDe: string;
  descriptionEn: string;
}

const ProcessSteps = () => {
  const { language } = useLanguage();
  
  const steps: ProcessStep[] = [
    {
      number: 1,
      titleDe: 'Anfrage & Beratung',
      titleEn: 'Inquiry & Consultation',
      descriptionDe: 'Wir besprechen Ihr Projekt und Ihre spezifischen Anforderungen.',
      descriptionEn: 'We discuss your project and your specific requirements.'
    },
    {
      number: 2,
      titleDe: 'Datensammlung',
      titleEn: 'Data Collection',
      descriptionDe: 'Wir sammeln alle relevanten Daten und führen erste Analysen durch.',
      descriptionEn: 'We collect all relevant data and conduct initial analyses.'
    },
    {
      number: 3,
      titleDe: 'KI-Analyse & Planung',
      titleEn: 'AI Analysis & Planning',
      descriptionDe: 'Unsere KI-Systeme analysieren die Daten und erstellen optimierte Untersuchungspläne.',
      descriptionEn: 'Our AI systems analyze the data and create optimized investigation plans.'
    },
    {
      number: 4,
      titleDe: 'Berichterstellung',
      titleEn: 'Report Creation',
      descriptionDe: 'Wir erstellen detaillierte, normkonforme Berichte mit klaren Handlungsempfehlungen.',
      descriptionEn: 'We create detailed, standards-compliant reports with clear recommendations.'
    }
  ];
  
  return (
    <div className="mt-24">
      <h3 className="text-2xl font-bold text-center mb-12 text-geoblue-800">
        {language === 'de' ? 'Unser Prozess' : 'Our Process'}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="relative">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-geoblue-800 text-white text-xl font-bold mb-6 z-10 relative mx-auto">
              {step.number}
            </div>
            {step.number < 4 && (
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-geoblue-200 -z-10"></div>
            )}
            <h3 className="text-xl font-semibold text-geoblue-800 mb-3 text-center">
              {language === 'de' ? step.titleDe : step.titleEn}
            </h3>
            <p className="text-gray-600 text-center">
              {language === 'de' ? step.descriptionDe : step.descriptionEn}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;

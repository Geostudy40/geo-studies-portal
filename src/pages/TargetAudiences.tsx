
import { Building, PenTool, Landmark, BarChart4, Clock, Coins, Network } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import TargetAudienceCard from '@/components/TargetAudienceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TargetAudiences = () => {
  const { t } = useLanguage();
  
  const audiences = [
    {
      title: t('targetConstructionCompanies'),
      description: t('targetConstructionCompaniesDesc'),
      icon: <Building size={24} className="text-white" />,
      benefits: [
        t('constructionBenefit1'),
        t('constructionBenefit2'),
        t('constructionBenefit3'),
        t('constructionBenefit4')
      ],
      scenario: t('constructionScenario')
    },
    {
      title: t('targetPlanningOffices'),
      description: t('targetPlanningOfficesDesc'),
      icon: <PenTool size={24} className="text-white" />,
      benefits: [
        t('planningBenefit1'),
        t('planningBenefit2'),
        t('planningBenefit3'),
        t('planningBenefit4')
      ],
      scenario: t('planningScenario')
    },
    {
      title: t('targetMunicipalities'),
      description: t('targetMunicipalitiesDesc'),
      icon: <Landmark size={24} className="text-white" />,
      benefits: [
        t('municipalityBenefit1'),
        t('municipalityBenefit2'),
        t('municipalityBenefit3'),
        t('municipalityBenefit4')
      ],
      scenario: t('municipalityScenario')
    },
    {
      title: t('targetInvestors'),
      description: t('targetInvestorsDesc'),
      icon: <BarChart4 size={24} className="text-white" />,
      benefits: [
        t('investorBenefit1'),
        t('investorBenefit2'),
        t('investorBenefit3'),
        t('investorBenefit4')
      ],
      scenario: t('investorScenario')
    }
  ];

  const addedValues = [
    {
      title: t('valueTimeSavings'),
      description: t('valueTimeSavingsDesc'),
      icon: <Clock size={36} className="text-geoblue-800" />
    },
    {
      title: t('valueCostOptimization'),
      description: t('valueCostOptimizationDesc'),
      icon: <Coins size={36} className="text-geoblue-800" />
    },
    {
      title: t('valueExpertise'),
      description: t('valueExpertiseDesc'),
      icon: <Network size={36} className="text-geoblue-800" />
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-geoblue-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="heading-primary-light">{t('targetTitle')}</h1>
            <p className="text-xl max-w-3xl mx-auto">{t('targetSubtitle')}</p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {audiences.map((audience, index) => (
              <TargetAudienceCard
                key={index}
                title={audience.title}
                description={audience.description}
                icon={audience.icon}
              />
            ))}
          </div>
          
          {/* Detailed Sections for each audience */}
          {audiences.map((audience, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-geoblue-800 mb-6 border-l-4 border-geoblue-800 pl-4">
                Für {audience.title}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-600 mb-4">
                    {audience.description}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-geoblue-800 mb-4">{t('yourBenefits')}</h3>
                  <ul className="space-y-3">
                    {audience.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-6 w-6 text-geoblue-800 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-geolight rounded-lg p-6 shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold text-geoblue-800 mb-4">{t('howWeCanHelp')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('tailoredStudies').replace('{audience}', audience.title)}
                  </p>
                  <div className="bg-white p-4 rounded border border-gray-200 mb-6">
                    <h4 className="font-semibold text-geoblue-800 mb-2">{t('typicalScenario')}</h4>
                    <p className="text-gray-600 italic">
                      {audience.scenario}
                    </p>
                  </div>
                  <div className="mt-4">
                    <Button asChild className="w-full bg-geoblue-800 hover:bg-geoblue-700 text-white">
                      <Link to="/contact">{t('contactForConsultation')}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Added Value Section (replacing Testimonials) */}
      <section className="py-16 bg-geolight">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-geoblue-800 mb-6 text-center">
            {t('addedValueTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            {t('addedValueSubtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addedValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-geoblue-100 flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-geoblue-800 text-xl mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TargetAudiences;

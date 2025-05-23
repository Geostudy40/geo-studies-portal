
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const CPTAnalysis = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    analysisMethod: '',
    cptCount: '',
    projectDescription: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('CPT Analysis form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-geoblue-800 text-white py-16">
        <div className="container-custom">
          <nav className="text-sm text-gray-300 mb-4">
            <Link to="/" className="hover:underline">{t('home')}</Link> {' > '}
            <Link to="/services" className="hover:underline ml-1">{t('services')}</Link> {' > '}
            <span className="text-white ml-1">{t('cptAnalysisTitle')}</span>
          </nav>
          <h1 className="heading-primary-light">
            {t('cptAnalysisTitle')}
          </h1>
          <p className="text-xl text-gray-300">
            {t('cptAnalysisSubtitle')}
          </p>
        </div>
      </section>

      {/* Einführungstext */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('cptAnalysisIntro')}
            </p>
          </div>
        </div>
      </section>

      {/* Hauptkategorien - 4-Spalten Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">
            {t('cptAnalysisMethods')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Deutsche Standards */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-geoblue-600">
              <div className="text-geoblue-600 text-4xl mb-4">🇩🇪</div>
              <h3 className="text-xl font-semibold mb-2">{t('cptGermanStandards')}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {t('cptGermanStandardsDesc')}
              </p>
              <ul className="text-sm space-y-2">
                <li>• Schneider et al. (2008)</li>
                <li>• Robertson (1990)</li>
              </ul>
            </div>

            {/* Card 2: Europäische Standards */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-600">
              <div className="text-green-600 text-4xl mb-4">🇪🇺</div>
              <h3 className="text-xl font-semibold mb-2">{t('cptEuropeanStandards')}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {t('cptEuropeanStandardsDesc')}
              </p>
              <ul className="text-sm space-y-2">
                <li>• Eurocode 7 Unified</li>
                <li>• Lunne et al. (1997)</li>
                <li>• NEN 9997-1</li>
              </ul>
            </div>

            {/* Card 3: Spezialanwendungen */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-600">
              <div className="text-purple-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">{t('cptSpecialApplications')}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {t('cptSpecialApplicationsDesc')}
              </p>
              <ul className="text-sm space-y-2">
                <li>• Mayne (2007/2014)</li>
                <li>• Eslami & Fellenius</li>
                <li>• Jefferies & Been</li>
              </ul>
            </div>

            {/* Card 4: Schnellauswahl */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-600">
              <div className="text-orange-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">{t('cptQuickSelection')}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {t('cptQuickSelectionDesc')}
              </p>
              <ul className="text-sm space-y-2">
                <li>• {t('cptQuickSelection')}</li>
                <li>• Projektspezifisch</li>
                <li>• Mehrfachvergleich</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schnellauswahl-Bereich */}
      <section className="py-16 bg-geoblue-50">
        <div className="container-custom">
          <h2 className="section-heading">
            {t('cptQuickSelectionTitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-geoblue-500">
              <h4 className="font-semibold mb-2">{t('cptStandardGermany')}</h4>
              <p className="text-geoblue-600 font-medium">→ Schneider et al. (2008)</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold mb-2">{t('cptInternationalEU')}</h4>
              <p className="text-green-600 font-medium">→ Eurocode 7 Unified</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold mb-2">{t('cptPileFoundations')}</h4>
              <p className="text-purple-600 font-medium">→ Eslami & Fellenius</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold mb-2">{t('cptSeismicAreas')}</h4>
              <p className="text-red-600 font-medium">→ Jefferies & Been</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold mb-2">{t('cptUniversalApplication')}</h4>
              <p className="text-yellow-600 font-medium">→ Robertson (1990)</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-semibold mb-2">{t('cptResearchComplex')}</h4>
              <p className="text-indigo-600 font-medium">→ Mayne (2007/2014)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detaillierte Methodenbeschreibung */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">
            {t('cptDetailedMethods')}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <details className="mb-4 bg-gray-50 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer hover:bg-gray-100">
                {t('cptSchneiderMethod')}
              </summary>
              <div className="p-4 border-t grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Normen & Vorschriften</h4>
                  <p className="text-sm text-gray-600">DIN EN 1997-1/2, optimiert für deutsche Böden</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Spezialisierung</h4>
                  <p className="text-sm text-gray-600">Erweiterte Robertson-Methode für pleistozäne Ablagerungen</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Parameter</h4>
                  <p className="text-sm text-gray-600">cu, Dr, φ&apos;, Es, γ mit deutschen Kalibrierungen</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Ideal für</h4>
                  <p className="text-sm text-gray-600">Alle Baugrundgutachten in Deutschland</p>
                </div>
              </div>
            </details>
            
            <details className="mb-4 bg-gray-50 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer hover:bg-gray-100">
                {t('cptRobertsonMethod')}
              </summary>
              <div className="p-4 border-t grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Anwendungsbereich</h4>
                  <p className="text-sm text-gray-600">Weltweit anerkannter Standard für CPT-Auswertung</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Bodenklassifikation</h4>
                  <p className="text-sm text-gray-600">Soil Behavior Type (SBT) Index</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Parameter</h4>
                  <p className="text-sm text-gray-600">Grundlegende geotechnische Parameter</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Ideal für</h4>
                  <p className="text-sm text-gray-600">Internationale Projekte, erste Orientierung</p>
                </div>
              </div>
            </details>

            <details className="mb-4 bg-gray-50 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer hover:bg-gray-100">
                {t('cptEurocodeMethod')}
              </summary>
              <div className="p-4 border-t grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Normen & Vorschriften</h4>
                  <p className="text-sm text-gray-600">EN 1997-1/2, harmonisiert für EU-Länder</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Spezialisierung</h4>
                  <p className="text-sm text-gray-600">Einheitliche Verfahren für grenzüberschreitende Projekte</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Parameter</h4>
                  <p className="text-sm text-gray-600">Charakteristische Werte nach Eurocode-Konzept</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Ideal für</h4>
                  <p className="text-sm text-gray-600">EU-weite Projekte, internationale Investoren</p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Leistungsübersicht */}
      <section className="py-16 bg-geolight">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t('cptServicesTitle')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Automatische Bodenklassifikation nach verschiedenen internationalen Standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Geotechnische Parameterbewertung (Tragfähigkeit, Setzungen, Durchlässigkeit)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Vergleichende Auswertungen mit mehreren Methoden zur Qualitätssicherung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Projektspezifische Methodenauswahl nach Bauvorhaben und Standort</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">{t('cptServicesOverview')}</h3>
              <ul className="space-y-3">
                {t('cptWhyAI').split('\n').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktformular für CPT */}
      <section className="py-16 bg-geoblue-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t('cptContactTitle')}
            </h2>
            
            <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input 
                  type="text" 
                  name="name"
                  placeholder={t('nameLabel')} 
                  className="w-full p-3 border rounded-lg"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder={t('emailLabel')} 
                  className="w-full p-3 border rounded-lg"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <select 
                name="projectType"
                className="w-full p-3 border rounded-lg mb-6"
                value={formData.projectType}
                onChange={handleInputChange}
                required
              >
                <option value="">{t('cptProjectType')}</option>
                <option value="standard-germany">{t('cptStandardGermany')}</option>
                <option value="international-eu">{t('cptInternationalEU')}</option>
                <option value="pile-foundations">{t('cptPileFoundations')}</option>
                <option value="seismic-areas">{t('cptSeismicAreas')}</option>
                <option value="research">{t('cptResearchComplex')}</option>
              </select>
              
              <select 
                name="analysisMethod"
                className="w-full p-3 border rounded-lg mb-6"
                value={formData.analysisMethod}
                onChange={handleInputChange}
                required
              >
                <option value="">{t('cptAnalysisMethod')}</option>
                <option value="schneider-2008">Schneider et al. (2008) - Deutsche Optimierung</option>
                <option value="robertson-1990">Robertson (1990) - Universalstandard</option>
                <option value="eurocode-7">Eurocode 7 Unified - EU-harmonisiert</option>
                <option value="automatic">Automatische Auswahl basierend auf Projekt</option>
              </select>
              
              <input 
                type="number" 
                name="cptCount"
                placeholder={t('cptNumberSoundings')} 
                className="w-full p-3 border rounded-lg mb-6"
                value={formData.cptCount}
                onChange={handleInputChange}
                min="1"
              />
              
              <div className="mb-6">
                <label className="block mb-2 font-medium">{t('cptUploadFiles')}</label>
                <input 
                  type="file" 
                  multiple 
                  accept=".txt,.csv,.xlsx,.dat" 
                  className="w-full p-3 border rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Unterstützte Formate: TXT, CSV, XLSX, DAT
                </p>
              </div>
              
              <textarea 
                name="projectDescription"
                placeholder={t('cptProjectDescription')}
                className="w-full p-3 border rounded-lg mb-6 h-32"
                value={formData.projectDescription}
                onChange={handleInputChange}
              ></textarea>
              
              <Button 
                type="submit"
                className="w-full bg-geoblue-600 hover:bg-geoblue-700 text-white py-3 px-6 rounded-lg transition-colors"
              >
                {t('cptRequestAnalysis')}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CPTAnalysis;

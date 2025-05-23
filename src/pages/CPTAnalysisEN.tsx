
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const CPTAnalysisEN = () => {
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
    console.log('CPT Analysis form submitted (EN):', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-geoblue-800 text-white py-16">
        <div className="container-custom">
          <nav className="text-sm text-gray-300 mb-4">
            <Link to="/" className="hover:underline">Home</Link> {' > '}
            <Link to="/services" className="hover:underline ml-1">Services</Link> {' > '}
            <span className="text-white ml-1">CPT Analysis</span>
          </nav>
          <h1 className="heading-primary-light">
            CPT Analysis (Cone Penetration Test)
          </h1>
          <p className="text-xl text-gray-300">
            AI-powered evaluation according to international standards
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our CPT analyses (Cone Penetration Test) provide precise geotechnical parameters 
              through state-of-the-art evaluation methods. We employ various international 
              analysis procedures that are optimally aligned with your project requirements 
              and regional conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">
            Our CPT Analysis Methods
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: German Standards */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-geoblue-600">
              <div className="text-geoblue-600 text-4xl mb-4">🇩🇪</div>
              <h3 className="text-xl font-semibold mb-2">German Standards</h3>
              <p className="text-gray-600 text-sm mb-4">
                Priority 1 - Optimized for German building regulations
              </p>
              <ul className="text-sm space-y-2">
                <li>• Schneider et al. (2008)</li>
                <li>• Robertson (1990)</li>
              </ul>
            </div>

            {/* Card 2: European Standards */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-600">
              <div className="text-green-600 text-4xl mb-4">🇪🇺</div>
              <h3 className="text-xl font-semibold mb-2">European Standards</h3>
              <p className="text-gray-600 text-sm mb-4">
                Priority 2 - Harmonized EU-wide procedures
              </p>
              <ul className="text-sm space-y-2">
                <li>• Eurocode 7 Unified</li>
                <li>• Lunne et al. (1997)</li>
                <li>• NEN 9997-1</li>
              </ul>
            </div>

            {/* Card 3: Special Applications */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-600">
              <div className="text-purple-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Special Applications</h3>
              <p className="text-gray-600 text-sm mb-4">
                Priority 3 - Advanced methods
              </p>
              <ul className="text-sm space-y-2">
                <li>• Mayne (2007/2014)</li>
                <li>• Eslami & Fellenius</li>
                <li>• Jefferies & Been</li>
              </ul>
            </div>

            {/* Card 4: Quick Selection */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-600">
              <div className="text-orange-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Quick Selection</h3>
              <p className="text-gray-600 text-sm mb-4">
                Optimal method for your project
              </p>
              <ul className="text-sm space-y-2">
                <li>• Automatic selection</li>
                <li>• Project-specific</li>
                <li>• Multi-comparison</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Selection by Project Type */}
      <section className="py-16 bg-geoblue-50">
        <div className="container-custom">
          <h2 className="section-heading">
            🎯 Quick Selection by Project Type
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-geoblue-500">
              <h4 className="font-semibold mb-2">Standard Construction Projects Germany</h4>
              <p className="text-geoblue-600 font-medium">→ Schneider et al. (2008)</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold mb-2">International/EU Projects</h4>
              <p className="text-green-600 font-medium">→ Eurocode 7 Unified</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold mb-2">Pile Foundations</h4>
              <p className="text-purple-600 font-medium">→ Eslami & Fellenius</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold mb-2">Seismic Areas</h4>
              <p className="text-red-600 font-medium">→ Jefferies & Been</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold mb-2">Universal Application</h4>
              <p className="text-yellow-600 font-medium">→ Robertson (1990)</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-semibold mb-2">Research/Complex Projects</h4>
              <p className="text-indigo-600 font-medium">→ Mayne (2007/2014)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Method Description */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">
            Detailed Method Description
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <details className="mb-4 bg-gray-50 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer hover:bg-gray-100">
                1. Schneider et al. (2008) - German Optimization
              </summary>
              <div className="p-4 border-t grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Standards & Regulations</h4>
                  <p className="text-sm text-gray-600">DIN EN 1997-1/2, optimized for German soils</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Specialization</h4>
                  <p className="text-sm text-gray-600">Extended Robertson method for pleistocene deposits</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Parameters</h4>
                  <p className="text-sm text-gray-600">cu, Dr, φ&apos;, Es, γ with German calibrations</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Ideal for</h4>
                  <p className="text-sm text-gray-600">All ground investigation reports in Germany</p>
                </div>
              </div>
            </details>
            
            <details className="mb-4 bg-gray-50 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer hover:bg-gray-100">
                2. Robertson (1990) - Universal Standard
              </summary>
              <div className="p-4 border-t grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Standards & Regulations</h4>
                  <p className="text-sm text-gray-600">EN ISO 22476-1, internationally recognized</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Specialization</h4>
                  <p className="text-sm text-gray-600">SBT classification (Soil Behaviour Type)</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Parameters</h4>
                  <p className="text-sm text-gray-600">Ic, cu, Dr, φ&apos;, Es according to standard correlations</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Ideal for</h4>
                  <p className="text-sm text-gray-600">Universal reference method, international projects</p>
                </div>
              </div>
            </details>

            <details className="mb-4 bg-gray-50 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer hover:bg-gray-100">
                3. Eurocode 7 Unified - EU Harmonization
              </summary>
              <div className="p-4 border-t grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Standards & Regulations</h4>
                  <p className="text-sm text-gray-600">EN 1997-1/2 + National Annexes</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Specialization</h4>
                  <p className="text-sm text-gray-600">Harmonized EU-wide classification</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Parameters</h4>
                  <p className="text-sm text-gray-600">Qt, Ic, cu, φ&apos;, Es, γ (EU-harmonized)</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Ideal for</h4>
                  <p className="text-sm text-gray-600">Cross-border EU construction projects</p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-geolight">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our CPT Analysis Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Automatic soil classification according to various international standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Geotechnical parameter assessment (bearing capacity, settlements, permeability)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Comparative evaluations with multiple methods for quality assurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Project-specific method selection according to construction project and location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Detailed reports with graphical representation and evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Recommendations for further investigations</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Why our AI-powered CPT Analysis?</h3>
              <ul className="space-y-3">
                <li><strong>Precision:</strong> Automated evaluation reduces human errors</li>
                <li><strong>Efficiency:</strong> Fast processing of large data volumes</li>
                <li><strong>Quality:</strong> Comparison of multiple methods for optimal results</li>
                <li><strong>Flexibility:</strong> Adaptation to specific project requirements</li>
                <li><strong>Transparency:</strong> Traceable calculations and source references</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form for CPT */}
      <section className="py-16 bg-geoblue-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Contact for CPT Analysis
            </h2>
            
            <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  className="w-full p-3 border rounded-lg"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
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
                <option value="">Select project type</option>
                <option value="standard-germany">Standard construction projects Germany</option>
                <option value="international-eu">International/EU projects</option>
                <option value="pile-foundations">Pile foundations</option>
                <option value="seismic-areas">Seismic areas</option>
                <option value="research">Research projects</option>
              </select>
              
              <select 
                name="analysisMethod"
                className="w-full p-3 border rounded-lg mb-6"
                value={formData.analysisMethod}
                onChange={handleInputChange}
                required
              >
                <option value="">Desired analysis method</option>
                <option value="schneider-2008">Schneider et al. (2008) - German optimization</option>
                <option value="robertson-1990">Robertson (1990) - Universal standard</option>
                <option value="eurocode-7">Eurocode 7 Unified - EU harmonized</option>
                <option value="automatic">Automatic selection based on project</option>
              </select>
              
              <input 
                type="number" 
                name="cptCount"
                placeholder="Number of CPT soundings" 
                className="w-full p-3 border rounded-lg mb-6"
                value={formData.cptCount}
                onChange={handleInputChange}
                min="1"
              />
              
              <div className="mb-6">
                <label className="block mb-2 font-medium">Upload CPT files</label>
                <input 
                  type="file" 
                  multiple 
                  accept=".txt,.csv,.xlsx,.dat" 
                  className="w-full p-3 border rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Supported formats: TXT, CSV, XLSX, DAT
                </p>
              </div>
              
              <textarea 
                name="projectDescription"
                placeholder="Project description and special requirements"
                className="w-full p-3 border rounded-lg mb-6 h-32"
                value={formData.projectDescription}
                onChange={handleInputChange}
              ></textarea>
              
              <Button 
                type="submit"
                className="w-full bg-geoblue-600 hover:bg-geoblue-700 text-white py-3 px-6 rounded-lg transition-colors"
              >
                Request CPT Analysis
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CPTAnalysisEN;

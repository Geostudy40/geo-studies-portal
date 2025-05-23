
import React from 'react';

const FAQSection = () => {
  return (
    <section className="py-16 bg-gray-50" itemScope itemType="https://schema.org/FAQPage">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12 text-geoblue-800">
          Häufig gestellte Fragen
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          
          <details className="bg-white p-6 rounded-lg shadow-lg" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <summary className="font-semibold text-lg cursor-pointer hover:text-geoblue-600 transition-colors" itemProp="name">
              Wie funktioniert die Kombination aus KI und menschlicher Kontrolle?
            </summary>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="mt-4 text-gray-700">
              <p itemProp="text">
                Unsere KI-Systeme führen die erste Analyse durch und erstellen Vorstudien. 
                Alle Ergebnisse werden jedoch von erfahrenen Geologen und Bauingenieuren 
                manuell verifiziert, kontrolliert und korrigiert. So kombinieren wir die 
                Geschwindigkeit der KI mit der Zuverlässigkeit menschlicher Expertise.
              </p>
            </div>
          </details>

          <details className="bg-white p-6 rounded-lg shadow-lg" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <summary className="font-semibold text-lg cursor-pointer hover:text-geoblue-600 transition-colors" itemProp="name">
              Welche CPT-Analysemethoden bieten Sie an?
            </summary>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="mt-4 text-gray-700">
              <p itemProp="text">
                Wir bieten alle gängigen CPT-Analysemethoden: Schneider et al. (2008) für 
                deutsche Standards, Robertson (1990) als Universalstandard, Eurocode 7 Unified 
                für EU-Projekte, sowie Spezialmethoden von Mayne, Eslami & Fellenius und 
                Jefferies & Been. Die optimale Methode wird projektspezifisch ausgewählt.
              </p>
            </div>
          </details>

          <details className="bg-white p-6 rounded-lg shadow-lg" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <summary className="font-semibold text-lg cursor-pointer hover:text-geoblue-600 transition-colors" itemProp="name">
              Wie schnell erhalte ich die Ergebnisse meiner geotechnischen Vorstudie?
            </summary>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="mt-4 text-gray-700">
              <p itemProp="text">
                Dank KI-Unterstützung können wir erste Analysen deutlich schneller erstellen. 
                Die finale Lieferzeit hängt vom Projektumfang ab, typisch sind 3-7 Werktage 
                inklusive menschlicher Verifikation und Qualitätskontrolle.
              </p>
            </div>
          </details>

          <details className="bg-white p-6 rounded-lg shadow-lg" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <summary className="font-semibold text-lg cursor-pointer hover:text-geoblue-600 transition-colors" itemProp="name">
              Was kostet eine geotechnische Vorstudie?
            </summary>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="mt-4 text-gray-700">
              <p itemProp="text">
                Die Kosten hängen von Projektgröße, Standort und gewünschter Detailtiefe ab. 
                Wir bieten eine kostenlose Erstberatung an, um Ihnen ein maßgeschneidertes 
                Angebot zu erstellen. Kontaktieren Sie uns für eine individuelle Kostenschätzung.
              </p>
            </div>
          </details>

          <details className="bg-white p-6 rounded-lg shadow-lg" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <summary className="font-semibold text-lg cursor-pointer hover:text-geoblue-600 transition-colors" itemProp="name">
              Für welche Projekttypen eignen sich Ihre Dienstleistungen?
            </summary>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="mt-4 text-gray-700">
              <p itemProp="text">
                Unsere Dienstleistungen eignen sich für Wohnungsbau, Industriebauten, 
                Photovoltaik-Parks, Erdwärmeanlagen, Brunnenbau und Infrastrukturprojekte. 
                Von Einfamilienhäusern bis zu komplexen Großprojekten bieten wir 
                maßgeschneiderte geotechnische Lösungen.
              </p>
            </div>
          </details>

          <details className="bg-white p-6 rounded-lg shadow-lg" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <summary className="font-semibold text-lg cursor-pointer hover:text-geoblue-600 transition-colors" itemProp="name">
              Welche Standards und Normen befolgen Sie?
            </summary>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="mt-4 text-gray-700">
              <p itemProp="text">
                Wir arbeiten nach DIN EN 1997-1/2 (Eurocode 7), deutschen geotechnischen 
                Standards und internationalen Normen. Alle Analysen entsprechen den aktuellen 
                wissenschaftlichen Erkenntnissen und werden von zertifizierten Fachkräften 
                verifiziert.
              </p>
            </div>
          </details>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;


import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const FAQSection = () => {
  const { language } = useLanguage();

  const faqData = {
    de: {
      title: "Häufig gestellte Fragen",
      questions: [
        {
          question: "Wie funktioniert die Kombination aus KI und menschlicher Kontrolle?",
          answer: "Unsere KI-Systeme führen die erste Analyse durch und erstellen Vorstudien. Alle Ergebnisse werden jedoch von erfahrenen Geologen und Bauingenieuren manuell verifiziert, kontrolliert und korrigiert. So kombinieren wir die Geschwindigkeit der KI mit der Zuverlässigkeit menschlicher Expertise."
        },
        {
          question: "Welche CPT-Analysemethoden bieten Sie an?",
          answer: "Wir bieten alle gängigen CPT-Analysemethoden: Schneider et al. (2008) für deutsche Standards, Robertson (1990) als Universalstandard, Eurocode 7 Unified für EU-Projekte, sowie Spezialmethoden von Mayne, Eslami & Fellenius und Jefferies & Been. Die optimale Methode wird projektspezifisch ausgewählt."
        },
        {
          question: "Wie schnell erhalte ich die Ergebnisse meiner geotechnischen Vorstudie?",
          answer: "Dank KI-Unterstützung können wir erste Analysen deutlich schneller erstellen. Die finale Lieferzeit hängt vom Projektumfang ab, typisch sind 3-7 Werktage inklusive menschlicher Verifikation und Qualitätskontrolle."
        },
        {
          question: "Was kostet eine geotechnische Vorstudie?",
          answer: "Die Kosten hängen von Projektgröße, Standort und gewünschter Detailtiefe ab. Wir bieten eine kostenlose Erstberatung an, um Ihnen ein maßgeschneidertes Angebot zu erstellen. Kontaktieren Sie uns für eine individuelle Kostenschätzung."
        },
        {
          question: "Für welche Projekttypen eignen sich Ihre Dienstleistungen?",
          answer: "Unsere Dienstleistungen eignen sich für Wohnungsbau, Industriebauten, Photovoltaik-Parks, Erdwärmeanlagen, Brunnenbau und Infrastrukturprojekte. Von Einfamilienhäusern bis zu komplexen Großprojekten bieten wir maßgeschneiderte geotechnische Lösungen."
        },
        {
          question: "Welche Standards und Normen befolgen Sie?",
          answer: "Wir arbeiten nach DIN EN 1997-1/2 (Eurocode 7), deutschen geotechnischen Standards und internationalen Normen. Alle Analysen entsprechen den aktuellen wissenschaftlichen Erkenntnissen und werden von zertifizierten Fachkräften verifiziert."
        }
      ]
    },
    en: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "How does the combination of AI and human control work?",
          answer: "Our AI systems perform the initial analysis and create preliminary studies. However, all results are manually verified, controlled, and corrected by experienced geologists and civil engineers. This way, we combine the speed of AI with the reliability of human expertise."
        },
        {
          question: "What CPT analysis methods do you offer?",
          answer: "We offer all common CPT analysis methods: Schneider et al. (2008) for German standards, Robertson (1990) as universal standard, Eurocode 7 Unified for EU projects, as well as special methods by Mayne, Eslami & Fellenius and Jefferies & Been. The optimal method is selected project-specifically."
        },
        {
          question: "How quickly do I receive the results of my geotechnical preliminary study?",
          answer: "Thanks to AI support, we can create initial analyses significantly faster. The final delivery time depends on the project scope, typically 3-7 working days including human verification and quality control."
        },
        {
          question: "What does a geotechnical preliminary study cost?",
          answer: "The costs depend on project size, location, and desired level of detail. We offer a free initial consultation to create a customized quote for you. Contact us for an individual cost estimate."
        },
        {
          question: "For which project types are your services suitable?",
          answer: "Our services are suitable for residential construction, industrial buildings, photovoltaic parks, geothermal systems, well construction, and infrastructure projects. From single-family homes to complex large-scale projects, we offer tailored geotechnical solutions."
        },
        {
          question: "Which standards and norms do you follow?",
          answer: "We work according to DIN EN 1997-1/2 (Eurocode 7), German geotechnical standards, and international norms. All analyses comply with current scientific knowledge and are verified by certified professionals."
        }
      ]
    }
  };

  const currentFaq = faqData[language];

  return (
    <section className="py-16 bg-gray-50" itemScope itemType="https://schema.org/FAQPage">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12 text-geoblue-800">
          {currentFaq.title}
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {currentFaq.questions.map((faq, index) => (
            <details key={index} className="bg-white p-6 rounded-lg shadow-lg" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="font-semibold text-lg cursor-pointer hover:text-geoblue-600 transition-colors" itemProp="name">
                {faq.question}
              </summary>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="mt-4 text-gray-700">
                <p itemProp="text">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

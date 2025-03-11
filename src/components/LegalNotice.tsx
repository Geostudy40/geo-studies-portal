
import { useLanguage } from "@/context/LanguageContext";

const LegalNotice = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-geoblue-50 border border-geoblue-100 rounded-lg p-4 my-8 text-sm text-gray-600">
      {language === "de" ? (
        <p>
          Hinweis: Unsere geotechnischen Vorstudien ersetzen nicht die Baugrundgutachten gemäß Eurocode 7 (DIN EN 1997) und DIN 4020. Sie dienen als fundierte Entscheidungsgrundlage für weiterführende Untersuchungen und optimierte Planungsprozesse.
        </p>
      ) : (
        <p>
          Note: Our geotechnical preliminary studies do not replace soil investigation reports according to Eurocode 7 (DIN EN 1997) and DIN 4020. They serve as a well-founded basis for decision-making for further investigations and optimized planning processes.
        </p>
      )}
    </div>
  );
};

export default LegalNotice;

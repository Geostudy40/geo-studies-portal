
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/constants/companyInfo";

const Imprint = () => {
  const { language } = useLanguage();

  return (
    <div className="py-12 md:py-20 bg-[#E9ECF5]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-geoblue-800 mb-8">
            {language === "de" ? "Impressum" : "Legal Notice"}
          </h1>

          <div className="prose max-w-none">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              {COMPANY_INFO.name}<br />
              {COMPANY_INFO.subtitle}<br />
              {COMPANY_INFO.address.street}<br />
              {COMPANY_INFO.address.postcode} {COMPANY_INFO.address.city}
            </p>

            <h2>Vertreten durch</h2>
            <p>{COMPANY_INFO.management}</p>

            <h2>Kontakt</h2>
            <p>
              Telefon: {COMPANY_INFO.contact.phone}<br />
              E-Mail: {COMPANY_INFO.contact.email}
            </p>

            <h2>Steuer-Nr.</h2>
            <p>{COMPANY_INFO.taxId}</p>

            <h2>Berufsbezeichnung</h2>
            <p>{COMPANY_INFO.subtitle}<br />
            Zuständige Kammer: {COMPANY_INFO.chamberInfo}</p>

            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              {COMPANY_INFO.management}<br />
              {COMPANY_INFO.address.street}<br />
              {COMPANY_INFO.address.postcode} {COMPANY_INFO.address.city}
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Stand: {COMPANY_INFO.lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;


import { useLanguage } from "@/context/LanguageContext";

const Imprint = () => {
  const { language } = useLanguage();

  return (
    <div className="py-12 md:py-20 bg-[#E9ECF5]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-geoblue-800 mb-8">
            {language === "de" ? "Impressum" : "Imprint"}
          </h1>

          <div className="prose max-w-none">
            {language === "de" ? (
              <>
                <h2>Angaben gemäß § 5 TMG</h2>
                <p>
                  <strong>GeoStudys – Ingenieurbüro für geologische Vorstudien</strong><br />
                  Inhaber: Dipl.-Geol. Kazem Bezrafshan<br />
                  Am Stichkanal 2–4<br />
                  14167 Berlin<br />
                  Deutschland
                </p>

                <h2>Kontakt</h2>
                <p>
                  Telefon: +49 1578 833 01 12<br />
                  E‑Mail: <a href="mailto:info@geostudys.com" target="_blank" rel="noopener">info@geostudys.com</a>
                </p>

                <h2>Umsatzsteuer‑Identifikationsnummer gemäß § 27a UStG</h2>
                <p>
                  DE 251 900 987
                </p>

                <h2>Berufsbezeichnung</h2>
                <p>
                  Geologe (freiberuflich) / Geotechnisches Ingenieurbüro<br />
                  Zuständige Kammer: Ingenieurkammer Berlin
                </p>

                <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>
                  Dipl.-Geol. Kazem Bezrafshan<br />
                  Adresse wie oben
                </p>
                
                <h2>Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online‑Streitbeilegung (OS) bereit:<br />
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr</a>
                </p>
                <p>
                  Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucher­schlichtungsstelle teilzunehmen.
                </p>
              </>
            ) : (
              <>
                <h2>Information pursuant to § 5 German Teleservices Act (TMG)</h2>
                <p>
                  <strong>GeoStudys – Geological Pre‑Study Engineering Office</strong><br />
                  Owner: Dipl. Geol. Kazem Bezrafshan<br />
                  Am Stichkanal 2–4<br />
                  D‑14167 Berlin<br />
                  Germany
                </p>

                <h2>Contact</h2>
                <p>
                  Phone: +49 1578 833 01 12<br />
                  E‑mail: <a href="mailto:info@geostudys.com" target="_blank" rel="noopener">info@geostudys.com</a>
                </p>

                <h2>VAT identification number pursuant to § 27a German VAT Act</h2>
                <p>
                  DE 251 900 987
                </p>

                <h2>Professional designation</h2>
                <p>
                  Geologist (freelance) / Geotechnical engineering office<br />
                  Competent chamber: Berlin Chamber of Engineers
                </p>

                <h2>Responsible for the content pursuant to § 55 para. 2 Interstate Broadcasting Treaty (RStV)</h2>
                <p>
                  Dipl. Geol. Kazem Bezrafshan<br />
                  Address as above
                </p>
                
                <h2>Dispute resolution</h2>
                <p>
                  The European Commission provides a platform for online dispute resolution (ODR):<br />
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr</a>
                </p>
                <p>
                  We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                </p>
              </>
            )}

            <p className="text-sm text-gray-500 mt-8">
              Stand: Mai 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;

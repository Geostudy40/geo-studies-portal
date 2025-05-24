
import { useLanguage } from "@/context/LanguageContext";

const Terms = () => {
  const { t, language } = useLanguage();

  return (
    <div className="py-12 md:py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-geoblue-800 mb-4">
            {language === "de" ? "Impressum" : "Terms & Conditions"}
          </h1>
        </div>

        <div className="max-w-3xl mx-auto prose">
          {language === "de" ? (
            <>
              <h2>Angaben gemäß § 5 TMG</h2>
              <p>
                GeoStudys Consulting<br />
                Dipl.-Geol. K. Bazrafshan<br />
                Am Stichkanal 2-4<br />
                14167 Berlin<br />
                Deutschland
              </p>

              <h2>Kontakt</h2>
              <p>
                Telefon: +49 157 88 330112<br />
                E-Mail: info@geostudys.com
              </p>

              <h2>Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE28-219-00987
              </p>

              <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                Dipl.-Geol. K. Bazrafshan<br />
                Am Stichkanal 2-4<br />
                14167 Berlin
              </p>

              <h2>Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h2>Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </>
          ) : (
            <>
              <h2>Information according to § 5 TMG</h2>
              <p>
                GeoStudys Consulting<br />
                Dipl.-Geol. K. Bazrafshan<br />
                Am Stichkanal 2-4<br />
                14167 Berlin<br />
                Germany
              </p>

              <h2>Contact</h2>
              <p>
                Phone: +49 157 88 330112<br />
                Email: info@geostudys.com
              </p>

              <h2>VAT ID</h2>
              <p>
                Sales tax identification number according to § 27 a of the Sales Tax Law:<br />
                DE28-219-00987
              </p>

              <h2>Responsible for content according to § 55 Abs. 2 RStV</h2>
              <p>
                Dipl.-Geol. K. Bazrafshan<br />
                Am Stichkanal 2-4<br />
                14167 Berlin
              </p>

              <h2>Dispute Resolution</h2>
              <p>
                The European Commission provides a platform for online dispute resolution (OS): 
                https://ec.europa.eu/consumers/odr/. You can find our email address in the impressum above.
              </p>
              <p>
                We are not willing or obliged to participate in dispute resolution proceedings before a 
                consumer arbitration board.
              </p>

              <h2>Liability for Contents</h2>
              <p>
                As a service provider, we are responsible for our own content on these pages according to § 7 
                paragraph 1 TMG (German Telemedia Act) and general laws. According to §§ 8 to 10 TMG, we are not 
                obliged to monitor transmitted or stored foreign information or to investigate circumstances that 
                indicate illegal activity.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terms;

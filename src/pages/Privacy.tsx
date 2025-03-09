
import { useLanguage } from "@/context/LanguageContext";

const Privacy = () => {
  const { t, language } = useLanguage();

  return (
    <div className="py-12 md:py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-geoblue-800 mb-4">
            {language === "de" ? "Datenschutzerklärung" : "Privacy Policy"}
          </h1>
        </div>

        <div className="max-w-3xl mx-auto prose">
          {language === "de" ? (
            <>
              <h2>1. Datenschutz auf einen Blick</h2>
              <h3>Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.
              </p>

              <h3>Datenerfassung auf dieser Website</h3>
              <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Impressum dieser Website entnehmen.
              </p>

              <h4>Wie erfassen wir Ihre Daten?</h4>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um 
                Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme 
                erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des 
                Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>

              <h4>Wofür nutzen wir Ihre Daten?</h4>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere 
                Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten 
                zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
                jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung 
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </p>
            </>
          ) : (
            <>
              <h2>1. Privacy at a Glance</h2>
              <h3>General Information</h3>
              <p>
                The following information provides a simple overview of what happens to your personal data when you visit 
                this website. Personal data is any data that can be used to identify you personally.
              </p>

              <h3>Data Collection on This Website</h3>
              <h4>Who is responsible for data collection on this website?</h4>
              <p>
                Data processing on this website is carried out by the website operator. You can find their contact details 
                in the impressum section of this website.
              </p>

              <h4>How do we collect your data?</h4>
              <p>
                On the one hand, your data is collected when you provide it to us. This could be data that you enter in a 
                contact form, for example.
              </p>
              <p>
                Other data is collected automatically or with your consent by our IT systems when you visit the website. 
                This is primarily technical data (e.g., internet browser, operating system, or time of page view). This data 
                is collected automatically as soon as you enter our website.
              </p>

              <h4>What do we use your data for?</h4>
              <p>
                Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyze 
                your user behavior.
              </p>

              <h4>What rights do you have regarding your data?</h4>
              <p>
                You have the right to receive information about the origin, recipient, and purpose of your stored personal data 
                free of charge at any time. You also have the right to request the correction or deletion of this data. If you 
                have given consent to data processing, you can revoke this consent at any time for the future. You also have the 
                right to request the restriction of the processing of your personal data under certain circumstances.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Privacy;

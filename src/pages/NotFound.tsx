
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: Versuch, nicht existierende Route aufzurufen:",
      location.pathname
    );
    // Debug-Informationen zur Fehlerbehebung
    console.log("Base URL:", document.baseURI);
    console.log("Current URL:", window.location.href);
    console.log("Window basePath:", window.basePath);
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center max-w-lg px-4">
        <h1 className="text-9xl font-bold text-geoblue-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          {language === "de" 
            ? "Diese Seite wurde leider nicht gefunden." 
            : "Oops! Page not found."}
        </p>
        <p className="text-sm text-gray-500 mb-6">
          {language === "de" 
            ? `Gesuchter Pfad: ${location.pathname}` 
            : `Requested path: ${location.pathname}`}
        </p>
        <Button asChild className="bg-geoblue-800 hover:bg-geoblue-700">
          <Link to="/">
            {language === "de" ? "Zurück zur Startseite" : "Return to Home"}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

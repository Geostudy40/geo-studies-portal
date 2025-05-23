
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense, useEffect } from "react";

// Lazy-loaded page imports to improve performance
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Sectors from "./pages/Sectors";
import SectorDetail from "./pages/SectorDetail";
import ResidentialConstruction from "./pages/ResidentialConstruction";
import InfrastructureConstruction from "./pages/InfrastructureConstruction";
import IndustrialConstruction from "./pages/IndustrialConstruction";
import WaterConstruction from "./pages/WaterConstruction";
import RenewableEnergy from "./pages/RenewableEnergy";
import TargetAudiences from "./pages/TargetAudiences";
import ExtendedServices from "./pages/ExtendedServices";
import CPTAnalysis from "./pages/CPTAnalysis";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import Imprint from "./pages/Imprint";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  useEffect(() => {
    // Detaillierte Umgebungsinformationen für Debugging
    console.log("======= APP ENVIRONMENT INFO =======");
    console.log("App-Komponente wurde gerendert");
    console.log("Aktueller Pfad:", window.location.pathname);
    console.log("Aktuelle URL:", window.location.href);
    console.log("Basis-URL:", document.baseURI);
    console.log("Base element:", document.querySelector('base')?.href);
    console.log("GitHub Pages:", window.location.hostname.includes('github.io'));
    console.log("User Agent:", navigator.userAgent);
    console.log("Window basePath:", window.basePath);
    console.log("=================================");
    
    // Bilder vorladen um Ladeprobleme zu identifizieren
    const preloadImages = () => {
      try {
        const baseUrl = document.baseURI || '/geo-studies-portal/';
        const img = new Image();
        img.onload = () => console.log("Test-Bild erfolgreich geladen:", img.src);
        img.onerror = (e) => console.error("Fehler beim Laden des Test-Bilds:", e);
        img.src = `${baseUrl}og-image.png`;
        
        // Favicon prüfen
        const favicon = new Image();
        favicon.onload = () => console.log("Favicon erfolgreich geladen:", favicon.src);
        favicon.onerror = (e) => console.error("Fehler beim Laden des Favicons:", e);
        favicon.src = `${baseUrl}favicon.ico`;
      } catch (e) {
        console.error("Fehler beim Vorladen von Bildern:", e);
      }
    };
    
    preloadImages();
    
    // DOM-Struktur prüfen
    console.log("DOM-Struktur:", document.body.innerHTML);
  }, []);
  
  // Korrekte Basis-URL für GitHub Pages setzen
  const basename = '/geo-studies-portal';
  
  console.log("[App] Router basename:", basename);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={basename}>
            <div className="flex flex-col min-h-screen">
              <Suspense fallback={<div className="p-8 text-center">Header wird geladen...</div>}>
                <Header />
              </Suspense>
              <main className="flex-grow pt-16">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/sectors" element={<Sectors />} />
                  <Route path="/sectors/:sectorId" element={<SectorDetail />} />
                  <Route path="/residential-construction" element={<ResidentialConstruction />} />
                  <Route path="/infrastructure-construction" element={<InfrastructureConstruction />} />
                  <Route path="/industrial-construction" element={<IndustrialConstruction />} />
                  <Route path="/water-construction" element={<WaterConstruction />} />
                  <Route path="/renewable-energy" element={<RenewableEnergy />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/target-audiences" element={<TargetAudiences />} />
                  <Route path="/extended-services" element={<ExtendedServices />} />
                  <Route path="/cpt-analysis" element={<CPTAnalysis />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/imprint" element={<Imprint />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Suspense fallback={<div className="p-8 text-center">Footer wird geladen...</div>}>
                <Footer />
              </Suspense>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;

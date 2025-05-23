
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import { Suspense, useEffect, useState } from "react";

// Page imports
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

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-geoblue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Seite wird geladen...</p>
    </div>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("[App] App-Komponente gemountet");
    
    try {
      // Simuliere kurze Initialisierungszeit
      const initTimer = setTimeout(() => {
        console.log("[App] App-Initialisierung abgeschlossen");
        setIsLoading(false);
      }, 200);

      return () => {
        clearTimeout(initTimer);
      };
    } catch (err) {
      console.error("[App] Fehler bei App-Initialisierung:", err);
      setError(err instanceof Error ? err.message : 'Unbekannter Fehler');
      setIsLoading(false);
    }
  }, []);

  const getBasename = () => {
    try {
      const hostname = window.location.hostname;
      console.log("[App] Hostname:", hostname);
      
      if (hostname.includes('github.io') || hostname.includes('lovable.app')) {
        return '/geo-studies-portal';
      }
      return '';
    } catch (error) {
      console.error("[App] Fehler beim Ermitteln des Basename:", error);
      return '';
    }
  };

  const basename = getBasename();
  console.log("[App] Router basename:", basename);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md mx-auto p-6">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Fehler beim Laden</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-geoblue-600 text-white px-6 py-2 rounded hover:bg-geoblue-700"
          >
            Neu laden
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={basename}>
            <SEO />
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow pt-16">
                <Suspense fallback={<LoadingFallback />}>
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
                </Suspense>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;

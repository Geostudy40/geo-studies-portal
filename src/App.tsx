
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { HelmetProvider } from "react-helmet-async";
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
import WindTurbines from "./pages/WindTurbines";
import PhotovoltaicParks from "./pages/PhotovoltaicParks";
import TargetAudiences from "./pages/TargetAudiences";
import ExtendedServices from "./pages/ExtendedServices";
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

// PageTransitionWrapper zur Animation von Seitenwechseln
const PageTransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Smooth transition effect beim Seitenwechsel
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.classList.add('page-transition');
      
      const timer = setTimeout(() => {
        mainElement.classList.remove('page-transition');
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return <>{children}</>;
};

const App = () => {
  useEffect(() => {
    console.log("App-Komponente wurde gerendert");
    console.log("Aktueller Pfad:", window.location.pathname);
    
    // Verhindere unerwünschte Neuladen-Ereignisse
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // Nur bei tatsächlichem Verlassen der Seite eingreifen
      const navigationType = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationType && navigationType.type === 'reload') {
        return;
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Verhindere Weißblitzen während der Navigation
    document.body.style.backgroundColor = '#f8f8f8';
    const style = document.createElement('style');
    style.textContent = `
      body {
        transition: opacity 0.3s ease;
      }
      .page-transition {
        animation: fadeIn 0.3s ease-in-out;
      }
      @keyframes fadeIn {
        from { opacity: 0.8; }
        to { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
  // Basepath dynamisch abhängig von der Umgebung
  const basename = import.meta.env.MODE === 'production'
    ? (import.meta.env.VITE_PUBLIC_BASE || '/')
    : '/';
  
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <HelmetProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter basename={basename}>
              <div className="flex flex-col min-h-screen">
                <Suspense fallback={<div className="p-8 text-center">Header wird geladen...</div>}>
                  <Header />
                </Suspense>
                <main className="flex-grow pt-16 transition-opacity duration-300">
                  <PageTransitionWrapper>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/sectors" element={<Sectors />} />
                      <Route path="/sectors/:sectorId" element={<SectorDetail />} />
                      <Route path="/residential-construction" element={<ResidentialConstruction />} />
                      <Route path="/infrastructure-construction" element={<InfrastructureConstruction />} />
                      <Route path="/industrial-construction" element={<IndustrialConstruction />} />
                      <Route path="/water-construction" element={<WaterConstruction />} />
                      <Route path="/wind-turbines" element={<WindTurbines />} />
                      <Route path="/photovoltaic-parks" element={<PhotovoltaicParks />} />
                      <Route path="/renewable-energy" element={<WindTurbines />} /> {/* Keep old route temporarily for compatibility */}
                      <Route path="/services" element={<Services />} />
                      <Route path="/target-audiences" element={<TargetAudiences />} />
                      <Route path="/extended-services" element={<ExtendedServices />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/terms" element={<Terms />} />
                      <Route path="/privacy" element={<Privacy />} />
                      <Route path="/imprint" element={<Imprint />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </PageTransitionWrapper>
                </main>
                <Suspense fallback={<div className="p-8 text-center">Footer wird geladen...</div>}>
                  <Footer />
                </Suspense>
              </div>
            </BrowserRouter>
          </TooltipProvider>
        </HelmetProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;

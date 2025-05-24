
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import { Suspense, useEffect } from "react";

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

const App = () => {
  useEffect(() => {
    console.log("App geladen erfolgreich");
    document.body.classList.add('app-loaded');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/geo-studies-portal">
            <SEO />
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow pt-16">
                <Suspense fallback={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-geoblue-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">Seite wird geladen...</p>
                    </div>
                  </div>
                }>
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

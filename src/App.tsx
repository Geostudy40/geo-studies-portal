import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import Imprint from "./pages/Imprint";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
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
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/imprint" element={<Imprint />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

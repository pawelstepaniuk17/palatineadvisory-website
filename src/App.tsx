import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Approach from "./pages/Approach";
import PracticeIndex from "./pages/PracticeIndex";
import PracticeDecisionHabits from "./pages/PracticeDecisionHabits";
import PracticeResponsibility from "./pages/PracticeResponsibility";
import PracticeMeetings from "./pages/PracticeMeetings";
import Industries from "./pages/Industries";
import InsightsIndex from "./pages/InsightsIndex";

import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import LegalNotice from "./pages/LegalNotice";
import NotFound from "./pages/NotFound";
import CookieConsent from "@/components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/practice" element={<PracticeIndex />} />
            <Route path="/practice/decision-habits" element={<PracticeDecisionHabits />} />
            <Route path="/practice/responsibility" element={<PracticeResponsibility />} />
            <Route path="/practice/meetings" element={<PracticeMeetings />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/insights" element={<InsightsIndex />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

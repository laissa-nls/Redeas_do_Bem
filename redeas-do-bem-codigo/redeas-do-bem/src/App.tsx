import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import HorsesAvailable from "./pages/HorsesAvailable";
import AdoptionForm from "./pages/AdoptionForm";
import SuccessStories from "./pages/SuccessStories";
import Awareness from "./pages/Awareness";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cavalos-disponiveis" element={<HorsesAvailable />} />
          <Route path="/formulario-adocao" element={<AdoptionForm />} />
          <Route path="/historias-de-adocao" element={<SuccessStories />} />
          <Route path="/conscientizacao" element={<Awareness />} />
          <Route path="/contato" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

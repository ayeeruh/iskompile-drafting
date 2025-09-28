
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Requirements from "./pages/Requirements";
import FileUpload from "./pages/FileUpload";
import Events from "./pages/Events";
import Announcements from "./pages/Announcements";
import ScholarshipInfo from "./pages/ScholarshipInfo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/upload/:type" element={<FileUpload />} />
          <Route path="/events" element={<Events />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/scholarship-info" element={<ScholarshipInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

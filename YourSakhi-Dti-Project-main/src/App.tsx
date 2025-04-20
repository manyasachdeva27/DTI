import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Chat from "./pages/Chat";
import PeriodCalculator from "./pages/calculators/PeriodCalculator";
import OvulationCalculator from "./pages/calculators/OvulationCalculator";
import Health360 from "./pages/health-library/Health360";
import YourCycle from "./pages/health-library/YourCycle";
import Quizzes from "./pages/health-library/Quizzes";
import Community from "./pages/Community";
import Consultation from "./pages/Consultation";
import NotFound from "./pages/NotFound";
import { ArticleContent } from "./components/ArticleContent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/chat" element={<Chat />} />
            
            {/* Calculator routes */}
            <Route path="/calculators/period" element={<PeriodCalculator />} />
            <Route path="/calculators/ovulation" element={<OvulationCalculator />} />
            
            {/* Health Library routes */}
            <Route path="/health-library/health360" element={<Health360 />} />
            <Route path="/health-library/your-cycle" element={<YourCycle />} />
            <Route path="/health-library/quizzes" element={<Quizzes />} />
            <Route path="/health-library/article/:id" element={<ArticleContent />} />
            
            {/* Other routes */}
            <Route path="/community" element={<Community />} />
            <Route path="/consultation" element={<Consultation />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

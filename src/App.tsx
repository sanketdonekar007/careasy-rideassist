
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OtpVerification from "./pages/OtpVerification";
import VehicleSelect from "./pages/VehicleSelect";
import BikeBrands from "./pages/BikeBrands";
import BikeModels from "./pages/BikeModels";
import ServiceHome from "./pages/ServiceHome";
import MyVehicles from "./pages/MyVehicles";
import Help from "./pages/Help";
import Referral from "./pages/Referral";
import Account from "./pages/Account";
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
          <Route path="/verify-otp" element={<OtpVerification />} />
          <Route path="/select-vehicle" element={<VehicleSelect />} />
          <Route path="/bike-brands" element={<BikeBrands />} />
          <Route path="/bike-models/:brandId" element={<BikeModels />} />
          <Route path="/service-home" element={<ServiceHome />} />
          <Route path="/my-vehicles" element={<MyVehicles />} />
          <Route path="/help" element={<Help />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

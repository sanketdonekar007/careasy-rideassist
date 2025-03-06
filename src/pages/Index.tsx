
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const { setPhoneNumber: setAuthPhoneNumber, sendVerificationCode } = useAuth();

  const handleContinue = async () => {
    if (phoneNumber.length >= 10) {
      setAuthPhoneNumber(phoneNumber);
      const success = await sendVerificationCode();
      if (success) {
        navigate("/verify-otp");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="h-64 bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/c22058da-df84-4288-a654-9d6cd22f2a15.png')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-6 py-12 relative z-10">
          <h1 className="text-3xl font-bold text-white animate-fade-in">
            CarEasy RideAssist
          </h1>
          <p className="text-white/90 mt-2 max-w-md animate-fade-in stagger-1">
            Professional car and bike services at your fingertips
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 px-6 py-8 -mt-6 rounded-t-3xl bg-white">
        <div className="max-w-md mx-auto">
          <div className="space-y-4 animate-fade-in stagger-2">
            <h2 className="text-2xl font-semibold text-gray-800">Welcome</h2>
            <p className="text-gray-600">
              Enter your phone number to get started with hassle-free vehicle services
            </p>
            
            <div className="flex items-center space-x-2 mt-8 border rounded-lg p-3 bg-gray-50">
              <Phone className="text-gray-400" size={20} />
              <div className="text-gray-500">+91</div>
              <Input
                type="tel"
                placeholder="Enter your mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                className="flex-1 border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                maxLength={10}
              />
            </div>
            
            <Button 
              onClick={handleContinue}
              disabled={phoneNumber.length < 10}
              className="w-full bg-brand-red hover:bg-red-600 transition-all duration-300 py-6"
            >
              Continue
            </Button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
          
          <div className="mt-12 space-y-6 animate-fade-in stagger-3">
            <div className="flex items-center space-x-4 border-b pb-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
              <div>
                <h3 className="font-medium">Expert Care</h3>
                <p className="text-sm text-gray-600">Certified mechanics for your vehicle</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 border-b pb-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div>
                <h3 className="font-medium">Genuine Parts</h3>
                <p className="text-sm text-gray-600">Only authentic parts used</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
              </div>
              <div>
                <h3 className="font-medium">Warranty Assured</h3>
                <p className="text-sm text-gray-600">All services come with warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

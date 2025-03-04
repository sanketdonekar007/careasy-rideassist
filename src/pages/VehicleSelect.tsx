
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const VehicleSelect = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedType === "car") {
      // navigate to car selection page
      navigate("/car-brands");
    } else if (selectedType === "bike") {
      navigate("/bike-brands");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHeader title="Select Your Vehicle" />
      
      <div className="px-6 py-8 flex flex-col h-[calc(100vh-80px)]">
        <div className="flex-1 flex flex-col justify-around items-center max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-6 rounded-xl border-2 ${selectedType === 'car' ? 'border-brand-red' : 'border-transparent'} cursor-pointer w-full max-w-xs`}
            onClick={() => setSelectedType('car')}
          >
            <img
              src="/lovable-uploads/56d90bf3-4693-40e1-a089-469d1237ca43.png"
              alt="Car"
              className="w-full h-auto object-contain animate-float"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`p-6 rounded-xl border-2 ${selectedType === 'bike' ? 'border-brand-red' : 'border-transparent'} cursor-pointer w-full max-w-xs`}
            onClick={() => setSelectedType('bike')}
          >
            <img
              src="/lovable-uploads/7b8f5a6c-7821-41aa-b97f-02d6c28c9c9a.png"
              alt="Bike"
              className="w-full h-auto object-contain animate-float"
            />
          </motion.div>
        </div>
        
        <div className="mt-6">
          <Button 
            onClick={handleContinue}
            disabled={!selectedType}
            className="w-full bg-brand-red hover:bg-red-600 transition-all"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleSelect;

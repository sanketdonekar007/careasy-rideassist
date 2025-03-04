
import { useState, useEffect } from "react";
import PageHeader from "@/components/common/PageHeader";
import BottomNavigation from "@/components/common/BottomNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, ChevronRight, Fuel } from "lucide-react";
import { Check } from "lucide-react";

interface SelectedVehicle {
  type: string;
  brand: string;
  model: string;
  image: string;
  fuel: string;
}

const MyVehicles = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<SelectedVehicle | null>(null);
  const [registrationNumber, setRegistrationNumber] = useState("");
  
  useEffect(() => {
    // Get selected vehicle from localStorage (in a real app, use context/state management)
    const savedVehicle = localStorage.getItem('selectedVehicle');
    if (savedVehicle) {
      setSelectedVehicle(JSON.parse(savedVehicle));
    }
  }, []);
  
  const handleSubmit = () => {
    // In a real app, you'd validate and submit the registration number
    console.log("Registration number submitted:", registrationNumber);
  };

  const handleChangeVehicle = () => {
    // Navigate to vehicle selection page
    window.location.href = "/select-vehicle";
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <PageHeader title="My Vehicles" rightAction={
        <button 
          className="text-brand-red font-medium"
          onClick={handleChangeVehicle}
        >
          Change Vehicle
        </button>
      } />
      
      {selectedVehicle && (
        <div className="p-4 border-b flex items-center space-x-4">
          <img 
            src={selectedVehicle.image} 
            alt={selectedVehicle.model}
            className="w-24 h-16 object-contain"
          />
          <div>
            <h2 className="text-xl font-semibold">
              {selectedVehicle.brand} {selectedVehicle.model}
            </h2>
          </div>
        </div>
      )}
      
      <div className="p-4 space-y-6">
        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-3">Verify Your Car</h3>
          
          <div className="flex items-center border rounded-lg overflow-hidden mb-4">
            <Input
              type="text"
              placeholder="Enter Registration Number"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              className="border-0 flex-1"
            />
            <Button 
              onClick={handleSubmit}
              className="bg-white hover:bg-white text-brand-red font-medium rounded-none border-l h-full"
            >
              SUBMIT
            </Button>
          </div>
          
          <div className="mb-2">
            <button className="text-gray-500 text-sm">Why Get Verified?</button>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <Check className="text-green-500 mr-2" size={16} />
              <span>Get Best prices For Your Car Service</span>
            </div>
            
            <div className="flex items-center text-sm">
              <Check className="text-green-500 mr-2" size={16} />
              <span>Easily Check Active/Pending Challans</span>
            </div>
            
            <div className="flex items-center text-sm">
              <Check className="text-green-500 mr-2" size={16} />
              <span>Scan & Notify Feature Enabled</span>
            </div>
          </div>
        </div>
        
        <div className="border-b py-2">
          <div className="flex justify-between items-center">
            <div>Change Car Color</div>
            <Pencil size={16} className="text-gray-500" />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="text-center">
            <div className="text-green-500 font-semibold">₹ 103.99</div>
            <div className="text-xs text-gray-500 flex items-center justify-center">
              <span className="text-green-500 mr-1">▼</span> 0.74
            </div>
            <div className="text-sm font-medium mt-2">PUNE</div>
            <div className="text-xs font-medium">PETROL</div>
          </div>
          
          <div className="text-center">
            <div className="text-brand-red font-semibold">₹ 90.35</div>
            <div className="text-xs text-gray-500 flex items-center justify-center">
              <span className="text-blue-500 mr-1">—</span> 0
            </div>
            <div className="text-sm font-medium mt-2">PUNE</div>
            <div className="text-xs font-medium">DIESEL</div>
          </div>
          
          <div className="text-center">
            <div className="text-blue-500 font-semibold">NA</div>
            <div className="text-xs text-gray-500 flex items-center justify-center">
              <span className="text-blue-500 mr-1">—</span> 0
            </div>
            <div className="text-sm font-medium mt-2">PUNE</div>
            <div className="text-xs font-medium">CNG</div>
          </div>
        </div>
        
        <button className="flex items-center justify-center text-gray-600 w-full py-2">
          <Fuel size={16} className="mr-2" />
          <span>View in All Cities</span>
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default MyVehicles;

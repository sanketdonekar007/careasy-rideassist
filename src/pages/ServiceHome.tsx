
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/common/BottomNavigation";
import ServiceCard from "@/components/common/ServiceCard";
import { MapPin, ChevronRight } from "lucide-react";

interface SelectedVehicle {
  type: string;
  brand: string;
  model: string;
  image: string;
  fuel: string;
}

const ServiceHome = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<SelectedVehicle | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  const banners = [
    {
      id: 1,
      image: "/lovable-uploads/0cb00d5d-fb61-4672-811d-4d565c5fffc1.png",
      alt: "Wash the dirt. Ride with pride."
    },
    {
      id: 2,
      image: "/lovable-uploads/78f9adf9-1de7-41e2-bc09-bc656c268f96.png",
      alt: "Get 10% discount on regular service"
    }
  ];

  useEffect(() => {
    // Get selected vehicle from localStorage (in a real app, use context/state management)
    const savedVehicle = localStorage.getItem('selectedVehicle');
    if (savedVehicle) {
      setSelectedVehicle(JSON.parse(savedVehicle));
    }
    
    // Auto rotate banner
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [banners.length]);

  const services = [
    {
      id: "periodic",
      icon: <img src="/lovable-uploads/2888a918-7b7a-40fd-8a0b-784d46bc1338.png" alt="Periodic Service" className="w-10 h-10" />,
      title: "Periodic Service",
      to: "/service/periodic"
    },
    {
      id: "spa",
      icon: <img src="/lovable-uploads/2888a918-7b7a-40fd-8a0b-784d46bc1338.png" alt="Spa & Detailing" className="w-10 h-10" />,
      title: "Spa & Detailing",
      to: "/service/spa"
    },
    {
      id: "tyres",
      icon: <img src="/lovable-uploads/2888a918-7b7a-40fd-8a0b-784d46bc1338.png" alt="Tyres & Wheel Care" className="w-10 h-10" />,
      title: "Tyres & Wheel Care",
      to: "/service/tyres"
    },
    {
      id: "batteries",
      icon: <img src="/lovable-uploads/2888a918-7b7a-40fd-8a0b-784d46bc1338.png" alt="Batteries" className="w-10 h-10" />,
      title: "Batteries",
      to: "/service/batteries"
    },
    {
      id: "brake",
      icon: <img src="/lovable-uploads/2888a918-7b7a-40fd-8a0b-784d46bc1338.png" alt="Brake & Suspension" className="w-10 h-10" />,
      title: "Brake & Suspension",
      to: "/service/brake"
    },
    {
      id: "clutch",
      icon: <img src="/lovable-uploads/2888a918-7b7a-40fd-8a0b-784d46bc1338.png" alt="Clutch & Transmission" className="w-10 h-10" />,
      title: "Clutch & Transmission",
      to: "/service/clutch"
    },
    {
      id: "lights",
      icon: <img src="/lovable-uploads/2888a918-7b7a-40fd-8a0b-784d46bc1338.png" alt="Lights & Mirror" className="w-10 h-10" />,
      title: "Lights & Mirror",
      to: "/service/lights"
    },
    {
      id: "denting",
      icon: <img src="/lovable-uploads/2888a918-7b7a-40fd-8a0b-784d46bc1338.png" alt="Denting & Painting" className="w-10 h-10" />,
      title: "Denting & Painting",
      to: "/service/denting"
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-white">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <MapPin size={20} className="text-brand-red mr-1" />
            <div>
              <div className="font-medium">Pune</div>
              <div className="text-xs text-gray-500 truncate max-w-[200px]">
                1, Shaniwar wada, behind Shaniwar wada, S...
              </div>
            </div>
          </div>
          
          {selectedVehicle && (
            <div className="flex items-center bg-gray-900 text-white px-3 py-1 rounded-md text-xs">
              <img 
                src={selectedVehicle.image} 
                alt={selectedVehicle.model}
                className="w-6 h-6 mr-1"
              />
              <span>{selectedVehicle.model}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Banner */}
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {banners.map(banner => (
              <div key={banner.id} className="w-full flex-shrink-0">
                <img 
                  src={banner.image} 
                  alt={banner.alt}
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {banners.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-brand-red' : 'bg-white bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>
      
      {/* Services */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-4 gap-4">
          {services.map(service => (
            <ServiceCard 
              key={service.id}
              icon={service.icon}
              title={service.title}
              to={service.to}
            />
          ))}
        </div>
      </div>
      
      {/* Referral */}
      <div className="mx-4 p-4 border-t">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-medium">Earn ₹ 0 for every friend you refer</div>
            <div className="text-sm text-gray-500">Get a friend to start using GoMechanic</div>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default ServiceHome;

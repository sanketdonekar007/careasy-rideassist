
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "@/components/common/PageHeader";
import { X } from "lucide-react";

interface BikeModel {
  id: string;
  name: string;
  image: string;
  fuel: string;
}

interface BikeModelData {
  [brandId: string]: BikeModel[];
}

const BikeModels = () => {
  const [models, setModels] = useState<BikeModel[]>([]);
  const [brandName, setBrandName] = useState("");
  const { brandId } = useParams<{ brandId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch bike models
    fetch("/data/bikemodels.json")
      .then(res => res.json())
      .then((data: BikeModelData) => {
        if (brandId && data[brandId]) {
          setModels(data[brandId]);
        }
      })
      .catch(err => console.error("Error loading bike models:", err));
    
    // Fetch brand name from brands data
    fetch("/data/bikebrands.json")
      .then(res => res.json())
      .then(data => {
        const brand = data.find((b: any) => b.id === brandId);
        if (brand) {
          setBrandName(brand.name);
        }
      })
      .catch(err => console.error("Error loading brand info:", err));
  }, [brandId]);

  const handleModelSelect = (model: BikeModel) => {
    // In a real app, you'd store the selection in context/state
    localStorage.setItem('selectedVehicle', JSON.stringify({
      type: 'bike',
      brand: brandName,
      model: model.name,
      image: model.image,
      fuel: model.fuel
    }));
    navigate('/service-home');
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="sticky top-0 z-10 bg-white">
        <div className="flex justify-between items-center p-4 border-b">
          <div>
            <div className="text-sm text-gray-500">{brandName}</div>
            <h1 className="text-xl font-semibold">Select Model</h1>
          </div>
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 p-4">
        {models.map((model, index) => (
          <div 
            key={model.id} 
            className="flex flex-col items-center p-3 border rounded-lg cursor-pointer hover:border-brand-red animate-fade-in"
            style={{ animationDelay: `${index * 0.05}s` }}
            onClick={() => handleModelSelect(model)}
          >
            <img 
              src={model.image} 
              alt={model.name}
              className="w-full h-20 object-contain mb-2"
            />
            <div className="text-center">
              <div className="font-medium text-sm">{model.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BikeModels;


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/common/PageHeader";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface BikeBrand {
  id: string;
  name: string;
  logo: string;
}

const BikeBrands = () => {
  const [brands, setBrands] = useState<BikeBrand[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, you'd handle errors properly
    fetch("/data/bikebrands.json")
      .then(res => res.json())
      .then(data => setBrands(data))
      .catch(err => console.error("Error loading bike brands:", err));
  }, []);

  const filteredBrands = brands.filter(brand => 
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBrandSelect = (brandId: string) => {
    navigate(`/bike-models/${brandId}`);
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <PageHeader title="Select Your Vehicle" />
      
      <div className="px-6 py-4">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search by Car Model or Brand"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-50 border-gray-200"
          />
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {filteredBrands.map((brand, index) => (
            <div 
              key={brand.id}
              className="flex justify-center animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => handleBrandSelect(brand.id)}
            >
              <div className="p-3 flex items-center justify-center border border-gray-100 rounded-lg hover:shadow-sm transition-all w-full aspect-video cursor-pointer">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-h-8 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BikeBrands;

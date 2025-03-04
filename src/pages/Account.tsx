
import PageHeader from "@/components/common/PageHeader";
import BottomNavigation from "@/components/common/BottomNavigation";
import { ChevronRight, PackageOpen, Car, Headphones, CircleDollarSign, User, Share, Gift } from "lucide-react";

const AccountItem = ({ icon, title, subtitle, onClick }: { 
  icon: React.ReactNode, 
  title: string, 
  subtitle?: string,
  onClick?: () => void
}) => (
  <div className="flex items-center justify-between p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors" onClick={onClick}>
    <div className="flex items-center">
      <div className="text-gray-600 mr-4">{icon}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
    </div>
    <ChevronRight size={20} className="text-gray-400" />
  </div>
);

const Account = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-semibold">Hello, Customer</h1>
        <div className="flex items-center text-gray-600">
          <span className="mr-2">🇮🇳</span>
          <span>+918149760321</span>
        </div>
      </div>
      
      <div className="p-4 flex justify-between">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center mb-2">
            <PackageOpen className="text-gray-600" />
          </div>
          <span className="text-sm">Order History</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center mb-2">
            <Car className="text-gray-600" />
          </div>
          <span className="text-sm">My Vehicles</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center mb-2">
            <Headphones className="text-gray-600" />
          </div>
          <span className="text-sm">Help & Support</span>
        </div>
      </div>
      
      <div className="border-t mt-4">
        <div className="flex items-center p-4 border-b">
          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
            <span className="text-yellow-500 font-bold">G</span>
          </div>
          <div>
            <h3 className="font-medium">GoApp Money</h3>
            <p className="text-green-500 font-semibold">₹ 1500</p>
          </div>
          <ChevronRight size={20} className="text-gray-400 ml-auto" />
        </div>
        
        <AccountItem
          icon={<User size={22} />}
          title="Profile"
          subtitle="Incomplete"
        />
        
        <AccountItem
          icon={<Share size={22} />}
          title="Share GoMechanic"
        />
        
        <AccountItem
          icon={<Gift size={22} />}
          title="Refer and Earn"
        />
      </div>
      
      <div className="p-4 text-sm text-gray-500 flex justify-center space-x-4">
        <span>Privacy Policy</span>
        <span>•</span>
        <span>Logout</span>
        <span>•</span>
        <span>v4.0.1</span>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Account;

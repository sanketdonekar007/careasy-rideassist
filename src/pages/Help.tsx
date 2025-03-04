
import PageHeader from "@/components/common/PageHeader";
import BottomNavigation from "@/components/common/BottomNavigation";
import { ChevronRight, Info, Settings, RefreshCcw, Truck, CreditCard, Award, ShoppingBag, FileText, Shield } from "lucide-react";

const HelpItem = ({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) => (
  <div className="flex items-center justify-between p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors">
    <div className="flex items-center">
      <div className="text-brand-red mr-4">{icon}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
    <ChevronRight size={20} className="text-gray-400" />
  </div>
);

const Help = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-brand-red text-white">
        <PageHeader 
          title="Help & Support" 
          showBackButton={true}
        />
      </div>
      
      <div className="bg-white">
        <div className="flex justify-between items-center p-4 border-b">
          <div>
            <h2 className="font-semibold">Chat With Support</h2>
            <p className="text-sm text-gray-500">Live Agents Available 24 Hours</p>
          </div>
          <button className="text-brand-red font-medium">Chat</button>
        </div>
        
        <div className="divide-y">
          <HelpItem
            icon={<Info size={22} />}
            title="About GoMechanic"
            subtitle="Service Offered, Free Pickup"
          />
          
          <HelpItem
            icon={<Settings size={22} />}
            title="Service Categories"
            subtitle="Add-on Services, RSA"
          />
          
          <HelpItem
            icon={<RefreshCcw size={22} />}
            title="Service Booking"
            subtitle="Rescheduling, Cancelling"
          />
          
          <HelpItem
            icon={<Truck size={22} />}
            title="Pick-Up & Delivery"
            subtitle="Pick-Up Assurance, Valet Services"
          />
          
          <HelpItem
            icon={<CreditCard size={22} />}
            title="Payment Options"
            subtitle="Pay After Services, EMI"
          />
          
          <div className="flex items-center justify-between p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex items-center">
              <div className="bg-brand-red text-white text-xs px-2 py-0.5 rounded mr-4">Miles</div>
              <div>
                <h3 className="font-medium">GoMechanic Miles</h3>
                <p className="text-sm text-gray-500">AMC, Loyalty Bonus</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
          
          <HelpItem
            icon={<ShoppingBag size={22} />}
            title="Car Accessories"
            subtitle="Home Delivery, Shop Installation"
          />
          
          <HelpItem
            icon={<FileText size={22} />}
            title="Escalations & Feedback"
            subtitle="Customer Care, Service Buddy"
          />
          
          <HelpItem
            icon={<Shield size={22} />}
            title="Network Warranty"
            subtitle="Spare Parts, Warranty Validity"
          />
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Help;

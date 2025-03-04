
import PageHeader from "@/components/common/PageHeader";
import BottomNavigation from "@/components/common/BottomNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Share } from "lucide-react";

const Referral = () => {
  const steps = [
    {
      number: 1,
      description: "Refer your friend with your Unique Referral Code."
    },
    {
      number: 2,
      description: "Your Friend gets ₹ 1000 GoApp Money post installing the app."
    },
    {
      number: 3,
      description: "You get ₹ 1000 GoApp Money after their first order."
    }
  ];

  const handleShare = () => {
    // In a real app, this would use the Web Share API
    console.log("Sharing referral code");
  };

  const handleApplyCode = () => {
    // In a real app, this would validate and apply the referral code
    console.log("Applying referral code");
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <PageHeader title="Refer And Earn" />
      
      <div className="p-6 space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-6">How it works?</h2>
          
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-red text-white font-medium text-sm">
                    {step.number}
                  </div>
                  {step.number < steps.length && (
                    <div className="w-0.5 h-16 bg-brand-red mt-1"></div>
                  )}
                </div>
                <div className="text-gray-600 pt-1">{step.description}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="text-center text-gray-500 mb-4">Refer via</div>
          
          <div className="border border-blue-300 rounded-lg p-4 flex justify-between items-center mb-4">
            <div className="text-blue-500 font-medium">8149760321</div>
            <button onClick={handleShare}>
              <Share size={20} className="text-blue-500" />
            </button>
          </div>
          
          <Button
            onClick={handleShare}
            className="w-full bg-green-500 hover:bg-green-600 flex items-center justify-center py-6"
          >
            <span>Share via WhatsApp</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5 ml-2"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9 18L4 13L5.41 11.59L9 15.17L18.59 5.58L20 7L9 18Z" />
            </svg>
          </Button>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Your Earnings</h3>
            <span className="font-semibold">₹ 1500</span>
          </div>
          
          <div className="border-t border-dashed my-4"></div>
          
          <h3 className="font-medium mb-4">Avail Referral Discount</h3>
          
          <div className="flex items-center border rounded-lg overflow-hidden">
            <Input
              type="text"
              placeholder="Friend's Referral Code"
              className="border-0 flex-1"
            />
            <Button 
              onClick={handleApplyCode}
              className="bg-white hover:bg-white text-brand-red font-medium rounded-none border-l h-full"
            >
              APPLY
            </Button>
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Referral;

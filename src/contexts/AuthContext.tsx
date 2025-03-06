
import { createContext, useContext, useState, ReactNode } from "react";
import { sendOTP, verifyOTP } from "@/services/authService";
import { toast } from "sonner";

interface AuthContextType {
  phoneNumber: string;
  setPhoneNumber: (phone: string) => void;
  isVerifying: boolean;
  isVerified: boolean;
  sendVerificationCode: () => Promise<boolean>;
  verifyCode: (otp: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const sendVerificationCode = async (): Promise<boolean> => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast.error("Please enter a valid phone number");
      return false;
    }

    setIsVerifying(true);
    try {
      const formattedPhone = phoneNumber.startsWith("+") 
        ? phoneNumber 
        : `+91${phoneNumber}`;
      
      const response = await sendOTP(formattedPhone);
      
      if (response.success) {
        toast.success(response.message);
        return true;
      } else {
        toast.error(response.message);
        return false;
      }
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.");
      return false;
    } finally {
      setIsVerifying(false);
    }
  };

  const verifyCode = async (otp: string): Promise<boolean> => {
    if (!otp || otp.length !== 4) {
      toast.error("Please enter a valid OTP");
      return false;
    }

    setIsVerifying(true);
    try {
      const formattedPhone = phoneNumber.startsWith("+") 
        ? phoneNumber 
        : `+91${phoneNumber}`;
      
      const response = await verifyOTP(formattedPhone, otp);
      
      if (response.success) {
        setIsVerified(true);
        toast.success(response.message);
        return true;
      } else {
        toast.error(response.message);
        return false;
      }
    } catch (error) {
      toast.error("Failed to verify OTP. Please try again.");
      return false;
    } finally {
      setIsVerifying(false);
    }
  };

  const value = {
    phoneNumber,
    setPhoneNumber,
    isVerifying,
    isVerified,
    sendVerificationCode,
    verifyCode
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

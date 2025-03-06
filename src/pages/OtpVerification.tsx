
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useAuth } from "@/contexts/AuthContext";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();
  const { phoneNumber, verifyCode, sendVerificationCode } = useAuth();

  // Format the phone number for display
  const formattedPhone = phoneNumber.startsWith("+") 
    ? phoneNumber 
    : `+91${phoneNumber}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleVerify = async () => {
    if (otp.length === 4) {
      const success = await verifyCode(otp);
      if (success) {
        navigate("/select-vehicle");
      }
    }
  };

  const handleResend = async () => {
    if (timer === 0) {
      const success = await sendVerificationCode();
      if (success) {
        setTimer(30);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHeader title="" />
      
      <div className="px-6 py-8 max-w-md mx-auto">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-2xl font-semibold text-gray-800">
            We have sent a 4 digit OTP on
          </h1>
          
          <div className="flex items-center justify-between">
            <span className="text-lg">{formattedPhone}</span>
            <button 
              className="text-brand-red text-sm font-medium uppercase"
              onClick={() => navigate(-1)}
            >
              Edit
            </button>
          </div>
          
          <p className="text-gray-500 text-sm">
            Enter the OTP below to verify your number
          </p>
          
          <div className="flex justify-center py-4">
            <InputOTP
              value={otp}
              onChange={setOtp}
              maxLength={4}
              render={({ slots }) => (
                <InputOTPGroup>
                  {slots.map((slot, i) => (
                    <InputOTPSlot
                      key={i}
                      index={i}
                      {...slot}
                      className="w-14 h-14 text-xl border-gray-300"
                    />
                  ))}
                </InputOTPGroup>
              )}
            />
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={handleResend}
              disabled={timer > 0}
              className={`text-sm ${timer > 0 ? 'text-gray-400' : 'text-brand-red font-medium'}`}
            >
              {timer > 0 ? `Send again? (${timer}s)` : 'Send again?'}
            </button>
          </div>
          
          <Button 
            onClick={handleVerify}
            disabled={otp.length !== 4}
            className="w-full bg-brand-red hover:bg-red-600 transition-all"
          >
            VERIFY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;

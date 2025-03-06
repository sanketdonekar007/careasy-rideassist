
// This service would interact with a real backend API in a production environment

// Mock database for demonstration
const mockUsers = [
  { phoneNumber: "+918149760321", verified: false }
];

// The actual OTP we're expecting (in a real app, this would be generated and sent by SMS)
const MOCK_OTP = "5098";

export const sendOTP = async (phoneNumber: string): Promise<{ success: boolean; message: string }> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const userExists = mockUsers.some(user => user.phoneNumber === phoneNumber);
      
      if (!userExists) {
        // Add new user to mock database
        mockUsers.push({ phoneNumber, verified: false });
      }
      
      resolve({ 
        success: true, 
        message: "OTP sent successfully" 
      });
    }, 1000);
  });
};

export const verifyOTP = async (
  phoneNumber: string, 
  otp: string
): Promise<{ success: boolean; message: string }> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const userIndex = mockUsers.findIndex(user => user.phoneNumber === phoneNumber);
      
      if (userIndex === -1) {
        resolve({ 
          success: false, 
          message: "User not found" 
        });
        return;
      }
      
      if (otp === MOCK_OTP) {
        // Update user status
        mockUsers[userIndex].verified = true;
        
        resolve({ 
          success: true, 
          message: "OTP verified successfully" 
        });
      } else {
        resolve({ 
          success: false, 
          message: "Invalid OTP" 
        });
      }
    }, 1000);
  });
};

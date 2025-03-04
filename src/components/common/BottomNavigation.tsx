
import { Home, HelpCircle, Car, Users, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const BottomNavigation = () => {
  const navItems = [
    { path: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
    { path: "/help", label: "Help", icon: <HelpCircle className="w-5 h-5" /> },
    { path: "/my-vehicles", label: "My Vehicles", icon: <Car className="w-5 h-5" /> },
    { path: "/referral", label: "Referral", icon: <Users className="w-5 h-5" /> },
    { path: "/account", label: "Account", icon: <User className="w-5 h-5" /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center w-1/5 ${
              isActive ? "text-brand-red" : "text-gray-500"
            }`
          }
        >
          {item.icon}
          <span className="text-xs mt-1">{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNavigation;

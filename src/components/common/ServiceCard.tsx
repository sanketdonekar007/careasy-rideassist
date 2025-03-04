
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  to: string;
}

const ServiceCard = ({ icon, title, to }: ServiceCardProps) => {
  return (
    <Link
      to={to}
      className="flex flex-col items-center p-2 rounded-lg transition-all hover:bg-gray-50 active:scale-95"
    >
      <div className="w-12 h-12 flex items-center justify-center mb-2">
        {icon}
      </div>
      <p className="text-xs text-center font-medium">{title}</p>
    </Link>
  );
};

export default ServiceCard;

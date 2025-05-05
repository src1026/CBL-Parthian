import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaTags, FaBox, FaChartBar, FaGlobe, FaSearch
} from "react-icons/fa";
import { FiArrowLeftCircle } from "react-icons/fi";
import { AiOutlineShop } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveItem = () => {
    const path = location.pathname;
    if (path === "/") return "Marketplace";
    if (path === "/offers") return "Offers";
    if (path === "/orders") return "Orders";
    if (path === "/inventory") return "Inventory";
    if (path === "/sales") return "Sales";
    if (path === "/company") return "Company";
    return "";
  };

  const activeItem = getActiveItem();

  return (
    <div className="h-screen w-64 bg-white border-r px-4 py-6 flex flex-col justify-between">
      {/* Logo */}
      <div>
        {/* Navigation */}
        <nav className="space-y-6">
          <div className="text-sm text-green-500">Marketplace</div>
          <div className="space-y-4">
            <SidebarItem 
              icon={<AiOutlineShop />}
              text="Marketplace"  
              active={activeItem === "Marketplace"}
              onClick={() => navigate("/")}              
            />
            <SidebarItem 
              icon={<FaTags />} 
              text="Offers"
              active={activeItem === "Offers"}
              onClick={() => navigate("/offers")}
            />  
            <SidebarItem 
              icon={<FiShoppingBag/>} 
              text="Orders" 
              active={activeItem === "Orders"}
              onClick={() => navigate("/orders")}
            />
          </div>
          <div className="text-sm text-green-500 pt-6">Seller Tools</div>
          <div className="space-y-4">
            <SidebarItem 
              icon={<FaBox />} 
              text="Inventory" 
              active={activeItem === "Inventory"}
              onClick={() => navigate("/inventory")}
            />
            <SidebarItem 
              icon={<FaChartBar />} 
              text="Sales" 
              active={activeItem === "Sales"}
              onClick={() => navigate("/sales")}
            />
            <SidebarItem 
              icon={<FaGlobe />} 
              text="Company"
              active={activeItem === "Company"}
              onClick={() => navigate("/company")}
            />
          </div>

          <div className="text-sm text-gray-500 pt-6">Resources</div>
          <SidebarItem icon={<FaSearch />} text="Insight Lookup™" />
        </nav>
      </div>

      {/* Collapse button */}
      <div>
        <button className="flex items-center space-x-2 text-gray-400 hover:text-orange-500">
          <FiArrowLeftCircle size={20} />
          <span>Collapse</span>
        </button>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center space-x-3 px-2 py-2 rounded-md cursor-pointer transition-colors duration-200 ${
      active
        ? 'bg-green-50 text-green-600 font-medium'
        : 'text-gray-600 hover:bg-gray-50'
    }`}
  >
    <span className={`text-lg ${active ? 'text-green-500' : 'text-gray-400'}`}>
      {icon}
    </span>
    <span>{text}</span>
  </div>
);

export default Sidebar;
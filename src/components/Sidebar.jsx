import React, { useState } from "react";
import {
  FaTags, FaBox, FaChartBar, FaGlobe, FaSearch
} from "react-icons/fa";
import { FiArrowLeftCircle } from "react-icons/fi";
import { AiOutlineShop } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";

const Sidebar = () => {

  const [activeItem, setActiveItem] = useState("Marketplace");
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
            active ={activeItem === "Marketplace"}
            onClick={() =>{
              setActiveItem("Marketplace");
              window.location.href = "/";
            }
            }              
            />
            <SidebarItem 
            icon={<FaTags />} 
            text="Offers"
            active={activeItem === "Offers"}
            onClick={() => {
               setActiveItem("Offers");
               window.location.href = "/offers"; // <-- Redirects to /offers
               }}
            />  
            <SidebarItem 
            icon={<FiShoppingBag/>} 
            text="Orders" 
            active ={activeItem === "Orders"}
            onClick={() => {
              setActiveItem("Orders");
              window.location.href = "/orders";
            }}
            />
          </div>
          <div className="text-sm text-green-500 pt-6">Seller Tools</div>
          <div className="space-y-4">
            <SidebarItem 
            icon={<FaBox />} 
            text="Inventory" 
            active ={activeItem === "Inventory"}
            onClick={() => {
              setActiveItem("Inventory");
              window.location.href = "/inventory";
            }}
            />
            <SidebarItem 
            icon={<FaChartBar />} 
            text="Sales" 
            active ={activeItem === "Sales"}
            onClick={() => {
              setActiveItem("Sales");
              window.location.href = "/sales";
            }}
            />
            <SidebarItem 
            icon={<FaGlobe />} 
            text="Company"
            active ={activeItem === "Company"}
            onClick={() => {
              setActiveItem("Company");
              window.location.href = "/company";

            }} 
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
    className={`flex items-center space-x-3 px-2 py-2 rounded-md cursor-pointer ${
      active
        ? "bg-green-100 text-green-600 font-semibold"
        : "text-gray-700 hover:bg-gray-100"
    }`}
  >
    <div>{icon}</div>
    <span>{text}</span>
  </div>
);

export default Sidebar
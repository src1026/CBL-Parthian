import React from 'react'
import { Navbar } from "../components";
import { Link } from 'react-router-dom';
import Sidebar from "../components/Sidebar";


const CompanyPage = () => {
  <>
  <Navbar />
  <div className="flex min-h-screen">
  <div className="w-64 border-r">
    <Sidebar />
  </div>
  
  {/* Random element to confirm rendering */}
  <div className="p-4 text-xl font-bold text-blue-600">
    🧃 This is the company page! 🍒
  </div>
</div>

</>

};


export default CompanyPage;
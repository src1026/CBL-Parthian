import React, { useState, useEffect } from 'react';
import { Navbar } from "../components";
import Sidebar from "../components/Sidebar";
import { motion } from 'framer-motion';
import { FaBatteryFull, FaSolarPanel, FaLeaf, FaEnvelope, FaUsers, FaCog } from 'react-icons/fa';

const CompanyPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({
    teamMembers: 0,
    activeListings: 0
  });

  useEffect(() => {
    // 模拟数据加载动画
    const timer = setTimeout(() => {
      setStats({
        teamMembers: 12,
        activeListings: 8
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaLeaf className="mr-2" /> },
    { id: 'team', label: 'Team', icon: <FaUsers className="mr-2" /> },
    { id: 'settings', label: 'Settings', icon: <FaCog className="mr-2" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-50">
        <div className="w-64 border-r bg-white">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-900">Parthian Battery Solutions</h1>
            <p className="text-lg mt-2 text-gray-600">
              Bridging the Gap to Affordable Sustainability
            </p>
          </motion.div>

          {/* Tabs with Icons */}
          <div className="bg-white rounded-lg shadow-sm border mb-6">
            <nav className="flex space-x-8 p-4">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-2 px-4 rounded-md transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-green-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            {activeTab === 'overview' && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {/* Company Description */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-lg border p-8"
                >
                  <h2 className="text-2xl font-semibold mb-6 text-gray-800">About Us</h2>
                  <div className="space-y-6 text-gray-700">
                    <p className="text-xl font-medium text-green-600 leading-relaxed">
                      Choosing Parthian is choosing the cleaner, more affordable option
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <p className="leading-relaxed">
                          Parthian is actively ensuring the environmental and economic viability of our transition to a greener future.
                        </p>
                        <p className="leading-relaxed">
                          Have you ever wondered what happens to an electric vehicle's (EV) battery once it's replaced and retired from a car? To many's surprise, these batteries can still maintain upwards of 85% of their original capacity after their stint on the road.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <p className="leading-relaxed">
                          By effectively doubling their life and ensuring the most use and value are extracted from these batteries, Parthian offers lithium-ion technology at prices other manufacturers can't compete with.
                        </p>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <FaBatteryFull className="text-green-500 text-2xl mb-2" />
                          <p className="text-green-700 font-medium">Sustainable Battery Solutions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Products Section */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-lg border p-8"
                >
                  <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Solutions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                      <FaSolarPanel className="text-green-500 text-3xl mb-4" />
                      <h3 className="text-xl font-semibold text-green-700 mb-3">Break Your Utility Dependence</h3>
                      <p className="text-gray-700 mb-4">
                        Become your own source for power and gain independence from the grid when you pair our batteries with your solar installation.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          <span className="text-gray-700">7kWh Battery System</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          <span className="text-gray-700">11kWh Battery System</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                      <FaLeaf className="text-green-500 text-3xl mb-4" />
                      <h3 className="text-xl font-semibold text-green-700 mb-3">Environmental Impact</h3>
                      <p className="text-gray-700">
                        Our solutions help reduce carbon footprint and promote sustainable energy practices.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Stats Cards with Animation */}
                <motion.div 
                  variants={itemVariants}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {Object.entries(stats).map(([key, value]) => (
                    <motion.div 
                      key={key}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-lg shadow-lg border p-6"
                    >
                      <p className="text-sm text-gray-500 mb-2">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                      <p className="text-3xl font-bold text-green-600">{value}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Contact Information */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-lg border p-8"
                >
                  <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Us</h2>
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-green-500 text-2xl" />
                    <a 
                      href="mailto:sales@parthianwv.com" 
                      className="text-green-600 hover:text-green-700 text-lg font-medium"
                    >
                      sales@parthianwv.com
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Rest of the tabs with enhanced styling */}
            {activeTab === 'team' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-lg border">
                  <h2 className="text-2xl font-semibold text-gray-800">Team Members</h2>
                  <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors duration-200 flex items-center">
                    <FaUsers className="mr-2" />
                    Add Member
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-lg border p-8">
                  <p className="text-gray-500 text-center py-8">No team members added yet</p>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg border p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-800">Company Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Notification Preferences</label>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3">
                          <input 
                            type="checkbox" 
                            className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500" 
                          />
                          <span className="text-gray-700">Email notifications</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input 
                            type="checkbox" 
                            className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500" 
                          />
                          <span className="text-gray-700">SMS notifications</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Default Currency</label>
                      <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CompanyPage;
import React from 'react'
import { Navbar } from "../components";
import Sidebar from "../components/Sidebar";


const InventoryPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        <div className="w-64 border-r">
          <Sidebar />
        </div>

        {/* Main Inventory Content */}
        <div className="flex-1 p-6 bg-white">
          {/* Header and Description */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Inventory</h1>
            <p className="text-gray-600 text-sm mt-1">
              Unlisted Items are items in your Inventory that are not actively for sale on the Marketplace.
              To make items available for sale on the Marketplace, navigate to the Listings tab and select
              <span className="text-green-500 font-semibold cursor-pointer"> Create New Listing.</span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600">
              + Add Location
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600 ml-auto">
              Add Inventory
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Unlisted Items */}
            <div className="border-2 border-green-200 bg-green-50 rounded-lg p-4 flex items-center gap-4">
              <div className="bg-green-100 rounded-full p-3">
                <span className="text-green-500 text-xl">🛍️</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Unlisted Items</p>
                <p className="text-2xl font-bold">0</p>
              </div>
            </div>

            {/* Listings */}
            <div className="border bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm">
              <div className="bg-gray-100 rounded-full p-3">
                <span className="text-gray-600 text-xl">🏷️</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Listings</p>
                <p className="text-sm text-gray-500">Total Value: $0.00</p>
                <p className="text-2xl font-bold">0</p>
              </div>
            </div>

            {/* Sold Listings */}
            <div className="border bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm">
              <div className="bg-gray-100 rounded-full p-3">
                <span className="text-gray-600 text-xl">🎯</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Sold Listings</p>
                <p className="text-sm text-gray-500">Total Earned: $0.00</p>
                <p className="text-2xl font-bold">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};


export default InventoryPage
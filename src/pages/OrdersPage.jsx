import React from 'react';
import { Navbar } from "../components";
import Sidebar from "../components/Sidebar";

const OrdersPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 border-r">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-white">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
            <p className="text-sm text-gray-600">
              Track and manage all your orders in one place from pending confirmation to completed transactions. 
              <span className="text-green-500 font-semibold cursor-pointer"> Learn More</span>
            </p>
            <p className="text-sm text-green-600 mt-1">
              Please go to your Company page, open the Locations tab and add a location if you don't already have one.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { label: 'Ordered Listings', value: '0' },
              { label: 'Ordered Items', value: '0' },
              { label: 'Total Orders', value: '$0.00' },
            ].map((card, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-4 bg-white shadow-sm flex flex-col gap-1"
              >
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-gray-800">{card.label}</p>
                  <span className="text-gray-400 text-sm cursor-pointer">ℹ️</span>
                </div>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="🔍 Search Orders"
              className="w-full md:w-96 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* No Orders Message */}
          <div className="flex flex-col items-center justify-center text-center py-16">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <span className="text-green-500 text-3xl">🛍️</span>
            </div>
            <p className="text-lg font-semibold text-gray-800">No Orders Found</p>
            <p className="text-sm text-gray-600 mt-1">
              No orders placed yet, Start shopping now at{" "}
              <span className="font-medium text-gray-900 underline cursor-pointer">Marketplace</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersPage;

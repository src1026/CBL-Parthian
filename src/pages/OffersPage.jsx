import React from 'react';
import { Navbar } from "../components";
import Sidebar from "../components/Sidebar";

const OffersPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        <div className="w-64 border-r">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex-1 p-6 bg-white">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Offers</h1>
            <p className="text-gray-600 text-sm mt-1">
              Track offers, submit counter offers, and work toward the best price for both buyers and sellers.
              <span className="text-green-500 font-semibold cursor-pointer"> Learn More</span>
            </p>
          </div>

          {/* Button */}
          <div className="mb-6">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600">
              + Add Location
            </button>
          </div>

          {/* Offer sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* For Purchase */}
            <div className="border rounded-lg p-6 bg-gray-50 shadow-sm">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-2">
                <span>🛍️</span> For Purchase
              </h2>
              <p className="text-sm text-gray-600 mb-8">
                These are offers you have made to buy item(s) from someone else. If the seller accepts your offer, you'll be able to complete the purchase.
              </p>
              <div className="text-center text-gray-500">
                <div className="text-3xl mb-2">🛍️</div>
                <p className="text-base font-semibold">No Offers</p>
                <p className="text-sm mt-1">You do not have any active offers to any sellers. Once you make an offer, you can manage it here.</p>
              </div>
            </div>

            {/* For Sale */}
            <div className="border rounded-lg p-6 bg-gray-50 shadow-sm">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-2">
                <span>🏷️</span> For Sale
              </h2>
              <p className="text-sm text-gray-600 mb-8">
                These are offers others have made to buy item(s) you are selling. You can choose to accept, counter, or decline these offers.
              </p>
              <div className="text-center text-gray-500">
                <div className="text-3xl mb-2">🏷️</div>
                <p className="text-base font-semibold">No Offers</p>
                <p className="text-sm mt-1">You do not have any active offers to any buyers. Once an offer is made, you can manage it here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffersPage;

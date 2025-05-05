import React from 'react';
import { Navbar } from "../components";
import { FaBatteryFull, FaRecycle, FaLeaf, FaHandshake, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutPage = () => {
  const features = [
    {
      icon: <FaBatteryFull className="text-4xl text-green-600" />,
      title: "Battery Reuse",
      description: "We specialize in the second-life application of EV batteries, extending their lifecycle and reducing resource waste."
    },
    {
      icon: <FaRecycle className="text-4xl text-green-600" />,
      title: "Circular Economy",
      description: "Driving the circular economy in the battery industry through innovative recycling and reuse technologies."
    },
    {
      icon: <FaLeaf className="text-4xl text-green-600" />,
      title: "Sustainability",
      description: "Committed to reducing e-waste and carbon emissions, contributing to environmental protection."
    },
    {
      icon: <FaHandshake className="text-4xl text-green-600" />,
      title: "Partnerships",
      description: "Building strategic partnerships with leading battery manufacturers and recycling companies worldwide."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        {/* Company Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-5xl"
        >
          <h1 className="text-center text-4xl font-bold text-gray-900">
            About Parthian
          </h1>
          <p className="mt-4 text-center text-lg text-gray-600 max-w-3xl mx-auto">
            Parthian is an innovative company specializing in electric vehicle battery reuse. We are dedicated to contributing to the global battery circular economy through advanced technology and sustainable solutions.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 mx-auto w-full max-w-5xl"
        >
          <div className="bg-white py-8 px-6 shadow-lg sm:rounded-lg sm:px-10">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-green-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <p className="mt-1 text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Vision and Goals */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 mx-auto w-full max-w-5xl"
        >
          <div className="bg-white py-8 px-6 shadow-lg sm:rounded-lg sm:px-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-gray-600 mb-6 max-w-3xl">
              We strive to become the world's leading provider of battery reuse solutions, driving the green transformation of the battery industry through innovative technology and sustainable practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCheck className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Establish the world's largest battery reuse network</span>
                </div>
                <div className="flex items-start">
                  <FaCheck className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Achieve a battery recycling rate of over 95%</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCheck className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Reduce over 1 million tons of e-waste annually</span>
                </div>
                <div className="flex items-start">
                  <FaCheck className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Provide sustainable battery solutions to global clients</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 mx-auto w-full max-w-5xl"
        >
          <div className="bg-white py-8 px-6 shadow-lg sm:rounded-lg sm:px-10">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-green-50 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Experts</h3>
                <p className="text-gray-600">
                  Our team of battery technology experts brings decades of experience in battery research, development, and implementation.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-green-50 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Environmental Specialists</h3>
                <p className="text-gray-600">
                  Our environmental engineers and sustainability specialists ensure our operations meet the highest environmental standards.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutPage;
import React, { useState } from 'react';
import { FaShieldAlt, FaSeedling, FaCheckCircle, FaCogs, FaGlobeAmericas, FaIndustry } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, isOpen, toggleOpen }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-4 cursor-pointer" onClick={toggleOpen}>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {icon}
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
        ▼
      </span>
    </div>
    {isOpen && (
      <div className="mt-4">
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-lime-600 transition">
          Learn More
        </button>
      </div>
    )}
  </div>
);

const CompanyServices = () => {
  const [openService, setOpenService] = useState(null);

  const services = [
    {
      icon: <FaShieldAlt className="text-3xl text-blue-500" />,
      title: 'IP Protection',
      description: 'We prioritize the secure management and confidentiality of intellectual property, ensuring that your innovations are protected throughout our processes.'
    },
    {
      icon: <FaSeedling className="text-3xl text-green-500" />,
      title: 'Seed Handling',
      description: 'Our seed handling services encompass the full spectrum from production to packaging, ensuring superior quality and care at every stage.'
    },
    {
      icon: <FaCheckCircle className="text-3xl text-red-500" />,
      title: 'Quality Assurance',
      description: 'We apply rigorous quality control measures to meet and exceed industry standards, delivering seeds of the highest caliber.'
    },
    {
      icon: <FaCogs className="text-3xl text-purple-500" />,
      title: 'Customized Solutions',
      description: 'With extensive experience, we offer bespoke processing solutions designed to cater to your specific seed production needs.'
    },
    {
      icon: <FaGlobeAmericas className="text-3xl text-yellow-500" />,
      title: 'Field Production',
      description: 'We utilize a global network of seed farms to optimize yield and quality, taking advantage of various climatic and growing conditions.'
    },
    {
      icon: <FaIndustry className="text-3xl text-indigo-500" />,
      title: 'Advanced Facilities',
      description: 'Our cutting-edge technology and international grower partnerships position us as leaders in seed production and processing.'
    }
  ];

  const toggleService = (index) => {
    setOpenService(openService === index ? null : index);
  };

  return (
    <div className='bg-green-100/70 py-20'>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
          Our Key Services
        </h2>
        <div className="grid md:grid-cols-1 gap-6 mt-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              isOpen={openService === index}
              toggleOpen={() => toggleService(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyServices;

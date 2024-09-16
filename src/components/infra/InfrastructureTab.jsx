import React, { useState } from 'react';
import { FaSeedling, FaIndustry, FaCog, FaLeaf } from 'react-icons/fa';

const InfrastructureTab = () => {
    const [activeTab, setActiveTab] = useState('equipment');

    const infrastructureData = {
        equipment: {
            title: 'Our Equipment',
            description: 'State-of-the-art machinery for efficient seed processing.',
            image: '/OurEquipment.jpg',
            details: 'Our seed processing equipment includes cleaners, graders, dryers, and treatment machines designed for optimal seed quality.',
        },
        technology: {
            title: 'Advanced Technologies',
            description: 'Cutting-edge technologies enhancing seed processing efficiency.',
            image: '/AdvancedTechnologies.jpg',
            details: 'We implement AI-driven sorting systems, IoT-enabled monitoring, and automated quality control processes.',
        },
        facilities: {
            title: 'Processing Facilities',
            description: 'Modern facilities designed for optimal seed processing workflows.',
            image: '/ProcessingFacilities.jpg',
            details: 'Our facilities are equipped with climate-controlled storage, ergonomic workstations, and efficient logistics systems.',
        },
        sustainability: {
            title: 'Sustainable Practices',
            description: 'Eco-friendly approaches in seed processing infrastructure.',
            image: '/SustainablePractices.jpg',
            details: 'We incorporate renewable energy sources, water recycling systems, and biodegradable packaging solutions.',
        },
    };

    return (
        <div className="bg-gray-100 py-20">
            <div className='w-[90%] md:max-w-7xl mx-auto'>
                <h2 className="text-center font-bold text-3xl md:text-5xl mb-6 md:mb-8 text-green-800">
                    Processing Infrastructure
                </h2>
                <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Add horizontal scrolling for the tab buttons */}
                    <div className="flex border-b overflow-x-auto">
                        {Object.keys(infrastructureData).map((key) => (
                            <button
                                key={key}
                                className={`flex-1 py-4 px-6 text-base md:text-lg font-semibold focus:outline-none transition-colors duration-300 whitespace-nowrap ${activeTab === key ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-green-100'
                                    }`}
                                onClick={() => setActiveTab(key)}
                            >
                                {key === 'equipment' && <FaCog className="inline-block mr-2" />}
                                {key === 'technology' && <FaIndustry className="inline-block mr-2" />}
                                {key === 'facilities' && <FaSeedling className="inline-block mr-2" />}
                                {key === 'sustainability' && <FaLeaf className="inline-block mr-2" />}
                                {infrastructureData[key].title}
                            </button>
                        ))}
                    </div>

                    <div className="p-8">
                        <div className="md:flex items-center">
                            <div className="md:w-1/2 pr-8">
                                <h2 className="text-xl md:text-3xl font-bold text-green-700 mb-4">{infrastructureData[activeTab].title}</h2>
                                <p className="text-xl text-gray-600 mb-6">{infrastructureData[activeTab].description}</p>
                                <p className="text-gray-700">{infrastructureData[activeTab].details}</p>
                            </div>
                            <div className="md:w-1/2 mt-8 md:mt-0">
                                <img
                                    src={infrastructureData[activeTab].image}
                                    alt={infrastructureData[activeTab].title}
                                    className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfrastructureTab;

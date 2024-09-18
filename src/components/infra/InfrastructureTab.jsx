import React, { useState } from 'react';
import { FaSeedling, FaIndustry, FaCog, FaLeaf } from 'react-icons/fa';

const InfrastructureTab = () => {
    const [activeTab, setActiveTab] = useState('equipment');

    const infrastructureData = {
        equipment: {
            title: 'Advanced Seed Processing Equipment',
            description: 'Our equipment ensures precision and efficiency at every stage of seed processing.',
            image: '/OurEquipment.jpg',
            details: 'We leverage top-tier seed processing machinery, including cutting-edge cleaners, precision graders, advanced dryers, and effective seed treatment machines. Each machine is designed to optimize seed quality and reduce processing time, delivering consistent, high-quality results.',
        },
        technology: {
            title: 'Innovative Processing Technologies',
            description: 'Harnessing modern technologies to transform seed processing workflows.',
            image: '/AdvancedTechnologies.jpg',
            details: 'Our operations incorporate AI-powered sorting systems, IoT-based monitoring for real-time data analytics, and automated quality control, ensuring that each seed batch meets global standards. These technologies help us increase operational efficiency and reduce wastage.',
        },
        facilities: {
            title: 'World-Class Processing Facilities',
            description: 'State-of-the-art facilities designed to optimize seed processing.',
            image: '/ProcessingFacilities.jpg',
            details: 'Our modern facilities include climate-controlled storage units, ergonomic workstations, and highly efficient logistics systems that streamline the seed processing workflow. These infrastructure investments ensure smooth operations, high-quality output, and timely deliveries.',
        },
        sustainability: {
            title: 'Sustainable Seed Processing Practices',
            description: 'Eco-conscious infrastructure aimed at reducing environmental impact.',
            image: '/SustainablePractices.jpg',
            details: 'Our commitment to sustainability includes the use of renewable energy, water recycling systems, and biodegradable packaging materials. These practices not only reduce our carbon footprint but also ensure that we contribute positively to the environment while maintaining high standards in seed processing.',
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

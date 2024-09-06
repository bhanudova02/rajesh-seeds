import React from 'react';
import { FaLightbulb, FaRocket, FaHandshake, FaChartLine } from 'react-icons/fa';

export function VMV() {
    const content = {
        vision: 'We are driven by our vision to become the most competitive and sought-after service provider to Agriculture and allied institutions across the globe. We are now a growth partner in outsourced infrastructure, a manufacturer for the biggest names in the industry',
        mission: 'Our mission is to make quality products and provide quality services to our customers in turn leading to quality life for the farming community. We are dedicated to deliver the highest quality of customer satisfaction, with a sense of warmth, friendliness, individual pride, and care for the environment; always sustaining the company spirit.',
        values: [
            { icon: <FaLightbulb />, title: 'Innovation', description: 'Constantly pushing boundaries and exploring new ideas' },
            { icon: <FaRocket />, title: 'Excellence', description: 'Striving for the highest quality in everything we do' },
            { icon: <FaHandshake />, title: 'Collaboration', description: 'Working together to achieve common goals' },
            { icon: <FaChartLine />, title: 'Growth', description: 'Fostering personal and professional development' }
        ]
    };

    return (
        <div className="bg-gradient-to-br from-blue-100 to-purple-100">
            <div className="w-[90%] md:max-w-7xl mx-auto py-20">
                <div>
                    <div className=' flex flex-col justify-center items-center'>
                        <div className='border-2 border-lime-600 bg-white p-1 rounded-full'>
                            <img src="/leaf.png" alt='leaf' className='w-10 p-2' />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-800 mb-12">Our Vision & Mission</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
                            <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">Our Vision</h2>
                            <p className="text-gray-700">{content.vision}</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
                            <h2 className="text-xl md:text-2xl font-semibold text-purple-600 mb-4">Our Mission</h2>
                            <p className="text-gray-700">{content.mission}</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">Our Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {content.values.map((value, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition duration-500 hover:scale-105">
                                <div className="text-4xl text-indigo-500 mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-center">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

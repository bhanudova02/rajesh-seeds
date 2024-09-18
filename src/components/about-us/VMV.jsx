import React from 'react';
import { FaLightbulb, FaRocket, FaHandshake, FaChartLine, FaSeedling } from 'react-icons/fa';

export function VMV() {
    const content = {
        vision: 'Our vision is to be the leading and most trusted service provider in the agricultural sector globally. At Rajesh Seeds, we are committed to being a key partner in outsourced infrastructure and a manufacturer for the major industry players.',
        mission: 'Our mission is to deliver high-quality products and services that enhance the lives of farmers and the agricultural community. We aim to provide exceptional customer satisfaction with warmth, friendliness, and environmental care, while upholding the spirit of Rajesh Seeds.',
        values: [
            { icon: <FaLightbulb />, title: 'Innovation', description: 'Pushing boundaries and exploring new ideas to stay ahead' },
            { icon: <FaRocket />, title: 'Excellence', description: 'Striving for the highest standards in all our endeavors' },
            { icon: <FaHandshake />, title: 'Collaboration', description: 'Working together to achieve common goals and mutual success' },
            { icon: <FaChartLine />, title: 'Growth', description: 'Encouraging personal and professional development for continuous improvement' }
        ]
    };

    return (
        <div className="bg-slate-50">
            <div className="w-[90%] md:max-w-7xl mx-auto py-20">
                <div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='border-2 border-lime-600 bg-white p-2 rounded-full'>
                           <FaSeedling className='text-3xl'/>
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

import React from 'react';
import { FaSeedling, FaCheck, FaLeaf, FaUsers, FaCog, FaShieldAlt } from 'react-icons/fa';

const CommitmentQuality = () => {
    const services = [
        { icon: <FaSeedling />, title: 'Seed Production', description: 'Premium seed production on top-tier agricultural land' },
        { icon: <FaCheck />, title: 'Quality Control', description: 'Thorough quality checks at every stage of production' },
        { icon: <FaLeaf />, title: 'Cultivation', description: 'Advanced cultivation methods for optimal seed growth' },
        { icon: <FaUsers />, title: 'Expert Team', description: 'Skilled team of agricultural professionals' },
        { icon: <FaCog />, title: 'Processing', description: 'Cutting-edge processing technology' },
        { icon: <FaShieldAlt />, title: 'Guarantees', description: 'Guaranteed return of seeds that meet high industry standards' }
    ];

    return (
        <div>
            <div className='bg-green-50 py-20'>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <section className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600 mb-10">
                            Our Services
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
                                    <div className="text-4xl text-green-500 mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-semibold text-green-700 mb-2">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <div>
                <div className='bg-teal-200/10 py-20'>
                    <section className="max-w-7xl mx-auto px-6 lg:px-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-lime-600 mb-10">
                            Our Expertise
                        </h2>
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                                    <h3 className="text-2xl font-semibold text-green-600 mb-4">Care and Quality</h3>
                                    <p className="text-gray-700 mb-4">
                                        At RSPL, we handle seed cultivation and multiplication with the highest level of care, ensuring exceptional quality throughout the entire process. Our advanced facilities and skilled team are dedicated to upholding the highest standards in seed production.
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>Innovative cultivation techniques</li>
                                        <li>Strict quality control procedures</li>
                                        <li>Modern processing equipment</li>
                                        <li>Experienced agricultural professionals</li>
                                    </ul>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <img
                                        src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                        alt="Modern agricultural facility"
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CommitmentQuality;

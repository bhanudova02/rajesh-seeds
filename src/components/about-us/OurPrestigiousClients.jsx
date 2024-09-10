import { ClientsLogos } from '@/lib/data';
import React from 'react';
import { FaHandshake, FaIndustry, FaRegLightbulb, FaLeaf } from 'react-icons/fa';

export function OurPrestigiousClients() {
    return (
        <div className="bg-slate-50">
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-center font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r mb-12 from-green-500 to-green-800">
                        Our Prestigious Clients
                    </h2>

                    {/* Grid Layout for Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

                        {/* Card 1 */}
                        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                            <div className="flex items-center mb-4">
                                <FaHandshake className="text-3xl text-yellow-500" />
                                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                                    Industry Leadership
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                PSPL, as an industry leader, has established high standards by deeply understanding its customers' businesses.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                            <div className="flex items-center mb-4">
                                <FaIndustry className="text-3xl text-green-500" />
                                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                                    Customer Insights
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                With keen insight into the priorities of global agro companies, PSPL consistently meets their needs.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                            <div className="flex items-center mb-4">
                                <FaRegLightbulb className="text-3xl text-blue-500" />
                                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                                    Infrastructure & Quality
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                Our company's long-term investments in infrastructure enable stringent quality and cost control, strict adherence to regulatory compliances, and swift turnaround times.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                            <div className="flex items-center mb-4">
                                <FaLeaf className="text-3xl text-red-500" />
                                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                                    Innovation & Sustainability
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                PSPL's commitment to innovation ensures it stays ahead in a rapidly evolving market. Its focus on sustainability and excellence solidifies its position as a trusted partner.
                            </p>
                        </div>
                    </div>

                    <div className='shadow-md border-box-four bg-white p-10 mt-12 rounded-md'>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-12">
                            {ClientsLogos.map((data, index) => (
                                <div key={index} className="flex justify-center items-center border-2 shadow rounded-md ">
                                    <img
                                        src={data.img}
                                        alt={`Client ${index + 1}`}
                                        className="h-28 w-auto object-contain hover:opacity-80 transition-opacity duration-300 ease-in-out"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div >
    );
}

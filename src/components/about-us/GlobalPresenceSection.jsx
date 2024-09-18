import { globalPresenceData } from "@/lib/data";
import { useState } from "react";
import { FaGlobeAmericas, FaIndustry } from "react-icons/fa";

export function GlobalPresenceSection() {
    const [activeCountry, setActiveCountry] = useState('');
    return (
        <div className="bg-gray-100">
            <div className="w-[90%] md:max-w-7xl mx-auto py-20">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-8 text-center">
                        RSPL Global Presence
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
                            <FaGlobeAmericas className="text-5xl text-blue-600 mb-4" />
                            <h2 className="text-xl md:text-2xl font-semibold mb-2">Global Reach</h2>
                            <p className="text-gray-600">
                                RSPL has expanded its operations across multiple continents, serving farmers worldwide with innovative solutions.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
                            <FaIndustry className="text-5xl text-green-600 mb-4" />
                            <h2 className="text-xl md:text-2xl font-semibold mb-2">State-of-the-Art Facilities</h2>
                            <p className="text-gray-600">
                                Our cutting-edge seed processing plants guarantee the highest quality products for our global clientele.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                        <h2 className="text-xl md:text-3xl font-semibold mb-6 text-center">Our Global Footprint</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {globalPresenceData.map((country) => (
                                <button
                                    key={country.name}
                                    className={`p-4 rounded-lg transition-colors ${activeCountry === country.name ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                    onClick={() => setActiveCountry(country.name)}
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <img src={country.img} alt={country.name} className="w-6 md:w-14" />
                                        <h3 className="text-sm md:text-xl font-semibold">{country.name}</h3>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="bg-teal-50 rounded-lg shadow-lg p-8">
                        <img src="/map_infographic.png" alt="Global Presence" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}

import { FaClock, FaAppleAlt, FaShieldAlt, FaBox, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';

export function FeedWhyChooseUs() {
    return (
        <div className="bg-white py-20">
            <div className="w-[90%] md:max-w-7xl mx-auto">
                <h2 className="text-center font-bold text-3xl md:text-5xl mb-8">
                    Why <span className="text-green-600">Choose Us</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="p-6 bg-blue-50 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-50">
                        <div className="flex items-center mb-4">
                            <FaClock className="text-2xl text-green-600 mr-4" />
                            <h1 className="text-xl font-bold text-green-600">01</h1>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Ready for Immediate Use</h2>
                        <p className="text-gray-600">Conveniently packaged for immediate use, saving you valuable time in feed preparation.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 bg-blue-50 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-50">
                        <div className="flex items-center mb-4">
                            <FaAppleAlt className="text-2xl text-green-600 mr-4" />
                            <h1 className="text-xl font-bold text-green-600">02</h1>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">High Nutritional Value</h2>
                        <p className="text-gray-600">Packed with essential nutrients to enhance livestock health and productivity.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 bg-blue-50 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-50">
                        <div className="flex items-center mb-4">
                            <FaShieldAlt className="text-2xl text-green-600 mr-4" />
                            <h1 className="text-xl font-bold text-green-600">03</h1>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">UV-Resistant Packaging</h2>
                        <p className="text-gray-600">Our products are packed with UV protection to ensure freshness and quality for up to a year.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-6 bg-blue-50 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-50">
                        <div className="flex items-center mb-4">
                            <FaBox className="text-2xl text-green-600 mr-4" />
                            <h1 className="text-xl font-bold text-green-600">04</h1>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Compact Bale Design</h2>
                        <p className="text-gray-600">Efficient storage solutions with compact bales that save space without sacrificing quality.</p>
                    </div>

                    {/* Card 5 */}
                    <div className="p-6 bg-blue-50 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-50">
                        <div className="flex items-center mb-4">
                            <FaCalendarAlt className="text-2xl text-green-600 mr-4" />
                            <h1 className="text-xl font-bold text-green-600">05</h1>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Year-Round Availability</h2>
                        <p className="text-gray-600">Ensuring a constant supply of feed throughout the year for uninterrupted livestock care.</p>
                    </div>

                    {/* Card 6 */}
                    <div className="p-6 bg-blue-50 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-50">
                        <div className="flex items-center mb-4">
                            <FaDollarSign className="text-2xl text-green-600 mr-4" />
                            <h1 className="text-xl font-bold text-green-600">06</h1>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Competitive Pricing</h2>
                        <p className="text-gray-600">Affordable pricing that helps manage your budget while reducing dependence on expensive feed.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

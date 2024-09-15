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
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Instant & Ready to Use</h2>
                        <p className="text-gray-600">Conveniently packaged for immediate use, saving you time and effort in feed preparation.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 bg-blue-50 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-50">
                        <div className="flex items-center mb-4">
                            <FaAppleAlt className="text-2xl text-green-600 mr-4" />
                            <h1 className="text-xl font-bold text-green-600">02</h1>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">High Nutrition Content</h2>
                        <p className="text-gray-600">Enriched with essential nutrients to boost milk production and overall livestock health.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 bg-blue-50 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-50">
                        <div className="flex items-center mb-4">
                            <FaShieldAlt className="text-2xl text-green-600 mr-4" />
                            <h1 className="text-xl font-bold text-green-600">03</h1>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">UV Protected Packing</h2>
                        <p className="text-gray-600">Packed with UV protection to maintain freshness and quality for up to 12 months.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-6 bg-blue-50 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-50">
                        <div className="flex items-center mb-4">
                            <FaBox className="text-2xl text-green-600 mr-4" />
                            <h1 className="text-xl font-bold text-green-600">04</h1>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Compact Bale Size</h2>
                        <p className="text-gray-600">Designed for efficient storage, allowing you to maximize space without compromising on quality.</p>
                    </div>

                    {/* Card 5 */}
                    <div className="p-6 bg-blue-50 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-50">
                        <div className="flex items-center mb-4">
                            <FaCalendarAlt className="text-2xl text-green-600 mr-4" />
                            <h1 className="text-xl font-bold text-green-600">05</h1>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Year-Round Supply</h2>
                        <p className="text-gray-600">Consistent availability throughout the year ensures your livestock never run out of essential feed.</p>
                    </div>

                    {/* Card 6 */}
                    <div className="p-6 bg-blue-50 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-50">
                        <div className="flex items-center mb-4">
                            <FaDollarSign className="text-2xl text-green-600 mr-4" />
                            <h1 className="text-xl font-bold text-green-600">06</h1>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Affordable Price</h2>
                        <p className="text-gray-600">Cost-effective solution that reduces reliance on concentrated feed, making it easier on your budget.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

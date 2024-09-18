import { FaLeaf, FaGlobeAmericas, FaAward } from 'react-icons/fa';

export function FeedOurStrengths() {
    return (
        <div className="bg-blue-50/70 py-20">
            <div className="w-[90%] md:max-w-7xl mx-auto">
                <h2 className="text-center font-bold text-3xl md:text-5xl mb-6 md:mb-8">
                    Our Advantages
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                        <FaLeaf className="text-4xl text-green-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-blue-900">Advanced European Baling Methods for Enhanced Quality</h3>
                        <p className="text-gray-600">Employing state-of-the-art European baling techniques to deliver superior quality products.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                        <FaGlobeAmericas className="text-4xl text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-blue-900">Global Expertise Now Available in India</h3>
                        <p className="text-gray-600">Introducing global agricultural practices and innovations to the Indian agricultural sector.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                        <FaAward className="text-4xl text-yellow-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-blue-900">India's Premier Branded Baled Corn Silage</h3>
                        <p className="text-gray-600">Leading the market with our top-tier, branded baled corn silage offerings.</p>
                    </div>
                </div>
                <div className="mt-6">
                    <img src="/brown-bulls-standing-dry-grass-barn.jpg" alt="Bulls in dry grass barn" className="w-full h-auto rounded-xl object-cover" />
                </div>
            </div>
        </div>
    );
}

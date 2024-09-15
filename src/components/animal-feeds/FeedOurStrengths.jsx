import { FaLeaf, FaGlobeAmericas, FaAward } from 'react-icons/fa';

export function FeedOurStrengths() {
    return (
        <div className="bg-blue-50/70 py-20">
            <div className="w-[90%] md:max-w-7xl mx-auto">
                <h2 className="text-center font-bold text-3xl md:text-5xl mb-6 md:mb-8">
                    Our Strengths
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                        <FaLeaf className="text-4xl text-green-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-blue-900">European Baling Technology for Superior Quality</h3>
                        <p className="text-gray-600">Utilizing cutting-edge European baling techniques to ensure top-notch quality in our products.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                        <FaGlobeAmericas className="text-4xl text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-blue-900">Global Concept Now in India</h3>
                        <p className="text-gray-600">Bringing world-class agricultural practices and innovations to the Indian market.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                        <FaAward className="text-4xl text-yellow-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-blue-900">India's First Branded Baled Corn Silage</h3>
                        <p className="text-gray-600">Pioneering the market with our premium, branded baled corn silage products.</p>
                    </div>
                </div>
                <img src="/brown-bulls-standing-dry-grass-barn.jpg" alt='image' className='w-full h-full rounded-xl mt-6'/>
            </div>
        </div>
    )
}
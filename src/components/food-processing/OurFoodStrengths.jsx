import { FaTractor, FaLeaf, FaShippingFast, FaSnowflake, FaCertificate, FaHandshake, FaGlobeAmericas } from 'react-icons/fa';

export function OurFoodStrengths() {
    const strengths = [
        { icon: <FaTractor className="text-2xl text-green-600" />, text: "State-of-the-art processing facility for cut vegetables, frozen fruits and vegetables, and value-added products." },
        { icon: <FaGlobeAmericas className="text-2xl text-blue-600" />, text: "Export-oriented units: We deliver premium frozen fruits and vegetables to international markets, meeting global quality standards." },
        { icon: <FaShippingFast className="text-2xl text-yellow-600" />, text: "Efficient Logistics: With a focus on timely deliveries, our efficient logistics network guarantees that our produce reaches global markets without compromising quality." },
        { icon: <FaSnowflake className="text-2xl text-blue-500" />, text: "IQF Facility: Our advanced IQF facility rapidly freezes produce, preserving its freshness and nutrients for optimal quality." },
        { icon: <FaLeaf className="text-2xl text-green-700" />, text: "Integrated cold chain facility recognized by the Government of India." },
        { icon: <FaCertificate className="text-2xl text-gray-600" />, text: "Good Agricultural Practices (GAP) certification." },
        { icon: <FaHandshake className="text-2xl text-green-600" />, text: "We stand by our farmers as much as we stand by our clients - from 'Plough to Plate'." },
        { icon: <FaGlobeAmericas className="text-2xl text-blue-600" />, text: "We take pride in being a reliable partner for both domestic and international clients." }
    ];

    return (
        <div className="bg-[#F3F4F6] py-20">
            <div className="w-[90%] md:max-w-7xl mx-auto">
                <h2 className="text-center font-bold text-3xl md:text-5xl mb-8">Our <span className="text-green-600">Strengths</span></h2>
                <p className="text-lg text-gray-700 mb-10 text-center">
                    Rajesh Seeds (RSPL) is dedicated to delivering the highest quality fresh and frozen fruits and vegetables. Our mission is to bring the finest produce from farm to plate while preserving essential flavors, nutrients, and freshness that make our products stand out.
                </p>
                <div className="bg-gray-50 rounded-lg shadow-sm shadow-green-100 p-8 mb-12">
                    <h4 className="text-xl md:text-2xl font-semibold text-green-600 mb-4">Plough-to-Plate</h4>
                    <p className="text-gray-700">
                        Beyond preserving quality, we are committed to adding value at each stage of the Fruits and Vegetables (F&V) value chain. Through collaborations with farmers, technological interventions, and efficient processing, we enhance marketability and shelf life of our products. This approach not only benefits consumers but also contributes to higher income and reduced losses for growers. As we continue to expand our reach and product offerings, our core commitment remains to deliver farm fresh goodness in every bite, no matter where you are.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-6">Our Differentiators</h3>
                        <ul className="space-y-6">
                            {strengths.map((strength, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-green-500 mr-4 text-2xl">{strength.icon}</span>
                                    <span className="text-gray-700">{strength.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                        <img
                            src="/FoodStrengths.jpg"
                            alt="Fresh produce"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-green-600 opacity-20"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                            <h4 className="text-white text-xl md:text-2xl font-bold">Farm Fresh Goodness</h4>
                            <p className="text-white mt-2">From our farms to your plate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { FaLeaf, FaSnowflake, FaGlobeAmericas, FaAppleAlt } from 'react-icons/fa';

export function FoodWhyChooseUs() {
    const features = [
        {
            id: '01',
            title: 'Expertise',
            description: 'We provide top-quality fruits and vegetables with our extensive industry experience, ensuring the best products.',
            icon: <FaLeaf className="text-4xl text-green-500 mb-4" />
        },
        {
            id: '02',
            title: 'IQF Facility',
            description: 'Our advanced IQF facility rapidly freezes produce, preserving its freshness and nutrients for optimal quality.',
            icon: <FaSnowflake className="text-4xl text-blue-500 mb-4" />
        },
        {
            id: '03',
            title: 'Export-oriented Units',
            description: 'We deliver premium fruits and vegetables to international markets, meeting global quality standards.',
            icon: <FaGlobeAmericas className="text-4xl text-indigo-500 mb-4" />
        },
        {
            id: '04',
            title: 'Multiple Food Products',
            description: 'We offer a wide range of fresh, frozen, and value-added food products to meet diverse market needs.',
            icon: <FaAppleAlt className="text-4xl text-red-500 mb-4" />
        }
    ];

    return (
        <div className="bg-slate-50 py-20">
            <div className="w-[90%] md:max-w-7xl mx-auto">
                <h2 className="text-center font-bold text-3xl md:text-5xl mb-6">Why <span className="text-blue-600">Choose Us</span></h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    Our commitment to quality and innovation in the food industry ensures you get the best products and support.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.id} className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="flex flex-col justify-center items-center">
                                {feature.icon}
                                <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
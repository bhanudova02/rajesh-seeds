import { FaLeaf, FaSnowflake, FaSeedling, FaCarrot } from 'react-icons/fa';

export function FoodWhatWeOffer() {
    const offerings = [
        {
            title: 'Y&G-Fresh',
            description: 'Our selection of farm-fresh fruits and vegetables, handpicked for their quality and flavor, offering you the best that each season has to offer.',
            icon: <FaLeaf className="text-2xl md:text-3xl text-green-600 mb-2" />,
            image: '/food_box.jpg'
        },
        {
            title: 'Y&G-Frozen',
            description: 'A premium range of frozen fruits and vegetables, RTEs that locks in freshness and nutrients, providing healthy, delicious options year-round.',
            icon: <FaSnowflake className="text-2xl md:text-3xl text-blue-600 mb-2" />,
            image: '/food_box2.jpg'
        },
        {
            title: 'Y&G-Horticulture',
            description: 'Sustainable farming practices that ensure our produce is fresh, delicious, and grown with care for the environment.',
            icon: <FaSeedling className="text-2xl md:text-3xl text-yellow-600 mb-2" />,
            image: '/food_box3.jpg'
        },
        {
            title: 'Y&G-Value-Adds',
            description: 'A variety of value-added products, including pre-cut veggies, mixed fruit packs, and gourmet dips, making healthy eating convenient and tasty.',
            icon: <FaCarrot className="text-2xl md:text-3xl text-orange-600 mb-2" />,
            image: 'food_box4.jpg'
        }
    ];
    return (
        <div className="bg-white py-20">
            <div className="w-[90%] md:max-w-7xl mx-auto">
                <h2 className="text-center font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#00C2B0] mb-8">
                    What <span className="text-green-600">We Offer</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offerings.map((offering, index) => (
                        <div key={index} className="bg-blue-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
                            <img src={offering.image} alt={offering.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <div className="flex items-center mb-2">
                                    {offering.icon}
                                    <h2 className="font-bold text-green-600 text-lg md:text-xl ml-2">{offering.title}</h2>
                                </div>
                                <p className="text-gray-700">{offering.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
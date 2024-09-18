import { FaIndustry, FaSnowflake, FaWarehouse } from 'react-icons/fa';

export function FoodInfrastructure() {
    const capacities = [
        { icon: <FaIndustry />, title: 'IQF Line Capacity', value: '4 MT/Hour' },
        { icon: <FaSnowflake />, title: 'Blast Freezer Capacity', value: '38 MT' },
        { icon: <FaWarehouse />, title: 'Frozen Store Capacity', value: '300+ MT' },
    ];

    return (
        <div className='bg-gray-50 py-20'>
            <div className="w-[90%] md:max-w-7xl mx-auto">
                <div>
                    <h2 className="text-center font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600 mb-8">
                        Our Infrastructure
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%] md:w-full mx-auto text-center md:text-start">
                        {capacities.map((capacity, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus-within:ring-2 focus-within:ring-blue-400 focus-within:outline-none"
                                tabIndex="0"
                            >
                                <div className="text-4xl text-blue-500 mb-4  flex justify-center items-center md:justify-normal md:items-start">{capacity.icon}</div>
                                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-700">{capacity.title}</h3>
                                <p className="text-xl md:text-3xl font-bold text-blue-600">{capacity.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
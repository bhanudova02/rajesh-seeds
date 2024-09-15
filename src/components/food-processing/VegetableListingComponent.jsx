import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

const vegetables = [
    { name: 'Carrot', image: '/carrot.png', category: 'Root', description: 'Y&G Fresh: Our selection of farm-fresh fruits and vegetables, handpicked for their quality and flavor, offering you the best that each season has to offer.' },
    { name: 'Cauliflower', image: '/cauliflower.png', category: 'Cruciferous', description: 'Y&G Frozen: A premium range of frozen fruits and vegetables, RTEs that lock in freshness and nutrients, providing healthy, delicious options year-round.' },
    { name: 'Beet Root', image: '/beetroot.png', category: 'Root', description: 'Y&G Fresh: Sustainably grown and handpicked to ensure top quality and flavor.' },
    { name: 'Potato', image: '/potato.png', category: 'Root', description: 'Y&G Value Adds: Pre-cut, ready-to-cook potato options for your convenience.' },
    { name: 'Bitter Gourd', image: '/gourd.png', category: 'Gourd', description: 'Y&G Horticulture: Sustainably farmed and grown with care for the environment.' },
    { name: 'Onion', image: '/onion.png', category: 'Bulb', description: 'Y&G Value Adds: Pre-cut onions that save you time and effort in the kitchen.' },
    { name: 'Sweet Corn', image: '/corn.png', category: 'Bulb', description: 'Y&G Fresh: Crisp and sweet, our farm-fresh corn is packed with flavor.' },
    { name: 'Bell Pepper', image: '/bell-pepper.png', category: 'Bulb', description: 'Y&G Fresh: Colorful and flavorful, perfect for salads and stir-fries.' },
    { name: 'Edamame', image: '/edamame.png', category: 'Bulb', description: 'Y&G Frozen: Frozen edamame for a quick, healthy snack anytime.' },
    { name: 'Green Chilli', image: '/green-chilli.png', category: 'Fruit', description: 'Y&G Fresh: Spicy and fresh, handpicked for bold flavor.' },
    { name: 'Okra', image: '/okra.png', category: 'Fruit', description: 'Y&G Horticulture: Fresh okra grown sustainably for a delicious taste.' },
    { name: 'Tomato', image: '/tomato.png', category: 'Fruit', description: 'Y&G Fresh: Juicy and ripe, perfect for sauces, salads, and more.' },
    { name: 'Green Peas', image: '/GreenPeasIcon.png', category: 'Legume', description: 'Y&G Frozen: Our frozen peas retain their natural sweetness and nutrition.' },
    { name: 'Spinach', image: '/SpinachIcon.png', category: 'Leafy Green', description: 'Y&G Horticulture: Fresh spinach, packed with vitamins and grown sustainably.' },
    { name: 'Garlic', image: '/GarlicIcon.png', category: 'Bulb', description: 'Y&G Value Adds: Pre-peeled garlic, making cooking quick and easy.' },
    { name: 'Drumstick', image: '/DrumstickIcon.png', category: 'Fruit', description: 'Y&G Fresh: Nutritious drumsticks, perfect for soups and curries.' }
];

const VegetableListingComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedVegetable, setSelectedVegetable] = useState(null);

    const filteredVegetables = vegetables.filter(vegetable =>
        vegetable.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === '' || vegetable.category === selectedCategory)
    );

    const categories = [...new Set(vegetables.map(v => v.category))];

    const handleVegetableClick = (vegetable) => {
        setSelectedVegetable(vegetable);
    };

    return (
        <div className='bg-gray-100 '>
            <div className="w-[90%] md:max-w-7xl mx-auto py-20">
                <h2 className="text-center font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-sky-600 mb-8">
                    We Deal With
                </h2>
                <div className="flex flex-col md:flex-row justify-between mb-6">
                    <div className="relative mb-4 md:mb-0">
                        <input
                            type="text"
                            placeholder="Search vegetables"
                            className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-green-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    </div>

                    <div className="relative">
                        <select
                            className="w-full md:w-48 pl-10 pr-4 py-2 rounded-lg border appearance-none focus:outline-none focus:border-green-500"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="">All Categories</option>
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                        <FaFilter className="absolute left-3 top-3 text-gray-400" />
                    </div>
                </div>

                {filteredVegetables.length === 0 ? (
                    <p className="text-center text-gray-500">No vegetables found matching your search.</p>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {filteredVegetables.map((vegetable) => (
                            <div
                                key={vegetable.name}
                                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-green-500"
                                onClick={() => handleVegetableClick(vegetable)}
                                tabIndex="0"
                                onKeyPress={(e) => e.key === 'Enter' && handleVegetableClick(vegetable)}
                            >
                                <img
                                    src={vegetable.image}
                                    alt={vegetable.name}
                                    className="w-full h-20 md:h-32 object-contain pt-6"
                                />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold mb-2">{vegetable.name}</h2>
                                    <p className="text-sm text-gray-600">{vegetable.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {selectedVegetable && (
                    <div className="fixed inset-0 top-14 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg p-8 max-w-md w-full">
                            <img
                                src={selectedVegetable.image}
                                alt={selectedVegetable.name}
                                className="w-full h-64 object-contain rounded-lg mb-4"
                            />
                            <h2 className="text-2xl font-bold mb-2">{selectedVegetable.name}</h2>
                            <p className="text-gray-600 mb-4">Category: {selectedVegetable.category}</p>
                            <p className="text-gray-700 mb-4">
                                {selectedVegetable.description}
                            </p>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                onClick={() => setSelectedVegetable(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VegetableListingComponent;

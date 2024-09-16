import { FaWarehouse, FaSnowflake, FaCogs, FaBoxes } from "react-icons/fa"; // You can use any icon library you prefer

export function Infrastructure() {
    return (
        <div className="bg-slate-50 py-20">
            <div className="w-[90%] md:max-w-7xl mx-auto text-center">
                <h2 className="text-center font-bold text-3xl md:text-5xl mb-6 md:mb-8">
                    Our <span className="text-blue-800">Infrastructure</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <FaCogs className="text-4xl text-orange-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-semibold text-gray-700 mb-2">28+</h3>
                        <p className="text-lg text-gray-500">Drying Units</p>
                    </div>
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <FaSnowflake className="text-4xl text-blue-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-semibold text-gray-700 mb-2">12+</h3>
                        <p className="text-lg text-gray-500">MT Cold Storage Support</p>
                    </div>
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <FaCogs className="text-4xl text-green-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-semibold text-gray-700 mb-2">20+</h3>
                        <p className="text-lg text-gray-500">Conditioning Units</p>
                    </div>
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <FaWarehouse className="text-4xl text-purple-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-semibold text-gray-700 mb-2">3,000</h3>
                        <p className="text-lg text-gray-500">MT Warehouse Capacity</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

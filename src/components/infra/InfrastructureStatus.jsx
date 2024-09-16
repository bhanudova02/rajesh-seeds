import {  FaInfoCircle, FaChartBar } from 'react-icons/fa';
export function InfrastructureStatus() {
    return (
        <div>
            <div className="bg-blue-50 py-20">
                <div className="w-[90%] md:max-w-7xl mx-auto">

                    <section className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                            <FaInfoCircle className="mr-2 text-green-600" />
                            Visual Representation
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src="/VisualRepresentation.jpg"
                                    alt="Seed Processing Equipment"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">State-of-the-art Equipment</h3>
                                    <p className="text-gray-600">Our facility uses cutting-edge technology for efficient seed processing.</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src="/State-of-the-art.jpg"
                                    alt="Seed Quality Control"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">Quality Control</h3>
                                    <p className="text-gray-600">Rigorous testing ensures the highest quality seeds for our customers.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="data" className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                            <FaChartBar className="mr-2 text-green-600" />
                            Seed Processing Data
                        </h2>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">Annual Seed Processing Capacity</h3>
                            <div className="h-64 flex items-end justify-around bg-gray-100 rounded-lg">
                                <div className="w-1/4 bg-green-500 rounded-t-lg" style={{ height: '60%' }}>
                                    <div className="text-center mt-2 text-white font-bold">2019</div>
                                    <div className="text-center mt-1 text-white">60,000 tons</div>
                                </div>
                                <div className="w-1/4 bg-green-600 rounded-t-lg" style={{ height: '75%' }}>
                                    <div className="text-center mt-2 text-white font-bold">2020</div>
                                    <div className="text-center mt-1 text-white">75,000 tons</div>
                                </div>
                                <div className="w-1/4 bg-green-700 rounded-t-lg" style={{ height: '90%' }}>
                                    <div className="text-center mt-2 text-white font-bold">2021</div>
                                    <div className="text-center mt-1 text-white">90,000 tons</div>
                                </div>
                                <div className="w-1/4 bg-green-800 rounded-t-lg" style={{ height: '100%' }}>
                                    <div className="text-center mt-2 text-white font-bold">2022</div>
                                    <div className="text-center mt-1 text-white">100,000 tons</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
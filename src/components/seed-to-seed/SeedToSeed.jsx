import { FaSeedling } from "react-icons/fa";

export function SeedToSeed() {
    return (
        <div className="bg-[#CCD8C0] py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <FaSeedling className="text-5xl text-green-600 mx-auto mb-4" />
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                        Seed-To-Seed Excellence
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            At PSPL, we offer comprehensive 'Seed-to-Seed' services, handling every step with expertise and dedication. Our prime agricultural land and commitment to quality ensure your seeds are cultivated and multiplied with utmost care.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our state-of-the-art facilities and experienced team guarantee that your entrusted seeds will be returned in greater quantities, meeting the highest industry standards.
                        </p>
                        <div className="mt-8">
                            <a href="#" className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Seed-to-Seed Process"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">Grow with Us</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


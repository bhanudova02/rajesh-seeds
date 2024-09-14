import { FaShieldAlt, FaSeedling, FaStar, FaTools, FaHandsHelping, FaTruck } from 'react-icons/fa';

export function WhyChooseUs() {
    const features = [
        {
            icon: <FaShieldAlt className="text-2xl md:text-4xl text-indigo-500 group-hover:text-white transition-colors duration-300" />,
            title: 'IP Protection',
            description: 'We prioritize genetic resource preservation, ensure confidentiality, and adhere to industry standards for seed IP protection.'
        },
        {
            icon: <FaSeedling className="text-2xl md:text-4xl text-lime-500 group-hover:text-white transition-colors duration-300" />,
            title: 'Vast Experience',
            description: 'With over 35 years of expertise, we have perfected our seed processing techniques using a wealth of knowledge and historical data.'
        },
        {
            icon: <FaStar className="text-2xl md:text-4xl text-yellow-500 group-hover:text-white transition-colors duration-300" />,
            title: 'Quality of Seeds',
            description: 'We utilize industry standards to produce high-quality seeds, ensuring improved crop yields in our advanced facilities.'
        },
        {
            icon: <FaTools className="text-2xl md:text-4xl text-blue-500 group-hover:text-white transition-colors duration-300" />,
            title: 'Infrastructure',
            description: 'We provide full support, from land to ongoing management, for clients requiring dedicated infrastructure.'
        },
        {
            icon: <FaHandsHelping className="text-2xl md:text-4xl text-green-500 group-hover:text-white transition-colors duration-300" />,
            title: 'Client-Centric',
            description: 'We meticulously tailor our seed processing lines to match the unique requirements of every client.'
        },
        {
            icon: <FaTruck className="text-2xl md:text-4xl text-red-500 group-hover:text-white transition-colors duration-300" />,
            title: 'Commitment',
            description: 'We guarantee prompt delivery of high-quality processed seeds, enabling clients to carry out their plans on time.'
        }
    ];

    return (
        <div className="py-20 bg-[#FCFAE9]">
            <div className="max-w-7xl mx-auto px-8 md:px-14 lg:px-8">
                <section>
                    <div>
                        <h2 className="text-center font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-sky-600 mb-8">
                            Why Choose Us
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-lg p-6 group hover:bg-indigo-600 transition-colors duration-300 cursor-pointer"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="mb-4">{feature.icon}</div>
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <img
                            src="/SeedProcessingBottom.jpg"
                            alt="SeedProcessingBottom"
                            className="rounded-lg mx-auto h-full w-full object-contain"
                        />
                        <p className="mt-4 text-black max-w-2xl mx-auto f font-semibold bg-green-400/10 rounded-2xl p-4 ">
                            Join thousands of satisfied customers who have chosen us for their business needs. Experience the difference of working with a team dedicated to your success.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

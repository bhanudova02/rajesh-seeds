import { FaShieldAlt, FaSeedling, FaStar, FaTools, FaHandsHelping, FaTruck } from 'react-icons/fa';

export function WhyChooseUs() {
    const features = [
        {
            icon: <FaShieldAlt className="text-2xl md:text-4xl text-indigo-500 group-hover:text-white transition-colors duration-300" />,
            title: 'Intellectual Property Security',
            description: 'We emphasize safeguarding genetic resources, maintaining confidentiality, and complying with industry standards for IP security.'
        },
        {
            icon: <FaSeedling className="text-2xl md:text-4xl text-lime-500 group-hover:text-white transition-colors duration-300" />,
            title: 'Extensive Expertise',
            description: 'With over 35 years of industry experience, we have refined our seed processing methods using extensive knowledge and historical data.'
        },
        {
            icon: <FaStar className="text-2xl md:text-4xl text-yellow-500 group-hover:text-white transition-colors duration-300" />,
            title: 'Premium Seed Quality',
            description: 'We adhere to rigorous standards to produce superior quality seeds, ensuring enhanced crop yields in our cutting-edge facilities.'
        },
        {
            icon: <FaTools className="text-2xl md:text-4xl text-blue-500 group-hover:text-white transition-colors duration-300" />,
            title: 'Advanced Infrastructure',
            description: 'We offer comprehensive support, from land acquisition to ongoing management, for clients needing dedicated infrastructure.'
        },
        {
            icon: <FaHandsHelping className="text-2xl md:text-4xl text-green-500 group-hover:text-white transition-colors duration-300" />,
            title: 'Client-Focused Approach',
            description: 'We carefully tailor our seed processing lines to meet the specific needs of each client, ensuring personalized service.'
        },
        {
            icon: <FaTruck className="text-2xl md:text-4xl text-red-500 group-hover:text-white transition-colors duration-300" />,
            title: 'Dependable Delivery',
            description: 'We ensure timely delivery of high-quality processed seeds, helping clients achieve their goals on schedule.'
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
                            alt="Seed Processing Facilities"
                            className="rounded-lg mx-auto h-full w-full object-contain"
                        />
                        <p className="mt-4 text-black max-w-2xl mx-auto font-semibold bg-green-400/10 rounded-2xl p-4 ">
                            Join the multitude of satisfied clients who have chosen us for their business needs. Discover the advantage of partnering with a team committed to your success.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

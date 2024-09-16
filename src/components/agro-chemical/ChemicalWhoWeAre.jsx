import { FaCheckCircle, FaArrowRight, FaIndustry, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFlask, FaClipboardCheck, FaMicroscope, FaHandshake } from 'react-icons/fa';
import { FaBookOpen, FaRegLightbulb, FaUserFriends } from 'react-icons/fa';

export function ChemicalWhoWeAre() {
    const strengths = [
        {
            title: 'Innovative Solutions',
            description: 'We deliver cutting-edge technologies to solve complex business challenges.',
        },
        {
            title: 'Customer-Centric Approach',
            description: 'Our focus is on understanding and meeting the unique needs of each client.',
        },
        {
            title: 'Global Reach',
            description: 'With a presence in over 50 countries, we offer truly global solutions.',
        },
        {
            title: 'Expert Team',
            description: 'Our team consists of industry-leading experts with years of experience.',
        },
    ];

    const reasons = [
        {
            title: 'CHEMICAL PRODUCTION',
            description: 'We cater to your agricultural needs with a diverse selection of chemicals, including nitrogen, phosphorus, and potassium-based solutions.',
            icon: <FaFlask className="text-4xl text-emerald-600 mb-4" />
        },
        {
            title: 'PRESCRIBED QUALITY SUPPORT',
            description: 'We rigorously maintain quality standards, guaranteeing purity, potency, and safety in every batch. Our dedication to excellence reflects our commitment to your success.',
            icon: <FaClipboardCheck className="text-4xl text-emerald-600 mb-4" />
        },
        {
            title: 'ADVANCED R&D SUPPORT',
            description: 'Our dedicated team continually innovates formulations to meet industry standards. Using state-of-the-art technologies, we ensure the potency and safety of our agrochemicals, giving you a competitive edge.',
            icon: <FaMicroscope className="text-4xl text-emerald-600 mb-4" />
        },
        {
            title: 'COLLABORATIVE PARTNERSHIP',
            description: 'At PSPL, we cultivate enduring partnerships founded on trust, transparency, and shared success, offering expert support throughout the agrochemical lifecycle, from formulation to post-sales service.',
            icon: <FaHandshake className="text-4xl text-emerald-600 mb-4" />
        }
    ];
    return (
        <div >
            <div className="bg-slate-50 py-20">
                <div className="w-[90%] md:max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-center font-bold text-3xl md:text-5xl">
                            Who <span className="text-green-700">We Are</span>
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 px-0 lg:px-40">Our commitment to quality and innovation in the chemical industry ensures you get the best products and support.</p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                                        <FaBookOpen className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-5">
                                        <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
                                    </div>
                                </div>
                                <div className="mt-4 text-gray-600">
                                    <p>We strive to innovate and create solutions that positively impact lives globally.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                                        <FaRegLightbulb className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-5">
                                        <h3 className="text-lg font-medium text-gray-900">Our Vision</h3>
                                    </div>
                                </div>
                                <div className="mt-4 text-gray-600">
                                    <p>We envision a world where technology empowers everyone to reach their full potential.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                                        <FaUserFriends className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-5">
                                        <h3 className="text-lg font-medium text-gray-900">Our Team</h3>
                                    </div>
                                </div>
                                <div className="mt-4 text-gray-600">
                                    <p>We're a diverse group of experts committed to excellence and continuous learning.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[96%] mx-auto">
                            <div>
                                <h3 className="text-2xl font-bold text-blue-900 sm:text-3xl">Our Story</h3>
                                <p className="mt-1 text-lg text-gray-600">
                                    Founded in 2010, we've grown from a small startup to a global leader in innovative solutions.
                                </p>

                                <p className="mt-2 text-lg text-gray-600">
                                    Our journey has been marked by groundbreaking achievements and a relentless pursuit of excellence.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="bg-white p-4 rounded-lg shadow-md transition-transform hover:scale-105">
                                        <FaIndustry className="text-3xl text-green-600 mb-2 mx-auto" />
                                        <p className="text-center text-gray-800 font-semibold">Annual Capacity: 50,000 MT</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md transition-transform hover:scale-105">
                                        <FaFlask className="text-3xl text-green-600 mb-2 mx-auto" />
                                        <p className="text-center text-gray-800 font-semibold">20+ Formulation Types</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md transition-transform hover:scale-105">
                                        <FaMapMarkerAlt className="text-3xl text-green-600 mb-2 mx-auto" />
                                        <p className="text-center text-gray-800 font-semibold">3 Toll Production Plants</p>
                                    </div>
                                </div>
                            </div>
                            <div className='relative'>
                                <img
                                    className="rounded-lg shadow-lg object-cover object-center w-full h-full md:absolute left-0 top-0"
                                    src="/chemical_whoweare.jpg"
                                    alt="Our team collaborating"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-100 py-20">
                <div className="w-[90%] md:max-w-7xl mx-auto">
                    <h2 className="text-center font-bold text-3xl md:text-5xl mb-8">
                        Our <span className='text-teal-600'>Strengths</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {strengths.map((strength, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
                                role="article"
                                aria-labelledby={`strength-title-${index}`}
                            >
                                <h3
                                    id={`strength-title-${index}`}
                                    className="text-xl font-semibold text-blue-800 mb-4 flex items-center"
                                >
                                    <FaCheckCircle className="mr-2 text-blue-600" />
                                    {strength.title}
                                </h3>
                                <p className="text-gray-600 mb-6">{strength.description}</p>
                                <button
                                    className="text-blue-600 font-medium flex items-center transition duration-300 ease-in-out hover:text-blue-800"
                                    aria-label={`Learn more about ${strength.title}`}
                                >
                                    Learn More
                                    <FaArrowRight className="ml-2" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 py-20">
                <div className="w-[90%] md:max-w-7xl mx-auto">
                    <h2 className="text-center font-bold text-3xl md:text-5xl mb-8">
                        Why <span className="text-emerald-600">Choose Us</span>
                    </h2>
                    <p className="text-center mb-2">
                        Our commitment to quality and innovation in the chemical industry ensures you get the best products and support.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {reasons.map((reason, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                                <div className="flex flex-col items-center text-center">
                                    {reason.icon}
                                    <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                                    <p className="text-gray-600">{reason.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <img src="/agroc_checmical.jpg" alt='image' className='w-full h-full mt-8' />
                </div>
            </div>
        </div>
    )
}
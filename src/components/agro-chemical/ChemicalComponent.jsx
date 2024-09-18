import { FaCheckCircle, FaArrowRight, FaIndustry, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFlask, FaClipboardCheck, FaMicroscope, FaHandshake } from 'react-icons/fa';
import { FaBookOpen, FaRegLightbulb, FaUserFriends } from 'react-icons/fa';

export function ChemicalComponent() {
    const strengths = [
        {
            title: 'Innovative Solutions',
            description: 'We deliver cutting-edge technologies to address complex challenges in the industry.',
        },
        {
            title: 'Customer-Centric Approach',
            description: 'Our focus is on understanding and fulfilling the specific needs of each client.',
        },
        {
            title: 'Global Reach',
            description: 'With operations spanning multiple continents, we offer truly international solutions.',
        },
        {
            title: 'Expert Team',
            description: 'Our team consists of highly skilled professionals with deep industry expertise.',
        },
    ];

    const reasons = [
        {
            title: 'CHEMICAL MANUFACTURING',
            description: 'Our extensive range of agricultural chemicals includes essential nutrients like nitrogen, phosphorus, and potassium, customized to enhance crop productivity and soil health.',
            icon: <FaFlask className="text-4xl text-teal-600 mb-4" />
        },
        {
            title: 'STRICT QUALITY CONTROL',
            description: 'We adhere to stringent quality standards to ensure every product is effective, pure, and safe, surpassing the highest industry regulations.',
            icon: <FaClipboardCheck className="text-4xl text-teal-600 mb-4" />
        },
        {
            title: 'ADVANCED R&D',
            description: 'Our research and development efforts focus on crafting innovative formulations that comply with the latest industry standards and safety protocols.',
            icon: <FaMicroscope className="text-4xl text-teal-600 mb-4" />
        },
        {
            title: 'COLLABORATIVE PARTNERSHIPS',
            description: 'We foster long-term partnerships based on trust and shared success, offering expert guidance throughout the lifecycle of our products.',
            icon: <FaHandshake className="text-4xl text-teal-600 mb-4" />
        }
    ];

    return (
        <div>
            <div className="bg-slate-50 py-20">
                <div className="w-[90%] md:max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-center font-bold text-3xl md:text-5xl">
                            Who <span className="text-green-700">We Are</span>
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 px-0 lg:px-40">
                            Our commitment to quality and innovation ensures you receive the best products and support in the chemical industry.
                        </p>
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
                                    <p>We are dedicated to pioneering solutions that have a positive global impact.</p>
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
                                    <p>We envision a future where advanced technology enables everyone to reach their full potential.</p>
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
                                    <p>Our diverse team is committed to ongoing learning and excellence in the field.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[96%] mx-auto">
                            <div>
                                <h3 className="text-2xl font-bold text-blue-900 sm:text-3xl">Our Achievements</h3>
                                <p className="mt-1 text-lg text-gray-600">
                                    Since our establishment in 2015, we have evolved from a regional player to a global leader in chemical innovation.
                                </p>

                                <p className="mt-2 text-lg text-gray-600">
                                    Our growth trajectory includes significant milestones and a continuous pursuit of industry excellence.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="bg-white p-4 rounded-lg shadow-md transition-transform hover:scale-105">
                                        <FaIndustry className="text-3xl text-teal-600 mb-2 mx-auto" />
                                        <p className="text-center text-gray-800 font-semibold">Annual Output: 60,000 MT</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md transition-transform hover:scale-105">
                                        <FaFlask className="text-3xl text-teal-600 mb-2 mx-auto" />
                                        <p className="text-center text-gray-800 font-semibold">30+ Unique Formulations</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md transition-transform hover:scale-105">
                                        <FaMapMarkerAlt className="text-3xl text-teal-600 mb-2 mx-auto" />
                                        <p className="text-center text-gray-800 font-semibold">5 State-of-the-Art Facilities</p>
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
                        Why Choose <span className='text-teal-600'>Us</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
                                role="article"
                                aria-labelledby={`reason-title-${index}`}
                            >
                                <div className="mb-4 flex justify-center items-center">
                                    {reason.icon}
                                </div>
                                <h3
                                    id={`reason-title-${index}`}
                                    className="text-xl font-semibold text-blue-800 mb-4"
                                >
                                    {reason.title}
                                </h3>
                                <p className="text-gray-600">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

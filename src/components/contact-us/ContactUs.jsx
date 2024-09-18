import React, { useRef, useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaChevronDown, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { IoClose } from 'react-icons/io5';

export function ContactUs() {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)
        emailjs
            .sendForm('service_3ru5c5h', 'template_t15dvg5', form.current, {
                publicKey: 'oR5wWw8rYBM6xTxNu',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                    setIsLoading(false);
                    setShowModal(true)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className="bg-gray-100 py-16">
            <div className="w-[90%] md:max-w-6xl mx-auto">
                {isLoading && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90">
                        <div className='flex items-center gap-4'>
                            <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin border-blue-500"></div>
                            <h2 className='font-bold text-white text-xl'>Loading...</h2>
                        </div>
                    </div>
                )}

                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90">
                        <div className="bg-white px-4 text-center py-6 rounded-lg shadow-md relative w-[80%] md:w-[40%] lg:w-[25%]">
                            <h2 className="text-base font-bold ">Message Sent Successfully </h2>
                            <p className='text-sm '>
                                Thanks for reaching out! I'll get back to you within the next 24 hours. <span className='text-green-600 font-bold text-xl'>&#10003;</span>
                            </p>
                            <button
                                className="bg-rose-500 absolute top-3 right-3 text-white hover:cursor-pointer hover:bg-lime-400 font-bold  rounded-full inline-flex items-center text-sm "
                                onClick={() => setShowModal(false)}
                            >
                                <IoClose className="text-lg" />
                            </button>
                        </div>
                    </div>
                )}
                <div className="bg-gray-100 w-full">
                    <div className="bg-white rounded-lg shadow-xl p-8 w-full flex flex-wrap">
                        <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
                            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaUser className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaEnvelope className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaPhone className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Your Phone Number"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <select
                                            required
                                            name="service"
                                            id="service"
                                            className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="Seed Processing">Seed Processing</option>
                                            <option value="Food Processing">Food Processing</option>
                                            <option value="Agro Chemical">Agro Chemical</option>
                                            <option value="Animal Feeds">Animal Feeds</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <FaChevronDown className="h-5 w-5 text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <div className="mt-1">
                                        <textarea
                                            required
                                            name="message"
                                            id="message"
                                            rows="4"
                                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Your Message"
                                        ></textarea>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit" value="Send"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                                    >
                                        <FaPaperPlane className="mr-2 h-5 w-5" />
                                        Send A Message
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h3>
                            <div className="space-y-4">
                                <p className="flex items-center text-gray-600">
                                    <FaMapMarkerAlt className="mr-2 h-5 w-5 text-blue-500" />
                                    123 Business Ave, Suite 100, City, State 12345
                                </p>
                                <p className="flex items-center text-gray-600">
                                    <FaPhone className="mr-2 h-5 w-5 text-blue-500" />
                                    (123) 456-7890
                                </p>
                                <p className="flex items-center text-gray-600">
                                    <FaEnvelope className="mr-2 h-5 w-5 text-blue-500" />
                                    contact@example.com
                                </p>
                            </div>
                            <div className="mt-8">
                                <h4 className="text-xl font-semibold mb-4 text-gray-800">Our Location</h4>
                                <div className="rounded-lg overflow-hidden shadow-lg">
                                    <iframe
                                        title="Google Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412994185!2d-74.00597698459859!3d40.71277937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17f4b58ba9%3A0x5fc8d88c8d3f6e4a!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1621234567890!5m2!1sen!2s"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

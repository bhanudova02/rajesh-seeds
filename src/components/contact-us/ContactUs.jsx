import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaBuilding, FaPhone, FaChevronDown, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';

export function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const services = ['Seed Processing', 'Food Processing', 'Chemical', 'Animal Feeds', 'Consulting'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        }
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.service) newErrors.service = 'Please select a service';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        if (Object.keys(newErrors).length === 0) {
            // Submit form data
            console.log('Form submitted:', formData);
            // Reset form
            setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
        } else {
            setErrors(newErrors);
        }
    };
    return (
        <div className="bg-gray-100 py-16">
            <div className="w-[90%] md:max-w-6xl mx-auto">
                {/* Heading */}
                <div className="bg-gray-100 w-full">
                    <div className="bg-white rounded-lg shadow-xl p-8 w-full flex flex-wrap">
                        <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaUser className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className={`block w-full pl-10 pr-3 py-2 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            aria-invalid={errors.name ? 'true' : 'false'}
                                            aria-describedby={errors.name ? 'name-error' : undefined}
                                        />
                                    </div>
                                    {errors.name && <p className="mt-2 text-sm text-red-600" id="name-error">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaEnvelope className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                                            placeholder="you@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            aria-invalid={errors.email ? 'true' : 'false'}
                                            aria-describedby={errors.email ? 'email-error' : undefined}
                                        />
                                    </div>
                                    {errors.email && <p className="mt-2 text-sm text-red-600" id="email-error">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaBuilding className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Your Company"
                                            value={formData.company}
                                            onChange={handleChange}
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
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            className={`block w-full pl-10 pr-3 py-2 border ${errors.phone ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                                            placeholder="Your Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            aria-invalid={errors.phone ? 'true' : 'false'}
                                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                                        />
                                    </div>
                                    {errors.phone && <p className="mt-2 text-sm text-red-600" id="phone-error">{errors.phone}</p>}
                                </div>
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <select
                                            name="service"
                                            id="service"
                                            className={`block w-full pl-3 pr-10 py-2 border ${errors.service ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none`}
                                            value={formData.service}
                                            onChange={handleChange}
                                            aria-invalid={errors.service ? 'true' : 'false'}
                                            aria-describedby={errors.service ? 'service-error' : undefined}
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <FaChevronDown className="h-5 w-5 text-gray-400" />
                                        </div>
                                    </div>
                                    {errors.service && <p className="mt-2 text-sm text-red-600" id="service-error">{errors.service}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <div className="mt-1">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows="4"
                                            className={`block w-full px-3 py-2 border ${errors.message ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            aria-invalid={errors.message ? 'true' : 'false'}
                                            aria-describedby={errors.message ? 'message-error' : undefined}
                                        ></textarea>
                                    </div>
                                    {errors.message && <p className="mt-2 text-sm text-red-600" id="message-error">{errors.message}</p>}
                                </div>
                                <div>
                                    <button
                                        type="submit"
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

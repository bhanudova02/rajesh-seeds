export function PrivacyPolicy() {
    return (
        <div className="bg-gray-100 py-20">
            <div className="w-[90%] md:max-w-6xl mx-auto">
                <h2 className="text-center font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600 mb-8">
                    Privacy Policy
                </h2>
                <div className="space-y-12">
                    {/* Section Container */}
                    <section className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg">
                        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
                            Information We Collect
                        </h2>
                        <p className="text-gray-600">
                            We may collect the following types of personal information when you interact with our website or services:
                        </p>
                        <ul className="list-disc ml-6 mt-3 text-gray-600">
                            <li>Personal Identification Information: name, email, contact details.</li>
                            <li>Business and Transaction Data: any business inquiries or communications.</li>
                            <li>Technical Information: IP address, browser type, and website usage data.</li>
                        </ul>
                    </section>

                    <section className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg">
                        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
                            How We Use Your Information
                        </h2>
                        <p className="text-gray-600">
                            The personal information we collect is used to provide our services, enhance user experience, communicate relevant updates, and meet legal requirements.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg">
                        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
                            Sharing Your Information
                        </h2>
                        <p className="text-gray-600">
                            We do not sell or share your personal information except as necessary to deliver our services, fulfill legal obligations, or collaborate with trusted service providers.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg">
                        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
                            Data Security
                        </h2>
                        <p className="text-gray-600">
                            We use appropriate technical and organizational measures to safeguard your information. However, no online transmission can be guaranteed to be completely secure.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg">
                        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
                            Your Rights
                        </h2>
                        <p className="text-gray-600">
                            You have the right to request access to, correct, or delete your personal data. Contact us if you have any questions or requests regarding your information.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg">
                        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
                            Cookies and Tracking Technologies
                        </h2>
                        <p className="text-gray-600">
                            Our website uses cookies and tracking technologies to enhance your experience and analyze website usage. You can manage your cookie preferences through your browser settings.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg">
                        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
                            Changes to the Privacy Policy
                        </h2>
                        <p className="text-gray-600">
                            We may update this Privacy Policy periodically. Please review this page regularly to stay informed about any changes.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg">
                        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
                            Contact Us
                        </h2>
                        <p className="text-gray-600">
                            If you have any questions or concerns about our Privacy Policy, please contact us at:
                        </p>
                        <address className="not-italic mt-4 text-gray-600">
                            <strong>Rajesh Seeds</strong><br />
                            <div>
                                Survey No. 104, Medchal, Industrial Area, <br />Hyderabad, Telangana 500402
                            </div>
                            <span className="font-bold">Phone</span>:6300000000<br />
                            <span className="font-bold">Email</span>: customercare@rajeshseeds.in
                        </address>
                    </section>
                </div>
            </div>
        </div>
    );
}

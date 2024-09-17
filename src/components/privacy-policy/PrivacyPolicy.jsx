export function PrivacyPolicy() {
    return (
        <div className="bg-gray-100 py-20">
            <div className="w-[90%] md:max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
                    Privacy Policy
                </h1>
                
                <div className="space-y-12">
                    {/* Section Container */}
                    <section className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
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
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            How We Use Your Information
                        </h2>
                        <p className="text-gray-600">
                            The personal information we collect is used to deliver our services, improve customer satisfaction, communicate relevant updates, and comply with legal obligations.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Sharing Your Information
                        </h2>
                        <p className="text-gray-600">
                            We do not sell or share your personal information except when necessary to provide our services, comply with legal obligations, or work with service providers.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Data Security
                        </h2>
                        <p className="text-gray-600">
                            We employ appropriate technical and organizational measures to protect your information. However, no internet transmission is entirely secure.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Your Rights
                        </h2>
                        <p className="text-gray-600">
                            You have the right to request access to, correct, or delete your personal data. Contact us if you have any concerns or requests regarding your information.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Cookies and Tracking Technologies
                        </h2>
                        <p className="text-gray-600">
                            Our website may use cookies to enhance user experience and track website usage. You can manage your cookie preferences through your browser settings.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Changes to the Privacy Policy
                        </h2>
                        <p className="text-gray-600">
                            We may update this Privacy Policy periodically. Please review this page to stay informed about any changes.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Contact Us
                        </h2>
                        <p className="text-gray-600">
                            If you have any questions or concerns about our Privacy Policy, you can reach out to us at:
                        </p>
                        <address className="not-italic mt-4 text-gray-600">
                            <strong>Prasad Seeds Pvt. Ltd.</strong><br />
                            [Insert Address]<br />
                            Phone: [Insert Contact Number]<br />
                            Email: [Insert Email Address]
                        </address>
                    </section>
                </div>
            </div>
        </div>
    );
}

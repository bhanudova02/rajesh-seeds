export function CareerComponent() {
    return (
        <div className="bg-slate-100 py-20">
            <div className="w-[90%] md:max-w-7xl mx-auto text-center">
                <h2 className="text-center font-bold text-3xl md:text-5xl mb-6 md:mb-8">
                    Why Join  <span className="text-blue-800">Us?</span>
                </h2>

                <p className="text-lg text-gray-600 mb-12">
                    At Prasad Seeds Private Limited, we are more than just a seed processing company—we are pioneers in agricultural innovation, committed to enhancing the quality of life for farmers and consumers alike. Joining our team means becoming a part of a legacy of excellence, dedication, and sustainable growth.
                </p>

                {/* New Section: Company Culture */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300">
                        <img src="/images/teamwork.jpg" alt="Teamwork" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Collaborative Environment</h3>
                        <p className="text-gray-600">
                            We foster teamwork and encourage open communication to create a collaborative and positive work environment where everyone's voice is heard.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300">
                        <img src="/images/growth.jpg" alt="Growth" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Growth Opportunities</h3>
                        <p className="text-gray-600">
                            We invest in our employees' personal and professional growth, providing ample opportunities for career advancement and skill development.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300">
                        <img src="/images/worklife.jpg" alt="Work-Life Balance" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Work-Life Balance</h3>
                        <p className="text-gray-600">
                            We value work-life balance and offer flexible working hours to ensure that our employees can thrive both professionally and personally.
                        </p>
                    </div>
                </div>

                {/* New Section: Call to Action */}
                <div className="bg-gradient-to-r from-green-400 to-green-500 text-white py-12 rounded-lg mb-12">
                    <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
                    <p className="text-lg mb-6">
                        Be a part of our mission to revolutionize the agricultural industry with sustainable solutions. We're always looking for passionate individuals to join our journey.
                    </p>
                    <a href="/careers" className="inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-green-600 hover:text-white transition duration-300">
                        Explore Careers
                    </a>
                </div>

                {/* New Section: Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300">
                        <h4 className="text-xl font-semibold mb-2">Competitive Salary</h4>
                        <p className="text-gray-600">We offer a competitive salary and benefits package that rewards your hard work and dedication.</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300">
                        <h4 className="text-xl font-semibold mb-2">Health & Wellness</h4>
                        <p className="text-gray-600">Our comprehensive health and wellness benefits ensure that you and your family are well taken care of.</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300">
                        <h4 className="text-xl font-semibold mb-2">Learning & Development</h4>
                        <p className="text-gray-600">We provide continuous learning opportunities to help you stay ahead in your career.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';

export function FeedWhoWeAre() {
    return (
        <div className="bg-white py-20">
            <div className="w-[90%] md:max-w-7xl mx-auto">
                <h2 className="text-center font-bold text-3xl md:text-5xl mb-6 md:mb-8">
                    Who <span className="text-blue-600">We Are</span>
                </h2>
                <p className='text-center text-gray-700'>
                    Keeping in mind the benefits of corn silage, we have introduced India's first branded packaged corn silage. It is the best high-energy fodder for dairy animals available in India today. We are the first company in India to have a technical collaboration for silage manufacturing with DuPont Pioneer, USA. We source the best hybrids and test locally to ensure top-performing corn silage that suits animals. Plus, it's packed with world-class packaging solutions that keep the silage secure for a longer duration.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full lg:w-[80%] mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
                        <FaUsers className="text-3xl md:text-5xl text-blue-500 mb-4 mx-auto" />
                        <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 text-center">Our Team</h3>
                        <p className="text-gray-600 text-center">We are a diverse group of professionals passionate about innovation and excellence.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
                        <FaLightbulb className="text-3xl md:text-5xl text-yellow-500 mb-4 mx-auto" />
                        <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 text-center">Our Mission</h3>
                        <p className="text-gray-600 text-center">To deliver cutting-edge solutions that transform businesses and enhance lives.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
                        <FaHandshake className="text-3xl md:text-5xl text-green-500 mb-4 mx-auto" />
                        <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 text-center">Our Values</h3>
                        <p className="text-gray-600 text-center">Integrity, collaboration, and continuous improvement guide everything we do.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 bg-blue-50 p-0 md:p-10 rounded-md'>
                    <div>
                        <img src="/FeedBox1.jpg" alt='FeedBoxImg' className='w-full h-[300px] object-cover rounded-md' />
                    </div>
                    <div>
                        <img src="/FeedBox2.jpg" alt='FeedBoxImg' className='w-full h-[300px] object-cover rounded-md' />
                    </div>
                    <div>
                        <img src="/FeedBox3.jpg" alt='FeedBoxImg' className='w-full h-[300px] object-cover rounded-md' />
                    </div>
                    <div>
                        <img src="/FeedBox4.jpg" alt='FeedBoxImg' className='w-full h-[300px] object-cover rounded-md' />
                    </div>
                </div>
            </div>
        </div >
    )
}

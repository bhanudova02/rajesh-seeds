import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-gray-50">
            <div className="w-[90%] md:max-w-7xl mx-auto pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Support</h2>
                        <ul className="space-y-2 font-medium text-lg text-gray-600">
                            <li>Help Center</li>
                            <li>Safety Information</li>
                            <li>Cancellation options</li>
                            <li>Medical Doctor</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Company</h2>
                        <ul className="space-y-2 font-medium text-lg text-gray-600">
                            <li>About Us</li>
                            <li>Community Blog</li>
                            <li>Careers</li>
                            <li>Privacy policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                        <ul className="space-y-2 font-medium text-lg text-gray-600">
                            <li>Partnerships</li>
                            <li>FAQ</li>
                            <li>Get in Touch</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                        <ul className="flex gap-8">
                            <li className="rounded-full p-2 bg-[#0165E1]"><FaFacebook className="w-[1.5rem] h-[1.5rem] text-white" /></li>
                            <li className="rounded-full p-2 bg-[#CD486B]"><FaInstagram className="w-[1.5rem] h-[1.5rem] text-white" /></li>
                            <li className="rounded-full p-2 bg-[#1DA1F2]"><FaTwitter className="w-[1.5rem] h-[1.5rem] text-white" /></li>
                            <li className="rounded-full p-2 bg-[#CD201F]"><FaYoutube className="w-[1.5rem] h-[1.5rem] text-white" /></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center pt-[1rem] mt-[2rem] border-black opacity-60 border-t-2">
                    <h2 className="font-bold text-[20px] opacity-90 text-black">Copyright © 2024 - All right reserved by XYZ Private Ltd</h2>
                </div>
            </div>
        </footer>
    )
}
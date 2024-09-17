import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname == path;
    const [isLoading, setIsLoading] = useState(false);
    const handelNavigation = (url) => {
        setIsLoading(true);
        setTimeout(() => {
            window.location.href = url
        }, 100)
    }


    return (
        <footer className="bg-[#1F2937] text-white">
            <div className="w-[90%] md:max-w-7xl mx-auto pt-20 pb-10">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                        <ul className="space-y-2 font-medium text-sm">
                            <li>Company Profile</li>
                            <li>Vision & Mission</li>
                            <li>Global Presence</li>
                            <li>Prestigious Clients</li>
                            <li>Infrastructure</li>
                            <li>Careers</li>
                            <li>
                                <button onClick={() => { handelNavigation('/privacypolicy') }} className={`cursor-pointer ${isActive('/privacypolicy') ? 'underline-custom' : ''}`}>
                                    Privacy Policy
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Services</h2>
                        <ul className="space-y-2 font-medium text-sm">
                            <li>Seed Processing</li>
                            <li>Seed to Seed</li>
                            <li>Food Processing</li>
                            <li>Feeds</li>
                            <li>Agro Chemicals</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <div className="font-medium text-sm w-[80%] md:w-[90%]">
                            Survey No. 854, Medchal, Industrial Area, Hyderabad, Telangana 501401
                            08418223127
                            customercare@prasadseeds.in
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Follow US</h2>
                        <ul className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-0 lg:gap-8">
                            <li className="rounded-full p-2 w-fit bg-[#0165E1]"><FaFacebook className="w-[1.5rem] h-[1.5rem] text-white" /></li>
                            <li className="rounded-full p-2 w-fit bg-[#CD486B]"><FaInstagram className="w-[1.5rem] h-[1.5rem] text-white" /></li>
                            <li className="rounded-full p-2 w-fit bg-[#1DA1F2]"><FaTwitter className="w-[1.5rem] h-[1.5rem] text-white" /></li>
                            <li className="rounded-full p-2 w-fit bg-[#CD201F]"><FaYoutube className="w-[1.5rem] h-[1.5rem] text-white" /></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center pt-[1rem] mt-[2rem] border-black opacity-60 border-t-2" />
                <h2 className="font-bold text-white text-center">Copyright © 2024 - All right reserved by Prasad Seeds </h2>
            </div>
        </footer>
    )
}
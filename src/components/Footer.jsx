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
                            <li><button className={`${isActive('/vmv') ? 'underline-custom-mul' : ''}`} onClick={() => { handelNavigation('/vmv') }}>Vision & Mission</button></li>
                            <li>
                                <button className={`${isActive('/gblpresence') ? 'underline-custom-mul' : ''}`} onClick={() => { handelNavigation('/gblpresence') }}>Global Presence</button>
                            </li>
                            <li>
                                <button className={`${isActive('/ourclients') ? 'underline-custom-mul' : ''}`} onClick={() => { handelNavigation('/ourclients') }}>Prestigious Clients</button>
                            </li>
                            <li>
                                <button onClick={() => { handelNavigation('/infra') }} className={`cursor-pointer ${isActive('/infra') ? 'underline-custom' : ''}`}>Infrastructure</button>
                            </li>
                            <li>
                                <button onClick={() => { handelNavigation('/career') }} className={`cursor-pointer ${isActive('/career') ? 'underline-custom' : ''}`}>Careers</button>
                            </li>
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
                            <li>
                                <button className={`${isActive('/seed-processing') ? 'underline-custom-mul' : ''}`} onClick={() => { handelNavigation('/seed-processing') }}>Seed Processing</button>
                            </li>
                            <li>
                                <button className={`${isActive('/seed-to-seed') ? 'underline-custom-mul' : ''}`} onClick={() => { handelNavigation('/seed-to-seed') }}>Seed to Seed</button>
                            </li>
                            <li>
                                <button className={`${isActive('/food-processing') ? 'underline-custom-mul' : ''}`} onClick={() => { handelNavigation('/food-processing') }}>Food Processing</button>
                            </li>
                            <li>
                                <button className={`${isActive('/rspl-feed') ? 'underline-custom-mul' : ''}`} onClick={() => { handelNavigation('/rspl-feed') }}>RSPL Feeds</button>

                            </li>
                            <li>
                                <button className={`${isActive('/agro-chemicals') ? 'underline-custom-mul' : ''}`} onClick={() => { handelNavigation('/agro-chemicals') }}>Agro Chemicals</button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <div className="font-medium text-sm w-[80%] md:w-[90%]">
                            Survey No. 104, Medchal, Industrial Area, Hyderabad, Telangana 500402
                            6300000000
                            customercare@rajeshseeds.in
                        </div>

                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Follow US</h2>
                        <ul className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-0 lg:gap-8">
                            <li onClick={() => window.open('https://www.facebook.com', '_blank')} className="cursor-pointer hover:scale-125 transition-all duration-300 rounded-full p-2 w-fit bg-[#0165E1]"><FaFacebook className="w-[1.5rem] h-[1.5rem] text-white" /></li>
                            <li onClick={() => window.open('https://www.instagram.com', '_blank')} className="cursor-pointer hover:scale-125 transition-all duration-300 rounded-full p-2 w-fit bg-[#CD486B]"><FaInstagram className="w-[1.5rem] h-[1.5rem] text-white" /></li>
                            <li onClick={() => window.open('https://twitter.com', '_blank')} className="cursor-pointer hover:scale-125 transition-all duration-300 rounded-full p-2 w-fit bg-[#1DA1F2]"><FaTwitter className="w-[1.5rem] h-[1.5rem] text-white" /></li>
                            <li onClick={() => window.open('https://www.youtube.com/', '_blank')} className="cursor-pointer hover:scale-125 transition-all duration-300 rounded-full p-2 w-fit bg-[#CD201F]"><FaYoutube className="w-[1.5rem] h-[1.5rem] text-white" /></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center pt-[1rem] mt-[2rem] border-black opacity-60 border-t-2" />
                <h2 className="font-bold text-white text-center">Copyright © 2024 - All right reserved by Rajesh Seeds </h2>
            </div>
        </footer>
    )
}
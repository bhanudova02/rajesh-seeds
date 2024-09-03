import { useState, useEffect } from 'react';
import { NavBarComponent } from './NavBarComponent';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [logo, setLogo] = useState("/white_logo.png");
    const [topDiv,setTopDiv] = useState("block")
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
                setLogo("logo.png")
                setTopDiv("hidden")
            } else {
                setIsScrolled(false);
                setLogo("white_logo.png");
                setTopDiv("block")

            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            <div className={`fixed top-0 z-50 w-full  transition-all duration-500 ${isScrolled ? 'bg-white text-black animate-slide-down shadow shadow-green-500/20' : 'bg-gray-200/5 text-white'}`}>
                <div className={`bg-[#E2E8F0] p-3 text-[#455D9E] transition-all duration-500 justify-between ${topDiv}`}>
                    <div className='flex justify-between px-10'>
                        <div className='flex items-center gap-1'>
                            <FaPhoneAlt className='text-2xl'/> <h5 className='font-bold text-lg'>08418223127</h5>
                        </div>
                        <div className='flex items-center gap-1'>
                            <h4 className='font-bold text-lg'>Follow Us:</h4>
                            <FaInstagram className='text-2xl'/>
                            <FaFacebook className='text-2xl'/>
                            <FaSquareXTwitter className='text-2xl'/>
                            <FaLinkedin className='text-2xl'/>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between px-6 py-3'>
                    <div data-aos="zoom-in" data-aos-delay="500" data-aos-anchor-placement="top-center" >
                        <img src={logo} alt="Logo" className="w-48 md:w-24 h-auto" />
                    </div>
                    <ul data-aos="zoom-in" data-aos-delay="800" className="hidden md:flex items-center  gap-8 font-semibold">
                        <li>About</li>
                        <li>Services</li>
                        <li>Feedback</li>
                        <li>Contact Us</li>
                    </ul>
                    <div className='md:hidden block'>
                        <NavBarComponent />
                    </div>
                </div>
            </div>
        </header>
    );
}

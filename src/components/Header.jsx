import { useState, useEffect } from 'react';
import { NavBarComponent } from './NavBarComponent';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavbarList } from './NavbarListc';
import { Link } from 'react-router-dom';
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
            <div className={`fixed top-0 z-10 w-full  transition-all duration-500 ${isScrolled ? 'bg-white text-black animate-slide-down shadow shadow-green-500/20' : 'bg-gray-200/5 text-white '}`}>
                <div className={`bg-[#E2E8F0] p-3 text-[#455D9E] transition-all duration-500 justify-between ${topDiv}`}>
                    <div className='flex justify-between px-1 md:px-10'>
                        <div className='flex items-center gap-1'>
                            <FaPhoneAlt className='text-xl md:text-2xl'/> <h5 className='font-bold text-sm md:text-lg'>+916300000000</h5>
                        </div>
                        <div className='flex items-center gap-1 md:gap-3 lg:gap-4'>
                            <h4 className='font-bold text-base md:text-lg'>Follow Us:</h4>
                            <FaInstagram  onClick={()=>window.open('https://www.instagram.com', '_blank')} className='text-xl md:text-2xl cursor-pointer hover:bg-white hover:rounded-full hover:p-1 hover:duration-300 transition-all ease-out'/>
                            <FaFacebook onClick={()=>window.open('https://www.facebook.com','_blank')} className='text-xl md:text-2xl cursor-pointer hover:bg-white hover:rounded-full hover:p-1 hover:duration-300 transition-all ease-out'/>
                            <FaSquareXTwitter onClick={()=>window.open('https://twitter.com','_blank')} className='text-xl md:text-2xl cursor-pointer hover:bg-white hover:rounded-full hover:p-1 hover:duration-300 transition-all ease-out'/>
                            <FaLinkedin onClick={()=>window.open('https://www.linkedin.com','_blank')} className='text-xl md:text-2xl cursor-pointer hover:bg-white hover:rounded-full hover:p-1 hover:duration-300 transition-all ease-out'/>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center px-6 py-2.5 md:py-6 lg:py-3'>
                    <Link to="/" >
                        <img src={logo} alt="Logo" className="w-24 md:w-28 h-auto" />
                    </Link>
                    <NavbarList/>
                    <div className='md:hidden block'>
                        <NavBarComponent />
                    </div>
                </div>
            </div>
        </header>
    );
}

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AccordionData } from "@/lib/data";
import { CgMenuRight } from "react-icons/cg";
import { FaFacebookSquare, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { LoadingPopup } from "./LoadingPopup";
import { useLocation, useNavigate } from "react-router-dom";

export function NavBarComponent() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname == path;
    const isActiveMultiple = (paths) => paths.includes(location.pathname);

    const [isLoading, setIsLoading] = useState(false);
    const handelNavigation = (url) => {
        setIsLoading(true);
        setTimeout(() => {
            window.location.href = url
        }, 100)
    }
    return (
        <nav>
            {isLoading && <LoadingPopup />}
            <Sheet>
                <SheetTrigger>
                    <CgMenuRight className="text-2xl" />
                </SheetTrigger>
                <SheetContent side={"left"} className="w-64 bg-gray-800 text-white max-h-screen overflow-y-auto">
                    <div onClick={() => { handelNavigation('/') }} className="pb-4 border-b border-gray-700">
                        <img src="/logo.png" alt="Logo" className="w-24" />
                    </div>
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription>
                        </SheetDescription>
                    </SheetHeader>
                    <div className="my-10">
                        <div className="text-white">
                            <Accordion type="single" collapsible>
                                <ul className="space-y-4">

                                    <li className="bg-neutral-900 rounded-md p-2">
                                        <SheetClose className={`cursor-pointer ${isActive('/') ? 'underline-custom' : ''}`} onClick={() => handelNavigation('/')}>
                                            Home
                                        </SheetClose>
                                    </li>
                                    <li className="bg-neutral-900 rounded-md p-2">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger >
                                                <button className={`${isActiveMultiple(['/vmv', '/gblpresence', '/ourclients']) ? 'underline-custom' : ''}`}>
                                                    About Us
                                                </button>
                                            </AccordionTrigger>
                                            {AccordionData[0].items.map(data =>
                                                <AccordionContent key={data.title} className={`${data.mtCount} text-sm`}>
                                                    <SheetClose className={`${isActive(data.link) ? 'underline-custom-mul' : ''}`} onClick={() => { handelNavigation(data.link) }}>
                                                        {data.title}
                                                    </SheetClose>
                                                </AccordionContent>
                                            )}
                                        </AccordionItem>
                                    </li>
                                    <li className="bg-neutral-900 rounded-md p-2">
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger>
                                                <button className={`${isActiveMultiple(['/seed-processing', '/seed-to-seed', '/food-processing', '/pspl-feed', '/agro-chemicals']) ? 'underline-custom' : ''}`} P>
                                                    Services
                                                </button>
                                            </AccordionTrigger>
                                            {AccordionData[1].items.map(data =>
                                                <AccordionContent key={data.title} className={`${data.mtCount} text-sm`}>
                                                    <SheetClose className={`${isActive(data.link) ? 'underline-custom-mul' : ''}`} onClick={() => { handelNavigation(data.link) }}>
                                                        {data.title}
                                                    </SheetClose>
                                                </AccordionContent>
                                            )}
                                        </AccordionItem>
                                    </li>
                                    <li className="bg-neutral-900 rounded-md p-2">
                                        <button onClick={() => { handelNavigation('/infra') }} className={`cursor-pointer ${isActive('/infra') ? 'underline-custom' : ''}`}>
                                            Infrastructure
                                        </button>
                                    </li>
                                    <li className="bg-neutral-900 rounded-md p-2">
                                        <button onClick={() => { handelNavigation('/career') }} className={`cursor-pointer ${isActive('/career') ? 'underline-custom' : ''}`}>
                                            Careers
                                        </button>
                                    </li>
                                    <li className="bg-neutral-900 rounded-md p-2">
                                        <button onClick={() => { handelNavigation('/contact-us') }} className={`cursor-pointer ${isActive('/contact-us') ? 'underline-custom' : ''}`}>
                                            Contact Us
                                        </button>
                                    </li>
                                    <li className="bg-neutral-900 rounded-md p-2">
                                        <button onClick={() => { handelNavigation('/privacypolicy') }} className={`cursor-pointer ${isActive('/privacypolicy') ? 'underline-custom' : ''}`}>
                                            Privacy Policy
                                        </button>
                                    </li>
                                </ul>
                            </Accordion>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 pt-4">
                        <h2 className="px-3 mb-2">Contact Us</h2>
                        <div className="grid grid-cols-4 px-3">
                            <FaFacebookSquare onClick={()=>window.open('https://www.facebook.com','_blank')} className="text-3xl cursor-pointer" />
                            <FaInstagram onClick={()=>window.open('https://www.instagram.com','_blank')} className="text-3xl cursor-pointer" />
                            <FaWhatsapp onClick={()=>window.open('https://web.whatsapp.com/','_blank')} className="text-3xl cursor-pointer" />
                            <FaTelegram onClick={()=>window.open('https://web.telegram.org/','_blank')} className="text-3xl cursor-pointer" />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
}

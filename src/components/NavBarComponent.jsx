import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AccordionData } from "@/lib/data";
import { CgMenuRight } from "react-icons/cg";
import { FaFacebookSquare, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { LoadingPopup } from "./LoadingPopup";

export function NavBarComponent() {
    const [isLoading, setIsLoading] = useState(false);
    const handelNavigation = (url) => {
        setIsLoading(true);
        setTimeout(() => {
            window.location.href = url
        }, 100)
    }
    return (
        <nav>
            {isLoading && <LoadingPopup/>}
            <Sheet>
                <SheetTrigger>
                    <CgMenuRight className="text-2xl" />
                </SheetTrigger>
                <SheetContent side={"left"} className="w-64 bg-gray-800 text-white max-h-screen overflow-y-auto">
                    <div onClick={()=>{handelNavigation('/')}} className="pb-4 border-b border-gray-700">
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
                                        <SheetClose onClick={() => navigate('/')}>
                                            Home
                                        </SheetClose>
                                    </li>
                                    <li className="bg-neutral-900 rounded-md p-2">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>About Us</AccordionTrigger>
                                            {AccordionData[0].items.map(data =>
                                                <AccordionContent key={data.title} className={`${data.mtCount} text-sm`}>
                                                    <SheetClose onClick={()=>{handelNavigation(data.link)}}>
                                                        {data.title}
                                                    </SheetClose>
                                                </AccordionContent>
                                            )}
                                        </AccordionItem>
                                    </li>
                                    <li className="bg-neutral-900 rounded-md p-2">
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger>Services</AccordionTrigger>
                                            {AccordionData[1].items.map(data =>
                                                <AccordionContent key={data.title} className={`${data.mtCount} text-sm`}>
                                                    {data.title}
                                                </AccordionContent>
                                            )}
                                        </AccordionItem>
                                    </li>
                                    <li className="bg-neutral-900 rounded-md p-2">Infrastructure</li>
                                    <li className="bg-neutral-900 rounded-md p-2">Careers</li>
                                    <li className="bg-neutral-900 rounded-md p-2">Contact Us</li>
                                    <li className="bg-neutral-900 rounded-md p-2">Privacy Policy</li>
                                </ul>
                            </Accordion>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 pt-4">
                        <h2 className="px-3 mb-2">Contact Us</h2>
                        <div className="grid grid-cols-4 px-3">
                            <FaFacebookSquare className="text-3xl " />
                            <FaInstagram className="text-3xl " />
                            <FaWhatsapp className="text-3xl " />
                            <FaTelegram className="text-3xl " />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
}

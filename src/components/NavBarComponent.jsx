import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { AccordionData } from "@/lib/data";
import { CgMenuRight } from "react-icons/cg";
import { FaFacebookSquare, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
 
export function NavBarComponent() {
    return (
        <nav>
            <Sheet  >
                <SheetTrigger>
                    <CgMenuRight className="text-2xl" />
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <img src="/logo.png" alt="Logo" className="w-24" />
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription>
                        </SheetDescription>
                    </SheetHeader>
                    <div className="text-white mt-10 max-h-[35rem] overflow-y-auto">
                        <Accordion type="single" collapsible>
                            <ul className="space-y-4">
                                <li className="bg-neutral-900 rounded-md p-2">Home</li>
                                <li className="bg-neutral-900 rounded-md p-2">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>About Us</AccordionTrigger>
                                        {AccordionData[0].items.map(data =>
                                            <AccordionContent key={data.title} className={`${data.mtCount} text-sm`}>
                                                {data.title}
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
                                <li className="bg-neutral-900 rounded-md py-2 px-4 flex justify-between">
                                    <FaFacebookSquare className="text-3xl "/>
                                    <FaInstagram className="text-3xl "/>
                                    <FaWhatsapp className="text-3xl "/>
                                    <FaTelegram className="text-3xl "/>
                                </li>
                            </ul>
                        </Accordion>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
}

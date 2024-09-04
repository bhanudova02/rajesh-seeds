import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { AccordionData } from "@/lib/data";
import { CgMenuRight } from "react-icons/cg";
import WordRotate from "@/components/magicui/word-rotate";
 
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
                            </ul>
                            <div className="px-4 py-4 bg-neutral-900/30 mt-10 rounded-md">
                                <h2 className="text-center font-bold text-sm">Prasad Seeds Will Be</h2>
                                <WordRotate
                                    className="text-xl font-bold text-center text-green-400"
                                    words={["Innovative", "Visionary","A Global Leader","Quality Focused","Sustainably Growing","Customer-Centric"]}
                                />
                            </div>
                        </Accordion>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
}

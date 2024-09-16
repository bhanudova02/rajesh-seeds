import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { LoadingPopup } from "./LoadingPopup";
export function NavbarList() {
    const [isLoading, setIsLoading] = useState(false);
    const handelNavigation = (url) => {
        setIsLoading(true);
        setTimeout(() => {
            window.location.href = url;
        }, 100);
    }
    return (
        <div>
            {isLoading && <LoadingPopup />}
            <div className="hidden md:flex items-center  md:gap-6 lg:gap-8 font-semibold">
                <button onClick={() => { handelNavigation('/') }}><div className="cursor-pointer">Home</div></button>
                <DropdownMenu className="relative">
                    <DropdownMenuTrigger asChild className="cursor-pointer">
                        <h2>AboutUs</h2>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="absolute -left-8 ">
                        <DropdownMenuItem>
                            <button onClick={() => { handelNavigation('/vmv') }}>Vision & Mission</button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <button onClick={() => { handelNavigation('/gblpresence') }}>Global Presence</button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <button onClick={() => { handelNavigation('/ourclients') }}>Prestigious Clients</button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <div className="cursor-pointer">
                    <DropdownMenu className="relative">
                        <DropdownMenuTrigger asChild className="cursor-pointer">
                            <h2>Services</h2>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="absolute -left-8">
                            <DropdownMenuItem>
                                <button onClick={() => { handelNavigation('/seed-processing') }}>Seed Processing</button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button onClick={() => { handelNavigation('/seed-to-seed') }}>Seed to Seed</button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button onClick={() => { handelNavigation('/food-processing') }}>Food Processing</button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button onClick={() => { handelNavigation('/pspl-feed') }}>PSPL Feeds</button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button onClick={() => { handelNavigation('/agro-chemicals') }}>Agro Chemicals</button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div onClick={() => { handelNavigation('/infra') }} className="cursor-pointer">Infrastructure</div>
                <div onClick={() => { handelNavigation('/career') }} className="cursor-pointer">Careers</div>
                <div onClick={() => { handelNavigation('/contact-us') }}className="cursor-pointer">Contact Us</div>
            </div>
        </div>
    )
}
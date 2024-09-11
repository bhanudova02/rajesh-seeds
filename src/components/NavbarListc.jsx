import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { LoadingPopup } from "./LoadingPopup";
export function NavbarList() {
    const [isLoading, setIsLoading] = useState(false);

    const handelNavigation = (url) => {
        setIsLoading(true);
        setTimeout(()=>{
            window.location.href=url;
        },100);
    }

    return (
        <div>
            {isLoading && <LoadingPopup/>}
            <div className="hidden md:flex items-center  md:gap-6 lg:gap-8 font-semibold">
                <button onClick={()=>{handelNavigation('/')}}><div className="cursor-pointer">Home</div></button>
                <DropdownMenu className="relative">
                    <DropdownMenuTrigger asChild className="cursor-pointer">
                        <h2>AboutUs</h2>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="absolute -left-8 ">
                        <div onClick={()=>{handelNavigation('/vmv')}}><DropdownMenuItem className="cursor-pointer">Vision & Mission</DropdownMenuItem></div>
                        <div onClick={()=>{handelNavigation('/gblpresence')}}><DropdownMenuItem className="cursor-pointer">Global Presence</DropdownMenuItem></div>
                        <div onClick={()=>{handelNavigation('/ourclients')}}><DropdownMenuItem className="cursor-pointer">Prestigious Clients</DropdownMenuItem></div>
                    </DropdownMenuContent>
                </DropdownMenu>
                <div className="cursor-pointer">
                    <DropdownMenu className="relative">
                        <DropdownMenuTrigger asChild className="cursor-pointer">
                            <h2>Services</h2>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="absolute -left-8 ">
                            <DropdownMenuItem>Seed Processing</DropdownMenuItem>
                            <DropdownMenuItem>Seed to Seed</DropdownMenuItem>
                            <DropdownMenuItem>Food Processing</DropdownMenuItem>
                            <DropdownMenuItem>PSPL Feeds</DropdownMenuItem>
                            <DropdownMenuItem>Agro Chemicals</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="cursor-pointer">Infrastructure</div>
                <div className="cursor-pointer">Careers</div>
                <div className="cursor-pointer">Contact Us</div>
            </div>

        </div>
    )
}
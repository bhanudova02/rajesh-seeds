import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { LoadingPopup } from "./LoadingPopup";
import { useLocation, useNavigate } from "react-router-dom";
export function NavbarList() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname == path;
    const isActiveMultiple = (paths) => paths.includes(location.pathname);

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
                <button onClick={() => { handelNavigation('/') }}>
                    <div className={`cursor-pointer ${isActive('/')?'underline-custom':''}`}>
                        Home
                    </div>
                </button>
                <DropdownMenu className="relative">
                    <DropdownMenuTrigger asChild className="cursor-pointer">
                        <h2 className={`${isActiveMultiple(['/vmv', '/gblpresence', '/ourclients']) ? 'underline-custom' : ''}`}>AboutUs</h2>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="absolute -left-8 ">
                        <DropdownMenuItem>
                            <button className={`${isActive('/vmv')?'underline-custom-mul':''}`} onClick={() => { handelNavigation('/vmv') }}>Vision & Mission</button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <button className={`${isActive('/gblpresence')?'underline-custom-mul':''}`} onClick={() => { handelNavigation('/gblpresence') }}>Global Presence</button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <button className={`${isActive('/ourclients')?'underline-custom-mul':''}`}  onClick={() => { handelNavigation('/ourclients') }}>Prestigious Clients</button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <div className="cursor-pointer">
                    <DropdownMenu className="relative">
                        <DropdownMenuTrigger asChild className="cursor-pointer">
                            <h2  className={`${isActiveMultiple(['/seed-processing', '/seed-to-seed', '/food-processing','/pspl-feed','/agro-chemicals']) ? 'underline-custom' : ''}`}>Services</h2>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="absolute -left-8">
                            <DropdownMenuItem>
                                <button className={`${isActive('/seed-processing')?'underline-custom-mul':''}`} onClick={() => { handelNavigation('/seed-processing') }}>Seed Processing</button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button className={`${isActive('/seed-to-seed')?'underline-custom-mul':''}`} onClick={() => { handelNavigation('/seed-to-seed') }}>Seed to Seed</button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button className={`${isActive('/food-processing')?'underline-custom-mul':''}`} onClick={() => { handelNavigation('/food-processing') }}>Food Processing</button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button className={`${isActive('/pspl-feed')?'underline-custom-mul':''}`} onClick={() => { handelNavigation('/pspl-feed') }}>PSPL Feeds</button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button className={`${isActive('/agro-chemicals')?'underline-custom-mul':''}`} onClick={() => { handelNavigation('/agro-chemicals') }}>Agro Chemicals</button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div onClick={() => { handelNavigation('/infra') }} className={`cursor-pointer ${isActive('/infra')?'underline-custom':''}`}>Infrastructure</div>
                <div onClick={() => { handelNavigation('/career') }} className={`cursor-pointer ${isActive('/career')?'underline-custom':''}`}>Careers</div>
                <div onClick={() => { handelNavigation('/contact-us') }} className={`cursor-pointer ${isActive('/contact-us')?'underline-custom':''}`}>Contact Us</div>
            </div>
        </div>
    )
}
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"
export function NavbarList() {
    return (
        <div>
            <div className="hidden md:flex items-center  md:gap-6 lg:gap-8 font-semibold">
                <div className="cursor-pointer">Home</div>
                <DropdownMenu className="relative">
                    <DropdownMenuTrigger asChild className="cursor-pointer">
                        <h2>AboutUs</h2>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="absolute -left-8 ">
                        <DropdownMenuItem><Link to="/vmv">Vision & Mission</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to="/gblpresence">Global Presence</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to="/ourclients">Prestigious Clients</Link></DropdownMenuItem>
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
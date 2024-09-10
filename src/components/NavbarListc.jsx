import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"
export function NavbarList() {
    return (
        <div>
            <div className="hidden md:flex items-center  md:gap-6 lg:gap-8 font-semibold">
                <Link to="/"><div className="cursor-pointer">Home</div></Link>
                <DropdownMenu className="relative">
                    <DropdownMenuTrigger asChild className="cursor-pointer">
                        <h2>AboutUs</h2>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="absolute -left-8 ">
                        <Link to="/vmv"><DropdownMenuItem className="cursor-pointer">Vision & Mission</DropdownMenuItem></Link>
                        <Link to="/gblpresence"><DropdownMenuItem className="cursor-pointer">Global Presence</DropdownMenuItem></Link>
                        <Link to="/ourclients"><DropdownMenuItem className="cursor-pointer">Prestigious Clients</DropdownMenuItem></Link>
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
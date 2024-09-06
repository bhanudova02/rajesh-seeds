import { DropdownMenu, DropdownMenuContent, DropdownMenuItem,DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
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
                        <DropdownMenuItem>Vision & Mission</DropdownMenuItem>
                        <DropdownMenuItem>Global Presence</DropdownMenuItem>
                        <DropdownMenuItem>Prestigious Clients</DropdownMenuItem>
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
import NumberTicker from "../magicui/number-ticker";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { globalPresenceData } from "@/lib/data";

export function GlobalPresence() {

    const firstRow = globalPresenceData.slice(0, globalPresenceData.length / 2);

    const ReviewCard = ({ img, name, }) => {
        return (
            <figure
                className={cn(
                    "relative w-fit cursor-pointer overflow-hidden rounded-xl border py-3 px-4",
                    // light styles
                    "border-gray-950/[.1] bg-gray-950/[.01] shadow-md shadow-blu hover:bg-gray-950/[.05]",
                    // dark styles
                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                )}
            >
                <div className="flex flex-row items-center gap-2">
                    <img className="rounded-full" width="32" height="32" alt="" src={img} />
                    <div className="flex flex-col">
                        <figcaption className="text-lg md:text-4xl font-semibold text-black">
                            {name}
                        </figcaption>
                    </div>
                </div>
            </figure>
        );
    };

    return (
        <div className="bg-[#E1E2E2]">
            <div className="w-[90%] md:max-w-7xl mx-auto py-20">
                <h1 className="text-center text-3xl md:text-5xl font-bold text-blue-900">
                    Global Presence
                </h1>
                <div className="px-0 md:px-0 lg:px-20">
                    <div className="grid grid-cols-2 lg:grid-cols-4 justify-center text-center gap-4 mt-10">
                        <div className="border bg-white py-4 rounded-md shadow shadow-green-400">
                            <h2 className="font-bold text-lg md:text-2xl">Across</h2>
                            <h1 className="font-bold text-2xl md:text-4xl"><NumberTicker value={2} /></h1>
                            <h5 className="font-medium text-lg md:text-2xl">Continents</h5>
                        </div>
                        <div className="border bg-white py-4 rounded-md shadow shadow-green-400">
                            <h2 className="font-bold text-lg md:text-2xl">Operating</h2>
                            <h1 className="font-bold text-2xl md:text-4xl"><NumberTicker value={8} /></h1>
                            <h5 className="font-medium text-lg md:text-2xl">Countries</h5>
                        </div>
                        <div className="border bg-white py-4 rounded-md shadow shadow-green-400">
                            <h2 className="font-bold text-lg md:text-2xl">India</h2>
                            <h1 className="font-bold text-2xl md:text-4xl"><NumberTicker value={40} />+</h1>
                            <h5 className="font-medium text-lg md:text-2xl">Units</h5>
                        </div>
                        <div className="border bg-white py-4 rounded-md shadow shadow-green-400">
                            <h2 className="font-bold text-lg md:text-2xl">International</h2>
                            <h1 className="font-bold text-2xl md:text-4xl"><NumberTicker value={10} />+</h1>
                            <h5 className="font-medium text-lg md:text-2xl">Units</h5>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row mt-8">
                        <div className="bg-blue-100 rounded-md p-2 w-full lg:w-[60%] ">
                            <img src="/WorldMap.PNG" alt="Map" className="w-full h-full object-cover rounded-md" />
                        </div>
                        <div className="w-full lg:w-[40%] px-4">
                            <div>
                                <h2 className="text-2xl font-bold">
                                    $100 MILLION
                                    PSPL'S INVESTMENT IN THE
                                    INDIAN AGRO SECTOR
                                </h2>
                                <p className="mt-1">
                                    PSPL has established a leadership position in the Indian Seed processing industry. We are now in the process of expanding these infrastructure services in seeds, chemicals and other allied sectors to our partners in Asia and Africa.
                                </p>
                                <h2 className="font-bold text-lg text-blue-700 mt-4">We operate in the following countries</h2>
                                <div>
                                    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                                        <Marquee pauseOnHover className="[--duration:20s]">
                                            {firstRow.map((review) => (
                                                <ReviewCard key={review.username} {...review} />
                                            ))}
                                        </Marquee>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { useState, useEffect } from "react";
import NumberTicker from "../magicui/number-ticker";

export function GlobalPresence() {
    const countries = [
        { name: "India", flag: "/in_flag.png" },
        { name: "Bangladesh", flag: "/ba_flag.png" },
        { name: "Indonesia", flag: "/indonesia_flg.png" },
        { name: "Philippines", flag: "/philippines_flag.png" },
        { name: "Singapore", flag: "/singapore_flag.png" },
        { name: "Vietnam", flag: "/vietnam_flag.png" },
        { name: "Ghana", flag: "/ghana_flag.png" },
        { name: "Nigeria", flag: "/nigeria_flag.png" },
        { name: "Zambia", flag: "/zambia_flag.png" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % countries.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, [countries.length]);

    return (
        <div className="bg-[#E1E2E2]">
            <div className="w-[90%] md:max-w-7xl mx-auto py-20">
                <h1 className="text-center text-3xl md:text-4xl font-bold text-blue-900">
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
                                <div className="text-start md:text-center lg:text-start flex lg:block items-center gap-2 mt-1">
                                    <img src={countries[currentIndex].flag} alt={countries[currentIndex].name} className="w-12 h-10" />
                                    <h2 className="text-4xl md:text-5xl font-bold text-green-600 dark:text-white">
                                        {countries[currentIndex].name}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

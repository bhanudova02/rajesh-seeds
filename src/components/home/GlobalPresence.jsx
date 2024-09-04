import Globe from "@/components/magicui/globe";
import NumberTicker from "../magicui/number-ticker";
import WordRotate from "../magicui/word-rotate";

export function GlobalPresence() {
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
                            <img src="/WorldMap.PNG" alt="Map" className="w-full h-full object-cover     rounded-md" />
                        </div>
                        <div className="w-full lg:w-[40%] px-4 flex justify-center items-center">
                            <div>
                                <h2 className="text-2xl font-bold">
                                    $100 MILLION
                                    PSPL'S INVESTMENT IN THE
                                    INDIAN AGRO SECTOR
                                </h2>
                                <p className="mt-1">
                                    PSPL has established a leadership position in the Indian Seed processing industry. We are now in the process of expanding these infrastructure services in seeds, chemicals and other allied sectors to our partners in Asia and Africa.
                                </p>
                                <div className="mt-6 text-start md:text-center lg:text-start">
                                    <h2 className="font-bold text-lg text-blue-700">We operate in the following countries</h2>
                                    <WordRotate
                                        className="text-4xl md:text-6xl font-bold text-green-600 dark:text-white"
                                        words={["India", "Bangladesh","Indonesia","Philippines","Singapore","Vietnam","Ghana","Nigeria","Zambia"]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
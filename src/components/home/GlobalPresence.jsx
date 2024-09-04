import Globe from "@/components/magicui/globe";
 
export function GlobalPresence() {
    return (
        <div className="bg-[#E1E2E2]">
            <div className="w-[90%] md:max-w-7xl mx-auto py-20">
                <h1 className="text-center text-3xl md:text-4xl font-bold text-blue-900">
                    Global Presence
                </h1>
                <div className="grid grid-cols-4 justify-center text-center gap-4 mt-10 px-20">
                    <div className="border bg-white py-4 rounded-md shadow shadow-green-400">
                        <h2 className="font-bold text-2xl">Across</h2>
                        <h1 className="font-bold text-4xl">2</h1>
                        <h5 className="font-medium text-2xl">Continents</h5>
                    </div>
                    <div className="border bg-white py-4 rounded-md shadow shadow-green-400">
                        <h2 className="font-bold text-2xl">Operating</h2>
                        <h1 className="font-bold text-4xl">9</h1>
                        <h5 className="font-medium text-2xl">Countries</h5>
                    </div>
                    <div className="border bg-white py-4 rounded-md shadow shadow-green-400">
                        <h2 className="font-bold text-2xl">India</h2>
                        <h1 className="font-bold text-4xl">40+</h1>
                        <h5 className="font-medium text-2xl">Units</h5>
                    </div>
                    <div className="border bg-white py-4 rounded-md shadow shadow-green-400">
                        <h2 className="font-bold text-2xl">International</h2>
                        <h1 className="font-bold text-4xl">10+</h1>
                        <h5 className="font-medium text-2xl">Units</h5>
                    </div>
                </div>
                <div className=" relative">
                
                </div>
            </div>
        </div>
    )
}
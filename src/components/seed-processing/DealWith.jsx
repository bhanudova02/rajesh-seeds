import NumberTicker from "../magicui/number-ticker";

export function DealWith() {
    return (
        <div className="bg-[#FCFAE9] text-black py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div>


                    <div className="py-10 rounded-md ">
                        <h2 className="text-center font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-sky-600 mb-8">
                            We Deal With
                        </h2>
                        <div className="flex justify-center items-center">
                            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8 lg:gap-14">
                                <div>
                                    <img src="/caron_icon.png" alt="corn_logo" className="shadow shadow-green-800 rounded-full p-1 w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain bg-white" />
                                    <h2 className="mt-2 text-center font-bold text-base md:text-xl text-lime-600">Caron</h2>
                                </div>
                                <div>
                                    <img src="/cotton_icon.png" alt="corn_logo" className="shadow shadow-green-800 rounded-full p-1 w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain bg-white" />
                                    <h2 className="mt-2 text-center font-bold text-base md:text-xl text-lime-600">Cotton</h2>
                                </div>
                                <div>
                                    <img src="/rice-_icon.png" alt="corn_logo" className="shadow shadow-green-800 rounded-full p-1 w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain bg-white" />
                                    <h2 className="mt-2 text-center font-bold text-base md:text-xl text-lime-600">Rice</h2>
                                </div>
                                <div className="hidden md:block">
                                    <img src="/mustard_icon.png" alt="corn_logo" className="shadow shadow-green-800 rounded-full p-1 w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain bg-white" />
                                    <h2 className="mt-2 text-center font-bold text-base md:text-xl text-lime-600">Mustard</h2>
                                </div>
                                <div className="hidden md:block">
                                    <img src="/millets_icon.png" alt="corn_logo" className="shadow shadow-green-800 rounded-full p-1 w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain bg-white" />
                                    <h2 className="mt-2 text-center font-bold text-base md:text-xl text-lime-600">Millets</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:hidden justify-center items-center gap-6 mt-4">
                            <div>
                                <img src="/mustard_icon.png" alt="corn_logo" className="shadow shadow-green-800 rounded-full p-1 w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain bg-white" />
                                <h2 className="mt-2 text-center font-bold text-base md:text-xl text-lime-600">Mustard</h2>
                            </div>
                            <div>
                                <img src="/millets_icon.png" alt="corn_logo" className="shadow shadow-green-800 rounded-full p-1 w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain bg-white" />
                                <h2 className="mt-2 text-center font-bold text-base md:text-xl text-lime-600">Millets</h2>
                            </div>
                        </div>
                    </div>


                    <div className="mt-6 md:mt-10 lg:mt-16 rounded-md">
                        <div className="flex justify-center items-center">
                            <h2 className="text-center font-bold text-2xl md:text-3xl mb-6 md:mb-8 custom-underline inline-flex justify-center items-center">
                                Our Capacities
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto space-y-4 md:space-y-0">
                            <div className="flex flex-col justify-center items-center border p-2">
                                <h2 className="text-[#1E3A8A] text-2xl md:text-3xl lg:text-4xl font-extrabold text-center">
                                    <NumberTicker className="text-[#1E3A8A]" value={16} />+
                                </h2>
                                <p className="font-semibold">MT cold storage support</p>
                            </div>
                            <div className="flex flex-col justify-center items-center border p-2">
                                <h2 className="text-[#1E3A8A] text-2xl md:text-3xl lg:text-4xl font-extrabold text-center">
                                    <NumberTicker className="text-[#1E3A8A]" value={26} />+
                                </h2>
                                <p className="font-semibold">Drying units</p>
                            </div>

                            <div className="flex flex-col justify-center items-center border p-2">
                                <h2 className="text-[#1E3A8A] text-2xl md:text-3xl lg:text-4xl font-extrabold text-center">
                                    <NumberTicker className="text-[#1E3A8A]" value={24} />+
                                </h2>
                                <p className="font-semibold">Conditioning Units</p>
                            </div>
                            <div className="flex flex-col justify-center items-center border p-2">
                                <h2 className="text-[#1E3A8A] text-2xl md:text-3xl lg:text-4xl font-extrabold text-center">
                                    <NumberTicker className="text-[#1E3A8A]" value={5000} />+
                                </h2>
                                <p className="font-semibold">MT Warehouse capacity</p>
                            </div>
                        </div>
                    </div>






                </div>
            </div>
        </div>
    )
}
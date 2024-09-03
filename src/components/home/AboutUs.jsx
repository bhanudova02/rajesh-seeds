import NumberTicker from "@/components/magicui/number-ticker";
 
export function AboutUs() {
    return (
        <div className=" bg-gray-200/10 bg-center relative">
            <div className="absolute top-0 z-[-2] h-fit bg-white/10 w-full mx-auto bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,0,0.13)_0,rgba(0,163,0,0)_50%,rgba(0,163,0,0)_100%)]">
                <div className="w-[90%] md:max-w-7xl mx-auto py-20">
                    <div className="space-y-2">
                        <h2 className="text-center font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-800">Numbers That Set Us Apart</h2>
                        <p className="text-center text-lg">Established in 1978 and Head Quartered in Hyderabad, India, Prasad Seeds is a leading provider of seed processing services for the industry leaders. With cutting-edge infrastructure and specialised expertise, Prasad Seeds offers complete and customized solutions, helping clients cut costs, save time, and streamline their operations.</p>
                    </div>
                    <div className="bg-green-50/20 rounded-md w-full text-primary-content mt-4">
                        <div className="flex justify-center items-center py-10">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                                <div>
                                    <div className="flex justify-center">
                                        <img src="/icon-units.png" width={1000} height={1000} alt="Counter1" className="w-20 h-20 lg:w-24 lg:h-24 bg-white p-2 rounded-3xl" />
                                    </div>
                                    <h2 className="text-[#4BC714] text-2xl md:text-3xl lg:text-4xl font-extrabold text-center my-0 md:my-3"><NumberTicker className="text-[#4BC714]" value={50} />+</h2>
                                    <p className="text-lg md:text-xl lg:text-base text-center font-bold">Units</p>
                                </div>
                                <div>
                                    <div className="flex justify-center">
                                        <img src="/icon-workforce.png" width={1000} height={1000} alt="Counter2" className="w-20 h-20 lg:w-24 lg:h-24 bg-white p-2 rounded-3xl" />
                                    </div>
                                    <h2 className="text-[#4BC714] text-2xl md:text-3xl lg:text-4xl font-extrabold text-center my-0 md:my-3"><NumberTicker className="text-[#4BC714]" value={320} />+</h2>
                                    <p className="text-lg md:text-xl lg:text-base text-center font-bold">Skilled Workforce</p>
                                </div>
                                <div>
                                    <div className="flex justify-center">
                                        <img src="/food-production.png" width={1000} height={1000} alt="Counter3" className="w-20 h-20 lg:w-24 lg:h-24 bg-white p-2 rounded-3xl" />
                                    </div>
                                    <h2 className="text-[#4BC714] text-2xl md:text-3xl lg:text-4xl font-extrabold text-center my-0 md:my-3"><NumberTicker className="text-[#4BC714]" value={2000} />+</h2>
                                    <p className="text-lg md:text-xl lg:text-base text-center font-bold">MT Food Per Year</p>
                                </div>
                                <div>
                                    <div className="flex justify-center">
                                        <img src="/feed-production.png" width={1000} height={1000} alt="Counter3" className="w-20 h-20 lg:w-24 lg:h-24 bg-white p-2 rounded-3xl" />
                                    </div>
                                    <h2 className="text-[#4BC714] text-2xl md:text-3xl lg:text-4xl font-extrabold text-center my-0 md:my-3"><NumberTicker className="text-[#4BC714]" value={7000} />+</h2>
                                    <p className="text-lg md:text-xl lg:text-base text-center font-bold">MT Feeds Per Year</p>
                                </div>
                                <div>
                                    <div className="flex justify-center">
                                        <img src="/seed-production.png" width={1000} height={1000} alt="Counter3" className="w-20 h-20 lg:w-24 lg:h-24 bg-white p-2 rounded-3xl" />
                                    </div>
                                    <h2 className="text-[#4BC714] text-2xl md:text-3xl lg:text-4xl font-extrabold text-center my-0 md:my-3"><NumberTicker className="text-[#4BC714]" value={1.50} />Lakh+</h2>
                                    <p className="text-lg md:text-xl lg:text-base text-center font-bold">MT Seeds Per Year</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
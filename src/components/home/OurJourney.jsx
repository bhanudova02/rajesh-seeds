import { FaAngleDoubleDown } from "react-icons/fa";
export function OurJourney() {
    return (
        <div className="bg-white">
            <div className="w-[90%] md:max-w-7xl mx-auto py-20">
                <h2 className="mb-8 text-center text-3xl md:text-5xl font-bold bg-gradient-to-r from-sky-900 to-green-600 text-transparent bg-clip-text">
                    Our Journey
                </h2>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full lg:w-[65%] h-[500px] relative overflow-y-auto shadow-md rounded-md shadow-black custom-scrollbar border-2 border-green-600">
                        <div className="flex justify-center items-center absolute top-4 right-4">
                            <p className="text-lime-900 text-lg animate-bounce font-bold flex items-center mt-2 md:mt-4">
                                Scroll to view Our Journey <FaAngleDoubleDown className="text-lg md:text-xl" />
                            </p>
                        </div>
                        <img src="/Timeline_Journey.png" alt="TimeLine" className="w-[40rem] mx-auto" />
                    </div>
                    <div className="relative w-full lg:w-[35%] ">
                        <img src="/journeyBox.jpg" alt="journey_right_box.jpg" className="md:absolute top-0 left-0 h-[50vh] md:h-full w-full" />
                        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-xl p-10 flex justify-center items-center">
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Company Overview</h3>
                                <p className="text-gray-200 mb-4 text-xs md:text-base">
                                    Rajesh Seeds Pvt. Ltd. (RSPL) is India’s largest partner in the Seed Processing industry, offering end-to-end turnkey solutions to global seed companies. For over 30 years, RSPL has been providing cutting-edge seed processing infrastructure, enabling customers to achieve international quality standards while optimizing costs and efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

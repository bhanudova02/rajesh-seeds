export function OurPrestigiousClients() {
    return (
        <div className="bg-slate-50">
            <div className="w-[90%] md:max-w-7xl mx-auto py-16 md:py-24">
                <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-900 mb-6">
                    Our Prestigious Clients
                </h1>
                {/* Added a decorative underline for the title */}
                <div className="flex justify-center">
                    <div className="h-1 w-20 bg-blue-900 rounded-full mb-10"></div>
                </div>
                {/* Content Section */}
                <div className="p-8 bg-white shadow-lg rounded-lg text-center max-w-4xl mx-auto">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                        <span className="font-semibold text-blue-900">PSPL</span>, as an industry leader, has 
                        established high standards by deeply understanding its customers' businesses. 
                        With keen insight into the priorities of global agro companies, PSPL consistently 
                        meets their needs. Our company's long-term investments in infrastructure have 
                        proven invaluable, enabling stringent quality and cost control, strict adherence 
                        to regulatory compliances, and swift turnaround times.
                    </p>
                    {/* Client Logos Section */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {/* Example logos */}
                        <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                            <img
                                src="/path-to-client-logo1.png"
                                alt="Client 1"
                                className="w-32 h-auto object-contain"
                            />
                        </div>
                        <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                            <img
                                src="/path-to-client-logo2.png"
                                alt="Client 2"
                                className="w-32 h-auto object-contain"
                            />
                        </div>
                        <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                            <img
                                src="/path-to-client-logo3.png"
                                alt="Client 3"
                                className="w-32 h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

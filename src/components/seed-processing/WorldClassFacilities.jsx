export function WorldClassFacilities() {
    const listData = [
        'State-of-the-art drying machinery designed for optimal processing of grains and seeds.',
        'Advanced conveying systems for efficient drying and conditioning processes.',
        'Comprehensive cleaning, treatment, and packing solutions for grains and seeds.',
        'Secure storage solutions including cold storage and spacious warehouses for seeds and grains.',
        'High-standard seed quality laboratories for precise testing and analysis.',
        'Sophisticated cold chain infrastructure to maintain product quality.',
        'Extensive storage facilities and warehouse infrastructure to support large-scale operations.',
        'Modern automated logistics and distribution systems for streamlined operations.'
    ];

    return (
        <div className="bg-[#FFFFE6] py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full m-auto">
                    <div className="relative">
                        <img src="/WorldClassFacilities.jpg" alt="WorldClassFacilities" className="lg:absolute left-0 top-0 w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl md:text-5xl custom-underline">World Class <span className="text-teal-600">Facilities</span></h2>
                        <ul className="space-y-4 mt-4 text-lg font-medium">
                           {listData.map(data => (
                               <li key={data} className="flex items-start">
                                   <img src="/check-mark_icon.png" alt="check-mark" className="w-4 object-contain mt-1.5"/>
                                   {data}
                               </li>
                           ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

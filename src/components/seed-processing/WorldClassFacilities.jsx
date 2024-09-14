export function WorldClassFacilities() {
    const listData = [
        'Hi-TECH Drying Machinery is suitable for grains and seeds.',
        'Conveying equipment for drying and conditioning lines.',
        'Grain and seed shelling: cleaning, treating, and packing.',
        'Seeds and grains are stored in cold storage and warehouses.',
        'Seed Quality Labs.',
        'Advanced cold chain infrastructure.',
        'Ample Storage and Warehouse Infrastructure.',
        'Automated logistics and distribution infrastructure.'
    ]
    return (
        <div className="bg-[#FFFFE6] py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-[85%] m-auto">
                    <div className="relative">
                        <img src="/WorldClassFacilities.jpg" alt="WorldClassFacilities" className="lg:absolute left-0 top-0 w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl md:text-5xl custom-underline">World Class <span className="text-teal-600">Facilities</span></h2>
                        <ul className="space-y-4 mt-4 text-lg font-medium">
                           {listData.map(data=>
                            <li key={data} className="flex items-start"><img src="/check-mark_icon.png" alt="logo" className="w-4 object-contain mt-1.5"/>{data}</li>
                           )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function WhatWeOffer() {
    const serviceBox = [
        { id: 1, image: '/Home_SeedProcessing.png', title: 'Seed Processing', paragraph: 'We provide top-tier global seed processing solutions, meeting rigorous quality across the globe.' },
        { id: 2, image: '/HomeSeedToSeed.png', title: 'Seed To Seed', paragraph: 'We ensure IP-protected infrastructure, delivering high-quality seed-to-seed services globally.' },
        { id: 3, image: '/HomeFoodProcessing.png', title: 'Food Processing', paragraph: 'We offer global food processing solutions, providing 24/7 packing, shipping, and processing services.' },
        { id: 4, image: '/HomePSPLFeed.png', title: 'PSPL Feeds', paragraph: 'High-quality, nutritious and reliable animal feed options like corn silage, ensuring a shelf life of 1.5 years.' },
        { id: 5, image: '/HomeAgroChemical.png', title: 'Agro Chemicals', paragraph: 'We provide top-tier chemical production with cutting-edge, high-throughput facilities for enterprises.' }
    ]
    return (
        <div className="bg-[#F2F2F2] md:text-lg">
            <div className="w-[90%] md:max-w-7xl mx-auto py-20">
                <h1 className="text-center text-3xl md:text-5xl font-bold">
                    What Services<span className="text-green-600"> We Offer</span>
                </h1>

                <div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10'>
                        {serviceBox.map((data, index) =>
                            <div key={index} className="flex justify-center items-center">
                                <div className="p-3 shadow-md rounded-md w-full bg-white hover:shadow-green-800 transition-all">
                                    <div>
                                        <div className="flex justify-center pb-2">
                                            <img src={data.image} width={1000} height={1000} alt={data.image} className="w-40 h-40 object-contain" />
                                        </div>
                                        <div className='space-y-2'>
                                            <h2 className="text-base md:text-lg lg:text-2xl font-semibold  h-full">{data.title}</h2>
                                            <p className="text-xs md:text-sm lg:text-sm font-medium h-[100px]">{data.paragraph}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

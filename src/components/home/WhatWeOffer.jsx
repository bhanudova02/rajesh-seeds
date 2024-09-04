import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeCardComponent from './HomeCardComponent';

export function WhatWeOffer() {
    const responsiveMultiCard = {
        desktop: {
            breakpoint: { max: 3000, min: 1324 },
            items: 4,
            sidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1324, min: 764 },
            items: 2,
            sidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 764, min: 0 },
            items: 1,
            sidesToSlide: 1
        }
    }

    const HomeWhatWeOffer = [
        { id: 1, title: "Seed Processing", description: "We provide top-tier global seed processing solutions, meeting rigorous quality across the globe.", images: "/Home_SeedProcessing.png", padding: "0" },
        { id: 2, title: "Seed To Seed", description: "We ensure IP-protected infrastructure, delivering high-quality seed-to-seed services globally.", images: "/HomeSeedToSeed.png", padding: "0" },
        { id: 3, title: "Food Processing", description: "We offer global food processing solutions, providing 24/7 packing, shipping, and processing services.", images: "/HomeFoodProcessing.png", padding: "0" },
        { id: 4, title: "PSPL Feeds", description: "High-quality, nutritious and reliable animal feed options like corn silage, ensuring a shelf life of 1.5 years.", images: "/HomePSPLFeed.png", padding: "0" },
        { id: 5, title: "Agro Chemicals", description: "We provide top-tier chemical production with cutting-edge, high-throughput facilities for enterprises.", images: "/HomeAgroChemical.png", padding: "6" },
    ];
    return (
        <div className="bg-[#F2F2F2] md:text-lg">
            <div className="w-full mx-auto py-20">
                <h1 className="text-center text-3xl md:text-4xl font-bold">
                    What Services<span className="text-green-600"> We Offer</span>
                </h1>
                <div className='w-[90%] mt-[1rem] mx-auto'>
                    <Carousel
                        additionalTransfrom={0}
                        arrows={true}
                        autoPlay={true}
                        autoPlaySpeed={1700}
                        centerMode={false}
                        infinite
                        responsive={responsiveMultiCard}
                        itemClass='item'
                        showDots={false}
                    >
                        {
                            HomeWhatWeOffer.map((services) => (
                                <HomeCardComponent key={services.id} id={services.id} title={services.title} description={services.description} images={services.images} padding={services.padding} />
                            ))
                        }
                    </Carousel>
                </div>

            </div>
        </div>
    )
}
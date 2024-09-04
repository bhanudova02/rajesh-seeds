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

    const cardGamesData = [
        { id: 1, title: "Seed Processing", description: "We provide top-tier global seed processing solutions, meeting rigorous quality across the globe.", images: "/avatar-1.png", review: "6", price: "20.00$" },
        { id: 2, title: "Seed To Seed", description: "We ensure IP-protected infrastructure, delivering high-quality seed-to-seed services globally.", images: "/avatar-2.png", review: "6", price: "20.00$" },
        { id: 3, title: "Food Processing", description: "We offer global food processing solutions, providing 24/7 packing, shipping, and processing services.", images: "/avatar-3.png", review: "6", price: "20.00$" },
        { id: 4, title: "PSPL Feeds", description: "High-quality, nutritious and reliable animal feed options like corn silage, ensuring a shelf life of 1.5 years.", images: "/avatar-4.png", review: "6", price: "20.00$" },
        { id: 5, title: "Agro Chemicals", description: "We provide top-tier chemical production with cutting-edge, high-throughput facilities for enterprises.", images: "/avatar-5.png", review: "6", price: "20.00$" },
    ];
    return (
        <div className="bg-[#F2F2F2]">
            <div className="w-[90%] md:max-w-7xl mx-auto py-20">
                <h1 className="text-center text-4xl font-bold">
                    What We <span className="text-green-600">Offer</span>
                </h1>
                <div className='w-[90%] mt-[1rem] mx-auto'>
                    <Carousel
                        additionalTransfrom={0}
                        arrows={true}
                        autoPlay={true}
                        autoPlaySpeed={1000}
                        centerMode={false}
                        infinite
                        responsive={responsiveMultiCard}
                        itemClass='item'
                        showDots={false}
                    >
                        {
                            cardGamesData.map((game) => (
                                <HomeCardComponent key={game.id} id={game.id} title={game.title} description={game.description} images={game.images} review={game.review} price={game.price} />
                            ))
                        }
                    </Carousel>
                </div>

            </div>
        </div>
    )
}
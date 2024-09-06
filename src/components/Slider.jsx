import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Carousel_Home_Data } from "@/lib/data";

export function Slider() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <Carousel
            plugins={[plugin.current]}
         
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {Carousel_Home_Data.map((slider, index) => (
                    <CarouselItem key={index}>
                        <div className="relative">
                            <img
                                src={slider.image}
                                alt="Banners"
                                className="w-full h-[430px] md:h-[90vh] lg:h-[100vh] object-cover"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                <div className="w-[18rem] md:w-[35rem] lg:w-[50rem] mt-10">
                                    <h3 className="text-white font-bold text-2xl md:text-5xl">{slider.title}</h3>
                                    <p className="text-white text-xs md:text-base font-semibold mt-2">{slider.description}</p>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

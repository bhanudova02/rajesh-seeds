import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

export function PrestigiousClients() {
    const reviews = [
        {
            img: "/client_1.png",
        },
        {
            img: "/client_2.png",
        },
        {
            img: "/client_3.png",
        },
        {
            img: "/client_4.png",
        },
        {
            img: "/client_5.png",

        },
        {
            img: "/client_6.png",
        },
        {
            img: "/client_7.png",
        },
        {
            img: "/client_8.png",

        },
    ];

    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);

    const ReviewCard = ({
        img,
        name,
        username,
        body,
    }) => {
        return (
            <figure
                className={cn(
                    "relative w-fit md:w-64 cursor-pointer overflow-hidden rounded-xl",
                    // light styles
                    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                    // dark styles
                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                )}
            >
                <div className="flex flex-row items-center justify-center gap-2">
                    <img className="rounded-full w-28 md:w-48" src={img} />
                </div>
            </figure>
        );
    };

    return (
        <div className="bg-[#F9FAFB]">
            <div className="w-[90%] md:max-w-7xl mx-auto py-20">
                <h1 className="text-center text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-teal-600 text-transparent bg-clip-text">
                    Our Prestigious Clients
                </h1>

                <div className="relative flex mt-8 w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((review, index) => (
                            <ReviewCard key={`first-row-${index}`} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {secondRow.map((review, index) => (
                            <ReviewCard key={`second-row-${index}`} {...review} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}
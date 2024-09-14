import FlipText from "@/components/magicui/flip-text";

export function HeroComponent({ img, title }) {
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 w-full h-[38vh] md:h-[50vh] lg:h-[96vh] bg-black opacity-50" />
            <img src={img} alt={img} className="w-full h-[38vh] md:h-[50vh] lg:h-[96vh] object-cover" />
            <div className="absolute top-[22%] md:top-[28%] left-1/2 lg:top-1/2 lg:left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-full lg:w-[36rem]">
                    <FlipText
                        className="text-white font-bold text-2xl md:text-5xl lg:text-6xl"
                        word={title}
                    />
                </div>
            </div>
        </div>
    )
}
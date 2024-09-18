import NumberTicker from "../magicui/number-ticker";

const items = [
  { src: "/caron_icon.png", alt: "Caron crop icon", label: "Caron" },
  { src: "/cotton_icon.png", alt: "Cotton crop icon", label: "Cotton" },
  { src: "/rice-_icon.png", alt: "Rice crop icon", label: "Rice" },
  { src: "/mustard_icon.png", alt: "Mustard crop icon", label: "Mustard", hidden: "md" },
  { src: "/millets_icon.png", alt: "Millets crop icon", label: "Millets", hidden: "md" }
];

const capacities = [
  { value: 20, label: "MT cold storage support" },  // Updated number
  { value: 30, label: "Drying units" },             // Updated number
  { value: 28, label: "Conditioning Units" },       // Updated number
  { value: 6000, label: "MT Warehouse capacity" }   // Updated number
];

export function DealWith() {
  return (
    <div className="bg-[#FCFAE9] text-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="pb-10 rounded-md">
          <h2 className="text-center font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-sky-600 mb-8">
            We Deal With
          </h2>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8 lg:gap-14">
              {items.map((item, index) => (
                <div key={index} className={item.hidden ? 'hidden md:block' : ''}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="shadow shadow-green-800 rounded-full p-1 w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain bg-white"
                  />
                  <h2 className="mt-2 text-center font-bold text-base md:text-xl text-lime-600">{item.label}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="flex md:hidden justify-center items-center gap-6 mt-4">
            {items.filter(item => item.hidden).map((item, index) => (
              <div key={index}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="shadow shadow-green-800 rounded-full p-1 w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain bg-white"
                />
                <h2 className="mt-2 text-center font-bold text-base md:text-xl text-lime-600">{item.label}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 md:mt-10 lg:mt-16 rounded-md">
          <div className="flex justify-center items-center">
            <h2 className="text-center font-bold text-2xl md:text-3xl mb-6 md:mb-8 custom-underline inline-flex justify-center items-center">
              Our Capacities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto space-y-4 md:space-y-0">
            {capacities.map((capacity, index) => (
              <div key={index} className="flex flex-col justify-center items-center border p-2">
                <h2 className="text-[#1E3A8A] text-2xl md:text-3xl lg:text-4xl font-extrabold text-center">
                  <NumberTicker className="text-[#1E3A8A]" value={capacity.value} />+
                </h2>
                <p className="font-semibold">{capacity.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

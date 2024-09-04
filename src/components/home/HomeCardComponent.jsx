import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
const HomeCardComponent = ({ title, description, images, price }) => {
    return <div className="bg-white p-6 rounded-lg m-3">
        <div className="w-[200px] mx-auto h-[200px]">
            <img
                src={images}
                alt={title}
                className="w-[100%] h-[100%] object-cover"
            />
        </div>
        <h1 className="mt-[1.3rem] text-[22px] text-black font-semibold text-center">{title}</h1>
        <p className="mt-[0.5rem] text-black opacity-70 text-sm text-center">{description}</p>
    </div>
}

export default HomeCardComponent;




const HomeCardComponent = ({ title, description, images, padding }) => {
    return <div className="bg-white p-6 rounded-lg m-3">
        <div className="w-[200px] mx-auto h-[200px]">
            <img
                src={images}
                alt={title}
                className={`w-[100%] h-[100%] object-contain p-${padding}`}
            />
        </div>
        <h1 className="mt-[1.3rem] text-[#192e64] text-[22px] font-semibold">{title}</h1>
        <p className="mt-[0.5rem] text-black opacity-70 text-sm">{description}</p>
    </div>
}

export default HomeCardComponent;




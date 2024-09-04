import { useState, useEffect } from "react";

const WordRotate = ({ countries, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % countries.length);
        }, 3000); // Change the word every 3 seconds
        return () => clearInterval(interval);
    }, [countries.length]);

    return (
        <div className={className}>
            <img src={countries[currentIndex].flag} alt={countries[currentIndex].name} className="inline-block h-8 w-8 mr-2" />
            {countries[currentIndex].name}
        </div>
    );
};

export default WordRotate;

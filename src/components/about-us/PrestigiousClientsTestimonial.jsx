import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export function PrestigiousClientsTestimonial() {
    const testimonials = [
        {
            id: 1,
            name: 'Emma Thompson',
            title: 'CEO, AgriTech Innovations',
            quote: 'The seed processing services provided by this company have significantly boosted our crop yields and overall efficiency!',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
        },
        {
            id: 2,
            name: 'John Doe',
            title: 'Operations Manager, Greenfields Agro',
            quote: 'Their food processing solutions are unmatched in quality. They have helped us scale our production without compromising on standards.',
            image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
        },
        {
            id: 3,
            name: 'Sarah Lee',
            title: 'Consultant, Sustainable Farming Solutions',
            quote: 'From seed-to-seed, their services have been pivotal in improving our seed quality and ensuring sustainability in farming.',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(nextSlide, 5000);
        }
        return () => clearInterval(interval);
    }, [isPaused]);

    // Static color values for customization
    const customColors = {
        text: 'text-gray-800',
        accent: 'bg-blue-500'
    };

    return (
        <div className='w-[90%] md:max-w-7xl mx-auto py-20'>
            <h2 className="text-center font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r mb-12 from-lime-500 to-blue-800">
                What Our Clients Say
            </h2>
            <div
                className="max-w-4xl mx-auto p-8 rounded-lg border"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                <div className="flex flex-col items-center md:flex-row md:items-start">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-32 h-32 rounded-full object-cover mb-4 md:mr-8 md:mb-0"
                                    />
                                    <div className="flex-1">
                                        <p className={`${customColors.text} text-xl italic mb-4`}>"{testimonial.quote}"</p>
                                        <p className={`${customColors.text} font-bold`}>{testimonial.name}</p>
                                        <p className={`${customColors.text} text-sm`}>{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                    <button
                        onClick={prevSlide}
                        className={`${customColors.accent} text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                        aria-label="Previous testimonial"
                    >
                        <FaChevronLeft />
                    </button>
                    <div className="flex space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full ${index === currentSlide ? customColors.accent : 'bg-gray-300'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextSlide}
                        className={`${customColors.accent} text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                        aria-label="Next testimonial"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
}

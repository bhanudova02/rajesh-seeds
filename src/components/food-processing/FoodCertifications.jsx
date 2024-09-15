import { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export function FoodCertifications() {
    const certifications = [
        { id: 1, name: 'Organic', image: '/Food_Certification1.png' },
        { id: 2, name: 'Non-GMO', image: '/Food_Certification2.png' },
        { id: 3, name: 'Gluten-Free', image: '/Food_Certification3.png' },
        { id: 4, name: 'Vegan', image: '/Food_Certification4.png' },
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            navigateImage(-1);
        } else if (e.key === 'ArrowRight') {
            navigateImage(1);
        }
    };

    const navigateImage = (direction) => {
        const newIndex = (currentIndex + direction + certifications.length) % certifications.length;
        setSelectedImage(certifications[newIndex].image);
        setCurrentIndex(newIndex);
    };

    return (
        <div className="bg-white py-20">
            <div className="w-[90%] md:max-w-7xl mx-auto">
                <h2 className="text-center font-bold text-3xl md:text-5xl text-blue-900 mb-12">Food Certifications</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {certifications.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="relative overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer border-2 shadow-black p-1"
                            onClick={() => openModal(cert.image, index)}
                        >
                            <img
                                src={cert.image}
                                alt={cert.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <span className="text-white text-lg font-semibold">{cert.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                        onClick={closeModal}
                        onKeyDown={handleKeyDown}
                        tabIndex="0"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div
                            className="relative bg-slate-50 p-1 md:p-2 rounded-lg max-w-3xl max-h-[90vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                                onClick={closeModal}
                                aria-label="Close modal"
                            >
                                <FaTimes size={24} className='text-red-600 border-2 border-black/60 shadow-sm shadow-black bg-white rounded-full'/>
                            </button>
                            <img
                                src={selectedImage}
                                alt="Selected certification"
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />
                            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                                <button
                                    onClick={() => navigateImage(-1)}
                                    className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                                    aria-label="Previous image"
                                >
                                    <FaChevronLeft size={24} />
                                </button>
                            </div>
                            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                                <button
                                    onClick={() => navigateImage(1)}
                                    className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                                    aria-label="Next image"
                                >
                                    <FaChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
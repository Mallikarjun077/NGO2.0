import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import img1 from "../assets/Health/Health.jpg";
import img2 from "../assets/Education/Edu.3.jpg";
import img3 from "../assets/Education/edu.jpg";
import img4 from "../assets/Education/Edu2.jpg";
import img5 from "../assets/Education/Edu4.jpg";
import img6 from "../assets/Education/Edu5.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  const scrollRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 400; 
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-12 bg-[rgba(18,23,26)] overflow-hidden ">
      <div className="text-center mb-10 mt-16">
        <h2 className="text-4xl font-bold text-white mb-3">Gallery</h2>
        <p className="text-white">
          Explore our moments and memories captured beautifully.
        </p>
      </div>

      <button
        onClick={() => scroll("left")}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 mt-20 hover:scale-110 transition z-10"
      >
        <ChevronLeft size={28} className="text-gray-700" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 mt-20 hover:scale-110 transition z-10"
      >
        <ChevronRight size={28} className="text-gray-700" />
      </button>

      <div className="px-6 md:px-12">
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll space-x-6 pb-4 snap-x snap-mandatory scroll-smooth gallery-scroll"
        >
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)} // opens popup
              className="flex-none w-80 h-56 md:w-96 md:h-64 rounded-2xl overflow-hidden shadow-lg snap-center hover:scale-105 transition-transform duration-500 cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/85 bg-opacity-80 flex items-center justify-center z-50 animate-fadeIn">
          <div className="relative max-w-4xl w-[90%]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
            >
              <X size={24} className="text-gray-800" />
            </button>

            {/* Image in Popup */}
            <img
              src={selectedImage}
              alt="Selected"
              className="rounded-2xl w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

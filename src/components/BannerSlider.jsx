
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: 1, image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/06/xbox-game-pass-showcase-2023.jpg", title: "Explore New Games" },
  { id: 2, image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/09/battlefield-concept-art.jpg", title: "Join Battle Royale" },
  { id: 3, image: "https://tse2.mm.bing.net/th/id/OIP.yOr-kDdJc6oZkEGPlpFKxQHaEP?rs=1&pid=ImgDetMain&o=7&rm=3", title: "Adventure Awaits" },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg mb-12">
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute w-full h-full"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-10 left-10 text-white bg-black bg-opacity-50 p-4 rounded">
                  <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

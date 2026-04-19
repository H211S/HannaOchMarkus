import { useState } from "react";

function Galleri() {
  const images = [
    "/public/gallery/HM2014.jpg",
    "/public/gallery/HM2015.jpg",
    "/public/gallery/HM2016.jpg",
    "/public/gallery/HM2017.jpg",
    "/public/gallery/HM2018.jpeg",
    "/public/gallery/HM2019.jpg",
    "/public/gallery/HM2020.jpg",
    "/public/gallery/HM2021.jpg",
    "/public/gallery/HM2022.jpeg",
    "/public/gallery/HM2023.jpg",
    "/public/gallery/HM2024.jpeg",
    "/public/gallery/HM2025.jpeg",
  ];

  const [activeImages, setActiveImages] = useState([]);

  const toggleImage = (index) => {
    setActiveImages((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-32 bg-black text-white">
      <h2 className="text-center text-2xl md:text-4xl  mb-2 rubrik">
        2014–2025
      </h2>
      <p className="text-center mb-12 text-neutral-500">Tryck för att växla färg</p>
      

      <div className="overflow-x-auto pb-4 custom-scrollbar touch-pan-x">
        <div className="flex gap-6 px-2 snap-x snap-mandatory scroll-smooth">
          {images.map((img, index) => (
            <div key={index} className="min-w-[200px] md:min-w-[450px] snap-center">
              <img
                src={img}
                alt="gallery"
                onClick={() => toggleImage(index)}
                className={`h-full w-[400px] object-cover rounded-lg object-top transition duration-300 cursor-pointer ${
                  activeImages.includes(index) ? "grayscale-0" : "grayscale"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Galleri;
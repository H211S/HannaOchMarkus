import { useState } from "react";

import img2014 from "../assets/gallery/hm2014.jpg";
import img2015 from "../assets/gallery/HM2015.jpg";
import img2016 from "../assets/gallery/HM2016.jpg";
import img2017 from "../assets/gallery/HM2017.jpg";
import img2018 from "../assets/gallery/HM2018.jpeg";
import img2019 from "../assets/gallery/HM2019.jpg";
import img2020 from "../assets/gallery/HM2020.jpg";
import img2021 from "../assets/gallery/HM2021.jpg";
import img2022 from "../assets/gallery/HM2022.jpeg";
import img2023 from "../assets/gallery/HM2023.jpg";
import img2024 from "../assets/gallery/HM2024.jpeg";
import img2025 from "../assets/gallery/HM2025.jpeg";

function Galleri() {
  const images = [
    img2014,
    img2015,
    img2016,
    img2017,
    img2018,
    img2019,
    img2020,
    img2021,
    img2022,
    img2023,
    img2024,
    img2025,
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
      <h2 className="text-center text-2xl md:text-4xl mb-2 rubrik">
        2014–2025
      </h2>

      <p className="text-center mb-12 text-neutral-500">
        Tryck för att växla färg
      </p>

      <div className="overflow-x-auto pb-4 custom-scrollbar touch-pan-x">
        <div className="flex gap-6 px-2 snap-x snap-mandatory scroll-smooth">
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-[200px] md:min-w-[450px] snap-center"
            >
              <img
                src={img}
                alt="gallery"
                onClick={() => toggleImage(index)}
                className={`h-full w-[400px] object-cover rounded-lg object-top transition duration-300 cursor-pointer ${
                  activeImages.includes(index)
                    ? "grayscale-0"
                    : "grayscale"
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
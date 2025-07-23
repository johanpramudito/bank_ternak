// components/ImageSlider.tsx
"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides: string[];
};

const ImageSlider: React.FC<PropType> = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div
      className="embla mt-4 rounded-lg overflow-hidden shadow-lg"
      ref={emblaRef}
    >
      <div className="embla__container flex">
        {slides.map((src, index) => (
          <div
            className="embla__slide relative flex-[0_0_100%] aspect-video"
            key={index}
          >
            <Image
              className="embla__slide__img object-cover"
              src={src}
              alt={`Gambar gejala ${index + 1}`}
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

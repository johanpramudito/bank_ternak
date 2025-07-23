import React from "react";
import HamburgerMenu from "./HamburgerMenuPenyakit";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  penyebab?: string;
  hewanPeka?: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  penyebab,
  hewanPeka,
  backgroundImage,
}) => (
  <header
    className="relative min-h-[350px] bg-cover bg-center text-white flex flex-col justify-end p-6 md:p-8 rounded-b-lg z-0"
    style={{
      backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${backgroundImage})`,
    }}
  >
    <div className="items-center justify-end flex mb-20">
      <HamburgerMenu />
    </div>
    <div className="relative z-10 max-w-4xl flex-wrap" data-aos="fade-right">
      <h1 className="text-4xl md:text-6xl font-extrabold font-unbounded">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-1 text-lg md:text-xl font-plus-jakarta-sans">
          {subtitle}
        </p>
      )}
      <div className="mt-4 inline-block text-sm text-white">
        <div className="flex flex-col md:space-x-6 font-plus-jakarta-sans text-xl">
          {penyebab && (
            <div className="whitespace-pre-line">
              <strong className="font-semibold font-plus-jakarta-sans">
                Penyebab:
              </strong>{" "}
              {penyebab}
            </div>
          )}
          {hewanPeka && (
            <div className="whitespace-pre-line mt-2 md:mt-0">
              <strong className="font-semibold">Hewan Peka:</strong> {hewanPeka}
            </div>
          )}
        </div>
      </div>
    </div>
  </header>
);

export default HeroSection;

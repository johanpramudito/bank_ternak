import React from "react";
import HamburgerMenu from "@/components/HamburgerMenuPenyakit";
import { LiquidGlassFilters } from "@gracefullight/liquid-glass";

// Komponen untuk kotak "Tips" dengan gaya glassmorphism
const TipsBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-white/10 backdrop-blur-xs rounded-3xl p-8 pt-12 border border-white/20 flex flex-col items-start lg:text-left">
    <LiquidGlassFilters />
    <div className="flex items-center gap-3 mb-3">
      {/* Ikon "i" untuk informasi */}
      <div className="absolute top-2 left-2 w-8 h-8 rounded-full text-black bg-white flex items-center justify-center font-bold text-xl font-plus-jakarta-sans">
        i
      </div>
      <h3 className="text-2xl font-bold text-white font-plus-jakarta-sans">
        Tips
      </h3>
    </div>
    <p className="leading-relaxed text-white font-plus-jakarta-sans text-[20px] lg:text-[24px]">
      {children}
    </p>
  </div>
);

const Pakan = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start w-full h-fit">
      <div className="relative flex w-full h-full">
        <div className="relative flex h-fit w-full bg-[url(/penggemukan-ternak/pakan/bg.png)] bg-bottom bg-cover bg-no-repeat">
          <div className="w-full h-full bg-gradient-to-b from-black to-transparent absolute z-[0]"></div>
          <div className="lg:px-[127px] lg:py-[83px] p-10 gap-x-10 gap-y-5 lg:gap-y-10 flex flex-col justify-start items-start">
            <div className="flex flex-row lg:gap-y-10 gap-x-5 lg:gap-x-0 relative z-10 w-full">
              <h1
                className="font-unbounded font-bold text-[40px] lg:text-[96px] text-white flex-grow leading-none"
                data-aos="fade-up"
              >
                PAKAN
              </h1>
              <HamburgerMenu />
            </div>
            <div
              className="flex flex-col lg:gap-y-10 relative gap-y-5 w-full"
              data-aos="fade-up"
            >
              <p className="w-full lg:w-1/2 font-plus-jakarta-sans font-normal text-[20px] lg:text-[24px] text-white text-justify text-sm/relaxed">
                Pada penggemukan pemberian pakan hijauan tidak akan memberikan
                pengaruh yang signifikan terhadap pertambahan bobot badan yang
                tinggi dalam waktu yang singkat. Agar dapat mendorong
                pertumbuhan pada usaha penggemukan, maka pakan yang diberikan
                harus mengandung tiga unsur seperti:
              </p>
              <div className="w-full lg:w-1/2">
                <h3 className="font-plus-jakarta-sans font-bold text-[28px] lg:text-[32px] text-white text-justify text-sm/relaxed">
                  Bahan Pakan Berserat
                </h3>
                <p className="font-plus-jakarta-sans font-normal text-[20px] lg:text-[24px] text-white text-justify text-sm/relaxed">
                  Bahan berserat bisa menggunakan rerumputan, leguminosa, dan
                  hijauan lainnya. Selain hijauan limbah pertanian juga bisa
                  dimanfaatkan untuk dijadikan pakan salah satunya jerami padi,
                  daun kacang tanah, jerami jagung, pucuk tebu dan lainnya.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2">
                  <h3 className="font-plus-jakarta-sans font-bold text-[28px] lg:text-[32px] text-white text-justify text-sm/relaxed">
                    Pakan Penguat
                  </h3>
                  <p className="font-plus-jakarta-sans font-normal text-[20px] lg:text-[24px] text-white text-justify text-sm/relaxed">
                    Pakan penguat (konsentrat) yang mempunyai kandungan nutrisi
                    yang tinggi dan juga kaya akan nilai nutrisi Perlu diingat
                    pemberian konsentrat secara berlebihan dan kandungan serat
                    kasarnya yang rendah dapat menyebabkan kembung karena
                    akumulasi fermentasi pakan konsentrat akan memproduksi gas
                    dan buih. Pada sapi, konsentrat diberikan 30-50% dari total
                    pakan dengan dosis 1-2% dari bobot badan/hari. Untuk kambing
                    konsentrat diberikan 30-40% dari pakan dengan dosis 2-3%
                    dari bobot badan/hari.
                  </p>
                </div>
                {/* Layout khusus untuk Pakan Penguat dan Tips */}
                <div className="w-full lg:w-1/2 flex flex-col lg:flex-row mt-5 lg:mt-0 pl-0 lg:pl-10 justify-center items-center">
                  <div className="">
                    <TipsBox>
                      Untuk menjaga dan memacu pertumbuhan kesehatan ternak,
                      selain diberikan pakan dan minum yang cukup, ada baiknya
                      ternak juga diberikan pakan suplemen, seperti mikronutrien
                      dan vitamin B komplek.
                    </TipsBox>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="font-plus-jakarta-sans font-bold text-[28px] lg:text-[32px] text-white text-justify text-sm/relaxed">
                  Pakan Tambahan
                </h3>
                <p className="font-plus-jakarta-sans font-normal text-[20px] lg:text-[24px] text-white text-justify text-sm/relaxed">
                  Selain pakan berserat dan pakan penguat pakan lainnya adalah
                  pakan tambahan. Pakan tambahan yaitu vitamin, mineral, hormon,
                  enzim, antibiotik dan urea atau UMB (urea molasis block).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pakan;

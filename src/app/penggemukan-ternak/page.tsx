import React from "react";
import { LiquidGlassFilters } from "@gracefullight/liquid-glass";
import Link from "next/link";
import HamburgerMenu from "@/components/HamburgerMenuPenyakit";

const PenggemukanTernak = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start :justify-start w-full h-fit">
      <div className="relative flex w-full h-full">
        <div className="relative flex h-screen w-full bg-[url(/penggemukan-ternak/bg.png)] bg-bottom bg-cover bg-no-repeat">
          <div className="w-full h-full bg-gradient-to-b from-black to-transparent absolute z-[0]"></div>
          <div className="lg:px-[127px] lg:py-[83px] p-10 gap-x-10 gap-y-5 lg:gap-y-10 flex flex-col justify-start items-start">
            <div className="flex flex-row lg:gap-y-10 relative z-10 w-full">
              <h1
                className="font-unbounded font-bold text-[30px] lg:text-[96px] text-white flex-grow leading-none"
                data-aos="fade-up"
              >
                PENGGEMUKAN <br /> TERNAK
              </h1>
              <HamburgerMenu />
            </div>
            <div
              className="lg:w-1/2 flex flex-col lg:gap-y-10 relative gap-y-5"
              data-aos="fade-up"
            >
              <p className="font-plus-jakarta-sans font-normal text-[20px] lg:text-[24px] text-white text-justify text-sm/relaxed">
                Penggemukan merupakan pemeliharaan ternak yang bertujuan{" "}
                <span className="font-bold">
                  untuk mencapai produk daging sehingga hasil akhir budidaya
                  adalah bobot sapi atau kambing yang optimal.
                </span>{" "}
                Hal ini bertujuan untuk meningkatkan harga jual sapi atau
                kambing potong.
              </p>
              <p className="font-plus-jakarta-sans font-normal text-[20px] lg:text-[24px] text-white text-justify text-sm/relaxed">
                Dalam penggemukan kita harus memperhatikan beberapa faktor,
                yaitu:
              </p>
              <Link
                className="relative w-full text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-3 px-6 text-[24px] rounded-full max-w-sm z-0 hover:bg-green-500/20 focus:bg-green-500/30 backdrop-blur-sm border border-white/30"
                href="/penggemukan-ternak/pemilihan-bakalan"
              >
                <LiquidGlassFilters />
                <span className="relative z-10">PEMILIHAN BAKALAN</span>
              </Link>
              <Link
                className="relative w-full text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-3 px-6 text-[24px] rounded-full max-w-sm z-0 hover:bg-green-500/20 focus:bg-green-500/30 backdrop-blur-sm border border-white/30"
                href="/penggemukan-ternak/sistem-penggemukan"
              >
                <LiquidGlassFilters />
                <span className="relative z-10">SISTEM PENGGEMUKAN</span>
              </Link>
              <Link
                className="relative w-full text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-3 px-6 text-[24px] rounded-full max-w-sm z-0 hover:bg-green-500/20 focus:bg-green-500/30 backdrop-blur-sm border border-white/30"
                href="/penggemukan-ternak/pakan"
              >
                <LiquidGlassFilters />
                <span className="relative z-10">PAKAN</span>
              </Link>
              <Link
                className="relative w-full text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-3 px-6 text-[24px] rounded-full max-w-sm z-0 hover:bg-green-500/20 focus:bg-green-500/30 backdrop-blur-sm border border-white/30"
                href="/penggemukan-ternak/pencegahan-penyakit"
              >
                <LiquidGlassFilters />
                <span className="relative z-10">PENCEGAHAN PENYAKIT</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PenggemukanTernak;

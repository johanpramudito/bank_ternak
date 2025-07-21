"use client";
import React from "react";
import PenyakitTernakMenu from "@/components/HeroNavigation";
import { LiquidGlassFilters } from "@gracefullight/liquid-glass";
import Link from "next/link";
import HamburgerMenu from "@/components/HamburgerMenuPenyakit";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start :justify-start w-full h-fit z-0">
      <div className="relative flex w-full h-full">
        <div className="relative flex h-fit w-full bg-[url(/hero/homepage.svg)] bg-bottom bg-cover bg-no-repeat">
          <div className="w-full h-full bg-gradient-to-r from-black to-transparent absolute z-[0]"></div>
          <div className="lg:px-[127px] lg:py-[83px] p-10 gap-x-10 gap-y-5 lg:gap-y-0 flex flex-col lg:flex-row justify-start items-start">
            <div className="lg:w-1/2 flex flex-col lg:gap-y-10 gap-y-5 relative z-0">
              <div className="flex flex-row">
                <h1
                  className="font-plus-jakarta-sans font-medium text-start lg:text-start text-[40px] lg:text-[70px] text-white flex-grow"
                  data-aos="fade-up"
                >
                  BANK INFORMASI
                  <br />
                  <span className="font-black">TERNAK CERDAS</span>
                </h1>
                <div className="block lg:hidden">
                  <HamburgerMenu />
                </div>
              </div>
              <p
                className="font-plus-jakarta-sans font-normal text-[18px] lg:text-[20px] text-white text-justify text-sm/relaxed"
                data-aos="fade-up"
              >
                Kesehatan hewan ternak seperti sapi, kambing, dan domba memegang
                peranan penting dalam keberlangsungan usaha peternakan. Penyakit
                yang menyerang ternak tidak hanya berdampak pada penurunan
                produksi, tetapi juga dapat menyebabkan kerugian ekonomi yang
                signifikan, bahkan kematian hewan dalam jumlah besar jika tidak
                ditangani dengan cepat dan tepat. <br /> <br />
                Selain menimbulkan kerugian secara langsung, beberapa penyakit
                juga berpotensi menular ke manusia (zoonosis), sehingga menambah
                risiko terhadap kesehatan masyarakat. Oleh karena itu, pemahaman
                yang baik mengenai jenis-jenis penyakit ternak, gejalanya, cara
                penularan, serta langkah pencegahannya menjadi hal yang sangat
                penting, terutama bagi para peternak, penyuluh, dan masyarakat
                yang terlibat langsung dengan hewan ternak. <br /> <br />
                Melalui artikel ini, kami menyajikan informasi mengenai berbagai
                penyakit umum yang menyerang ternak ruminansia, termasuk
                penyebabnya, gejala klinis, cara penanganan, serta
                langkah-langkah pencegahan yang dapat dilakukan. Diharapkan
                informasi ini dapat membantu meningkatkan kesadaran dan
                kewaspadaan dalam menjaga kesehatan ternak serta mendukung
                keberlanjutan peternakan yang sehat dan produktif.
              </p>
              <h2
                className="font-plus-jakarta-sans text-[30px] text-center lg:text-start lg:text-[70px] text-white font-bold lg:leading-none"
                data-aos="fade-up"
              >
                “Sigap Tanggap Sebelum Terjadi Wabah”
              </h2>
            </div>
            <div className="lg:w-1/2 w-full flex flex-col lg:flex-row lg:justify-start lg:items-start justify-center items-center gap-y-5 lg:gap-x-5 z-0">
              <PenyakitTernakMenu />
              <Link
                className="relative w-full text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-3 px-6 text-lg rounded-full lg:max-w-sm hover:bg-green-500/20 focus:bg-green-500/30 backdrop-blur-sm border border-white/30"
                href="/penggemukan-ternak"
                data-aos="fade-up"
              >
                <LiquidGlassFilters />
                <span className="relative z-10 ">PENGGEMUKAN TERNAK</span>
              </Link>
              <div className="hidden lg:block">
                <HamburgerMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

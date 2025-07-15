"use client";
import React from "react";
import PenyakitTernakMenu from "@/components/HeroNavigation";
import { LiquidGlassFilters } from "@gracefullight/liquid-glass";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-start w-full h-fit">
      <div className="relative flex w-full h-full">
        <div className="relative flex h-screen w-full bg-[url(/hero/homepage.svg)] bg-bottom bg-cover bg-no-repeat">
          <div className="w-full h-full bg-gradient-to-r from-black to-transparent absolute z-[0]"></div>
          <div className="px-[127px] py-[83px] gap-x-10 flex">
            <div className="w-1/2 flex flex-col lg:gap-y-10 relative z-10">
              <h1 className="font-plus-jakarta-sans font-medium lg:text-[70px] text-white">
                BANK INFORMASI
                <br />
                <span className="font-black">TERNAK CERDAS</span>
              </h1>
              <p className="font-plus-jakarta-sans font-normal lg:text-[16px] text-white text-justify text-sm/relaxed">
                Kesehatan hewan ternak seperti sapi, kambing, dan domba memegang
                peranan penting dalam keberlangsungan usaha peternakan. Penyakit
                yang menyerang ternak tidak hanya berdampak pada penurunan
                produksi, tetapi juga dapat menyebabkan kerugian ekonomi yang
                signifikan, bahkan kematian hewan dalam jumlah besar jika tidak
                ditangani dengan cepat dan tepat. <br />
                Selain menimbulkan kerugian secara langsung, beberapa penyakit
                juga berpotensi menular ke manusia (zoonosis), sehingga menambah
                risiko terhadap kesehatan masyarakat. Oleh karena itu, pemahaman
                yang baik mengenai jenis-jenis penyakit ternak, gejalanya, cara
                penularan, serta langkah pencegahannya menjadi hal yang sangat
                penting, terutama bagi para peternak, penyuluh, dan masyarakat
                yang terlibat langsung dengan hewan ternak. <br />
                Melalui artikel ini, kami menyajikan informasi mengenai berbagai
                penyakit umum yang menyerang ternak ruminansia, termasuk
                penyebabnya, gejala klinis, cara penanganan, serta
                langkah-langkah pencegahan yang dapat dilakukan. Diharapkan
                informasi ini dapat membantu meningkatkan kesadaran dan
                kewaspadaan dalam menjaga kesehatan ternak serta mendukung
                keberlanjutan peternakan yang sehat dan produktif.
              </p>
              <h2 className="font-plus-jakarta-sans lg:text-[70px] text-white font-bold leading-none">
                “Sigap Tanggap Sebelum Terjadi Wabah”
              </h2>
            </div>
            <div className="w-1/2 flex justify-start items-start">
              <PenyakitTernakMenu />
              <Link
                className="relative w-full text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-3 px-6 text-lg rounded-full max-w-sm"
                href="/penggemukan-ternak"
              >
                <LiquidGlassFilters />
                <span className="relative z-10">PENGGEMUKAN TERNAK</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

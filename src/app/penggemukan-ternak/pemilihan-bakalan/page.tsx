import React from "react";
import { LiquidGlassFilters } from "@gracefullight/liquid-glass";
import HamburgerMenu from "@/components/HamburgerMenuPenyakit";
import Image from "next/image";

// Data untuk kartu ternak, agar mudah dikelola
const cattleBreeds = [
  {
    name: "Ongole",
    imgSrc: "/penggemukan-ternak/pemilihan-bakalan/Ongole.png",
  },
  {
    name: "Bali",
    imgSrc: "/penggemukan-ternak/pemilihan-bakalan/Bali.png",
  },
  {
    name: "Limousin",
    imgSrc: "/penggemukan-ternak/pemilihan-bakalan/Limousin.png",
  },
  {
    name: "Simmental",
    imgSrc: "/penggemukan-ternak/pemilihan-bakalan/Simmental.png",
  },
];

const goatBreeds = [
  {
    name: "Jawa Randu",
    imgSrc: "/penggemukan-ternak/pemilihan-bakalan/Jawa_Randu.png",
  },
  {
    name: "Etawa",
    imgSrc: "/penggemukan-ternak/pemilihan-bakalan/Etawa.png",
  },
  {
    name: "Boer",
    imgSrc: "/penggemukan-ternak/pemilihan-bakalan/Boer.png",
  },
];

// Komponen Reusable untuk Kartu Gambar Ternak
type BreedCardProps = {
  name: string;
  imgSrc: string;
};

const BreedCard: React.FC<BreedCardProps> = ({ name, imgSrc }) => (
  <div className="relative w-full aspect-square rounded-xl overflow-hidden group shadow-lg">
    <Image
      src={imgSrc}
      alt={`Gambar ${name}`}
      fill
      style={{ objectFit: "cover" }}
      className="transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    <div className="absolute bottom-2 left-2 p-4 rounded-full border border-white/30">
      <LiquidGlassFilters />
      <h3 className="text-white text-xl font-bold">{name}</h3>
    </div>
  </div>
);

const PemilihanBakalan = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start :justify-start w-full h-fit">
      <div className="relative flex w-full h-full">
        <div className="relative flex h-fit w-full bg-[url(/penggemukan-ternak/pemilihan-bakalan/bg.png)] bg-bottom bg-cover bg-no-repeat">
          <div className="w-full h-full bg-gradient-to-b from-black to-transparent absolute z-[0]"></div>
          <div className="lg:px-[127px] lg:py-[83px] p-10 gap-x-10 gap-y-5 lg:gap-y-10 flex flex-col justify-start items-start">
            <div className="flex flex-row lg:gap-y-10 gap-x-5 lg:gap-x-0 relative z-10 w-full">
              <h1
                className="font-unbounded font-bold text-[40px] lg:text-[96px] text-white flex-grow leading-none"
                data-aos="fade-up"
              >
                PEMILIHAN <br /> BAKALAN
              </h1>
              <HamburgerMenu />
            </div>
            <div
              className="flex flex-col lg:gap-y-10 relative gap-y-5"
              data-aos="fade-up"
            >
              <p className="font-plus-jakarta-sans font-normal text-[20px] lg:text-[24px] text-white text-justify text-sm/relaxed">
                Bakalan merupakan faktor utama untuk penggemukan. Bakalan
                diperoleh dengan beberapa cara salah satu cara dengan berkunjung
                langsung ke peternak, pedagang dan pasar ternak hewan. Ciri-ciri
                bakalan yang baik:
              </p>
              <ul className="font-plus-jakarta-sans font-normal text-[20px] lg:text-[24px] text-white text-justify text-sm/relaxed list-disc">
                <li>Sehat, aktif, gerakan lincah, nafsu makan tinggi</li>
                <li>Bulu bersih dan bercahaya, kulit tanpa cacat</li>
                <li>Kaki lurus, kuat, dengan tumit tinggi</li>
                <li>Gigi lengkap, rahang rata</li>
                <li>
                  Proporsi tubuh berimbang (dada lebar, punggung lurus, rusuk
                  terlihat)
                </li>
                <li>Laju pertumbuhan yang relatif cepat </li>
                <li>Memiliki efisiensi/energi pakan yang tinggi</li>
              </ul>
              <section className="flex flex-col gap-y-5">
                <p className="font-plus-jakarta-sans font-normal text-[20px] lg:text-[24px] text-white text-justify text-sm/relaxed">
                  Jenis sapi yang cocok untuk penggemukan antara lain PO
                  (Peranakan Ongole), Bali, Limousin, Simmental yang berumur 1-2
                  tahun dengan bobot awal berkisar antara 200-300 kg.
                </p>
                {/* Layout Responsif untuk Gambar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {cattleBreeds.map((breed) => (
                    <BreedCard key={breed.name} {...breed} />
                  ))}
                </div>
              </section>

              {/* Galeri Kambing */}
              <section className="flex flex-col gap-y-5">
                <p className="font-plus-jakarta-sans font-normal text-[20px] lg:text-[24px] text-white text-justify text-sm/relaxed">
                  Sedangkan, untuk jenis kambing yang cocok untuk penggemukan
                  seperti Kambing Jawa Randu, PE (Peranakan Etawa), Boer yang
                  berumur 6 bulan - 1 tahun.
                </p>
                {/* Layout Responsif untuk Gambar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {goatBreeds.map((breed) => (
                    <BreedCard key={breed.name} {...breed} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PemilihanBakalan;

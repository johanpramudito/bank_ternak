import React from "react";
import { notFound } from "next/navigation";

// Impor data dan semua komponen
// Di proyek nyata, Anda akan mengimpor dari file terpisah
import { diseaseData } from "../../../data/diseaseData";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import DetailBlock from "@/components/DetailBlock";
import InfoCard from "@/components/InfoCard";
import ContentBlock from "@/components/ContentBlock";
import QuoteBox from "@/components/QuoteBox";
import ImageSlider from "@/components/ImageSlider";
import Image from "next/image";

// Fungsi ini memberitahu Next.js halaman mana yang harus dibuat secara statis saat build
export async function generateStaticParams() {
  const diseases = Object.keys(diseaseData);
  return diseases.map((id) => ({
    diseaseId: id,
  }));
}

// Komponen Halaman Utama
export default function DiseasePage({ params }) {
  const { diseaseId } = params;
  // Di JavaScript, kita bisa langsung mengakses properti tanpa error tipe
  const data = diseaseData[diseaseId];

  // Jika ID penyakit tidak ada di data, tampilkan halaman 404
  if (!data) {
    notFound();
  }

  // Fungsi untuk merender layout di bagian Gejala
  const renderGejalaLayout = () => {
    const items = data.gejala.items;

    // Pemeriksaan untuk layout kustom
    if (data.gejala.customLayout) {
      switch (data.gejala.customLayout) {
        case "tuberculosis":
          return (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-2">
                <DetailBlock {...items[0]} />
              </div>
              <div className="md:col-span-2">
                <DetailBlock {...items[1]} />
              </div>
              <div className="md:col-span-1">
                <DetailBlock {...items[2]} />
              </div>
            </div>
          );
        case "fasciolosis":
          return (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              <div className="md:col-span-1">
                <DetailBlock {...items[0]} />
              </div>
              <div className="md:col-span-1">
                <DetailBlock {...items[1]} />
              </div>
              <div className="md:col-span-1">
                <DetailBlock {...items[2]} />
              </div>
              <div className="md:col-span-1">
                <DetailBlock {...items[3]} />
              </div>
            </div>
          );
        case "brucellosis":
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="space-y-6">
                <DetailBlock {...items[0]} />
                <DetailBlock {...items[1]} />
              </div>
              <div className="space-y-6">
                <DetailBlock {...items[2]} />
                <DetailBlock {...items[3]} />
              </div>
            </div>
          );
        case "orf":
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DetailBlock {...items[0]} />
              <DetailBlock {...items[1]} />
            </div>
          );
        case "defisiensi-mineral":
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DetailBlock {...items[0]} />
              <DetailBlock {...items[1]} />
            </div>
          );
      }
    }

    // Fallback untuk layout standar
    const gridLayout = data.gejala.layout || "grid-cols-1 md:grid-cols-2";
    return (
      <div className={`grid ${gridLayout} gap-6`}>
        {items.map((item, index) => (
          <DetailBlock key={index} {...item} />
        ))}
      </div>
    );
  };

  // Fungsi baru untuk merender bagian Gejala Klinis secara dinamis
  const renderGejalaSection = () => {
    const items = data.gejala.items;

    switch (data.gejala.customLayout) {
      case "defisiensi-mineral":
      case "orf":
        // Layout ini menampilkan 2 blok konten secara berdampingan
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-md p-6 rounded-xl h-full"
              >
                <DetailBlock {...item} />
              </div>
            ))}
          </div>
        );
      default:
        // --- LAYOUT DEFAULT: Teks di Kiri, Gambar di Kanan ---
        const textItems = items.filter((item) => item.content);
        const imageItems = items.filter(
          (item) => item.images && item.images.length > 0
        );

        return (
          <div className="z-0 flex flex-col lg:flex-row gap-8 items-start backdrop-blur-md p-6 rounded-xl">
            {/* Kolom Kiri: Kumpulan semua blok teks */}
            <div className="w-full lg:w-1/2 space-y-6">
              {textItems.map((item, index) => (
                <DetailBlock
                  key={index}
                  title={item.title}
                  content={item.content}
                  color={item.color}
                />
              ))}
            </div>

            {/* Kolom Kanan: Kumpulan semua gambar/slider */}
            <div className="w-full lg:w-1/2 space-y-6">
              {imageItems.map((item, index) => (
                <div key={index}>
                  {item.images && item.images.length > 1 ? (
                    <ImageSlider slides={item.images} />
                  ) : item.images && item.images.length === 1 ? (
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={item.images[0]}
                        alt={item.title || "Gambar Gejala"}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        );
    }

    // 1. Pisahkan item menjadi grup teks dan grup gambar
    const textItems = gejalaItems.filter((item) => item.content);
    const imageItems = gejalaItems.filter(
      (item) => item.images && item.images.length > 0
    );

    return (
      <div className="flex flex-col lg:flex-row gap-8 items-start backdrop-blur-md p-6 rounded-xl">
        {/* Kolom Kiri: Kumpulan semua blok teks */}
        <div className="w-full lg:w-1/2 space-y-6">
          {textItems.map((item, index) => (
            <DetailBlock
              key={index}
              title={item.title}
              content={item.content}
              color={item.color}
            />
          ))}
        </div>

        {/* Kolom Kanan: Kumpulan semua gambar/slider */}
        <div className="w-full lg:w-1/2 space-y-6">
          {imageItems.map((item, index) => (
            <div key={index}>
              {item.images && item.images.length > 1 ? (
                <ImageSlider slides={item.images} />
              ) : item.images && item.images.length === 1 ? (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={item.images[0]}
                    alt={item.title || "Gambar Gejala"}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 font-plus-jakarta-sans">
      <HeroSection {...data.hero} />
      <main data-aos="fade-up" className="max-w-7xl mx-auto p-4 md:p-8">
        {data.penyebab && (
          <Section title={data.penyebab.title || "Penyebab"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.penyebab.items.map((item, index) => (
                <DetailBlock key={index} {...item} />
              ))}
            </div>
          </Section>
        )}

        {data.penularan && (
          <Section
            data-aos="fade-up"
            title={data.penularan.title || "Proses Penularan"}
          >
            <div
              className={`grid grid-cols-1 ${
                data.penularan.items.length > 1 ? "md:grid-cols-2" : ""
              } gap-6`}
            >
              {data.penularan.items.map((item, index) => (
                <DetailBlock key={index} {...item} />
              ))}
            </div>
          </Section>
        )}

        {data.gejala && (
          <Section title={data.gejala.title}>{renderGejalaSection()}</Section>
        )}

        {data.quote && <QuoteBox>{data.quote}</QuoteBox>}

        {data.waspada && (
          <Section title={data.waspada.title}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.waspada.items.map((item, index) => (
                <InfoCard key={index} {...item} />
              ))}
            </div>
          </Section>
        )}

        {data.kerugian && (
          <Section title="Kerugian">
            <p className="text-gray-600 leading-relaxed">{data.kerugian}</p>
          </Section>
        )}

        {data.pengendalian && (
          <Section title={data.pengendalian.title}>
            {(() => {
              // Periksa tipe item pertama untuk menentukan cara render
              const isSimpleList =
                typeof data.pengendalian.items[0] === "string";

              if (isSimpleList) {
                // Jika item adalah string, render sebagai daftar bubble/dot
                return (
                  <div className="space-y-4">
                    {data.pengendalian.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <span className="mt-2 flex-shrink-0 w-3 h-3 rounded-full bg-gray-700 dark:bg-gray-300"></span>
                        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                );
              } else {
                // Jika item adalah objek, render sebagai grid ContentBlock
                return (
                  <div
                    className={`grid ${
                      data.pengendalian.layout || "grid-cols-1 md:grid-cols-2"
                    } gap-x-12`}
                  >
                    {data.pengendalian.items.map((item, index) => (
                      <ContentBlock key={index} title={item.title}>
                        {item.content}
                      </ContentBlock>
                    ))}
                  </div>
                );
              }
            })()}
          </Section>
        )}

        {data.bibliography && data.bibliography.length > 0 && (
          <Section title="Referensi">
            <ol type="1" className="list-inside space-y-2">
              {data.bibliography.map((ref, index) => (
                <li
                  key={index}
                  className="text-black text-[16px] font-plus-jakarta-sans"
                >
                  <h3 className="text-black text-[16px] font-plus-jakarta-sans">
                    {ref}
                  </h3>
                </li>
              ))}
            </ol>
          </Section>
        )}
      </main>
    </div>
  );
}

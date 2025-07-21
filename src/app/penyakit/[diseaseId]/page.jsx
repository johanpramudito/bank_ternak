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

  return (
    <div className="bg-gray-50 font-plus-jakarta-sans">
      <HeroSection {...data.hero} />
      <main className="max-w-7xl mx-auto p-4 md:p-8">
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
          <Section title={data.penularan.title || "Proses Penularan"}>
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
          <Section title={data.gejala.title}>{renderGejalaLayout()}</Section>
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
          </Section>
        )}
      </main>
    </div>
  );
}

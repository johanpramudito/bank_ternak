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

// Mendefinisikan tipe untuk props halaman
type PageProps = {
  params: {
    diseaseId: string;
  };
};

// Fungsi ini memberitahu Next.js halaman mana yang harus dibuat secara statis saat build
export async function generateStaticParams() {
  const diseases = Object.keys(diseaseData);
  return diseases.map((id) => ({
    diseaseId: id,
  }));
}

// Define a type for gejala items based on DetailBlock props
type GejalaItem = React.ComponentProps<typeof DetailBlock>;

// Komponen Halaman Utama dengan tipe
export default function DiseasePage({ params }: PageProps) {
  const { diseaseId } = params;
  const data = diseaseData[diseaseId];

  // Jika ID penyakit tidak ada di data, tampilkan halaman 404
  if (!data) {
    notFound();
  }

  // Fungsi untuk merender layout kustom di bagian Gejala
  const renderCustomGejalaLayout = () => {
    const items = data.gejala.items as GejalaItem[];
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
      default:
        return (
          <div
            className={`grid ${
              data.gejala.layout || "grid-cols-1 md:grid-cols-2"
            } gap-6`}
          >
            {items.map((item: GejalaItem, index: number) => (
              <DetailBlock key={index} {...item} />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-50 font-plus-jakarta-sans">
      <HeroSection {...data.hero} />
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        {data.penyebab && (
          <Section title={data.penyebab.title || "Penyebab"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.penyebab.items.map((item: GejalaItem, index: number) => (
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
              {data.penularan.items.map((item: GejalaItem, index: number) => (
                <DetailBlock key={index} {...item} />
              ))}
            </div>
          </Section>
        )}

        {data.gejala && (
          <Section title={data.gejala.title}>
            {renderCustomGejalaLayout()}
          </Section>
        )}

        {data.quote && <QuoteBox>{data.quote}</QuoteBox>}

        {data.waspada && (
          <Section title={data.waspada.title}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.waspada.items.map(
                (
                  item: React.ComponentProps<typeof InfoCard>,
                  index: number
                ) => (
                  <InfoCard key={index} {...item} />
                )
              )}
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
              {data.pengendalian.items.map(
                (
                  item: { title: string; content: React.ReactNode },
                  index: number
                ) => (
                  <ContentBlock key={index} title={item.title}>
                    {item.content}
                  </ContentBlock>
                )
              )}
            </div>
          </Section>
        )}
      </main>
    </div>
  );
}

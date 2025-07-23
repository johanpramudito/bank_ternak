import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Unbounded } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import AOSInit from "@/components/AOSInit";

const PlusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const UnboundedFont = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bank Informasi Ternak",
  description: "Dibuat oleh KKN-PPM UGM SAWIJI BUMIAJI 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PlusJakartaSans.variable} ${UnboundedFont.variable} antialiased`}
      >
        <AOSInit />
        {children}
        <footer className="bg-[#131F04] text-white p-10 lg:p-0 lg:px-[40px] lg:py-[40px]">
          <div className="container mx-auto text-start flex flex-row items-center gap-x-5">
            <p className="text-[20px] font-plus-jakarta-sans font-normal flex-grow">
              BANK INFORMASI <br />{" "}
              <span className="font-bold">TERNAK CERDAS</span>
            </p>
            <Image
              src="/icon/bulukerto.png"
              alt="Bulukerto Istimewa"
              width={100}
              height={80}
              className="mx-auto bg-white"
            />
            <Image
              src="/icon/ugm.png"
              alt="Universitas Gadjah Mada"
              width={80}
              height={80}
              className="mx-auto"
            />
            <Image
              src="/icon/sawiji.png"
              alt="Sawiji Bumiaji"
              width={80}
              height={80}
              className="mx-auto"
            />
          </div>
        </footer>
      </body>
    </html>
  );
}

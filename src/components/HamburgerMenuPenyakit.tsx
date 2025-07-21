/* eslint-disable @next/next/no-img-element */
// components/HamburgerMenu.tsx
"use client"; // Menandakan ini adalah Client Component karena menggunakan state dan event handler

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Data untuk link menu
const nonZoonosisLinks = [
  { href: "/penyakit/pmk", label: "PMK" },
  { href: "/penyakit/lsd", label: "LSD" },
  { href: "/penyakit/bloat", label: "Bloat" },
  { href: "/penyakit/defisiensi-mineral", label: "Defisiensi Mineral" },
];

const zoonosisLinks = [
  { href: "/penyakit/orf", label: "Orf" },
  { href: "/penyakit/brucellosis", label: "Brucellosis" },
  { href: "/penyakit/antraks", label: "Antraks" },
  { href: "/penyakit/tuberculosis", label: "Tuberculosis" },
  { href: "/penyakit/fasciolosis", label: "Fasciolosis" },
];

const penggemukanLinks = [
  { href: "/penggemukan-ternak/pemilihan-bakalan", label: "Pemilihan Bakalan" },
  {
    href: "/penggemukan-ternak/sistem-penggemukan",
    label: "Sistem Penggemukan",
  },
  { href: "/penggemukan-ternak/pakan", label: "Pakan" },
  {
    href: "/penggemukan-ternak/pencegahan-penyakit",
    label: "Pencegahan Penyakit",
  },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Efek untuk menutup menu setiap kali URL berubah
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Efek untuk mencegah body scroll saat menu terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Tombol Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 flex items-center justify-center w-fit h-fit px-[15px] py-[18px] rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-colors hover:bg-green-500/20 focus:bg-green-500/30"
        aria-label="Buka menu"
        data-aos="fade-up"
      >
        <div className="space-y-1.5">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>

      {/* Overlay Gelap */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Konten Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black/30 backdrop-blur-xl border-l border-white/20 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Tombol Home & Close di dalam menu */}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <Link
            href="/"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <img src="/icon/home.png" alt="Home" width={24} height={24} />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-2xl text-white text-center"
            aria-label="Tutup menu"
          >
            &times;
          </button>
        </div>

        {/* Wrapper untuk konten yang bisa di-scroll */}
        <div className="h-full overflow-y-auto p-6 pt-20 text-white">
          <h3 className="text-2xl font-semibold text-white/80 mb-2">
            PENYAKIT
          </h3>
          <nav>
            <h3 className="text-lg font-semibold text-white/80 mb-2">
              NON ZOONOSIS
            </h3>
            <ul className="flex flex-col gap-2">
              {nonZoonosisLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-center font-plus-jakarta-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-white/80 mt-6 mb-2">
              ZOONOSIS
            </h3>
            <ul className="flex flex-col gap-2">
              {zoonosisLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-center font-plus-jakarta-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <Link href="/penggemukan-ternak">
              <h3 className="text-2xl font-semibold text-white/80 mt-6 mb-2 hover:text-green-500 transition-colors">
                PENGGEMUKAN
              </h3>
            </Link>
            <ul className="flex flex-col gap-2">
              {penggemukanLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-center font-plus-jakarta-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;

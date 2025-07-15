"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  LiquidGlassProvider,
  LiquidGlassFilters,
} from "@gracefullight/liquid-glass";

// ============================================================================
// FILE: components/PenyakitTernakMenu.js
// ============================================================================

// --- Data dan Konfigurasi Lokal untuk Komponen ---
const menuData = {
  tidakZoonosis: [
    { name: "PMK", slug: "pmk" },
    { name: "LSD", slug: "lsd" },
    { name: "BLOAT", slug: "bloat" },
    { name: "Defisiensi Mineral", slug: "defisiensi-mineral" },
  ],
  zoonosis: [
    { name: "Orf", slug: "orf" },
    { name: "Brucellosis", slug: "brucellosis" },
    { name: "Antraks", slug: "antraks" },
    { name: "Tuberculosis", slug: "tuberculosis" },
    { name: "Fasciolosis", slug: "fasciolosis" },
  ],
};
/**
 * Sub-komponen untuk sebuah tombol menu.
 */
type MenuItemProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

const MenuItem = ({ children, onClick, className = "" }: MenuItemProps) => (
  <button
    onClick={onClick}
    className={`relative w-full text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-2.5 px-5 text-base ${className}`}
  >
    <LiquidGlassFilters />
    <span className="relative z-10">{children}</span>
  </button>
);

/**
 * Komponen inti yang berisi semua logika dan tampilan menu.
 */
const MenuComponent = () => {
  const router = useRouter();
  // Mengubah nilai awal menjadi false agar menu tertutup saat pertama kali dimuat
  const [isPenyakitOpen, setIsPenyakitOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const togglePenyakitMenu = () => {
    setIsPenyakitOpen(!isPenyakitOpen);
    // Jika menu ditutup, reset juga submenu yang aktif
    if (isPenyakitOpen) setActiveSubMenu(null);
  };

  const selectSubMenu = (menuName: string) => {
    setActiveSubMenu(menuName);
  };

  const handleBack = () => {
    setActiveSubMenu(null);
  };

  const handleRedirect = (slug: string) => {
    router.push(`/penyakit/${slug}`);
  };

  // Fungsi untuk merender daftar penyakit
  const renderDiseaseList = (
    diseaseType: "tidakZoonosis" | "zoonosis",
    hoverColor: string
  ) => (
    <div className="relative w-full rounded-2xl overflow-hidden flex flex-col">
      <MenuItem
        onClick={handleBack}
        className="!rounded-none !rounded-t-2xl bg-gray-500/30 hover:bg-gray-500/50 text-sm"
      >
        &larr; Kembali
      </MenuItem>
      {menuData[diseaseType].map((p, index) => (
        <MenuItem
          key={p.slug}
          className={`!rounded-none text-base border-t border-white/25 ${hoverColor} ${
            index === menuData[diseaseType].length - 1 ? "!rounded-b-2xl" : ""
          }`}
          onClick={() => handleRedirect(p.slug)}
        >
          {p.name}
        </MenuItem>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto space-y-2">
      <button
        onClick={togglePenyakitMenu}
        className="relative w-full text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-3 px-6 text-lg rounded-full"
      >
        <LiquidGlassFilters />
        <span className="relative z-10">PENYAKIT TERNAK</span>
      </button>

      {isPenyakitOpen && (
        <div className="flex flex-col w-full space-y-2">
          {!activeSubMenu ? (
            // Tampilan Awal: Pilih Kategori
            <div className="relative w-full rounded-4xl overflow-hidden flex flex-col">
              <MenuItem
                onClick={() => selectSubMenu("tidakZoonosis")}
                className="!rounded-none !rounded-t-4xl hover:bg-green-500/20 focus:bg-green-500/30"
              >
                TIDAK ZOONOSIS
              </MenuItem>
              <MenuItem
                onClick={() => selectSubMenu("zoonosis")}
                className="!rounded-none !rounded-b-4xl hover:bg-red-500/20 focus:bg-red-500/30 border-t border-white/25"
              >
                ZOONOSIS
              </MenuItem>
            </div>
          ) : activeSubMenu === "tidakZoonosis" ? (
            // Tampilan Kedua: Daftar Penyakit Tidak Zoonosis
            renderDiseaseList(
              "tidakZoonosis",
              "hover:bg-green-500/20 focus:bg-green-500/30"
            )
          ) : (
            // Tampilan Ketiga: Daftar Penyakit Zoonosis
            renderDiseaseList(
              "zoonosis",
              "hover:bg-red-500/20 focus:bg-red-500/30"
            )
          )}
        </div>
      )}
    </div>
  );
};

/**
 * Komponen utama yang diekspor.
 */
export default function PenyakitTernakMenu() {
  return (
    <LiquidGlassProvider>
      <MenuComponent />
    </LiquidGlassProvider>
  );
}

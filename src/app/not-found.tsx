// app/not-found.tsx
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#131F04] text-white flex items-center justify-center text-center p-4">
      {/* Konten Utama */}
      <main className="flex flex-col items-center">
        <h1 className="text-8xl md:text-9xl font-extrabold font-unbounded text-white drop-shadow-lg">
          404
        </h1>
        <p className="mt-4 text-2xl md:text-3xl font-semibold text-white/90 font-plus-jakarta-sans">
          Halaman Tidak Ditemukan
        </p>
        <p className="mt-2 max-w-md text-white/70 font-plus-jakarta-sans">
          Maaf, halaman yang Anda cari mungkin telah dihapus, diganti namanya,
          atau tidak pernah ada.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block px-8 py-3 rounded-full bg-white/20 font-plus-jakarta-sans backdrop-blur-sm border border-white/30 text-white font-semibold transition-colors hover:bg-white/30"
        >
          Kembali ke Halaman Utama
        </Link>
      </main>
    </div>
  );
}

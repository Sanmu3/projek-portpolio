import React, { useState } from "react";

export default function Home() {
  // State untuk filter kategori template
  const [activeFilter, setActiveFilter] = useState("all");

  const templates = [
    {
      id: "minimalist",
      category: "modern",
      title: "Minimalist Modern",
      desc: "Desain bersih, anggun, dan presisi. Sempurna untuk pasangan yang menyukai kesederhanaan mewah ala editorial majalah.",
      color: "bg-white border-stone-200 text-stone-800",
      tag: "Luxury Clean",
      accent: "bg-stone-800",
    },
    {
      id: "rustic",
      category: "nature",
      title: "Festive Boho-Rustic",
      desc: "Meriah dengan perpaduan warna terracotta, sage, dan mustard. Penuh animasi dinamis dengan bentuk geometris organik.",
      color: "bg-[#Fdfbf7] border-[#EAD5C3] text-[#4A3E3D]",
      tag: "Colorful Nature",
      accent: "bg-[#5F7A61]",
    },
    {
      id: "elegant",
      category: "royal",
      title: "Elegant Gold",
      desc: "Pesona kemewahan aristokrat dengan perpaduan warna hitam pekat dan emas berkilau. Sakral, megah, dan berwibawa.",
      color: "bg-[#1c1a17] border-[#d4af37]/30 text-[#dfc9a3]",
      tag: "Royal Majesty",
      accent: "bg-[#d4af37]",
    },
    {
      id: "scrapbook",
      category: "nostalgic",
      title: "Nostalgic Scrapbook",
      desc: "Penuh coretan memori, bingkai foto polaroid, dan tekstur kertas notes. Sangat personal, unik, dan penuh cerita kenangan.",
      color: "bg-[#faf6ee] border-[#d4c3b3] text-[#5c4d3c]",
      tag: "Unique Sketch",
      accent: "bg-[#4e3d30]",
    },
  ];

  // Menyaring template berdasarkan filter aktif
  const filteredTemplates =
    activeFilter === "all"
      ? templates
      : templates.filter((t) => t.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-stone-800 font-sans antialiased selection:bg-stone-200">
      {/* === HEADER & HERO SECTION === */}
      <header className="relative overflow-hidden bg-white border-b border-stone-100 py-24 px-6 text-center">
        {/* Aksen Latar Belakang Digital Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e5e0_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.3em] uppercase text-stone-500 bg-stone-100 px-4 py-1.5 rounded-full animate-pulse">
            Invitation Digital Platform
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-stone-900 font-serif leading-tight">
            Eksplorasi Tema <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-700 via-stone-500 to-stone-800">
              Undangan Digital
            </span>
          </h1>
          <p className="text-sm sm:text-base text-stone-500 font-light leading-relaxed max-w-2xl mx-auto">
            Platform pembuatan undangan pernikahan modern yang interaktif,
            elegan, dan dirancang khusus agar tampil sempurna di seluruh layar
            perangkat ponsel pintar tamu Anda.
          </p>
        </div>
      </header>

      {/* === INTERACTIVE FILTER CONTROLS === */}
      <section className="max-w-6xl mx-auto px-6 pt-12 text-center">
        <div className="flex flex-wrap justify-center items-center gap-2 max-w-xl mx-auto p-1.5 bg-stone-100/80 backdrop-blur-xs rounded-2xl border border-stone-200/50">
          {[
            { id: "all", label: "Semua Vibe" },
            { id: "modern", label: "Minimalist" },
            { id: "nature", label: "Rustic" },
            { id: "royal", label: "Elegant" },
            { id: "nostalgic", label: "Scrapbook" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className={`px-4 py-2 text-xs font-bold tracking-wider rounded-xl transition-all duration-200 cursor-pointer ${
                activeFilter === btn.id
                  ? "bg-stone-900 text-white shadow-xs scale-102"
                  : "text-stone-600 hover:text-stone-900 hover:bg-white/50"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </section>

      {/* === GRID KATALOG UTAMA === */}
      {/* === GRID KATALOG UTAMA (REVISI: 2 Kolom Kiri-Kanan, Ukuran Preview Lebih Besar & Jelas) === */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Mengubah grid-cols-4 menjadi md:grid-cols-2 untuk susunan sepasang kiri-kanan */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500">
          {filteredTemplates.map((tpl) => (
            <div
              key={tpl.id}
              className={`p-8 rounded-3xl border-2 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group ${tpl.color}`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="inline-block text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-md border border-current/20 opacity-90">
                    {tpl.tag}
                  </span>
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${tpl.accent}`}
                    ></span>
                    <span
                      className={`relative inline-flex rounded-full h-2.5 w-2.5 ${tpl.accent}`}
                    ></span>
                  </span>
                </div>

                <h2 className="text-3xl font-bold tracking-tight font-serif pt-1">
                  {tpl.title}
                </h2>
                <p className="text-sm font-light leading-relaxed opacity-80">
                  {tpl.desc}
                </p>

                {/* === INTERACTIVE MOCKUP PREVIEW (UKURAN BESAR & MAKIN NYATA) === */}
                <div className="pt-2">
                  {/* Menggunakan aspek rasio yang lebih tinggi agar muat lebih banyak detail komponen */}
                  <div className="w-full aspect-[16/9] rounded-2xl border border-current/10 p-6 bg-white/60 backdrop-blur-xs flex flex-col justify-between relative overflow-hidden shadow-sm group-hover:scale-[1.01] transition-transform duration-300">
                    {/* 1. Preview Minimalist Modern */}
                    {tpl.id === "minimalist" && (
                      <div className="absolute inset-0 bg-white p-6 flex flex-col justify-center items-center text-center space-y-3">
                        <span className="text-[9px] uppercase tracking-[0.4em] text-stone-400 font-sans font-semibold">
                          THE WEDDING OF
                        </span>
                        <div className="flex flex-col items-center space-y-1">
                          <h3 className="text-3xl font-light tracking-widest text-stone-800 uppercase font-serif">
                            PRIA
                          </h3>
                          <span className="text-lg font-serif italic text-stone-300">
                            &amp;
                          </span>
                          <h3 className="text-3xl font-light tracking-widest text-stone-800 uppercase font-serif">
                            WANITA
                          </h3>
                        </div>
                        <div className="w-10 h-[1px] bg-stone-300"></div>
                        <p className="text-[9px] text-stone-500 uppercase tracking-[0.2em] font-sans">
                          MINGGU, 12 JULI 2026
                        </p>
                      </div>
                    )}

                    {/* 2. Preview Festive Boho-Rustic */}
                    {tpl.id === "rustic" && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#E6A18C]/20 via-[#F3E3C3]/40 to-[#5F7A61]/15 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-[#5F7A61] bg-[#5F7A61]/10 px-3 py-1 rounded-full font-sans font-bold mb-2">
                          Celebration
                        </span>
                        <div className="flex items-center justify-center gap-2">
                          <h3 className="text-3xl font-serif italic text-[#E6A18C] leading-none">
                            Pria
                          </h3>
                          <div className="w-8 h-8 rounded-full bg-[#D9A05B] text-white flex items-center justify-center text-xs font-sans font-bold border-2 border-white shadow-xs">
                            and
                          </div>
                          <h3 className="text-3xl font-serif italic text-[#5F7A61] leading-none">
                            Wanita
                          </h3>
                        </div>
                        <p className="text-[9px] font-sans text-[#4A3E3D] font-black tracking-widest mt-4">
                          23 AGUSTUS 2026
                        </p>
                      </div>
                    )}

                    {/* 3. Preview Elegant Gold */}
                    {tpl.id === "elegant" && (
                      <div className="absolute inset-0 bg-[#11100e] p-6 flex flex-col justify-center items-center text-center space-y-3 border-2 border-[#d4af37]/20 m-2 rounded-xl">
                        <p className="text-[8px] text-[#c5a880] tracking-[0.4em] uppercase font-sans">
                          THE WEDDING CELEBRATION
                        </p>
                        <div className="space-y-1">
                          <h4 className="text-2xl text-[#d4af37] tracking-[0.2em] uppercase font-light font-serif">
                            PRIA
                          </h4>
                          <span className="text-sm font-serif italic text-[#c5a880] block">
                            &amp;
                          </span>
                          <h4 className="text-2xl text-[#d4af37] tracking-[0.2em] uppercase font-light font-serif">
                            WANITA
                          </h4>
                        </div>
                        <div className="w-8 h-[1px] bg-[#d4af37]/40"></div>
                        <p className="text-[8px] text-[#c5a880] tracking-[0.2em] uppercase font-sans">
                          18 OKTOBER 2026
                        </p>
                      </div>
                    )}

                    {/* 4. Preview Nostalgic Scrapbook */}
                    {tpl.id === "scrapbook" && (
                      <div className="absolute inset-0 bg-[#faf6ee] p-6 flex flex-col justify-center items-center text-center [background-size:10px_10px] bg-[linear-gradient(rgba(189,168,147,0.12)_1px,transparent_1px)]">
                        <div className="w-20 h-3 bg-[#d9c3b0]/40 -rotate-3 mb-3 border-x border-dashed border-[#bda893]/30"></div>
                        <div className="space-y-1">
                          <p className="text-2xl font-serif text-[#3d2e23] -rotate-1 italic">
                            Pria
                          </p>
                          <p className="text-xs font-serif text-[#bda893] my-0.5">
                            &amp;
                          </p>
                          <p className="text-2xl font-serif text-[#3d2e23] rotate-1 italic">
                            Wanita
                          </p>
                        </div>
                        <p className="text-[9px] font-mono text-[#7c644e] mt-4 border-t border-dashed border-[#bda893]/40 pt-2 w-24 mx-auto">
                          [ 23 . 08 . 2026 ]
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Tombol Aksi yang lebih tebal dan kokoh */}
              <button
                onClick={() => window.open(`/templates/${tpl.id}`, "_blank")}
                className="mt-8 w-full text-center text-xs font-black tracking-widest uppercase py-4 rounded-2xl bg-stone-950 hover:bg-stone-800 text-white transition-all duration-200 cursor-pointer transform active:scale-97 group-hover:scale-[1.01] shadow-sm"
              >
                Buka Live Preview ↗
              </button>
            </div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-stone-200 max-w-md mx-auto">
            <p className="text-stone-400 text-sm font-light">
              Wah, template belum tersedia, Bang.
            </p>
          </div>
        )}
      </main>

      {/* === BANNER CUSTOM REQUEST & FITUR UNGGULAN === */}
      <footer className="bg-stone-50 border-t border-stone-200/60 py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* TIGA PILAR UTAMA FITUR AGENT */}
          <div className="grid sm:grid-cols-3 gap-8 text-center sm:text-left pt-4">
            <div className="space-y-2">
              <h4 className="font-bold text-stone-900 font-serif text-lg">
                Super Responsive
              </h4>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Tampilan beradaptasi otomatis secara sempurna di layar
                smartphone, tablet, maupun desktop komputer.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-stone-900 font-serif text-lg">
                Ringan &amp; Cepat
              </h4>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Tampilan melesat kencang saat diakses tanpa membebani kuota
                internet atau memperlambat perangkat tamu.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-stone-900 font-serif text-lg">
                Desain Autentik
              </h4>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Setiap template dikerjakan dengan penuh ketelitian untuk
                melahirkan alur visual unik yang khas.
              </p>
            </div>
          </div>
          {/* BANNER INTERAKTIF: TERIMA REQUEST CUSTOM DESAIN */}
          <div className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 transform hover:scale-[1.01] transition-transform duration-300">
            {/* Aksen dekorasi abstrak ringan di dalam banner */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-3 max-w-xl relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-serif text-white">
                Punya Ide Tema Sendiri? <br className="hidden sm:block" />
                Kami Terima Custom Desain!
              </h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Gak perlu khawatir kalau pilihan di atas belum pas. Tim kami
                siap meracik layout khusus secara eksklusif berdasarkan sketsa,
                referensi warna, atau konsep impian pernikahan Anda.
              </p>
            </div>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/6281234567890?text=Halo%20Bang,%20saya%20mau%20request%20custom%20desain%20undangan%20digitalnya",
                  "_blank"
                )
              }
              className="w-full sm:w-auto text-center text-xs font-black tracking-widest uppercase py-4 px-8 rounded-2xl bg-white text-stone-950 hover:bg-stone-200 transition-all duration-200 transform active:scale-97 whitespace-nowrap cursor-pointer shadow-md shrink-0"
            >
              Hubungi via WhatsApp ↗
            </button>
          </div>
        </div>

        {/* WATERMARK HAK CIPTA */}
        <div className="text-center text-[10px] tracking-wider text-stone-400 uppercase mt-20 border-t border-stone-200/40 pt-6">
          © 2026 SanMu Corp. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

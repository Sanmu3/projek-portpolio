import React, { useState, useEffect } from "react";

export default function Elegant() {
  const [form, setForm] = useState({ name: "", status: "Hadir", text: "" });

  useEffect(() => {
    document.title = "The Elegant Gold Luxury Wedding";
    return () => {
      document.title = "Undangan Pernikahan Digital";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.text)
      return alert("Mohon lengkapi nama dan ucapan Anda terlebih dahulu.");
    alert("Doa restu Anda telah berhasil dikirimkan.");
    setForm({ name: "", status: "Hadir", text: "" });
  };

  return (
    <div className="min-h-screen bg-[#1c1a17] text-[#dfc9a3] font-serif antialiased overflow-x-hidden selection:bg-[#d4af37]/20">
      {/* === NAVBAR ATAS MEWAH === */}
      <div className="fixed top-0 inset-x-0 h-14 flex items-center justify-between px-6 sm:px-12 z-30 text-[10px] tracking-[0.25em] text-[#c5a880] font-sans border-b border-[#d4af37]/20 bg-[#1c1a17]/90 backdrop-blur-md">
        <div className="font-bold tracking-[0.3em]">ROYAL HERITAGE</div>
        <div className="flex gap-6">
          <button
            onClick={() =>
              document
                .getElementById("mempelai")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-[#d4af37] cursor-pointer transition-colors font-medium uppercase bg-transparent border-none"
          >
            Mempelai
          </button>
          <button
            onClick={() =>
              document
                .getElementById("acara")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-[#d4af37] cursor-pointer transition-colors font-medium uppercase bg-transparent border-none"
          >
            Acara
          </button>
        </div>
      </div>

      {/* 1. HERO COVER (Royal Gold & Deep Black Majesty) */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative bg-[#11100e] overflow-hidden">
        <div className="absolute inset-4 sm:inset-6 border border-[#d4af37]/20 pointer-events-none rounded-lg"></div>
        <div className="absolute inset-5 sm:inset-7 border border-[#d4af37]/10 pointer-events-none rounded-lg"></div>

        <div className="space-y-8 max-w-xl z-10 p-8 pt-20">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#c5a880] font-sans font-bold">
            The Wedding Celebration
          </p>

          <div className="space-y-4 py-4">
            <h1 className="text-5xl sm:text-7xl font-light tracking-widest text-[#d4af37] uppercase font-serif">
              Pria
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-[#d4af37]/30"></div>
              <span className="text-xl font-serif italic text-[#c5a880]">
                &amp;
              </span>
              <div className="w-12 h-[1px] bg-[#d4af37]/30"></div>
            </div>
            <h1 className="text-5xl sm:text-7xl font-light tracking-widest text-[#d4af37] uppercase font-serif">
              Wanita
            </h1>
          </div>

          <div className="space-y-2">
            <p className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#c5a880] font-semibold">
              Minggu, 18 Oktober 2026
            </p>
            <div className="w-6 h-[1px] bg-[#d4af37]/40 mx-auto mt-4"></div>
          </div>
        </div>
      </section>

      {/* 2. PROFIL PENGANTIN (Simetris, Anggun & Berwibawa) */}
      <section
        id="mempelai"
        className="py-32 px-6 bg-[#1c1a17] relative border-b border-[#d4af37]/10 scroll-mt-14"
      >
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#c5a880] font-sans font-bold">
              Mempelai Pernikahan
            </h2>
            <div className="w-8 h-[1px] bg-[#d4af37] mx-auto"></div>
            <p className="text-[#bba382] max-w-md mx-auto text-sm font-sans font-light leading-relaxed px-2">
              Dengan memohon rahmat Allah Subhanahu wa Ta'ala, kami mengundang
              Anda untuk menghadiri perayaan pernikahan putra-putri kami:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-x-24 relative max-w-3xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#d4af37]/10 -translate-x-1/2"></div>

            {/* Pria */}
            <div className="text-center md:text-right space-y-3">
              <span className="text-[9px] tracking-[0.2em] text-[#c5a880] font-sans uppercase block">
                Mempelai Pria
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal tracking-wide text-[#d4af37] uppercase">
                Nama Pria
              </h3>
              <p className="text-xs tracking-wider text-[#bba382] font-sans font-light pt-2 leading-relaxed">
                Putra dari <br />
                <span className="font-medium text-[#dfc9a3]">
                  Bapak Nama Ayah <br /> &amp; Ibu Nama Ibu
                </span>
              </p>
            </div>

            {/* Wanita */}
            <div className="text-center md:text-left space-y-3">
              <span className="text-[9px] tracking-[0.2em] text-[#c5a880] font-sans uppercase block">
                Mempelai Wanita
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal tracking-wide text-[#d4af37] uppercase">
                Nama Wanita
              </h3>
              <p className="text-xs tracking-wider text-[#bba382] font-sans font-light pt-2 leading-relaxed">
                Putri dari <br />
                <span className="font-medium text-[#dfc9a3]">
                  Bapak Nama Ayah <br /> &amp; Ibu Nama Ibu
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAIL ACARA (Symmetrical Royal Frames) */}
      <section
        id="acara"
        className="py-28 px-6 bg-[#11100e] border-b border-[#d4af37]/10 scroll-mt-14"
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#c5a880] font-sans font-bold">
            Waktu &amp; Tempat Acara
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
            {/* Akad Card */}
            <div className="bg-[#1c1a17] p-8 rounded-lg border border-[#d4af37]/20 space-y-3 shadow-md">
              <span className="text-[#d4af37] font-sans text-[10px] font-bold uppercase tracking-widest block">
                Akad Nikah
              </span>
              <h3 className="text-2xl font-light text-[#dfc9a3]">
                Pukul 08.00 WIB
              </h3>
              <p className="text-xs font-sans text-[#bba382]">
                Masjid Agung Keraton Agung
              </p>
              <p className="text-[11px] font-sans text-[#c5a880] pt-2 border-t border-[#d4af37]/10">
                Area Kompleks Sakral, Lantai Utama, Jakarta
              </p>
            </div>

            {/* Resepsi Card */}
            <div className="bg-[#1c1a17] p-8 rounded-lg border border-[#d4af37]/20 space-y-3 shadow-md">
              <span className="text-[#d4af37] font-sans text-[10px] font-bold uppercase tracking-widest block">
                Resepsi Pernikahan
              </span>
              <h3 className="text-2xl font-light text-[#dfc9a3]">
                Pukul 11.00 - 16.00 WIB
              </h3>
              <p className="text-xs font-sans text-[#bba382]">
                Grand Ballroom Sasana Handrawina
              </p>
              <p className="text-[11px] font-sans text-[#c5a880] pt-2 border-t border-[#d4af37]/10">
                Gedung Utama Royal Hall, Hall A, Jakarta
              </p>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[10px] uppercase tracking-widest bg-[#d4af37] hover:bg-[#bfa030] text-[#11100e] font-sans py-3.5 px-8 rounded transition-colors font-bold shadow-sm"
            >
              Buka Peta Lokasi Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* 4. GALERI FOTO */}
      <section className="py-28 px-6 bg-[#1c1a17] border-b border-[#d4af37]/10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#c5a880] font-sans font-bold">
              Dokumentasi Momen
            </h2>
            <p className="text-xs italic text-[#bba382]">The Royal Gallery</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="aspect-[3/4] bg-stone-900 overflow-hidden rounded border border-[#d4af37]/20 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1595084574914-cf325176c6bc?auto=format&fit=crop&w=400&q=80"
                alt="Royal Wedding Rings"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="aspect-[3/4] bg-stone-900 overflow-hidden rounded border border-[#d4af37]/20 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80"
                alt="Royal Table Set"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="aspect-[3/4] bg-stone-900 overflow-hidden rounded border border-[#d4af37]/20 shadow-sm col-span-1">
              <img
                src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=400&q=80"
                alt="Royal Florals"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. RSVP / KIRIM DOA */}
      <section className="py-24 px-6 bg-[#11100e] pb-32">
        <div className="max-w-xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#c5a880] font-sans font-bold">
              Konfirmasi Kehadiran &amp; Doa Restu
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#1c1a17] p-6 sm:p-8 rounded-xl border border-[#d4af37]/30 space-y-5 shadow-lg"
          >
            <div>
              <label className="block text-[9px] font-sans uppercase tracking-widest text-[#c5a880] mb-1 font-bold">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 border border-[#d4af37]/20 rounded font-sans text-sm focus:outline-none focus:border-[#d4af37] bg-[#11100e] text-[#dfc9a3]"
                placeholder="Masukkan nama Anda"
              />
            </div>
            <div>
              <label className="block text-[9px] font-sans uppercase tracking-widest text-[#c5a880] mb-1 font-bold">
                Konfirmasi Kehadiran
              </label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full px-4 py-3 border border-[#d4af37]/20 rounded font-sans text-sm focus:outline-none focus:border-[#d4af37] bg-[#11100e] text-[#dfc9a3]"
              >
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>
            </div>
            <div>
              <label className="block text-[9px] font-sans uppercase tracking-widest text-[#c5a880] mb-1 font-bold">
                Doa Restu Anda
              </label>
              <textarea
                rows="3"
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                className="w-full px-4 py-3 border border-[#d4af37]/20 rounded font-sans text-sm focus:outline-none focus:border-[#d4af37] bg-[#11100e] text-[#dfc9a3]"
                placeholder="Tuliskan doa restu mulia Anda..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-[10px] font-sans uppercase tracking-widest bg-[#d4af37] hover:bg-[#bfa030] text-[#11100e] py-4 rounded transition-all font-bold cursor-pointer"
            >
              Kirim Doa Restu Mulia
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

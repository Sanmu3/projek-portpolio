import React, { useState, useEffect } from "react";

export default function Floral() {
  const [form, setForm] = useState({ name: "", status: "Hadir", text: "" });

  useEffect(() => {
    document.title = "The Wedding of Helen & John | Watercolor Edition";
    return () => {
      document.title = "Undangan Pernikahan Digital";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.text)
      return alert("Mohon lengkapi nama dan doa restu Anda terlebih dahulu.");
    alert("Doa restu Anda telah berhasil disimpan di lembar kenangan.");
    setForm({ name: "", status: "Hadir", text: "" });
  };

  return (
    <div className="min-h-screen bg-[#FFF0ED] text-[#5A4E4D] font-sans antialiased overflow-x-hidden selection:bg-[#F3A59B]/30">
      {/* === NAVBAR CLEAN WATERCOLOR === */}
      <div className="fixed top-4 inset-x-4 h-12 flex items-center justify-between px-6 z-30 rounded-full bg-white/70 backdrop-blur-md border border-white/40 text-[11px] tracking-widest text-[#8A7371] font-medium shadow-xs">
        <div className="font-serif italic text-sm tracking-normal">
          Helen &amp; John
        </div>
        <div className="flex gap-4">
          <button
            onClick={() =>
              document
                .getElementById("mempelai")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-[#F3A59B] cursor-pointer transition-colors"
          >
            Kita
          </button>
          <button
            onClick={() =>
              document
                .getElementById("acara")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-[#F3A59B] cursor-pointer transition-colors"
          >
            Acara
          </button>
        </div>
      </div>

      {/* 1. HERO COVER (Adaptasi Persis dari Layout Asimetris image_743d75.png) */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative bg-white overflow-hidden m-3 sm:m-4 rounded-[2rem] shadow-xs">
        {/* Simulasi Tekstur Lukisan Cat Air Pojok Atas Kanan */}
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-gradient-to-bl from-[#F3A59B]/30 via-[#E4C2C1]/20 to-transparent blur-2xl pointer-events-none select-none"></div>
        {/* Konten Utama Tipografi Pastel */}
        <div className="z-10 space-y-4 max-w-xl">
          <h1 className="text-5xl sm:text-7xl font-light tracking-[0.1em] text-[#F3A59B] uppercase font-sans">
            Helen{" "}
            <span className="text-3xl font-serif text-[#E4C2C1] tracking-normal lowercase block sm:inline my-1 sm:my-0 sm:mx-2">
              &amp;
            </span>{" "}
            John
          </h1>

          <p className="text-xs tracking-[0.3em] text-[#8A7371] uppercase font-medium pt-2 animate-pulse">
            Are Getting Married
          </p>

          <div className="pt-8">
            <span className="text-[10px] tracking-widest uppercase border-b-2 border-[#F3A59B]/30 pb-2 font-semibold text-[#8A7371]">
              Minggu, 23 Agustus 2026
            </span>
          </div>
        </div>

        {/* Tombol Aksi Sudut Bawah Kanan Sesuai Gambar */}
        <div className="absolute bottom-8 right-8 hidden sm:block">
          <button
            onClick={() =>
              document
                .getElementById("rsvp")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="text-xs tracking-widest text-[#8A7371] hover:text-[#F3A59B] transition-colors uppercase font-bold cursor-pointer"
          >
            RSVP &gt;
          </button>
        </div>
      </section>

      {/* 2. PROFIL PENGANTIN (Asimetris Elegan) */}
      <section id="mempelai" className="py-32 px-6 relative scroll-mt-6">
        <div className="max-w-4xl mx-auto space-y-20 relative z-10">
          <div className="text-center space-y-3">
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#F3A59B] font-bold">
              Mempelai Pernikahan
            </h2>
            <p className="text-[#8A7371] max-w-sm mx-auto text-sm font-serif italic leading-relaxed">
              Dengan penuh rasa syukur ke hadirat Allah Subhanahu wa Ta'ala,
              kami memohon doa restu untuk menyatukan dua hati:
            </p>
          </div>

          {/* Layout Asimetris (Satu Agak Ke Atas, Satu Agak Ke Bawah) */}
          <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto items-start">
            {/* Mempelai Pria */}
            <div className="bg-white/60 p-8 rounded-[2rem] border border-white/50 shadow-2xs space-y-3 text-center md:text-left md:translate-y-[-10px] transition-transform hover:translate-y-[-15px]">
              <span className="text-[9px] tracking-widest text-[#F3A59B] uppercase font-bold block">
                Mempelai Pria
              </span>
              <h3 className="text-3xl font-light text-[#5A4E4D]">
                John Albert, S.T.
              </h3>
              <p className="text-xs text-[#8A7371] leading-relaxed pt-2 border-t border-[#F3A59B]/10">
                Putra kedua dari pasangan terhormat:
                <br />
                <span className="font-medium text-[#5A4E4D] block pt-1">
                  Bpk. Nama Ayah &amp; Ibu Nama Ibu
                </span>
              </p>
            </div>

            {/* Mempelai Wanita */}
            <div className="bg-white/60 p-8 rounded-[2rem] border border-white/50 shadow-2xs space-y-3 text-center md:text-left md:mt-12 transition-transform hover:translate-y-[5px]">
              <span className="text-[9px] tracking-widest text-[#F3A59B] uppercase font-bold block">
                Mempelai Wanita
              </span>
              <h3 className="text-3xl font-light text-[#5A4E4D]">
                Helen Sofia, S.E.
              </h3>
              <p className="text-xs text-[#8A7371] leading-relaxed pt-2 border-t border-[#F3A59B]/10">
                Putri bungsu dari pasangan terhormat:
                <br />
                <span className="font-medium text-[#5A4E4D] block pt-1">
                  Bpk. Nama Ayah &amp; Ibu Nama Ibu
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAIL ACARA (Clean Soft Cards) */}
      <section
        id="acara"
        className="py-28 px-6 bg-white/40 border-y border-[#F3A59B]/10 scroll-mt-6"
      >
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h2 className="text-xs uppercase tracking-[0.4em] text-[#8A7371] font-bold">
            Waktu &amp; Tempat Perayaan
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl space-y-4 border border-[#E4C2C1]/20 shadow-3xs">
              <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-[#F3A59B] border-b border-[#F3A59B]/30 pb-1">
                Akad Nikah
              </span>
              <div className="space-y-1">
                <h3 className="text-2xl font-light text-[#5A4E4D]">
                  09.00 WIB
                </h3>
                <p className="text-xs text-[#8A7371]">
                  Gedung Atrium Paviliun Utama
                </p>
              </div>
              <p className="text-[11px] text-[#8A7371] opacity-90 pt-2 border-t border-stone-100">
                Jl. Contoh Lokasi Rumah No. 123, Jakarta
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl space-y-4 border border-[#E4C2C1]/20 shadow-3xs">
              <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-[#F3A59B] border-b border-[#F3A59B]/30 pb-1">
                Resepsi Pernikahan
              </span>
              <div className="space-y-1">
                <h3 className="text-2xl font-light text-[#5A4E4D]">
                  11.00 - 15.00 WIB
                </h3>
                <p className="text-xs text-[#8A7371]">
                  Taman Kebun Soft Pastel Hall
                </p>
              </div>
              <p className="text-[11px] text-[#8A7371] opacity-90 pt-2 border-t border-stone-100">
                Area Outdoor Alam, Hall B, Jakarta
              </p>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] uppercase tracking-widest bg-[#F3A59B] hover:bg-[#e29389] text-white py-3.5 px-8 rounded-full transition-colors shadow-2xs font-semibold"
            >
              Petunjuk Peta Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* 4. GALERI FOTO (Eksklusif Objek Lukisan/Bunga Estetik) */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-1">
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#8A7371] font-bold">
              Dokumentasi Indah
            </h2>
            <p className="text-xs font-serif italic text-[#F3A59B]">
              The Pastel Album
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-stone-50 rounded-2xl overflow-hidden border border-[#E4C2C1]/30">
              <img
                src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=400&q=80"
                alt="Pastel Flowers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-stone-50 rounded-2xl overflow-hidden border border-[#E4C2C1]/30 md:translate-y-4">
              <img
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=400&q=80"
                alt="Wedding Rings Details"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-stone-50 rounded-2xl overflow-hidden border border-[#E4C2C1]/30">
              <img
                src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=400&q=80"
                alt="Wedding Glass Light"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-stone-50 rounded-2xl overflow-hidden border border-[#E4C2C1]/30 md:translate-y-4">
              <img
                src="https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&w=400&q=80"
                alt="Pastel Table Set"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. RSVP BUKU TAMU */}
      <section
        id="rsvp"
        className="py-24 px-6 bg-white/50 border-t border-[#F3A59B]/10 pb-36"
      >
        <div className="max-w-xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#5A4E4D] font-bold">
              Simpul Doa &amp; Kehadiran
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 rounded-[2rem] border border-[#E4C2C1]/30 space-y-5 shadow-3xs"
          >
            <div>
              <label className="block text-[10px] font-sans uppercase tracking-wider text-[#8A7371] mb-1 font-bold">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 border border-[#E4C2C1]/30 rounded-xl font-sans text-sm focus:outline-none focus:border-[#F3A59B] bg-[#FFF0ED]/20"
                placeholder="Ketik nama Anda di sini"
              />
            </div>
            <div>
              <label className="block text-[10px] font-sans uppercase tracking-wider text-[#8A7371] mb-1 font-bold">
                Pernyataan Hadir
              </label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full px-4 py-2.5 border border-[#E4C2C1]/30 rounded-xl font-sans text-sm focus:outline-none focus:border-[#F3A59B] bg-[#FFF0ED]/20"
              >
                <option value="Hadir">Insya Allah Berkenan Hadir</option>
                <option value="Tidak Hadir">
                  Sangat Menyesal Berhalangan Hadir
                </option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-sans uppercase tracking-wider text-[#8A7371] mb-1 font-bold">
                Coretan Doa Harapan
              </label>
              <textarea
                rows="3"
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                className="w-full px-4 py-2.5 border border-[#E4C2C1]/30 rounded-xl font-sans text-sm focus:outline-none focus:border-[#F3A59B] bg-[#FFF0ED]/20"
                placeholder="Tuliskan bait doa mulia Anda..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-xs font-sans uppercase tracking-widest bg-[#F3A59B] hover:bg-[#e29389] text-white py-4 rounded-xl transition-all font-bold shadow-2xs cursor-pointer"
            >
              Kirim Pesan Kebahagiaan
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

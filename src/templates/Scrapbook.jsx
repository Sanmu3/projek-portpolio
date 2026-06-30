import React, { useState, useEffect } from "react";

export default function Scrapbook() {
  const [form, setForm] = useState({ name: "", status: "Hadir", text: "" });

  useEffect(() => {
    document.title = "Our Scrapbook of Memories";
    return () => {
      document.title = "Undangan Pernikahan Digital";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.text)
      return alert("Duh, isi nama sama coretan doanya dulu dong, Kak!");
    alert("Catatan kenangan berhasil ditempel! Terima kasih ya!");
    setForm({ name: "", status: "Hadir", text: "" });
  };

  return (
    <div className="min-h-screen bg-[#f3ebe1] text-[#4e3d30] font-sans antialiased overflow-x-hidden selection:bg-[#c9bba7]">
      {/* === NAVBAR MEMORABILIA === */}
      <div className="fixed top-4 inset-x-4 h-12 flex items-center justify-between px-6 z-30 rounded-xl bg-[#faf6ee] border-2 border-dashed border-[#bda893] text-xs font-medium text-[#7c644e]">
        <div className="tracking-wider italic font-serif">
          #CoretanKisahKita
        </div>
        <div className="flex gap-4">
          <button
            onClick={() =>
              document
                .getElementById("mempelai")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="hover:underline cursor-pointer"
          >
            Kita
          </button>
          <span>•</span>
          <button
            onClick={() =>
              document
                .getElementById("acara")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="hover:underline cursor-pointer"
          >
            Waktu
          </button>
        </div>
      </div>

      {/* 1. HERO COVER: THE DIARY COVER */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative bg-[#faf6ee]">
        {/* Efek Garis Buku Tulis Kotak-Kotak Samar */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(189,168,147,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(189,168,147,0.15)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

        {/* Ornamen Doodle Selotip (Washi Tape) */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#d9c3b0]/50 -rotate-3 border-x-2 border-dashed border-[#bda893]/40 z-10"></div>

        <div className="space-y-6 max-w-md z-10 p-8 rounded-2xl border-2 border-[#bda893] bg-white/40 shadow-xs backdrop-blur-xs relative rotate-1">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#9a8069] font-bold font-mono">
            Our Memory Book
          </p>

          <div className="py-6 space-y-4">
            <h1 className="text-5xl sm:text-6xl font-normal text-[#3d2e23] font-serif tracking-wide rotate-[-2deg]">
              Pria
            </h1>
            <p className="text-3xl font-serif text-[#bda893] italic font-light">
              &amp;
            </p>
            <h1 className="text-5xl sm:text-6xl font-normal text-[#3d2e23] font-serif tracking-wide rotate-[2deg]">
              Wanita
            </h1>
          </div>

          <div className="border-t-2 border-dashed border-[#bda893]/40 pt-4">
            <p className="text-sm font-mono tracking-wider text-[#7c644e]">
              [ Minggu, 23 Agustus 2026 ]
            </p>
          </div>
        </div>
      </section>

      {/* 2. PROFIL PENGANTIN: THE POLAROID CAPSULE */}
      <section
        id="mempelai"
        className="py-32 px-6 bg-[#f3ebe1] relative scroll-mt-12"
      >
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-2">
            <h2 className="text-xs uppercase tracking-[0.3em] text-[#9a8069] font-mono font-bold">
              Dua Jiwa, Satu Lembar Buku
            </h2>
            <p className="text-[#6e5641] max-w-md mx-auto text-sm font-serif italic leading-relaxed">
              Dengan memohon rahmat Allah Subhanahu wa Ta'ala, coretan takdir
              membawa kami melangkah bersama ke babak yang baru:
            </p>
          </div>

          {/* Grid Layout Polaroid Bertumpuk Acak */}
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto items-center">
            {/* Polaroid Pria */}
            <div className="bg-white p-5 pb-10 border border-[#c9bba7] shadow-sm rounded-xs rotate-[-3deg] hover:rotate-0 transition-transform duration-300 max-w-sm mx-auto w-full">
              {/* Tempat Gambar - Pure Objek Estetik */}
              <div className="aspect-square bg-stone-100 border border-stone-200 overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1595084574914-cf325176c6bc?auto=format&fit=crop&w=400&q=80"
                  alt="Cincin Mempelai Pria"
                  className="w-full h-full object-cover grayscale-[20%]"
                />
              </div>
              <div className="text-center space-y-1 font-serif">
                <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400">
                  Groom
                </span>
                <h3 className="text-2xl text-[#3d2e23] italic">Nama Pria</h3>
                <p className="text-xs text-[#7c644e] pt-2 font-sans font-light">
                  Putra dari Bpk. Nama Ayah &amp; Ibu Nama Ibu
                </p>
              </div>
            </div>

            {/* Polaroid Wanita */}
            <div className="bg-white p-5 pb-10 border border-[#c9bba7] shadow-sm rounded-xs rotate-[3deg] hover:rotate-0 transition-transform duration-300 max-w-sm mx-auto w-full md:mt-8">
              {/* Tempat Gambar - Pure Objek Estetik */}
              <div className="aspect-square bg-stone-100 border border-stone-200 overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=400&q=80"
                  alt="Bunga Mempelai Wanita"
                  className="w-full h-full object-cover grayscale-[20%]"
                />
              </div>
              <div className="text-center space-y-1 font-serif">
                <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400">
                  Bride
                </span>
                <h3 className="text-2xl text-[#3d2e23] italic">Nama Wanita</h3>
                <p className="text-xs text-[#7c644e] pt-2 font-sans font-light">
                  Putri dari Bpk. Nama Ayah &amp; Ibu Nama Ibu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAIL ACARA: THE NOTEBOOK CARD */}
      <section
        id="acara"
        className="py-28 px-6 bg-[#faf6ee] scroll-mt-12 border-y-2 border-dashed border-[#bda893]/60"
      >
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <h2 className="text-xs uppercase tracking-[0.3em] text-[#9a8069] font-mono font-bold">
            Agenda Catatan Perayaan
          </h2>

          {/* Card mirip kertas robekan binder */}
          <div className="bg-white p-8 rounded-xl border-2 border-[#bda893] text-left space-y-6 shadow-xs relative">
            <div className="absolute top-3 right-4 font-mono text-[9px] text-[#bda893]">
              PAGE: 01/01
            </div>

            <div className="space-y-2 border-b border-dashed border-stone-200 pb-4">
              <h3 className="text-lg font-serif italic text-[#3d2e23]">
                📝 Akad Nikah
              </h3>
              <p className="text-sm font-mono text-[#7c644e] font-bold">
                Pukul 09.00 WIB
              </p>
              <p className="text-xs text-[#9a8069]">
                📍 Lokasi: Kediaman Mempelai Wanita — Jl. Contoh Lokasi Rumah
                No. 123, Jakarta
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-serif italic text-[#3d2e23]">
                🎈 Resepsi Cerita
              </h3>
              <p className="text-sm font-mono text-[#7c644e] font-bold">
                Pukul 11.00 - 17.00 WIB
              </p>
              <p className="text-xs text-[#9a8069]">
                📍 Lokasi: Gedung Kebun Asri Pemuda — Area Outdoor Alam, Hall B,
                Jakarta
              </p>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] uppercase tracking-widest bg-[#4e3d30] hover:bg-[#3d2e23] text-white font-mono py-3.5 px-8 rounded-xl transition-all shadow-xs"
            >
              [ Buka Peta Alamat ]
            </a>
          </div>
        </div>
      </section>

      {/* 4. GALERI FOTO: MEMORY BOARD */}
      <section className="py-28 px-6 bg-[#f3ebe1]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-1">
            <h2 className="text-xs uppercase tracking-[0.3em] text-[#9a8069] font-mono font-bold">
              Potongan Kenangan Objek
            </h2>
            <p className="text-xs text-[#7c644e] italic font-serif">
              Our Little Archive
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="aspect-square bg-white p-3 pb-6 border border-[#c9bba7] rotate-2 hover:rotate-0 transition-transform shadow-2xs">
              <img
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=400&q=80"
                alt="Detail Kenangan 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-white p-3 pb-6 border border-[#c9bba7] -rotate-3 hover:rotate-0 transition-transform shadow-2xs">
              <img
                src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=400&q=80"
                alt="Detail Kenangan 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-white p-3 pb-6 border border-[#c9bba7] rotate-1 hover:rotate-0 transition-transform shadow-2xs col-span-2 md:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=400&q=80"
                alt="Detail Kenangan 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. RSVP: GUESTBOOK LOG */}
      <section className="py-24 px-6 bg-[#faf6ee] pb-36">
        <div className="max-w-xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-xs uppercase tracking-[0.3em] text-[#3d2e23] font-mono font-bold">
              Isi Buku Tamu Undangan
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#bda893] space-y-5 shadow-xs relative"
          >
            <div className="absolute -top-3 left-6 px-3 py-0.5 bg-[#4e3d30] text-white text-[9px] uppercase tracking-wider font-mono rounded">
              Form RSVP
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7c644e] mb-1 font-bold">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 border-2 border-dashed border-[#bda893]/40 rounded-xl font-sans text-sm focus:outline-none focus:border-[#4e3d30] bg-[#faf6ee]/40"
                placeholder="Tulis namamu di sini"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7c644e] mb-1 font-bold">
                Status Kehadiran
              </label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full px-4 py-2.5 border-2 border-dashed border-[#bda893]/40 rounded-xl font-sans text-sm focus:outline-none focus:border-[#4e3d30] bg-[#faf6ee]/40"
              >
                <option value="Hadir">Bisa Datang</option>
                <option value="Tidak Hadir">Berhalangan Datang</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7c644e] mb-1 font-bold">
                Coretan Doa &amp; Harapan
              </label>
              <textarea
                rows="3"
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                className="w-full px-4 py-2.5 border-2 border-dashed border-[#bda893]/40 rounded-xl font-sans text-sm focus:outline-none focus:border-[#4e3d30] bg-[#faf6ee]/40"
                placeholder="Titip doa hangatmu di lembar ini..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-xs font-mono uppercase tracking-widest bg-[#4e3d30] hover:bg-[#3d2e23] text-white py-4 rounded-xl transition-all font-bold shadow-xs"
            >
              Tempel Coretan Doa ✨
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

import React, { useState, useEffect } from "react";

export default function Cinematic() {
  const [form, setForm] = useState({ name: "", status: "Hadir", text: "" });

  useEffect(() => {
    document.title = "The Cinematic Wedding of Jane & Arthur";
    return () => {
      document.title = "Undangan Pernikahan Digital";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.text)
      return alert("Mohon lengkapi nama dan ucapan Anda terlebih dahulu.");
    alert("Doa restu berharga Anda telah tersimpan di prasasti kami.");
    setForm({ name: "", status: "Hadir", text: "" });
  };

  return (
    <div className="min-h-screen bg-[#1A1917] text-[#E8E5E0] font-sans antialiased overflow-x-hidden selection:bg-white/20">
      {/* === NAVBAR ATAS MINIMALIS === */}
      <div className="fixed top-0 inset-x-0 h-20 flex flex-col items-center justify-center z-30 bg-gradient-to-b from-[#1A1917]/80 to-transparent text-white px-4">
        <div className="font-serif text-base tracking-[0.15em] font-light">
          Jane <span className="italic text-stone-400">&amp;</span> Arthur
        </div>
        <div className="flex gap-5 text-[9px] tracking-[0.2em] uppercase font-light text-stone-300 mt-1.5">
          <button
            onClick={() =>
              document
                .getElementById("mempelai")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none"
          >
            About Us
          </button>
          <button
            onClick={() =>
              document
                .getElementById("acara")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none"
          >
            Invitation
          </button>
          <button
            onClick={() =>
              document
                .getElementById("rsvp")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none"
          >
            RSVP
          </button>
        </div>
      </div>

      {/* 1. HERO COVER WITH PARALLAX EFFECT */}
      <section className="min-h-screen w-full relative flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {/* Foto Lanskap Pernikahan dengan Efek Parallax yang Megah */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed brightness-[0.7] transform scale-100"
          style={{
            backgroundImage:
              "url('http://googleusercontent.com/image_collection/image_retrieval/2929766830658638450_0')",
          }}
        ></div>

        {/* Overlay Gradasi Hitam Sinematik */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1917] via-transparent to-[#1A1917]/50 pointer-events-none"></div>

        {/* Konten Utama Tipografi Puisi Di Tengah */}
        <div className="z-10 space-y-3 max-w-2xl mt-12">
          <h2 className="text-3xl sm:text-6xl font-serif italic font-light text-white/95 tracking-wide leading-tight px-4 drop-shadow-md">
            Me and you. Just us two.
          </h2>

          <p className="text-[11px] tracking-[0.3em] uppercase font-light text-stone-300/90 pt-1">
            20 . 09 . 2026
          </p>
        </div>

        {/* Indikator Slider Mini */}
        <div className="absolute bottom-8 text-[9px] tracking-widest text-stone-400 uppercase font-light z-10">
          &larr; 1 / 3 &rarr;
        </div>
      </section>

      {/* 2. PROFIL PENGANTIN */}
      <section
        id="mempelai"
        className="py-32 px-6 bg-[#1A1917] relative border-b border-white/5 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <span className="text-[9px] uppercase tracking-[0.4em] text-stone-400 block font-medium">
              Our Story
            </span>
            <h3 className="text-3xl font-serif font-light text-white">
              Mempelai Pernikahan
            </h3>
            <div className="w-6 h-[1px] bg-stone-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-3xl mx-auto text-center md:text-left">
            {/* Pria */}
            <div className="space-y-4 border-l border-white/10 pl-0 md:pl-6">
              <span className="text-[10px] tracking-widest text-stone-400 uppercase font-bold">
                The Groom
              </span>
              <h4 className="text-2xl font-serif text-white font-light">
                Arthur William, S.E.
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Putra tercinta dari keluarga besar:
                <br />
                <span className="text-stone-300 font-medium block pt-1">
                  Bpk. Nama Ayah &amp; Ibu Nama Ibu
                </span>
              </p>
            </div>

            {/* Wanita */}
            <div className="space-y-4 border-l border-white/10 pl-0 md:pl-6">
              <span className="text-[10px] tracking-widest text-stone-400 uppercase font-bold">
                The Bride
              </span>
              <h4 className="text-2xl font-serif text-white font-light">
                Jane Anastasia, S.Ds.
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Putri tercinta dari keluarga besar:
                <br />
                <span className="text-stone-300 font-medium block pt-1">
                  Bpk. Nama Ayah &amp; Ibu Nama Ibu
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAIL ACARA */}
      <section
        id="acara"
        className="py-28 px-6 bg-[#151413] border-b border-white/5"
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <span className="text-[9px] uppercase tracking-[0.4em] text-stone-400 block font-medium">
            The Celebration
          </span>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
            {/* Akad Card */}
            <div className="bg-[#1A1917] p-8 rounded-xl border border-white/5 space-y-3 shadow-md">
              <span className="text-stone-400 font-sans text-[9px] font-bold uppercase tracking-widest block">
                Akad Sakral
              </span>
              <h3 className="text-2xl font-serif font-light text-white">
                Pukul 09.00 WIB
              </h3>
              <p className="text-xs text-stone-400 font-light">
                Masjid Raya Al-Mabrur Dome
              </p>
              <p className="text-[11px] text-stone-500 pt-2 border-t border-white/5">
                Kawasan Sunset Hills View, Jakarta
              </p>
            </div>

            {/* Resepsi Card */}
            <div className="bg-[#1A1917] p-8 rounded-xl border border-white/5 space-y-3 shadow-md">
              <span className="text-stone-400 font-sans text-[9px] font-bold uppercase tracking-widest block">
                Resepsi Agung
              </span>
              <h3 className="text-2xl font-serif font-light text-white">
                Pukul 12.00 - 17.00 WIB
              </h3>
              <p className="text-xs text-stone-400 font-light">
                The Glass House Sky Pavilion
              </p>
              <p className="text-[11px] text-stone-500 pt-2 border-t border-white/5">
                Halaman Terbuka Atas Bukit, Jakarta
              </p>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[10px] uppercase tracking-widest bg-white hover:bg-stone-200 text-[#1A1917] py-3.5 px-8 rounded font-bold transition-all shadow-sm"
            >
              Navigasi Google Maps Lokasi
            </a>
          </div>
        </div>
      </section>

      {/* 4. RSVP FORM */}
      <section id="rsvp" className="py-24 px-6 bg-[#1A1917] pb-36">
        <div className="max-w-xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-[9px] uppercase tracking-[0.4em] text-stone-400 block font-medium">
              Reservation
            </span>
            <h2 className="text-2xl font-serif font-light text-white">
              Kehadiran &amp; Doa Restu
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#151413] p-6 sm:p-8 rounded-2xl border border-white/5 space-y-5 shadow-xl"
          >
            <div>
              <label className="block text-[9px] uppercase tracking-widest text-stone-400 mb-1 font-bold">
                Nama Tamu
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 border border-white/10 rounded-lg font-sans text-sm focus:outline-none focus:border-stone-400 bg-[#1A1917] text-white"
                placeholder="Nama lengkap Anda"
              />
            </div>
            <div>
              <label className="block text-[9px] uppercase tracking-widest text-stone-400 mb-1 font-bold">
                Konfirmasi
              </label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full px-4 py-3 border border-white/10 rounded-lg font-sans text-sm focus:outline-none focus:border-stone-400 bg-[#1A1917] text-white"
              >
                <option value="Hadir">Saya bersedia hadir</option>
                <option value="Tidak Hadir">Mohon maaf berhalangan</option>
              </select>
            </div>
            <div>
              <label className="block text-[9px] uppercase tracking-widest text-stone-400 mb-1 font-bold">
                Ucapan Doa
              </label>
              <textarea
                rows="3"
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                className="w-full px-4 py-3 border border-white/10 rounded-lg font-sans text-sm focus:outline-none focus:border-stone-400 bg-[#1A1917] text-white"
                placeholder="Tuliskan bait doa restu Anda..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-[10px] uppercase tracking-widest bg-white hover:bg-stone-200 text-[#1A1917] py-4 rounded-lg transition-all font-black cursor-pointer"
            >
              Kirim Pesan Konfirmasi
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

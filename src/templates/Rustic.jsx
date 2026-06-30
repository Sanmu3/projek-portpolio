import React, { useState, useEffect } from "react";

export default function Rustic() {
  const [form, setForm] = useState({ name: "", status: "Hadir", text: "" });

  useEffect(() => {
    document.title = "The Colorful Festive Rustic Wedding";
    return () => {
      document.title = "Undangan Pernikahan Digital";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.text)
      return alert("Isi nama dan ucapan dulu ya, Bang!");
    alert("Ucapan Anda berhasil dikirim!");
    setForm({ name: "", status: "Hadir", text: "" });
  };

  return (
    <div className="min-h-screen bg-[#Fdfbf7] text-[#4A3E3D] font-serif antialiased overflow-x-hidden selection:bg-[#E6A18C]/30">
      {/* === 0. FIXED NAV MEMBAL === */}
      <div className="fixed bottom-6 inset-x-4 h-14 flex items-center justify-around px-6 z-30 rounded-2xl bg-[#5F7A61]/90 backdrop-blur-md border-2 border-[#EAD5C3] text-white font-sans text-xs shadow-lg max-w-md mx-auto">
        <button
          onClick={() =>
            document
              .getElementById("mempelai")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="hover:text-[#E9A18E] font-bold tracking-wider cursor-pointer transition-all active:scale-95"
        >
          Mempelai
        </button>
        <span className="text-[#EAD5C3]">|</span>
        <button
          onClick={() =>
            document
              .getElementById("acara")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="hover:text-[#E9A18E] font-bold tracking-wider cursor-pointer transition-all active:scale-95"
        >
          Acara
        </button>
      </div>

      {/* === 1. HERO COVER === */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative bg-gradient-to-tr from-[#E6A18C]/40 via-[#F3E3C3]/50 to-[#5F7A61]/20 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#E6A18C]/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-[#D9A05B]/20 blur-3xl animate-bounce duration-[4000ms]"></div>

        <div className="absolute inset-4 border-2 border-[#5F7A61]/30 rounded-[2.5rem] pointer-events-none"></div>
        <div className="absolute inset-6 border border-dashed border-[#D9A05B]/40 rounded-[2.3rem] pointer-events-none"></div>

        <div className="z-10 space-y-8 max-w-lg p-6">
          <span className="text-xs tracking-[0.4em] uppercase text-[#5F7A61] bg-[#5F7A61]/10 px-4 py-1.5 rounded-full inline-block font-sans font-bold animate-pulse">
            The Wedding Celebration
          </span>

          <div className="relative py-6 flex flex-col items-center justify-center">
            <h1 className="text-7xl sm:text-9xl font-normal text-[#E6A18C] italic font-serif tracking-tight drop-shadow-xs leading-none">
              Pria
            </h1>
            <div className="w-16 h-16 my-[-10px] rounded-full bg-[#D9A05B] text-white flex items-center justify-center text-xl font-sans font-bold border-4 border-[#Fdfbf7] shadow-md z-10 rotate-12 hover:rotate-0 transition-transform duration-300">
              and
            </div>
            <h1 className="text-7xl sm:text-9xl font-normal text-[#5F7A61] italic font-serif tracking-tight drop-shadow-xs leading-none">
              Wanita
            </h1>
          </div>

          <div className="space-y-3">
            <p className="text-xs tracking-[0.25em] uppercase font-sans text-[#4A3E3D] font-black">
              Minggu, 23 Agustus 2026
            </p>
          </div>
        </div>
      </section>

      {/* === 2. PROFIL PENGANTIN === */}
      <section
        id="mempelai"
        className="py-32 px-6 bg-[#Fdfbf7] relative scroll-mt-6"
      >
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[#D9A05B] font-sans font-black">
              Mempelai Pernikahan
            </h2>
            <div className="w-12 h-1 bg-[#E6A18C] mx-auto rounded-full"></div>
            <p className="text-[#6B5A59] max-w-md mx-auto text-sm font-sans italic leading-relaxed">
              Dengan memohon rahmat Allah Subhanahu wa Ta'ala, kami gembira
              menyatukan dua insan dalam ikatan suci:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto items-stretch">
            {/* Blok Mempelai Pria */}
            <div className="bg-[#E6A18C]/10 p-8 sm:p-10 rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-3xl rounded-br-3xl border-2 border-[#E6A18C]/30 shadow-xs hover:scale-[1.02] transition-transform duration-300 relative group overflow-hidden">
              <div className="absolute -bottom-8 -left-8 text-9xl font-sans font-black text-[#E6A18C]/15 pointer-events-none select-none">
                GROOM
              </div>
              <div className="space-y-4 relative z-10">
                <span className="text-[10px] tracking-widest text-[#E6A18C] font-sans uppercase block font-bold">
                  Mempelai Pria
                </span>
                <h3 className="text-3xl font-bold text-[#4A3E3D] font-serif tracking-wide">
                  Nama Mempelai Pria
                </h3>
                <p className="text-xs text-[#6B5A59] font-sans pt-4 border-t border-[#E6A18C]/20 leading-relaxed">
                  Putra kedua dari pasangan terkasih:
                  <br />
                  <span className="font-bold text-[#4A3E3D] text-sm block pt-1">
                    Bpk. Nama Ayah &amp; Ibu Nama Ibu
                  </span>
                </p>
              </div>
            </div>

            {/* Blok Mempelai Wanita */}
            <div className="bg-[#5F7A61]/10 p-8 sm:p-10 rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-3xl rounded-bl-3xl border-2 border-[#5F7A61]/30 shadow-xs hover:scale-[1.02] transition-transform duration-300 relative group overflow-hidden md:mt-8">
              <div className="absolute -top-8 -right-8 text-9xl font-sans font-black text-[#5F7A61]/15 pointer-events-none select-none">
                BRIDE
              </div>
              <div className="space-y-4 relative z-10">
                <span className="text-[10px] tracking-widest text-[#5F7A61] font-sans uppercase block font-bold">
                  Mempelai Wanita
                </span>
                <h3 className="text-3xl font-bold text-[#4A3E3D] font-serif tracking-wide">
                  Nama Mempelai Wanita
                </h3>
                <p className="text-xs text-[#6B5A59] font-sans pt-4 border-t border-[#5F7A61]/20 leading-relaxed">
                  Putri bungsu dari pasangan terkasih:
                  <br />
                  <span className="font-bold text-[#4A3E3D] text-sm block pt-1">
                    Bpk. Nama Ayah &amp; Ibu Nama Ibu
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === 3. DETAIL ACARA === */}
      <section
        id="acara"
        className="py-28 px-6 bg-[#F4EDE2] border-y-2 border-[#EAD5C3] relative scroll-mt-6"
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#5F7A61] font-sans font-black">
            Waktu &amp; Tempat Perayaan
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
            {/* Card Akad */}
            <div className="bg-white p-8 rounded-3xl border-2 border-[#D9A05B]/40 space-y-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D9A05B]/10 rounded-bl-full pointer-events-none"></div>
              <span className="inline-block px-3 py-1 bg-[#D9A05B] text-white font-sans text-[10px] font-bold uppercase tracking-wider rounded-md">
                Akad Nikah
              </span>
              <div className="space-y-1">
                <h3 className="text-3xl font-black text-[#4A3E3D] font-serif">
                  09.00 WIB
                </h3>
                <p className="text-xs text-[#6B5A59] font-sans font-bold">
                  Kediaman Mempelai Wanita
                </p>
              </div>
              <p className="text-xs font-sans text-[#4A3E3D] opacity-80 pt-2 border-t border-stone-100">
                Jl. Contoh Lokasi Rumah No. 123, Jakarta
              </p>
            </div>

            {/* Card Resepsi */}
            <div className="bg-white p-8 rounded-3xl border-2 border-[#E6A18C]/40 space-y-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E6A18C]/10 rounded-bl-full pointer-events-none"></div>
              <span className="inline-block px-3 py-1 bg-[#E6A18C] text-white font-sans text-[10px] font-bold uppercase tracking-wider rounded-md">
                Resepsi
              </span>
              <div className="space-y-1">
                <h3 className="text-3xl font-black text-[#4A3E3D] font-serif">
                  11.00 - 17.00 WIB
                </h3>
                <p className="text-xs text-[#6B5A59] font-sans font-bold">
                  Gedung Kebun Asri Pemuda
                </p>
              </div>
              <p className="text-xs font-sans text-[#4A3E3D] opacity-80 pt-2 border-t border-stone-100">
                Area Outdoor Alam, Hall B, Jakarta
              </p>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs uppercase tracking-widest bg-[#5F7A61] hover:bg-[#4d644e] text-white font-sans py-4 px-10 rounded-full transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0 font-bold"
            >
              Buka Google Maps Peta
            </a>
          </div>
        </div>
      </section>

      {/* === 4. GALERI FOTO (Full Real Aesthetic Images) === */}
      <section className="py-28 px-6 bg-[#Fdfbf7]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[#E6A18C] font-sans font-black">
              Galeri Estetik
            </h2>
            <p className="text-xs font-sans text-[#5F7A61] italic font-semibold">
              Our Visual Album
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="aspect-square bg-stone-100 rounded-full overflow-hidden border-2 border-[#EAD5C3] hover:scale-105 transition-transform duration-300 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&w=400&q=80"
                alt="Rustic Table Decoration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-stone-100 rounded-t-full overflow-hidden border-2 border-[#EAD5C3] hover:scale-105 transition-transform duration-300 shadow-xs md:translate-y-6">
              <img
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=400&q=80"
                alt="Wedding Rings"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-stone-100 rounded-[2rem] overflow-hidden border-2 border-[#EAD5C3] hover:scale-105 transition-transform duration-300 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=400&q=80"
                alt="Wedding Flowers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-stone-100 rounded-b-full overflow-hidden border-2 border-[#EAD5C3] hover:scale-105 transition-transform duration-300 shadow-xs md:translate-y-6">
              <img
                src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=400&q=80"
                alt="Rustic Cake Detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === 5. RSVP / KIRIM DOA (Tanpa List Tampilan Ucapan Bawah) === */}
      <section className="py-24 px-6 bg-[#F4EDE2] border-t-2 border-[#EAD5C3] pb-32">
        <div className="max-w-xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[#4A3E3D] font-sans font-black">
              Kirim Doa Restu
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 rounded-[2.5rem] border-2 border-[#5F7A61] space-y-5 shadow-md"
          >
            <div>
              <label className="block text-[10px] font-sans uppercase tracking-wider text-[#5F7A61] mb-1 font-black">
                Nama Anda
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-stone-100 rounded-xl font-sans text-sm focus:outline-none focus:border-[#5F7A61] bg-[#Fdfbf7]"
                placeholder="Nama Lengkap"
              />
            </div>
            <div>
              <label className="block text-[10px] font-sans uppercase tracking-wider text-[#5F7A61] mb-1 font-black">
                Konfirmasi Kehadiran
              </label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full px-4 py-3 border-2 border-stone-100 rounded-xl font-sans text-sm focus:outline-none focus:border-[#5F7A61] bg-[#Fdfbf7]"
              >
                <option value="Hadir">Insya Allah Hadir</option>
                <option value="Tidak Hadir">Berhalangan Hadir</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-sans uppercase tracking-wider text-[#5F7A61] mb-1 font-black">
                Ucapan Selamat
              </label>
              <textarea
                rows="3"
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                className="w-full px-4 py-3 border-2 border-stone-100 rounded-xl font-sans text-sm focus:outline-none focus:border-[#5F7A61] bg-[#Fdfbf7]"
                placeholder="Tulis doa manis Anda..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-xs font-sans uppercase tracking-widest bg-[#E6A18C] hover:bg-[#d68a73] text-white py-4 rounded-xl transition-all font-black shadow-sm transform active:scale-98"
            >
              Kirim Ucapan Kebahagiaan
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

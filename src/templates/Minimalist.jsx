import React, { useState, useEffect } from "react";

export default function Minimalist() {
  // State untuk kolom ucapan / RSVP
  const [wishes, setWishes] = useState([
    {
      name: "Kurniawan",
      status: "Hadir",
      text: "Selamat ya bro! Semoga menjadi keluarga yang sakinah mawaddah warahmah, langgeng terus sampai tua.",
    },
    {
      name: "Siti Rahma",
      status: "Tidak Hadir",
      text: "Happy wedding! Maaf banget belum bisa hadir karena masih di luar kota, tapi doa terbaik buat kalian.",
    },
  ]);
  const [form, setForm] = useState({ name: "", status: "Hadir", text: "" });

  useEffect(() => {
    document.title = "The Wedding of Pria & Wanita";
    return () => {
      document.title = "Undangan Pernikahan Digital";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.text)
      return alert("Isi nama dan ucapan dulu ya, Bang!");
    setWishes([form, ...wishes]);
    setForm({ name: "", status: "Hadir", text: "" });
  };

  return (
    <div className="min-h-screen bg-white text-[#2c2c2c] font-serif antialiased">
      {/* 1. HERO COVER (Estetika Editorial Majalah Premium & Fine Lines) */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center relative bg-white">
        {/* === NAVIGASI MINIMALIS (Pengisi Ruang Kosong Atas) === */}
        <div className="absolute top-0 inset-x-0 h-12 flex items-center justify-between px-6 sm:px-12 z-20 text-[10px] uppercase tracking-[0.2em] text-stone-500 font-sans border-b border-stone-100 bg-white/80 backdrop-blur-xs">
          <div className="font-semibold tracking-[0.3em]">P &amp; W</div>
          <div className="flex gap-4 text-stone-400">
            {/* Menggunakan fungsi onClick bawaan JS untuk scroll smooth */}
            <button
              onClick={() =>
                document
                  .getElementById("mempelai")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-stone-800 cursor-pointer transition-colors"
            >
              Mempelai
            </button>
            <span>•</span>
            <button
              onClick={() =>
                document
                  .getElementById("acara")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-stone-800 cursor-pointer transition-colors"
            >
              Acara
            </button>
          </div>
        </div>

        {/* Garis batas vertikal khas minimalis mewah */}
        <div className="absolute inset-x-0 bottom-12 border-b border-stone-100"></div>
        <div className="absolute inset-y-0 left-6 sm:left-12 border-l border-stone-50"></div>
        <div className="absolute inset-y-0 right-6 sm:right-12 border-r border-stone-50"></div>

        {/* Konten Utama Hero */}
        <div className="space-y-8 max-w-xl z-10 py-12 px-6 mt-12">
          <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-sans font-semibold">
            The Wedding of
          </p>

          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-4xl sm:text-6xl font-light tracking-widest text-stone-800 uppercase">
              Pria
            </h1>
            <span className="text-2xl font-serif italic text-stone-300 my-1">
              &amp;
            </span>
            <h1 className="text-4xl sm:text-6xl font-light tracking-widest text-stone-800 uppercase">
              Wanita
            </h1>
          </div>

          <div className="w-8 h-[1px] bg-stone-300 mx-auto"></div>

          <div className="space-y-2">
            <p className="text-[11px] tracking-[0.25em] uppercase font-sans text-stone-500 font-medium">
              Minggu, 12 Juli 2026
            </p>
            <p className="text-xs italic text-stone-400 max-w-xs mx-auto font-serif">
              Save the date for our celebration
            </p>
          </div>
        </div>
      </section>

      {/* 2. PROFIL PENGANTIN (Responsif HP, Tanpa Singkatan) */}
      {/* 2. PROFIL PENGANTIN (REVISI: Menggunakan UI Model Kartu Minimalis Premium & Responsif) */}
      <section
        id="mempelai"
        className="py-28 px-4 bg-[#faf9f6] relative border-b border-stone-100 scroll-mt-12"
      >
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Teks Pengantar atas */}
          <div className="text-center space-y-4">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-sans font-bold">
              The Couple
            </h2>
            <p className="text-stone-500 max-w-md mx-auto text-sm font-sans font-light leading-relaxed px-2">
              Dengan memohon rahmat Allah Subhanahu wa Ta'ala, kami mengundang
              Anda untuk berbagi kebahagiaan di pernikahan kami:
            </p>
          </div>

          {/* Grid Kartu: 2 Kolom di Laptop, otomatis jadi 1 Kolom di HP */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
            {/* KARTU MEMPELAI PRIA */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-100 shadow-xs hover:shadow-md transition-all duration-300 text-center flex flex-col justify-center relative overflow-hidden group">
              {/* Garis aksen tipis di bagian atas kartu saat di-hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-stone-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <span className="text-[9px] tracking-[0.25em] text-stone-400 font-sans uppercase block mb-2 font-medium">
                Mempelai Pria
              </span>
              <h3 className="text-2xl sm:text-3xl font-light tracking-wide text-stone-800 uppercase">
                Nama Pria
              </h3>
              <div className="w-6 h-[1px] bg-stone-200 mx-auto my-4"></div>
              <p className="text-xs tracking-wider text-stone-400 font-sans font-light">
                Putra dari Bpk. Nama Ayah <br /> &amp; Ibu Nama Ibu
              </p>
            </div>

            {/* KARTU MEMPELAI WANITA */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-100 shadow-xs hover:shadow-md transition-all duration-300 text-center flex flex-col justify-center relative overflow-hidden group">
              {/* Garis aksen tipis di bagian atas kartu saat di-hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-stone-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <span className="text-[9px] tracking-[0.25em] text-stone-400 font-sans uppercase block mb-2 font-medium">
                Mempelai Wanita
              </span>
              <h3 className="text-2xl sm:text-3xl font-light tracking-wide text-stone-800 uppercase">
                Nama Wanita
              </h3>
              <div className="w-6 h-[1px] bg-stone-200 mx-auto my-4"></div>
              <p className="text-xs tracking-wider text-stone-400 font-sans font-light">
                Putri dari Bpk. Nama Ayah <br /> &amp; Ibu Nama Ibu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAIL ACARA */}
      <section
        id="acara"
        className="py-24 px-4 bg-[#faf9f6] border-b border-stone-100"
      >
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Info Waktu */}
          <div className="space-y-8">
            <div className="border-l border-stone-300 pl-6 space-y-1">
              <h3 className="text-xs tracking-widest uppercase font-sans text-stone-400">
                Akad Nikah
              </h3>
              <p className="text-xl font-light text-stone-800">
                Pukul 08.00 - 10.00 WIB
              </p>
              <p className="text-sm font-sans text-stone-600">
                Masjid Agung Al-Barkah
              </p>
            </div>

            <div className="border-l border-stone-300 pl-6 space-y-1">
              <h3 className="text-xs tracking-widest uppercase font-sans text-stone-400">
                Resepsi
              </h3>
              <p className="text-xl font-light text-stone-800">
                Pukul 11.00 - 16.00 WIB
              </p>
              <p className="text-sm font-sans text-stone-600">
                Gedung Pertemuan Ballroom Harmoni
              </p>
            </div>
          </div>

          {/* Peta Lokasi */}
          <div className="bg-white p-6 rounded-lg border border-stone-100 text-center space-y-4 shadow-2xs">
            <div className="aspect-video bg-stone-50 rounded flex items-center justify-center border border-stone-100">
              <span className="text-[10px] font-sans text-stone-400 tracking-widest uppercase">
                [ Peta Google Maps ]
              </span>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[10px] uppercase tracking-widest bg-stone-800 hover:bg-stone-900 text-white font-sans py-3 px-6 rounded transition-colors w-full sm:w-auto"
            >
              Buka Google Maps 📍
            </a>
          </div>
        </div>
      </section>

      {/* 4. GALERI FOTO (REVISI: Link foto ke-3 diperbaiki agar ter-load sempurna) */}
      {/* 4. GALERI FOTO (REVISI: Bebas dari foto manusia, murni objek estetik pernikahan) */}
      <section className="py-24 px-4 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-sans font-bold">
              Momen Bahagia
            </h2>
            <p className="text-xs italic text-stone-400">Our Wedding Gallery</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Foto 1: Detail Cincin Pernikahan Minimalis */}
            <div className="aspect-[3/4] bg-stone-50 overflow-hidden rounded-md border border-stone-100">
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=400&q=80"
                alt="Detail Cincin Pernikahan"
                className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            {/* Foto 2: Dekorasi Meja Pernikahan Aesthetic Clean */}
            <div className="aspect-[3/4] bg-stone-50 overflow-hidden rounded-md border border-stone-100">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80"
                alt="Dekorasi Meja Minimalis"
                className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            {/* Foto 3: Buket Bunga Putih Elegan */}
            <div className="aspect-[3/4] bg-stone-50 overflow-hidden rounded-md border border-stone-100 col-span-2 md:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=400&q=80"
                alt="Buket Bunga Pernikahan"
                className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. RSVP & UCAPAN */}
      <section className="py-24 px-4 bg-[#faf9f6]">
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-sans font-bold">
              Konfirmasi Kehadiran & Doa
            </h2>
            <p className="text-xs italic text-stone-400">
              Berikan ucapan selamat serta konfirmasi kehadiran Anda
            </p>
          </div>

          {/* Form Input */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl border border-stone-100 space-y-4 shadow-2xs"
          >
            <div>
              <label className="block text-[10px] font-sans uppercase tracking-wider text-stone-400 mb-1 font-semibold">
                Nama Anda
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2 border border-stone-100 rounded font-sans text-sm focus:outline-none focus:border-stone-400 bg-stone-50/50"
                placeholder="Masukkan nama lengkap"
              />
            </div>
            <div>
              <label className="block text-[10px] font-sans uppercase tracking-wider text-stone-400 mb-1 font-semibold">
                Konfirmasi Kehadiran
              </label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full px-4 py-2 border border-stone-100 rounded font-sans text-sm focus:outline-none focus:border-stone-400 bg-stone-50/50"
              >
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-sans uppercase tracking-wider text-stone-400 mb-1 font-semibold">
                Ucapan & Doa
              </label>
              <textarea
                rows="3"
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                className="w-full px-4 py-2 border border-stone-100 rounded font-sans text-sm focus:outline-none focus:border-stone-400 bg-stone-50/50"
                placeholder="Tulis ucapan selamat Anda di sini..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-[10px] font-sans uppercase tracking-widest bg-stone-800 hover:bg-stone-900 text-white py-3.5 rounded transition-colors font-medium"
            >
              Kirim Ucapan ✨
            </button>
          </form>

          {/* Daftar Ucapan */}
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {wishes.map((wish, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-stone-100 shadow-3xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-sans font-semibold text-sm text-stone-800">
                    {wish.name}
                  </h4>
                  <span
                    className={`text-[9px] font-sans px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      wish.status === "Hadir"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-rose-50 text-rose-700"
                    }`}
                  >
                    {wish.status}
                  </span>
                </div>
                <p className="font-sans text-stone-500 text-xs leading-relaxed">
                  {wish.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

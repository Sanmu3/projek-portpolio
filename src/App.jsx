import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MinimalistTemplate from "./templates/Minimalist";
import RusticTemplate from "./templates/Rustic";
import ElegantTemplate from "./templates/Elegant";
import ScrapbookTemplate from "./templates/Scrapbook";

// Tambahkan rutenya di dalam blok <Routes>
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates/minimalist" element={<MinimalistTemplate />} />
        <Route path="/templates/rustic" element={<RusticTemplate />} />
        <Route path="/templates/elegant" element={<ElegantTemplate />} />
        <Route path="/templates/scrapbook" element={<ScrapbookTemplate />} />
      </Routes>
    </BrowserRouter>
  );
}

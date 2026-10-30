"use client";

import { useState } from "react";
import TopBar from "./components/TopBar";
import Stats from "./components/Stats";
import Highlight from "./components/Highlight";
import Sidebar from "./components/Sidebar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import VideoModal from "./components/VideoModal";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  const [lang, setLang] = useState("PT");
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans antialiased flex flex-col min-h-screen">
      <TopBar lang={lang} setLang={setLang} />
      <Header />
      <Hero />
      <Stats />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <Highlight onPlay={() => setVideoOpen(true)} />
          <Sidebar />
        </div>
      </main>

      <Gallery />
      <Footer />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}
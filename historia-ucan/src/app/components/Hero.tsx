import { useEffect, useState } from "react";
import { slides } from "../data/content";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[current];

  return (
    <section id="inicio" className="relative bg-ucan-dark text-white overflow-hidden">
      <div className="relative h-[380px] sm:h-[480px] md:h-[520px] w-full">
        <img
          src={slide.img}
          alt="Campus UCAN Palanca"
          className="w-full h-full object-cover transition-opacity duration-700 opacity-90"
        />

        <div className="absolute inset-0 gradient-overlay flex flex-col justify-end p-6 sm:p-12 md:p-16">
          <div className="max-w-4xl mx-auto w-full">
            <span className="inline-block bg-ucan-gold text-ucan-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              Património Académico de Angola
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold mb-3 leading-tight drop-shadow-md">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-200 max-w-2xl mb-6 font-light leading-relaxed">
              {slide.desc}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#linha-do-tempo"
                className="bg-ucan-gold hover:bg-yellow-500 text-ucan-blue font-bold px-6 py-2.5 rounded-lg transition shadow-lg text-sm flex items-center"
              >
                Explorar Linha do Tempo <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a
                href="#destaque-video"
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md px-5 py-2.5 rounded-lg border border-white/30 transition text-sm flex items-center"
              >
                <i className="fas fa-play mr-2 text-ucan-gold"></i> Assistir Documentário
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-6 flex items-center space-x-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={
                i === current
                  ? "w-3 h-3 rounded-full bg-ucan-gold shadow opacity-100 transition"
                  : "w-3 h-3 rounded-full bg-white/50 hover:bg-white transition"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
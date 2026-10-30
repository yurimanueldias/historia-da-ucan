import { gallery } from "../data/content";

export default function Gallery() {
  return (
    <section id="galeria" className="bg-gray-100 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-ucan-gold uppercase tracking-widest">Memória Visual</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ucan-blue mt-1">
              Galeria de Época & Fotos do Campus
            </h2>
          </div>
          <a href="#" className="mt-3 md:mt-0 text-xs font-bold text-ucan-blue hover:underline flex items-center">
            Ver arquivo fotográfico completo <i className="fas fa-arrow-right ml-1"></i>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {gallery.map((g) => (
            <div
              key={g.year}
              className="group relative rounded-xl overflow-hidden shadow-sm aspect-square bg-gray-200 cursor-pointer"
            >
              <img
                src={g.img}
                alt={g.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition p-3 flex flex-col justify-end text-white">
                <span className="text-[10px] text-ucan-gold font-bold">{g.year}</span>
                <p className="text-xs font-medium">{g.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
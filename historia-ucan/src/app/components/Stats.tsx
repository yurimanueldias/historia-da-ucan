import { stats } from "../data/content";

export default function Stats() {
  return (
    <section className="bg-ucan-blue text-white py-6 border-t-4 border-ucan-gold shadow-inner">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label} className="p-2">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-ucan-gold">{s.value}</div>
            <div className="text-xs text-gray-300 uppercase tracking-wider mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
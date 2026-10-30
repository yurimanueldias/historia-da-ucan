import { quickLinks } from "../data/content";

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sticky top-24">
        <div className="border-b border-gray-100 pb-3 mb-4">
          <h3 className="font-serif font-bold text-gray-900 text-lg flex items-center">
            <i className="fas fa-list-ul text-ucan-gold mr-2.5"></i> Navegação Rápida
          </h3>
        </div>

        <ul className="space-y-2 text-xs font-medium">
          {quickLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="flex items-center justify-between p-2.5 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-ucan-blue transition"
              >
                <span>
                  <i className={`fas ${l.icon} mr-2 text-gray-400`}></i> {l.label}
                </span>
                {l.download ? (
                  <i className="fas fa-download text-[10px] text-ucan-gold"></i>
                ) : (
                  <i className="fas fa-chevron-right text-[10px] text-gray-300"></i>
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-ucan-blue to-blue-900 text-white">
          <div className="text-xs uppercase font-bold text-ucan-gold tracking-wider mb-1">Acervo em Destaque</div>
          <h4 className="font-serif text-sm font-bold mb-2">Edição Comemorativa de 20 Anos</h4>
          <p className="text-[11px] text-gray-300 mb-3">
            Consulte o livro digital sobre as duas décadas da UCAN em Angola.
          </p>
          <button className="w-full py-2 bg-ucan-gold hover:bg-yellow-500 text-ucan-blue rounded text-xs font-bold transition shadow">
            Consultar Documento
          </button>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 text-center">
          <p className="text-[11px] text-gray-500">Dúvidas ou doações ao acervo histórico?</p>
          <a href="mailto:arquivo@ucan.edu" className="text-xs text-ucan-accent font-semibold hover:underline">
            arquivo.historico@ucan.edu
          </a>
        </div>
      </div>
    </aside>
  );
}
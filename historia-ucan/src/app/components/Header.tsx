import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const link = "px-3 py-1.5 rounded-md hover:text-ucan-blue hover:bg-gray-50 transition";
  const dropItem = "block px-4 py-2 text-xs hover:bg-blue-50 text-gray-700 hover:text-ucan-blue";
  const mobileItem = "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-8">
          <div className="flex items-center space-x-3 lg:space-x-4">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-ucan-blue rounded-full flex items-center justify-center text-ucan-gold font-serif text-xl font-bold shadow-md border-2 border-ucan-gold flex-shrink-0">
              <i className="fas fa-graduation-cap text-2xl"></i>
            </div>
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold font-serif text-ucan-blue leading-tight tracking-wide">
                HISTÓRIA DA UNIVERSIDADE CATÓLICA DE ANGOLA
              </h1>
              <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">
                Memória, Conhecimento e Legado
              </p>
            </div>
          </div>

          <div className="md:hidden ml-auto">
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="text-gray-700 hover:text-ucan-blue focus:outline-none p-2"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>

          <div className="hidden lg:flex items-center ml-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar acervo..."
                className="pl-9 pr-4 py-1.5 text-xs bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ucan-blue focus:bg-white w-48 transition-all"
              />
              <i className="fas fa-search absolute left-3 top-2.5 text-gray-400 text-xs"></i>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex space-x-1 lg:space-x-6 border-t border-gray-100 py-3 text-sm font-semibold text-gray-700">
          <a href="#inicio" className="px-3 py-1.5 rounded-md text-ucan-blue bg-blue-50 hover:bg-blue-100 transition">
            <i className="fas fa-home mr-1"></i> Início
          </a>

          <div className="relative group">
            <button className="px-3 py-1.5 rounded-md hover:text-ucan-blue hover:bg-gray-50 flex items-center transition">
              A História da UCAN
              <i className="fas fa-chevron-down ml-1.5 text-xs text-gray-400 group-hover:text-ucan-blue"></i>
            </button>
            <div className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-xl py-2 hidden group-hover:block z-50 border border-gray-100">
              <a href="#origens" className={dropItem}>Origens & Fundação (1992-1997)</a>
              <a href="#expansao" className={dropItem}>Evolução do Campus</a>
              <a href="#CEIC" className={dropItem}>Investigação Científica (CEIC)</a>
            </div>
          </div>

          <a href="#linha-do-tempo" className={link}>Linha do Tempo</a>
          <a href="#personalidades" className={link}>Personalidades</a>
          <a href="#galeria" className={link}>Galeria</a>
          <a href="#testemunhos" className={link}>Testemunhos</a>
          <a href="#arquivo" className={link}>
            <i className="fas fa-archive mr-1 text-ucan-gold"></i> Arquivo Histórico
          </a>
        </nav>
      </div>

      <div className={`${menuOpen ? "" : "hidden"} md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-1`}>
        <a href="#inicio" className="block px-3 py-2 rounded-md text-base font-medium text-ucan-blue bg-blue-50">Início</a>
        <a href="#origens" className={mobileItem}>A História da UCAN</a>
        <a href="#linha-do-tempo" className={mobileItem}>Linha do Tempo</a>
        <a href="#personalidades" className={mobileItem}>Personalidades</a>
        <a href="#galeria" className={mobileItem}>Galeria de Fotos</a>
        <a href="#testemunhos" className={mobileItem}>Testemunhos</a>
        <a href="#arquivo" className={mobileItem}>Arquivo Histórico</a>
      </div>
    </header>
  );
}
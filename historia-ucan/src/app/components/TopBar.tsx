type Props = {
  lang: string;
  setLang: (lang: string) => void;
};

export default function TopBar({ lang, setLang }: Props) {
  const active = "px-2 py-0.5 rounded bg-ucan-gold text-ucan-blue font-bold text-xs shadow-sm";
  const inactive = "px-2 py-0.5 rounded text-gray-300 hover:text-white hover:bg-blue-800 transition text-xs";

  return (
    <div className="bg-ucan-blue text-white text-xs py-2 px-4 sm:px-8 border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span>
            <i className="fas fa-university mr-1.5 text-ucan-gold"></i> Portal do Acervo Histórico e Memória
          </span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline text-gray-300">Luanda, Angola</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs text-gray-300 mr-1">Idioma:</span>
          <button onClick={() => setLang("PT")} className={lang === "PT" ? active : inactive}>PT</button>
          <button onClick={() => setLang("EN")} className={lang === "EN" ? active : inactive}>EN</button>
        </div>
      </div>
    </div>
  );
}
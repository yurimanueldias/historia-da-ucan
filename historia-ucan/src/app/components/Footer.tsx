export default function Footer() {
  const item = "hover:text-white transition";

  return (
    <footer className="bg-ucan-dark text-white pt-12 pb-6 border-t-2 border-ucan-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-ucan-gold text-ucan-blue font-bold flex items-center justify-center font-serif text-sm">
                <i className="fas fa-university"></i>
              </div>
              <span className="font-serif font-bold text-sm text-white">UCAN Histórica</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Iniciativa dedicada à preservação da memória institucional da Universidade Católica de Angola.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ucan-gold mb-3">Sessões</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#origens" className={item}>Origens & Fundação</a></li>
              <li><a href="#linha-do-tempo" className={item}>Linha do Tempo</a></li>
              <li><a href="#galeria" className={item}>Acervo Fotográfico</a></li>
              <li><a href="#testemunhos" className={item}>Depoimentos Históricos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ucan-gold mb-3">Links Úteis</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#" className={item}>Portal Oficial UCAN</a></li>
              <li><a href="#" className={item}>Centro de Investigação (CEIC)</a></li>
              <li><a href="#" className={item}>CEAST - Conferência Episcopal</a></li>
              <li><a href="#" className={item}>Biblioteca Digital</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ucan-gold mb-3">Localização</h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-2">
              Rua Pedro de Castro Van-Dúnem Loy, Palanca, Luanda - Angola
            </p>
            <p className="text-xs text-gray-400">
              <i className="fas fa-envelope mr-1 text-ucan-gold"></i> historia@ucan.edu.ao
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© Universidade Católica de Angola. Todos os direitos reservados.</p>
          <p className="mt-2 sm:mt-0">Desenvolvido para preservação da Memória Académica.</p>
        </div>
      </div>
    </footer>
  );
}
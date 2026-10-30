import { timeline } from "../data/content";

type Props = {
  onPlay: () => void;
};

export default function Highlight({ onPlay }: Props) {
  return (
    <div className="lg:col-span-2 space-y-8">
      <div className="border-b border-gray-200 pb-3 flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ucan-blue flex items-center">
          <span className="w-2 h-8 bg-ucan-gold rounded mr-3 inline-block"></span>
          Destaque Histórico
        </h2>
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Acervo Audiovisual</span>
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition">
        <div
          id="destaque-video"
          className="relative bg-gray-900 aspect-video w-full flex items-center justify-center group cursor-pointer overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
            alt="Vídeo História UCAN"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-75"
          />
          <button
            onClick={onPlay}
            className="absolute w-16 h-16 sm:w-20 sm:h-20 bg-ucan-gold text-ucan-blue rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition duration-300 z-10"
          >
            <i className="fas fa-play text-xl sm:text-2xl ml-1"></i>
          </button>
          <div className="absolute bottom-3 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20">
            <i className="fas fa-clock mr-1 text-ucan-gold"></i> Documentário Completo (12:45)
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center space-x-2 text-xs font-medium text-ucan-accent mb-2">
            <i className="fas fa-film"></i>
            <span>Memória & Testemunhos de Abertura</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 mb-3">
            A Origem da UCAN: O Sonho da Igreja Católica em Angola
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            Em 1992, durante a visita histórica do Papa João Paulo II a Angola, foi semeada a ideia da criação de
            uma universidade católica. Sob a liderança da Conferência Episcopal de Angola e São Tomé (CEAST), a
            UCAN foi oficialmente erigida e reconhecida pelo Governo de Angola em 1997, abrindo as suas portas aos
            primeiros estudantes em 1999 no campus do Palanca.
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500">
            <span>
              <i className="fas fa-user-edit mr-1"></i> Arquivo do Centro de Documentação
            </span>
            <a href="#origens" className="text-ucan-blue font-bold hover:underline flex items-center">
              Ler artigo completo <i className="fas fa-chevron-right ml-1 text-xs"></i>
            </a>
          </div>
        </div>
      </div>

      <div id="linha-do-tempo" className="pt-6">
        <h3 className="text-xl font-serif font-bold text-ucan-blue mb-6 flex items-center">
          <i className="fas fa-stream text-ucan-gold mr-3"></i> Marcos Cronológicos Relevantes
        </h3>

        <div className="space-y-4 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-blue-100">
          {timeline.map((e) => (
            <div key={e.year} className="relative pl-10">
              <div
                className={`absolute left-2 top-1.5 w-4 h-4 rounded-full ${
                  e.gold ? "bg-ucan-gold" : "bg-ucan-blue"
                } border-4 border-white shadow`}
              ></div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <span className="text-xs font-bold px-2 py-0.5 bg-blue-50 text-ucan-blue rounded">{e.year}</span>
                <h4 className="font-bold text-gray-800 text-sm mt-1">{e.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{e.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
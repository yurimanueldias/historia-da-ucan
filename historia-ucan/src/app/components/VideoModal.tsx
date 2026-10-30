type Props = {
  open: boolean;
  onClose: () => void;
};

export default function VideoModal({ open, onClose }: Props) {
  return (
    <div
      className={`fixed inset-0 bg-black/80 ${
        open ? "flex" : "hidden"
      } items-center justify-center z-50 p-4 backdrop-blur-sm`}
    >
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center z-10"
        >
          ×
        </button>
        <div className="aspect-video bg-black flex items-center justify-center text-white">
          <p className="text-sm text-gray-400">
            <i className="fas fa-play-circle text-3xl mb-2 block text-center text-ucan-gold"></i>
            Reprodutor de Vídeo Histórico (Simulação)
          </p>
        </div>
        <div className="p-4 bg-gray-50 text-xs text-gray-600">
          <strong>Nota:</strong> Documentário gravado pelos arquivos da UCAN contendo relatos dos fundadores e
          primeiros professores.
        </div>
      </div>
    </div>
  );
}
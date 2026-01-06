
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 mt-12">
      <div className="portal-container px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-left">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-red text-white px-2 py-0.5 rounded font-black text-xl tracking-tighter">MT</div>
              <span className="text-lg font-black text-gray-800 tracking-tighter uppercase">Marcelo Toler</span>
            </div>
            <p className="text-xs font-bold text-gray-400 leading-relaxed uppercase tracking-wider">
              Compromisso com a verdade e o jornalismo independente de qualidade.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase text-gray-900 mb-2 tracking-widest">Editorias</span>
              <span className="text-xs font-bold text-gray-500 hover:text-brand-red cursor-pointer uppercase">Política</span>
              <span className="text-xs font-bold text-gray-500 hover:text-brand-red cursor-pointer uppercase">Economia</span>
              <span className="text-xs font-bold text-gray-500 hover:text-brand-red cursor-pointer uppercase">Tecnologia</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase text-gray-900 mb-2 tracking-widest">Institucional</span>
              <span className="text-xs font-bold text-gray-500 hover:text-brand-red cursor-pointer uppercase">Sobre Marcelo</span>
              <span className="text-xs font-bold text-gray-500 hover:text-brand-red cursor-pointer uppercase">Expediente</span>
              <span className="text-xs font-bold text-gray-500 hover:text-brand-red cursor-pointer uppercase">Ética</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase text-gray-900 mb-2 tracking-widest">Legal</span>
              <span className="text-xs font-bold text-gray-500 hover:text-brand-red cursor-pointer uppercase">Privacidade</span>
              <span className="text-xs font-bold text-gray-500 hover:text-brand-red cursor-pointer uppercase">Termos de Uso</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Marcelo Toler - Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            <div className="w-6 h-6 rounded-full bg-gray-100"></div>
            <div className="w-6 h-6 rounded-full bg-gray-100"></div>
            <div className="w-6 h-6 rounded-full bg-gray-100"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { News } from '../../types';

interface SidebarProps {
  latestNews: News[];
}

const Sidebar: React.FC<SidebarProps> = ({ latestNews }) => {
  return (
    <div className="flex flex-col gap-8">
      {/* Widget Mais Lidas - Estilo Numérico G1 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-brand-red">
        <h3 className="text-xs font-black uppercase text-gray-900 mb-6 tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-brand-red rounded-full"></span>
          Mais Lidas
        </h3>
        <div className="flex flex-col gap-6">
          {latestNews.slice(0, 5).map((n, idx) => (
            <div key={n.id} className="flex gap-4 group cursor-pointer border-b border-gray-50 pb-4 last:border-none last:pb-0">
              <span className="text-3xl font-black text-gray-100 group-hover:text-brand-red transition-colors duration-300">
                0{idx + 1}
              </span>
              <div>
                <h4 className="font-extrabold text-[12px] leading-snug text-gray-700 group-hover:underline">
                  {n.title}
                </h4>
                <span className="text-[9px] text-gray-400 uppercase font-black mt-1 block tracking-tighter">
                  {n.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter - Conversão */}
      <div className="bg-brand-dark p-8 rounded-lg text-white text-center shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-10">
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </div>
        <div className="relative z-10">
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-2 block">Exclusivo</span>
          <h4 className="font-black text-lg mb-4 leading-tight">Receba as análises de Marcelo Toler</h4>
          <input 
            type="email" 
            placeholder="Seu melhor e-mail" 
            className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-xs mb-3 outline-none focus:ring-1 focus:ring-brand-red text-white placeholder-gray-500" 
          />
          <button className="w-full bg-brand-red hover:bg-red-700 transition-colors font-black text-[11px] uppercase py-3 rounded-md tracking-widest">
            Quero me inscrever
          </button>
        </div>
      </div>

      {/* Publicidade Placeholder */}
      <div className="w-full aspect-[4/5] bg-gray-200 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 text-gray-400">
         <div className="text-center">
           <span className="font-black uppercase text-[10px] tracking-widest block">Espaço Publicitário</span>
           <span className="text-[9px] font-bold">Anuncie aqui: contato@marcelotoler.com.br</span>
         </div>
      </div>
    </div>
  );
};

export default Sidebar;

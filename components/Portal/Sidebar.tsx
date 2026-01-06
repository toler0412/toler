
import React from 'react';
import { News } from '../../types';
import GoogleAd from '../Common/GoogleAd';

interface SidebarProps {
  latestNews: News[];
}

const Sidebar: React.FC<SidebarProps> = ({ latestNews }) => {
  return (
    <div className="flex flex-col gap-8">
      {/* Widget Mais Lidas */}
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

      {/* Publicidade Real do AdSense */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <span className="text-[9px] font-black uppercase text-gray-300 block text-center mb-2 tracking-widest">Publicidade</span>
        <GoogleAd slot="1234567890" /> {/* Substitua pelo ID do bloco da Sidebar */}
      </div>

      {/* Newsletter */}
      <div className="bg-brand-dark p-8 rounded-lg text-white text-center shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-2 block">Exclusivo</span>
          <h4 className="font-black text-lg mb-4 leading-tight">Receba as análises de Marcelo Toler</h4>
          <input 
            type="email" 
            placeholder="Seu e-mail" 
            className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-xs mb-3 outline-none focus:ring-1 focus:ring-brand-red text-white" 
          />
          <button className="w-full bg-brand-red hover:bg-red-700 transition-colors font-black text-[11px] uppercase py-3 rounded-md tracking-widest">
            Inscrever-se
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  categories?: string[];
}

const Header: React.FC<HeaderProps> = ({ categories = [] }) => {
  return (
    <nav className="w-full">
      <div className="bg-brand-dark text-white text-[10px] font-bold uppercase py-2">
        <div className="portal-container px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="text-brand-red">●</span>
            <span>Portal Oficial Marcelo Toler</span>
            <span className="hidden md:inline text-gray-500">|</span>
            <span className="hidden md:inline">Notícias, Política e Tecnologia</span>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-brand-red cursor-pointer transition-colors">Newsletter</span>
            <span className="hover:text-brand-red cursor-pointer transition-colors">Contato</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 py-6">
        <div className="portal-container px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-brand-red font-extrabold uppercase text-xs tracking-wider">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16"/></svg>
              Menu
            </button>
            <Link to="/" className="flex items-center group">
              <div className="bg-brand-red text-white px-2 py-0.5 rounded font-black text-2xl tracking-tighter mr-3 group-hover:scale-105 transition-transform">
                MT
              </div>
              <div className="flex flex-col border-l-2 border-gray-100 pl-3">
                 <span className="text-xl font-black text-gray-800 leading-none tracking-tighter uppercase">Marcelo Toler</span>
                 <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-1">Jornalismo Independente</span>
              </div>
            </Link>
          </div>

          <div className="relative w-64 hidden md:block">
            <input 
              type="text" 
              placeholder="PESQUISAR NO PORTAL" 
              className="w-full bg-gray-100 border-none rounded py-2 px-4 text-[10px] font-bold focus:ring-1 focus:ring-brand-red outline-none"
            />
            <svg className="w-3 h-3 absolute right-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 hidden lg:block overflow-x-auto">
        <div className="portal-container px-4 py-3 flex gap-8 whitespace-nowrap">
          {categories.length > 0 ? (
            categories.map((cat, idx) => (
              <Link 
                key={`${cat}-${idx}`} 
                to={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-[12px] font-extrabold text-gray-600 hover:text-brand-red transition-colors uppercase border-b-2 border-transparent hover:border-brand-red pb-1"
              >
                {cat}
              </Link>
            ))
          ) : (
            <span className="text-[10px] text-gray-300 font-bold uppercase">Nenhuma categoria definida</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;


import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types';

const Header: React.FC = () => {
  const categories = Object.values(Category);

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-cnn-red text-white font-black text-2xl md:text-3xl px-3 py-1 rounded">MT</div>
            <div className="flex flex-col leading-tight">
              <span className="font-title font-extrabold text-xl md:text-2xl tracking-tighter uppercase">Blog Marcelo Toler</span>
              <span className="text-[10px] md:text-xs text-gray-500 font-semibold tracking-widest uppercase">Independência e Verdade</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="O que você procura?" 
                className="bg-gray-100 rounded-full py-2 px-6 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-cnn-red/20 w-64"
              />
              <svg className="w-4 h-4 text-gray-400 absolute right-4 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <button className="bg-cnn-red text-white px-4 py-2 rounded text-sm font-bold uppercase hover:bg-red-700 transition">Assine</button>
          </div>
          
          <button className="md:hidden">
             <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>

        {/* Categories Nav */}
        <nav className="hidden md:flex items-center border-t py-2 gap-6 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <Link 
              key={cat} 
              to={`/categoria/${cat.toLowerCase()}`} 
              className={`text-xs font-bold uppercase whitespace-nowrap hover:text-cnn-red transition-colors ${cat === Category.AO_VIVO ? 'text-cnn-red flex items-center gap-1' : 'text-gray-700'}`}
            >
              {cat === Category.AO_VIVO && <span className="w-2 h-2 bg-cnn-red rounded-full animate-pulse"></span>}
              {cat}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

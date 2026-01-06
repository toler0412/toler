
import React from 'react';
import { News } from '../../types';

interface SidebarProps {
  latestNews: News[];
}

const Sidebar: React.FC<SidebarProps> = ({ latestNews }) => {
  return (
    <div className="flex flex-col gap-10">
      {/* Ao Vivo Widget */}
      <div className="bg-black text-white p-4 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-ping"></span>
            <h3 className="font-bold uppercase text-sm tracking-widest">Ao Vivo</h3>
          </div>
          <span className="text-[10px] text-gray-400 font-bold uppercase">Blog Marcelo Toler Play</span>
        </div>
        <div className="aspect-video bg-gray-800 rounded relative group cursor-pointer flex items-center justify-center">
          <img src="https://picsum.photos/seed/live/400/225" alt="Live Stream" className="w-full h-full object-cover opacity-60 rounded" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M4.5 3.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .753.432l8.717-6a.5.5 0 0 0 0-.864l-8.717-6A.5.5 0 0 0 4.5 3.5z"></path></svg>
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm font-semibold">Análise política do dia com Marcelo Toler</p>
      </div>

      {/* Mais Lidas */}
      <div>
        <h3 className="text-lg font-bold border-l-4 border-cnn-red pl-3 mb-6 uppercase">Mais Lidas</h3>
        <div className="flex flex-col gap-6">
          {latestNews.map((n, idx) => (
            <div key={n.id} className="flex gap-4 group cursor-pointer">
              <span className="text-3xl font-black text-gray-200 group-hover:text-cnn-red transition-colors">0{idx + 1}</span>
              <div>
                <h4 className="font-bold text-sm leading-tight line-clamp-2 group-hover:underline">{n.title}</h4>
                <span className="text-[10px] text-gray-400 uppercase font-bold mt-1 block">{n.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Widget */}
      <div className="bg-gray-50 border p-6 rounded text-center">
        <h3 className="font-bold uppercase text-xs tracking-widest mb-4">Siga o Blog</h3>
        <div className="flex justify-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></div>
          <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></div>
        </div>
      </div>

      {/* Banner */}
      <div className="w-full aspect-[4/5] bg-gray-100 flex items-center justify-center border-dashed border-2 text-gray-300">
         <span className="font-bold uppercase text-[10px]">Publicidade 300x450</span>
      </div>
    </div>
  );
};

export default Sidebar;

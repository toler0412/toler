
import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { News, Category } from '../../types';
import NewsForm from './NewsForm';
import DomainConfig from './DomainConfig';

interface AdminDashboardProps {
  news: News[];
  onUpdate: (updatedNews: News[]) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ news, onUpdate }) => {
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir esta notícia?')) {
      onUpdate(news.filter(n => n.id !== id));
    }
  };

  const NewsList = () => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
      <div className="p-6 border-b flex justify-between items-center bg-gray-50">
        <h2 className="text-xl font-bold text-gray-800">Gerenciar Notícias</h2>
        <Link 
          to="/admin/new" 
          className="bg-cnn-red text-white px-5 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-red-700 transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          Nova Notícia
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold tracking-wider">
            <tr>
              <th className="px-6 py-4">Imagem</th>
              <th className="px-6 py-4">Título</th>
              <th className="px-6 py-4">Categoria</th>
              <th className="px-6 py-4">Data</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {news.map(item => (
              <tr key={item.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <img src={item.imageUrl} className="w-16 h-10 object-cover rounded" alt="" />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-700 line-clamp-1 max-w-xs">{item.title}</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-bold px-2 py-1 bg-gray-100 rounded uppercase">{item.category}</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(item.publishDate).toLocaleDateString('pt-BR')}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-xs font-medium text-gray-600">Publicado</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <button className="text-gray-400 hover:text-blue-600 transition">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="text-gray-400 hover:text-red-600 transition">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col h-screen sticky top-0">
        <div className="p-6 border-b flex items-center gap-2">
           <div className="bg-cnn-red text-white font-black px-2 py-0.5 rounded">MT</div>
           <span className="font-bold uppercase tracking-tighter">Painel Admin</span>
        </div>
        <nav className="p-4 flex flex-col gap-2">
           <Link to="/admin" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 font-bold text-gray-800 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2zM14 2v4h4"></path></svg>
              Notícias
           </Link>
           <Link to="/admin/dominio" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 font-medium text-gray-500 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              Domínio
           </Link>
           <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 font-medium text-gray-500 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Mídia
           </button>
           <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 font-medium text-gray-500 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Configurações
           </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow">
        <header className="bg-white border-b h-16 flex items-center justify-between px-8">
           <h1 className="text-sm font-bold uppercase tracking-wider text-gray-500">Dashboard de Controle</h1>
           <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                 <p className="text-xs font-bold text-gray-800">Marcelo Toler</p>
                 <p className="text-[10px] text-gray-500 font-medium">Administrador</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border">
                 <img src="https://picsum.photos/seed/admin/40/40" alt="" />
              </div>
           </div>
        </header>

        <div className="p-8 max-w-6xl mx-auto">
          <Routes>
            <Route index element={<NewsList />} />
            <Route path="new" element={<NewsForm onSubmit={(n) => { onUpdate([n, ...news]); navigate('/admin'); }} />} />
            <Route path="dominio" element={<DomainConfig />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

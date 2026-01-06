
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { News } from '../../types';
import DomainConfig from './DomainConfig';
import NewsForm from './NewsForm';
import CreationHub from './CreationHub';
import ProjectOverview from './ProjectOverview';
import MenuManager from './MenuManager';

interface AdminDashboardProps {
  news: News[];
  categories: string[];
  onUpdate: (n: News[]) => void;
  onUpdateCategories: (c: string[]) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ news, categories, onUpdate, onUpdateCategories }) => {
  const location = useLocation();

  const handleAddNews = (newNews: News) => {
    onUpdate([newNews, ...news]);
  };

  const isAdminRoot = location.pathname === '/admin' || location.pathname === '/admin/';
  const isProjectView = location.pathname.includes('/projeto');
  const isMenuView = location.pathname.includes('/menu');
  const isDomainView = location.pathname.includes('/dominio');

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8 overflow-x-auto h-full">
            <Link to="/admin" className="flex items-center gap-3 mr-4 shrink-0">
               <div className="w-7 h-7 bg-black rounded flex items-center justify-center text-white text-[11px] font-black shadow-lg">MT</div>
               <span className="text-[13px] font-bold whitespace-nowrap tracking-tight">Painel Marcelo Toler</span>
            </Link>
            
            <nav className="flex gap-6 h-full items-center text-[13px] font-medium text-gray-400">
               <Link to="/admin" className={`h-full flex items-center border-b-2 transition-all px-1 whitespace-nowrap ${isAdminRoot ? 'border-black text-black font-bold' : 'border-transparent hover:text-black'}`}>Visão geral</Link>
               <Link to="/admin/menu" className={`h-full flex items-center border-b-2 transition-all px-1 whitespace-nowrap ${isMenuView ? 'border-black text-black font-bold' : 'border-transparent hover:text-black'}`}>Menu / Categorias</Link>
               <Link to="/admin/projeto" className={`h-full flex items-center border-b-2 transition-all px-1 whitespace-nowrap ${isProjectView ? 'border-black text-black font-bold' : 'border-transparent hover:text-black'}`}>Projeto Ativo</Link>
               <Link to="/admin/dominio" className={`h-full flex items-center border-b-2 transition-all px-1 whitespace-nowrap ${isDomainView ? 'border-black text-black font-bold' : 'border-transparent hover:text-black'}`}>Domínios</Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-4 shrink-0">
             <Link to="/admin/nova" className="bg-black text-white px-5 py-2 rounded-lg text-[13px] font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95">
               Adicionar novo...
             </Link>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-10">
        <Routes>
          <Route index element={
            <div className="animate-in fade-in duration-500">
               <div className="flex justify-between items-end mb-10">
                 <div>
                   <h2 className="text-3xl font-black tracking-tight mb-2">Painel de Controle</h2>
                   <p className="text-gray-400 text-sm font-medium">Gerencie o portal oficial de Marcelo Toler.</p>
                 </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-3 space-y-8">
                  <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                    <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-6">Métricas Atuais</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-gray-600">Publicações</span>
                        <span className="text-lg font-black">{news.length}</span>
                      </div>
                      <Link to="/admin/menu" className="flex justify-between items-center group cursor-pointer">
                        <span className="text-sm font-bold text-gray-600 group-hover:text-black">Categorias de Menu</span>
                        <span className="text-lg font-black group-hover:text-blue-600">{categories.length}</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {news.map(n => (
                      <div key={n.id} className="bg-white border border-gray-100 rounded-[2rem] p-6 hover:shadow-xl transition-all group">
                        <div className="flex justify-between items-start mb-6">
                          <img src={n.imageUrl} className="w-14 h-14 rounded-2xl object-cover shadow-sm" alt="" />
                          <span className="text-[9px] font-black text-gray-400 uppercase bg-gray-50 px-2 py-1 rounded-md">{new Date(n.publishDate).toLocaleDateString()}</span>
                        </div>
                        <h4 className="text-base font-black mb-2 line-clamp-2 leading-tight group-hover:text-blue-600">{n.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="projeto" element={<ProjectOverview />} />
          <Route path="menu" element={<MenuManager categories={categories} onUpdate={onUpdateCategories} />} />
          <Route path="nova" element={<CreationHub />} />
          <Route path="formulario" element={<NewsForm categories={categories} onSubmit={handleAddNews} />} />
          <Route path="dominio" element={<DomainConfig />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;

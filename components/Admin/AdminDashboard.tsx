
import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { News, Category } from '../../types';
import DomainConfig from './DomainConfig';
import NewsForm from './NewsForm';
import CreationHub from './CreationHub';
import ProjectOverview from './ProjectOverview';

const AdminDashboard: React.FC<{ news: News[], onUpdate: (n: News[]) => void }> = ({ news, onUpdate }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

  const handleAddNews = (newNews: News) => {
    onUpdate([newNews, ...news]);
  };

  const filteredNews = news.filter(n => 
    n.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isAdminRoot = location.pathname === '/admin';
  const isProjectView = location.pathname.startsWith('/admin/projeto');

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Sub-Header com Abas Estilo Vercel */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
            <Link to="/admin" className="flex items-center gap-2 mr-4">
               <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-[10px] font-black">MT</div>
               <span className="text-sm font-bold whitespace-nowrap">Projetos de Marcelo Toler</span>
            </Link>
            
            <nav className="flex gap-6 h-14 items-center text-[13px] font-medium text-gray-500">
               <Link to="/admin" className={`h-full flex items-center border-b-2 transition-all ${isAdminRoot ? 'border-black text-black' : 'border-transparent hover:text-black'}`}>Visão geral</Link>
               <Link to="/admin/projeto" className={`h-full flex items-center border-b-2 transition-all ${isProjectView ? 'border-black text-black' : 'border-transparent hover:text-black'}`}>Projeto Ativo</Link>
               <Link to="/admin/dominio" className={`h-full flex items-center border-b-2 transition-all ${location.pathname.includes('dominio') ? 'border-black text-black' : 'border-transparent hover:text-black'}`}>Domínios</Link>
               <span className="cursor-not-allowed opacity-30 whitespace-nowrap">Análises</span>
               <span className="cursor-not-allowed opacity-30 whitespace-nowrap">Configurações</span>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="relative hidden lg:block">
                <input type="text" placeholder="Encontrar..." className="bg-gray-100 border border-transparent rounded-md px-3 py-1 text-xs w-48 focus:bg-white focus:border-gray-200 outline-none" />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] bg-white border border-gray-200 px-1 rounded text-gray-400">F</span>
             </div>
             <Link to="/admin/nova" className="bg-black text-white px-4 py-1.5 rounded-md text-xs font-bold hover:bg-gray-800 transition-colors">
               Add New...
             </Link>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-8">
        <Routes>
          <Route index element={
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Sidebar do Dashboard Root */}
              <div className="lg:col-span-3 space-y-10">
                <section>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Uso Mensal</h3>
                  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="p-4 flex justify-between items-center border-b border-gray-100">
                      <span className="text-xs font-bold">Últimos 30 dias</span>
                      <span className="bg-black text-[10px] text-white px-2 py-0.5 rounded font-bold uppercase">Upgrade</span>
                    </div>
                    <div className="p-4 space-y-4">
                      {[
                        { label: 'Transferência de Dados', val: '0 / 100 GB' },
                        { label: 'Solicitações de Borda', val: '0 / 1M' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-[11px] font-medium text-gray-600">
                          <span>{item.label}</span>
                          <span>{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                
                <section className="bg-brand-dark p-6 rounded-2xl text-white">
                   <h4 className="text-xs font-black uppercase mb-2 text-brand-red">Dica do Especialista</h4>
                   <p className="text-[11px] text-gray-400">Para vincular seu domínio .com.br, clique na aba **Domínios** acima.</p>
                </section>
              </div>

              {/* Lista de Notícias ou Projetos */}
              <div className="lg:col-span-9">
                <div className="flex justify-between items-center mb-6">
                   <h3 className="text-sm font-bold">Publicações Recentes</h3>
                   <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                      <button onClick={() => setViewType('grid')} className={`p-2 ${viewType === 'grid' ? 'bg-gray-100' : ''}`}><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg></button>
                      <button onClick={() => setViewType('list')} className={`p-2 border-l border-gray-200 ${viewType === 'list' ? 'bg-gray-100' : ''}`}><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg></button>
                   </div>
                </div>

                {filteredNews.length === 0 ? (
                  <div className="border-2 border-dashed border-gray-200 rounded-2xl py-20 text-center">
                    <p className="text-sm text-gray-500">Nenhuma notícia publicada.</p>
                  </div>
                ) : (
                  <div className={`grid gap-4 ${viewType === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                    {filteredNews.map(n => (
                      <div key={n.id} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-black transition-all group shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                          <img src={n.imageUrl} className="w-12 h-12 rounded-lg object-cover" alt="" />
                          <span className="text-[10px] font-bold text-gray-400 uppercase">{new Date(n.publishDate).toLocaleDateString()}</span>
                        </div>
                        <h4 className="text-sm font-bold mb-1 line-clamp-1">{n.title}</h4>
                        <div className="flex items-center justify-between mt-4">
                           <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded font-bold text-gray-500 uppercase">{n.category}</span>
                           <Link to={`/noticia/${n.slug}`} target="_blank" className="text-[10px] font-bold text-blue-500 uppercase hover:underline">Ver no Portal</Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          } />
          
          <Route path="projeto" element={<ProjectOverview />} />
          <Route path="nova" element={<CreationHub />} />
          <Route path="formulario" element={<NewsForm onSubmit={handleAddNews} />} />
          <Route path="dominio" element={<DomainConfig />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;

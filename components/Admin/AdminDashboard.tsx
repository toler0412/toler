
import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { News } from '../../types';
import DomainConfig from './DomainConfig';
import NewsForm from './NewsForm';
import CreationHub from './CreationHub';
import MenuManager from './MenuManager';

interface AdminDashboardProps {
  news: News[];
  categories: string[];
  onUpdate: (n: News[]) => void;
  onUpdateCategories: (c: string[]) => void;
  onImportData: (data: string) => void;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ news, categories, onUpdate, onUpdateCategories, onImportData, onLogout }) => {
  const location = useLocation();
  const [importText, setImportText] = useState('');

  const handleExport = () => {
    const data = JSON.stringify({ news, categories });
    navigator.clipboard.writeText(data);
    alert("Código de sincronização copiado! Agora vá no outro navegador, entre no Painel e cole na aba 'Sincronizar'.");
  };

  const isAdminRoot = location.pathname === '/admin' || location.pathname === '/admin/';
  const isSyncView = location.pathname.includes('/sincronizar');

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8 overflow-x-auto">
            <Link to="/admin" className="flex items-center gap-3 shrink-0">
               <div className="w-7 h-7 bg-black rounded flex items-center justify-center text-white text-[11px] font-black">MT</div>
               <span className="text-[13px] font-bold">Painel Marcelo Toler</span>
            </Link>
            <nav className="flex gap-6 text-[13px] font-medium text-gray-400">
               <Link to="/admin" className={isAdminRoot ? 'text-black font-bold' : ''}>Postagens</Link>
               <Link to="/admin/menu" className={location.pathname.includes('/menu') ? 'text-black font-bold' : ''}>Menu</Link>
               <Link to="/admin/sincronizar" className={isSyncView ? 'text-black font-bold' : ''}>Sincronizar (Janela Anônima)</Link>
            </nav>
          </div>
          <button onClick={onLogout} className="text-[11px] font-bold text-gray-400 hover:text-red-600">Sair</button>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-10">
        <Routes>
          <Route index element={
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-black">Suas Postagens</h2>
                <Link to="/admin/nova" className="bg-black text-white px-6 py-2 rounded-xl font-bold">Nova Notícia</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {news.map(n => (
                  <div key={n.id} className="border border-gray-100 p-4 rounded-2xl flex gap-4">
                    <img src={n.imageUrl} className="w-16 h-16 rounded-lg object-cover" />
                    <div>
                      <h4 className="font-bold text-sm line-clamp-1">{n.title}</h4>
                      <span className="text-[10px] uppercase font-bold text-gray-400">{n.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          } />
          
          <Route path="sincronizar" element={
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
                <h2 className="text-xl font-black text-blue-900 mb-4 uppercase tracking-tight">Sincronização entre Navegadores</h2>
                <p className="text-sm text-blue-700 leading-relaxed mb-6">
                  Como este site é moderno e rápido, ele salva tudo no seu computador. Para ver as mudanças em uma <strong>Janela Anônima</strong> ou em outro PC, você precisa transferir os dados:
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-200">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-3">1. No navegador original (onde você editou):</p>
                    <button onClick={handleExport} className="w-full bg-blue-600 text-white py-3 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg shadow-blue-600/20">
                      Copiar Código de Sincronização
                    </button>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-200">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-3">2. No navegador anônimo (onde está antigo):</p>
                    <textarea 
                      value={importText}
                      onChange={(e) => setImportText(e.target.value)}
                      placeholder="Cole aqui o código que você copiou..."
                      className="w-full h-24 bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs font-mono mb-4 outline-none focus:border-blue-500"
                    />
                    <button 
                      onClick={() => onImportData(importText)}
                      disabled={!importText}
                      className="w-full bg-emerald-600 text-white py-3 rounded-xl font-black uppercase text-xs tracking-widest disabled:opacity-30"
                    >
                      Aplicar Sincronização
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-8 border border-gray-100 rounded-[2rem] bg-gray-50">
                 <h3 className="text-xs font-black uppercase text-gray-400 mb-2">Por que isso é necessário?</h3>
                 <p className="text-xs text-gray-500 leading-relaxed">
                   Sites profissionais de notícias usam servidores de banco de dados (que custam mensalidade). Para te entregar um sistema gratuito e potente, usamos o armazenamento do seu próprio navegador. A sincronização acima resolve o problema de visualização em diferentes abas!
                 </p>
              </div>
            </div>
          } />

          <Route path="menu" element={<MenuManager categories={categories} onUpdate={onUpdateCategories} />} />
          <Route path="nova" element={<CreationHub />} />
          <Route path="formulario" element={<NewsForm categories={categories} onSubmit={(n) => onUpdate([n, ...news])} />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;

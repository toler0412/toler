
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreationHub: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const templates = [
    { title: 'Análise de Geopolítica', desc: 'Template estruturado para textos longos e análises profundas.', icon: '🌍', color: 'bg-blue-50' },
    { title: 'Notícia de Última Hora', desc: 'Layout focado em rapidez e impacto visual imediato.', icon: '⚡', color: 'bg-amber-50' },
    { title: 'Artigo de Opinião', desc: 'Destaque para a voz do autor e citações importantes.', icon: '✍️', color: 'bg-purple-50' },
    { title: 'Entrevista Exclusiva', desc: 'Formatação especial para diálogos e perguntas/respostas.', icon: '🎤', color: 'bg-emerald-50' },
  ];

  const handleContinue = () => {
    // Passa o título digitado como estado inicial para o formulário se necessário
    navigate('/admin/formulario');
  };

  return (
    <div className="max-w-[1100px] mx-auto animate-in fade-in zoom-in-95 duration-500">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Let's build something new</h1>
        <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all flex items-center gap-2 group">
           <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white">
             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"/></svg>
           </div>
           Dicas de Escrita IA
           <span className="bg-pink-100 text-pink-600 px-1.5 py-0.5 rounded text-[9px] font-black uppercase">Trial</span>
        </button>
      </div>

      {/* Main Search Bar */}
      <div className="bg-white border border-gray-200 rounded-xl p-1 shadow-sm mb-12 flex items-center group focus-within:ring-2 focus-within:ring-black/5 transition-all">
        <div className="px-4 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
        </div>
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Cole aqui um link de referência ou título provisório..." 
          className="flex-1 py-4 text-sm outline-none"
        />
        <button 
          onClick={handleContinue}
          className="bg-black text-white px-8 py-3 rounded-lg text-sm font-bold m-1 hover:bg-gray-800 transition-colors"
        >
          Continue
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Import */}
        <div>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            Importar de Rascunhos
          </h2>
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                 <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center text-xs">MT</div>
                 <span className="text-sm font-bold">toler0412</span>
                 <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div className="relative">
                <svg className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <input type="text" placeholder="Search..." className="bg-gray-50 border-none rounded-md py-1.5 pl-7 pr-3 text-[11px] outline-none w-32 focus:w-48 transition-all" />
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {[
                { title: 'toler-news-draft-1', time: '23m ago', icon: '📝' },
                { title: 'analise-politica-final', time: '9/20/24', icon: '📄' },
              ].map((draft, i) => (
                <div key={i} className="p-4 flex items-center justify-between group hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => navigate('/admin/formulario')}>
                  <div className="flex items-center gap-4">
                    <span className="text-xl opacity-50 group-hover:opacity-100 transition-opacity">{draft.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{draft.title}</p>
                      <p className="text-[11px] text-gray-400 font-medium">toler • {draft.time}</p>
                    </div>
                  </div>
                  <button className="bg-black text-white px-4 py-1.5 rounded-md text-[11px] font-bold md:opacity-0 group-hover:opacity-100 transition-all shadow-sm">
                    Import
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Templates */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Clone Template</h2>
            <div className="flex gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <span className="hover:text-black cursor-pointer">Filter</span>
              <span className="hover:text-black cursor-pointer">Browse All</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {templates.map((t, i) => (
              <div 
                key={i} 
                onClick={() => navigate('/admin/formulario')}
                className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:border-black hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group h-44"
              >
                <div>
                   <div className={`w-10 h-10 ${t.color} rounded-lg flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform`}>
                     {t.icon}
                   </div>
                   <h3 className="text-[13px] font-bold text-gray-900 mb-1">{t.title}</h3>
                   <p className="text-[11px] text-gray-400 leading-snug line-clamp-2">{t.desc}</p>
                </div>
                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                   <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreationHub;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";

const CreationHub: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const templates = [
    { id: 'geo', title: 'Análise de Geopolítica', desc: 'Template estruturado para textos longos e análises profundas.', icon: '🌍', color: 'bg-blue-50', category: 'Insights' },
    { id: 'breaking', title: 'Notícia de Última Hora', desc: 'Layout focado em rapidez e impacto visual imediato.', icon: '⚡', color: 'bg-amber-50', category: 'Política' },
    { id: 'opinion', title: 'Artigo de Opinião', desc: 'Destaque para a voz do autor e citações importantes.', icon: '✍️', color: 'bg-purple-50', category: 'Cultura' },
    { id: 'interview', title: 'Entrevista exclusiva', desc: 'Formatação especial para diálogos e perguntas/respostas.', icon: '🎤', color: 'bg-emerald-50', category: 'Economia' },
  ];

  const handleContinue = () => {
    navigate('/admin/formulario', { 
      state: { 
        title: inputValue 
      } 
    });
  };

  const handleTemplateClick = (template: any) => {
    navigate('/admin/formulario', { 
      state: { 
        title: inputValue || '',
        category: template.category,
        isTemplate: true
      } 
    });
  };

  const handleIAAssistant = async () => {
    if (!inputValue) {
      alert("Digite um tema ou título provisório para a IA te ajudar.");
      return;
    }

    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Aja como um editor-chefe de um portal de notícias de prestígio. 
        Com base no tema "${inputValue}", sugira um título bombástico e um resumo curto de 2 linhas para uma notícia. 
        Responda apenas o título e o resumo, separados por uma linha.`,
      });

      const text = response.text || '';
      const lines = text.split('\n').filter(t => t.trim() !== '');
      const aiTitle = lines[0];
      const aiSubtitle = lines.slice(1).join(' ');
      
      navigate('/admin/formulario', { 
        state: { 
          title: aiTitle || inputValue,
          subtitle: aiSubtitle || '',
          content: 'Iniciando com auxílio de IA...'
        } 
      });
    } catch (error) {
      console.error("Erro na IA:", error);
      handleContinue();
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-[1100px] mx-auto py-12 animate-in fade-in zoom-in-95 duration-700">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-14">
        <div>
          <h1 className="text-[42px] font-extrabold tracking-tighter text-slate-900 leading-tight">
            Vamos construir algo novo.
          </h1>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Dica:</span>
            <Link to="/admin/menu" className="text-[10px] font-black uppercase text-blue-600 hover:underline tracking-widest">Gerenciar Categorias do Menu Principal</Link>
          </div>
        </div>
        <button 
          onClick={handleIAAssistant}
          disabled={isGenerating}
          className="bg-white border border-gray-100 px-5 py-2.5 rounded-2xl text-[13px] font-bold shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3 group disabled:opacity-50"
        >
           <div className={`w-6 h-6 rounded-full ${isGenerating ? 'bg-gray-200' : 'bg-blue-600'} flex items-center justify-center text-white`}>
             {isGenerating ? (
               <div className="w-3 h-3 border-2 border-white border-t-transparent animate-spin rounded-full"></div>
             ) : (
               <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"/></svg>
             )}
           </div>
           {isGenerating ? 'IA Processando...' : 'Dicas de Escrita IA'}
           <span className="bg-pink-100 text-pink-600 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest">BETA</span>
        </button>
      </div>

      {/* Main Search Bar */}
      <div className="bg-white border border-gray-100 rounded-[2rem] p-1.5 shadow-2xl shadow-slate-200/50 mb-20 flex items-center group focus-within:ring-4 focus-within:ring-slate-100 transition-all">
        <div className="px-6 text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
        </div>
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Cole aqui um link de referência ou título provisório..." 
          className="flex-1 py-5 text-base font-medium outline-none text-slate-800 placeholder:text-slate-300"
        />
        <button 
          onClick={handleContinue}
          className="bg-black text-white px-10 py-4 rounded-[1.4rem] text-sm font-black uppercase tracking-widest m-1 hover:bg-slate-800 transition-all active:scale-95 shadow-lg"
        >
          Continuar
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Side: Import */}
        <div className="space-y-8">
          <h2 className="text-[22px] font-black tracking-tight text-slate-900">
            Importar de Rascunhos
          </h2>
          <div className="border border-gray-100 rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-slate-100">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-black text-white rounded-xl flex items-center justify-center text-[10px] font-black">MT</div>
                 <span className="text-sm font-black text-slate-800">tolerar0412</span>
                 <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <input type="text" placeholder="Procurar..." className="bg-white border border-slate-100 rounded-xl py-2 pl-9 pr-4 text-xs outline-none w-36 focus:w-56 transition-all shadow-sm" />
              </div>
            </div>

            <div className="divide-y divide-gray-50">
              {[
                { title: 'toler-news-draft-1', time: 'há 23 minutos', icon: '📝' },
                { title: 'analise-politica-final', time: '20/09/2024', icon: '📄' },
              ].map((draft, i) => (
                <div 
                  key={i} 
                  className="p-6 flex items-center justify-between group hover:bg-slate-50 cursor-pointer transition-all" 
                  onClick={() => navigate('/admin/formulario')}
                >
                  <div className="flex items-center gap-5">
                    <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{draft.icon}</span>
                    <div>
                      <p className="text-sm font-black text-slate-800 group-hover:text-blue-600 transition-colors">{draft.title}</p>
                      <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">tolerante • {draft.time}</p>
                    </div>
                  </div>
                  <button className="bg-slate-900 text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all shadow-lg">
                    Import
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Templates */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-[22px] font-black tracking-tight text-slate-900">Modelo de clonagem</h2>
            <div className="flex gap-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              <span className="hover:text-black cursor-pointer">Filtro</span>
              <span className="hover:text-black cursor-pointer">Ver Tudo</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-5">
            {templates.map((t, i) => (
              <div 
                key={i} 
                onClick={() => handleTemplateClick(t)}
                className="border border-gray-100 rounded-[2rem] p-7 bg-white shadow-lg hover:border-black hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between group h-52"
              >
                <div>
                   <div className={`w-12 h-12 ${t.color} rounded-[1.2rem] flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform shadow-sm`}>
                     {t.icon}
                   </div>
                   <h3 className="text-sm font-black text-slate-900 mb-2 leading-tight">{t.title}</h3>
                   <p className="text-[11px] text-slate-400 font-medium leading-relaxed line-clamp-2">{t.desc}</p>
                </div>
                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                   <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
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

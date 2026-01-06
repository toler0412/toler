
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { News } from '../../types';

interface NewsFormProps {
  categories: string[];
  onSubmit: (news: News) => void;
  initialData?: Partial<News>;
}

const NewsForm: React.FC<NewsFormProps> = ({ categories, onSubmit, initialData: propsInitialData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const stateData = location.state || {};
  
  const [activeTab, setActiveTab] = useState<'post' | 'block'>('post');
  const [showLeftSidebar, setShowLeftSidebar] = useState(true);
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  
  const [formData, setFormData] = useState({
    title: stateData.title || propsInitialData?.title || '',
    subtitle: stateData.subtitle || propsInitialData?.subtitle || '',
    category: stateData.category || propsInitialData?.category || (categories[0] || 'Geral'),
    author: propsInitialData?.author || 'Marcelo Toler',
    content: stateData.content || propsInitialData?.content || '',
    imageUrl: propsInitialData?.imageUrl || '',
    isFeatured: propsInitialData?.isFeatured || false,
  });

  const [slug, setSlug] = useState('');

  useEffect(() => {
    const generatedSlug = formData.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setSlug(generatedSlug);
  }, [formData.title]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      alert("Por favor, preencha o título e o conteúdo.");
      return;
    }

    const words = formData.content.split(/\s+/).length;
    const time = Math.max(1, Math.ceil(words / 200));

    const newNews: News = {
      id: Math.random().toString(36).substr(2, 9),
      ...formData,
      publishDate: new Date().toISOString(),
      readingTime: `${time} min`,
      slug: slug || 'noticia-' + Date.now()
    };
    
    onSubmit(newNews);
    navigate('/admin');
  };

  return (
    <div className="fixed inset-0 bg-white z-[60] flex flex-col font-sans overflow-hidden text-[#1e1e1e]">
      {/* TOP BAR (WordPress Style) */}
      <header className="h-14 border-b border-gray-200 flex items-center justify-between px-2 bg-white shrink-0 z-10">
        <div className="flex items-center gap-1">
          <button onClick={() => navigate('/admin')} className="p-2 hover:bg-gray-100 rounded text-gray-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          </button>
          <div className="w-8 h-8 bg-[#1e1e1e] text-white rounded flex items-center justify-center text-[10px] font-black mr-2">MT</div>
          
          <button 
            onClick={() => setShowLeftSidebar(!showLeftSidebar)}
            className={`p-2 rounded hover:bg-gray-100 ${showLeftSidebar ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
          </button>
          <button className="p-2 text-gray-400 hover:bg-gray-100 rounded"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg></button>
          <button className="p-2 text-gray-400 hover:bg-gray-100 rounded"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10h-10a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6"/></svg></button>
          
          <div className="hidden md:flex ml-4 items-center bg-blue-600 text-white px-3 py-1 rounded text-[10px] font-bold gap-2 cursor-pointer hover:bg-blue-700">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
            EDITAR COM ELEMENTOR
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-2 text-[11px] font-medium text-gray-400 bg-gray-50 px-4 py-1.5 rounded-md border border-gray-100">
          <span>· Post</span>
          <span className="text-gray-300">Ctrl+K</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="text-[11px] font-bold text-blue-600 px-3 py-1.5 hover:bg-blue-50 rounded">Salvar rascunho</button>
          <button 
            onClick={() => setShowRightSidebar(!showRightSidebar)}
            className={`p-2 rounded hover:bg-gray-100 ${showRightSidebar ? 'bg-gray-100 text-black' : 'text-gray-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/></svg>
          </button>
          <button 
            onClick={handleSubmit}
            className="bg-[#007cba] text-white px-4 py-1.5 rounded text-[11px] font-bold hover:bg-[#006ba1] transition-all ml-2"
          >
            Publicar
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* ESQUERDA: BIBLIOTECA DE BLOCOS */}
        {showLeftSidebar && (
          <aside className="w-[280px] border-r border-gray-200 bg-white shrink-0 flex flex-col animate-in slide-in-from-left duration-300">
            <div className="p-4 border-b border-gray-100">
              <div className="flex bg-gray-50 p-1 rounded-lg mb-4">
                <button className="flex-1 py-1.5 text-[10px] font-bold bg-white shadow-sm rounded-md">Blocos</button>
                <button className="flex-1 py-1.5 text-[10px] font-bold text-gray-500 hover:text-black">Padrões</button>
                <button className="flex-1 py-1.5 text-[10px] font-bold text-gray-500 hover:text-black">Mídia</button>
              </div>
              <div className="relative">
                <input type="text" placeholder="Pesquisar" className="w-full bg-gray-50 border border-gray-100 rounded p-2 pl-8 text-xs outline-none focus:border-blue-400" />
                <svg className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
               <div className="mb-8">
                 <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-4">Texto</h4>
                 <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: '¶', label: 'Parágrafo' },
                      { icon: 'H', label: 'Título' },
                      { icon: '≡', label: 'Lista' },
                      { icon: '”', label: 'Citação' },
                      { icon: '</>', label: 'Código' },
                      { icon: 'i', label: 'Detalhes' }
                    ].map((b, i) => (
                      <button key={i} className="flex flex-col items-center justify-center p-3 rounded hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all group">
                        <div className="text-lg font-serif mb-1 group-hover:scale-110 transition-transform">{b.icon}</div>
                        <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter text-center">{b.label}</span>
                      </button>
                    ))}
                 </div>
               </div>
            </div>
          </aside>
        )}

        {/* CENTRO: ÁREA DE ESCRITA */}
        <main className="flex-1 overflow-y-auto bg-white flex justify-center py-24 px-12 relative">
          <div className="max-w-[650px] w-full space-y-4">
            <textarea
              autoFocus
              placeholder="Adicionar título"
              value={formData.title}
              onChange={e => setFormData({...formData, title: e.target.value})}
              className="w-full text-[44px] font-extrabold border-none outline-none placeholder:text-gray-200 resize-none leading-tight overflow-hidden"
              rows={1}
              onInput={(e: any) => {
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
            />
            
            <div className="relative group">
               <textarea
                placeholder="Digite / para escolher um bloco"
                value={formData.content}
                onChange={e => setFormData({...formData, content: e.target.value})}
                className="w-full text-[17px] text-[#2c3338] leading-[1.7] border-none outline-none placeholder:text-gray-300 resize-none min-h-[400px]"
              />
            </div>
          </div>
        </main>

        {/* DIREITA: CONFIGURAÇÕES (Post / Bloco) */}
        {showRightSidebar && (
          <aside className="w-[300px] border-l border-gray-200 bg-white shrink-0 overflow-y-auto animate-in slide-in-from-right duration-300 flex flex-col">
            <div className="flex border-b border-gray-100 shrink-0">
              <button 
                onClick={() => setActiveTab('post')}
                className={`flex-1 py-3.5 text-[11px] font-bold transition-all relative ${activeTab === 'post' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
              >
                Post
                {activeTab === 'post' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />}
              </button>
              <button 
                onClick={() => setActiveTab('block')}
                className={`flex-1 py-3.5 text-[11px] font-bold transition-all relative ${activeTab === 'block' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
              >
                Bloco
                {activeTab === 'block' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />}
              </button>
              <button onClick={() => setShowRightSidebar(false)} className="p-3 text-gray-400 hover:text-black">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {activeTab === 'post' ? (
                <div className="p-4 space-y-6">
                  {/* Categorias */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                       <h4 className="text-[11px] font-bold text-gray-800">Categorias</h4>
                       <Link to="/admin/menu" className="p-1 hover:bg-gray-100 rounded text-blue-600" title="Gerenciar Categorias">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
                       </Link>
                    </div>
                    <div className="space-y-2 px-2 max-h-40 overflow-y-auto custom-scrollbar">
                      {categories.map(cat => (
                        <label key={cat} className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={formData.category === cat}
                            onChange={() => setFormData({...formData, category: cat})}
                            className="rounded border-gray-300 text-blue-600"
                          />
                          <span className="text-xs text-gray-600">{cat}</span>
                        </label>
                      ))}
                    </div>
                    <Link to="/admin/menu" className="text-[10px] text-blue-600 font-bold hover:underline px-2 block">
                      Gerenciar nomes no menu...
                    </Link>
                  </div>

                  <hr className="border-gray-50" />

                  <div className="space-y-4">
                    <div className="flex justify-between items-center cursor-pointer">
                      <h4 className="text-[11px] font-bold text-gray-800">Imagem Destacada</h4>
                    </div>
                    <div className="px-2">
                      {formData.imageUrl ? (
                        <div className="relative rounded-lg overflow-hidden border border-gray-100 group">
                           <img src={formData.imageUrl} className="w-full aspect-video object-cover" />
                           <button onClick={() => setFormData({...formData, imageUrl: ''})} className="absolute inset-0 bg-black/50 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 uppercase">Remover</button>
                        </div>
                      ) : (
                        <button 
                          onClick={() => {
                            const url = prompt("URL da imagem:");
                            if(url) setFormData({...formData, imageUrl: url});
                          }}
                          className="w-full py-12 bg-gray-50 border border-gray-100 rounded-lg text-blue-600 text-[11px] font-bold hover:bg-gray-100"
                        >
                          Definir imagem
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 text-center py-20">
                  <p className="text-xs text-gray-400">Nenhum bloco selecionado.</p>
                </div>
              )}
            </div>
          </aside>
        )}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #fff; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #eee; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #ddd; }
        
        textarea {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default NewsForm;

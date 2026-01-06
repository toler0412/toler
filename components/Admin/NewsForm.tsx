
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { News, Category } from '../../types';

interface NewsFormProps {
  onSubmit: (news: News) => void;
  initialData?: Partial<News>;
}

const NewsForm: React.FC<NewsFormProps> = ({ onSubmit, initialData }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    subtitle: initialData?.subtitle || '',
    category: initialData?.category || Category.INSIGHTS,
    author: initialData?.author || 'Marcelo Toler',
    content: initialData?.content || '',
    imageUrl: initialData?.imageUrl || 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1200',
    isFeatured: initialData?.isFeatured || false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = formData.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    
    const words = formData.content.split(' ').length;
    const time = Math.max(1, Math.ceil(words / 200));

    const newNews: News = {
      id: Math.random().toString(36).substr(2, 9),
      ...formData,
      publishDate: new Date().toISOString(),
      readingTime: `${time} min`,
      slug
    };
    
    onSubmit(newNews);
    navigate('/admin');
  };

  return (
    <div className="max-w-5xl mx-auto py-4">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => navigate('/admin')} className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
        </button>
        <h2 className="text-2xl font-bold tracking-tight">Nova Publicação</h2>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Título Principal</label>
              <input 
                required
                type="text" 
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-lg font-bold focus:ring-1 focus:ring-black outline-none"
                placeholder="Título da notícia..."
              />
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Subtítulo ou Resumo</label>
              <textarea 
                value={formData.subtitle}
                onChange={e => setFormData({...formData, subtitle: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-1 focus:ring-black outline-none h-24 resize-none"
                placeholder="Uma breve introdução..."
              />
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Conteúdo da Matéria</label>
              <textarea 
                required
                value={formData.content}
                onChange={e => setFormData({...formData, content: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-base focus:ring-1 focus:ring-black outline-none h-64"
                placeholder="Escreva sua história aqui..."
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Categoria</label>
              <select 
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value as Category})}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm font-bold focus:ring-1 focus:ring-black outline-none appearance-none cursor-pointer"
              >
                {Object.values(Category).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">URL da Imagem</label>
              <input 
                type="url" 
                value={formData.imageUrl}
                onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-1 focus:ring-black outline-none"
              />
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Destaque na Home</span>
              <input 
                type="checkbox" 
                checked={formData.isFeatured}
                onChange={e => setFormData({...formData, isFeatured: e.target.checked})}
                className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-all shadow-sm"
            >
              Publicar Agora
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewsForm;


import React, { useState } from 'react';
import { News, Category } from '../../types';

interface NewsFormProps {
  onSubmit: (news: News) => void;
  initialData?: Partial<News>;
}

const NewsForm: React.FC<NewsFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    subtitle: initialData?.subtitle || '',
    category: initialData?.category || Category.POLITICA,
    author: initialData?.author || 'Marcelo Toler',
    content: initialData?.content || '',
    imageUrl: initialData?.imageUrl || 'https://picsum.photos/seed/' + Math.random() + '/1200/600',
    isBreaking: initialData?.isBreaking || false,
    isFeatured: initialData?.isFeatured || false,
    tags: initialData?.tags?.join(', ') || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = formData.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    
    const newNews: News = {
      id: initialData?.id || Math.random().toString(36).substr(2, 9),
      title: formData.title,
      subtitle: formData.subtitle,
      category: formData.category,
      author: formData.author,
      content: formData.content,
      imageUrl: formData.imageUrl,
      isBreaking: formData.isBreaking,
      isFeatured: formData.isFeatured,
      publishDate: new Date().toISOString(),
      tags: formData.tags.split(',').map(t => t.trim()),
      slug
    };
    
    onSubmit(newNews);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border overflow-hidden">
      <div className="p-6 border-b flex justify-between items-center bg-gray-50">
        <h2 className="text-xl font-bold text-gray-800">Criar Nova Notícia</h2>
        <div className="flex gap-3">
           <button type="button" className="px-4 py-2 border rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-100 transition">Salvar Rascunho</button>
           <button type="submit" className="px-4 py-2 bg-cnn-red text-white rounded-lg text-sm font-bold hover:bg-red-700 transition">Publicar Agora</button>
        </div>
      </div>

      <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Título da Notícia</label>
            <input 
              required
              type="text" 
              value={formData.title}
              onChange={e => setFormData({...formData, title: e.target.value})}
              placeholder="Ex: Novo aumento do PIB surpreende economistas"
              className="w-full border rounded-lg p-3 text-lg font-bold focus:ring-2 focus:ring-cnn-red/20 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Subtítulo / Linha Fina</label>
            <textarea 
              rows={2}
              value={formData.subtitle}
              onChange={e => setFormData({...formData, subtitle: e.target.value})}
              placeholder="Um breve resumo chamativo para a notícia..."
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cnn-red/20 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Conteúdo da Notícia (Markdown/HTML)</label>
            <textarea 
              required
              rows={12}
              value={formData.content}
              onChange={e => setFormData({...formData, content: e.target.value})}
              placeholder="Escreva aqui o corpo completo da matéria..."
              className="w-full border rounded-lg p-3 font-mono text-sm focus:ring-2 focus:ring-cnn-red/20 outline-none"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-5 bg-gray-50 rounded-xl border">
            <h3 className="font-bold text-sm uppercase mb-4 text-gray-700">Configurações</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Categoria</label>
                <select 
                  value={formData.category}
                  onChange={e => setFormData({...formData, category: e.target.value as Category})}
                  className="w-full border rounded p-2 text-sm outline-none"
                >
                  {Object.values(Category).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Autor</label>
                <input 
                  type="text" 
                  value={formData.author}
                  onChange={e => setFormData({...formData, author: e.target.value})}
                  className="w-full border rounded p-2 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Tags (separadas por vírgula)</label>
                <input 
                  type="text" 
                  value={formData.tags}
                  onChange={e => setFormData({...formData, tags: e.target.value})}
                  className="w-full border rounded p-2 text-sm outline-none"
                  placeholder="economia, pib, brasil"
                />
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <label className="flex items-center gap-3 cursor-pointer">
                   <input 
                    type="checkbox" 
                    checked={formData.isBreaking}
                    onChange={e => setFormData({...formData, isBreaking: e.target.checked})}
                    className="w-4 h-4 rounded text-cnn-red focus:ring-cnn-red" 
                  />
                   <span className="text-sm font-semibold text-gray-700">Destaque como Urgente</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                   <input 
                    type="checkbox" 
                    checked={formData.isFeatured}
                    onChange={e => setFormData({...formData, isFeatured: e.target.checked})}
                    className="w-4 h-4 rounded text-cnn-red focus:ring-cnn-red" 
                  />
                   <span className="text-sm font-semibold text-gray-700">Notícia Principal (Home)</span>
                </label>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border">
            <h3 className="font-bold text-sm uppercase mb-4 text-gray-700">Imagem de Capa</h3>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4 relative group">
              <img src={formData.imageUrl} className="w-full h-full object-cover" alt="Preview" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition cursor-pointer">
                 <span className="text-white text-xs font-bold uppercase">Trocar Imagem</span>
              </div>
            </div>
            <input 
              type="text" 
              value={formData.imageUrl}
              onChange={e => setFormData({...formData, imageUrl: e.target.value})}
              placeholder="URL da imagem..."
              className="w-full border rounded p-2 text-[10px] outline-none"
            />
            <p className="text-[10px] text-gray-400 mt-2 font-medium">Dimensões recomendadas: 1920x1080px (16:9)</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewsForm;

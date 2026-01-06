
import React, { useState } from 'react';

interface MenuManagerProps {
  categories: string[];
  onUpdate: (cats: string[]) => void;
}

const MenuManager: React.FC<MenuManagerProps> = ({ categories, onUpdate }) => {
  const [newCat, setNewCat] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newCat.trim();
    if (trimmed && !categories.includes(trimmed)) {
      const updated = [...categories, trimmed];
      onUpdate(updated);
      setNewCat('');
    }
  };

  const handleRemove = (catToRemove: string) => {
    if (window.confirm(`Deseja remover a categoria "${catToRemove}"? Todas as notícias vinculadas a ela ficarão sem categoria no menu.`)) {
      const updated = categories.filter(c => c !== catToRemove);
      onUpdate(updated);
    }
  };

  const startEditing = (index: number, value: string) => {
    setEditingIndex(index);
    setEditValue(value);
  };

  const saveEdit = (index: number) => {
    const trimmed = editValue.trim();
    if (trimmed && !categories.includes(trimmed) || categories[index] === trimmed) {
      const updated = [...categories];
      updated[index] = trimmed;
      onUpdate(updated);
      setEditingIndex(null);
    } else {
      alert("Nome inválido ou já existente.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white border border-gray-200 rounded-[2.5rem] shadow-xl overflow-hidden">
        <div className="p-10 border-b border-gray-100 bg-slate-50/50">
          <h2 className="text-2xl font-black tracking-tight mb-2">Estrutura do Menu</h2>
          <p className="text-sm text-gray-500 font-medium">Você pode excluir itens ou clicar no nome para renomear.</p>
        </div>

        <div className="p-10 space-y-8">
          {/* Formulário de Adição */}
          <form onSubmit={handleAdd} className="flex gap-4">
            <input 
              type="text" 
              value={newCat}
              onChange={(e) => setNewCat(e.target.value)}
              placeholder="Ex: Tecnologia, Opinião..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-black outline-none transition-all font-bold placeholder:font-medium"
            />
            <button 
              type="submit"
              disabled={!newCat.trim()}
              className="bg-black text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all active:scale-95 disabled:opacity-30"
            >
              Adicionar
            </button>
          </form>

          {/* Lista de Categorias Atuais */}
          <div className="space-y-3">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Itens no Menu ({categories.length})</h3>
            <div className="grid grid-cols-1 gap-3">
              {categories.map((cat, idx) => (
                <div key={`${cat}-${idx}`} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl hover:border-black transition-all group shadow-sm">
                  <div className="flex items-center gap-4 flex-1">
                    <span className="text-[10px] font-black text-gray-300">#{idx + 1}</span>
                    
                    {editingIndex === idx ? (
                      <input 
                        autoFocus
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={() => saveEdit(idx)}
                        onKeyDown={(e) => e.key === 'Enter' && saveEdit(idx)}
                        className="bg-blue-50 border border-blue-200 rounded-lg px-2 py-1 text-sm font-black uppercase outline-none w-full"
                      />
                    ) : (
                      <span 
                        onClick={() => startEditing(idx, cat)}
                        className="text-sm font-black text-slate-800 uppercase tracking-tight cursor-text hover:text-blue-600 transition-colors flex-1"
                      >
                        {cat}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleRemove(cat)}
                      className="p-2 text-gray-300 hover:text-brand-red transition-all"
                      title="Excluir item"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 bg-brand-red/5 border-t border-brand-red/10 flex items-center gap-4">
          <div className="w-10 h-10 bg-white shadow-sm border border-brand-red/10 rounded-xl flex items-center justify-center text-lg flex-shrink-0">💡</div>
          <p className="text-[11px] text-brand-red font-bold leading-relaxed uppercase tracking-wider">
            Para mudar o nome, basta clicar em cima do texto e digitar o novo nome.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuManager;

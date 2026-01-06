
import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  categories?: string[];
}

const Footer: React.FC<FooterProps> = ({ categories = [] }) => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 mt-12">
      <div className="portal-container px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-left">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-red text-white px-2 py-0.5 rounded font-black text-xl tracking-tighter">MT</div>
              <span className="text-lg font-black text-gray-800 tracking-tighter uppercase">Marcelo Toler</span>
            </div>
            <p className="text-xs font-bold text-gray-400 leading-relaxed uppercase tracking-wider">
              Compromisso com a verdade e o jornalismo independente de qualidade.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase text-gray-900 mb-2 tracking-widest">Editorias</span>
              {categories.map(cat => (
                <Link 
                  key={cat} 
                  to={`/category/${cat.toLowerCase()}`}
                  className="text-xs font-bold text-gray-500 hover:text-brand-red cursor-pointer uppercase transition-colors"
                >
                  {cat}
                </Link>
              ))}
              {categories.length === 0 && (
                <span className="text-[10px] text-gray-300 font-bold uppercase">Nenhuma editoria</span>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase text-gray-900 mb-2 tracking-widest">Institucional</span>
              <span className="text-xs font-bold text-gray-500 hover:text-brand-red cursor-pointer uppercase">Sobre Marcelo</span>
              <span className="text-xs font-bold text-gray-500 hover:text-brand-red cursor-pointer uppercase">Expediente</span>
              <span className="text-xs font-bold text-gray-500 hover:text-brand-red cursor-pointer uppercase">Ética</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase text-gray-900 mb-2 tracking-widest">Legal</span>
              <span className="text-xs font-bold text-gray-500 hover:text-brand-red cursor-pointer uppercase">Privacidade</span>
              <span className="text-xs font-bold text-gray-500 hover:text-brand-red cursor-pointer uppercase">Termos de Uso</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Marcelo Toler - Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all cursor-pointer">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </div>
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all cursor-pointer">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

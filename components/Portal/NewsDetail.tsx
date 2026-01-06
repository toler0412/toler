
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { News } from '../../types';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const NewsDetail: React.FC<{ news: News[] }> = ({ news }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = news.find(n => n.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-gray">
        <div className="text-center">
          <h1 className="text-2xl font-black text-gray-800 mb-4">Notícia não encontrada</h1>
          <Link to="/" className="text-brand-red font-bold hover:underline">Voltar para a Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="portal-container px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <article className="lg:col-span-8">
            <header className="mb-8">
              <span className="text-brand-red font-black text-xs uppercase mb-4 block tracking-[0.2em]">
                {article.category}
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                {article.title}
              </h1>
              <p className="text-xl text-gray-500 font-medium leading-relaxed mb-8 border-l-4 border-gray-100 pl-6 italic">
                {article.subtitle}
              </p>
              
              <div className="flex items-center justify-between py-4 border-y border-gray-100 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white font-black text-xs">
                    MT
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-800 uppercase">Por {article.author}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">
                      {new Date(article.publishDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {/* Share Buttons Mockup */}
                  <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100"></div>
                </div>
              </div>
            </header>

            <figure className="mb-10 rounded-lg overflow-hidden shadow-sm">
              <img src={article.imageUrl} alt={article.title} className="w-full object-cover" />
              {/* Legenda opcional */}
              <figcaption className="bg-gray-50 p-3 text-[10px] font-bold text-gray-400 uppercase italic">
                Foto: Arquivo Pessoal / {article.author}
              </figcaption>
            </figure>

            <div className="prose prose-lg max-w-none text-gray-800 leading-[1.8] font-medium space-y-6">
              {article.content.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100">
               <button 
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-brand-red font-black uppercase text-xs tracking-widest hover:translate-x-[-4px] transition-transform"
               >
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
                 Voltar para o Portal
               </button>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <Sidebar latestNews={news} />
          </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetail;

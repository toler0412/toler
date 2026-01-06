
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { News } from '../../types';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import GoogleAd from '../Common/GoogleAd';

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
          <button onClick={() => navigate('/')} className="text-brand-red font-bold hover:underline">Voltar para a Home</button>
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
            </header>

            <figure className="mb-10 rounded-lg overflow-hidden shadow-sm">
              <img src={article.imageUrl} alt={article.title} className="w-full object-cover" />
            </figure>

            <div className="prose prose-lg max-w-none text-gray-800 leading-[1.8] font-medium space-y-6 mb-12">
              {article.content.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Anúncio de Final de Matéria */}
            <div className="my-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
               <span className="text-[9px] font-black uppercase text-gray-400 block mb-4 tracking-widest">Publicidade Recomendada</span>
               <GoogleAd slot="9876543210" format="rectangle" />
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100">
               <button 
                onClick={() => navigate('/')}
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

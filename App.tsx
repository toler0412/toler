
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import PublicPortal from './components/Portal/PublicPortal.tsx';
import NewsDetail from './components/Portal/NewsDetail.tsx';
import AdminDashboard from './components/Admin/AdminDashboard.tsx';
import { News } from './types.ts';
import { INITIAL_NEWS } from './constants.ts';

const App: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('toler_news');
      if (saved) {
        setNews(JSON.parse(saved));
      } else {
        setNews(INITIAL_NEWS);
        localStorage.setItem('toler_news', JSON.stringify(INITIAL_NEWS));
      }
    } catch (e) {
      console.error("Erro ao carregar notícias do cache:", e);
      setNews(INITIAL_NEWS);
    }
  }, []);

  const handleUpdateNews = (updatedNews: News[]) => {
    setNews(updatedNews);
    localStorage.setItem('toler_news', JSON.stringify(updatedNews));
  };

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/admin/*" element={<AdminDashboard news={news} onUpdate={handleUpdateNews} />} />
          <Route path="/noticia/:slug" element={<NewsDetail news={news} />} />
          <Route path="/*" element={<PublicPortal news={news} />} />
        </Routes>

        {/* Floating Admin Toggle */}
        <div className="fixed bottom-6 right-6 z-50">
          <Link 
            to={window.location.hash.includes('admin') ? '/' : '/admin'}
            className="bg-brand-dark text-white px-6 py-3 rounded-full shadow-2xl hover:bg-gray-800 transition-all font-bold flex items-center gap-2 border border-white/10"
          >
            {window.location.hash.includes('admin') ? 'Ir para o Portal' : 'Painel Admin'}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </Link>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;

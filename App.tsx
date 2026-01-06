
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import PublicPortal from './components/Portal/PublicPortal';
import NewsDetail from './components/Portal/NewsDetail';
import AdminDashboard from './components/Admin/AdminDashboard';
import Login from './components/Admin/Login';
import { News } from './types';
import { INITIAL_NEWS } from './constants';

const DEFAULT_CATEGORIES = ['Insights', 'Política', 'Economia', 'Cultura', 'Tecnologia'];

const AppContent: React.FC<{
  news: News[];
  categories: string[];
  onUpdateNews: (n: News[]) => void;
  onUpdateCategories: (c: string[]) => void;
}> = ({ news, categories, onUpdateNews, onUpdateCategories }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('toler_auth') === 'true';
  });

  const isAdminPage = location.pathname.startsWith('/admin');
  const portalKey = useMemo(() => categories.join('-'), [categories]);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('toler_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('toler_auth');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route 
          path="/admin/*" 
          element={
            isAuthenticated ? (
              <AdminDashboard 
                news={news} 
                categories={categories}
                onUpdate={onUpdateNews} 
                onUpdateCategories={onUpdateCategories}
                onLogout={handleLogout}
              />
            ) : (
              <Login onLogin={handleLoginSuccess} />
            )
          } 
        />
        <Route path="/noticia/:slug" element={<NewsDetail news={news} />} />
        <Route path="/*" element={<PublicPortal key={portalKey} news={news} categories={categories} />} />
      </Routes>

      <div className="fixed bottom-6 right-6 z-[9999]">
        <Link 
          to={isAdminPage ? '/' : '/admin'}
          className="bg-brand-dark text-white px-6 py-3 rounded-full shadow-2xl hover:bg-gray-800 transition-all font-bold flex items-center gap-2 border border-white/10 group"
        >
          <span className="text-sm">
            {isAdminPage ? 'Sair do Painel' : 'Painel Administrativo'}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:rotate-12" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    try {
      const savedNews = localStorage.getItem('toler_news');
      if (savedNews) {
        setNews(JSON.parse(savedNews));
      } else {
        setNews(INITIAL_NEWS);
        localStorage.setItem('toler_news', JSON.stringify(INITIAL_NEWS));
      }

      const savedCats = localStorage.getItem('toler_categories');
      if (savedCats) {
        setCategories(JSON.parse(savedCats));
      } else {
        setCategories(DEFAULT_CATEGORIES);
        localStorage.setItem('toler_categories', JSON.stringify(DEFAULT_CATEGORIES));
      }
    } catch (e) {
      console.error("Erro ao carregar dados:", e);
      setNews(INITIAL_NEWS);
      setCategories(DEFAULT_CATEGORIES);
    }
  }, []);

  const handleUpdateNews = useCallback((updatedNews: News[]) => {
    setNews(updatedNews);
    localStorage.setItem('toler_news', JSON.stringify(updatedNews));
  }, []);

  const handleUpdateCategories = useCallback((updatedCats: string[]) => {
    const cleaned = updatedCats.map(c => c.trim()).filter(c => c !== '');
    setCategories(cleaned);
    localStorage.setItem('toler_categories', JSON.stringify(cleaned));
  }, []);

  return (
    <HashRouter>
      <AppContent 
        news={news} 
        categories={categories} 
        onUpdateNews={handleUpdateNews} 
        onUpdateCategories={handleUpdateCategories} 
      />
    </HashRouter>
  );
};

export default App;

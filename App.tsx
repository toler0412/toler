
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
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
  onImportData: (data: string) => void;
}> = ({ news, categories, onUpdateNews, onUpdateCategories, onImportData }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => sessionStorage.getItem('toler_auth') === 'true');
  const isAdminPage = location.pathname.startsWith('/admin');
  const portalKey = useMemo(() => categories.join('|'), [categories]);

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
                onImportData={onImportData}
                onLogout={handleLogout}
              />
            ) : (
              <Login onLogin={handleLoginSuccess} />
            )
          } 
        />
        <Route path="/noticia/:slug" element={<NewsDetail news={news} categories={categories} />} />
        <Route path="/*" element={<PublicPortal key={portalKey} news={news} categories={categories} />} />
      </Routes>

      {!isAdminPage && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <Link 
            to="/admin"
            className="bg-brand-dark text-white px-6 py-3 rounded-full shadow-2xl hover:bg-gray-800 transition-all font-bold flex items-center gap-2 border border-white/10"
          >
            Painel Admin
          </Link>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [news, setNews] = useState<News[]>(() => {
    const saved = localStorage.getItem('toler_news');
    return saved ? JSON.parse(saved) : INITIAL_NEWS;
  });

  const [categories, setCategories] = useState<string[]>(() => {
    const saved = localStorage.getItem('toler_categories');
    return saved ? JSON.parse(saved) : DEFAULT_CATEGORIES;
  });

  useEffect(() => {
    const sync = (e: StorageEvent) => {
      if (e.key === 'toler_categories' && e.newValue) setCategories(JSON.parse(e.newValue));
      if (e.key === 'toler_news' && e.newValue) setNews(JSON.parse(e.newValue));
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  const handleUpdateNews = useCallback((updated: News[]) => {
    setNews([...updated]);
    localStorage.setItem('toler_news', JSON.stringify(updated));
  }, []);

  const handleUpdateCategories = useCallback((updated: string[]) => {
    const cleaned = updated.map(c => c.trim()).filter(c => c !== '');
    setCategories([...cleaned]);
    localStorage.setItem('toler_categories', JSON.stringify(cleaned));
    window.dispatchEvent(new Event('storage'));
  }, []);

  const handleImportData = useCallback((dataStr: string) => {
    try {
      const data = JSON.parse(dataStr);
      if (data.categories) handleUpdateCategories(data.categories);
      if (data.news) handleUpdateNews(data.news);
      alert("Sincronização concluída com sucesso!");
    } catch (e) {
      alert("Erro ao importar dados. Verifique o formato.");
    }
  }, [handleUpdateCategories, handleUpdateNews]);

  return (
    <HashRouter>
      <AppContent 
        news={news} 
        categories={categories} 
        onUpdateNews={handleUpdateNews} 
        onUpdateCategories={handleUpdateCategories}
        onImportData={handleImportData}
      />
    </HashRouter>
  );
};

export default App;

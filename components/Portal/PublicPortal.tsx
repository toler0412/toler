
import React from 'react';
import { News, Category } from '../../types';
import Header from './Header';
import Footer from './Footer';
import NewsCard from './NewsCard';
import FeaturedSection from './FeaturedSection';
import Sidebar from './Sidebar';

interface PublicPortalProps {
  news: News[];
}

const PublicPortal: React.FC<PublicPortalProps> = ({ news }) => {
  const featured = news.find(n => n.isFeatured) || news[0];
  const gridNews = news.filter(n => n.id !== featured?.id).slice(0, 6);
  const breakingNews = news.filter(n => n.isBreaking);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {breakingNews.length > 0 && (
        <div className="bg-cnn-red text-white py-2 overflow-hidden whitespace-nowrap">
          <div className="container mx-auto px-4 flex items-center">
            <span className="font-bold uppercase tracking-tighter mr-4 border-r pr-4 border-white/30">Urgente</span>
            <div className="animate-marquee inline-block">
              {breakingNews.map((bn, idx) => (
                <span key={idx} className="mr-12 font-semibold">
                  • {bn.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Banner Publicitário Topo */}
        <div className="mb-8 w-full h-[150px] md:h-[300px] bg-gray-200 flex items-center justify-center rounded overflow-hidden">
          <img 
            src="https://picsum.photos/seed/adv/1200/300" 
            alt="Publicidade" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            {featured && <FeaturedSection news={featured} />}
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold border-l-4 border-cnn-red pl-4 mb-8 uppercase">Últimas Notícias</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gridNews.map(item => (
                  <NewsCard key={item.id} news={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4">
            <Sidebar latestNews={news.slice(0, 5)} />
          </aside>
        </div>
      </main>

      <Footer />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PublicPortal;

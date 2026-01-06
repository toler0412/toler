
import React from 'react';
import { News } from '../../types';
import Header from './Header';
import Footer from './Footer';
import FeaturedSection from './FeaturedSection';
import NewsCard from './NewsCard';
import Sidebar from './Sidebar';

const PublicPortal: React.FC<{ news: News[] }> = ({ news }) => {
  const featured = news.filter(n => n.isFeatured);
  const others = news.filter(n => !n.isFeatured);

  return (
    <div className="min-h-screen bg-brand-gray">
      <Header />
      
      <main className="portal-container px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Feed Principal */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Destaques */}
            <section className="space-y-8">
              {featured.map(item => (
                <FeaturedSection key={item.id} news={item} />
              ))}
            </section>

            {/* Lista Cronológica */}
            <section className="space-y-6">
              <h2 className="text-xl font-black uppercase text-gray-900 border-b-4 border-brand-red w-fit pb-1 mb-8 tracking-tighter">
                Últimas notícias
              </h2>
              <div className="flex flex-col gap-6">
                {others.map(item => (
                  <NewsCard key={item.id} news={item} />
                ))}
              </div>
            </section>
          </div>

          {/* Coluna Lateral */}
          <aside className="lg:col-span-4">
            <Sidebar latestNews={news} />
          </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PublicPortal;

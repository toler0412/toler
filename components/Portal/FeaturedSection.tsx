
import React from 'react';
import { Link } from 'react-router-dom';
import { News } from '../../types';

interface FeaturedSectionProps {
  news: News;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ news }) => {
  return (
    <Link to={`/noticia/${news.slug}`} className="block">
      <article className="bg-white rounded-lg overflow-hidden shadow-sm group cursor-pointer transition-all hover:shadow-md border-b lg:border-none">
        <div className="relative overflow-hidden">
          <img 
            src={news.imageUrl} 
            alt={news.title} 
            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4">
             <span className="bg-brand-red text-white text-[10px] font-black uppercase px-2 py-1 shadow-lg tracking-widest">
              {news.category}
            </span>
          </div>
        </div>
        
        <div className="p-6 lg:p-8">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4 group-hover:text-brand-red transition-colors">
            {news.title}
          </h1>
          <p className="text-gray-600 text-lg mb-4 leading-relaxed font-medium">
            {news.subtitle}
          </p>
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase">
            <span>{new Date(news.publishDate).toLocaleDateString()}</span>
            <span>•</span>
            <span>Publicado por {news.author}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default FeaturedSection;

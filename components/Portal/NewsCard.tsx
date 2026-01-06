
import React from 'react';
import { News } from '../../types';

interface NewsCardProps {
  news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="group cursor-pointer flex flex-col">
      <div className="relative aspect-video rounded-md overflow-hidden mb-3">
        <img 
          src={news.imageUrl} 
          alt={news.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2">
           <span className="bg-white/90 text-cnn-red text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow-sm">
            {news.category}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-bold font-title leading-snug group-hover:text-cnn-red transition-colors mb-2 line-clamp-3">
        {news.title}
      </h3>
      <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">
        {new Date(news.publishDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' })} • POR {news.author.toUpperCase()}
      </span>
    </div>
  );
};

export default NewsCard;

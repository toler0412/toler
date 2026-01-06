
import React from 'react';
import { Link } from 'react-router-dom';
import { News } from '../../types';

interface NewsCardProps {
  news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <Link to={`/noticia/${news.slug}`} className="block">
      <article className="bg-white p-4 lg:p-6 rounded-lg shadow-sm flex flex-col md:flex-row gap-6 group cursor-pointer hover:shadow-md transition-all">
        <div className="w-full md:w-1/3 aspect-video overflow-hidden rounded-md flex-shrink-0">
          <img 
            src={news.imageUrl} 
            alt={news.title} 
            className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform" 
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-brand-red font-black text-[10px] uppercase mb-1 block tracking-widest">
            {news.category}
          </span>
          <h3 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-brand-red leading-tight transition-colors">
            {news.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2 mb-3 leading-relaxed font-medium">
            {news.subtitle}
          </p>
          <div className="mt-auto">
            <span className="text-[10px] font-bold text-gray-400 uppercase">
              {news.readingTime} de leitura • {new Date(news.publishDate).toLocaleDateString()}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;

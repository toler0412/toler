
import React from 'react';
import { News } from '../../types';

interface FeaturedSectionProps {
  news: News;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ news }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="overflow-hidden rounded-lg aspect-video md:aspect-[21/9]">
        <img 
          src={news.imageUrl} 
          alt={news.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-4/5 text-white">
        <span className="bg-cnn-red text-white text-[10px] md:text-xs font-bold uppercase px-2 py-1 mb-4 inline-block tracking-widest">
          {news.category}
        </span>
        <h1 className="text-2xl md:text-5xl font-black font-title leading-tight mb-4 group-hover:underline">
          {news.title}
        </h1>
        <p className="hidden md:block text-lg text-gray-200 line-clamp-2 font-medium">
          {news.subtitle}
        </p>
      </div>
    </div>
  );
};

export default FeaturedSection;

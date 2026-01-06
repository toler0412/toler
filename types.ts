
export enum Category {
  INSIGHTS = 'Insights',
  POLITICA = 'Política',
  ECONOMIA = 'Economia',
  CULTURA = 'Cultura',
  TECH = 'Tecnologia'
}

export interface News {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  category: Category;
  author: string;
  publishDate: string;
  imageUrl: string;
  readingTime: string;
  isFeatured: boolean;
  slug: string;
  tags?: string[];
}

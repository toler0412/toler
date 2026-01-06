
export interface News {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  category: string; // Mudado de Category (enum) para string
  author: string;
  publishDate: string;
  imageUrl: string;
  readingTime: string;
  isFeatured: boolean;
  slug: string;
  tags?: string[];
}


export enum Category {
  POLITICA = 'Política',
  ECONOMIA = 'Economia',
  ESPORTES = 'Esportes',
  ENTRETENIMENTO = 'Entretenimento',
  TECNOLOGIA = 'Tecnologia',
  AO_VIVO = 'Ao Vivo'
}

export interface News {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  category: Category;
  tags: string[];
  author: string;
  publishDate: string;
  imageUrl: string;
  videoUrl?: string;
  isBreaking: boolean;
  isFeatured: boolean;
  slug: string;
}

export interface SiteConfig {
  name: string;
  domain: string;
  logo: string;
}

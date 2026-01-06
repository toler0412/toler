
import { News, Category } from './types';

export const INITIAL_NEWS: News[] = [
  {
    id: '1',
    title: 'Mercado reage a novas medidas econômicas do Governo Federal',
    subtitle: 'Ibovespa sobe 2% após anúncio de novo pacote fiscal focado em infraestrutura.',
    content: '<p>O mercado financeiro reagiu positivamente nesta manhã...</p>',
    category: Category.ECONOMIA,
    tags: ['Economia', 'Brasil', 'Investimento'],
    author: 'Marcelo Toler',
    publishDate: new Date().toISOString(),
    imageUrl: 'https://picsum.photos/seed/econ/1200/600',
    isBreaking: true,
    isFeatured: true,
    slug: 'mercado-reage-medidas-economicas'
  },
  {
    id: '2',
    title: 'Nova tecnologia de IA promete revolucionar diagnósticos médicos',
    subtitle: 'Pesquisadores brasileiros desenvolvem algoritmo com 99% de precisão.',
    content: '<p>A saúde digital acaba de dar um passo gigantesco...</p>',
    category: Category.TECNOLOGIA,
    tags: ['IA', 'Saúde', 'Inovação'],
    author: 'Redação',
    publishDate: new Date().toISOString(),
    imageUrl: 'https://picsum.photos/seed/tech/800/450',
    isBreaking: false,
    isFeatured: false,
    slug: 'ia-diagnosticos-medicos'
  },
  {
    id: '3',
    title: 'Decisões no Senado impactam as eleições municipais deste ano',
    subtitle: 'Mudanças no fundo partidário geram debate entre os principais partidos.',
    content: '<p>As articulações políticas em Brasília ganham novos contornos...</p>',
    category: Category.POLITICA,
    tags: ['Política', 'Senado', 'Eleições'],
    author: 'Marcelo Toler',
    publishDate: new Date().toISOString(),
    imageUrl: 'https://picsum.photos/seed/pol/800/450',
    isBreaking: false,
    isFeatured: false,
    slug: 'senado-eleicoes-municipais'
  }
];

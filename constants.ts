
import { News, Category } from './types';

export const INITIAL_NEWS: News[] = [
  {
    id: '1',
    title: 'A Nova Era da Geopolítica: Desafios e Perspectivas para 2025',
    subtitle: 'Uma análise profunda sobre a reestruturação das cadeias de valor globais e o protagonismo brasileiro no G20.',
    content: 'O mundo atravessa uma transição silenciosa, mas definitiva. As alianças tradicionais estão sendo testadas enquanto novos blocos emergem...',
    category: Category.INSIGHTS,
    author: 'Marcelo Toler',
    publishDate: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000',
    readingTime: '12 min',
    isFeatured: true,
    slug: 'geopolitica-2025'
  },
  {
    id: '2',
    title: 'Inteligência Artificial: O Fim ou o Recomeço da Criatividade?',
    subtitle: 'Como as ferramentas generativas estão redefinindo o conceito de autoria na era digital.',
    content: 'A arte sempre foi o reflexo da alma humana. Mas o que acontece quando o espelho é um algoritmo?',
    category: Category.TECH,
    author: 'Equipe Editorial',
    publishDate: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    readingTime: '6 min',
    isFeatured: false,
    slug: 'ia-criatividade'
  }
];

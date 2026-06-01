export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  rating: number;
  source: string;
  dateLabel: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'admir-roberto-da-silva',
    quote:
      'Muito bom, ótimo atendimento e sempre resolve meus problemas, e tbm um preço justo.',
    author: 'Admir Roberto da Silva',
    rating: 5,
    source: 'Avaliação no Google',
    dateLabel: 'há 8 meses',
  },
  {
    id: 'bianca-oliveira',
    quote: 'Competência e agilidade! Conseguiram resolver o meu problema dentro de um pequeno prazo.',
    author: 'Bianca Oliveira',
    rating: 5,
    source: 'Avaliação no Google',
    dateLabel: 'há 8 meses',
  },
  {
    id: 'bruna-brasetti',
    quote: 'Excelente empresa, atendimento rápido e humanizado. Recomendo!',
    author: 'Bruna Brasetti',
    rating: 5,
    source: 'Avaliação no Google',
    dateLabel: 'há 8 meses',
  },
];

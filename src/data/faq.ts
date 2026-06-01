export interface FaqItem {
  question: string;
  answer: string;
}

export const contactFaq: FaqItem[] = [
  {
    question: 'Como funciona a primeira consulta?',
    answer:
      'Após o contato, nossa equipe agenda um atendimento para entender seu caso, explicar possíveis caminhos jurídicos e orientar sobre honorários e documentação necessária.',
  },
  {
    question: 'O atendimento é presencial ou online?',
    answer:
      'Atendemos por videoconferência, telefone e WhatsApp. Quando o caso exigir, combinamos encontros presenciais em São Paulo e região do ABC — sem sede fixa aberta ao público.',
  },
  {
    question: 'Quais documentos devo preparar?',
    answer:
      'Depende da área do direito envolvida. Após o primeiro contato, informamos a lista de documentos relevantes para análise do seu caso.',
  },
  {
    question: 'As informações que envio são confidenciais?',
    answer:
      'Sim. Os dados são tratados conforme a LGPD e o sigilo profissional da advocacia. Consulte nossa Política de Privacidade para mais detalhes.',
  },
];

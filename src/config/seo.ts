import { getServiceDetailById } from '../data/services';
import { services } from '../data/services';

export interface PageSeo {
  title: string;
  description: string;
  path: string;
}

const defaultDescription =
  'Escritório de advocacia em São Paulo e ABC Paulista. Atuação em Direito de Família, Sucessões, Previdenciário, Trabalhista, Penal, Civil e Tributário.';

export const pageSeo = {
  home: {
    title: 'Advocacia em São Paulo e ABC Paulista',
    description: defaultDescription,
    path: '/',
  },
  about: {
    title: 'Quem Somos – Equipe de Advogadas',
    description:
      'Conheça as Dras. Leticia C. Muniz e Camilla Sanches, sócias fundadoras do escritório Sanches & Muniz, com atuação multidisciplinar em São Paulo e região.',
    path: '/quem-somos',
  },
  services: {
    title: 'Áreas de Atuação e Serviços Jurídicos',
    description:
      'Assessoria jurídica em Direito Civil, Empresarial, Previdenciário, Penal, Trabalhista, Tributário, do Consumidor e recursos DETRAN/JARI.',
    path: '/servicos',
  },
  contact: {
    title: 'Contato',
    description:
      'Entre em contato com o escritório Sanches & Muniz por formulário ou WhatsApp. Atendimento com sigilo profissional garantido.',
    path: '/contato',
  },
  privacy: {
    title: 'Política de Privacidade (LGPD)',
    description:
      'Saiba como o escritório Sanches & Muniz trata seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).',
    path: '/privacidade',
  },
} as const satisfies Record<string, PageSeo>;

export function getServicePageSeo(serviceId: string): PageSeo | null {
  const detail = getServiceDetailById(serviceId);
  if (!detail) return null;

  return {
    title: `${detail.title} – Advogado em São Paulo`,
    description: detail.description,
    path: `/servicos/${serviceId}`,
  };
}

export const sitemapPaths: string[] = [
  pageSeo.home.path,
  pageSeo.about.path,
  pageSeo.services.path,
  pageSeo.contact.path,
  pageSeo.privacy.path,
  ...services.map((s) => `/servicos/${s.id}`),
];

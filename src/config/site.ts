export const SITE_NAME = 'Sanches & Muniz – Advocacia e Consultoria';

export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ||
  'https://www.sanchesemuniz.com';

export const DEFAULT_OG_IMAGE = '/logo.png';

export const CONTACT = {
  phone: '(11) 93939-8561',
  phoneTel: '+5511939398561',
  email: 'contato@sanchesemuniz.com',
  whatsappUrl:
    'https://wa.me/5511939398561?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es',
  region: 'São Paulo, ABC Paulista e região',
} as const;

export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=Sanches+%26+Muniz+Advocacia+e+Consultoria+jur%C3%ADdica+Avalia%C3%A7%C3%B5es&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYXlEvel7Ll4gCTC4gIaK5cedB8RZh0Am43NNixpI40-Y6KN-RyMWAHawVlPKEL7EtafmsAeZgcOw-DGSsJ8lsIWFBxX8eQ7wsw7qI5ewhHfMs4QtsN-w1iBVvB-6HYl9fM9hrY6C7P2GE4mAydaZbl9u5i5&hl=pt-BR';

export const SOCIAL = {
  linkedinLeticia: '',
  linkedinCamilla: '',
  instagram: '',
} as const;

export const ANALYTICS = {
  enabled: import.meta.env.VITE_ANALYTICS_ENABLED === 'true',
  plausibleDomain: import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined,
  clarityProjectId: import.meta.env.VITE_CLARITY_PROJECT_ID as string | undefined,
} as const;

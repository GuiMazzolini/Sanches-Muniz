export type ServiceIconId =
  | 'civil'
  | 'empresarial'
  | 'previdenciario'
  | 'penal'
  | 'trabalhista'
  | 'tributario'
  | 'consumidor'
  | 'detran';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconId;
}

export interface AreaOfActuation {
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconId;
  fullDescription: string;
  whatIs: string;
  areasOfActuation: AreaOfActuation[];
  relatedServices: string[];
}

export interface ServiceCardProps {
  service: Service;
  onClick?: (service: Service) => void;
}

export interface ServicesPageProps {}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  legalArea: string;
  message: string;
  acceptedPrivacy: boolean;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  acceptedPrivacy?: string;
}

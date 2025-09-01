export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AreaOfActuation {
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: string;
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
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

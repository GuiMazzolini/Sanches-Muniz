import { Link } from 'react-router-dom';
import ServiceIcon from './ServiceIcon';
import type { Service } from '../types/services';

interface ServiceAreaPreviewProps {
  services: Service[];
}

/** Compact home preview — full cards live on /servicos only. */
const ServiceAreaPreview = ({ services }: ServiceAreaPreviewProps) => (
  <ul className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
    {services.map((service) => (
      <li key={service.id}>
        <Link
          to={`/servicos/${service.id}`}
          className="flex items-start gap-3 p-4 rounded-lg border border-slate-700 bg-slate-800/80 hover:border-[#BF8F26] hover:bg-slate-800 transition-colors group"
        >
          <ServiceIcon icon={service.icon} className="w-7 h-7 text-[#D4AC45] shrink-0 mt-0.5" />
          <span className="text-left min-w-0">
            <span className="block text-[#F7DC7B] font-medium group-hover:text-white transition-colors">
              {service.title}
            </span>
            <span className="block body-text text-xs mt-1 line-clamp-2">{service.description}</span>
          </span>
        </Link>
      </li>
    ))}
  </ul>
);

export default ServiceAreaPreview;

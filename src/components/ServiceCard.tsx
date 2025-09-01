import type { ServiceCardProps } from '../types/services';

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const handleCardClick = (): void => {
    if (onClick) {
      onClick(service);
    } else {
      window.location.href = `/servicos/${service.id}`;
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group cursor-pointer bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-slate-700 hover:border-[#BF8F26]"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
    >
      <div className="h-2 bg-gradient-to-r from-[#BF8F26] to-[#F7DC7B]"></div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-4">{service.icon}</span>
          <h3 className="text-xl font-semibold text-[#F7DC7B] group-hover:text-white transition-colors">
            {service.title}
          </h3>
        </div>
        
        <p className="body-text text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        
        <div className="flex items-center text-[#D4AC45] group-hover:text-[#F7DC7B] transition-colors">
          <span className="text-sm font-medium">Saiba mais</span>
          <svg 
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
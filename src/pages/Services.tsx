import ServiceCard from '../components/ServiceCard';
import type { Service, ServicesPageProps } from '../types/services';
import { services } from '../data/services';

const ServicesPage: React.FC<ServicesPageProps> = () => {
  const handleServiceClick = (service: Service): void => {
    window.location.href = `/servicos/${service.id}`;
  };

  const handleContactClick = (): void => {
    window.location.href = '/contato';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl heading-primary mb-6" >
            Nossos Serviços
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed body-text">
            Oferecemos assessoria jurídica completa e especializada para proteger seus direitos 
            e interesses com excelência e dedicação.
          </p>
        </div>
      </section>

      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service: Service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onClick={handleServiceClick}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800 rounded-lg p-8 border border-[#BF8F26]">
            <h2 className="text-2xl heading-primary mb-4" >
              Precisa de Consultoria Especializada?
            </h2>
            <p className="body-text mb-6">
              Nossa equipe está pronta para atender suas necessidades jurídicas com 
              profissionalismo e experiência comprovada.
            </p>
            <button 
              onClick={handleContactClick}
              className="btn-gold"
              type="button"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
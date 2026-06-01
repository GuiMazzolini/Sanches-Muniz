import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { getServicePageSeo, pageSeo } from '../config/seo';
import type { ServiceDetail, Service } from '../types/services';
import { getServiceDetailById, getRelatedServices } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import ServiceIcon from '../components/ServiceIcon';

interface ServiceDetailPageProps {}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  if (!serviceId) {
    navigate('/servicos');
    return null;
  }

  const serviceDetail: ServiceDetail | undefined = getServiceDetailById(serviceId);
  const relatedServices: Service[] = getRelatedServices(serviceId);
  const seo = getServicePageSeo(serviceId);

  if (!serviceDetail) {
    return (
      <>
      <PageMeta
        title="Serviço não encontrado"
        description={pageSeo.services.description}
        path={`/servicos/${serviceId}`}
        noIndex
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl heading-primary mb-4">Serviço não encontrado</h1>
          <button 
            onClick={() => navigate('/servicos')}
            className="bg-[#BF8F26] hover:bg-[#F7DC7B] text-white px-6 py-2 rounded-lg transition-colors"
          >
            Voltar aos Serviços
          </button>
        </div>
      </div>
      </>
    );
  }

  const handleContactClick = (): void => {
    navigate('/contato');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (service: Service): void => {
    navigate(`/servicos/${service.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    {seo && (
      <PageMeta
        title={seo.title}
        description={seo.description}
        path={seo.path}
      />
    )}
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8">
            <button 
              onClick={() => navigate('/servicos')}
              className="text-[#BF8F26] hover:text-[#F7DC7B] transition-colors flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar aos Serviços
            </button>
          </nav>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <ServiceIcon icon={serviceDetail.icon} className="w-14 h-14 text-[#D4AC45]" />
            </div>
            <h1 className="text-4xl md:text-5xl heading-primary mb-6">
              {serviceDetail.title}
            </h1>
            <p className="text-xl body-text max-w-3xl mx-auto">
              {serviceDetail.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h2 className="text-2xl heading-primary mb-4">O que é?</h2>
              <p className="body-text leading-relaxed">
                {serviceDetail.whatIs}
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h2 className="text-2xl heading-primary mb-4">Nossa Abordagem</h2>
              <p className="body-text leading-relaxed">
                {serviceDetail.fullDescription}
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h2 className="text-2xl heading-primary mb-6">Principais Serviços Prestados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {serviceDetail.areasOfActuation.map((area, index) => (
                  <div key={index} className="bg-slate-900 rounded-lg p-6 border border-slate-600">
                    <h3 className="text-lg font-bold text-[#F7DC7B] mb-3">
                      {area.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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

      {relatedServices.length > 0 && (
        <section className="py-16 px-4 bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl heading-primary text-center mb-12">
              Serviços Relacionados
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((service: Service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onClick={handleServiceClick}
              />
            ))}
            </div>
          </div>
        </section>
      )}
    </div>
    </>
  );
};

export default ServiceDetailPage;
import { useNavigate } from 'react-router-dom';
import { services } from '../data/services';

const Footer = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    navigate(`/servicos/${serviceId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <hr className="divider" />
      <footer className="bg-slate-900 text-[#F7DC7B] py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            
            <div className="text-center md:text-left">
              <h3 className="logo-text text-xl mb-4">Sanches & Muniz</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Dra. Leticia C. Muniz</strong> - OAB/SP 409.866</p>
                <p><strong>Dra. Camilla Sanches</strong> - OAB/SP 503.228</p>
                <p>📍 São Paulo, ABC Paulista e região</p>
                <p>📞 <a href="tel:+5511999999999">(11) 93939-8561</a></p>
                <p>✉️ contato@sanchesemuniz.com</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center md:text-left">
              <h4 className="subtitle text-lg mb-4">Áreas de Atuação</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-2 text-sm">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className="text-left hover:text-[#BF8F26] transition-colors cursor-pointer"
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#BF8F26] mt-8 pt-6 text-center text-sm body-text">
            <p>&copy; 2025 Sanches & Muniz Sociedade de Advogados. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
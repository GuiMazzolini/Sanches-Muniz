import { Link, useNavigate } from 'react-router-dom';
import { CONTACT, SOCIAL } from '../config/site';
import { services } from '../data/services';

const Footer = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    navigate(`/servicos/${serviceId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasSocial =
    SOCIAL.linkedinLeticia || SOCIAL.linkedinCamilla || SOCIAL.instagram;

  return (
    <>
      <hr className="divider" />
      <footer className="bg-slate-900 text-[#F7DC7B] py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <Link to="/" className="logo-text text-xl mb-4 inline-block hover:text-white transition-colors">
                Sanches & Muniz
              </Link>
              <div className="space-y-2 text-sm body-text">
                <p><strong>Dra. Leticia C. Muniz</strong> — OAB/SP 409.866</p>
                <p><strong>Dra. Camilla Sanches</strong> — OAB/SP 503.228</p>
                <p>📍 {CONTACT.region}</p>
                <p>
                  📞{' '}
                  <a href={`tel:${CONTACT.phoneTel}`} className="footer-link">
                    {CONTACT.phone}
                  </a>
                </p>
                <p>
                  ✉️{' '}
                  <a href={`mailto:${CONTACT.email}`} className="footer-link">
                    {CONTACT.email}
                  </a>
                </p>
                {hasSocial && (
                  <p className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
                    {SOCIAL.linkedinLeticia && (
                      <a href={SOCIAL.linkedinLeticia} className="footer-link" target="_blank" rel="noopener noreferrer">
                        LinkedIn — Leticia
                      </a>
                    )}
                    {SOCIAL.linkedinCamilla && (
                      <a href={SOCIAL.linkedinCamilla} className="footer-link" target="_blank" rel="noopener noreferrer">
                        LinkedIn — Camilla
                      </a>
                    )}
                    {SOCIAL.instagram && (
                      <a href={SOCIAL.instagram} className="footer-link" target="_blank" rel="noopener noreferrer">
                        Instagram
                      </a>
                    )}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center text-center md:text-left">
              <h4 className="subtitle text-lg mb-4">Áreas de Atuação</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-2 text-sm">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleServiceClick(service.id)}
                    className="text-left footer-link cursor-pointer bg-transparent border-0 p-0"
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[#BF8F26] mt-8 pt-6 text-center text-sm body-text space-y-2">
            <p>
              <Link to="/privacidade" className="footer-link">
                Política de Privacidade (LGPD)
              </Link>
            </p>
            <p>&copy; {new Date().getFullYear()} Sanches & Muniz Sociedade de Advogados. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

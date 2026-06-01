import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import OptimizedImage from '../components/OptimizedImage';
import ServiceAreaPreview from '../components/ServiceAreaPreview';
import { pageSeo } from '../config/seo';
import { CONTACT, GOOGLE_REVIEWS_URL } from '../config/site';
import { testimonials } from '../data/testimonials';
import { services } from '../data/services';

/** Highlighted on home; full list + cards stay on /servicos. */
const HOME_FEATURED_SERVICE_IDS = [
  'direito-civil',
  'direito-penal',
  'direito-previdenciario',
  'direito-trabalhista',
  'direito-tributario',
  'direito-empresarial',
] as const;

const Home = () => {
  const featuredServices = services.filter((service) =>
    HOME_FEATURED_SERVICE_IDS.includes(service.id as (typeof HOME_FEATURED_SERVICE_IDS)[number])
  );

  return (
    <>
      <PageMeta
        title={pageSeo.home.title}
        description={pageSeo.home.description}
        path={pageSeo.home.path}
      />

      <section className="relative px-4 pt-8 pb-16 md:pt-14 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(191, 143, 38, 0.35), transparent)',
          }}
        />
        <div className="relative max-w-5xl mx-auto text-center">
          <OptimizedImage
            src="/logo.png"
            webpSrc="/logo.webp"
            alt="Sanches & Muniz – Advocacia e Consultoria"
            className="max-w-[280px] md:max-w-md mx-auto mb-8"
            width={512}
            height={512}
          />
          <h1 className="text-3xl md:text-5xl heading-primary mb-4 leading-tight">
            Advocacia estratégica em São Paulo e ABC Paulista
          </h1>
          <p className="text-lg md:text-xl body-text max-w-2xl mx-auto mb-8 leading-relaxed">
            Direito de Família, Sucessões, Previdenciário, Trabalhista, Penal e mais — com
            atendimento humanizado e foco em resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato" className="btn-gold inline-block text-center">
              Agendar consulta
            </Link>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-lg font-medium border border-[#BF8F26] text-[#F7DC7B] hover:bg-[#BF8F26]/20 transition-all duration-300 input-field"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[minmax(0,340px)_1fr] gap-8 md:gap-10 items-center">
          <div className="relative group order-1 mx-auto w-full max-w-[340px] md:max-w-none md:mx-0">
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#B27E11] to-[#D4AC45] rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"
              aria-hidden="true"
            />
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-2xl border-2 border-[#BF8F26]">
              <OptimizedImage
                src="/time.jpeg"
                webpSrc="/time.webp"
                alt="Equipe Sanches & Muniz — Dra. Leticia C. Muniz e Dra. Camilla Sanches"
                className="absolute inset-0 w-full h-full object-cover object-[50%_58%]"
                width={400}
                height={533}
              />
            </div>
          </div>
          <div className="space-y-4 text-center md:text-left order-2 min-w-0">
            <h2 className="text-2xl heading-primary">Quem somos</h2>
            <p className="body-text">
              O escritório Sanches & Muniz – Advocacia e Consultoria atua nas áreas de Direito de
              Família, Sucessões, Previdenciário, Trabalhista e Penal, oferecendo soluções jurídicas
              integradas para pessoas físicas e jurídicas.
            </p>
            <p className="body-text">
              Com atuação em {CONTACT.region}, nossa equipe preza pela excelência, transparência e
              defesa dos interesses de nossos clientes com responsabilidade e respeito.
            </p>
            <Link to="/quem-somos" className="inline-block text-[#D4AC45] hover:text-[#F7DC7B] font-medium transition-colors input-field">
              Conheça nossa equipe →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl heading-primary mb-3">Áreas de atuação</h2>
            <p className="body-text max-w-2xl mx-auto">
              Clique em uma área para saber mais ou veja a lista completa.
            </p>
          </div>
          <ServiceAreaPreview services={featuredServices} />
          <div className="text-center mt-10">
            <Link to="/servicos" className="btn-gold inline-block">
              Ver todas as áreas de atuação
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl heading-primary text-center mb-2">O que dizem nossos clientes</h2>
          <p className="body-text text-sm text-center mb-8">Avaliações publicadas no Google</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <blockquote
                key={item.id}
                className="bg-slate-800 rounded-lg p-6 border border-slate-700 flex flex-col"
              >
                <div className="flex items-center gap-1 mb-3 text-[#F7DC7B]" aria-label={`${item.rating} de 5 estrelas`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>
                <p className="body-text text-sm italic mb-4 flex-1">&ldquo;{item.quote}&rdquo;</p>
                <footer className="subtitle text-sm">
                  {item.author}
                  <span className="body-text text-xs block mt-1">
                    {item.source} · {item.dateLabel}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#D4AC45] hover:text-[#F7DC7B] font-medium transition-colors input-field border border-[#BF8F26] rounded-lg px-6 py-3 hover:bg-[#BF8F26]/10"
            >
              Ver todas as avaliações no Google →
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-lg p-8 border border-[#BF8F26]">
            <h2 className="text-2xl heading-primary mb-6 text-center">Por que nos escolher</h2>
            <ul className="grid md:grid-cols-2 gap-4 body-text text-sm">
              <li className="flex gap-3">
                <span className="text-[#BF8F26] shrink-0" aria-hidden="true">✓</span>
                <span>Sócias fundadoras com atuação multidisciplinar e pós-graduação</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#BF8F26] shrink-0" aria-hidden="true">✓</span>
                <span>Atendimento online com atuação em São Paulo e região</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#BF8F26] shrink-0" aria-hidden="true">✓</span>
                <span>Sigilo profissional e transparência em cada etapa</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#BF8F26] shrink-0" aria-hidden="true">✓</span>
                <span>Estratégia jurídica personalizada para cada caso</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-lg p-8 border border-[#BF8F26]">
            <h2 className="text-2xl heading-primary mb-6 text-center">Nossos valores</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full border border-[#BF8F26] flex items-center justify-center text-[#D4AC45]" aria-hidden="true">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18M5 7h14" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium heading-secondary mb-2">Excelência</h3>
                <p className="body-text text-sm">
                  Comprometimento com a qualidade e precisão em todos os serviços prestados.
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full border border-[#BF8F26] flex items-center justify-center text-[#D4AC45]" aria-hidden="true">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </div>
                <h3 className="text-lg heading-secondary mb-2">Confiança</h3>
                <p className="body-text text-sm">
                  Relacionamento transparente e honesto com nossos clientes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full border border-[#BF8F26] flex items-center justify-center text-[#D4AC45]" aria-hidden="true">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium heading-secondary mb-2">Resultados</h3>
                <p className="body-text text-sm">
                  Foco em soluções eficazes e resultados concretos para nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

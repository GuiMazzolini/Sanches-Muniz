import { useNavigate } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import PageMeta from '../components/PageMeta';
import { pageSeo } from '../config/seo';

const About = () => {
  const navigate = useNavigate();

  const handleContactClick = (): void => {
    navigate('/contato');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <PageMeta
        title={pageSeo.about.title}
        description={pageSeo.about.description}
        path={pageSeo.about.path}
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl heading-primary mb-6">
            Conheça Nossa Equipe
          </h1>
          <p className="text-xl body-text max-w-3xl mx-auto leading-relaxed">
            Profissionais dedicadas com vasta experiência em diversas áreas do direito, 
            comprometidas em oferecer soluções jurídicas eficazes e personalizadas.
          </p>
        </div>
      </section>

      <section className="pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#B27E11] to-[#D4AC45] rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"
              aria-hidden="true"
            />
            <OptimizedImage
              src="/time2.jpeg"
              webpSrc="/time2.webp"
              alt="Dra. Leticia C. Muniz e Dra. Camilla Sanches, sócias fundadoras do escritório Sanches & Muniz"
              className="relative w-full h-auto rounded-lg shadow-2xl border-2 border-[#BF8F26]"
              width={1200}
              height={800}
              loading="eager"
            />
          </div>
          <p className="subtitle text-center text-sm mt-4">
            Dra. Leticia C. Muniz e Dra. Camilla Sanches — Sócias fundadoras
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative group aspect-square overflow-hidden rounded-lg">
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#B27E11] to-[#D4AC45] rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"
                aria-hidden="true"
              />
              <OptimizedImage
                src="/muniz.jpeg"
                webpSrc="/muniz.webp"
                alt="Dra. Leticia Muniz"
                className="relative w-full h-full object-cover object-[50%_38%] rounded-lg shadow-2xl border-2 border-[#BF8F26] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl heading-primary mb-2" >
                  Dra. Leticia C. Muniz 
                </h2>
                <p className="subtitle mb-4">
                  OAB/SP 409.866 • Advogada / Sócia Fundadora
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="body-text leading-relaxed">
                  Com sólida experiência e atuação multidisciplinar, a Dra. Leticia Muniz presta assessoria jurídica personalizada com foco na excelência e 
                  na solução eficaz de conflitos. Sua prática profissional se destaca especialmente no Direito Civil, com ênfase em Direito de Família 
                  e Sucessório, atuando em divórcios, guarda de menores, pensão alimentícia, inventários, planejamento sucessório e ações de usucapião.
                </p>
                
                <p className="body-text leading-relaxed">
                  Além da esfera civil, oferece suporte estratégico em Direito Previdenciário (benefícios do INSS e planejamento previdenciário), 
                  Direito Empresarial (contratos e estruturação de negócios), Direito Tributário (execuções fiscais e planejamento tributário), 
                  Direito do Agronegócio (contratos rurais e regularização de propriedades) e Processos Administrativos. Pós-graduada em Direito do Trabalho, 
                  também atua em demandas trabalhistas. Com compromisso ético, transparência e foco em soluções jurídicas eficazes, 
                  busca oferecer um atendimento humanizado e alinhado às necessidades específicas de cada cliente.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#BF8F26] to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2 relative group aspect-square overflow-hidden rounded-lg">
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#B27E11] to-[#D4AC45] rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"
                aria-hidden="true"
              />
              <OptimizedImage
                src="/sanches.jpeg"
                webpSrc="/sanches.webp"
                alt="Dra. Camilla Sanches"
                className="relative w-full h-full object-cover object-[50%_10%] rounded-lg shadow-2xl border-2 border-[#BF8F26] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <div className="md:order-1 space-y-6">
              <div>
                <h2 className="text-3xl heading-primary mb-2">
                  Dra. Camilla Sanches
                </h2>
                <p className="subtitle mb-4">
                  OAB/SP 503.228 • Advogada / Sócia Fundadora
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="body-text leading-relaxed">
                  Especialista em Direito Criminal, Camilla Sanches atua com dedicação exclusiva nesta área, aliando sólida formação pela FMU a pós-graduação 
                  em Direito Corporativo e Compliance, além de especialização em Compliance Empresarial e Anticorrupção. Suas atividades envolvem a condução de 
                  defesas técnicas em todas as fases de processos criminais, desde investigações e inquéritos até ações penais de natureza diversa, 
                  incluindo audiências de custódia e atuação em crimes corporativos e tributários.
                </p>
                
                <p className="body-text leading-relaxed">
                  Com olhar atento à melhor estratégia para cada cliente, Camilla oferece assessoria jurídica preventiva e contenciosa, 
                  elaboração de pareceres, acompanhamento em delegacias e órgãos judiciais, além de consultoria em programas de compliance e 
                  prevenção de riscos empresariais, sempre pautando sua atuação pela ética, transparência e foco na defesa dos interesses e direitos 
                  de seus clientes.
                </p>
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
              className="bg-[#B27E11] hover:bg-[#BF8F26] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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

export default About;
const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center flex-1 mt-[2rem] md:mt-[6rem]">
      <img src="/logo.png" alt="logo" className="max-w-sm md:max-w-2xl" />
      <div className="space-y-4 max-w-3xl text-center px-4">
        <p className="body-text">
          O escritório Sanches & Muniz – Advocacia e Consultoria atua nas áreas de Direito de Família, Sucessões, Previdenciário, Trabalhista e Penal, 
          oferecendo soluções jurídicas integradas e estratégicas para pessoas físicas e jurídicas.
        </p>
        <p className="body-text">
          Com atuação em São Paulo, ABC Paulista e região, nossa equipe preza pela excelência, transparência e constante atualização, 
          sempre buscando a defesa dos interesses de nossos clientes com responsabilidade, eficiência e respeito.
        </p>
        <p className="body-text">
          Conte com profissionais altamente qualificados para assessorar, orientar e proteger você ou sua empresa nos mais diversos desafios jurídicos.
        </p>
      </div>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-lg p-8 border border-[#BF8F26]">
            <h2 className="text-2xl heading-primary mb-6 text-center">
              Nossos Valores
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">⚖️</div>
                <h3 className="text-lg font-medium heading-secondary mb-2">
                  Excelência
                </h3>
                <p className="body-text text-sm">
                  Comprometimento com a qualidade e precisão em todos os serviços prestados.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="text-lg heading-secondary mb-2">
                  Confiança
                </h3>
                <p className="body-text text-sm">
                  Relacionamento transparente e honesto com nossos clientes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-medium heading-secondary mb-2">
                  Resultados
                </h3>
                <p className="body-text text-sm">
                  Foco em soluções eficazes e resultados concretos para nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
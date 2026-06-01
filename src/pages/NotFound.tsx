import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

const NotFound = () => (
  <>
    <PageMeta
      title="Página não encontrada"
      description="A página solicitada não foi encontrada no site Sanches & Muniz."
      path="/404"
      noIndex
    />
    <section className="py-24 px-4 text-center">
      <div className="max-w-lg mx-auto">
        <p className="text-6xl heading-primary mb-4">404</p>
        <h1 className="text-2xl heading-secondary mb-4">Página não encontrada</h1>
        <p className="body-text mb-8">
          O endereço pode estar incorreto ou a página foi movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-gold inline-block">
            Ir para o início
          </Link>
          <Link to="/contato" className="inline-block px-8 py-3 rounded-lg border border-[#BF8F26] text-[#F7DC7B] hover:bg-[#BF8F26]/20 transition-colors">
            Fale conosco
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default NotFound;

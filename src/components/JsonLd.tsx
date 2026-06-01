import { SITE_URL, CONTACT, SITE_NAME } from '../config/site';
import { services } from '../data/services';

const JsonLd = () => {
  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/logo.png`,
    telephone: CONTACT.phoneTel,
    email: CONTACT.email,
    areaServed: {
      '@type': 'Place',
      name: CONTACT.region,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    priceRange: '$$',
    knowsAbout: services.map((service) => service.title),
    employee: [
      {
        '@type': 'Person',
        name: 'Leticia C. Muniz',
        jobTitle: 'Advogada / Sócia Fundadora',
        identifier: 'OAB/SP 409.866',
      },
      {
        '@type': 'Person',
        name: 'Camilla Sanches',
        jobTitle: 'Advogada / Sócia Fundadora',
        identifier: 'OAB/SP 503.228',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
    />
  );
};

export default JsonLd;

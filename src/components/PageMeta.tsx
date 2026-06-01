import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../config/site';

export interface PageMetaProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

function upsertMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string
): void {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel: string, href: string): void {
  let element = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

const PageMeta = ({ title, description, path, noIndex = false }: PageMetaProps) => {
  const location = useLocation();
  const canonicalPath = path ?? location.pathname;
  const fullTitle = title.includes('Sanches & Muniz') ? title : `${title} | Sanches & Muniz`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const ogImage = `${SITE_URL}${DEFAULT_OG_IMAGE}`;

  useEffect(() => {
    document.title = fullTitle;
    document.documentElement.lang = 'pt-BR';

    upsertMeta('name', 'description', description);
    upsertLink('canonical', canonicalUrl);

    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:locale', 'pt_BR');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:image', ogImage);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);

    upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');
  }, [fullTitle, description, canonicalUrl, ogImage, noIndex]);

  return null;
};

export default PageMeta;

import { ANALYTICS } from '../config/site';

const CONSENT_KEY = 'sm-cookie-consent';

let analyticsLoaded = false;

declare global {
  interface Window {
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[][] };
  }
}

export const getAnalyticsConsent = (): 'accepted' | 'declined' | null => {
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === 'accepted' || value === 'declined') return value;
  return null;
};

export const setAnalyticsConsent = (consent: 'accepted' | 'declined'): void => {
  localStorage.setItem(CONSENT_KEY, consent);
};

const loadPlausible = (): void => {
  if (!ANALYTICS.plausibleDomain) return;
  if (document.querySelector('script[data-plausible]')) return;

  const script = document.createElement('script');
  script.defer = true;
  script.dataset.plausible = 'true';
  script.dataset.domain = ANALYTICS.plausibleDomain;
  script.src = 'https://plausible.io/js/script.js';
  document.head.appendChild(script);
};

const loadClarity = (): void => {
  if (!ANALYTICS.clarityProjectId) return;
  if (document.querySelector('script[data-clarity]')) return;

  window.clarity =
    window.clarity ||
    function clarityStub(...args: unknown[]) {
      (window.clarity!.q = window.clarity!.q || []).push(args);
    };
  window.clarity.q = window.clarity.q || [];

  const script = document.createElement('script');
  script.async = true;
  script.dataset.clarity = 'true';
  script.src = `https://www.clarity.ms/tag/${ANALYTICS.clarityProjectId}`;
  document.head.appendChild(script);
};

/** Loads analytics scripts only after explicit consent. */
export const loadAnalytics = (): void => {
  if (!ANALYTICS.enabled || analyticsLoaded) return;
  if (getAnalyticsConsent() !== 'accepted') return;

  loadPlausible();
  loadClarity();
  analyticsLoaded = true;
};

export const isAnalyticsConfigured = (): boolean =>
  ANALYTICS.enabled &&
  Boolean(ANALYTICS.plausibleDomain || ANALYTICS.clarityProjectId);

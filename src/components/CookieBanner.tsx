import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ANALYTICS } from '../config/site';

const CONSENT_KEY = 'sm-cookie-consent';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ANALYTICS.enabled) return;
    if (localStorage.getItem(CONSENT_KEY)) return;
    setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
    if (ANALYTICS.plausibleDomain) {
      const script = document.createElement('script');
      script.defer = true;
      script.dataset.domain = ANALYTICS.plausibleDomain;
      script.src = 'https://plausible.io/js/script.js';
      document.head.appendChild(script);
    }
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 bg-slate-900 border-t border-[#BF8F26] shadow-2xl"
      role="dialog"
      aria-label="Consentimento de cookies"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <p className="body-text text-sm flex-1">
          Utilizamos cookies analíticos para melhorar o site. Ao continuar, você concorda com nossa{' '}
          <Link to="/privacidade" className="text-[#D4AC45] hover:text-[#F7DC7B] underline">
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-3 shrink-0">
          <button type="button" onClick={decline} className="px-4 py-2 text-sm text-[#F7DC7B] border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors">
            Recusar
          </button>
          <button type="button" onClick={accept} className="btn-gold text-sm py-2 px-6">
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

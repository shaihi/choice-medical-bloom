declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const GTM_ID = 'GTM-TWTHBKZJ';

export const initGA = () => {
  if (document.querySelector(`script[src*="${GTM_ID}"]`)) return; // already loaded

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
};

export const trackPageView = (path: string) => {
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: 'page_view', page_path: path });
  }
};

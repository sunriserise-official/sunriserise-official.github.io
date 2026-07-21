(() => {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('[data-language-button]');
  const setLanguage = (language) => {
    root.dataset.language = language;
    root.lang = language;
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.languageButton === language)));
    try { localStorage.setItem('sunriserise-legal-language-v2', language); } catch (_) {}
  };
  buttons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.languageButton)));
  try {
    const stored = localStorage.getItem('sunriserise-legal-language-v2');
    setLanguage(stored === 'ko' || stored === 'en' ? stored : 'en');
  } catch (_) {
    setLanguage('en');
  }
})();

(() => {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('[data-language-button]');
  const setLanguage = (language) => {
    root.dataset.language = language;
    root.lang = language;
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.languageButton === language)));
    try { localStorage.setItem('sunriserise-legal-language', language); } catch (_) {}
  };
  buttons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.languageButton)));
  try {
    const stored = localStorage.getItem('sunriserise-legal-language');
    setLanguage(stored === 'ko' || stored === 'en' ? stored : 'en');
  } catch (_) {
    setLanguage('en');
  }
})();

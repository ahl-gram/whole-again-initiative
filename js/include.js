(async () => {
  const targets = document.querySelectorAll('[data-include]');
  await Promise.all(Array.from(targets).map(async el => {
    const url = el.getAttribute('data-include');
    const res = await fetch(url);
    if (!res.ok) return;
    el.outerHTML = await res.text();
  }));
})();

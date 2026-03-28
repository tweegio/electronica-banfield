  function filtrar(btn, cat) {
    document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.product-card').forEach(card => {
      const show = cat === 'todos' || card.dataset.cat === cat;
      card.style.display = show ? 'block' : 'none';
    });
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 100);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').style.background =
      window.scrollY > 60 ? 'rgba(10,10,18,0.97)' : 'rgba(10,10,18,0.85)';
  });

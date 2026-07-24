const menuBtn = document.getElementById('menuBtn');
  const navlinks = document.getElementById('navlinks');
  menuBtn.addEventListener('click', () => {
    const open = navlinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navlinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));

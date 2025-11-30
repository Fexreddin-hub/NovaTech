// Main site JS: theme toggle, sticky nav behavior, helpers
(function(){
  const themeToggle = () => {
    const btns = document.querySelectorAll('[data-theme-toggle]');
    btns.forEach(btn=>btn.addEventListener('click', (e)=>{
      e.preventDefault();
      // Toggle both classes for compatibility
      document.body.classList.toggle('dark-mode');
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark-mode') || document.body.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      // Re-initialize page-specific buttons after theme change
      if (typeof window.reinitPageButtons === 'function') {
        window.reinitPageButtons();
      }
    }))
  }
  const initTheme = ()=>{
    const saved = localStorage.getItem('theme');
    if(saved==='dark') {
      document.body.classList.add('dark-mode');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.remove('dark');
    }
  }
  const stickyHeader = ()=>{
    const header = document.querySelector('.site-header') || document.querySelector('header');
    if(!header) return;
    let last=0;
    window.addEventListener('scroll', ()=>{
      const st = window.scrollY;
      header.style.boxShadow = st>8 ? '0 8px 24px rgba(2,6,23,0.12)' : '0 1px 0 rgba(16,24,40,0.04)';
      last = st;
    })
  }
  const showToast = (msg, timeout=2500)=>{
    let t = document.getElementById('site-toast');
    if(!t){ t = document.createElement('div'); t.id='site-toast'; t.style.position='fixed'; t.style.right='1rem'; t.style.bottom='1rem'; t.style.background='rgba(2,6,23,0.9)'; t.style.color='white'; t.style.padding='.6rem .9rem'; t.style.borderRadius='8px'; t.style.zIndex='9999'; document.body.appendChild(t);}
    t.textContent = msg; t.style.opacity='1'; setTimeout(()=>t.style.opacity='0', timeout);
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    initTheme(); themeToggle(); stickyHeader();
    // smooth internal links
    document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click', e=>{ e.preventDefault(); const id=a.getAttribute('href').slice(1); const el=document.getElementById(id); if(el) el.scrollIntoView({behavior:'smooth'}); }));
    window.showToast = showToast;
  })
})();
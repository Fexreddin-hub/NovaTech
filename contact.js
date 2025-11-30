(function(){
  function loadSubs(){
    const subs = JSON.parse(localStorage.getItem('az_submissions')||'[]');
    const el = document.getElementById('submissions');
    if(!subs.length) { el.textContent='No submissions yet.'; return; }
    el.innerHTML = '<h4>Submissions</h4>' + subs.map(s=>`<div style="margin-top:.5rem"><strong>${s.name}</strong> (${s.email})<div class="small">${s.message}</div></div>`).join('');
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    loadSubs();
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if(!name || !email || !message){ showToast('Please fill all fields'); return; }
      const subs = JSON.parse(localStorage.getItem('az_submissions')||'[]');
      subs.unshift({name,email,message,ts:Date.now()});
      localStorage.setItem('az_submissions', JSON.stringify(subs));
      form.reset(); loadSubs(); showToast('Message submitted — we will reply by email');
    });
    document.getElementById('saveDraft').addEventListener('click', ()=>{
      const draft = {name:document.getElementById('name').value, email:document.getElementById('email').value, message:document.getElementById('message').value};
      localStorage.setItem('az_contact_draft', JSON.stringify(draft)); showToast('Draft saved locally');
    });
    // load draft
    const draft = JSON.parse(localStorage.getItem('az_contact_draft')||'null');
    if(draft){ document.getElementById('name').value=draft.name||''; document.getElementById('email').value=draft.email||''; document.getElementById('message').value=draft.message||''; }
  })
})();
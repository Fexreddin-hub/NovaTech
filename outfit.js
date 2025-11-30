(function(){
  const essentials = {
    mountain: [ 'hiking boots','insulated jacket','water filter','map','hat','gloves' ],
    plains: [ 'trail shoes','water','sun protection','hat' ]
  };
  const suggestions = [
    {key:'thermal layers',note:'Helps regulate temperature in sudden cold snaps.'},
    {key:'waterproof shell',note:'Protects from wind and rain.'},
    {key:'extra socks',note:'Prevents blisters and keeps feet warm.'}
  ];

  function normalizeList(text){
    return text.split('\n').map(s=>s.trim().toLowerCase()).filter(Boolean);
  }

  function analyze(tripType, items){
    const have = new Set(items);
    const req = essentials[tripType] || [];
    const missing = req.filter(r=> ![...have].some(h=>h.includes(r.split(' ')[0])));
    const present = req.filter(r=> [...have].some(h=>h.includes(r.split(' ')[0])));
    const output = {
      tripType, present, missing,
      extras: suggestions.filter(s=> !present.includes(s.key)).slice(0,3)
    };
    return output;
  }

  function renderResult(res){
    const out = document.getElementById('outcome'); out.innerHTML='';
    const main = document.createElement('div'); main.className='card';
    main.innerHTML = `<h3>Recommended Outfit for ${res.tripType}</h3>
      <div class="small">Complete outfit combination and safety notes below.</div>
      <div style="margin-top:.75rem"><strong>Present essentials:</strong> ${res.present.join(', ')||'None'}</div>
      <div style="margin-top:.5rem"><strong>Missing essentials:</strong> ${res.missing.join(', ')||'None'}</div>
    `;
    out.appendChild(main);

    const notes = document.createElement('div'); notes.className='card';
    notes.innerHTML = `<h4>Safety & Weather Notes</h4>
      <div class="small">Mountains may experience rapid weather changes: bring thermal layers and waterproof outerwear. Pay attention to wind chill and humidity.</div>
    `;
    out.appendChild(notes);

    if(res.missing.length){
      const rec = document.createElement('div'); rec.className='card'; rec.innerHTML = `<h4>Suggested items to add</h4><ul>${res.missing.map(m=>`<li>${m}</li>`).join('')}</ul>`;
      out.appendChild(rec);
    }

    const extras = document.createElement('div'); extras.className='card'; extras.innerHTML = `<h4>Additional Suggestions</h4><ul>${res.extras.map(e=>`<li><strong>${e.key}</strong>: ${e.note}</li>`).join('')}</ul>`;
    out.appendChild(extras);
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('analyze').addEventListener('click', async ()=>{
      const tripType = document.getElementById('tripType').value;
      const text = document.getElementById('clothes').value;
      const items = normalizeList(text);
      const result = analyze(tripType, items);
      renderResult(result);
      showToast('Analysis complete');
    })
  })
})();
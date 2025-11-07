const glyphs = document.querySelectorAll('.glyph');
glyphs.forEach(glyph => {
    glyph.addEventListener('mousemove', e => {
        const rect = glyph.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glyph.style.setProperty('--x', `${x}px`);
        glyph.style.setProperty('--y', `${y}px`);
    })
})

document.getElementById('enterBtn').addEventListener('click',()=>{
  document.getElementById('lore').scrollIntoView({behavior:'smooth'});
});

(function() {
  let control = 0;
  function typeText(elementId, delayStart = 0, speed = 60) {
    const el = document.getElementById(elementId);
    const text = el.textContent.trim();
    el.textContent = '';
    let i = 0;

    setTimeout(() => {
      const interval = setInterval(() => {
        el.textContent += text[i++];
        if (i >= text.length) {
          clearInterval(interval)
          el.classList.add('glow');
          el.classList.add('done');
          if(control == 0){
            el.classList.remove('done');
            control++
          }
        };
      }, speed);
    }, delayStart);
  }


  typeText('tag1', 2000, 60);
  typeText('tag2', 6000, 50);
})();

document.querySelectorAll('.glyph').forEach(g =>{
  g.addEventListener('mouseenter', ()=> g.style.boxShadow='0 18px 40px rgba(142,90,255,0.06)');
  g.addEventListener('mouseleave', ()=> g.style.boxShadow='');
});

(function(){
  const trail = document.createElement('div');
  trail.style.position='fixed'; trail.style.pointerEvents='none'; trail.style.zIndex=9999;
  document.body.appendChild(trail);
  document.addEventListener('mousemove', (e)=>{
    const dot = document.createElement('div');
    dot.style.position='absolute';
    dot.style.left=(e.clientX-6)+'px';
    dot.style.top=(e.clientY-6)+'px';
    dot.style.width='12px'; dot.style.height='12px';
    dot.style.borderRadius='50%'; dot.style.opacity='0.9';
    dot.style.background='radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(142,90,255,0.9) 40%, rgba(79,163,255,0.2) 100%)';
    dot.style.mixBlendMode='screen';
    dot.style.transition='opacity .9s, transform .9s';
    trail.appendChild(dot);
    requestAnimationFrame(()=>{ dot.style.transform='translateY(-12px) scale(.6)'; dot.style.opacity='0'; });
    setTimeout(()=>dot.remove(),900);
  });
})();

document.getElementById('joinBtn').addEventListener('click', ()=>{
  const email = document.getElementById('email').value.trim();
  if(!email) { alert('Enter your email to join the conclave'); return; }
  alert('Thanks — you\'ll be notified when Nocthyr awakens.');
  document.getElementById('email').value='';
});

document.querySelectorAll('.char').forEach(char=>{
  const title = char.querySelector('h4');
  const div = char.querySelector('div');

  char.addEventListener('mouseenter', ()=> {title.classList.add('h4-glow'), div.classList.add('portrait-glow')});
  char.addEventListener('mouseleave', ()=> {title.classList.remove('h4-glow'), div.classList.remove('portrait-glow')})
})
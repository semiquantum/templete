document.documentElement.classList.add('js-ready');document.documentElement.classList.remove('no-js');
const menu=document.querySelector('.nav-links'),toggle=document.querySelector('.menu-toggle');
function closeMenu(){if(!menu||!toggle)return;menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation')}
function openMenu(){if(!menu||!toggle)return;menu.classList.add('open');toggle.setAttribute('aria-expanded','true');toggle.setAttribute('aria-label','Close navigation')}
toggle?.addEventListener('click',()=>toggle.getAttribute('aria-expanded')==='true'?closeMenu():openMenu());
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
window.addEventListener('resize',()=>{if(innerWidth>900)closeMenu()});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(!t)return;e.preventDefault();t.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}));
const items=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');ob.unobserve(e.target)}}),{threshold:.12});items.forEach(x=>ob.observe(x))}else items.forEach(x=>x.classList.add('is-visible'));
document.querySelectorAll('.faq-q').forEach((btn,index)=>{
  const answer=btn.nextElementSibling;
  if(answer){
    const id=`faq-answer-${index+1}`;
    answer.id=id;
    btn.setAttribute('aria-controls',id);
  }
  btn.addEventListener('click',()=>{
    const panel=btn.nextElementSibling;
    const expanded=btn.getAttribute('aria-expanded')==='true';
    document.querySelectorAll('.faq-q').forEach(other=>{
      other.setAttribute('aria-expanded','false');
      if(other.nextElementSibling) other.nextElementSibling.hidden=true;
      const icon=other.querySelector('b'); if(icon) icon.textContent='+';
    });
    btn.setAttribute('aria-expanded',String(!expanded));
    if(panel) panel.hidden=expanded;
    const icon=btn.querySelector('b'); if(icon) icon.textContent=expanded?'+':'−';
  });
});
const form=document.querySelector('.contact-form');
form?.addEventListener('submit',e=>{e.preventDefault();let valid=true,first=null;form.querySelectorAll('[required]').forEach(f=>{const er=form.querySelector(`[data-error-for="${f.id}"]`);let msg='';if(!f.value.trim())msg='This field is required.';else if(f.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim()))msg='Enter a valid email address.';f.setAttribute('aria-invalid',msg?'true':'false');if(er)er.textContent=msg;if(msg&&!first)first=f;if(msg)valid=false});const status=form.querySelector('.form-status');status.className='form-status';if(!valid){status.textContent='Please correct the highlighted fields.';status.classList.add('error');first?.focus();return}status.textContent='Thanks — your enquiry was submitted successfully in this frontend demo.';status.classList.add('success');form.reset();form.querySelectorAll('[aria-invalid]').forEach(f=>f.setAttribute('aria-invalid','false'));form.querySelectorAll('[data-error-for]').forEach(x=>x.textContent='')});

/* Navigation safety: every internal action resolves to a real section. */
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',event=>{
    const selector=link.getAttribute('href');
    if(!selector || selector==='#') return;
    const target=document.querySelector(selector);
    if(!target){
      event.preventDefault();
      console.warn(`Navigation target not found: ${selector}`);
    }
  });
});

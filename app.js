
const root=document.documentElement;
const themeBtn=document.getElementById('themeBtn');
let stored=null;try{stored=localStorage.getItem('usama-theme')}catch(e){}
if(stored) root.dataset.theme=stored;
themeBtn.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('usama-theme',root.dataset.theme)}catch(e){}});
const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('navLinks');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open))});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.project-card').forEach(c=>c.classList.toggle('hidden',f!=='All'&&c.dataset.category!==f))}));
document.querySelectorAll('.course-toggle').forEach(btn=>btn.addEventListener('click',()=>{const group=btn.closest('.course-group');const open=group.classList.toggle('open');btn.setAttribute('aria-expanded',String(open))}));
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const copy=document.getElementById('copyEmail');const toast=document.getElementById('toast');copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(copy.dataset.email);toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)}catch{location.href='mailto:'+copy.dataset.email}});

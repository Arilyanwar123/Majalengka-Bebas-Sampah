// Mobile nav toggle
const navToggle=document.querySelector('.nav-toggle');
const siteNav=document.querySelector('.site-nav');
if(navToggle&&siteNav){
  navToggle.addEventListener('click',()=>{
    const isOpen=siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded',String(isOpen));
  });
}

// Footer year
const yearEl=document.getElementById('year');
if(yearEl){yearEl.textContent=String(new Date().getFullYear());}

// Simple animated counters
function animateCount(element, target, suffix){
  if(!element) return;
  const duration=1200; // ms
  const start=0;
  const startTime=performance.now();
  function frame(now){
    const t=Math.min(1,(now-startTime)/duration);
    const val=Math.floor(start+(target-start)*t);
    element.textContent = suffix?`${val} ${suffix}`:String(val);
    if(t<1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

animateCount(document.getElementById('stat-ton'), 185, 'ton');
animateCount(document.getElementById('stat-tps3r'), 42);
animateCount(document.getElementById('stat-bank'), 128);

// Header shadow on scroll
const header=document.querySelector('.site-header');
if(header){
  const setShadow=()=>{
    if(window.scrollY>4){header.classList.add('scrolled');}
    else{header.classList.remove('scrolled');}
  };
  setShadow();
  window.addEventListener('scroll',setShadow,{passive:true});
}

// Theme toggle (light/dark) with localStorage
const THEME_KEY='theme-preference';
function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
}
function getPreferredTheme(){
  const stored=localStorage.getItem(THEME_KEY);
  if(stored) return stored;
  const prefersDark=window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark?'dark':'light';
}
applyTheme(getPreferredTheme());

document.addEventListener('click', (e)=>{
  const btn=e.target.closest('.theme-toggle');
  if(!btn) return;
  const current=document.documentElement.getAttribute('data-theme')||'light';
  const next=current==='dark'?'light':'dark';
  applyTheme(next);
  localStorage.setItem(THEME_KEY,next);
});


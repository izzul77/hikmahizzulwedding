var q=new URLSearchParams(location.search).get('to');if(q)document.getElementById('gst').textContent=q;
var hi=document.getElementById('hv');document.getElementById('ci').src='assets/img/hero.jpg';
var au=new Audio('assets/audio/music.mp3');au.loop=true;au.volume=0;au.preload='auto';
var on=false,mb=document.getElementById('mu'),fd;
function fade(to){clearInterval(fd);fd=setInterval(function(){var v=au.volume+(to>au.volume?.03:-.03);if(Math.abs(v-to)<.03){v=to;clearInterval(fd);if(!to)au.pause()}au.volume=Math.max(0,Math.min(1,v))},80)}
function pl(){au.play().catch(function(){});fade(.6);on=true;mb.classList.add('on')}
function ps(){fade(0);on=false;mb.classList.remove('on')}
mb.onclick=function(){on?ps():pl()};
document.getElementById('op').onclick=function(){document.getElementById('cv').classList.add('open');document.body.classList.remove('lock');scrollTo(0,0);mb.classList.add('show');pl()};
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});
document.querySelectorAll('.rv,.rl,.rr,.rz').forEach(function(el){io.observe(el)});
var T=new Date('2026-12-20T08:00:00+07:00');
function tick(){var t=Math.max(0,T-Date.now()),f=function(i,v){document.getElementById(i).textContent=v};
f('d',Math.floor(t/864e5));f('h',Math.floor(t%864e5/36e5));f('m',Math.floor(t%36e5/6e4));f('s',Math.floor(t%6e4/1e3))}
tick();setInterval(tick,1000);
for(var i=0;i<14;i++){var p=document.createElement('span');p.className='pt';
p.style.cssText='left:'+Math.random()*100+'vw;--x:'+(Math.random()*160-80)+'px;animation-duration:'+(9+Math.random()*9)+'s;animation-delay:'+(-Math.random()*14)+'s;opacity:'+(.3+Math.random()*.35);
document.body.appendChild(p)}
addEventListener('scroll',function(){var y=scrollY;if(y<innerHeight*1.2)hi.style.marginTop=(y*.25)+'px'},{passive:true});
var lb=document.getElementById('lb');
document.querySelectorAll('.gl img').forEach(function(im){im.onclick=function(){lb.querySelector('img').src=im.src;lb.classList.add('on')}});
lb.onclick=function(){lb.classList.remove('on')};

(function(){var b=document.getElementById('bk');for(var i=0;i<16;i++){var s=document.createElement('span'),z=14+Math.random()*34;s.className='bo';
s.style.cssText='left:'+Math.random()*100+'%;width:'+z+'px;height:'+z+'px;--bx:'+(Math.random()*80-40)+'px;animation-duration:'+(8+Math.random()*9)+'s;animation-delay:'+(-Math.random()*14)+'s';b.appendChild(s)}
if(matchMedia('(prefers-reduced-motion:reduce)').matches)hi.pause();
document.getElementById('op').addEventListener('click',function(){hi.play().catch(function(){})})})();

document.querySelectorAll('.cpy').forEach(function(b){var t0=b.textContent;b.onclick=function(){var v=b.getAttribute('data-c');
function ok(){b.textContent='Tersalin ✓';setTimeout(function(){b.textContent=t0},2000)}
function fb(){var a=document.createElement('textarea');a.value=v;a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();try{document.execCommand('copy');ok()}catch(e){}document.body.removeChild(a)}
if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(v).then(ok,fb);else fb()}});

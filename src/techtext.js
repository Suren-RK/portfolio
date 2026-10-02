const section = document.createElement('section');
section.className = 'techtext-section';
section.innerHTML = '<div class="techtext-wrap"><canvas class="tech-text-canvas" aria-label="AI and Data Science"></canvas><div class="techtext-caption">MOVE YOUR CURSOR · EXPLORE THE LETTERS</div></div>';

const mount = () => {
  const ticker = document.querySelector('.ticker');
  if (!ticker || section.isConnected) return;
  ticker.insertAdjacentElement('afterend', section);
  const canvas = section.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  let mouseX = -9999, mouseY = -9999, active = false, t = 0, raf;

  const resize = () => {
    const r = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = r.width * dpr;
    canvas.height = r.height * dpr;
    canvas.style.width = `${r.width}px`;
    canvas.style.height = `${r.height}px`;
    ctx.setTransform(dpr,0,0,dpr,0,0);
  };
  const move = e => { const r=canvas.getBoundingClientRect(); mouseX=e.clientX-r.left; mouseY=e.clientY-r.top; active=true; };
  const leave = () => { active=false; };
  const draw = () => {
    const r=canvas.getBoundingClientRect(), w=r.width, h=r.height;
    ctx.clearRect(0,0,w,h);
    const size=Math.min(150,w*.105);
    ctx.font=`600 ${size}px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace`;
    ctx.textAlign='center'; ctx.textBaseline='middle';
    const text='AI & DATA SCIENCE';
    const chars=[...text], spacing=size*-.035;
    const widths=chars.map(c=>ctx.measureText(c).width+spacing);
    const total=widths.reduce((a,b)=>a+b,0);
    let x=(w-total)/2;
    chars.forEach((char,i)=>{
      const cw=widths[i]-spacing, cx=x+cw/2;
      const d=Math.hypot(mouseX-cx,mouseY-h/2);
      const outline=active?d<Math.max(115,size*.75):((t*55+i*42)%(total+300)<90);
      ctx.save();
      if(outline){
        ctx.strokeStyle='#4da3ff'; ctx.lineWidth=1.5; ctx.setLineDash([4,2]); ctx.strokeText(char,cx,h/2);
        for(let s=0;s<12;s++){ const px=cx+Math.sin(i*19+s*7+t*3)*cw*.5; const py=h/2+Math.cos(i*13+s*11+t*2)*size*.4; ctx.fillStyle='#4da3ff'; ctx.fillRect(px,py,2,2); }
      }else{ctx.fillStyle='#fff';ctx.fillText(char,cx,h/2);}
      ctx.restore(); x+=widths[i];
    });
    t+=.016; raf=requestAnimationFrame(draw);
  };
  resize(); addEventListener('resize',resize); canvas.parentElement.addEventListener('mousemove',move); canvas.parentElement.addEventListener('mouseleave',leave); raf=requestAnimationFrame(draw);
};

if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',mount); else mount();

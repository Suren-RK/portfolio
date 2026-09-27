import "./adaptive-cursor.css";

const cursor=document.createElement("div");
cursor.className="adaptive-cursor";
cursor.dataset.state="core";
cursor.innerHTML='<span class="cursor-core"></span><span class="cursor-ring"></span><span class="cursor-glyph cursor-glyph-core">·</span><span class="cursor-glyph cursor-glyph-text">I</span><span class="cursor-glyph cursor-glyph-link">↗</span><span class="cursor-glyph cursor-glyph-button">&gt;_</span><span class="cursor-glyph cursor-glyph-view">+</span><span class="cursor-glyph cursor-glyph-drag">✦</span><span class="cursor-label"></span>';
document.body.appendChild(cursor);

let x=window.innerWidth/2,y=window.innerHeight/2,sx=x,sy=y;
const move=e=>{x=e.clientX;y=e.clientY};
const stateFor=target=>{
  if(!target) return "core";
  if(target.closest("input,textarea,select,[contenteditable=true]")) return "text";
  if(target.closest("[data-cursor=view],img")) return "view";
  if(target.closest("[data-cursor=button],button,.primary,.hire,.resume,.projectlink,.contactlinks a")) return "button";
  if(target.closest("a")) return "link";
  if(target.closest("[draggable=true]")) return "drag";
  return "core";
};
const updateState=e=>{cursor.dataset.state=stateFor(e.target)};
const animate=()=>{sx+=(x-sx)*.2;sy+=(y-sy)*.2;cursor.style.left=`${sx}px`;cursor.style.top=`${sy}px`;requestAnimationFrame(animate)};
document.addEventListener("mousemove",move,{passive:true});
document.addEventListener("mouseover",updateState,{passive:true});
document.addEventListener("mouseout",updateState,{passive:true});
document.addEventListener("mousedown",()=>cursor.classList.add("cursor-click"));
document.addEventListener("mouseup",()=>cursor.classList.remove("cursor-click"));
requestAnimationFrame(animate);

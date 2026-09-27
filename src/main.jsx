import React, {useEffect} from "react";
import {Mail,ExternalLink,ArrowUpRight,Code2,Download,GitBranch} from "lucide-react";
import {motion} from "framer-motion";
import "./style.css";

const projects=[
{name:"SkillQuest",desc:"A learning-focused web project built while exploring modern frontend development.",tags:["React","JavaScript"],repo:"https://github.com/Suren-RK/Skilllquest"},
{name:"Simple UI",desc:"A collection of frontend UI experiments focused on clean, practical interfaces.",tags:["HTML","CSS","JavaScript"],repo:"https://github.com/Suren-RK/simple-UI"},
{name:"Games",desc:"Interactive web experiments created while learning development fundamentals.",tags:["Web","JavaScript"],repo:"https://github.com/Suren-RK/Games"}];

const skills=[
  "Python","Java","C / C++","JavaScript","React JS","HTML / CSS",
  "MySQL","Git / GitHub"
];

function App(){
useEffect(()=>{
  const cursor=document.querySelector(".adaptive-cursor");
  if(!cursor) return;
  let x=window.innerWidth/2,y=window.innerHeight/2,sx=x,sy=y,raf;
  const move=(e)=>{x=e.clientX;y=e.clientY};
  const updateState=(e)=>{
    const target=e.target?.closest?.("a,button,input,textarea,select,[role='button'],[data-cursor]");
    const state=target?.dataset?.cursor || (target?.matches?.("input,textarea,select") ? "text" : target?.matches?.("button,.primary,.hire,.resume,.projectlink,.contactlinks a") ? "button" : target?.matches?.("a") ? "link" : "core");
    cursor.dataset.state=state;
  };
  const animate=()=>{sx+=(x-sx)*.2;sy+=(y-sy)*.2;cursor.style.left=sx+"px";cursor.style.top=sy+"px";raf=requestAnimationFrame(animate)};
  document.addEventListener("mousemove",move,{passive:true});
  document.addEventListener("mouseover",updateState,{passive:true});
  document.addEventListener("mouseout",updateState,{passive:true});
  const down=()=>cursor.classList.add("cursor-click");
  const up=()=>cursor.classList.remove("cursor-click");
  document.addEventListener("mousedown",down);
  document.addEventListener("mouseup",up);
  raf=requestAnimationFrame(animate);
  return ()=>{cancelAnimationFrame(raf);document.removeEventListener("mousemove",move);document.removeEventListener("mouseover",updateState);document.removeEventListener("mouseout",updateState);document.removeEventListener("mousedown",down);document.removeEventListener("mouseup",up)};
},[]);

return <div id="top" className="site">
<nav className="topbar" aria-label="Main navigation">
  <a className="brand" href="#top" aria-label="Back to top" onClick={(e)=>{e.preventDefault();window.scrollTo({top:0,behavior:"smooth"})}}>SUREN.exe <span>_</span></a>
  <div className="navlinks">
    {["about","skills","projects","experience","leetcode","contact"].map(id=><a key={id} href={"#"+id} onClick={e=>{e.preventDefault();document.getElementById(id)?.scrollIntoView({behavior:"smooth"})}}>{"/"+id.toUpperCase()}</a>)}
  </div>
  <a className="hire" data-cursor="button" href="mailto:surenravi2701@gmail.com?subject=Portfolio%20Contact">HIRE ME <ArrowUpRight size={17}/></a>
</nav>

<main>
<section className="hero">
  <div className="grid-bg"/>
  <div className="adaptive-cursor" data-state="core" aria-hidden="true">
    <span className="cursor-core"/><span className="cursor-ring"/><span className="cursor-glyph cursor-glyph-core">·</span>
    <span className="cursor-glyph cursor-glyph-text">I</span><span className="cursor-glyph cursor-glyph-link">↗</span><span className="cursor-glyph cursor-glyph-button">&gt;_</span><span className="cursor-glyph cursor-glyph-view">+</span><span className="cursor-glyph cursor-glyph-drag">✦</span>
    <span className="cursor-label"/>
  </div>

  <div className="hero-left">
    <div className="status"><i/> SYSTEM STATUS: <b>ONLINE</b></div>
    <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
      <h1>AI &amp; DATA SCIENCE<br/><strong>STUDENT<span>|</span></strong></h1>
      <p className="hero-line">Turning data into insights,<br/>and ideas into impact<span>_</span></p>
      <div className="actions">
        <a className="primary" data-cursor="button" href="#projects" onClick={(e)=>{e.preventDefault();document.querySelector("#projects")?.scrollIntoView({behavior:"smooth"})}}><ArrowUpRight/> VIEW PROJECTS</a>
        <a className="resume" data-cursor="button" href="/Suren-R-Resume.html" target="_blank" rel="noreferrer"><Download/> VIEW RESUME</a>
      </div>
    </motion.div>
    <div className="socials">
      <a href="https://github.com/Suren-RK" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
      <a href="https://www.linkedin.com/in/Suren-Ravi" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
      <a href="https://www.instagram.com/itz.surxn____/" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
      <a href="https://leetcode.com/surenravi/" target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2/></a>
      <span>Follow me<br/>for more updates <ArrowUpRight/></span>
    </div>
  </div>

  <div className="hero-character">
    <img src="/suren-avatar.png" alt="Suren illustrated avatar" data-cursor="view" onError={(e)=>{e.currentTarget.style.display="none";e.currentTarget.parentElement.classList.add("avatar-missing")}}/>
    <div className="blue-block"/>
    <div className="scribble">Better<br/>Code<br/>Bigger<br/>Dreams</div>
  </div>

  <div className="stack-window">
    <div>// TECH STACK <span>— □ ×</span></div>
    {skills.slice(0,10).map(s=><p key={s}><b>&gt;</b> {s}</p>)}
  </div>
  <div className="currently"><span>// CURRENTLY</span><b>Learning React JS</b><i/></div>
</section>

<section className="ticker"><span>/// BUILD</span><span>/// LEARN</span><span>/// AI &amp; DATA SCIENCE</span><span>/// MODERN WEB</span><span>/// OPEN TO BUILD</span></section>

<section id="about" className="section about">
  <div className="avatar-card"><img src="/suren-avatar.png" alt="Suren illustrated avatar" data-cursor="view"/></div>
  <div><p className="eyebrow">01 — WHO AM I?</p><h2>Curious by nature.<br/><em>Builder by choice.</em></h2><p className="copy">I'm Suren R — an Artificial Intelligence &amp; Data Science student who enjoys building practical digital solutions. I work across programming, web development and AI while continuously improving my problem-solving skills.</p><div className="quote">&gt; Always learning, always building, always improving.<br/>&gt; Exploring AI, data, DSA, React and modern web development.</div><div className="badges"><span>📍 INDIA</span><span>🟢 LEARNING &amp; BUILDING</span></div></div>
</section>

<section id="skills" className="skills-section">
  <div className="section-title"><h2>TECH<span>_STACK</span></h2><b>● SYSTEM_OPTIMIZED</b></div>
  <div className="skillgrid">{skills.map((s,i)=>{const type=s==="React JS"?"FRAMEWORK":(["HTML","CSS","JavaScript"].includes(s)?"WEB":"LANGUAGE");return <motion.div whileHover={{y:-6}} className="skill" key={s}><small><span>&gt;_</span> {type}</small><strong>{s}</strong><i>●</i></motion.div>})}</div>
</section>

<section id="projects" className="section projects-section">
  <div className="section-title light"><h2>SELECTED <span>WORK</span></h2><a href="https://github.com/Suren-RK?tab=repositories" target="_blank" rel="noreferrer">VIEW ALL ↗</a></div>
  <div className="projects">{projects.map((p,i)=><motion.article whileHover={{y:-7}} key={p.name}><div className="projecttop"><span>PROJECT_0{i+1}</span><a href={p.repo} target="_blank" rel="noreferrer" aria-label={"Open "+p.name+" repository"}><ArrowUpRight/></a></div><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a className="projectlink" data-cursor="button" href={p.repo} target="_blank" rel="noreferrer">VIEW REPOSITORY <ExternalLink size={14}/></a></motion.article>)}</div>
</section>

<section id="experience" className="section experience">
  <p className="eyebrow">04 — MY JOURNEY</p>
  <h2>LEARNING <em>IN PUBLIC.</em></h2>
  <div className="log">
    <div><b>2026</b><strong>Web Developer Intern</strong><span>MindzPerk Digital Agency — developed websites for clients using HTML and CSS.</span></div>
    <div><b>NOW</b><strong>B.Tech AI &amp; Data Science</strong><span>VSB College of Engineering Technical Campus — 2nd Year, 3rd Semester. Expected graduation: 2029.</span></div>
    <div><b>NOW</b><strong>Learning React JS</strong><span>Building interactive interfaces and strengthening modern frontend development skills.</span></div>
  </div>
</section>

<section id="leetcode" className="leetcode"><div><p className="eyebrow">05 — PROBLEM SOLVING</p><h2>LEETCODE <em>MODE.</em></h2><p>Practicing algorithms and data structures consistently.</p></div><a className="primary" data-cursor="button" href="https://leetcode.com/surenravi/" target="_blank" rel="noreferrer">OPEN PROFILE <ArrowUpRight/></a></section>

<section id="contact" className="contact"><p className="eyebrow">06 — CONTACT</p><h2>HAVE AN IDEA?<br/><em>LET'S BUILD IT.</em></h2><p>Learning, collaborating and building something meaningful — one project at a time.</p><div className="contactlinks"><a data-cursor="button" href="mailto:surenravi2701@gmail.com"><Mail/> EMAIL</a><a data-cursor="button" href="https://www.linkedin.com/in/Suren-Ravi" target="_blank" rel="noreferrer"><ArrowUpRight/> LINKEDIN</a><a data-cursor="button" href="https://leetcode.com/surenravi/" target="_blank" rel="noreferrer"><Code2/> LEETCODE</a><a data-cursor="button" href="https://github.com/Suren-RK" target="_blank" rel="noreferrer"><GitBranch/> GITHUB</a></div></section>
</main>
<footer><span>// BUILD · LEARN · GROW</span><span>AI × DATA × WEB</span><span>SUREN R. © 2026</span></footer>
</div>
}
createRoot(document.getElementById("root")).render(<App/>);
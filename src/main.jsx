import React, {useEffect} from "react";
import {createRoot} from "react-dom/client";
import {Mail,ExternalLink,ArrowUpRight,Code2,Download,GitBranch} from "lucide-react";
import {motion} from "framer-motion";
import "./style.css";

const projects=[
{name:"SkillQuest",desc:"A learning-focused project built while exploring modern web development.",tags:["React","JavaScript"],repo:"https://github.com/Suren-RK/Skilllquest"},
{name:"Simple UI",desc:"Frontend experiments and UI practice focused on clean, usable interfaces.",tags:["HTML","CSS","JavaScript"],repo:"https://github.com/Suren-RK/simple-UI"},
{name:"Games",desc:"Small interactive experiments created while learning development fundamentals.",tags:["Web","JavaScript"],repo:"https://github.com/Suren-RK/Games"}];

const skills=["Python","Java","C / C++","React JS","HTML / CSS","MySQL","PostgreSQL","Pandas","Scikit-learn","XGBoost","Git / GitHub","Data Science"];

function App(){
useEffect(()=>{
  const scanner=document.querySelector(".scanner-cursor");
  let x=0,y=0,sx=0,sy=0;
  const move=(e)=>{x=e.clientX;y=e.clientY};
  const animate=()=>{sx+=(x-sx)*.18;sy+=(y-sy)*.18;if(scanner){scanner.style.left=sx+"px";scanner.style.top=sy+"px"}requestAnimationFrame(animate)};
  const enter=()=>scanner?.classList.add("scanner-hover");
  const leave=()=>scanner?.classList.remove("scanner-hover");
  document.addEventListener("mousemove",move);
  document.querySelectorAll("a,button").forEach(el=>{el.addEventListener("mouseenter",enter);el.addEventListener("mouseleave",leave)});
  requestAnimationFrame(animate);
  return ()=>{document.removeEventListener("mousemove",move);document.querySelectorAll("a,button").forEach(el=>{el.removeEventListener("mouseenter",enter);el.removeEventListener("mouseleave",leave)})};
},[]);

return <div id="top" className="site">
<nav className="topbar">
  <a className="brand" href="#top" aria-label="Back to top">SUREN.exe <span>_</span></a>
  <div className="navlinks">
    <a href="#about">/ABOUT</a><a href="#skills">/SKILLS</a><a href="#projects">/PROJECTS</a><a href="#experience">/EXPERIENCE</a><a href="#leetcode">/LEETCODE</a><a href="#contact">/CONTACT</a>
  </div>
  <a className="hire" href="mailto:surenravi2701@gmail.com?subject=Portfolio%20Contact">HIRE ME <ArrowUpRight size={17}/></a>
</nav>

<main>
<section className="hero">
  <div className="grid-bg"/>
  <div className="scanner-cursor"><i className="scan-corner tl"/><i className="scan-corner tr"/><i className="scan-corner bl"/><i className="scan-corner br"/><span className="scan-core"/></div>

  <div className="hero-left">
    <div className="status"><i/> SYSTEM STATUS: <b>ONLINE</b></div>
    <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
      <h1>AI &amp; DATA SCIENCE<br/><strong>STUDENT<span>|</span></strong></h1>
      <p className="hero-line">Turning data into insights,<br/>and ideas into impact<span>_</span></p>
      <div className="actions">
        <a className="primary" href="#projects"><ArrowUpRight/> VIEW PROJECTS</a>
        <a className="resume" href="/Suren-R-Resume.html" download><Download/> DOWNLOAD RESUME</a>
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
    <img src="/suren-avatar.png" alt="Suren illustrated avatar" onError={(e)=>{e.currentTarget.style.display="none";e.currentTarget.parentElement.classList.add("avatar-missing")}}/>
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
  <div className="avatar-card"><label>AVATAR.PNG</label><img src="/suren-avatar.png" alt="Suren illustrated avatar"/></div>
  <div><p className="eyebrow">01 — WHO AM I?</p><h2>Curious by nature.<br/><em>Builder by choice.</em></h2><p className="copy">I'm Suren R — an AI &amp; Data Science student and an aspiring developer. I turn ideas into clean, practical digital solutions.</p><div className="quote">&gt; Always learning, always building, always improving.<br/>&gt; Exploring AI, data, DSA and modern web development.</div><div className="badges"><span>📍 INDIA</span><span>🟢 LEARNING &amp; BUILDING</span></div></div>
</section>

<section id="skills" className="skills-section">
  <div className="section-title"><h2>TECH<span>_STACK</span></h2><b>● SYSTEM_OPTIMIZED</b></div>
  <div className="skillgrid">{skills.map((s,i)=><motion.div whileHover={{y:-4}} className="skill" key={s}><small>&gt;_ {["LANGUAGE","FRAMEWORK","DATABASE","TOOLS"][i%4]}</small><strong>{s}</strong></motion.div>)}</div>
</section>

<section id="projects" className="section projects-section">
  <div className="section-title light"><h2>SELECTED <span>WORK</span></h2><a href="https://github.com/Suren-RK?tab=repositories" target="_blank" rel="noreferrer">VIEW ALL ↗</a></div>
  <div className="projects">{projects.map((p,i)=><motion.article whileHover={{y:-7}} key={p.name}><div className="projecttop"><span>PROJECT_0{i+1}</span><a href={p.repo} target="_blank" rel="noreferrer" aria-label={"Open "+p.name+" repository"}><ArrowUpRight/></a></div><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a className="projectlink" href={p.repo} target="_blank" rel="noreferrer">VIEW REPOSITORY <ExternalLink size={14}/></a></motion.article>)}</div>
</section>

<section id="experience" className="section experience"><p className="eyebrow">04 — MY JOURNEY</p><h2>LEARNING <em>IN PUBLIC.</em></h2><div className="log"><div><b>2026</b><strong>AI &amp; Data Science</strong><span>Building projects and developing a strong foundation in AI, data and problem solving.</span></div><div><b>NOW</b><strong>Project Building</strong><span>Turning ideas into practical projects while growing as a developer.</span></div></div></section>

<section id="leetcode" className="leetcode"><div><p className="eyebrow">05 — PROBLEM SOLVING</p><h2>LEETCODE <em>MODE.</em></h2><p>Practicing algorithms and data structures consistently.</p></div><a className="primary" href="https://leetcode.com/surenravi/" target="_blank" rel="noreferrer">OPEN PROFILE <ArrowUpRight/></a></section>

<section id="contact" className="contact"><p className="eyebrow">06 — CONTACT</p><h2>HAVE AN IDEA?<br/><em>LET'S BUILD IT.</em></h2><p>Learning, collaborating and building something meaningful — one project at a time.</p><div className="contactlinks"><a href="mailto:surenravi2701@gmail.com"><Mail/> EMAIL</a><a href="https://www.linkedin.com/in/Suren-Ravi" target="_blank" rel="noreferrer"><ArrowUpRight/> LINKEDIN</a><a href="https://leetcode.com/surenravi/" target="_blank" rel="noreferrer"><Code2/> LEETCODE</a><a href="https://github.com/Suren-RK" target="_blank" rel="noreferrer"><GitBranch/> GITHUB</a></div></section>
</main>
<footer><span>// BUILD · LEARN · GROW</span><span>AI × DATA × WEB</span><span>SUREN R. © 2026</span></footer>
</div>
}
createRoot(document.getElementById("root")).render(<App/>);
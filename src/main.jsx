import React from "react";
import {createRoot} from "react-dom/client";
import {Mail,ExternalLink,ArrowUpRight,Code2,Brain,Database,Terminal} from "lucide-react";
import {motion} from "framer-motion";
import "./style.css";

const projects=[
{name:"SkillQuest",desc:"A learning-focused project built while exploring modern web development.",tags:["React","JavaScript"],repo:"https://github.com/Suren-RK/Skilllquest"},
{name:"Simple UI",desc:"Frontend experiments and UI practice focused on clean, usable interfaces.",tags:["HTML","CSS","JavaScript"],repo:"https://github.com/Suren-RK/simple-UI"},
{name:"Games",desc:"Small interactive experiments created while learning development fundamentals.",tags:["Web","JavaScript"],repo:"https://github.com/Suren-RK/Games"}];

const skills=["Python","Java","C","C++","JavaScript","HTML","CSS","React","Tailwind CSS","Git","GitHub","AWS"];

function App(){
return <div>
<nav><a className="logo" href="#">SR<span>.</span></a><div className="navlinks"><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div><a className="navbtn" href="https://github.com/Suren-RK" target="_blank">GitHub <ArrowUpRight size={16}/></a></nav>

<main>
<section className="hero"><div className="orb orb1"/><div className="orb orb2"/>
<motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
<p className="eyebrow">AI & DATA SCIENCE STUDENT</p>
<h1>Building ideas<br/><em>into reality.</em></h1>
<p className="lead">I'm Suren R — a developer in progress, exploring AI, data and modern web development while building things that solve real problems.</p>
<div className="actions"><a className="primary" href="#projects">Explore my work <ArrowUpRight size={18}/></a><a className="secondary" href="https://www.linkedin.com/in/Suren-Ravi" target="_blank">Let's connect</a></div>
</motion.div>
<div className="heroCard"><div className="status"><i/> Available for opportunities</div><div className="codebox"><span>const</span> suren = {"{"}<br/> &nbsp; role: <b>'developer'</b>,<br/> &nbsp; focus: <b>'AI + Web'</b>,<br/> &nbsp; mindset: <b>'build & learn'</b><br/>{"}"};</div></div>
</section>

<section id="about" className="section about"><div><p className="eyebrow">01 — ABOUT</p><h2>Curious by nature.<br/><em>Builder by choice.</em></h2></div><div className="abouttext"><p>I'm currently pursuing Artificial Intelligence & Data Science. I enjoy taking an idea, learning what I need, and turning it into something people can actually use.</p><p>Right now I'm deepening my skills in React, data structures, AI and cloud technologies — one project at a time.</p><div className="miniStats"><div><strong>AI & DS</strong><span>Student</span></div><div><strong>React</strong><span>Learning</span></div><div><strong>LeetCode</strong><span>Practicing</span></div></div></div></section>

<section id="skills" className="section"><p className="eyebrow">02 — TOOLKIT</p><h2>Things I <em>work with.</em></h2><div className="skillgrid">{skills.map((s,i)=><motion.div whileHover={{y:-4}} className="skill" key={s}><span>0{i+1}</span>{s}</motion.div>)}</div></section>

<section id="projects" className="section"><div className="sectionhead"><div><p className="eyebrow">03 — SELECTED WORK</p><h2>Projects that <em>teach me.</em></h2></div><a href="https://github.com/Suren-RK?tab=repositories" target="_blank">View all <ArrowUpRight size={17}/></a></div><div className="projects">{projects.map((p,i)=><motion.article whileHover={{y:-7}} key={p.name}><div className="projecttop"><span>0{i+1}</span><a href={p.repo} target="_blank"><ArrowUpRight size={19}/></a></div><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a className="projectlink" href={p.repo} target="_blank">View repository <ExternalLink size={15}/></a></motion.article>)}</div></section>

<section className="section journey"><div><p className="eyebrow">04 — CURRENTLY</p><h2>Learning.<br/><em>Building. Improving.</em></h2></div><div className="journeygrid"><div><Brain/><h3>Artificial Intelligence</h3><p>Exploring AI concepts and practical applications.</p></div><div><Code2/><h3>Modern Web</h3><p>Building interfaces with React and Tailwind CSS.</p></div><div><Terminal/><h3>DSA & Problem Solving</h3><p>Practicing consistently on LeetCode.</p></div><div><Database/><h3>Data & Cloud</h3><p>Growing my data science and AWS fundamentals.</p></div></div></section>

<section id="contact" className="contact"><p className="eyebrow">05 — CONTACT</p><h2>Have an idea?<br/><em>Let's build it.</em></h2><p>I'm always interested in learning, collaborating and building something meaningful.</p><div className="contactlinks"><a href="mailto:surenravi2701@gmail.com"><Mail/> Email</a><a href="https://www.linkedin.com/in/Suren-Ravi" target="_blank"><ArrowUpRight/> LinkedIn</a><a href="https://leetcode.com/surenravi/" target="_blank"><Code2/> LeetCode</a><a href="https://github.com/Suren-RK" target="_blank"><ArrowUpRight/> GitHub</a></div></section>
</main>
<footer><span>© 2026 Suren R.</span><span>Code today. Build tomorrow.</span></footer>
</div>
}
createRoot(document.getElementById("root")).render(<App/>);
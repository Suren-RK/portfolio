import React, { useEffect, useRef } from "react";

export default function TechText({
  text = "AI & DATA SCIENCE",
  fontWeight = 600,
  fontSize = 150,
  color = "#ffffff",
  accentColor = "#4da3ff",
  reveal = "letter",
  dashLength = 4,
  dashGap = 2,
  specks = 15,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    let mouse = { x: -9999, y: -9999, active: false };
    let pulse = 0;

    const resize = () => {
      const box = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = box.width * dpr;
      canvas.height = box.height * dpr;
      canvas.style.width = `${box.width}px`;
      canvas.style.height = `${box.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const move = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    };
    const leave = () => { mouse.active = false; };

    const draw = () => {
      const r = canvas.getBoundingClientRect();
      const w = r.width;
      const h = r.height;
      ctx.clearRect(0, 0, w, h);
      const size = Math.min(fontSize, w * 0.105);
      ctx.font = `${fontWeight} ${size}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const chars = [...text];
      const spacing = size * -0.035;
      const widths = chars.map(c => ctx.measureText(c).width + spacing);
      const total = widths.reduce((a,b)=>a+b,0);
      let x = (w-total)/2;
      const cy = h/2;

      chars.forEach((char, i) => {
        const cw = widths[i] - spacing;
        const cx = x + cw/2;
        const dist = Math.hypot(mouse.x-cx, mouse.y-cy);
        const active = mouse.active && dist < Math.max(110, size*.75);
        const sweep = !mouse.active && ((pulse*55 + i*45) % (total+300)) < 90;
        const outline = reveal === "letter" ? active || sweep : dist < 160;

        ctx.save();
        ctx.globalAlpha = char === " " ? 0 : 1;
        if (outline) {
          ctx.strokeStyle = accentColor;
          ctx.lineWidth = 1.5;
          ctx.setLineDash([dashLength, dashGap]);
          ctx.strokeText(char, cx, cy);
          for (let s=0; s<specks; s++) {
            const px = cx + (Math.sin(i*19+s*7+pulse*3)*0.5)*(cw+20);
            const py = cy + (Math.cos(i*13+s*11+pulse*2)*0.5)*(size*0.8);
            ctx.fillStyle = accentColor;
            ctx.fillRect(px, py, 2, 2);
          }
        } else {
          ctx.fillStyle = color;
          ctx.fillText(char, cx, cy);
        }
        ctx.restore();
        x += widths[i];
      });
      pulse += 0.016;
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.parentElement.addEventListener("mousemove", move);
    canvas.parentElement.addEventListener("mouseleave", leave);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.parentElement?.removeEventListener("mousemove", move);
      canvas.parentElement?.removeEventListener("mouseleave", leave);
    };
  }, [text, fontWeight, fontSize, color, accentColor, reveal, dashLength, dashGap, specks]);

  return <canvas ref={ref} className="tech-text-canvas" aria-label={text} />;
}

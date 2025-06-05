import { useEffect, useRef, useState } from "react";
import { useTheme } from "../components/ThemeContext";
import "../styles/animations.css";

export default function Landing() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particleCount = 80;
  const particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    radius: Math.random() * 2 + 1,
  }));

  const mouse = { x: -9999, y: -9999 };

  const updateParticles = () => {
    particles.forEach(p => {
      // Movimiento suave
      p.x += p.vx;
      p.y += p.vy;

      // Reacción leve al mouse
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = dx * dx + dy * dy;

      if (dist < 10000) {
        p.vx += dx * 0.00005;
        p.vy += dy * 0.00005;
      }

      // Límite de pantalla
      if (p.x <= 0 || p.x >= width) p.vx *= -1;
      if (p.y <= 0 || p.y >= height) p.vy *= -1;
    });
  };

  let t = 0;
  const fc = 0.05;
  const fm = 0.01;
  const m = 0.6;

  const animate = () => {
    ctx.fillStyle = theme === "dark" ? "#25002d" : "#feffef";
    ctx.fillRect(0, 0, width, height);

    // Dibujar partículas
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = theme === "dark" ? "#ffffff44" : "#00000033";
      ctx.fill();
    });

    // Dibujar onda
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = theme === "dark" ? "#feffef" : "#000";
    ctx.shadowColor = theme === "dark" ? "#fff" : "#000";
    ctx.shadowBlur = 8;

    const centerY = height / 2;
    for (let x = 0; x < width; x++) {
      const time = t + x * 0.01;
      const modulator = 1 + m * Math.cos(2 * Math.PI * fm * time);
      const carrier = Math.cos(2 * Math.PI * fc * time);
      const y = centerY + modulator * carrier * 100;
      ctx.lineTo(x, y);
    }
    ctx.stroke();

    t += 0.1;
    updateParticles();
    requestAnimationFrame(animate);
  };

  animate();

  const handleResize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  const handleMouseMove = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  window.addEventListener("resize", handleResize);
  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, [theme]);

  return (
    <div className="landing-container">
      <canvas ref={canvasRef} className="wave-canvas" />
      <div className="content">
        <h1>Onda de frecuencia AM</h1>
      </div>
    </div>
    
  );
}



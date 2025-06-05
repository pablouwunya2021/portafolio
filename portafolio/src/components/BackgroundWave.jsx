// src/components/BackgroundWave.jsx
import React, { useEffect, useRef } from "react";

export default function BackgroundWave({ theme }) {
  const canvasRef = useRef(null);
  const tRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const fc = 0.05, fm = 0.01, m = 0.6;

    function draw() {
      ctx.fillStyle = theme === "dark" ? "#121212" : "#f9f9f9";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      const centerY = canvas.height / 2;
      ctx.lineWidth = 2;
      ctx.strokeStyle = theme === "dark" ? "#00ffff" : "#0077ff";

      ctx.shadowColor = theme === "dark" ? "#fff" : "#000";
      ctx.shadowBlur = 8;

      for (let x = 0; x < canvas.width; x++) {
        const time = tRef.current + x * 0.01;
        const modulator = 1 + m * Math.cos(2 * Math.PI * fm * time);
        const carrier = Math.cos(2 * Math.PI * fc * time);
        const y = centerY + modulator * carrier * 100;
        ctx.lineTo(x, y);
      }

      ctx.stroke();

      tRef.current += 0.3;
      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1000,
        pointerEvents: "none",
      }}
    />
  );
}

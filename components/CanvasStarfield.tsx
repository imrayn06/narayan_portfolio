"use client";

import React, { useEffect, useRef } from "react";

const STAR_COUNT = 300;
const REPEL_RADIUS = 150;
const REPEL_SPEED = 1.5;
const RETURN_SPEED = 0.05;
const FRICTION = 0.85;

interface Star {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

export default function CanvasStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resize);

    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
      baseX: Math.random() * width,
      baseY: Math.random() * height,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      r: Math.random() * 1.5 + 0.5,
      baseOpacity: Math.random() * 0.5 + 0.3,
      twinkleSpeed: Math.random() * 0.03 + 0.01,
      twinklePhase: Math.random() * Math.PI * 2,
    }));

    // Initialize current positions
    stars.forEach(s => {
      s.x = s.baseX;
      s.y = s.baseY;
    });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        // Calculate distance from mouse
        const dx = mouse.x - star.x;
        const dy = mouse.y - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Repel from mouse
        if (dist < REPEL_RADIUS) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
          const angle = Math.atan2(dy, dx);
          star.vx -= Math.cos(angle) * force * REPEL_SPEED;
          star.vy -= Math.sin(angle) * force * REPEL_SPEED;
        }

        // Return to base position
        star.vx += (star.baseX - star.x) * RETURN_SPEED;
        star.vy += (star.baseY - star.y) * RETURN_SPEED;

        // Apply friction
        star.vx *= FRICTION;
        star.vy *= FRICTION;

        // Update position
        star.x += star.vx;
        star.y += star.vy;

        // Twinkle effect
        star.twinklePhase += star.twinkleSpeed;
        const currentOpacity = star.baseOpacity + Math.sin(star.twinklePhase) * 0.3;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, currentOpacity)})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}

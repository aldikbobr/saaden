import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  type: "bubble" | "star";
  rotation: number;
  rotationSpeed: number;
  twinkle: number;
  twinkleSpeed: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.min(60, Math.floor(window.innerWidth / 25));
      for (let i = 0; i < count; i++) {
        const isStar = Math.random() > 0.6;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: isStar ? Math.random() * 6 + 3 : Math.random() * 12 + 4,
          speedY: isStar ? Math.random() * 0.4 + 0.15 : -(Math.random() * 0.5 + 0.2),
          speedX: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.4 + 0.15,
          type: isStar ? "star" : "bubble",
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          twinkle: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
        });
      }
    };

    const drawStar = (
      ctx: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number
    ) => {
      let rot = (Math.PI / 2) * 3;
      const step = Math.PI / spikes;
      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        ctx.lineTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
        rot += step;
        ctx.lineTo(cx + Math.cos(rot) * innerRadius, cy + Math.sin(rot) * innerRadius);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;
        p.twinkle += p.twinkleSpeed;

        const twinkleOpacity = p.opacity * (0.5 + Math.sin(p.twinkle) * 0.5);

        if (p.type === "bubble") {
          // Draw semi-transparent white bubble
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${twinkleOpacity * 0.4})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(255, 255, 255, ${twinkleOpacity * 0.6})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          // Highlight
          ctx.beginPath();
          ctx.arc(
            p.x - p.size * 0.3,
            p.y - p.size * 0.3,
            p.size * 0.2,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = `rgba(255, 255, 255, ${twinkleOpacity * 0.5})`;
          ctx.fill();
        } else {
          // Draw white star with gold tint
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          drawStar(ctx, 0, 0, 4, p.size, p.size * 0.4);
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${twinkleOpacity})`);
          gradient.addColorStop(0.5, `rgba(220, 192, 137, ${twinkleOpacity * 0.5})`);
          gradient.addColorStop(1, `rgba(200, 169, 106, 0)`);
          ctx.fillStyle = gradient;
          ctx.fill();
          ctx.restore();
        }

        // Reset position
        if (p.type === "bubble" && p.y < -p.size) {
          p.y = canvas.height + p.size;
          p.x = Math.random() * canvas.width;
        }
        if (p.type === "star" && p.y > canvas.height + p.size) {
          p.y = -p.size;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -p.size) p.x = canvas.width + p.size;
        if (p.x > canvas.width + p.size) p.x = -p.size;
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    const handleResize = () => {
      resize();
      createParticles();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
}

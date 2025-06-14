"use client";

import { useEffect, useRef } from "react";

class Particle {
  hue!: number;
  alpha!: number;
  size!: number;
  x!: number;
  y!: number;
  velocity!: number;
  changed!: boolean | null;
  changedFrame!: number;
  maxChangedFrames!: number;

  constructor(
    private ctx: CanvasRenderingContext2D,
    private hueRef: React.MutableRefObject<number>,
    private pointRef: React.MutableRefObject<{ x: number; y: number }>,
    private width: number,
    private height: number
  ) {
    this.init();
  }

  init() {
    this.hue = this.hueRef.current;
    this.alpha = 0;
    this.size = Math.random() * 4 + 1;
    this.x = Math.random() * this.width;
    this.y = Math.random() * this.height;
    this.velocity = this.size * 0.5;
    this.changed = null;
    this.changedFrame = 0;
    this.maxChangedFrames = 50;
  }

  draw() {
    const ctx = this.ctx;
    if (!ctx) return;

    ctx.strokeStyle = `hsla(${this.hue}, 100%, 50%, ${this.alpha})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();

    this.update();
  }

  update() {
    if (this.changed) {
      this.alpha *= 0.92;
      this.size += 2;
      this.changedFrame++;
      if (this.changedFrame > this.maxChangedFrames) {
        this.reset();
      }
    } else if (
      this.distance(this.pointRef.current.x, this.pointRef.current.y) < 50
    ) {
      this.changed = true;
    } else {
      const dx = this.pointRef.current.x - this.x;
      const dy = this.pointRef.current.y - this.y;
      const angle = Math.atan2(dy, dx);

      this.alpha += 0.01;
      this.x += this.velocity * Math.cos(angle);
      this.y += this.velocity * Math.sin(angle);
      this.velocity += 0.02;
    }
  }

  reset() {
    this.init();
  }

  distance(x: number, y: number) {
    return Math.hypot(x - this.x, y - this.y);
  }
}

export default function AnimationBalls() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const point = useRef({ x: 0, y: 0 });
  const hue = useRef(0);
  const max = 200;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    point.current = { x: width / 2, y: height / 2 };

    const leftImg = new Image();
    const rightImg = new Image();
    leftImg.src = "/light-left-v1.svg";
    rightImg.src = "/light-right-v1.svg";

    let imagesLoaded = 0;
    const onImageLoad = () => {
      imagesLoaded++;
      if (imagesLoaded === 2) {
        animate();
      }
    };

    leftImg.onload = onImageLoad;
    rightImg.onload = onImageLoad;

    for (let i = 0; i < max; i++) {
      setTimeout(() => {
        const p = new Particle(ctx, hue, point, width, height);
        particles.current.push(p);
      }, i * 10);
    }

    function animate() {
      if (ctx) {
        ctx.clearRect(0, 0, width, height);

        ctx.drawImage(leftImg, 0, 0);
        ctx.drawImage(rightImg, width - rightImg.width, 0);

        ctx.fillStyle = "rgba(0,0,0,0.2)";
        ctx.fillRect(0, 0, width, height);
      }

      particles.current.forEach((p) => p.draw());
      hue.current += 0.3;

      requestAnimationFrame(animate);
    }

    function onMove(e: MouseEvent | TouchEvent) {
      if ("touches" in e) {
        point.current.x = e.touches[0].clientX;
        point.current.y = e.touches[0].clientY;
      } else {
        point.current.x = e.clientX;
        point.current.y = e.clientY;
      }
    }

    const resetPoint = () => {
      point.current = { x: width / 2, y: height / 2 };
    };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      resetPoint();
    };

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("touchmove", onMove);
    canvas.addEventListener("mouseleave", resetPoint);
    window.addEventListener("resize", resize);

    return () => {
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("touchmove", onMove);
      canvas.removeEventListener("mouseleave", resetPoint);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </>
  );
}

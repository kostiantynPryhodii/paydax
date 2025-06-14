"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { useRef } from "react";

export default function Video() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [0.7, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());

  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="flex items-center justify-center mt-[60px] min-h-[750px] relative z-10 w-full rounded-[15px] border-[5px] border-[var(--Neutral-Dark)] bg-[var(--Black)]"
    >
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48 12C67.8823 12 84 28.1177 84 48C84 67.8823 67.8823 84 48 84C28.1177 84 12 67.8823 12 48C12 28.1177 28.1177 12 48 12ZM37.7832 28.9902C36.9835 28.5459 36.0003 29.1243 36 30.0391V65.9609C36.0003 66.8757 36.9835 67.4541 37.7832 67.0098L70.4268 48.874C71.1122 48.493 71.1122 47.507 70.4268 47.126L37.7832 28.9902Z"
          fill="#71727A"
        />
      </svg>
    </motion.div>
  );
}

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
  animation: boolean;
};

export default function Cursor({ animation, children }: Props) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setMousePos({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 20 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    let dx = mousePos.x - centerX;
    let dy = mousePos.y - centerY;

    dx = Math.max(-20, Math.min(20, dx));
    dy = Math.max(-20, Math.min(20, dy));

    x.set(dx);
    y.set(dy);
  }, [mousePos.x, mousePos.y, x, y]);

  return (
    <motion.span
      style={{
        x: animation ? springX : "",
        y: animation ? springY : "",
      }}
      className="inline-flex absolute right-[-160px] top-1/2"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_512_1513)">
          <path
            d="M23.2505 11.3982C23.2482 11.7151 23.1441 12.0229 22.9535 12.2761C22.7629 12.5293 22.4959 12.7145 22.192 12.8044L22.1733 12.81L14.8608 14.8575L12.8133 22.17L12.8077 22.1888C12.7176 22.4926 12.5324 22.7595 12.2792 22.9501C12.026 23.1406 11.7183 23.2448 11.4014 23.2472H11.3733C11.0625 23.2501 10.7588 23.1551 10.5052 22.9755C10.2515 22.7959 10.0609 22.541 9.96046 22.2469L3.84421 5.75724C3.84224 5.75238 3.84067 5.74736 3.83953 5.74224C3.74812 5.47677 3.73306 5.19097 3.79605 4.91737C3.85904 4.64376 3.99756 4.39333 4.19585 4.19455C4.39413 3.99578 4.64423 3.85664 4.91768 3.79298C5.19113 3.72931 5.47696 3.74367 5.74265 3.83442L5.75765 3.83911L22.2502 9.95724C22.5488 10.0593 22.8069 10.2542 22.9869 10.5135C23.1669 10.7727 23.2592 11.0827 23.2505 11.3982Z"
            fill="#95A906"
          />
        </g>
        <defs>
          <clipPath id="clip0_512_1513">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="[font-family:var(--font-base)] py-2 px-4 rounded-[40px] tracking-normal bg-[var(--Apple-Green)] text-[24px] not-italic font-normal text-[var(--White)] leading-normal">
        {children}
      </span>
    </motion.span>
  );
}

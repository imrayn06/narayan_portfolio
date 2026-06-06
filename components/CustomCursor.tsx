"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useSpring(mouseX, { damping: 25, stiffness: 400, mass: 0.5 });
  const cursorY = useSpring(mouseY, { damping: 25, stiffness: 400, mass: 0.5 });

  useEffect(() => {
    const IGNORED_TAGS = new Set(['HTML', 'BODY', 'MAIN', 'FOOTER', 'HEADER']);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const elem = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      if (!elem) {
        setIsHovered(false);
        return;
      }

      const tag = elem.tagName;
      // Glow if the element is NOT a bare container (body/html/section/div with no direct text)
      const isInteractive =
        !IGNORED_TAGS.has(tag) ||
        elem.matches('a, button, input, textarea, select, label, img, svg, [role], p, h1, h2, h3, h4, h5, h6, span');

      // Also glow if the element itself has a text node child
      const hasDirectText = Array.from(elem.childNodes).some(
        (n) => n.nodeType === Node.TEXT_NODE && n.textContent?.trim()
      );

      // Walk up to see if we are inside an interactive/content element
      const insideContent = !!elem.closest(
        'a, button, input, textarea, select, label, img, svg, p, h1, h2, h3, h4, h5, h6, span, li, [role="button"], article, section, .card, [data-hover]'
      );

      setIsHovered(isInteractive || hasDirectText || insideContent);
    };

    const handleMouseLeave = () => setIsHovered(false);
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);


  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 rounded-full z-[9999] mix-blend-difference flex items-center justify-center overflow-hidden"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovered ? 120 : 30,
        height: isHovered ? 120 : 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        opacity: 1,
        boxShadow: isHovered ? "0 0 30px 15px rgba(255,255,255,0.7)" : "0 0 0px 0px rgba(255,255,255,0)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}

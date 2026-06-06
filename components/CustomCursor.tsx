"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchVisible, setTouchVisible] = useState(false);

  const cursorX = useSpring(mouseX, { damping: 22, stiffness: 380, mass: 0.4 });
  const cursorY = useSpring(mouseY, { damping: 22, stiffness: 380, mass: 0.4 });

  useEffect(() => {
    /* ── Detect mobile / touch device ── */
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const IGNORED_TAGS = new Set(["HTML", "BODY", "MAIN", "FOOTER", "HEADER"]);

    /* ── Helpers ── */
    const detectHover = (x: number, y: number) => {
      const elem = document.elementFromPoint(x, y) as HTMLElement | null;
      if (!elem) { setIsHovered(false); return; }

      const tag = elem.tagName;
      const isInteractive =
        !IGNORED_TAGS.has(tag) ||
        elem.matches("a, button, input, textarea, select, label, img, svg, [role], p, h1, h2, h3, h4, h5, h6, span");

      const hasDirectText = Array.from(elem.childNodes).some(
        (n) => n.nodeType === Node.TEXT_NODE && n.textContent?.trim()
      );

      const insideContent = !!elem.closest(
        'a, button, input, textarea, select, label, img, svg, p, h1, h2, h3, h4, h5, h6, span, li, [role="button"], article, section, .card, [data-hover]'
      );

      setIsHovered(isInteractive || hasDirectText || insideContent);
    };

    /* ── Mouse (desktop) ── */
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      detectHover(e.clientX, e.clientY);
    };
    const handleMouseLeave = () => { setIsHovered(false); mouseX.set(-200); mouseY.set(-200); };
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();

    /* ── Touch (mobile) ── */
    let touchTimeout: ReturnType<typeof setTimeout>;
    const handleTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      mouseX.set(t.clientX);
      mouseY.set(t.clientY);
      setTouchVisible(true);
      clearTimeout(touchTimeout);
      touchTimeout = setTimeout(() => setTouchVisible(false), 600);
    };
    const handleTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      mouseX.set(t.clientX);
      mouseY.set(t.clientY);
      setTouchVisible(true);
      setIsHovered(true);
      clearTimeout(touchTimeout);
      touchTimeout = setTimeout(() => { setIsHovered(false); setTouchVisible(false); }, 500);
    };
    const handleTouchEnd = () => {
      clearTimeout(touchTimeout);
      touchTimeout = setTimeout(() => { setIsHovered(false); setTouchVisible(false); }, 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      clearTimeout(touchTimeout);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Don't render on true mobile where no touch activity yet */
  if (isMobile && !touchVisible && !isHovered) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 rounded-full z-[9999] mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovered ? (isMobile ? 60 : 100) : isMobile ? 20 : 26,
        height: isHovered ? (isMobile ? 60 : 100) : isMobile ? 20 : 26,
        backgroundColor: "rgba(255, 255, 255, 1)",
        opacity: isMobile ? (touchVisible ? 1 : 0) : 1,
        boxShadow: isHovered
          ? "0 0 28px 14px rgba(255,255,255,0.65)"
          : "0 0 0px 0px rgba(255,255,255,0)",
      }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    />
  );
}

"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useSpring, useScroll } from "framer-motion";

export default function ScrollUI() {
  const [visible, setVisible] = useState(false);

  // Scroll progress (0 → 1)
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* ── Scroll progress bar (right edge) ──────────────────────── */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          top: '2vh',
          right: '5px',
          width: "3px",
          height: "96vh",
          zIndex: 9999,
          background: "rgba(0,245,255,0.08)",
          pointerEvents: "none",
          borderRadius: '10px'
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            scaleY,
            originY: 0,
            height: "100%",
            background: "linear-gradient(180deg, #00f5ff 0%, #bf00ff 100%)",
            boxShadow: "0 0 8px 2px rgba(0,245,255,0.7), 0 0 18px 4px rgba(191,0,255,0.4)",
            borderRadius: "0 0 2px 2px",
          }}
        />
      </div>

      {/* ── Scroll-to-top button ─────────────────────────────────────── */}
      <AnimatePresence>
        {visible && (
          <motion.div
            key="scroll-top-wrapper"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            style={{
              position: "fixed",
              bottom: "28px",
              right: "35px",
              zIndex: 9999,
              width: "40px",
              height: "40px",
            }}
          >
            {/* ① Spinning conic-gradient border ring (CSS class) */}
            <span className="scroll-btn-ring" aria-hidden />

            {/* ③ The actual clickable button */}
            <motion.button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(8, 4, 20, 0.9)",
                border: "none",
                cursor: "pointer",
                outline: "none",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Gradient up-chevron */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#chevron-grad)"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ display: "block" }}
              >
                <defs>
                  <linearGradient id="chevron-grad" x1="0" y1="24" x2="0" y2="0">
                    <stop offset="0%" stopColor="#bf00ff" />
                    <stop offset="100%" stopColor="#00f5ff" />
                  </linearGradient>
                </defs>
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
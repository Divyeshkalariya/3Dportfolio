"use client";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080710]"
        >
          {/* Ambient organic background glow */}
          <div className="absolute w-[450px] h-[450px] rounded-full blur-[100px] bg-gradient-to-tr from-[#0ce6f2]/10 via-[#8b5cf6]/8 to-transparent opacity-70 pointer-events-none" />

          {/* Frosted Glass Loading Panel */}
          <div className="glass w-56 h-56 rounded-3xl flex flex-col items-center justify-center relative border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Spinning Ring */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg className="absolute w-full h-full animate-[spin_2s_linear_infinite]" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="loader-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ce6f2" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="url(#loader-grad)"
                  strokeWidth="2"
                  strokeDasharray="180 80"
                  strokeLinecap="round"
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(12, 230, 242, 0.3))",
                  }}
                />
              </svg>

              {/* Pulsing Core */}
              <div
                className="w-10 h-10 rounded-full border border-white/10 animate-pulse flex items-center justify-center"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="w-3.5 h-3.5 rounded-full bg-[#0ce6f2]" style={{ boxShadow: "0 0 12px #0ce6f2" }} />
              </div>
            </div>

            <p className="font-space text-[10px] tracking-[5px] text-white/80 mt-5 uppercase">
              Loading
            </p>
          </div>

          {/* Loading details below card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 text-center"
          >
            {/* Progress bar */}
            <div className="w-56 h-[2px] bg-white/5 rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #0ce6f2, #8b5cf6)",
                  boxShadow: "0 0 8px rgba(12, 230, 242, 0.4)",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

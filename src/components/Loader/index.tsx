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
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020008]"
        >
          {/* Scan lines overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,245,255,0.02) 2px, rgba(0,245,255,0.02) 4px)",
            }}
          />

          {/* Futuristic Concentric Spinner (SVG & CSS) */}
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Outer Cyan Ring */}
            <svg className="absolute w-40 h-40 animate-[spin_3s_linear_infinite]" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#00f5ff"
                strokeWidth="1.5"
                strokeDasharray="200 80"
                strokeLinecap="round"
                style={{
                  filter: "drop-shadow(0 0 8px #00f5ff)",
                }}
              />
            </svg>

            {/* Middle Purple Ring */}
            <svg className="absolute w-32 h-32 animate-[spin_2s_linear_infinite_reverse]" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#bf00ff"
                strokeWidth="1.5"
                strokeDasharray="140 60"
                strokeLinecap="round"
                style={{
                  filter: "drop-shadow(0 0 8px #bf00ff)",
                }}
              />
            </svg>

            {/* Inner Pink Sphere (pulsing) */}
            <div
              className="w-12 h-12 rounded-full border border-[#ff0080]/30 animate-pulse flex items-center justify-center"
              style={{
                background: "rgba(255, 0, 128, 0.1)",
                boxShadow: "0 0 20px rgba(255, 0, 128, 0.4)",
              }}
            >
              <div className="w-4 h-4 rounded-full bg-[#ff0080]" style={{ boxShadow: "0 0 10px #ff0080" }} />
            </div>
          </div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-center"
          >
            <p className="font-orbitron text-xs tracking-[6px] text-[#00f5ff] mb-4 uppercase">
              Initializing
            </p>

            {/* Dots */}
            <div className="flex gap-3 justify-center">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="loader-dot"
                  style={{ animationDelay: `${i * 0.14}s` }}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-6 w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #00f5ff, #bf00ff, #ff0080)",
                  boxShadow: "0 0 10px #00f5ff",
                }}
              />
            </div>
          </motion.div>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#00f5ff]/60" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#00f5ff]/60" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#00f5ff]/60" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#00f5ff]/60" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

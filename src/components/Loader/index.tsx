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
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAFAFA]"
        >
          {/* Ambient organic background glow */}
          <div className="absolute w-[450px] h-[450px] rounded-full blur-[100px] bg-gradient-to-tr from-[#2563EB]/08 via-[#6366F1]/06 to-transparent opacity-70 pointer-events-none" />

          {/* Frosted Glass Loading Panel */}
          <div className="w-56 h-56 rounded-3xl flex flex-col relative bg-white border border-[#E5E7EB] shadow-lg">
            <div className="w-full h-full flex flex-col items-center justify-center">
              {/* Spinning Ring */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="absolute w-full h-full animate-[spin_2s_linear_infinite]" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="loader-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#6366F1" />
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
                      filter: "drop-shadow(0 0 6px rgba(37, 99, 235, 0.25))",
                    }}
                  />
                </svg>

                {/* Pulsing Core */}
                <div
                  className="w-10 h-10 rounded-full border border-[#E5E7EB] animate-pulse flex items-center justify-center"
                  style={{
                    background: "rgba(37, 99, 235, 0.05)",
                    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.8)",
                  }}
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-[#2563EB]" style={{ boxShadow: "0 0 12px rgba(37, 99, 235, 0.5)" }} />
                </div>
              </div>

              <p className="font-space text-[10px] tracking-[5px] text-[#6B7280] mt-5 uppercase">
                Loading
              </p>
            </div>
          </div>

          {/* Loading details below card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 text-center"
          >
            {/* Progress bar */}
            <div className="w-56 h-[2px] bg-[#E5E7EB] rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #2563EB, #6366F1)",
                  boxShadow: "0 0 8px rgba(37, 99, 235, 0.4)",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

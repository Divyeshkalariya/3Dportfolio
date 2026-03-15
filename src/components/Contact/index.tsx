"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "divyesh.patel@example.com",
    color: "#00f5ff",
    href: "mailto:divyesh.patel@example.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/divyeshpatel",
    color: "#bf00ff",
    href: "https://github.com/divyeshpatel",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/divyeshpatel",
    color: "#ff0080",
    href: "https://linkedin.com/in/divyeshpatel",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "India",
    color: "#00ff88",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 2000));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-wrapper grid-bg">
      {/* BG orbs */}
      <div
        className="orb w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #00f5ff, transparent)" }}
      />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="section-header-divider">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#00f5ff]/50" />
            <HiSparkles className="text-[#00f5ff]" size={18} />
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#00f5ff]/50" />
          </div>
          <p className="font-inter text-white/40 text-sm mt-4 max-w-md mx-auto">
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="mb-7">
              <h3 className="font-orbitron text-lg font-bold text-white mb-3">
                Let&apos;s Build Together
              </h3>
              <p className="font-inter text-white/50 text-sm leading-relaxed">
                I&apos;m currently open to new opportunities. Whether you have a project, a question,
                or just want to say hi — my inbox is always open.
              </p>
            </div>

            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 group cursor-pointer transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}08, rgba(10,6,25,0.7))`,
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      boxShadow: `0 0 15px ${item.color}20`,
                    }}
                  >
                    <Icon size={16} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p
                      className="font-orbitron text-[11px] tracking-[2px] uppercase mb-0.5"
                      style={{ color: item.color }}
                    >
                      {item.label}
                    </p>
                    <p className="font-inter text-white/60 text-sm group-hover:text-white/80 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-strong rounded-2xl p-6 lg:p-8 relative overflow-hidden"
              style={{
                border: "1px solid rgba(0,245,255,0.15)",
                background: "linear-gradient(135deg, rgba(0,245,255,0.03), rgba(10,6,25,0.95))",
              }}
            >
              {/* Top glow bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(90deg, transparent, #00f5ff, #bf00ff, transparent)" }}
              />

              <h3 className="font-orbitron text-base font-semibold text-white mb-6 tracking-wider">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="font-space text-xs text-white/40 tracking-[2px] uppercase mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Divyesh Patel"
                    className="neon-input w-full px-4 py-3 rounded-xl font-space text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-space text-xs text-white/40 tracking-[2px] uppercase mb-2 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="neon-input w-full px-4 py-3 rounded-xl font-space text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="font-space text-xs text-white/40 tracking-[2px] uppercase mb-2 block">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="neon-input w-full px-4 py-3 rounded-xl font-space text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  whileHover={!sending && !sent ? { scale: 1.02 } : {}}
                  whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                  className="w-full py-4 rounded-xl font-orbitron text-sm font-semibold tracking-wider uppercase transition-all duration-300 relative overflow-hidden"
                  style={{
                    background: sent
                      ? "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,255,136,0.1))"
                      : "linear-gradient(135deg, rgba(0,245,255,0.2), rgba(191,0,255,0.15))",
                    border: sent
                      ? "1px solid rgba(0,255,136,0.4)"
                      : "1px solid rgba(0,245,255,0.4)",
                    color: sent ? "#00ff88" : "#00f5ff",
                    boxShadow: sent
                      ? "0 0 30px rgba(0,255,136,0.3)"
                      : "0 0 30px rgba(0,245,255,0.2)",
                  }}
                >
                  {sending ? (
                    <span className="flex items-center justify-center gap-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-[#00f5ff]/30 border-t-[#00f5ff] rounded-full"
                      />
                      Transmitting...
                    </span>
                  ) : sent ? (
                    "Message Sent! ✓"
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <FaPaperPlane size={14} />
                      Send Message
                    </span>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

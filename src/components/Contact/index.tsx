"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "divyeshkalariya26@gmail.com",
    color: "#0ce6f2",
    href: "mailto:divyeshkalariya26@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Divyeshkalariya",
    color: "#8b5cf6",
    href: "https://github.com/Divyeshkalariya?tab=repositories",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/divyesh-kalariya-579a16257",
    color: "#f43f5e",
    href: "https://www.linkedin.com/in/divyesh-kalariya-579a16257",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Rajkot, Gujarat",
    color: "#10b981",
    href: null,
  },
];

export default function Contact() {

  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to send email");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper grid-bg">
      {/* BG orbs */}
      <div
        className="orb w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #0ce6f2, transparent)" }}
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <p className="section-subtitle font-space font-semibold text-white/40">Get In Touch</p>
          <h2 className="section-title">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="section-header-divider">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#0ce6f2]/50" />
            <HiSparkles className="text-[#0ce6f2]" size={18} />
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#0ce6f2]/50" />
          </div>
          <p className="font-inter text-white/45 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Contact Info */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-7"
            >
              <h3 className="font-space text-lg font-bold text-white mb-3">
                Let&apos;s Build Together
              </h3>
              <p className="font-inter text-white/50 text-sm leading-relaxed">
                I&apos;m currently open to new opportunities. Whether you have a project, a question,
                or just want to say hi — my inbox is always open.
              </p>
            </motion.div>

            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1, type: "spring", stiffness: 100 }}
                  className="flex items-center gap-4.5 glass rounded-2xl p-4.5 border border-white/8 group cursor-pointer transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: `${item.color}10`,
                      border: `1px solid ${item.color}25`,
                    }}
                  >
                    <Icon size={16} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p
                      className="font-space text-[9px] tracking-[2.5px] font-bold uppercase mb-0.5"
                      style={{ color: item.color }}
                    >
                      {item.label}
                    </p>
                    <p className="font-space text-white/70 text-sm font-semibold tracking-wide transition-colors group-hover:text-white">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              );

              const isMailto = item?.href?.startsWith("mailto:");
              
              return item.href ? (
                <a 
                  key={item.label} 
                  href={item.href} 
                  target={isMailto ? undefined : "_blank"} 
                  rel={isMailto ? undefined : "noopener noreferrer"} 
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass rounded-3xl p-7 lg:p-9 border border-white/8 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <h3 className="font-space text-base font-bold text-white mb-6 tracking-widest uppercase">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="font-space text-[10px] text-white/40 tracking-[2px] font-semibold uppercase mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Divyesh Patel"
                    className="neon-input w-full px-4.5 py-3 rounded-2xl font-space text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-space text-[10px] text-white/40 tracking-[2px] font-semibold uppercase mb-2 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="neon-input w-full px-4.5 py-3 rounded-2xl font-space text-sm"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="font-space text-[10px] text-white/40 tracking-[2px] font-semibold uppercase mb-2 block">
                    Mobile Number <span className="text-white/20 lowercase font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-mobile"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="neon-input w-full px-4.5 py-3 rounded-2xl font-space text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="font-space text-[10px] text-white/40 tracking-[2px] font-semibold uppercase mb-2 block">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="neon-input w-full px-4.5 py-3 rounded-2xl font-space text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  whileHover={!sending && !sent ? { scale: 1.02 } : {}}
                  whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                  className={`w-full py-4 font-space text-xs tracking-widest font-bold uppercase transition-all duration-300 relative overflow-hidden cursor-pointer ${
                    sent 
                      ? "bg-gradient-to-tr from-[#10b981]/30 to-[#10b981]/15 text-[#10b981] border border-[#10b981]/40 shadow-[0_8px_24px_rgba(16,185,129,0.2)] rounded-full" 
                      : "btn-neon btn-neon-primary"
                  }`}
                >
                  {sending ? (
                    <span className="flex items-center justify-center gap-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4.5 h-4.5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Transmitting...
                    </span>
                  ) : sent ? (
                    "Message Sent! ✓"
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <FaPaperPlane size={11} className="text-white" />
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

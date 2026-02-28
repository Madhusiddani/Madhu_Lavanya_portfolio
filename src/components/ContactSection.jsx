import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const CONTACT_INFO = [
    { id: 'email', icon: HiMail, text: "madhusiddani29@gmail.com", href: "mailto:madhusiddani29@gmail.com" },
    { id: 'phone', icon: HiPhone, text: "+91 9963256199", href: "tel:+919963256199" },
    { id: 'linkedin', icon: FaLinkedin, text: "linkedin.com/in/MadhuSiddani", href: "https://linkedin.com/in/MadhuSiddani", target: "_blank" },
    { id: 'github', icon: FaGithub, text: "github.com/MadhuSiddani", href: "https://github.com/MadhuSiddani", target: "_blank" },
    { id: 'location', icon: HiLocationMarker, text: "Mandapeta, Andhra Pradesh", href: null }
]

export default function ContactSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 4000)
        e.target.reset()
    }

    return (
        <section
            id="contact"
            ref={ref}
            style={{
                position: 'relative',
                zIndex: 1,
                padding: '96px 0',
                maxWidth: 1100,
                margin: '0 auto',
                paddingLeft: 24,
                paddingRight: 24,
            }}
        >
            {/* Background glow */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: 800,
                    height: 800,
                    background: 'radial-gradient(circle, var(--ocean-mid) 0%, transparent 70%)',
                    opacity: 0.08,
                    pointerEvents: 'none',
                    zIndex: -1,
                    transform: 'translate(-30%, 30%)',
                }}
            />

            {/* Section heading */}
            <div style={{ marginBottom: 64 }}>
                <span
                    style={{
                        display: 'block',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 12,
                        color: 'var(--ocean-bright)',
                        letterSpacing: '0.2em',
                        marginBottom: 8,
                    }}
                >
                    06 — CONTACT
                </span>
                <h2
                    style={{
                        fontFamily: 'Syne, sans-serif',
                        fontSize: 'clamp(40px, 5vw, 52px)',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        margin: '0 0 16px 0',
                    }}
                >
                    Let's Build Something Together
                </h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{
                        width: 48,
                        height: 2,
                        background: 'var(--ocean-bright)',
                        marginBottom: 24,
                        transformOrigin: 'left',
                    }}
                />
                <p
                    style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: 16,
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        maxWidth: 600,
                        margin: 0,
                    }}
                >
                    I'm currently open to internship opportunities and collaborative projects. Feel free to reach out.
                </p>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
                    gap: 64,
                }}
                className="contact-grid"
            >
                {/* Left column — contact info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {CONTACT_INFO.map((info, i) => {
                        const Icon = info.icon
                        const ContentWrapper = info.href ? 'a' : 'div'
                        return (
                            <motion.div
                                key={info.id}
                                initial={{ opacity: 0, x: -40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                            >
                                <ContentWrapper
                                    href={info.href}
                                    target={info.target}
                                    rel={info.target ? "noopener noreferrer" : undefined}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 20,
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border)',
                                        borderRadius: 8,
                                        padding: '20px 24px',
                                        textDecoration: 'none',
                                        color: 'inherit',
                                    }}
                                    className="contact-card"
                                >
                                    <Icon size={24} color="var(--ocean-bright)" />
                                    <span
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: 15,
                                            color: 'var(--text-primary)',
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {info.text}
                                    </span>
                                </ContentWrapper>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Right column — Form */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 24,
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border)',
                            borderRadius: 8,
                            padding: 40,
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            <label htmlFor="name" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'var(--text-secondary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Name</label>
                            <input required type="text" id="name" name="name" className="contact-input" />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            <label htmlFor="email" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'var(--text-secondary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Email</label>
                            <input required type="email" id="email" name="email" className="contact-input" />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            <label htmlFor="message" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'var(--text-secondary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Message</label>
                            <textarea required id="message" name="message" rows={5} className="contact-input" style={{ resize: 'vertical', minHeight: 120 }} />
                        </div>

                        <div style={{ position: 'relative', marginTop: 8 }}>
                            <motion.button
                                whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                style={{
                                    width: '100%',
                                    height: 52,
                                    background: 'var(--ocean-bright)',
                                    color: 'var(--bg-primary)',
                                    border: 'none',
                                    borderRadius: 4,
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: 15,
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 8,
                                }}
                            >
                                Send Message <span style={{ fontFamily: 'Inter, sans-serif' }}>→</span>
                            </motion.button>

                            <AnimatePresence>
                                {isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        style={{
                                            position: 'absolute',
                                            bottom: -40,
                                            left: 0,
                                            width: '100%',
                                            textAlign: 'center',
                                            color: 'var(--ocean-glow)',
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: 14,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: 8,
                                        }}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        Message sent! I'll get back to you soon.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </form>
                </motion.div>
            </div>

            <style>{`
        .contact-input {
          width: 100%;
          background: rgba(5, 15, 26, 0.8);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 14px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: var(--text-primary);
          outline: none;
          transition: all 0.2s ease;
        }
        .contact-input:focus {
          border-color: var(--ocean-bright);
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15);
        }
        .contact-card {
          transition: all 0.2s ease;
        }
        a.contact-card:hover {
          transform: scale(1.02);
          border-color: rgba(14, 165, 233, 0.4);
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    )
}

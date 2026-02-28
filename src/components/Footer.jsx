import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa'

export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer
            style={{
                background: 'var(--bg-primary)',
                borderTop: '1px solid var(--border)',
                padding: '40px 0',
                position: 'relative',
                zIndex: 10,
            }}
        >
            <div
                style={{
                    maxWidth: 1100,
                    margin: '0 auto',
                    padding: '0 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 24,
                }}
                className="footer-content"
            >
                {/* Left */}
                <div
                    style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: 14,
                        color: 'var(--text-secondary)',
                    }}
                >
                    ©️ 2025 Madhu Lavanya Siddani
                </div>

                {/* Center */}
                <div
                    style={{
                        fontFamily: 'Syne, sans-serif',
                        fontSize: 22,
                        fontWeight: 700,
                        color: 'var(--ocean-bright)',
                        textShadow: '0 0 12px rgba(14, 165, 233, 0.4)',
                        letterSpacing: '0.05em',
                        margin: '0 16px',
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                    className="footer-logo"
                >
                    ML
                </div>

                {/* Right */}
                <div style={{ display: 'flex', gap: 16 }}>
                    <motion.a
                        href="https://github.com/MadhuSiddani"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, color: 'var(--ocean-bright)' }}
                        className="social-link"
                    >
                        <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com/in/MadhuSiddani"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, color: 'var(--ocean-bright)' }}
                        className="social-link"
                    >
                        <FaLinkedin size={20} />
                    </motion.a>
                </div>
            </div>

            {/* Scroll to top button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        whileHover={{
                            scale: 1.08,
                            backgroundColor: 'var(--ocean-bright)',
                            borderColor: 'transparent'
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToTop}
                        style={{
                            position: 'fixed',
                            bottom: 32,
                            right: 32,
                            width: 44,
                            height: 44,
                            borderRadius: '50%',
                            background: 'var(--ocean-mid)',
                            border: '1px solid rgba(14, 165, 233, 0.3)',
                            color: 'var(--bg-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 99,
                            outline: 'none',
                            transition: 'background-color 0.2s, border-color 0.2s',
                        }}
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp size={16} />
                    </motion.button>
                )}
            </AnimatePresence>

            <style>{`
        .social-link {
          color: var(--text-secondary);
          transition: color 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 600px) {
          .footer-content {
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }
          .footer-logo {
            position: relative;
            left: 0;
            transform: none;
            order: -1;
            margin-bottom: 8px;
          }
        }
      `}</style>
        </footer>
    )
}

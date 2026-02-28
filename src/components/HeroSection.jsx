import { motion } from 'framer-motion'

const TICKER_TEXT =
  'React · Node.js · Express · MongoDB · MySQL · AWS · Docker · Gemini API · REST APIs · Full Stack · '

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '96px 24px 64px',
        background: `
          linear-gradient(90deg, rgba(10, 37, 64, 0.03) 1px, transparent 1px),
          linear-gradient(rgba(10, 37, 64, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      {/* Blurred radial gradient blob */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14, 77, 146, 0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1100,
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <motion.span
          variants={item}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            color: 'var(--ocean-bright)',
            letterSpacing: '0.2em',
          }}
        >
          Full Stack Developer
        </motion.span>

        <motion.h1
          variants={item}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Madhu Lavanya
          <br />
          <span
            style={{
              background: 'linear-gradient(90deg, var(--ocean-bright), var(--ocean-glow))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Siddani
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 18,
            color: 'var(--text-secondary)',
            maxWidth: 520,
            margin: '8px 0 24px',
            lineHeight: 1.6,
          }}
        >
          Building full-stack experiences that live at the intersection of performance and design.
        </motion.p>

        <motion.div
          variants={item}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <motion.a
            href="#projects"
            data-cursor="hover"
            whileHover={{ scale: 1.03, filter: 'brightness(1.2)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 48,
              paddingLeft: 24,
              paddingRight: 24,
              background: 'var(--ocean-bright)',
              color: 'var(--bg-primary)',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: 15,
              borderRadius: 2,
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#"
            data-cursor="hover"
            whileHover={{
              borderColor: 'var(--ocean-bright)',
              backgroundColor: 'rgba(14,165,233,0.06)',
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 48,
              paddingLeft: 24,
              paddingRight: 24,
              background: 'transparent',
              color: 'var(--ocean-bright)',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: 15,
              borderRadius: 2,
              textDecoration: 'none',
              border: '1px solid rgba(14,165,233,0.4)',
              cursor: 'pointer',
            }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Ticker */}
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          overflow: 'hidden',
          marginTop: 48,
          padding: '12px 0',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          className="ticker-track"
          style={{
            display: 'inline-flex',
            whiteSpace: 'nowrap',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: 'rgba(14, 165, 233, 0.3)',
            animation: 'ticker-scroll 25s linear infinite',
          }}
        >
          <span style={{ paddingRight: 48 }}>{TICKER_TEXT}</span>
          <span style={{ paddingRight: 48 }}>{TICKER_TEXT}</span>
        </div>
      </motion.div>

      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut',
            },
          }}
          style={{
            width: 24,
            height: 24,
            borderRight: '2px solid var(--ocean-bright)',
            borderBottom: '2px solid var(--ocean-bright)',
            transform: 'rotate(45deg)',
            opacity: 0.8,
          }}
        />
      </motion.div>
    </section>
  )
}

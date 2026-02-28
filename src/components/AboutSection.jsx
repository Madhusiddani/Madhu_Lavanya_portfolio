import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: '8.9 / 10', label: 'CGPA' },
  { value: '99.7%', label: 'SSC Score' },
  { value: '96.6%', label: 'Intermediate Score' },
  { value: '2+', label: 'Projects Shipped' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
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
      {/* Section heading */}
      <div style={{ marginBottom: 48 }}>
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
          01 — ABOUT
        </span>
        <h2
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(40px, 5vw, 52px)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            margin: 0,
          }}
        >
          About Me
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            width: 48,
            height: 2,
            background: 'var(--ocean-bright)',
            marginTop: 12,
            transformOrigin: 'left',
          }}
        />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 2fr)',
          gap: 48,
          alignItems: 'start',
        }}
        className="about-grid"
      >
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 16,
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              margin: 0,
            }}
          >
            I'm Madhu Lavanya Siddani, a B.Tech Computer Science student at Manav Rachna University
            specializing in Full Stack Development, with a CGPA of 8.9/10.
          </p>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 16,
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              margin: 0,
            }}
          >
            I build complete, production-ready web applications — from responsive React frontends to
            scalable Node.js backends. I'm passionate about creating digital products that are both
            technically solid and visually refined.
          </p>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 16,
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              margin: 0,
            }}
          >
            Currently working on Talkify, a multilingual real-time chat platform powered by Gemini
            API. I hold certifications from Oracle and NPTEL, and I've been recognized on the
            Dean's List for academic excellence.
          </p>
        </motion.div>

        {/* Right column — stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
          }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                scale: 1.02,
                borderColor: 'rgba(14, 165, 233, 0.4)',
              }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 48,
                  fontWeight: 700,
                  color: 'var(--ocean-bright)',
                  marginBottom: 4,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 13,
                  color: 'var(--text-secondary)',
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

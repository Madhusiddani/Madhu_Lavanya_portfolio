import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  { category: 'Languages', skills: ['Java', 'Python', 'C'] },
  { category: 'Frontend', skills: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'] },
  { category: 'Databases', skills: ['MongoDB', 'MySQL'] },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'AWS', 'Docker', 'VS Code'],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
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
      {/* Decorative background */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: -40,
          right: -20,
          fontFamily: 'Syne, sans-serif',
          fontSize: 200,
          color: 'var(--ocean-mid)',
          opacity: 0.03,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        {'< />'}
      </div>

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
          02 — SKILLS
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
          Skills
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

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 24,
        }}
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.category}
            variants={cardItem}
            whileHover={{
              scale: 1.02,
              borderColor: 'rgba(14, 165, 233, 0.35)',
            }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: 24,
            }}
          >
            <h3
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--ocean-bright)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 16,
                marginTop: 0,
              }}
            >
              {group.category}
            </h3>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
              }}
            >
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(14,165,233,0.18)',
                    borderColor: 'rgba(14,165,233,0.7)',
                  }}
                  style={{
                    background: 'rgba(14,165,233,0.08)',
                    border: '1px solid rgba(14,165,233,0.25)',
                    borderRadius: 9999,
                    padding: '6px 14px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 13,
                    color: 'var(--ocean-soft)',
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

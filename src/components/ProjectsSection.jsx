import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PROJECTS = [
    {
        id: 1,
        name: "Talkify",
        subtitle: "Multilingual Communication Platform",
        stack: ["React", "Node.js", "Express.js", "Gemini API"],
        period: "Sep 2025 – Ongoing",
        status: "In Progress",
        description: "A real-time multilingual chat application with automatic message translation using Gemini API. Enables seamless cross-language communication with real-time messaging and language selection controls.",
        bullets: [
            "Real-time message translation via Gemini API",
            "RESTful APIs for message handling and authentication",
            "Scalable full-stack architecture for concurrent users"
        ]
    },
    {
        id: 2,
        name: "SkinEval",
        subtitle: "AI-Based Skin Detection Application",
        stack: ["React", "Node.js", "Express.js", "Gemini API"],
        period: "Oct 2025",
        status: "Deployed",
        description: "An AI-powered skin condition analysis application leveraging Gemini API for image-based detection and insights. Deployed on Vercel with optimized production performance.",
        bullets: [
            "AI image analysis using Gemini API",
            "Secure image upload and processing backend",
            "Deployed on Vercel — production ready"
        ]
    }
]

export default function ProjectsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            id="projects"
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
                    04 — WORK
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
                    Featured Projects
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
                {PROJECTS.map((project, i) => {
                    const isEven = i % 2 === 0
                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 60 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.15,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            whileHover={{ scale: 1.01, borderColor: 'rgba(14, 165, 233, 0.5)' }}
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border)',
                                borderRadius: 8,
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                            className="project-card"
                        >
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: isEven ? '1fr 1.2fr' : '1.2fr 1fr',
                                }}
                                className="project-grid"
                            >
                                {/* Left/Right image placeholder */}
                                <div
                                    style={{
                                        order: isEven ? 1 : 2,
                                        background: 'var(--ocean-deep)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        minHeight: 300,
                                    }}
                                    className="project-image-container"
                                >
                                    {/* Decorative abstract art */}
                                    <motion.div
                                        whileHover={{ filter: 'brightness(1.15)' }}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            background: 'radial-gradient(circle at center, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: 'absolute',
                                                width: '150%',
                                                height: '150%',
                                                backgroundImage: 'radial-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px)',
                                                backgroundSize: '32px 32px',
                                                opacity: 0.4,
                                                transform: 'rotate(-15deg)',
                                            }}
                                        />
                                        {/* Placeholder geometric shapes */}
                                        <div style={{ display: 'flex', gap: 16, zIndex: 1, opacity: 0.8 }}>
                                            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--ocean-bright)' }} />
                                            <div style={{ width: 40, height: 40, background: 'var(--ocean-mid)' }} />
                                            <div style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid var(--ocean-soft)' }} />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div
                                    style={{
                                        order: isEven ? 2 : 1,
                                        padding: '48px 40px',
                                        position: 'relative',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 24,
                                            right: 32,
                                            fontFamily: 'Syne, sans-serif',
                                            fontSize: 64,
                                            fontWeight: 800,
                                            color: 'var(--text-primary)',
                                            opacity: 0.08,
                                            lineHeight: 1,
                                            pointerEvents: 'none',
                                        }}
                                    >
                                        0{project.id}
                                    </div>

                                    <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 16 }}>
                                        <span
                                            style={{
                                                fontFamily: "'JetBrains Mono', monospace",
                                                fontSize: 12,
                                                padding: '4px 12px',
                                                borderRadius: 9999,
                                                background: project.status === 'Deployed' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                                                color: project.status === 'Deployed' ? '#4ade80' : '#fbbf24',
                                                border: `1px solid ${project.status === 'Deployed' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(245, 158, 11, 0.2)'}`,
                                            }}
                                        >
                                            {project.status}
                                        </span>
                                        <span
                                            style={{
                                                fontFamily: "'JetBrains Mono', monospace",
                                                fontSize: 12,
                                                color: 'var(--text-secondary)',
                                            }}
                                        >
                                            {project.period}
                                        </span>
                                    </div>

                                    <h3
                                        style={{
                                            fontFamily: 'Syne, sans-serif',
                                            fontSize: 28,
                                            fontWeight: 700,
                                            color: 'var(--text-primary)',
                                            margin: '0 0 8px 0',
                                        }}
                                    >
                                        {project.name}
                                    </h3>
                                    <div
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: 14,
                                            color: 'var(--ocean-bright)',
                                            marginBottom: 24,
                                        }}
                                    >
                                        {project.subtitle}
                                    </div>

                                    <p
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: 15,
                                            color: 'var(--text-secondary)',
                                            lineHeight: 1.7,
                                            margin: '0 0 24px 0',
                                        }}
                                    >
                                        {project.description}
                                    </p>

                                    <ul style={{ margin: '0 0 32px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                                        {project.bullets.map((bullet, j) => (
                                            <li
                                                key={j}
                                                style={{
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: 14,
                                                    color: 'var(--text-secondary)',
                                                    lineHeight: 1.6,
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: 12,
                                                }}
                                            >
                                                <span style={{ color: 'var(--ocean-bright)', marginTop: 2 }}>→</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
                                        {project.stack.map(tech => (
                                            <span
                                                key={tech}
                                                style={{
                                                    fontFamily: "'JetBrains Mono', monospace",
                                                    fontSize: 13,
                                                    color: 'var(--ocean-soft)',
                                                    background: 'rgba(14, 165, 233, 0.08)',
                                                    border: '1px solid rgba(14, 165, 233, 0.25)',
                                                    borderRadius: 9999,
                                                    padding: '6px 14px',
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            <div
                style={{
                    textAlign: 'center',
                    marginTop: 64,
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 15,
                    color: 'var(--text-secondary)',
                    fontStyle: 'italic',
                }}
            >
                More projects coming soon...
            </div>

            <style>{`
        @media (max-width: 900px) {
          .project-grid {
            grid-template-columns: 1fr !important;
          }
          .project-image-container {
            order: 1 !important;
            height: 250px;
            min-height: auto !important;
          }
          .project-grid > div:nth-child(2) {
            order: 2 !important;
            padding: 32px 24px !important;
          }
        }
      `}</style>
        </section>
    )
}

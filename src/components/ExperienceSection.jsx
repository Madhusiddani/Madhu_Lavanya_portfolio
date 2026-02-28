import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WORK_EXPERIENCE = [
    {
        company: "TechnoHacks",
        role: "Full Stack Developer Intern",
        period: "Jun 2025 – Jul 2025",
        bullets: [
            "Built a Weather Dashboard app using OpenWeather API, HTML, CSS, and JavaScript with real-time data retrieval.",
            "Developed a ToDo List app with Node.js, Express.js, and MongoDB with full CRUD operations.",
            "Designed responsive UIs using React components and CSS Flexbox for cross-device compatibility.",
            "Integrated frontend and backend services through RESTful APIs."
        ]
    }
]

const EDUCATION = [
    {
        institution: "Manav Rachna University",
        degree: "B.Tech CSE (Full Stack)",
        score: "CGPA 8.9",
        period: "Aug 2023–Present"
    },
    {
        institution: "Sasi Junior College",
        degree: "Intermediate MPC",
        score: "96.6%",
        period: "2021–2023"
    },
    {
        institution: "Mandapeta Public School",
        degree: "SSC",
        score: "99.7%",
        period: "2020–2021"
    }
]

export default function ExperienceSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            id="experience"
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
                    03 — EXPERIENCE
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
                    My Journey
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

                {/* Work Experience Timeline */}
                <div style={{ position: 'relative', paddingLeft: 40 }}>
                    {/* Vertical Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        animate={isInView ? { height: '100%' } : { height: 0 }}
                        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: 2,
                            background: 'linear-gradient(to bottom, var(--ocean-bright), transparent)',
                        }}
                    />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
                        {WORK_EXPERIENCE.map((exp, i) => (
                            <div key={i} style={{ position: 'relative' }}>
                                {/* Timeline node */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        left: -40 - 5, // -paddingLeft - half width + 1 (for 2px line center)
                                        top: 24,
                                        width: 12,
                                        height: 12,
                                        borderRadius: '50%',
                                        background: 'var(--ocean-bright)',
                                        zIndex: 2,
                                    }}
                                >
                                    <motion.div
                                        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '50%',
                                            background: 'var(--ocean-bright)',
                                        }}
                                    />
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, x: 60 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.2 + i * 0.1,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                    style={{
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border)',
                                        borderRadius: 8,
                                        padding: '28px 32px',
                                    }}
                                >
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
                                        <div>
                                            <h3
                                                style={{
                                                    fontFamily: 'Syne, sans-serif',
                                                    fontSize: 20,
                                                    fontWeight: 700,
                                                    color: 'var(--text-primary)',
                                                    margin: '0 0 8px 0',
                                                }}
                                            >
                                                {exp.role}
                                            </h3>
                                            <div
                                                style={{
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: 15,
                                                    color: 'var(--ocean-bright)',
                                                }}
                                            >
                                                {exp.company}
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                fontFamily: "'JetBrains Mono', monospace",
                                                fontSize: 13,
                                                color: 'var(--text-secondary)',
                                                padding: '4px 12px',
                                                background: 'rgba(14, 165, 233, 0.05)',
                                                border: '1px solid rgba(14, 165, 233, 0.1)',
                                                borderRadius: 9999,
                                            }}
                                        >
                                            {exp.period}
                                        </div>
                                    </div>

                                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                                        {exp.bullets.map((bullet, j) => (
                                            <li
                                                key={j}
                                                style={{
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: 15,
                                                    color: 'var(--text-secondary)',
                                                    lineHeight: 1.7,
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
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <div>
                    <span
                        style={{
                            display: 'block',
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 12,
                            color: 'var(--ocean-bright)',
                            letterSpacing: '0.2em',
                            marginBottom: 24,
                        }}
                    >
                        EDUCATION
                    </span>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                        {EDUCATION.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.4 + i * 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                whileHover={{ scale: 1.01, borderColor: 'rgba(14, 165, 233, 0.4)' }}
                                style={{
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 8,
                                    padding: '24px 32px',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: 16,
                                }}
                            >
                                <div>
                                    <h3
                                        style={{
                                            fontFamily: 'Syne, sans-serif',
                                            fontSize: 18,
                                            fontWeight: 700,
                                            color: 'var(--text-primary)',
                                            margin: '0 0 8px 0',
                                        }}
                                    >
                                        {edu.institution}
                                    </h3>
                                    <div
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: 15,
                                            color: 'var(--ocean-bright)',
                                        }}
                                    >
                                        {edu.degree} <span style={{ color: 'var(--text-secondary)' }}>— {edu.score}</span>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        fontFamily: "'JetBrains Mono', monospace",
                                        fontSize: 13,
                                        color: 'var(--text-secondary)',
                                    }}
                                >
                                    {edu.period}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const CERTIFICATIONS = [
    { title: "Python", issuer: "NPTEL – Govt. of India", date: "Nov 2025" },
    { title: "Oracle Cloud Infrastructure 2025 – Application Integration Professional", issuer: "Oracle", date: "Aug 2025" },
    { title: "Design Thinking", issuer: "NPTEL – Govt. of India", date: "Mar 2025" }
]

const AWARDS = [
    { title: "Dean's List Student", detail: "Recognized for outstanding academic performance in B.Tech CSE — Manav Rachna University" }
]

export default function AchievementsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            id="achievements"
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
                    05 — RECOGNITION
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
                    Achievements & Certifications
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

                {/* Certifications Subsection */}
                <div>
                    <h3
                        style={{
                            fontFamily: 'Syne, sans-serif',
                            fontSize: 24,
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            marginBottom: 32,
                        }}
                    >
                        Certifications
                    </h3>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: 24,
                        }}
                    >
                        {CERTIFICATIONS.map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                whileHover={{ scale: 1.02, borderColor: 'rgba(14, 165, 233, 0.4)' }}
                                style={{
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 8,
                                    padding: '20px 24px',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 20,
                                }}
                            >
                                {/* Icon */}
                                <div
                                    style={{
                                        width: 40,
                                        height: 40,
                                        flexShrink: 0,
                                        borderRadius: 8,
                                        background: 'rgba(14, 165, 233, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid rgba(14, 165, 233, 0.2)',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 16,
                                            height: 16,
                                            border: '2px solid var(--ocean-bright)',
                                            borderTop: 'none',
                                            borderRight: 'none',
                                            transform: 'rotate(-45deg) translate(2px, -2px)',
                                        }}
                                    />
                                </div>

                                {/* Content */}
                                <div>
                                    <h4
                                        style={{
                                            fontFamily: 'Syne, sans-serif',
                                            fontSize: 16,
                                            fontWeight: 600,
                                            color: 'var(--text-primary)',
                                            margin: '0 0 8px 0',
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {cert.title}
                                    </h4>
                                    <div
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: 14,
                                            color: 'var(--ocean-bright)',
                                            marginBottom: 8,
                                        }}
                                    >
                                        {cert.issuer}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: "'JetBrains Mono', monospace",
                                            fontSize: 12,
                                            color: 'var(--text-secondary)',
                                        }}
                                    >
                                        {cert.date}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Awards Subsection */}
                <div>
                    <h3
                        style={{
                            fontFamily: 'Syne, sans-serif',
                            fontSize: 24,
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            marginBottom: 32,
                        }}
                    >
                        Honors & Awards
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                        {AWARDS.map((award, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + i * 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                whileHover={{ scale: 1.02, borderColor: 'rgba(14, 165, 233, 0.4)' }}
                                style={{
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 8,
                                    padding: '32px',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 24,
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Subtle golden accent glow */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: -50,
                                        right: -50,
                                        width: 150,
                                        height: 150,
                                        background: 'radial-gradient(circle, rgba(201, 162, 39, 0.15) 0%, transparent 70%)',
                                        pointerEvents: 'none',
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    style={{
                                        width: 48,
                                        height: 48,
                                        flexShrink: 0,
                                        borderRadius: 8,
                                        background: 'rgba(201, 162, 39, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid rgba(201, 162, 39, 0.2)',
                                    }}
                                >
                                    <FaStar size={20} color="#c9a227" />
                                </div>

                                {/* Content */}
                                <div>
                                    <h4
                                        style={{
                                            fontFamily: 'Syne, sans-serif',
                                            fontSize: 18,
                                            fontWeight: 700,
                                            color: 'var(--text-primary)',
                                            margin: '0 0 12px 0',
                                        }}
                                    >
                                        {award.title}
                                    </h4>
                                    <p
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: 15,
                                            color: 'var(--text-secondary)',
                                            lineHeight: 1.7,
                                            margin: 0,
                                            maxWidth: 800,
                                        }}
                                    >
                                        {award.detail}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

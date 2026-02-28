import { useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const navBg = useTransform(
    scrollY,
    [0, 60],
    ['rgba(2,8,16,0)', 'rgba(2,8,16,0.85)']
  )
  const navBlur = useTransform(scrollY, [0, 60], [0, 16])
  const backdropFilter = useTransform(navBlur, (v) => `blur(${v}px)`)
  const borderBottom = useTransform(
    scrollY,
    [0, 60],
    ['1px solid transparent', '1px solid var(--border)']
  )

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const id = href.slice(1)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className="navbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          background: navBg,
          backdropFilter: backdropFilter,
          WebkitBackdropFilter: backdropFilter,
          borderBottom: borderBottom,
        }}
      >
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="nav-logo"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 22,
            fontWeight: 700,
            color: 'var(--ocean-bright)',
            textDecoration: 'none',
            textShadow: '0 0 20px rgba(14, 165, 233, 0.4)',
          }}
        >
          ML
        </a>

        <nav className="nav-links" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="nav-link"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 14,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                position: 'relative',
              }}
            >
              {label}
              <span
                className="nav-link-underline"
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: -4,
                  height: 1,
                  width: '100%',
                  background: 'var(--ocean-bright)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.25s ease',
                }}
              />
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="nav-hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            padding: 8,
            cursor: 'pointer',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          <motion.span
            style={{
              width: 24,
              height: 2,
              background: 'var(--text-primary)',
              borderRadius: 1,
              originX: 'left',
            }}
            animate={{
              rotate: mobileOpen ? 45 : 0,
              y: mobileOpen ? 4 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            style={{
              width: 24,
              height: 2,
              background: 'var(--text-primary)',
              borderRadius: 1,
            }}
            animate={{ opacity: mobileOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            style={{
              width: 24,
              height: 2,
              background: 'var(--text-primary)',
              borderRadius: 1,
              originX: 'left',
            }}
            animate={{
              rotate: mobileOpen ? -45 : 0,
              y: mobileOpen ? -4 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </motion.header>

      <style>{`
        .nav-link:hover { color: var(--ocean-bright); }
        .nav-link:hover .nav-link-underline { transform: scaleX(1); }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'var(--bg-primary)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 24,
            }}
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ delay: i * 0.07, duration: 0.25 }}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 18,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                }}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

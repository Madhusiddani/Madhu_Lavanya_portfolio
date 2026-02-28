import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { stiffness: 80, damping: 20 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    document.body.style.cursor = 'none'

    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const isHoverTarget = (el) =>
      el?.closest?.('a, button, [data-cursor="hover"]')

    const handleMouseOver = (e) => {
      setIsHovering(!!isHoverTarget(e.target))
    }
    const handleMouseOut = (e) => {
      if (!isHoverTarget(e.relatedTarget)) setIsHovering(false)
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Small dot — follows mouse exactly */}
      <motion.div
        className="cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
          position: 'fixed',
          left: 0,
          top: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--ocean-bright)',
          pointerEvents: 'none',
          zIndex: 9999,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      {/* Hollow ring — smooth lag */}
      <motion.div
        className="cursor-ring"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          position: 'fixed',
          left: 0,
          top: 0,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid var(--ocean-bright)',
          opacity: 0.4,
          pointerEvents: 'none',
          zIndex: 9999,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.6 : 1,
          opacity: isHovering ? 0.8 : 0.4,
          backgroundColor: isHovering ? 'rgba(14,165,233,0.08)' : 'transparent',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}

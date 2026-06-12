import { useEffect, useState } from 'react'

export default function useScrollSpy(ids: string[], offset = -300) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY - offset

      // Find the section that matches the scroll position
      let currentActive = ''
      
      for (const id of ids) {
        const element = document.getElementById(id)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          const absoluteTop = top + window.scrollY
          const absoluteBottom = bottom + window.scrollY

          if (scrollPosition >= absoluteTop && scrollPosition < absoluteBottom) {
            currentActive = id
            break
          }
        }
      }

      // Fallback to hero if at top of page
      if (window.scrollY < 100) {
        currentActive = 'hero'
      }

      if (currentActive) {
        setActiveId(currentActive)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Run once initially
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ids, offset])

  return activeId
}

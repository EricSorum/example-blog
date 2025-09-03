import { useEffect, useState, RefObject } from 'react'

// This function checks if an element is intersecting with the scroll position.
export function useIsVisible(ref: RefObject<HTMLElement | null>): boolean {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    })

    observer.observe(node)
    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isIntersecting
}

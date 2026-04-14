import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, isVisible].
 * Attach ref to the element you want to animate;
 * isVisible flips to true once it enters the viewport.
 */
export function useFadeIn(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

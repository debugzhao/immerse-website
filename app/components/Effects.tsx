"use client"

import { useEffect } from "react"

/**
 * Progressive enhancement for the page:
 * - scroll-reveal for `.reveal` elements (content stays visible without JS)
 * - pointer-following highlight on `.glass-card` via CSS custom properties
 */
export default function Effects() {
  useEffect(() => {
    const root = document.documentElement
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    root.classList.add("js")

    const targets = document.querySelectorAll<HTMLElement>(".reveal")
    let io: IntersectionObserver | undefined
    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"))
    } else {
      io = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-visible")
          io?.unobserve(entry.target)
        }),
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
      )
      targets.forEach((el) => io!.observe(el))
    }

    const onMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement | null)?.closest<HTMLElement>(".glass-card")
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`)
      card.style.setProperty("--my", `${e.clientY - rect.top}px`)
    }
    if (!reduceMotion) document.addEventListener("pointermove", onMove, { passive: true })

    return () => {
      io?.disconnect()
      document.removeEventListener("pointermove", onMove)
    }
  }, [])

  return null
}

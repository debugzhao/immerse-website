"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react"

const links = [
  { href: "#features", label: "功能" },
  { href: "#how", label: "如何使用" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Collapse the floating pill once the hero starts scrolling away.
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header className={`nav-shell${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <nav className="nav glass" aria-label="主导航">
        <a className="brand" href="#top" aria-label="Immerse 首页" onClick={() => setOpen(false)}>
          <span className="brand-orb"><Image className="brand-mark" src="/immerse-logo.png" alt="" width={24} height={24} priority aria-hidden="true" /></span>
          <span suppressHydrationWarning>Immerse</span>
        </a>
        <div className="nav-links">
          {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          <a href="https://github.com/debugzhao/Immerse" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
        </div>
        <div className="nav-actions">
          <a className="btn btn-light btn-sm" href="https://github.com/debugzhao/Immerse/releases/latest" suppressHydrationWarning>下载 Immerse <ArrowRight size={14} /></a>
          <button className="nav-toggle btn-glass" type="button" aria-label={open ? "关闭菜单" : "打开菜单"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>
      <div className="mobile-menu glass" id="mobile-menu" hidden={!open}>
        {links.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        <a href="https://github.com/debugzhao/Immerse" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>GitHub <ArrowUpRight size={14} /></a>
      </div>
    </header>
  )
}

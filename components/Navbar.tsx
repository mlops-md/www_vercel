'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b border-white/6">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet to-neon flex items-center justify-center shadow-lg glow">ML</div>
          <span className="font-semibold">MLOps.md</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/about">About</Link>
          <Link href="/community">Community</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/join" className="px-3 py-1 rounded-md border">Join</Link>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4">
          <Link href="/about" className="block py-2">About</Link>
          <Link href="/community" className="block py-2">Community</Link>
          <Link href="/tools" className="block py-2">Tools</Link>
          <Link href="/join" className="block py-2">Join</Link>
        </div>
      )}
    </header>
  )
}

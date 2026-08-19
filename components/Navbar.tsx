'use client'

import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown, Sun, Moon, Search } from 'lucide-react'
import { navItems, schoolInfo } from '@/lib/data'
import clsx from 'clsx'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  // Tutup menu mobile saat resize ke desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const toggleDark = () => {
    const next = !darkMode
    setDarkMode(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header className={clsx(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'shadow-lg' : ''
    )}>
      {/* Top bar — running text */}
      <div className="bg-primary-900 dark:bg-slate-950 text-white py-1.5 overflow-hidden hidden sm:block" style={{fontSize:'12px',whiteSpace:'nowrap'}}>
        {React.createElement('marquee', {scrollamount:'5', direction:'left', behavior:'scroll'},
          'Selamat Datang di Website Resmi SMP Negeri 1 Karanganyar  ✦  "The Nicest Place for The Bright Future"  ✦  Informasi SPMB Tahun Ajaran 2026/2027 — Kunjungi Menu SPMB  ✦  Raih Prestasi Terbaik Bersama SMPN 1 Karanganyar  ✦  Hubungi Kami: (0271) 495059 | smpn1karanganyar@gmail.com  ✦  Selamat Datang di Website Resmi SMP Negeri 1 Karanganyar  ✦  "The Nicest Place for The Bright Future"'
        )}
      </div>

      {/* Main navbar — putih dengan shadow */}
      <div className={clsx(
        'bg-white dark:bg-slate-900 transition-all duration-300',
        scrolled ? 'shadow-md' : 'border-b border-slate-100 dark:border-slate-800'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-[70px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 min-w-0">
              <div className="w-10 h-10 md:w-12 md:h-12 relative flex-shrink-0 rounded-full overflow-hidden bg-white">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo SMPN 1 Karanganyar"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-slate-800 dark:text-white text-sm md:text-base leading-tight truncate font-poppins">
                  {schoolInfo.shortName}
                </p>
                <p className="text-2xs md:text-xs text-primary-600 dark:text-primary-400 font-medium font-roboto">
                  Karanganyar, Jawa Tengah
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={clsx(
                      'flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-150 font-poppins whitespace-nowrap',
                      activeDropdown === item.label
                        ? 'text-primary-600 bg-primary-50 dark:text-primary-400 dark:bg-primary-900/30'
                        : 'text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={13}
                        className={clsx('transition-transform duration-200', activeDropdown === item.label ? 'rotate-180' : '')}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-0.5 w-52 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden py-1.5 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-roboto"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-1 flex-shrink-0">
              {/* Search */}
              {searchOpen ? (
                <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 border border-slate-200 dark:border-slate-700">
                  <Search size={14} className="text-slate-400 flex-shrink-0" />
                  <input
                    ref={searchRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari..."
                    className="bg-transparent text-sm outline-none w-28 sm:w-40 text-slate-700 dark:text-slate-200 font-roboto"
                    onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
                  />
                  <button
                    onClick={() => { setSearchOpen(false); setSearchQuery('') }}
                    className="text-slate-400 hover:text-slate-600 flex-shrink-0"
                    aria-label="Tutup pencarian"
                  >
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Cari"
                >
                  <Search size={18} />
                </button>
              )}

              {/* Dark mode */}
              <button
                onClick={toggleDark}
                className="p-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Buka menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/20 dark:bg-black/40 z-40 top-[calc(100%-1px)]"
            onClick={() => setMenuOpen(false)}
          />
          <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 max-h-[75vh] overflow-y-auto z-50 relative shadow-xl">
            <div className="px-4 py-3 divide-y divide-slate-100 dark:divide-slate-800">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-2 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 font-poppins"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={clsx('transition-transform duration-200 text-slate-400', mobileExpanded === item.label ? 'rotate-180' : '')}
                        />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="pb-2 pl-3 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMenuOpen(false)}
                              className="flex items-center gap-2 px-3 py-2.5 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 font-roboto"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-300 flex-shrink-0" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center px-2 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 font-poppins"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile contact info */}
            <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800/50 text-xs text-slate-500 dark:text-slate-400 font-roboto border-t border-slate-100 dark:border-slate-800">
              <p>☎️ {schoolInfo.phone}</p>
              <p className="mt-1">✉️ {schoolInfo.email}</p>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

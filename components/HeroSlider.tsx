'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides } from '@/lib/data'

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning])

  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length)
  const next = useCallback(() => goTo((current + 1) % heroSlides.length), [current, goTo])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next, isPaused])

  const slide = heroSlides[current]

  return (
    <section
      className="relative h-[55vw] min-h-[280px] max-h-[620px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
          <div className="max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl">
            <span className="inline-block bg-gold-500 text-slate-900 text-2xs xs:text-xs font-bold px-2.5 py-1 rounded-full mb-3 uppercase tracking-wide font-poppins">
              {slide.badge}
            </span>
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight font-poppins">
              {slide.title}
            </h1>
            <p className="text-slate-200 text-xs xs:text-sm md:text-base mb-5 md:mb-8 leading-relaxed font-roboto line-clamp-2 md:line-clamp-none">
              {slide.subtitle}
            </p>
            <Link
              href={slide.cta.href}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white font-semibold px-4 xs:px-5 md:px-6 py-2.5 md:py-3 rounded-lg transition-all shadow-lg text-xs xs:text-sm md:text-base font-poppins"
            >
              {slide.cta.label}
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Arrow navigasi — sembunyikan di layar sangat kecil */}
      <button
        onClick={prev}
        className="hidden xs:flex absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 bg-white/20 hover:bg-white/40 active:bg-white/50 backdrop-blur rounded-full items-center justify-center text-white transition-all"
        aria-label="Slide sebelumnya"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="hidden xs:flex absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 bg-white/20 hover:bg-white/40 active:bg-white/50 backdrop-blur rounded-full items-center justify-center text-white transition-all"
        aria-label="Slide berikutnya"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-1 sm:gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-4 sm:w-8 h-1.5 sm:h-2.5 bg-gold-400'
                : 'w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-3 right-4 z-20 hidden sm:flex items-center gap-1 text-white/70 text-xs font-roboto">
        <span className="font-bold text-white">{current + 1}</span>
        <span>/</span>
        <span>{heroSlides.length}</span>
      </div>
    </section>
  )
}

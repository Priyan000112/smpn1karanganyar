'use client'

import { useEffect, useRef, useState } from 'react'
import { schoolInfo } from '@/lib/data'
import HexBadge from '@/components/HexBadge'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(current))
        }, 2000 / steps)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <div ref={ref}>{count.toLocaleString('id-ID')}{suffix}</div>
}

const stats = [
  {
    label: 'Alumni', value: schoolInfo.stats.alumni, suffix: '+',
    glyph: '<path d="M12 3 2 8l10 5 8-4.2V16M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5"/>',
  },
  {
    label: 'Guru & Tendik', value: schoolInfo.stats.guru, suffix: '',
    glyph: '<circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6"/><circle cx="18" cy="9" r="2.4"/><path d="M16 20c.2-2.6 2.2-4.6 4.8-4.9"/>',
  },
  {
    label: 'Murid Aktif', value: schoolInfo.stats.murid, suffix: '+',
    glyph: '<rect x="5" y="4" width="14" height="17" rx="1.5"/><path d="M9 2.5h6v3H9zM8.5 10h7M8.5 14h7M8.5 18h4"/>',
  },
  {
    label: 'Ekstrakurikuler', value: schoolInfo.stats.ekskul, suffix: '',
    glyph: '<path d="M7 3h10v5a5 5 0 0 1-10 0V3z"/><path d="M7 5H4a3 3 0 0 0 3 4M17 5h3a3 3 0 0 1-3 4M9 15.5V19M15 15.5V19M7 21h10"/>',
  },
]

export default function StatsSection() {
  return (
    <section className="py-10 md:py-14" style={{ background: '#0a1840' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-4 py-6 md:py-8 md:px-8">
              <div className="flex justify-center mb-4">
                <HexBadge variant="achieve" size="md" glyphPath={stat.glyph} />
              </div>
              <p className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'Open Sans, sans-serif', color: '#f6f1e4' }}>
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs uppercase tracking-widest opacity-70" style={{ color: '#f6f1e4' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

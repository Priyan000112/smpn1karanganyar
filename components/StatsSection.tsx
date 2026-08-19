'use client'

import { useEffect, useRef, useState } from 'react'
import { schoolInfo } from '@/lib/data'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const duration = 2000
          const step = Math.ceil(target / (duration / 16))
          const timer = setInterval(() => {
            start += step
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(start)
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count.toLocaleString('id-ID')}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const stats = [
    { label: 'Alumni', value: schoolInfo.stats.alumni, suffix: '+', icon: '🎓', color: 'bg-blue-500' },
    { label: 'Guru & Tendik', value: schoolInfo.stats.guru, suffix: '', icon: '👨‍🏫', color: 'bg-emerald-500' },
    { label: 'Murid Aktif', value: schoolInfo.stats.murid, suffix: '+', icon: '🧑‍🎒', color: 'bg-violet-500' },
    { label: 'Ekstrakurikuler', value: schoolInfo.stats.ekskul, suffix: '', icon: '🏆', color: 'bg-amber-500' },
  ]

  return (
    <section className="py-16 bg-primary-700 dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3`}>
                {stat.icon}
              </div>
              <p className="text-4xl font-bold mb-1">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-primary-200 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

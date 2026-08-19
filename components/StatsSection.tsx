'use client'

import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Users, ClipboardList, Trophy } from 'lucide-react'
import { schoolInfo } from '@/lib/data'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref}>
      {count.toLocaleString('id-ID')}{suffix}
    </div>
  )
}

export default function StatsSection() {
  const stats = [
    {
      label: 'Alumni',
      value: schoolInfo.stats.alumni,
      suffix: '+',
      icon: GraduationCap,
      iconBg: 'bg-blue-500',
    },
    {
      label: 'Guru & Tendik',
      value: schoolInfo.stats.guru,
      suffix: '',
      icon: Users,
      iconBg: 'bg-emerald-500',
    },
    {
      label: 'Murid Aktif',
      value: schoolInfo.stats.murid,
      suffix: '+',
      icon: ClipboardList,
      iconBg: 'bg-violet-500',
    },
    {
      label: 'Ekstrakurikuler',
      value: schoolInfo.stats.ekskul,
      suffix: '',
      icon: Trophy,
      iconBg: 'bg-amber-500',
    },
  ]

  return (
    <section className="py-10 md:py-14 bg-primary-700 dark:bg-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-white" />
        <div className="absolute -bottom-10 -right-10 w-80 h-80 rounded-full bg-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => {
            const IconComp = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <div className={`w-12 h-12 md:w-14 md:h-14 ${stat.iconBg} rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  <IconComp size={22} className="text-white" strokeWidth={1.75} />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1 font-poppins">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-primary-200 text-xs md:text-sm font-medium font-roboto">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

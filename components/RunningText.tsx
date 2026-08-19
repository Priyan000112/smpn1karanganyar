'use client'

import { useEffect, useRef } from 'react'

const texts = [
  '🎓 Selamat Datang di Website Resmi SMP Negeri 1 Karanganyar',
  '⭐ "The Nicest Place for The Bright Future"',
  '📢 Informasi SPMB Tahun Ajaran 2026/2027 — Kunjungi Menu SPMB untuk Info Selengkapnya',
  '🏆 Raih Prestasi Terbaik Bersama SMPN 1 Karanganyar',
  '📞 Hubungi Kami: (0271) 495059 | smpn1karanganyar@gmail.com',
]

export default function RunningText() {
  return (
    <div className="bg-primary-800 dark:bg-primary-950 text-white py-1.5 overflow-hidden">
      <div className="relative flex">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-0">
          {[...texts, ...texts].map((text, i) => (
            <span key={i} className="text-xs font-roboto px-10 opacity-90">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

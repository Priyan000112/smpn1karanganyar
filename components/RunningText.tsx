'use client'

const texts = [
  'Selamat Datang di Website Resmi SMP Negeri 1 Karanganyar',
  '"The Nicest Place for The Bright Future"',
  'Informasi SPMB Tahun Ajaran 2026/2027 — Kunjungi Menu SPMB untuk Info Selengkapnya',
  'Raih Prestasi Terbaik Bersama SMPN 1 Karanganyar',
  'Hubungi Kami: (0271) 495059 | smpn1karanganyar@gmail.com',
]

export default function RunningText() {
  const content = texts.join('   ✦   ')

  return (
    <div className="bg-primary-800 dark:bg-primary-950 text-white overflow-hidden py-1.5 border-b border-white/10">
      <div className="running-text-track text-xs font-roboto opacity-90">
        <span>{content}&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;</span>
        <span aria-hidden>{content}&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>
  )
}

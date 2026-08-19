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
    <div
      style={{
        backgroundColor: '#1e3a8a',
        color: 'white',
        overflow: 'hidden',
        padding: '6px 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        fontSize: '12px',
      }}
    >
      <div
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          width: 'max-content',
          animation: 'marquee-run 40s linear infinite',
        }}
      >
        <span style={{ paddingRight: '60px' }}>{content}</span>
        <span style={{ paddingRight: '60px' }} aria-hidden="true">{content}</span>
      </div>
    </div>
  )
}

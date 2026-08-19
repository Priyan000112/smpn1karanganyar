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
    <>
      <style>{`
        @keyframes marquee-run {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          display: flex;
          width: max-content;
          white-space: nowrap;
          animation: marquee-run 40s linear infinite;
        }
        .marquee-inner:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div
        style={{
          backgroundColor: '#1e3a8a',
          color: 'white',
          overflow: 'hidden',
          padding: '6px 0',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div className="marquee-inner text-xs">
          <span style={{ paddingRight: '40px' }}>{content}</span>
          <span style={{ paddingRight: '40px' }} aria-hidden="true">{content}</span>
        </div>
      </div>
    </>
  )
}

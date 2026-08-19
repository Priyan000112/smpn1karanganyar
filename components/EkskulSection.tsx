import Link from 'next/link'
import HexBadge from '@/components/HexBadge'

const ekskulData = [
  { nama: 'Pramuka', deskripsi: 'Mengembangkan karakter kepemimpinan dan cinta alam.', pembina: 'Martono, S.Pd', accent: 'default' as const,
    glyph: '<path d="M12 3 4 20h16L12 3z"/><path d="M12 3v17"/>' },
  { nama: 'Paskibra', deskripsi: 'Pasukan Pengibar Bendera — Juara 1 LKBB Tingkat Kabupaten.', pembina: 'Heru Santoso, S.Pd', accent: 'default' as const,
    glyph: '<path d="M6 3v18M6 4h11l-2.5 3.5L17 11H6"/>' },
  { nama: 'PMR', deskripsi: 'Palang Merah Remaja — keterampilan P3K dan kemanusiaan.', pembina: 'Sri Wahyuni, S.Pd', accent: 'maroon' as const,
    glyph: '<path d="M12 21s-8-4.6-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6.4-8 11-8 11z"/><path d="M9 11h6M12 8v6"/>' },
  { nama: 'Basket', deskripsi: 'Olahraga basket kompetitif tingkat kabupaten.', pembina: 'Agus Prasetyo, S.Pd', accent: 'default' as const,
    glyph: '<circle cx="12" cy="12" r="9"/><path d="M12 3c2.5 2.5 2.5 15.5 0 18M3 12h18M5 6.5c3 2 11 2 14 0M5 17.5c3-2 11-2 14 0"/>' },
  { nama: 'Voli', deskripsi: 'Olahraga voli putra dan putri.', pembina: 'Budi Hartono, S.Pd', accent: 'default' as const,
    glyph: '<circle cx="12" cy="12" r="9"/><path d="M8 6l4 6-4 6M16 6l-4 6 4 6"/>' },
  { nama: 'Futsal', deskripsi: 'Olahraga futsal antar sekolah.', pembina: 'Andi Kurniawan, S.Pd', accent: 'default' as const,
    glyph: '<ellipse cx="12" cy="12" rx="9" ry="6"/><path d="M3 12h18M12 6v12"/>' },
  { nama: 'Seni Tari', deskripsi: 'Tari tradisional dan modern.', pembina: 'Lestari Indah, S.Pd', accent: 'default' as const,
    glyph: '<path d="M4 20c3-6 5-11 4-16 4 2 4 8 8 8 1.5 3-1 6-4 6-3.5 0-6.5 1-8 2z"/>' },
  { nama: 'Paduan Suara', deskripsi: 'Paduan suara dan seni musik.', pembina: 'Yuni Kristiana, S.Pd', accent: 'default' as const,
    glyph: '<path d="M9 18V5l10-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/>' },
]

export default function EkskulSection() {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <p className="text-xs tracking-widest uppercase font-bold mb-1" style={{ color: '#c9982f' }}>Kesiswaan</p>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="section-title">Ekstrakurikuler</h2>
              <p className="section-subtitle mb-0">Kembangkan bakat dan minat bersama kami</p>
            </div>
            <Link href="/kesiswaan/ekskul" className="btn-outline hidden sm:inline-flex">Lihat Semua →</Link>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">
          {ekskulData.map((ekskul) => (
            <div key={ekskul.nama} className="grid grid-cols-[56px_1fr] sm:grid-cols-[56px_1fr_1fr] gap-4 sm:gap-5 items-center py-4 border-b border-slate-200 dark:border-slate-700">
              <HexBadge variant="on-cream" accent={ekskul.accent} size="md" glyphPath={ekskul.glyph} />
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {ekskul.nama}
              </h3>
              <div className="hidden sm:block">
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed" style={{ fontFamily: 'Merriweather, serif' }}>
                  {ekskul.deskripsi}
                </p>
                <span className="block mt-1 text-xs font-bold" style={{ color: '#c9982f', fontFamily: 'Open Sans, sans-serif' }}>
                  Pembina: {ekskul.pembina}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 sm:hidden">
          <Link href="/kesiswaan/ekskul" className="btn-outline">Lihat Semua Ekskul</Link>
        </div>
      </div>
    </section>
  )
}

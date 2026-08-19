import Link from 'next/link'
import HexBadge from '@/components/HexBadge'

const ekskulData = [
  { nama: 'Pramuka', deskripsi: 'Mengembangkan karakter kepemimpinan dan cinta alam.', pembina: 'Martono, S.Pd',
    icon: <><path d="M12 3 4 20h16L12 3z"/><path d="M12 3v17"/></> },
  { nama: 'Paskibra', deskripsi: 'Pasukan Pengibar Bendera — Juara 1 LKBB Tingkat Kabupaten.', pembina: 'Heru Santoso, S.Pd',
    icon: <><path d="M6 3v18M6 4h11l-2.5 3.5L17 11H6"/></> },
  { nama: 'PMR', deskripsi: 'Palang Merah Remaja — keterampilan P3K dan kemanusiaan.', pembina: 'Sri Wahyuni, S.Pd',
    icon: <><path d="M12 21s-8-4.6-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6.4-8 11-8 11z"/><path d="M9 11h6M12 8v6"/></>, accent: 'maroon' as const },
  { nama: 'Basket', deskripsi: 'Olahraga basket kompetitif tingkat kabupaten.', pembina: 'Agus Prasetyo, S.Pd',
    icon: <><circle cx="12" cy="12" r="9"/><path d="M12 3c2.5 2.5 2.5 15.5 0 18M3 12h18M5 6.5c3 2 11 2 14 0M5 17.5c3-2 11-2 14 0"/></> },
  { nama: 'Voli', deskripsi: 'Olahraga voli putra dan putri.', pembina: 'Budi Hartono, S.Pd',
    icon: <><circle cx="12" cy="12" r="9"/><path d="M8 6l4 6-4 6M16 6l-4 6 4 6"/></> },
  { nama: 'Futsal', deskripsi: 'Olahraga futsal antar sekolah.', pembina: 'Andi Kurniawan, S.Pd',
    icon: <><ellipse cx="12" cy="12" rx="9" ry="6"/><path d="M3 12h18M12 6v12"/></> },
  { nama: 'Seni Tari', deskripsi: 'Tari tradisional dan modern.', pembina: 'Lestari Indah, S.Pd',
    icon: <><path d="M4 20c3-6 5-11 4-16 4 2 4 8 8 8 1.5 3-1 6-4 6-3.5 0-6.5 1-8 2z"/></> },
  { nama: 'Paduan Suara', deskripsi: 'Paduan suara dan seni musik.', pembina: 'Yuni Kristiana, S.Pd',
    icon: <><path d="M9 18V5l10-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/></> },
  { nama: 'KIR', deskripsi: 'Karya Ilmiah Remaja — penelitian dan inovasi.', pembina: 'Dewi Rahmawati, S.Pd',
    icon: <><path d="M9 2h6M10 2v6l-6 11a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-11V2"/></> },
  { nama: 'English Club', deskripsi: 'Pengembangan kemampuan bahasa Inggris.', pembina: 'Eka Fitriani, S.Pd',
    icon: <><path d="M4 7h16M4 12h10M4 17h12"/></> },
  { nama: 'Robotik', deskripsi: 'Teknologi dan pemrograman robot.', pembina: 'Andi Kurniawan, S.Pd',
    icon: <><rect x="7" y="9" width="10" height="8" rx="1"/><path d="M10 9V7a2 2 0 0 1 4 0v2"/><circle cx="10" cy="13" r="1"/><circle cx="14" cy="13" r="1"/><path d="M4 13h3M17 13h3"/></> },
  { nama: 'Karate', deskripsi: 'Bela diri karate dan kedisiplinan.', pembina: 'Joko Susilo, S.Pd',
    icon: <><path d="M6 4l6 4-3 4 5 8M18 4l-6 4 3 4-5 8"/></> },
]

export default function EkskulSection() {
  const preview = ekskulData.slice(0, 8)

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <p className="text-xs tracking-widest uppercase font-bold mb-1" style={{color:'#c9982f'}}>Kesiswaan</p>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="section-title">Ekstrakurikuler</h2>
              <p className="section-subtitle mb-0">Kembangkan bakat dan minat bersama kami</p>
            </div>
            <Link href="/kesiswaan/ekskul" className="btn-outline hidden sm:inline-flex">Lihat Semua →</Link>
          </div>
        </div>

        {/* Plaque list style */}
        <div className="border-t border-slate-200 dark:border-slate-700">
          {preview.map((ekskul) => (
            <div key={ekskul.nama} className="grid grid-cols-[56px_1fr] sm:grid-cols-[56px_1fr_1fr] gap-4 sm:gap-5 items-center py-4 border-b border-slate-200 dark:border-slate-700">
              <HexBadge variant="on-cream" accent={ekskul.accent ?? 'default'} size="md">
                {ekskul.icon}
              </HexBadge>
              <h3 className="font-bold text-slate-800 dark:text-white text-base" style={{fontFamily:'Open Sans, sans-serif'}}>
                {ekskul.nama}
              </h3>
              <div className="hidden sm:block col-span-1 sm:col-auto">
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed" style={{fontFamily:'Merriweather, serif'}}>
                  {ekskul.deskripsi}
                </p>
                <span className="block mt-1 text-xs font-bold" style={{color:'#c9982f', fontFamily:'Open Sans, sans-serif'}}>
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

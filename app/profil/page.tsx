import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Profil Sekolah' }

const profilMenu = [
  { href: '/profil/guru', label: 'Guru', icon: '👨‍🏫', desc: 'Daftar lengkap guru dan pengampu mata pelajaran' },
  { href: '/profil/staf', label: 'Staf', icon: '👩‍💼', desc: 'Tenaga kependidikan dan staf administrasi' },
  { href: '/profil/sejarah', label: 'Sejarah', icon: '📖', desc: 'Sejarah berdiri dan perkembangan sekolah' },
  { href: '/profil/visi-misi', label: 'Visi & Misi', icon: '🎯', desc: 'Visi, misi, dan tujuan sekolah' },
  { href: '/profil/struktur', label: 'Struktur Organisasi', icon: '🏛️', desc: 'Bagan dan struktur organisasi sekolah' },
  { href: '/profil/mars', label: 'Mars Sekolah', icon: '🎵', desc: 'Lirik dan audio mars SMPN 1 Karanganyar' },
]

export default function ProfilPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="section-title">Profil Sekolah</h1>
      <p className="section-subtitle">Mengenal lebih jauh SMP Negeri 1 Karanganyar</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profilMenu.map((item) => (
          <Link key={item.href} href={item.href}
            className="card p-6 flex gap-4 items-start hover:border-primary-300 border border-transparent dark:hover:border-primary-700 transition-all group">
            <span className="text-4xl">{item.icon}</span>
            <div>
              <h2 className="font-semibold text-slate-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{item.label}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

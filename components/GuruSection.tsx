import { guruList } from '@/lib/data'
import Link from 'next/link'

function getInitials(name: string) {
  return name
    .replace(/[^a-zA-Z\s]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

const colors = [
  'bg-blue-500', 'bg-emerald-500', 'bg-violet-500', 'bg-amber-500',
  'bg-rose-500', 'bg-cyan-500', 'bg-orange-500', 'bg-teal-500',
  'bg-indigo-500', 'bg-pink-500',
]

export default function GuruSection() {
  const preview = guruList.slice(0, 8)

  return (
    <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <h2 className="section-title">Pendidik &amp; Tenaga Kependidikan</h2>
            <p className="section-subtitle mb-0">Tim pengajar profesional kami</p>
          </div>
          <Link href="/profil/guru" className="btn-outline hidden sm:inline-flex">
            Lihat Semua →
          </Link>
        </div>

        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-5">
          {preview.map((guru, i) => (
            <div key={guru.name} className="card p-4 md:p-5 text-center">
              <div
                className={`w-12 h-12 md:w-14 md:h-14 ${colors[i % colors.length]} rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base mx-auto mb-3`}
              >
                {getInitials(guru.name)}
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-white text-xs md:text-sm leading-snug mb-1.5 font-poppins line-clamp-2">
                {guru.name}
              </h3>
              {guru.mapel ? (
                <span className="inline-block bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-2xs md:text-xs px-2 py-0.5 rounded-full font-roboto">
                  {guru.mapel}
                </span>
              ) : (
                <span className="inline-block bg-gold-500/10 text-gold-600 dark:text-gold-400 text-2xs md:text-xs px-2 py-0.5 rounded-full font-roboto">
                  {guru.jabatan}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-6 sm:hidden">
          <Link href="/profil/guru" className="btn-outline">Lihat Semua Guru</Link>
        </div>
      </div>
    </section>
  )
}

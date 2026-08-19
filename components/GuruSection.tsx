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
]

export default function GuruSection() {
  const preview = guruList.slice(0, 8)

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="section-title">Pendidik &amp; Tenaga Kependidikan</h2>
            <p className="section-subtitle mb-0">Tim pengajar profesional kami</p>
          </div>
          <Link href="/profil/guru" className="btn-outline text-sm hidden sm:inline-block">
            Lihat Semua →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {preview.map((guru, i) => (
            <div key={guru.name} className="card p-5 text-center">
              <div
                className={`w-16 h-16 ${colors[i % colors.length]} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3`}
              >
                {getInitials(guru.name)}
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-white text-sm leading-snug mb-1">
                {guru.name}
              </h3>
              {guru.mapel ? (
                <span className="inline-block bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-xs px-2 py-0.5 rounded-full">
                  {guru.mapel}
                </span>
              ) : (
                <span className="inline-block bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs px-2 py-0.5 rounded-full">
                  {guru.jabatan}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/profil/guru" className="btn-outline sm:hidden">Lihat Semua Guru</Link>
        </div>
      </div>
    </section>
  )
}

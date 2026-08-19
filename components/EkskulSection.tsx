import { ekskulList } from '@/lib/data'
import Icon from '@/components/Icon'
import Link from 'next/link'

const iconColors = [
  'text-amber-600 bg-amber-50 dark:bg-amber-900/20',
  'text-blue-600 bg-blue-50 dark:bg-blue-900/20',
  'text-rose-600 bg-rose-50 dark:bg-rose-900/20',
  'text-orange-600 bg-orange-50 dark:bg-orange-900/20',
  'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20',
  'text-green-600 bg-green-50 dark:bg-green-900/20',
  'text-purple-600 bg-purple-50 dark:bg-purple-900/20',
  'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20',
  'text-teal-600 bg-teal-50 dark:bg-teal-900/20',
  'text-cyan-600 bg-cyan-50 dark:bg-cyan-900/20',
  'text-slate-600 bg-slate-100 dark:bg-slate-700/50',
  'text-red-600 bg-red-50 dark:bg-red-900/20',
]

export default function EkskulSection() {
  const preview = ekskulList.slice(0, 8)

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <h2 className="section-title">Ekstrakurikuler</h2>
            <p className="section-subtitle mb-0">Kembangkan bakat dan minat bersama kami</p>
          </div>
          <Link href="/kesiswaan/ekskul" className="btn-outline hidden sm:inline-flex">Lihat Semua →</Link>
        </div>

        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {preview.map((ekskul, i) => (
            <div key={ekskul.nama} className="card p-4 md:p-5 hover:border-primary-200 dark:hover:border-primary-800 border border-transparent transition-all group">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-3 ${iconColors[i % iconColors.length]}`}>
                <Icon name={ekskul.icon} size={20} strokeWidth={1.75} />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-white text-xs md:text-sm mb-1 font-poppins group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {ekskul.nama}
              </h3>
              <p className="text-2xs md:text-xs text-slate-500 dark:text-slate-400 line-clamp-2 font-roboto">{ekskul.deskripsi}</p>
              <p className="text-2xs text-primary-600 dark:text-primary-400 mt-2 font-medium font-roboto hidden sm:block">{ekskul.pembina}</p>
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

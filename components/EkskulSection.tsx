import { ekskulList } from '@/lib/data'
import Link from 'next/link'

export default function EkskulSection() {
  const preview = ekskulList.slice(0, 8)

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <h2 className="section-title">Ekstrakurikuler</h2>
            <p className="section-subtitle mb-0">
              Kembangkan bakat dan minat bersama kami
            </p>
          </div>
          <Link href="/kesiswaan/ekskul" className="btn-outline hidden sm:inline-flex">
            Lihat Semua →
          </Link>
        </div>

        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {preview.map((ekskul) => (
            <div
              key={ekskul.nama}
              className="card p-4 md:p-5 text-center hover:border-primary-300 dark:hover:border-primary-700 border border-transparent transition-all group"
            >
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">{ekskul.icon}</div>
              <h3 className="font-semibold text-slate-800 dark:text-white text-xs md:text-sm mb-1 font-poppins group-hover:text-primary-600 transition-colors">
                {ekskul.nama}
              </h3>
              <p className="text-2xs md:text-xs text-slate-500 dark:text-slate-400 line-clamp-2 font-roboto">
                {ekskul.deskripsi}
              </p>
              <p className="text-2xs md:text-xs text-primary-600 dark:text-primary-400 mt-2 font-medium font-roboto hidden sm:block">
                {ekskul.pembina}
              </p>
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

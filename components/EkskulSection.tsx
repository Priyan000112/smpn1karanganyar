import { ekskulList } from '@/lib/data'
import Link from 'next/link'

export default function EkskulSection() {
  const preview = ekskulList.slice(0, 8)

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="section-title">Ekstrakurikuler</h2>
            <p className="section-subtitle mb-0">
              Kembangkan bakat dan minatmu bersama kami
            </p>
          </div>
          <Link href="/kesiswaan/ekskul" className="btn-outline text-sm hidden sm:inline-block">
            Lihat Semua →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {preview.map((ekskul) => (
            <div
              key={ekskul.nama}
              className="card p-5 text-center hover:border-primary-300 border border-transparent dark:border-transparent dark:hover:border-primary-700 cursor-default"
            >
              <div className="text-4xl mb-3">{ekskul.icon}</div>
              <h3 className="font-semibold text-slate-800 dark:text-white text-sm mb-1">{ekskul.nama}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{ekskul.deskripsi}</p>
              <p className="text-xs text-primary-600 dark:text-primary-400 mt-2 font-medium">
                {ekskul.pembina}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link href="/kesiswaan/ekskul" className="btn-outline">Lihat Semua Ekskul</Link>
        </div>
      </div>
    </section>
  )
}

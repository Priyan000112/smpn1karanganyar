import { fasilitasList } from '@/lib/data'
import Link from 'next/link'

export default function FasilitasSection() {
  return (
    <section className="py-16 bg-primary-700 dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">Fasilitas Unggulan</h2>
          <p className="text-primary-200">Sarana dan prasarana lengkap untuk mendukung proses belajar mengajar</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {fasilitasList.map((f) => (
            <div key={f.nama} className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-2xl p-5 transition-colors">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white text-sm mb-1">{f.nama}</h3>
              <p className="text-primary-300 text-xs font-bold mb-1">{f.jumlah}</p>
              <p className="text-primary-200 text-xs">{f.deskripsi}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/infrastruktur/fasilitas" className="inline-block bg-white text-primary-700 font-semibold px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors">
            Lihat Detail Fasilitas →
          </Link>
        </div>
      </div>
    </section>
  )
}

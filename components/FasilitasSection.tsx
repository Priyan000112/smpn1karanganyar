import { fasilitasList } from '@/lib/data'
import Icon from '@/components/Icon'
import Link from 'next/link'

export default function FasilitasSection() {
  return (
    <section className="py-12 md:py-16 bg-primary-700 dark:bg-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white transform -translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 font-poppins">Fasilitas Unggulan</h2>
          <p className="text-primary-200 text-sm md:text-base font-roboto">Sarana dan prasarana lengkap untuk mendukung proses belajar mengajar</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {fasilitasList.map((f) => (
            <div key={f.nama} className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-xl md:rounded-2xl p-4 md:p-5 transition-colors border border-white/10 hover:border-white/20 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/15 group-hover:bg-white/25 rounded-xl flex items-center justify-center mb-3 transition-colors">
                <Icon name={f.icon} size={20} className="text-white" strokeWidth={1.75} />
              </div>
              <h3 className="font-semibold text-white text-xs md:text-sm mb-0.5 font-poppins">{f.nama}</h3>
              <p className="text-amber-300 text-2xs md:text-xs font-bold mb-1 font-roboto">{f.jumlah}</p>
              <p className="text-primary-200 text-2xs md:text-xs font-roboto hidden sm:block">{f.deskripsi}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 md:mt-10">
          <Link href="/infrastruktur" className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-lg hover:bg-primary-50 transition-colors text-sm md:text-base font-poppins shadow-md">
            Lihat Detail Fasilitas →
          </Link>
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Mars Sekolah' }

const lirik = `Samakan langkah rapatkan barisan
Putra-putri tunas bangsa yang setya
Kobarkan semangat di dalam jiwa
Tuk gapai cita-cita

Gunakan waktu jangan sia-siakan
Karang dan badai siaga menerjang
Tabuh genderang maju dan jelang
Masa depan gemilang

Wujudkan pribadi beriman berbudi
Cerdas santun dan peduli
Kreatif mandiri dan berdaya saing
SMP Negeri Satu Karanganyar nan jaya

Jaya... jaya... jaya...
SMP Negeri 1 Karanganyar
Kami bangga padamu
Almamater tercinta`

export default function MarsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="section-title">Mars Sekolah</h1>
      <p className="section-subtitle">Mars SMP Negeri 1 Karanganyar</p>

      <div className="card p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🎵</span>
          <div>
            <h2 className="font-bold text-slate-800 dark:text-white text-xl">Mars SMP Negeri 1 Karanganyar</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Hymne dan Mars Kebanggaan</p>
          </div>
        </div>

        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 mb-6">
          <pre className="font-sans text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-loose text-base">
            {lirik}
          </pre>
        </div>

        <div className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
          <span className="text-2xl">🎶</span>
          <div>
            <p className="font-semibold text-amber-800 dark:text-amber-300 text-sm">Audio Mars</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">File audio mars akan tersedia segera. Hubungi TU untuk informasi lebih lanjut.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import { kalenderAkademik, materiPembelajaran } from '@/lib/data'

export const metadata: Metadata = { title: 'Akademik' }

export default function AkademikPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="section-title">Akademik</h1>
      <p className="section-subtitle">Informasi kurikulum, materi, dan kalender akademik</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Kalender */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
            📅 Kalender Akademik 2026/2027
          </h2>
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Kegiatan</th>
                  <th className="px-4 py-3 text-left">Tanggal</th>
                  <th className="px-4 py-3 text-left">Kategori</th>
                </tr>
              </thead>
              <tbody>
                {kalenderAkademik.map((item, i) => (
                  <tr key={i} className={`border-b dark:border-slate-700 ${i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-900'}`}>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{item.kegiatan}</td>
                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400 text-xs">{item.tanggal}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        item.kategori === 'Akademik' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400' :
                        item.kategori === 'Ujian' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' :
                        item.kategori === 'Libur' ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400' :
                        'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
                      }`}>
                        {item.kategori}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Materi */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
            📚 Materi Pembelajaran
          </h2>
          <div className="space-y-4">
            {materiPembelajaran.map((kelas) => (
              <div key={kelas.kelas} className="card overflow-hidden">
                <div className="bg-primary-600 text-white px-4 py-2.5 font-semibold text-sm">{kelas.kelas}</div>
                <div className="divide-y dark:divide-slate-700">
                  {kelas.mapel.map((m) => (
                    <div key={m.nama} className="flex items-center justify-between px-4 py-3">
                      <div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{m.nama}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{m.topik}</p>
                      </div>
                      <a href={m.file} className="text-xs text-primary-600 dark:text-primary-400 hover:underline flex-shrink-0 ml-4">
                        Unduh ↓
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

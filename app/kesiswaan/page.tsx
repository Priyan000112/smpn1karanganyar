import type { Metadata } from 'next'
import { ekskulList } from '@/lib/data'

export const metadata: Metadata = { title: 'Kesiswaan' }

export default function KesiswaanPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="section-title">Kesiswaan</h1>
      <p className="section-subtitle">Organisasi siswa dan kegiatan ekstrakurikuler</p>

      {/* OSIS */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
          🏛️ Organisasi Siswa Intra Sekolah (OSIS)
        </h2>
        <div className="card p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-white mb-3">Pengurus OSIS 2026/2027</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y dark:divide-slate-700">
                  {[
                    { jabatan: 'Ketua OSIS', nama: 'Rizky Pratama (9A)' },
                    { jabatan: 'Wakil Ketua', nama: 'Sari Pertiwi (9B)' },
                    { jabatan: 'Sekretaris 1', nama: 'Danu Wijaya (8A)' },
                    { jabatan: 'Sekretaris 2', nama: 'Farah Nadia (8C)' },
                    { jabatan: 'Bendahara 1', nama: 'Bagas Saputra (9C)' },
                    { jabatan: 'Bendahara 2', nama: 'Dita Anggraini (8B)' },
                  ].map((p) => (
                    <tr key={p.jabatan}>
                      <td className="py-2.5 text-slate-500 dark:text-slate-400 w-1/2">{p.jabatan}</td>
                      <td className="py-2.5 font-medium text-slate-700 dark:text-slate-300">{p.nama}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-white mb-3">Program Kerja Unggulan</h3>
              <ul className="space-y-2">
                {[
                  'MPLS (Masa Pengenalan Lingkungan Sekolah)',
                  'Peringatan Hari Besar Nasional',
                  'Class Meeting Antar Kelas',
                  'Bakti Sosial dan Peduli Lingkungan',
                  'Pemilihan Siswa Berprestasi',
                  'Pensi (Pentas Seni) Tahunan',
                ].map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-primary-500">✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ekskul */}
      <section>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
          🎯 Ekstrakurikuler
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {ekskulList.map((ekskul) => (
            <div key={ekskul.nama} className="card p-5 text-center">
              <div className="text-4xl mb-3">{ekskul.icon}</div>
              <h3 className="font-semibold text-slate-800 dark:text-white text-sm mb-1">{ekskul.nama}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{ekskul.deskripsi}</p>
              <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">Pembina: {ekskul.pembina}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

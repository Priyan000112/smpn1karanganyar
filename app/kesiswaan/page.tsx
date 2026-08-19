import type { Metadata } from 'next'
import { ekskulList } from '@/lib/data'
import Icon from '@/components/Icon'
import { Users, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = { title: 'Kesiswaan' }

export default function KesiswaanPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <h1 className="section-title">Kesiswaan</h1>
      <p className="section-subtitle">Organisasi siswa dan kegiatan ekstrakurikuler</p>

      {/* OSIS */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2 font-poppins">
          <Users size={20} className="text-primary-600" strokeWidth={1.75} />
          Organisasi Siswa Intra Sekolah (OSIS)
        </h2>
        <div className="card p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-white mb-3 font-poppins">Pengurus OSIS 2026/2027</h3>
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
                      <td className="py-2.5 text-slate-500 dark:text-slate-400 w-1/2 font-roboto">{p.jabatan}</td>
                      <td className="py-2.5 font-medium text-slate-700 dark:text-slate-300 font-roboto">{p.nama}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-white mb-3 font-poppins">Program Kerja Unggulan</h3>
              <ul className="space-y-2">
                {[
                  'MPLS (Masa Pengenalan Lingkungan Sekolah)',
                  'Peringatan Hari Besar Nasional',
                  'Class Meeting Antar Kelas',
                  'Bakti Sosial dan Peduli Lingkungan',
                  'Pemilihan Siswa Berprestasi',
                  'Pensi (Pentas Seni) Tahunan',
                ].map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400 font-roboto">
                    <CheckCircle2 size={16} className="text-primary-500 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ekskul */}
      <section>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6 font-poppins">
          Ekstrakurikuler
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {ekskulList.map((ekskul, i) => {
            const colors = [
              'bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
              'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
              'bg-rose-100 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400',
              'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
              'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
              'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
              'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
              'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400',
              'bg-teal-100 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400',
              'bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400',
              'bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400',
              'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400',
            ]
            return (
              <div key={ekskul.nama} className="card p-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${colors[i % colors.length]}`}>
                  <Icon name={ekskul.icon} size={20} strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-white text-sm mb-1 font-poppins">{ekskul.nama}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-roboto">{ekskul.deskripsi}</p>
                <p className="text-xs text-primary-600 dark:text-primary-400 font-medium font-roboto">Pembina: {ekskul.pembina}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

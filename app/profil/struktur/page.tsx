import type { Metadata } from 'next'
import { strukturOrganisasi } from '@/lib/data'

export const metadata: Metadata = { title: 'Struktur Organisasi' }

export default function StrukturPage() {
  const level1 = strukturOrganisasi.filter((s) => s.level === 1)
  const level2 = strukturOrganisasi.filter((s) => s.level === 2)
  const level3 = strukturOrganisasi.filter((s) => s.level === 3)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="section-title">Struktur Organisasi</h1>
      <p className="section-subtitle">Bagan organisasi SMP Negeri 1 Karanganyar</p>

      <div className="space-y-8">
        {/* Level 1 */}
        <div className="flex justify-center">
          {level1.map((s) => (
            <div key={s.nama} className="bg-primary-600 text-white rounded-2xl p-5 text-center w-64 shadow-lg">
              <div className="text-3xl mb-2">👨‍💼</div>
              <p className="font-bold text-sm">{s.jabatan}</p>
              <p className="text-primary-200 text-xs mt-1">{s.nama}</p>
            </div>
          ))}
        </div>

        {/* Connector */}
        <div className="flex justify-center">
          <div className="w-0.5 h-8 bg-slate-300 dark:bg-slate-600" />
        </div>

        {/* Level 2 */}
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="flex justify-around">
              {level2.map((s) => (
                <div key={s.nama} className="card p-4 text-center w-40 border-2 border-primary-200 dark:border-primary-800">
                  <div className="text-2xl mb-2">👩‍🏫</div>
                  <p className="font-semibold text-xs text-slate-700 dark:text-slate-300">{s.jabatan}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">{s.nama}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center">
          <div className="w-0.5 h-8 bg-slate-300 dark:bg-slate-600" />
        </div>

        {/* Level 3 */}
        <div>
          <h3 className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">Staf & Wali Kelas</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {level3.map((s) => (
              <div key={s.nama} className="card p-4 text-center">
                <p className="font-semibold text-sm text-slate-700 dark:text-slate-300">{s.jabatan}</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">{s.nama}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import { guruList } from '@/lib/data'

export const metadata: Metadata = { title: 'Data Guru' }

function getInitials(name: string) {
  return name.replace(/[^a-zA-Z\s]/g, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()
}

const colors = ['bg-blue-500','bg-emerald-500','bg-violet-500','bg-amber-500','bg-rose-500','bg-cyan-500','bg-orange-500','bg-teal-500']

export default function GuruPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="section-title">Daftar Guru</h1>
      <p className="section-subtitle">Pendidik profesional SMP Negeri 1 Karanganyar</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {guruList.map((guru, i) => (
          <div key={guru.name} className="card p-5 text-center">
            <div className={`w-16 h-16 ${colors[i % colors.length]} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3`}>
              {getInitials(guru.name)}
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-white text-sm leading-snug mb-2">{guru.name}</h3>
            {guru.mapel ? (
              <span className="inline-block bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-xs px-2 py-0.5 rounded-full">{guru.mapel}</span>
            ) : (
              <span className="inline-block bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs px-2 py-0.5 rounded-full">{guru.jabatan}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

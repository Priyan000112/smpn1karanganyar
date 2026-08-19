import type { Metadata } from 'next'
import { stafList } from '@/lib/data'

export const metadata: Metadata = { title: 'Data Staf' }

function getInitials(name: string) {
  return name.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()
}

export default function StafPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="section-title">Tenaga Kependidikan</h1>
      <p className="section-subtitle">Staf administrasi dan pendukung SMP Negeri 1 Karanganyar</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {stafList.map((staf, i) => (
          <div key={staf.name} className="card p-5 text-center">
            <div className={`w-16 h-16 bg-slate-${[400,500,600,700,800,900][i % 6]} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 bg-slate-600`}>
              {getInitials(staf.name)}
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-white text-sm mb-1">{staf.name}</h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">{staf.jabatan}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

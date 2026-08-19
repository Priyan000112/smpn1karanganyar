import type { Metadata } from 'next'
import { fasilitasList } from '@/lib/data'

export const metadata: Metadata = { title: 'Infrastruktur & Fasilitas' }

const learningTools = [
  { nama: 'Chromebook', jumlah: '120 unit', desc: 'Untuk pembelajaran berbasis digital dan Google Workspace', icon: '💻' },
  { nama: 'Proyektor Interaktif', jumlah: '30 unit', desc: 'Di setiap ruang kelas untuk presentasi dan pembelajaran visual', icon: '📽️' },
  { nama: 'Papan Tulis Digital', jumlah: '15 unit', desc: 'Smartboard untuk ruang khusus pembelajaran interaktif', icon: '🖥️' },
  { nama: 'E-Library', jumlah: '1 platform', desc: 'Akses 10.000+ e-book dan jurnal pendidikan', icon: '📱' },
  { nama: 'WiFi Campus', jumlah: '25 titik AP', desc: 'Jaringan WiFi berkecepatan tinggi di seluruh area sekolah', icon: '📶' },
  { nama: 'CCTV', jumlah: '40 kamera', desc: 'Sistem pemantauan untuk keamanan lingkungan sekolah', icon: '📷' },
]

export default function InfrastrukturPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="section-title">Infrastruktur</h1>
      <p className="section-subtitle">Sarana, prasarana, dan perangkat pembelajaran modern</p>

      {/* Fasilitas */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">🏫 Fasilitas Sekolah</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {fasilitasList.map((f) => (
            <div key={f.nama} className="card p-5">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-slate-800 dark:text-white text-sm mb-1">{f.nama}</h3>
              <p className="text-primary-600 dark:text-primary-400 text-xs font-bold mb-1">{f.jumlah}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{f.deskripsi}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Tools */}
      <section>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">🔧 Learning Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {learningTools.map((lt) => (
            <div key={lt.nama} className="card p-5 border-l-4 border-primary-400">
              <div className="text-3xl mb-3">{lt.icon}</div>
              <h3 className="font-semibold text-slate-800 dark:text-white text-sm mb-1">{lt.nama}</h3>
              <p className="text-primary-600 dark:text-primary-400 text-xs font-bold mb-1">{lt.jumlah}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{lt.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

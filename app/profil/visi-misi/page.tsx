import type { Metadata } from 'next'
import { Target, ClipboardList, Award } from 'lucide-react'

export const metadata: Metadata = { title: 'Visi & Misi' }

const misiList = [
  'Menanamkan keyakinan terhadap kebesaran Tuhan Yang Maha Esa.',
  'Membudayakan sikap dan perilaku religius di lingkungan dalam dan luar sekolah.',
  'Melaksanakan pembelajaran yang kreatif, inovatif, dan kompetitif.',
  'Menumbuhkan minat, menggali, dan mengembangkan potensi melalui pembinaan yang intensif.',
  'Menciptakan suasana yang kondusif, transparansi, dan penuh kekeluargaan antar warga sekolah.',
  'Mempersiapkan warga sekolah dalam menghadapi perkembangan IPTEK.',
  'Mengembangkan manajemen partisipatif dengan melibatkan seluruh komponen pendidikan dan stakeholder.',
  'Mewujudkan insan yang berdisiplin tinggi dan berkepribadian Indonesia.',
  'Mewujudkan pelestarian budaya daerah dan lingkungan hidup.',
]

export default function VisiMisiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <h1 className="section-title">Visi &amp; Misi</h1>
      <p className="section-subtitle">Landasan arah pendidikan SMP Negeri 1 Karanganyar</p>

      {/* Visi */}
      <div className="bg-primary-600 rounded-2xl p-6 md:p-8 mb-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Target size={20} className="text-white" strokeWidth={2} />
          </div>
          <h2 className="text-2xl font-bold font-poppins">Visi</h2>
        </div>
        <p className="text-lg leading-relaxed text-primary-100 font-roboto">
          "Berakhlak Mulia, Berdaya Saing dalam Prestasi, Berbudaya, dan Berwawasan Lingkungan"
        </p>
      </div>

      {/* Misi */}
      <div className="card p-6 md:p-8 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
            <ClipboardList size={20} className="text-primary-600 dark:text-primary-400" strokeWidth={2} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-poppins">Misi</h2>
        </div>
        <ol className="space-y-4">
          {misiList.map((misi, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-bold font-poppins">
                {i + 1}
              </span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed pt-1 font-roboto">{misi}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Tujuan */}
      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 border border-amber-200 dark:border-amber-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
            <Award size={20} className="text-amber-600 dark:text-amber-400" strokeWidth={2} />
          </div>
          <h2 className="text-xl font-bold text-amber-800 dark:text-amber-300 font-poppins">Tujuan Sekolah</h2>
        </div>
        <p className="text-amber-700 dark:text-amber-400 leading-relaxed font-roboto">
          Menghasilkan lulusan yang beriman, bertakwa, berakhlak mulia, cerdas, terampil, kreatif, inovatif, dan berdaya saing tinggi untuk melanjutkan pendidikan ke jenjang yang lebih tinggi serta siap berkontribusi bagi masyarakat, bangsa, dan negara.
        </p>
      </div>
    </div>
  )
}

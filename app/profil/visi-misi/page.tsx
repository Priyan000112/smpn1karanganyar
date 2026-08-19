import type { Metadata } from 'next'
import { Target, ClipboardList, Award } from 'lucide-react'

export const metadata: Metadata = { title: 'Visi & Misi' }

const misiList = [
  'Mewujudkan profil pelajar Pancasila yang beriman, bertaqwa kepada Tuhan YME dan berakhlak mulia, berkebhinekaan global, bergotong-royong, mandiri, bernalar kritis dan kreatif.',
  'Mewujudkan lingkungan sekolah sebagai tempat perkembangan intelektual, keterampilan sosial, emosional, dan pengembangan budaya lokal dalam konteks kebhinekaan global.',
  'Menumbuhkan karakter 4C (creative, critical thinking, collaboration, and communication) dalam proses pembelajaran dengan penguatan literasi dan numerasi sebagai ciri kompetensi abad 21 melalui pembelajaran berdiferensiasi yang menyenangkan.',
  'Mewujudkan warga sekolah yang berwawasan lingkungan dan peduli terhadap kehidupan berkelanjutan sebagai bagian dari warga dunia.',
  'Mengembangkan fasilitas dan sumber belajar yang dapat memfasilitasi pembelajaran peserta didik sesuai kebutuhan generasi masa kini.',
  'Mewujudkan keorganisasian dan manajemen sekolah yang kolaboratif kolegial dalam rangka meningkatkan manajemen satuan pendidikan yang adaptif, berkarakter, dan menjamin mutu pendidikan.',
  'Menjamin hak belajar setiap peserta didik tanpa terkecuali termasuk peserta didik yang berkebutuhan khusus (inklusi) dalam proses pembelajaran yang menjunjung tinggi nilai gotong-royong.',
  'Menciptakan partisipasi aktif orang tua dan masyarakat dalam keberagaman yang mewadahi kreativitas peserta didik.',
  'Mewujudkan asesmen yang memberi ruang bagi berkembangnya karakter pembelajar sepanjang hayat.',
  'Mewujudkan lingkungan sekolah yang sehat, asri, nyaman dan aman.',
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
          Terwujudnya peserta didik yang berakhlak mulia, menjunjung tinggi toleransi dan cinta tanah air, serta memiliki kecakapan abad 21 untuk menjawab tantangan global.
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

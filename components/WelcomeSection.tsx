import Image from 'next/image'
import { schoolInfo } from '@/lib/data'

export default function WelcomeSection() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Kepala sekolah */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="relative w-40 h-52 rounded-2xl overflow-hidden shadow-lg bg-slate-200 dark:bg-slate-700">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  👨‍💼
                </div>
              </div>
              <div className="text-center mt-3">
                <p className="font-semibold text-slate-800 dark:text-white text-sm">Drs. Bambang Sutrisno, M.Pd</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Kepala Sekolah</p>
              </div>
            </div>
            <div>
              <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Sambutan Kepala Sekolah
              </span>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Selamat Datang</h2>
              <div className="text-sm text-slate-600 dark:text-slate-400 space-y-3 leading-relaxed">
                <p>Assalaamu'alaikum Warahmatullahi Wabarakatuh.</p>
                <p>
                  Puji syukur kami panjatkan ke hadirat Tuhan Yang Maha Esa atas limpahan rahmat-Nya sehingga website resmi SMP Negeri 1 Karanganyar dapat hadir sebagai sarana informasi dan publikasi kemajuan sekolah kami.
                </p>
                <p>
                  SMP Negeri 1 Karanganyar berkomitmen untuk terus meningkatkan kualitas pendidikan yang menghasilkan lulusan berakhlak mulia, berprestasi, dan siap menghadapi tantangan global.
                </p>
                <p>
                  Kami mengundang seluruh warga sekolah, orang tua, dan masyarakat untuk bersama-sama mewujudkan pendidikan yang berkualitas.
                </p>
                <p className="font-medium">Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
              </div>
            </div>
          </div>

          {/* Visi Misi singkat */}
          <div className="space-y-6">
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-6 border border-primary-100 dark:border-primary-800">
              <h3 className="font-bold text-primary-700 dark:text-primary-400 mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span> Visi
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                Terwujudnya peserta didik yang berakhlak mulia, menjunjung tinggi toleransi dan cinta tanah air, serta memiliki kecakapan abad 21 untuk menjawab tantangan global.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
              <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">📋</span> Misi (Ringkasan)
              </h3>
              <ul className="space-y-2">
                {[
                  'Mewujudkan profil pelajar Pancasila yang beriman, bertaqwa, dan berakhlak mulia',
                  'Menumbuhkan karakter 4C (Creative, Critical, Collaborative, Communicative)',
                  'Mengembangkan fasilitas dan sumber belajar yang modern dan inovatif',
                  'Menjamin hak belajar setiap peserta didik termasuk inklusi',
                ].map((misi, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-primary-500 flex-shrink-0 mt-0.5">✓</span>
                    {misi}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-4 border border-amber-200 dark:border-amber-800 flex items-center gap-4">
              <span className="text-3xl">🏆</span>
              <div>
                <p className="font-bold text-amber-700 dark:text-amber-400 text-sm">Akreditasi A</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Berdasarkan penilaian BAN-S/M terbaru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'

export default function WelcomeSection() {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* Kepala Sekolah */}
          <div className="flex flex-col xs:flex-row gap-5 items-start">
            {/* Foto kepsek */}
            <div className="flex-shrink-0 mx-auto xs:mx-0">
              <div className="relative">
                {/* Bingkai luar */}
                <div className="w-36 xs:w-40 md:w-44 h-48 xs:h-52 md:h-56 rounded-lg overflow-hidden shadow-xl border-4 border-white dark:border-slate-700 ring-4 ring-primary-600 dark:ring-primary-500">
                  <Image
                    src="/images/kepsek.jpg"
                    alt="Kepala Sekolah SMPN 1 Karanganyar"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 480px) 144px, 176px"
                    priority
                  />
                </div>
                {/* Badge nama di bawah foto */}
                <div className="mt-0 bg-primary-700 text-white text-center py-2 px-2 rounded-b-lg -mt-1 shadow-md">
                  <p className="font-bold text-white text-xs font-poppins leading-tight">Kurniah, S.Pd</p>
                  <p className="text-primary-200 text-2xs font-roboto">Kepala Sekolah</p>
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <span className="inline-block bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-xs font-semibold px-3 py-1 rounded-full mb-3 font-poppins uppercase tracking-wide">
                Sambutan Kepala Sekolah
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-4 font-poppins">
                Selamat Datang
              </h2>
              <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2.5 leading-relaxed font-roboto">
                <p className="font-medium text-slate-700 dark:text-slate-300">
                  Assalaamu'alaikum Warahmatullahi Wabarakatuh.
                </p>
                <p>
                  Puji syukur kami panjatkan ke hadirat Tuhan Yang Maha Esa atas limpahan rahmat-Nya sehingga website resmi SMP Negeri 1 Karanganyar dapat hadir sebagai sarana informasi dan publikasi kemajuan sekolah kami.
                </p>
                <p>
                  SMP Negeri 1 Karanganyar berkomitmen untuk terus meningkatkan kualitas pendidikan yang menghasilkan lulusan berakhlak mulia, berprestasi, dan siap menghadapi tantangan global.
                </p>
                <p>
                  Kami mengundang seluruh warga sekolah, orang tua, dan masyarakat untuk bersama-sama mewujudkan pendidikan yang berkualitas demi masa depan bangsa.
                </p>
                <p className="font-medium text-slate-700 dark:text-slate-300">
                  Wassalamu'alaikum Warahmatullahi Wabarakatuh
                </p>
              </div>
            </div>
          </div>

          {/* Visi Misi + Badge */}
          <div className="space-y-4 md:space-y-5">
            {/* Visi */}
            <div className="bg-primary-600 rounded-2xl p-5 md:p-6 text-white shadow-md">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-2xl">🎯</span>
                <h3 className="font-bold text-lg font-poppins">Visi</h3>
              </div>
              <p className="text-primary-100 text-sm leading-relaxed font-roboto">
                "Berakhlak Mulia, Berdaya Saing dalam Prestasi, Berbudaya, dan Berwawasan Lingkungan"
              </p>
            </div>

            {/* Misi ringkas */}
            <div className="card p-5 md:p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-2xl">📋</span>
                <h3 className="font-bold text-slate-800 dark:text-white font-poppins">Misi (Ringkasan)</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  'Menanamkan keyakinan terhadap kebesaran Tuhan Yang Maha Esa',
                  'Membudayakan sikap dan perilaku religius di lingkungan dalam dan luar sekolah',
                  'Melaksanakan pembelajaran yang kreatif, inovatif, dan kompetitif',
                  'Menumbuhkan minat, menggali, dan mengembangkan potensi melalui pembinaan yang intensif',
                  'Menciptakan suasana yang kondusif, transparansi, dan penuh kekeluargaan antar warga sekolah',
                  'Mempersiapkan warga sekolah dalam menghadapi perkembangan IPTEK',
                  'Mengembangkan manajemen partisipatif dengan melibatkan seluruh komponen pendidikan dan stakeholder',
                  'Mewujudkan insan yang berdisiplin tinggi dan berkepribadian Indonesia',
                  'Mewujudkan pelestarian budaya daerah dan lingkungan hidup',
                ].map((misi, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400 font-roboto">
                    <span className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {misi}
                  </li>
                ))}
              </ul>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4 flex items-center gap-3">
                <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <p className="font-bold text-amber-700 dark:text-amber-400 text-sm font-poppins">Akreditasi A</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-roboto">BAN-S/M</p>
              </div>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 flex items-center gap-3">
                <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-2xl">🌿</span>
              </div>
              <div>
                <p className="font-bold text-emerald-700 dark:text-emerald-400 text-sm font-poppins">Adiwiyata</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-roboto">Tingkat Provinsi</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

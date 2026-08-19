import Image from 'next/image'

export default function WelcomeSection() {
  return (
    <section className="py-10 md:py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

          {/* Kolom kiri: foto + sambutan */}
          <div>
            {/* Mobile: foto di atas tengah, teks di bawah full width */}
            {/* Desktop: foto kiri, teks kanan */}
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">

              {/* Foto kepsek — bingkai siku emas */}
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div className="relative" style={{ width: 'fit-content' }}>
                  <span className="absolute -top-1.5 -left-1.5 w-5 h-5 md:w-6 md:h-6 border-t-2 border-l-2 z-10" style={{ borderColor: '#c9982f' }} />
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 md:w-6 md:h-6 border-t-2 border-r-2 z-10" style={{ borderColor: '#c9982f' }} />
                  <span className="absolute -bottom-1.5 -left-1.5 w-5 h-5 md:w-6 md:h-6 border-b-2 border-l-2 z-10" style={{ borderColor: '#c9982f' }} />
                  <span className="absolute -bottom-1.5 -right-1.5 w-5 h-5 md:w-6 md:h-6 border-b-2 border-r-2 z-10" style={{ borderColor: '#c9982f' }} />
                  <div className="p-1 md:p-1.5" style={{ border: '1.5px solid #10265c', outline: '1px solid #10265c', outlineOffset: '4px' }}>
                    <div className="relative w-36 h-44 sm:w-32 sm:h-40 md:w-40 md:h-52 overflow-hidden">
                      <Image
                        src="/images/kepsek.jpg"
                        alt="Kepala Sekolah SMPN 1 Karanganyar"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 144px, (max-width: 768px) 128px, 160px"
                        priority
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-3 right-1 z-20">
                    <svg width="34" height="38" viewBox="0 0 52 58" fill="none">
                      <polygon points="26,2 48,15 48,43 26,56 4,43 4,15" fill="#e0b446" />
                      <polygon points="26,2 48,15 48,43 26,56 4,43 4,15" fill="none" stroke="#0a1840" strokeWidth="1.4" />
                      <path d="M26 16l3 7 7 1-5 5 1.5 7-6.5-3.5L19 36l1.5-7-5-5 7-1z" fill="#0a1840" />
                    </svg>
                  </div>
                </div>
                <div className="text-center mt-4 md:mt-5">
                  <p className="font-bold text-slate-800 dark:text-white text-sm" style={{fontFamily:'Open Sans, sans-serif'}}>Kurniah, S.Pd</p>
                  <p className="text-xs font-bold uppercase tracking-widest mt-0.5" style={{ color: '#c9982f', fontFamily:'Open Sans, sans-serif' }}>Kepala Sekolah</p>
                </div>
              </div>

              {/* Sambutan */}
              <div className="flex-1 min-w-0">
                <span className="inline-block bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wide" style={{fontFamily:'Open Sans, sans-serif'}}>
                  Sambutan Kepala Sekolah
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-3" style={{fontFamily:'Open Sans, sans-serif'}}>
                  Selamat Datang
                </h2>
                <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed" style={{fontFamily:'Merriweather, serif'}}>
                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    Assalaamu'alaikum Warahmatullahi Wabarakatuh.
                  </p>
                  <p>
                    Puji syukur kami panjatkan ke hadirat Tuhan Yang Maha Esa atas limpahan rahmat-Nya sehingga website resmi SMP Negeri 1 Karanganyar dapat hadir sebagai sarana informasi dan publikasi kemajuan sekolah.
                  </p>
                  <p>
                    SMP Negeri 1 Karanganyar berkomitmen menghasilkan lulusan berakhlak mulia, berprestasi, dan siap menghadapi tantangan global.
                  </p>
                  <p className="hidden md:block">
                    Kami mengundang seluruh warga sekolah, orang tua, dan masyarakat untuk bersama-sama mewujudkan pendidikan yang berkualitas.
                  </p>
                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    Wassalamu'alaikum Warahmatullahi Wabarakatuh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom kanan: Visi Misi */}
          <div className="space-y-3 md:space-y-5">
            {/* Visi */}
            <div className="rounded-xl md:rounded-2xl p-4 md:p-6 text-white shadow-md" style={{background:'#10265c'}}>
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <span className="text-xl md:text-2xl">🎯</span>
                <h3 className="font-bold text-base md:text-lg" style={{fontFamily:'Open Sans, sans-serif'}}>Visi</h3>
              </div>
              <p className="text-xs md:text-sm leading-relaxed" style={{color:'#c7cee3', fontFamily:'Merriweather, serif'}}>
                "Berakhlak Mulia, Berdaya Saing dalam Prestasi, Berbudaya, dan Berwawasan Lingkungan"
              </p>
            </div>

            {/* Misi */}
            <div className="card p-4 md:p-6">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <span className="text-xl md:text-2xl">📋</span>
                <h3 className="font-bold text-slate-800 dark:text-white text-sm md:text-base" style={{fontFamily:'Open Sans, sans-serif'}}>Misi</h3>
              </div>
              <ul className="space-y-2">
                {[
                  'Menanamkan keyakinan terhadap kebesaran Tuhan Yang Maha Esa',
                  'Membudayakan sikap dan perilaku religius di lingkungan sekolah',
                  'Melaksanakan pembelajaran yang kreatif, inovatif, dan kompetitif',
                  'Menumbuhkan minat dan mengembangkan potensi melalui pembinaan intensif',
                  'Menciptakan suasana kondusif dan penuh kekeluargaan antar warga sekolah',
                  'Mempersiapkan warga sekolah menghadapi perkembangan IPTEK',
                  'Mengembangkan manajemen partisipatif dengan seluruh komponen pendidikan',
                  'Mewujudkan insan berdisiplin tinggi dan berkepribadian Indonesia',
                  'Mewujudkan pelestarian budaya daerah dan lingkungan hidup',
                ].map((misi, i) => (
                  <li key={i} className="flex gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-400" style={{fontFamily:'Merriweather, serif'}}>
                    <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 flex items-center justify-center text-2xs md:text-xs font-bold flex-shrink-0 mt-0.5" style={{fontFamily:'Open Sans, sans-serif'}}>
                      {i + 1}
                    </span>
                    {misi}
                  </li>
                ))}
              </ul>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl p-3 md:p-4 flex items-center gap-2 md:gap-3">
                <span className="text-xl md:text-2xl flex-shrink-0">🏆</span>
                <div>
                  <p className="font-bold text-amber-700 dark:text-amber-400 text-xs md:text-sm" style={{fontFamily:'Open Sans, sans-serif'}}>Akreditasi A</p>
                  <p className="text-2xs md:text-xs text-slate-500 dark:text-slate-400" style={{fontFamily:'Merriweather, serif'}}>BAN-S/M</p>
                </div>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-3 md:p-4 flex items-center gap-2 md:gap-3">
                <span className="text-xl md:text-2xl flex-shrink-0">🌿</span>
                <div>
                  <p className="font-bold text-emerald-700 dark:text-emerald-400 text-xs md:text-sm" style={{fontFamily:'Open Sans, sans-serif'}}>Adiwiyata</p>
                  <p className="text-2xs md:text-xs text-slate-500 dark:text-slate-400" style={{fontFamily:'Merriweather, serif'}}>Tingkat Provinsi</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

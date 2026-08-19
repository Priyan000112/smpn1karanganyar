import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Sejarah Sekolah' }

export default function SejarahPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="section-title">Sejarah Sekolah</h1>
      <p className="section-subtitle">Perjalanan panjang SMP Negeri 1 Karanganyar</p>

      <div className="prose dark:prose-invert max-w-none">
        <div className="relative">
          {[
            {
              year: '1958',
              title: 'Pendirian Sekolah',
              desc: 'SMP Negeri 1 Karanganyar didirikan pada tahun 1958 sebagai salah satu sekolah menengah pertama negeri pertama di Kabupaten Karanganyar. Pada awal berdirinya, sekolah ini menempati gedung sederhana dengan hanya beberapa kelas.',
            },
            {
              year: '1975',
              title: 'Pengembangan Gedung',
              desc: 'Seiring pertumbuhan jumlah siswa, sekolah mendapat bantuan pembangunan gedung baru dari pemerintah. Fasilitas perpustakaan dan laboratorium IPA pertama mulai dibangun.',
            },
            {
              year: '1990',
              title: 'Era Modernisasi',
              desc: 'Memasuki era modernisasi, SMPN 1 Karanganyar mulai mengembangkan laboratorium komputer dan meningkatkan kualitas tenaga pengajar dengan berbagai pelatihan.',
            },
            {
              year: '2005',
              title: 'Akreditasi A',
              desc: 'Sekolah berhasil meraih akreditasi A dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M), menandai pengakuan atas kualitas pendidikan yang konsisten.',
            },
            {
              year: '2015',
              title: 'Sekolah Adiwiyata',
              desc: 'SMPN 1 Karanganyar meraih penghargaan sebagai Sekolah Adiwiyata tingkat Provinsi Jawa Tengah atas komitmennya dalam menciptakan lingkungan sekolah yang berwawasan lingkungan.',
            },
            {
              year: '2024',
              title: 'Transformasi Digital',
              desc: 'Implementasi kurikulum Merdeka Belajar berjalan penuh, dilengkapi dengan transformasi digital dalam proses pembelajaran. Website resmi sekolah diluncurkan sebagai sarana informasi publik.',
            },
          ].map((item, i) => (
            <div key={item.year} className="flex gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  {item.year}
                </div>
                {i < 5 && <div className="w-0.5 bg-primary-200 dark:bg-primary-800 flex-1 mt-2" />}
              </div>
              <div className="card p-5 flex-1 mb-0">
                <h3 className="font-bold text-slate-800 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

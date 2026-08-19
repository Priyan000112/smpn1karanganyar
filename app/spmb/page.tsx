import type { Metadata } from 'next'
import { MapPin, CalendarDays, FileText, Phone } from 'lucide-react'

export const metadata: Metadata = { title: 'SPMB 2026/2027' }

const jalur = [
  { nama: 'Jalur Zonasi', persen: '55%', desc: 'Berdasarkan jarak domisili tempat tinggal peserta didik ke sekolah', color: 'bg-blue-500', textColor: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20' },
  { nama: 'Jalur Afirmasi', persen: '15%', desc: 'Untuk peserta didik dari keluarga ekonomi tidak mampu / penerima KIP', color: 'bg-emerald-500', textColor: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
  { nama: 'Jalur Perpindahan Tugas', persen: '5%', desc: 'Untuk anak guru, TNI, Polri, dan ASN yang baru pindah tugas', color: 'bg-violet-500', textColor: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-900/20' },
  { nama: 'Jalur Prestasi', persen: '25%', desc: 'Berdasarkan nilai rapor atau prestasi akademik/non-akademik', color: 'bg-amber-500', textColor: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/20' },
]

const jadwal = [
  { kegiatan: 'Pengumuman SPMB', tanggal: 'Mei 2026' },
  { kegiatan: 'Pembuatan Akun SPMB', tanggal: '22 - 25 Juni 2026' },
  { kegiatan: 'Verifikasi Berkas & Aktivasi Akun', tanggal: '22 - 25 Juni 2026' },
  { kegiatan: 'Masa Pendaftaran Online', tanggal: '26 - 30 Juni 2026' },
  { kegiatan: 'Pengumuman Hasil Seleksi', tanggal: '3 Juli 2026' },
  { kegiatan: 'Daftar Ulang', tanggal: '4 - 7 Juli 2026' },
  { kegiatan: 'Hari Pertama Masuk Sekolah', tanggal: '14 Juli 2026' },
]

const persyaratan = [
  'Ijazah / SKL SD/MI asli dan fotokopi',
  'Akta Kelahiran asli dan fotokopi',
  'Kartu Keluarga (KK) asli dan fotokopi',
  'Pas foto terbaru ukuran 3x4 sebanyak 4 lembar',
  'Surat Keterangan Sehat dari dokter/puskesmas',
  'Nilai rapor kelas 4, 5, dan 6 semester ganjil',
  'Piagam prestasi (jika mendaftar jalur prestasi)',
  'Surat keterangan tidak mampu / KIP (jalur afirmasi)',
]

export default function SpmbPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div className="text-center mb-10">
        <span className="inline-block bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-xs font-semibold px-3 py-1 rounded-full mb-3 font-poppins uppercase tracking-wide">
          Tahun Ajaran 2026/2027
        </span>
        <h1 className="section-title">Sistem Penerimaan Murid Baru</h1>
        <p className="section-subtitle mb-0">Informasi lengkap SPMB SMP Negeri 1 Karanganyar</p>
      </div>

      {/* Jalur */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6 font-poppins">Jalur Penerimaan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {jalur.map((j) => (
            <div key={j.nama} className={`card p-5 flex gap-4 border-l-4 ${j.color}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${j.bg}`}>
                <MapPin size={20} className={j.textColor} strokeWidth={1.75} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-slate-800 dark:text-white font-poppins text-sm">{j.nama}</h3>
                  <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs px-2 py-0.5 rounded-full font-bold font-poppins">{j.persen}</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-roboto">{j.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Jadwal */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2 font-poppins">
            <CalendarDays size={20} className="text-primary-600" strokeWidth={1.75} />
            Jadwal Pendaftaran
          </h2>
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y dark:divide-slate-700">
                {jadwal.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-900'}>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-roboto">{item.kegiatan}</td>
                    <td className="px-4 py-3 text-primary-600 dark:text-primary-400 font-medium font-roboto whitespace-nowrap">{item.tanggal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Persyaratan */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2 font-poppins">
            <FileText size={20} className="text-primary-600" strokeWidth={1.75} />
            Persyaratan
          </h2>
          <div className="card p-5">
            <ul className="space-y-3">
              {persyaratan.map((p, i) => (
                <li key={i} className="flex gap-3 text-sm font-roboto">
                  <span className="w-6 h-6 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 pt-0.5">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-10 bg-primary-600 rounded-2xl p-6 md:p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-2 font-poppins">Siap Mendaftar?</h3>
        <p className="text-primary-200 mb-6 font-roboto">Pendaftaran dilakukan secara online melalui portal SPMB Kabupaten Karanganyar</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#" className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors font-poppins text-sm">
            Daftar Sekarang
          </a>
          <a href="tel:02714950559" className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-poppins text-sm">
            <Phone size={16} strokeWidth={2} />
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  )
}

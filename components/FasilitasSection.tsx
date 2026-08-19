import Link from 'next/link'
import HexBadge from '@/components/HexBadge'

const fasilitasData = [
  { nama: 'Ruang Kelas', jumlah: '30 Ruang', deskripsi: 'Dilengkapi proyektor dan AC',
    icon: <><path d="M4 21V9l8-6 8 6v12"/><path d="M9 21v-6h6v6"/></> },
  { nama: 'Laboratorium IPA', jumlah: '2 Lab', deskripsi: 'Peralatan sains lengkap dan modern',
    icon: <><path d="M9 2h6M10 2v6l-6 11a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-11V2"/></> },
  { nama: 'Laboratorium Komputer', jumlah: '2 Lab', deskripsi: '60 unit komputer terkoneksi internet',
    icon: <><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20h8M12 16v4"/></> },
  { nama: 'Perpustakaan', jumlah: '1 Ruang', deskripsi: '5.000+ koleksi buku dan e-library',
    icon: <><path d="M4 5c3-1.5 5.5-1.5 8 0 2.5-1.5 5-1.5 8 0v14c-3-1.5-5.5-1.5-8 0-2.5-1.5-5-1.5-8 0V5z"/><path d="M12 5v14"/></> },
  { nama: 'Lapangan Olahraga', jumlah: '2 Lapangan', deskripsi: 'Basket, voli, dan serbaguna',
    icon: <><circle cx="12" cy="12" r="9"/><path d="M12 6v12M6 12h12"/></> },
  { nama: 'Aula', jumlah: '1 Aula', deskripsi: 'Kapasitas 500 orang',
    icon: <><path d="M4 21V10l8-6 8 6v11"/><path d="M4 21h16M9 21v-5h6v5"/></> },
  { nama: 'Kantin Sehat', jumlah: '1 Kantin', deskripsi: 'Menu bergizi dan higienis',
    icon: <><path d="M5 9h14l-1 11H6L5 9z"/><path d="M8 9V6a4 4 0 0 1 8 0v3"/></> },
  { nama: 'Mushola', jumlah: '1 Mushola', deskripsi: 'Fasilitas ibadah siswa',
    icon: <><path d="M4 4v16M4 4h13l-2.5 3.5L17 11H4"/></> },
  { nama: 'UKS', jumlah: '1 Ruang', deskripsi: 'Kesehatan dan P3K',
    icon: <><path d="M12 21s-8-4.6-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6.4-8 11-8 11z"/><path d="M12 8v6M9 11h6"/></>, accent: 'maroon' as const },
]

export default function FasilitasSection() {
  return (
    <section className="py-12 md:py-16" style={{background:'#10265c'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 md:mb-10">
          <p className="text-xs tracking-widest uppercase font-bold mb-1" style={{color:'#e0b446'}}>Sarana &amp; Prasarana</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2" style={{color:'#f6f1e4', fontFamily:'Open Sans, sans-serif'}}>
            Fasilitas Unggulan
          </h2>
          <p className="text-sm md:text-base" style={{color:'#c7cee3', fontFamily:'Merriweather, serif'}}>
            Sarana dan prasarana lengkap untuk mendukung proses belajar mengajar.
          </p>
        </div>

        {/* Grid dengan divider seperti referensi */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px" style={{background:'rgba(230,220,190,0.15)', border:'1px solid rgba(230,220,190,0.15)'}}>
          {fasilitasData.map((f) => (
            <div key={f.nama} className="flex gap-4 p-5 md:p-6" style={{background:'#10265c'}}>
              <HexBadge variant="on-navy" accent={f.accent ?? 'default'} size="md">
                {f.icon}
              </HexBadge>
              <div>
                <h3 className="font-bold text-sm md:text-base" style={{color:'#f6f1e4', fontFamily:'Open Sans, sans-serif'}}>{f.nama}</h3>
                <p className="text-xs font-bold my-1" style={{color:'#e0b446'}}>{f.jumlah}</p>
                <p className="text-xs hidden sm:block" style={{color:'#b9c2dc', lineHeight:1.45, fontFamily:'Merriweather, serif'}}>{f.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/infrastruktur" className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-colors text-sm" style={{background:'#f6f1e4', color:'#10265c', fontFamily:'Open Sans, sans-serif'}}>
            Lihat Detail Fasilitas →
          </Link>
        </div>
      </div>
    </section>
  )
}

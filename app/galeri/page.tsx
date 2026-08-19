import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = { title: 'Galeri Foto & Video' }

const fotoList = [
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80', caption: 'Gedung Sekolah' },
  { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80', caption: 'Upacara Bendera' },
  { src: 'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?w=600&q=80', caption: 'Kegiatan Pramuka' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', caption: 'Olahraga Basket' },
  { src: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80', caption: 'Kegiatan Belajar' },
  { src: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80', caption: 'Olimpiade Sains' },
  { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80', caption: 'Lab Komputer' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', caption: 'Kegiatan Seni' },
  { src: 'https://images.unsplash.com/photo-1569447891824-5e0ea71bc56e?w=600&q=80', caption: 'Paskibra' },
]

const videoList = [
  { title: 'Profil SMPN 1 Karanganyar 2026', thumb: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80', url: '#' },
  { title: 'Kegiatan MPLS 2026/2027', thumb: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80', url: '#' },
  { title: 'Pentas Seni Tahunan 2026', thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', url: '#' },
]

export default function GaleriPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="section-title">Galeri</h1>
      <p className="section-subtitle">Dokumentasi kegiatan SMP Negeri 1 Karanganyar</p>

      {/* Foto */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">📷 Galeri Foto</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {fotoList.map((foto, i) => (
            <div key={i} className="relative group overflow-hidden rounded-2xl aspect-video">
              <Image src={foto.src} alt={foto.caption} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                <p className="text-white text-sm font-medium px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity">{foto.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">🎬 Galeri Video</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {videoList.map((video, i) => (
            <a key={i} href={video.url} className="card group overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <Image src={video.thumb} alt={video.title} fill className="object-cover group-hover:scale-105 transition-transform" sizes="300px" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-2xl pl-1 shadow-lg">
                    ▶
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="font-semibold text-sm text-slate-700 dark:text-slate-300 group-hover:text-primary-600 transition-colors">{video.title}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

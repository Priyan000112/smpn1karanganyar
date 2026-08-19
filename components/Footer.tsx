import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react'
import { schoolInfo, navItems } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                S1K
              </div>
              <div>
                <p className="font-bold text-white text-sm">{schoolInfo.shortName}</p>
                <p className="text-xs text-slate-400">{schoolInfo.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sekolah Menengah Pertama Negeri 1 Karanganyar — mendidik generasi unggul yang berkarakter, berprestasi, dan berakhlak mulia.
            </p>
            {/* Social media */}
            <div className="flex gap-3 mt-4">
              <a href={schoolInfo.socialMedia.instagram} target="_blank" rel="noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-primary-600 transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href={schoolInfo.socialMedia.facebook} target="_blank" rel="noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-primary-600 transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href={schoolInfo.socialMedia.youtube} target="_blank" rel="noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-primary-600 transition-colors" aria-label="YouTube">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Menu Utama</h3>
            <ul className="space-y-2">
              {navItems.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Info Sekolah</h3>
            <ul className="space-y-2">
              <li><Link href="/profil/visi-misi" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">Visi &amp; Misi</Link></li>
              <li><Link href="/profil/sejarah" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">Sejarah Sekolah</Link></li>
              <li><Link href="/profil/struktur" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">Struktur Organisasi</Link></li>
              <li><Link href="/kesiswaan/ekskul" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">Ekstrakurikuler</Link></li>
              <li><Link href="/infrastruktur/fasilitas" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">Fasilitas</Link></li>
              <li><Link href="/saran" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">Kotak Saran</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm">
                <MapPin size={16} className="flex-shrink-0 text-primary-400 mt-0.5" />
                <span className="text-slate-400">{schoolInfo.address}</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={16} className="flex-shrink-0 text-primary-400 mt-0.5" />
                <span className="text-slate-400">{schoolInfo.phone}</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail size={16} className="flex-shrink-0 text-primary-400 mt-0.5" />
                <span className="text-slate-400">{schoolInfo.email}</span>
              </li>
            </ul>
            {/* Map embed placeholder */}
            <div className="mt-4 rounded-lg overflow-hidden bg-slate-800 h-24 flex items-center justify-center text-slate-500 text-xs">
              📍 Karanganyar, Jawa Tengah
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <p>Copyright © {new Date().getFullYear()} — {schoolInfo.name} — All Rights Reserved</p>
          <p>Dibuat dengan ❤️ untuk pendidikan Indonesia</p>
        </div>
      </div>
    </footer>
  )
}

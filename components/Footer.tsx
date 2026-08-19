import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react'
import { schoolInfo, navItems } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-0">
      {/* Wave separator */}
      <div className="bg-slate-50 dark:bg-slate-950 h-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-slate-900 rounded-t-[50%]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Branding */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 relative flex-shrink-0 rounded-full overflow-hidden bg-white">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo SMPN 1 Karanganyar"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-white text-sm font-poppins">{schoolInfo.shortName}</p>
                <p className="text-xs text-slate-400 font-roboto leading-snug">{schoolInfo.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-roboto mb-4">
              Mendidik generasi unggul yang berkarakter, berprestasi, dan berakhlak mulia untuk Indonesia yang lebih baik.
            </p>
            <div className="flex gap-2.5">
              {[
                { href: schoolInfo.socialMedia.instagram, icon: Instagram, label: 'Instagram' },
                { href: schoolInfo.socialMedia.facebook, icon: Facebook, label: 'Facebook' },
                { href: schoolInfo.socialMedia.youtube, icon: Youtube, label: 'YouTube' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 bg-slate-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-poppins text-sm">Menu Utama</h3>
            <ul className="space-y-2">
              {navItems.slice(0, 7).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-primary-400 transition-colors font-roboto flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-poppins text-sm">Info Sekolah</h3>
            <ul className="space-y-2">
              {[
                { href: '/profil/visi-misi', label: 'Visi & Misi' },
                { href: '/profil/sejarah', label: 'Sejarah Sekolah' },
                { href: '/profil/struktur', label: 'Struktur Organisasi' },
                { href: '/kesiswaan/ekskul', label: 'Ekstrakurikuler' },
                { href: '/infrastruktur', label: 'Fasilitas' },
                { href: '/saran', label: 'Kotak Saran' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-primary-400 transition-colors font-roboto flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-poppins text-sm">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm">
                <MapPin size={15} className="flex-shrink-0 text-primary-400 mt-0.5" />
                <span className="text-slate-400 font-roboto text-xs leading-relaxed">{schoolInfo.address}</span>
              </li>
              <li className="flex gap-3 text-sm items-center">
                <Phone size={15} className="flex-shrink-0 text-primary-400" />
                <a href={`tel:${schoolInfo.phone}`} className="text-slate-400 hover:text-primary-400 font-roboto text-xs transition-colors">{schoolInfo.phone}</a>
              </li>
              <li className="flex gap-3 text-sm items-center">
                <Mail size={15} className="flex-shrink-0 text-primary-400" />
                <a href={`mailto:${schoolInfo.email}`} className="text-slate-400 hover:text-primary-400 font-roboto text-xs transition-colors break-all">{schoolInfo.email}</a>
              </li>
            </ul>

            {/* Google Maps Embed */}
            <div className="mt-4 rounded-xl overflow-hidden border border-slate-700 h-40">
              <iframe
                src="https://maps.google.com/maps?q=SMP+Negeri+1+Karanganyar+Purbalingga&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi SMP Negeri 1 Karanganyar"
              />
            </div>
            <a
              href="https://maps.google.com/?q=SMP+Negeri+1+Karanganyar+Purbalingga"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-primary-400 hover:text-primary-300 text-xs font-roboto transition-colors"
            >
              <MapPin size={12} /> Buka di Google Maps ↗
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500 font-roboto">
          <p>Copyright © {new Date().getFullYear()} — {schoolInfo.name}</p>
          <p>Dibuat dengan ❤️ untuk pendidikan Indonesia</p>
        </div>
      </div>
    </footer>
  )
}

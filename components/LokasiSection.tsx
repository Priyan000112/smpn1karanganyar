import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { schoolInfo } from '@/lib/data'

export default function LokasiSection() {
  return (
    <section className="py-10 md:py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="section-title">Lokasi Sekolah</h2>
          <p className="section-subtitle mb-0">
            {schoolInfo.name} terletak di Kecamatan Karanganyar, Kabupaten Purbalingga
          </p>
        </div>

        {/* Map full width — semua layar */}
        <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 mb-5">
          <iframe
            src="https://maps.google.com/maps?q=SMP+Negeri+1+Karanganyar+Purbalingga&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi SMP Negeri 1 Karanganyar"
          />
        </div>

        {/* Info cards — 1 kolom mobile, 3 kolom tablet/desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Alamat */}
          <div className="card p-4 md:p-5 flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin size={15} className="text-primary-600 dark:text-primary-400" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-slate-800 dark:text-white text-sm mb-1.5" style={{fontFamily:'Open Sans, sans-serif'}}>Alamat</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed" style={{fontFamily:'Merriweather, serif'}}>
                {schoolInfo.address}
              </p>
              <a
                href="https://maps.google.com/?q=SMP+Negeri+1+Karanganyar+Purbalingga"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs text-primary-600 dark:text-primary-400 hover:underline"
                style={{fontFamily:'Open Sans, sans-serif'}}
              >
                <MapPin size={11} /> Buka di Google Maps ↗
              </a>
            </div>
          </div>

          {/* Kontak */}
          <div className="card p-4 md:p-5 flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Phone size={15} className="text-primary-600 dark:text-primary-400" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-slate-800 dark:text-white text-sm mb-1.5" style={{fontFamily:'Open Sans, sans-serif'}}>Kontak</p>
              <ul className="space-y-2">
                <li>
                  <a href={`tel:${schoolInfo.phone}`} className="text-xs text-slate-500 dark:text-slate-400 hover:text-primary-600 flex items-center gap-1.5" style={{fontFamily:'Merriweather, serif'}}>
                    <Phone size={11} className="text-primary-400 flex-shrink-0" />
                    {schoolInfo.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${schoolInfo.email}`} className="text-xs text-slate-500 dark:text-slate-400 hover:text-primary-600 flex items-start gap-1.5" style={{fontFamily:'Merriweather, serif'}}>
                    <Mail size={11} className="text-primary-400 flex-shrink-0 mt-0.5" />
                    <span className="break-all">{schoolInfo.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Jam operasional */}
          <div className="card p-4 md:p-5 flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Clock size={15} className="text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-slate-800 dark:text-white text-sm mb-1.5" style={{fontFamily:'Open Sans, sans-serif'}}>Jam Operasional</p>
              <ul className="space-y-1.5" style={{fontFamily:'Merriweather, serif'}}>
                <li className="flex justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Senin – Kamis</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300 ml-2">07.00 – 14.30</span>
                </li>
                <li className="flex justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Jumat</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300 ml-2">07.00 – 11.30</span>
                </li>
                <li className="flex justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Sabtu</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300 ml-2">07.00 – 13.00</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

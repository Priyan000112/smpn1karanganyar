import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { schoolInfo } from '@/lib/data'

export default function LokasiSection() {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="section-title">Lokasi Sekolah</h2>
          <p className="section-subtitle mb-0">
            {schoolInfo.name} terletak di Kecamatan Karanganyar, Kabupaten Purbalingga
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Map — full width di mobile, 2/3 di desktop */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700">
            <iframe
              src="https://maps.google.com/maps?q=SMP+Negeri+1+Karanganyar+Purbalingga&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="320"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi SMP Negeri 1 Karanganyar"
            />
          </div>

          {/* Info kontak — horizontal scroll di mobile, vertikal di desktop */}
          <div className="grid grid-cols-1 xs:grid-cols-3 lg:grid-cols-1 gap-4">
            {/* Alamat */}
            <div className="card p-4 md:p-5">
              <h3 className="font-semibold text-slate-800 dark:text-white mb-2 md:mb-3 flex items-center gap-2 text-sm font-poppins">
                <MapPin size={16} className="text-primary-600 flex-shrink-0" />
                Alamat
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {schoolInfo.address}
              </p>
              <a
                href="https://maps.google.com/?q=SMP+Negeri+1+Karanganyar+Purbalingga"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs text-primary-600 dark:text-primary-400 hover:underline"
              >
                <MapPin size={12} /> Buka Maps ↗
              </a>
            </div>

            {/* Kontak */}
            <div className="card p-4 md:p-5">
              <h3 className="font-semibold text-slate-800 dark:text-white mb-2 md:mb-3 flex items-center gap-2 text-sm font-poppins">
                <Phone size={16} className="text-primary-600 flex-shrink-0" />
                Kontak
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href={`tel:${schoolInfo.phone}`} className="text-xs md:text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 flex items-center gap-1.5">
                    <Phone size={12} className="text-primary-400 flex-shrink-0" />
                    {schoolInfo.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${schoolInfo.email}`} className="text-xs md:text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 flex items-start gap-1.5 break-all">
                    <Mail size={12} className="text-primary-400 flex-shrink-0 mt-0.5" />
                    {schoolInfo.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Jam operasional */}
            <div className="card p-4 md:p-5 bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800">
              <h3 className="font-semibold text-primary-700 dark:text-primary-300 mb-2 md:mb-3 flex items-center gap-2 text-sm font-poppins">
                <Clock size={16} className="flex-shrink-0" />
                Jam Operasional
              </h3>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                <li className="flex justify-between gap-2">
                  <span>Senin – Kamis</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">07.00 – 14.30</span>
                </li>
                <li className="flex justify-between gap-2">
                  <span>Jumat</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">07.00 – 11.30</span>
                </li>
                <li className="flex justify-between gap-2">
                  <span>Sabtu</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">07.00 – 13.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

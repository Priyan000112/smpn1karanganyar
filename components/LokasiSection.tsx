import { MapPin, Phone, Mail } from 'lucide-react'
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 h-72 md:h-80">
            <iframe
              src="https://maps.google.com/maps?q=SMP+Negeri+1+Karanganyar+Purbalingga&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi SMP Negeri 1 Karanganyar"
            />
          </div>

          {/* Info kontak */}
          <div className="flex flex-col gap-4">
            <div className="card p-5">
              <h3 className="font-semibold text-slate-800 dark:text-white mb-4 flex items-center gap-2 font-poppins">
                <MapPin size={18} className="text-primary-600" />
                Alamat
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-roboto leading-relaxed">
                {schoolInfo.address}
              </p>
              <a
                href="https://maps.google.com/?q=SMP+Negeri+1+Karanganyar+Purbalingga"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary-600 dark:text-primary-400 hover:underline font-roboto"
              >
                <MapPin size={14} /> Buka di Google Maps ↗
              </a>
            </div>

            <div className="card p-5">
              <h3 className="font-semibold text-slate-800 dark:text-white mb-4 flex items-center gap-2 font-poppins">
                <Phone size={18} className="text-primary-600" />
                Kontak
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={`tel:${schoolInfo.phone}`} className="text-slate-600 dark:text-slate-400 hover:text-primary-600 font-roboto flex items-center gap-2">
                    <Phone size={14} className="text-primary-400" />
                    {schoolInfo.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${schoolInfo.email}`} className="text-slate-600 dark:text-slate-400 hover:text-primary-600 font-roboto flex items-center gap-2 break-all">
                    <Mail size={14} className="text-primary-400 flex-shrink-0" />
                    {schoolInfo.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="card p-5 bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800">
              <p className="text-sm font-semibold text-primary-700 dark:text-primary-300 font-poppins mb-1">
                Jam Operasional
              </p>
              <ul className="text-xs text-slate-600 dark:text-slate-400 font-roboto space-y-1">
                <li>Senin – Kamis: 07.00 – 14.30 WIB</li>
                <li>Jumat: 07.00 – 11.30 WIB</li>
                <li>Sabtu: 07.00 – 13.00 WIB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

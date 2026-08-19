'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function SaranPage() {
  const [form, setForm] = useState({ nama: '', email: '', kategori: '', pesan: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulasi pengiriman
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <CheckCircle size={64} className="text-emerald-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">Terima Kasih!</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-6">
          Saran dan masukan Anda telah kami terima. Kami akan meninjau dan menindaklanjutinya.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ nama: '', email: '', kategori: '', pesan: '' }) }}
          className="btn-primary"
        >
          Kirim Saran Lagi
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="section-title">Kotak Saran</h1>
      <p className="section-subtitle">Sampaikan saran dan masukan Anda untuk kemajuan SMP Negeri 1 Karanganyar</p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="md:col-span-3 card p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Nama <span className="text-slate-400">(opsional)</span>
            </label>
            <input
              type="text"
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              placeholder="Nama Anda atau Anonim"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Email <span className="text-slate-400">(opsional)</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="email@contoh.com"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Kategori <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={form.kategori}
              onChange={(e) => setForm({ ...form, kategori: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Pilih kategori...</option>
              <option>Sarana & Prasarana</option>
              <option>Kurikulum & Pembelajaran</option>
              <option>Kesiswaan & Ekskul</option>
              <option>Pelayanan Administrasi</option>
              <option>Keamanan & Kebersihan</option>
              <option>Lainnya</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Saran / Masukan <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={5}
              value={form.pesan}
              onChange={(e) => setForm({ ...form, pesan: e.target.value })}
              placeholder="Tuliskan saran atau masukan Anda di sini..."
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <Send size={16} />
            )}
            {loading ? 'Mengirim...' : 'Kirim Saran'}
          </button>
        </form>

        {/* Info */}
        <div className="md:col-span-2 space-y-4">
          <div className="card p-5">
            <h3 className="font-semibold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
              💡 Panduan
            </h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>• Sampaikan saran secara sopan dan konstruktif</li>
              <li>• Saran akan ditinjau oleh tim manajemen sekolah</li>
              <li>• Anda dapat mengisi anonim jika diinginkan</li>
              <li>• Saran yang baik akan ditindaklanjuti</li>
            </ul>
          </div>

          <div className="card p-5">
            <h3 className="font-semibold text-slate-800 dark:text-white mb-3">📬 Kontak Langsung</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
              Untuk keperluan mendesak, hubungi kami langsung:
            </p>
            <p className="text-sm font-medium text-primary-600 dark:text-primary-400">☎️ (0271) 495059</p>
            <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mt-1">✉️ smpn1karanganyar@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-bold text-primary-200 dark:text-primary-900 mb-4">404</div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-3">Halaman Tidak Ditemukan</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md">
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>
        <Link href="/" className="btn-primary">
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}

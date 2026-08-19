import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RunningText from '@/components/RunningText'
import { schoolInfo } from '@/lib/data'

export const metadata: Metadata = {
  title: {
    default: schoolInfo.name,
    template: `%s | ${schoolInfo.name}`,
  },
  description: `Website resmi ${schoolInfo.name}. ${schoolInfo.tagline}`,
  keywords: ['SMP Negeri 1 Karanganyar', 'SMPN 1 Karanganyar', 'sekolah Karanganyar', 'pendidikan Jawa Tengah'],
  openGraph: {
    title: schoolInfo.name,
    description: `Website resmi ${schoolInfo.name}. ${schoolInfo.tagline}`,
    url: schoolInfo.website,
    siteName: schoolInfo.name,
    locale: 'id_ID',
    type: 'website',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Keyframes untuk running text — harus di head agar pasti dieksekusi */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee-run {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}} />
        {/* Cegah FOUC dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-slate-950 min-h-screen">
        <RunningText />
        <Navbar />
        {/*
          pt kalkulasi:
          - running text: 32px
          - top bar navbar: 28px (sm ke atas)
          - navbar: 64px (mobile) / 70px (md ke atas)
          - total mobile: 96px (32+64), sm+: 130px (32+28+70)
        */}
        <main className="pt-24 sm:pt-[130px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { schoolInfo } from '@/lib/data'

export const metadata: Metadata = {
  title: {
    default: schoolInfo.name,
    template: `%s | ${schoolInfo.name}`,
  },
  description: `Website resmi ${schoolInfo.name}. ${schoolInfo.tagline}`,
  keywords: ['SMP Negeri 1 Karanganyar', 'SMPN 1 Karanganyar', 'sekolah Karanganyar', 'pendidikan'],
  openGraph: {
    title: schoolInfo.name,
    description: `Website resmi ${schoolInfo.name}. ${schoolInfo.tagline}`,
    url: schoolInfo.website,
    siteName: schoolInfo.name,
    locale: 'id_ID',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-slate-950 min-h-screen">
        <Navbar />
        <main className="pt-[104px] md:pt-[112px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

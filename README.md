# Website SMP Negeri 1 Karanganyar

Website resmi SMP Negeri 1 Karanganyar dibangun dengan **Next.js 14**, **TypeScript**, dan **Tailwind CSS**.

## Fitur

- ✅ Hero slider animasi otomatis
- ✅ Dark / Light mode toggle
- ✅ Navbar responsif dengan dropdown
- ✅ Halaman Profil (Guru, Staf, Sejarah, Visi Misi, Struktur Organisasi, Mars)
- ✅ Blog & Berita dengan halaman detail
- ✅ Akademik (Kalender & Materi Pembelajaran)
- ✅ Kesiswaan (OSIS & Ekstrakurikuler)
- ✅ Galeri Foto & Video
- ✅ SPMB (Jadwal & Persyaratan)
- ✅ Infrastruktur (Fasilitas & Learning Tools)
- ✅ Kotak Saran interaktif
- ✅ SEO metadata
- ✅ Halaman 404 custom
- ✅ Animasi counter statistik sekolah
- ✅ Siap deploy ke Vercel

## Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Deploy ke Vercel

### Cara 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Cara 2 — GitHub + Vercel Dashboard
1. Push ke GitHub: `git init && git add . && git commit -m "init" && git push`
2. Buka [vercel.com](https://vercel.com) → New Project
3. Import repository GitHub
4. Klik **Deploy** — selesai!

## Struktur Folder

```
smpn1karanganyar/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Halaman utama
│   ├── globals.css         # Global styles
│   ├── not-found.tsx       # Halaman 404
│   ├── profil/             # Halaman profil sekolah
│   ├── blog/               # Blog & berita
│   ├── akademik/           # Kalender & materi
│   ├── kesiswaan/          # OSIS & ekskul
│   ├── galeri/             # Foto & video
│   ├── spmb/               # Penerimaan siswa baru
│   ├── infrastruktur/      # Fasilitas
│   └── saran/              # Kotak saran
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSlider.tsx
│   ├── WelcomeSection.tsx
│   ├── StatsSection.tsx
│   ├── BlogSection.tsx
│   ├── EkskulSection.tsx
│   ├── GuruSection.tsx
│   └── FasilitasSection.tsx
├── lib/
│   └── data.ts             # Semua data sekolah
└── ...
```

## Kustomisasi

Semua data sekolah (nama, alamat, guru, ekskul, dll.) ada di `lib/data.ts`. Edit file tersebut untuk menyesuaikan konten.

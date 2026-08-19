// Data sekolah terpusat
export const schoolInfo = {
  name: 'SMP Negeri 1 Karanganyar',
  shortName: 'SMPN 1 Karanganyar',
  tagline: 'Berakhlak Mulia, Berdaya Saing dalam Prestasi, Berbudaya, dan Berwawasan Lingkungan',
  address: 'Jl. Raya Karanganyar, Kec. Karanganyar, Kab. Purbalingga, Jawa Tengah 53344',
  phone: '(0271) 495059',
  email: 'smpn1karanganyar@gmail.com',
  website: 'https://www.smpn1karanganyar.sch.id',
  socialMedia: {
    instagram: 'https://instagram.com/smpn1karanganyar',
    facebook: 'https://facebook.com/smpn1karanganyar',
    youtube: 'https://youtube.com/@smpn1karanganyar',
  },
  stats: {
    alumni: 5000,
    guru: 48,
    murid: 1152,
    ekskul: 18,
  },
}

export const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Profil',
    href: '/profil',
    children: [
      { label: 'Guru', href: '/profil/guru' },
      { label: 'Staf', href: '/profil/staf' },
      { label: 'Sejarah', href: '/profil/sejarah' },
      { label: 'Visi & Misi', href: '/profil/visi-misi' },
      { label: 'Struktur Organisasi', href: '/profil/struktur' },
      { label: 'Mars Sekolah', href: '/profil/mars' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Akademik',
    href: '/akademik',
    children: [
      { label: 'Materi Pembelajaran', href: '/akademik/materi' },
      { label: 'Kalender Akademik', href: '/akademik/kalender' },
    ],
  },
  {
    label: 'Kesiswaan',
    href: '/kesiswaan',
    children: [
      { label: 'Organisasi Siswa', href: '/kesiswaan/osis' },
      { label: 'Ekstrakurikuler', href: '/kesiswaan/ekskul' },
    ],
  },
  {
    label: 'Galeri',
    href: '/galeri',
    children: [
      { label: 'Foto', href: '/galeri/foto' },
      { label: 'Video', href: '/galeri/video' },
    ],
  },
  {
    label: 'SPMB',
    href: '/spmb',
    children: [
      { label: 'Jadwal Pendaftaran', href: '/spmb/jadwal' },
      { label: 'Persyaratan', href: '/spmb/persyaratan' },
    ],
  },
  {
    label: 'Infrastruktur',
    href: '/infrastruktur',
    children: [
      { label: 'Fasilitas', href: '/infrastruktur/fasilitas' },
      { label: 'Learning Tools', href: '/infrastruktur/learning-tools' },
    ],
  },
  {
    label: 'Saran',
    href: '/saran',
  },
]

export const heroSlides = [
  {
    id: 1,
    title: 'Sistem Penerimaan Murid Baru 2026/2027',
    subtitle: 'Dapatkan informasi lengkap tentang SPMB SMP Negeri 1 Karanganyar Tahun Ajaran 2026/2027',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80',
    cta: { label: 'Info SPMB', href: '/spmb' },
    badge: 'Pendaftaran Dibuka',
  },
  {
    id: 2,
    title: 'Prestasi Gemilang',
    subtitle: 'SMPN 1 Karanganyar selalu berkomitmen menjadikan murid berprestasi dalam akademik dan non-akademik',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80',
    cta: { label: 'Lihat Prestasi', href: '/blog' },
    badge: 'Bangga Berprestasi',
  },
  {
    id: 3,
    title: 'Kegiatan Pramuka',
    subtitle: 'Mengembangkan nilai-nilai karakter: kebersamaan, kepemimpinan, kecintaan alam, dan kemandirian',
    image: 'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?w=1200&q=80',
    cta: { label: 'Ekstrakurikuler', href: '/kesiswaan/ekskul' },
    badge: 'Ekstrakurikuler',
  },
  {
    id: 4,
    title: 'Kegiatan Seni',
    subtitle: 'Mengembangkan minat seni melalui seni tari, musik, dan drama yang kreatif',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
    cta: { label: 'Galeri Kegiatan', href: '/galeri' },
    badge: 'Seni & Budaya',
  },
  {
    id: 5,
    title: 'Ekstrakurikuler Paskibra',
    subtitle: 'Paskibra SMPN 1 Karanganyar berhasil meraih Juara 1 LKBB Tingkat Kabupaten',
    image: 'https://images.unsplash.com/photo-1569447891824-5e0ea71bc56e?w=1200&q=80',
    cta: { label: 'Selengkapnya', href: '/kesiswaan/ekskul' },
    badge: 'Juara 1 LKBB',
  },
]

export const guruList = [
  { name: 'Drs. Bambang Sutrisno, M.Pd', jabatan: 'Kepala Sekolah', mapel: '', foto: '' },
  { name: 'Septiana Cahyasari, S.Pd', jabatan: 'Guru', mapel: 'IPA', foto: '' },
  { name: 'Henry Suryani, S.Pd', jabatan: 'Guru', mapel: 'IPS', foto: '' },
  { name: 'Dian Sari Noviati, S.Kom', jabatan: 'Guru', mapel: 'TIK', foto: '' },
  { name: 'Yuli Hastuti, S.Pd', jabatan: 'Guru', mapel: 'Bahasa Inggris', foto: '' },
  { name: 'Dra. Farida Lestari', jabatan: 'Guru', mapel: 'Bahasa Indonesia', foto: '' },
  { name: 'Sumarmi, S.Ag', jabatan: 'Guru', mapel: 'Pendidikan Agama Islam', foto: '' },
  { name: 'Sulastriningsih, S.Pd', jabatan: 'Guru', mapel: 'Matematika', foto: '' },
]

export const stafList = [
  { name: 'Purwanto', jabatan: 'Kepala TU', foto: '' },
  { name: 'Sari Dewi', jabatan: 'Staff TU', foto: '' },
  { name: 'Agung Wibowo', jabatan: 'Staff TU', foto: '' },
  { name: 'Haryanto', jabatan: 'Pustakawan', foto: '' },
  { name: 'Mulyono', jabatan: 'Satpam', foto: '' },
  { name: 'Sugiyono', jabatan: 'Penjaga Sekolah', foto: '' },
]

export const strukturOrganisasi = [
  { jabatan: 'Kepala Sekolah', nama: 'Drs. Bambang Sutrisno, M.Pd', level: 1 },
  { jabatan: 'Wakasek Kurikulum', nama: 'Sri Wahyuni, S.Pd', level: 2 },
  { jabatan: 'Wakasek Kesiswaan', nama: 'Heru Santoso, S.Pd', level: 2 },
  { jabatan: 'Wakasek Sarpras', nama: 'Agus Prasetyo, S.Pd', level: 2 },
  { jabatan: 'Wakasek Humas', nama: 'Dra. Endang Susilowati', level: 2 },
  { jabatan: 'Kepala TU', nama: 'Purwanto', level: 3 },
  { jabatan: 'Wali Kelas 7', nama: 'Dewi Rahmawati, S.Pd', level: 3 },
  { jabatan: 'Wali Kelas 8', nama: 'Rini Astuti, S.Pd', level: 3 },
  { jabatan: 'Wali Kelas 9', nama: 'Eka Fitriani, S.Pd', level: 3 },
]

export const ekskulList = [
  { nama: 'Pramuka', deskripsi: 'Mengembangkan karakter kepemimpinan dan cinta alam', icon: 'Tent', pembina: 'Martono, S.Pd' },
  { nama: 'Paskibra', deskripsi: 'Pasukan Pengibar Bendera - Juara 1 LKBB Tingkat Kabupaten', icon: 'Flag', pembina: 'Heru Santoso, S.Pd' },
  { nama: 'PMR', deskripsi: 'Palang Merah Remaja - keterampilan P3K dan kemanusiaan', icon: 'HeartPulse', pembina: 'Sri Wahyuni, S.Pd' },
  { nama: 'Basket', deskripsi: 'Olahraga basket kompetitif tingkat kabupaten', icon: 'CircleDot', pembina: 'Agus Prasetyo, S.Pd' },
  { nama: 'Voli', deskripsi: 'Olahraga voli putra dan putri', icon: 'Volleyball', pembina: 'Budi Hartono, S.Pd' },
  { nama: 'Futsal', deskripsi: 'Olahraga futsal antar sekolah', icon: 'Dribbble', pembina: 'Andi Kurniawan, S.Pd' },
  { nama: 'Seni Tari', deskripsi: 'Tari tradisional dan modern', icon: 'Music2', pembina: 'Lestari Indah, S.Pd' },
  { nama: 'Paduan Suara', deskripsi: 'Paduan suara dan seni musik', icon: 'Music', pembina: 'Yuni Kristiana, S.Pd' },
  { nama: 'KIR', deskripsi: 'Karya Ilmiah Remaja - penelitian dan inovasi', icon: 'FlaskConical', pembina: 'Dewi Rahmawati, S.Pd' },
  { nama: 'English Club', deskripsi: 'Pengembangan kemampuan bahasa Inggris', icon: 'Languages', pembina: 'Eka Fitriani, S.Pd' },
  { nama: 'Robotik', deskripsi: 'Teknologi dan pemrograman robot', icon: 'Cpu', pembina: 'Andi Kurniawan, S.Pd' },
  { nama: 'Karate', deskripsi: 'Bela diri karate dan kedisiplinan', icon: 'Shield', pembina: 'Joko Susilo, S.Pd' },
]

export const fasilitasList = [
  { nama: 'Ruang Kelas', jumlah: '30 Ruang', deskripsi: 'Dilengkapi proyektor dan AC', icon: 'School' },
  { nama: 'Laboratorium IPA', jumlah: '2 Lab', deskripsi: 'Peralatan sains lengkap dan modern', icon: 'FlaskConical' },
  { nama: 'Laboratorium Komputer', jumlah: '2 Lab', deskripsi: '60 unit komputer terkoneksi internet', icon: 'Monitor' },
  { nama: 'Perpustakaan', jumlah: '1 Ruang', deskripsi: '5.000+ koleksi buku dan e-library', icon: 'BookOpen' },
  { nama: 'Lapangan Olahraga', jumlah: '2 Lapangan', deskripsi: 'Basket, voli, dan serbaguna', icon: 'Dumbbell' },
  { nama: 'Aula', jumlah: '1 Aula', deskripsi: 'Kapasitas 500 orang', icon: 'Building2' },
  { nama: 'Kantin Sehat', jumlah: '1 Kantin', deskripsi: 'Menu bergizi dan higienis', icon: 'UtensilsCrossed' },
  { nama: 'Mushola', jumlah: '1 Mushola', deskripsi: 'Fasilitas ibadah siswa', icon: 'Star' },
  { nama: 'UKS', jumlah: '1 Ruang', deskripsi: 'Kesehatan dan P3K', icon: 'HeartPulse' },
]

export const blogPosts = [
  {
    slug: 'spmb-2026-2027',
    title: 'Informasi SPMB SMP Negeri 1 Karanganyar Tahun Ajaran 2026/2027',
    excerpt: 'Lini masa pendaftaran SPMB Tahun Ajaran 2026/2027. Segera siapkan persyaratan dan dokumen yang dibutuhkan.',
    content: `
## Lini Masa Pendaftaran SPMB

| Kegiatan | Tanggal |
|----------|---------|
| Pengumuman SPMB | Mei 2026 |
| Pembuatan Akun | 22-25 Juni 2026 |
| Verifikasi Berkas & Aktivasi Akun | 22-25 Juni 2026 |
| Masa Pendaftaran | 26-30 Juni 2026 |
| Pengumuman Hasil | 3 Juli 2026 |
| Daftar Ulang | 4-7 Juli 2026 |

## Persyaratan Pendaftaran

1. Ijazah / SKL SD/MI asli dan fotokopi
2. Akta Kelahiran asli dan fotokopi
3. Kartu Keluarga asli dan fotokopi
4. Pas foto 3x4 sebanyak 4 lembar
5. Surat Keterangan Sehat dari dokter
6. Nilai rapor kelas 4, 5, 6

## Jalur Penerimaan

- **Jalur Zonasi** (55%) — Berdasarkan jarak domisili ke sekolah
- **Jalur Afirmasi** (15%) — Untuk siswa kurang mampu/penerima KIP
- **Jalur Perpindahan Tugas** (5%) — Untuk anak guru/TNI/Polri pindah tugas
- **Jalur Prestasi** (25%) — Berdasarkan prestasi akademik/non-akademik
    `,
    date: '2026-06-13',
    author: 'Admin',
    category: 'SPMB',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
  },
  {
    slug: 'juara-popda-2026',
    title: 'Atlet SMPN 1 Karanganyar Borong Medali di POPDA 2026',
    excerpt: 'Prestasi membanggakan ditorehkan siswa SMPN 1 Karanganyar dalam ajang Pekan Olahraga Pelajar Daerah tingkat Kabupaten Karanganyar.',
    content: `
## Prestasi Gemilang di POPDA 2026

Siswa SMP Negeri 1 Karanganyar berhasil menorehkan prestasi luar biasa dalam ajang **Pekan Olahraga Pelajar Daerah (POPDA)** Tingkat Kabupaten Karanganyar Tahun 2026.

### Daftar Medali yang Diraih

| Cabang Olahraga | Nama Siswa | Prestasi |
|----------------|------------|---------|
| Atletik 100m Putra | Rizky Pratama | 🥇 Juara 1 |
| Bulu Tangkis Putri | Sari Pertiwi | 🥇 Juara 1 |
| Karate Kata Putra | Danu Wijaya | 🥈 Juara 2 |
| Renang 50m Gaya Bebas | Farah Nadia | 🥉 Juara 3 |
| Tenis Meja Putra | Bagas Saputra | 🥈 Juara 2 |

### Komentar Kepala Sekolah

"Kami sangat bangga dengan pencapaian anak-anak kita. Ini adalah bukti nyata bahwa SMPN 1 Karanganyar tidak hanya unggul dalam akademik, tetapi juga dalam bidang olahraga."
    `,
    date: '2026-08-10',
    author: 'Admin',
    category: 'Prestasi',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
  },
  {
    slug: 'generasi-bijak-digital',
    title: 'Kokurikuler: Generasi Bijak Digital — Bijak Berselancar di Dunia Maya',
    excerpt: 'SMPN 1 Karanganyar membekali siswa dengan kemampuan menggunakan teknologi secara cerdas, aman, dan bertanggung jawab.',
    content: `
## Generasi Bijak Digital

Dalam rangka membekali siswa dengan kemampuan menggunakan teknologi secara cerdas, aman, dan bertanggung jawab, SMP Negeri 1 Karanganyar mengadakan kegiatan kokurikuler bertema **"Generasi Bijak Digital: Bijak Berselancar di Dunia Maya"**.

### Tujuan Kegiatan

- Meningkatkan kesadaran siswa akan keamanan digital
- Mengenali dan menghindari konten negatif di internet
- Memahami etika bermedia sosial
- Mencegah cyberbullying

### Materi yang Disampaikan

1. Keamanan akun dan password
2. Mengenali hoaks dan misinformasi
3. Privasi digital dan data pribadi
4. Etika berkomentar di media sosial
5. Screen time yang sehat

Kegiatan ini dihadiri oleh seluruh siswa kelas 7, 8, dan 9 dengan narasumber dari Dinas Komunikasi dan Informatika Kabupaten Karanganyar.
    `,
    date: '2026-08-12',
    author: 'Admin',
    category: 'Kegiatan',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
  },
  {
    slug: 'juara-fls3n-2026',
    title: 'Siswa SMPN 1 Karanganyar Raih Juara 1 FLS3N Cabang Cipta Puisi',
    excerpt: 'Ahmad Fauzan berhasil meraih Juara 1 FLS3N Cabang Cipta Puisi Tingkat Kabupaten Karanganyar 2026.',
    content: `
## Juara FLS3N 2026

Prestasi membanggakan kembali ditorehkan oleh siswa SMP Negeri 1 Karanganyar. **Ahmad Fauzan**, siswa kelas 9A, berhasil meraih **Juara 1 Festival Lomba Seni Siswa Nasional (FLS3N)** Cabang Cipta Puisi Tingkat Kabupaten Karanganyar Tahun 2026.

Ahmad akan mewakili Kabupaten Karanganyar ke tingkat Provinsi Jawa Tengah pada bulan September 2026.

Selain Ahmad, beberapa siswa lain juga meraih prestasi:

- **Dita Anggraini** — Juara 2 FLS3N Menyanyi Solo Putri
- **Kelompok Drama SMPN 1 Karanganyar** — Juara 3 FLS3N Teater
    `,
    date: '2026-05-20',
    author: 'Admin',
    category: 'Prestasi',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80',
  },
  {
    slug: 'perkemahan-pramuka-2026',
    title: 'Kegiatan Perkemahan Pramuka SMPN 1 Karanganyar 2026',
    excerpt: 'Ratusan siswa mengikuti perkemahan tahunan untuk mengembangkan karakter, kemandirian, dan jiwa kepemimpinan.',
    content: `
## Perkemahan Pramuka Tahunan

SMP Negeri 1 Karanganyar kembali menggelar kegiatan Perkemahan Pramuka tahunan yang diikuti oleh **320 siswa** kelas 7 dan 8.

### Kegiatan yang Dilaksanakan

- Pendirian tenda dan survival skills
- Orienteering dan navigasi alam
- Upacara dan latihan baris-berbaris
- Malam renungan dan api unggun
- Permainan kepemimpinan dan kerjasama tim
- Penjelajahan dengan sandi dan morse

### Hasil dan Manfaat

Kegiatan perkemahan ini bertujuan membentuk karakter siswa yang mandiri, bertanggung jawab, cinta alam, dan memiliki jiwa kepemimpinan yang kuat sesuai dengan Dasa Dharma Pramuka.
    `,
    date: '2026-07-15',
    author: 'Admin',
    category: 'Kegiatan',
    image: 'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?w=800&q=80',
  },
  {
    slug: 'olimpiade-matematika-2026',
    title: 'Tim SMPN 1 Karanganyar Juara di Olimpiade Matematika Tingkat Provinsi',
    excerpt: 'Tiga siswa SMPN 1 Karanganyar berhasil meraih medali di Olimpiade Matematika tingkat Provinsi Jawa Tengah.',
    content: `
## Olimpiade Matematika Tingkat Provinsi

Tiga siswa terbaik SMP Negeri 1 Karanganyar berhasil mengharumkan nama sekolah di ajang **Olimpiade Matematika Tingkat Provinsi Jawa Tengah 2026**.

### Perolehan Medali

| Nama | Kelas | Prestasi |
|------|-------|---------|
| Bintang Ramadhan | 9B | 🥇 Medali Emas |
| Clarissa Putri | 8A | 🥈 Medali Perak |
| Hendra Saputra | 9C | 🥉 Medali Perunggu |

Bintang Ramadhan akan melanjutkan perjuangan ke tingkat nasional mewakili Provinsi Jawa Tengah.
    `,
    date: '2026-04-10',
    author: 'Admin',
    category: 'Prestasi',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
  },
]

export const kalenderAkademik = [
  { kegiatan: 'Hari Pertama Masuk Sekolah', tanggal: '14 Juli 2026', kategori: 'Akademik' },
  { kegiatan: 'Masa Pengenalan Lingkungan Sekolah (MPLS)', tanggal: '14-16 Juli 2026', kategori: 'Kesiswaan' },
  { kegiatan: 'Penilaian Tengah Semester 1', tanggal: '14-19 September 2026', kategori: 'Akademik' },
  { kegiatan: 'Perkemahan Pramuka', tanggal: '10-12 Oktober 2026', kategori: 'Kesiswaan' },
  { kegiatan: 'Penilaian Akhir Semester 1', tanggal: '30 Nov - 9 Des 2026', kategori: 'Akademik' },
  { kegiatan: 'Pembagian Rapor Semester 1', tanggal: '19 Desember 2026', kategori: 'Akademik' },
  { kegiatan: 'Libur Semester 1', tanggal: '22 Des 2026 - 2 Jan 2027', kategori: 'Libur' },
  { kegiatan: 'Hari Pertama Semester 2', tanggal: '5 Januari 2027', kategori: 'Akademik' },
  { kegiatan: 'Penilaian Tengah Semester 2', tanggal: '1-6 Maret 2027', kategori: 'Akademik' },
  { kegiatan: 'Ujian Sekolah Kelas 9', tanggal: '5-9 Mei 2027', kategori: 'Ujian' },
  { kegiatan: 'Penilaian Akhir Semester 2 / Kenaikan Kelas', tanggal: '9-17 Juni 2027', kategori: 'Akademik' },
  { kegiatan: 'Pembagian Rapor Semester 2', tanggal: '20 Juni 2027', kategori: 'Akademik' },
]

export const materiPembelajaran = [
  {
    kelas: 'Kelas 7',
    mapel: [
      { nama: 'IPA', topik: 'Objek IPA dan Pengamatannya', file: '#' },
      { nama: 'IPS', topik: 'Kondisi Geografis Indonesia', file: '#' },
      { nama: 'Matematika', topik: 'Bilangan Bulat dan Pecahan', file: '#' },
      { nama: 'Bahasa Indonesia', topik: 'Teks Deskripsi', file: '#' },
      { nama: 'Bahasa Inggris', topik: 'Greetings and Farewells', file: '#' },
    ],
  },
  {
    kelas: 'Kelas 8',
    mapel: [
      { nama: 'IPA', topik: 'Sistem Gerak pada Makhluk Hidup', file: '#' },
      { nama: 'IPS', topik: 'Interaksi Keruangan Desa dan Kota', file: '#' },
      { nama: 'Matematika', topik: 'Pola Bilangan', file: '#' },
      { nama: 'Bahasa Indonesia', topik: 'Teks Berita', file: '#' },
      { nama: 'Bahasa Inggris', topik: 'Expressing Ability', file: '#' },
    ],
  },
  {
    kelas: 'Kelas 9',
    mapel: [
      { nama: 'IPA', topik: 'Sistem Reproduksi pada Manusia', file: '#' },
      { nama: 'IPS', topik: 'Perdagangan Internasional', file: '#' },
      { nama: 'Matematika', topik: 'Bilangan Berpangkat dan Bentuk Akar', file: '#' },
      { nama: 'Bahasa Indonesia', topik: 'Teks Pidato Persuasif', file: '#' },
      { nama: 'Bahasa Inggris', topik: 'Expressing Wish and Hope', file: '#' },
    ],
  },
]

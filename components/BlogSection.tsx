import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Tag } from 'lucide-react'
import { blogPosts } from '@/lib/data'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'short', year: 'numeric',
  })
}

export default function BlogSection() {
  const posts = blogPosts.slice(0, 6)

  return (
    <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <h2 className="section-title">Berita &amp; Kegiatan</h2>
            <p className="section-subtitle mb-0">Informasi terkini dari SMP Negeri 1 Karanganyar</p>
          </div>
          <Link href="/blog" className="btn-outline hidden sm:inline-flex">
            Lihat Semua →
          </Link>
        </div>

        {/* Featured post (pertama) + grid */}
        <div className="space-y-5">
          {/* Post pertama — featured, full width di mobile */}
          <article className="card group">
            <div className="md:grid md:grid-cols-5">
              <div className="relative h-52 md:h-auto md:col-span-2 overflow-hidden">
                <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary-600 text-white text-2xs xs:text-xs font-semibold px-2.5 py-1 rounded-full font-poppins">
                    {posts[0].category}
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-7 md:col-span-3 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 font-roboto">
                  <span className="flex items-center gap-1"><Calendar size={12} />{formatDate(posts[0].date)}</span>
                </div>
                <h3 className="font-bold text-slate-800 dark:text-white text-base md:text-xl mb-2 leading-snug group-hover:text-primary-600 transition-colors font-poppins">
                  {posts[0].title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 font-roboto leading-relaxed">
                  {posts[0].excerpt}
                </p>
                <Link href={`/blog/${posts[0].slug}`} className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline font-poppins self-start">
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>
          </article>

          {/* Grid 5 post berikutnya */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {posts.slice(1).map((post) => (
              <article key={post.slug} className="card group">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-primary-600 text-white text-2xs font-semibold px-2 py-0.5 rounded-full font-poppins">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-2xs text-slate-500 dark:text-slate-400 mb-2 font-roboto">
                    <Calendar size={11} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white text-sm mb-2 leading-snug line-clamp-2 group-hover:text-primary-600 transition-colors font-poppins">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-3 font-roboto">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline font-poppins">
                    Baca →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-6 sm:hidden">
          <Link href="/blog" className="btn-outline">Lihat Semua Berita</Link>
        </div>
      </div>
    </section>
  )
}

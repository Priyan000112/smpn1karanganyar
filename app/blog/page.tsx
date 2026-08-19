import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Tag } from 'lucide-react'
import { blogPosts } from '@/lib/data'

export const metadata: Metadata = { title: 'Blog & Berita' }

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="section-title">Berita &amp; Kegiatan</h1>
      <p className="section-subtitle">Informasi terkini dari SMP Negeri 1 Karanganyar</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <article key={post.slug} className="card group">
            <div className="relative h-48 overflow-hidden">
              <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute top-3 left-3">
                <span className="bg-primary-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                <span className="flex items-center gap-1"><Calendar size={12} />{formatDate(post.date)}</span>
                <span className="flex items-center gap-1"><Tag size={12} />{post.author}</span>
              </div>
              <h2 className="font-semibold text-slate-800 dark:text-white mb-2 leading-snug line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{post.title}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline">
                Baca Selengkapnya →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { blogPosts } from '@/lib/data'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Tidak Ditemukan' }
  return { title: post.title, description: post.excerpt }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

function renderMarkdown(content: string) {
  // Simple markdown rendering
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-bold text-slate-800 dark:text-white mt-8 mb-4">{line.slice(3)}</h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-bold text-slate-700 dark:text-slate-200 mt-6 mb-3">{line.slice(4)}</h3>)
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(<p key={i} className="font-bold text-slate-800 dark:text-white my-2">{line.slice(2, -2)}</p>)
    } else if (line.startsWith('- ')) {
      elements.push(<li key={i} className="text-slate-600 dark:text-slate-400 ml-4 my-1 list-disc">{line.slice(2).replace(/\*\*(.*?)\*\*/g, (_, t) => t)}</li>)
    } else if (line.match(/^\d+\.\s/)) {
      elements.push(<li key={i} className="text-slate-600 dark:text-slate-400 ml-4 my-1 list-decimal">{line.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, (_, t) => t)}</li>)
    } else if (line.startsWith('| ')) {
      // Table
      const rows: string[][] = []
      while (i < lines.length && lines[i].startsWith('| ')) {
        if (!lines[i].includes('---')) {
          rows.push(lines[i].split('|').filter(Boolean).map((c) => c.trim()))
        }
        i++
      }
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-50 dark:bg-primary-900/30">
                {rows[0]?.map((cell, j) => (
                  <th key={j} className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left font-semibold text-slate-700 dark:text-slate-300">{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, ri) => (
                <tr key={ri} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  {row.map((cell, j) => (
                    <td key={j} className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-slate-600 dark:text-slate-400">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      continue
    } else if (line.trim() !== '') {
      const html = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      elements.push(<p key={i} className="text-slate-600 dark:text-slate-400 my-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} />)
    }
    i++
  }

  return elements
}

export default function BlogDetailPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back */}
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 hover:underline mb-6">
        <ArrowLeft size={16} /> Kembali ke Blog
      </Link>

      {/* Header */}
      <div className="mb-6">
        <span className="inline-block bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {post.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-2"><Calendar size={14} />{formatDate(post.date)}</span>
          <span className="flex items-center gap-2"><User size={14} />{post.author}</span>
        </div>
      </div>

      {/* Image */}
      <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
        <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" priority />
      </div>

      {/* Content */}
      <div className="card p-8 mb-8">
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium border-l-4 border-primary-400 pl-4 italic">
          {post.excerpt}
        </p>
        <div>{renderMarkdown(post.content)}</div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Berita Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="card p-4 group hover:border-primary-300 border border-transparent">
                <div className="relative h-28 rounded-lg overflow-hidden mb-3">
                  <Image src={r.image} alt={r.title} fill className="object-cover group-hover:scale-105 transition-transform" sizes="300px" />
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 line-clamp-2 group-hover:text-primary-600 transition-colors">{r.title}</p>
                <p className="text-xs text-slate-400 mt-1">{formatDate(r.date)}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

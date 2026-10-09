import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/page/Section";
import { formatNewsDate, getNewsBySlug, news, type NewsBlock } from "@/data/news";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function Block({ b }: { b: NewsBlock }) {
  switch (b.type) {
    case "p":
      return <p className="text-ink-soft">{b.text}</p>;
    case "h":
      return <h2 className="font-mincho mt-12 border-l-2 border-gold pl-4 text-lg tracking-[0.15em] text-ink first:mt-0">{b.text}</h2>;
    case "note":
      return <p className="text-sm text-ink-soft">{b.text}</p>;
    case "sign":
      return <p className="font-mincho mt-8 text-right text-sm tracking-[0.1em] text-ink">{b.text}</p>;
    case "list":
      return (
        <ul className="space-y-3 text-ink-soft">
          {b.items.map((it) => (
            <li key={it} className="flex gap-3">
              <span aria-hidden className="mt-4 h-px w-3 shrink-0 bg-gold" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "facts":
      return (
        <dl className="divide-y divide-gold/30 border-y border-gold/40 bg-kinari/60">
          {b.items.map((f) => (
            <div key={f.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
              <dt className="font-mincho tracking-[0.2em] text-gold">{f.label}</dt>
              <dd className="text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>
      );
    case "table":
      return (
        <figure>
          <figcaption className="font-mincho mb-3 text-sm tracking-[0.15em] text-ink">{b.caption}</figcaption>
          <div className="overflow-x-auto border border-gold/40" tabIndex={0} role="region" aria-label={b.caption}>
            <table className="w-full min-w-[30rem] border-collapse text-sm">
              <thead className="bg-kinari">
                <tr>
                  {b.columns.map((c, i) => (
                    <th key={i} scope="col" className="font-mincho border-b border-gold/40 px-4 py-3 text-left font-medium tracking-[0.1em] whitespace-nowrap text-ink">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((row, ri) => (
                  <tr key={ri} className="border-b border-gold/20 last:border-0">
                    {row.map((cell, ci) => (
                      <td key={ci} className={`px-4 py-3 align-top text-ink-soft ${ci < b.columns.length - 1 ? "font-latin whitespace-nowrap text-base text-ink" : ""}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {b.note && <p className="mt-3 text-xs text-ink-soft">{b.note}</p>}
        </figure>
      );
  }
}

export default async function NewsArticlePage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) notFound();
  const idx = news.findIndex((n) => n.slug === slug);
  const newer = idx > 0 ? news[idx - 1] : null;
  const older = idx < news.length - 1 ? news[idx + 1] : null;

  return (
    <>
      <PageHero
        ja="お知らせ"
        en="News"
        crumbs={[{ href: "/news", label: "お知らせ" }, { label: post.title.length > 24 ? `${post.title.slice(0, 24)}…` : post.title }]}
      />
      <Section tone="washi">
        <article className="mx-auto max-w-3xl">
          <header>
            <div className="flex items-center gap-4">
              <time dateTime={post.date} className="font-latin text-lg tracking-widest text-ink-soft">
                {formatNewsDate(post.date)}
              </time>
              <span className="border border-gold px-3 py-0.5 text-xs tracking-widest text-gold">{post.category}</span>
            </div>
            <h2 className="font-mincho mt-6 text-2xl leading-relaxed font-semibold tracking-[0.12em] text-ink sm:text-3xl">{post.title}</h2>
            <div className="mt-8 h-px w-14 bg-gold" />
          </header>

          <div className="mt-12 space-y-6 text-[0.95rem] leading-[2.1] tracking-[0.05em]">
            {post.blocks.map((b, i) => (
              <Block key={i} b={b} />
            ))}
          </div>

          {post.attachments && (
            <div className="mt-14 border border-gold/40 p-6">
              <p className="font-mincho text-sm tracking-[0.25em] text-gold">添付資料</p>
              <ul className="mt-3 space-y-2">
                {post.attachments.map((a) => (
                  <li key={a.href}>
                    <a href={a.href} target="_blank" rel="noopener noreferrer" className="break-all text-sm text-shu underline underline-offset-4 hover:text-shu-deep">
                      {a.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {post.related && (
            <p className="mt-10">
              <Link href={post.related.href} className="text-sm tracking-widest text-shu underline underline-offset-8 hover:text-shu-deep">
                {post.related.label} →
              </Link>
            </p>
          )}
        </article>

        <Reveal>
          <nav aria-label="前後の記事" className="mx-auto mt-24 grid max-w-3xl gap-px bg-gold/30 sm:grid-cols-2">
            {older ? (
              <Link href={`/news/${older.slug}`} className="block bg-washi p-6 transition-colors hover:bg-kinari">
                <span className="font-latin text-xs text-gold uppercase italic">Older</span>
                <span className="font-mincho mt-2 block text-sm leading-relaxed text-ink">{older.title}</span>
              </Link>
            ) : (
              <span className="bg-washi" />
            )}
            {newer ? (
              <Link href={`/news/${newer.slug}`} className="block bg-washi p-6 text-right transition-colors hover:bg-kinari">
                <span className="font-latin text-xs text-gold uppercase italic">Newer</span>
                <span className="font-mincho mt-2 block text-sm leading-relaxed text-ink">{newer.title}</span>
              </Link>
            ) : (
              <span className="bg-washi" />
            )}
          </nav>
          <div className="mt-14 text-center">
            <ButtonLink href="/news">お知らせ一覧へ</ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

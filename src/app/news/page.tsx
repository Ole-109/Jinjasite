import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/page/Section";
import { NewsList } from "@/components/news/NewsList";
import { formatNewsDate, news } from "@/data/news";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "玉置神社からのお知らせ。祭事のご案内、臨時バス、道路情報、令和の大改修の進捗、広報紙などを掲載しています。",
};

export default function NewsPage() {
  const items = news.map((n) => ({
    slug: n.slug,
    title: n.title,
    date: n.date,
    dateLabel: formatNewsDate(n.date),
    category: n.category,
    excerpt: n.excerpt,
  }));
  return (
    <>
      <PageHero ja="お知らせ" en="News" lead="祭事、臨時バス、道路情報など、玉置神社からのお知らせです。" crumbs={[{ label: "お知らせ" }]} />
      <Section tone="washi">
        <NewsList items={items} />
      </Section>
    </>
  );
}

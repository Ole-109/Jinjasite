import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/page/Section";
import { carRoutes, lastMile, publicTransport, reservedBus } from "@/data/access";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "アクセス",
  description:
    "玉置神社へのアクセス。お車での所要時間、電車・バス（奈良交通 八木新宮線）、十津川温泉からのタクシー、土・日・祝日の世界遺産予約バス（玉置山コース）のご案内。",
};

function TimeColumn({ title, stops }: { title: string; stops: { stop: string; time: string }[] }) {
  return (
    <div className="border border-gold/30 bg-sumi-2/60 p-6 sm:p-8">
      <h4 className="font-mincho text-sm tracking-[0.3em] text-gold-soft">{title}</h4>
      <ol className="relative mt-6 space-y-6 pl-8">
        <span aria-hidden className="absolute top-2 bottom-2 left-[0.35rem] w-px bg-gold/50" />
        {stops.map((s) => (
          <li key={s.stop} className="relative flex items-baseline justify-between gap-4">
            <span aria-hidden className="absolute top-2 -left-8 h-2 w-2 rotate-45 border border-gold bg-sumi" />
            <span className="font-mincho tracking-[0.15em] text-washi">{s.stop}</span>
            <span className="font-latin text-2xl text-gold-soft">{s.time}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function AccessPage() {
  return (
    <>
      <PageHero
        ja="アクセス"
        en="Access"
        lead="奈良県吉野郡十津川村。お車、バス、タクシーでお越しいただけます。"
        crumbs={[{ label: "アクセス" }]}
        image="/images/honsha.jpg"
        imagePosition="center 70%"
      />

      <Section tone="washi">
        <SectionTitle en="Map" ja="アクセスマップ" />
        <Reveal className="mx-auto mt-14 max-w-5xl">
          <div className="relative aspect-[4/3] w-full border border-gold/50 sm:aspect-[16/9]">
            <iframe
              src={site.mapEmbed}
              title="玉置神社周辺の地図"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
              allowFullScreen
            />
          </div>
          <p className="mt-5 text-center">
            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.25em] text-shu underline-offset-4 hover:underline"
            >
              Google マップで開く ↗
            </a>
          </p>
          <address className="mt-6 text-center text-sm leading-loose text-ink-soft not-italic">
            <span className="font-mincho text-base tracking-[0.2em] text-ink">{site.officeName}</span>
            <br />
            {site.postalCode} {site.address}
            <br />
            TEL <a href={`tel:${site.tel}`} className="underline underline-offset-4">{site.tel}</a>　FAX {site.fax}
          </address>
        </Reveal>
      </Section>

      <Section tone="sumi">
        <SectionTitle en="By Car" ja="お車での所要時間" tone="dark" />
        <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-2">
          {carRoutes.map((r, i) => (
            <Reveal key={r.from} delay={(i % 2) * 100}>
              <article className="h-full border border-gold/30 bg-sumi-2/60 p-7 sm:p-9">
                <h3 className="font-mincho text-xl tracking-[0.2em] text-washi">{r.from}</h3>
                <p className="mt-5 text-sm leading-loose text-mist/80 [overflow-wrap:anywhere]">{r.route}</p>
                <p className="font-mincho mt-6 border-t border-gold/25 pt-4 text-sm tracking-[0.15em] text-gold-soft">（{r.duration}）</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="washi">
        <SectionTitle en="By Train & Bus" ja="電車・バスでお越しの方" lead={publicTransport.heading} />
        <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="border border-gold/40 bg-washi/70 p-8 sm:p-10">
              <h3 className="font-mincho text-lg tracking-[0.2em] text-ink">十津川温泉（バス停）まで</h3>
              <ul className="mt-6 space-y-3 text-sm leading-loose text-ink-soft">
                {publicTransport.lines.map((l) => (
                  <li key={l} className="flex gap-3">
                    <span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-gold" />
                    {l}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink href={publicTransport.link.href} external>
                  奈良交通 時刻表
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="border border-gold/40 bg-washi/70 p-8 sm:p-10">
              <h3 className="font-mincho text-lg tracking-[0.2em] text-ink">十津川温泉から玉置神社まで</h3>
              <dl className="mt-6 space-y-8 text-sm leading-loose text-ink-soft">
                <div>
                  <dt className="font-mincho tracking-[0.2em] text-shu">{lastMile.weekday.label}</dt>
                  <dd className="mt-2">
                    {lastMile.weekday.text}
                    <br />
                    <a href={lastMile.weekday.taxi.href} target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-4">
                      {lastMile.weekday.taxi.name}
                    </a>
                    　<a href={`tel:${lastMile.weekday.taxi.tel}`} className="font-latin text-base text-ink">{lastMile.weekday.taxi.tel}</a>
                    <br />
                    {lastMile.weekday.taxi.fare}
                  </dd>
                </div>
                <div>
                  <dt className="font-mincho tracking-[0.2em] text-shu">{lastMile.holiday.label}</dt>
                  <dd className="mt-2">
                    {lastMile.holiday.text}
                    <br />
                    <a href={lastMile.holiday.inquiry.href} target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-4">
                      {lastMile.holiday.inquiry.name}
                    </a>
                    　<a href={`tel:${lastMile.holiday.inquiry.tel}`} className="font-latin text-base text-ink">{lastMile.holiday.inquiry.tel}</a>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="cedar" id="yoyaku-bus">
        <SectionTitle en="Reserved Bus" ja={reservedBus.title} tone="dark" lead={reservedBus.intro} />
        <Reveal className="mx-auto mt-6 max-w-3xl text-center">
          <p className="inline-block border border-gold/50 px-5 py-2 text-sm tracking-widest text-gold-soft">{reservedBus.suspension}</p>
        </Reveal>

        <div className="mx-auto mt-16 max-w-5xl">
          <Reveal>
            <p className="font-mincho text-center tracking-[0.2em] text-washi">
              運行日　<span className="text-gold-soft">{reservedBus.schedule.days}</span>
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal><TimeColumn title="行き（昴の郷発）" stops={reservedBus.schedule.outbound} /></Reveal>
            <Reveal delay={120}><TimeColumn title="帰り（玉置神社発）" stops={reservedBus.schedule.inbound} /></Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <div className="h-full border border-gold/30 p-7 sm:p-8">
                <h4 className="font-mincho text-sm tracking-[0.3em] text-gold-soft">料金</h4>
                <dl className="mt-5 space-y-3">
                  {reservedBus.fare.map((f) => (
                    <div key={f.label} className="flex items-baseline justify-between gap-4 border-b border-gold/20 pb-3">
                      <dt className="font-mincho tracking-[0.2em] text-washi">{f.label}</dt>
                      <dd className="font-latin text-xl text-gold-soft">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full border border-gold/30 p-7 sm:p-8">
                <h4 className="font-mincho text-sm tracking-[0.3em] text-gold-soft">ご予約</h4>
                <dl className="mt-5 space-y-4 text-sm leading-loose">
                  {reservedBus.booking.map((b) => (
                    <div key={b.label} className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
                      <dt className="font-mincho tracking-[0.15em] text-washi">{b.label}</dt>
                      <dd className="text-mist/85">{b.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6">
                  <a href="tel:0746-64-0408" className="font-latin text-2xl text-gold-soft">0746-64-0408</a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="washi">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-mincho text-lg leading-loose tracking-[0.15em] text-ink">
            山道は天候や工事により通行止めとなることがあります。
            <br className="hidden sm:block" />
            お出かけ前に道路情報をご確認ください。
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/road" variant="outline-dark">道路情報</ButtonLink>
            <ButtonLink href="/news">お知らせ</ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

export const site = {
  name: "玉置神社",
  nameKana: "たまきじんじゃ",
  nameEn: "Tamaki Jinja",
  tagline: "神の棲む杜",
  taglineEn: "The Forest Where the Gods Dwell",
  description:
    "奈良県十津川村、標高1,076mの霊峰・玉置山に鎮座する玉置神社。熊野三山の奥院と称され、樹齢三千年と伝わる神代杉の杜に抱かれた、世界遺産「紀伊山地の霊場と参詣道」の聖地です。",
  url: "https://tamakijinja.or.jp",
  postalCode: "〒647-1582",
  address: "奈良県吉野郡十津川村玉置川１番地",
  tel: "0746-64-0500",
  fax: "0746-64-0429",
  officeName: "玉置神社社務所",
  elevation: "1,076m",
  founded: "紀元前37年（崇神天皇の御宇）",
  geo: { lat: 33.9241, lng: 135.8226 },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26485.30387188982!2d135.78497656626973!3d33.92407242146389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6006589be6e737e7%3A0xdca154be13b7133d!2z44CSNjM3LTE0NDQg5aWI6Imv55yM5ZCJ6YeO6YOh5Y2B5rSl5bed5p2R5bGx5omL6LC3!5e0!3m2!1sja!2sjp!4v1661490705117!5m2!1sja!2sjp",
  videos: [
    { id: "Mahrb5iSlPQ", title: "神の棲む杜 ショートVer.", duration: "30秒", thumb: "/images/video-short.jpg" },
    { id: "pX46wMRdkDs", title: "神の棲む杜 ロングVer.", duration: "5分30秒", thumb: "/images/video-long.jpg" },
  ],
} as const;

export type NavItem = { href: string; ja: string; en: string };

export const nav: NavItem[] = [
  { href: "/about", ja: "神社概要", en: "About" },
  { href: "/deities", ja: "御祭神", en: "Deities" },
  { href: "/precincts", ja: "境内のご案内", en: "Precincts" },
  { href: "/festivals", ja: "祭事", en: "Festivals" },
  { href: "/visit", ja: "参拝のご案内", en: "Worship" },
  { href: "/heritage", ja: "世界遺産", en: "World Heritage" },
  { href: "/sukeikai", ja: "崇敬会", en: "Supporters" },
  { href: "/access", ja: "アクセス", en: "Access" },
  { href: "/road", ja: "道路情報", en: "Road Info" },
  { href: "/news", ja: "お知らせ", en: "News" },
  { href: "/kouhoushi", ja: "広報紙", en: "Newsletter" },
];

/** Primary items shown inline in the desktop header; the rest live in the overlay menu. */
export const primaryNav = nav.filter((n) =>
  ["/about", "/deities", "/precincts", "/festivals", "/access", "/news"].includes(n.href),
);

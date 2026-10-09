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
  mapEmbed: "https://www.google.com/maps?q=%E7%8E%89%E7%BD%AE%E7%A5%9E%E7%A4%BE%20%E5%8D%81%E6%B4%A5%E5%B7%9D%E6%9D%91&z=12&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=%E7%8E%89%E7%BD%AE%E7%A5%9E%E7%A4%BE%20%E5%8D%81%E6%B4%A5%E5%B7%9D%E6%9D%91",
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

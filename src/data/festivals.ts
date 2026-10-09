/** 祭事 — transcribed from /saiji/ plus details from individual お知らせ posts. */

export type DateRule =
  | { type: "fixed"; month: number; day: number }
  /** 3月最初の午の日（三柱神社初午祭） */
  | { type: "hatsuuma" }
  /** 春分の日 */
  | { type: "shunbun" }
  /** 秋分の日 */
  | { type: "shubun" };

export interface Festival {
  id: string;
  name: string;
  /** Shrine/site that holds the rite, where the source says so. */
  place?: string;
  /** Month number (1–12) used for the year-wheel / month grid. */
  month: number;
  /** Human-readable date exactly as the original (e.g. "3月初の午の日"). */
  dateLabel: string;
  rule: DateRule;
  /** 大祭 etc. — highlighted on the site. */
  major?: boolean;
  /** Start time, when published in a past notice. */
  time?: string;
  description?: string;
}

export const festivals: Festival[] = [
  {
    id: "saitan",
    name: "歳旦祭",
    month: 1,
    dateLabel: "1月1日",
    rule: { type: "fixed", month: 1, day: 1 },
    major: true,
    time: "午前7時より",
    description: "新しい年をお迎えするお祭りです。大晦日の夜から歳旦午前0時には「新春一番太鼓」が行われ、参加された方が一人一回ずつ百八回太鼓を打ちます（参加者には新年の絵馬を授与・先着百八名様）。",
  },
  {
    id: "furufuda",
    name: "古神札御焚き上げ祭",
    month: 1,
    dateLabel: "1月28日",
    rule: { type: "fixed", month: 1, day: 28 },
  },
  {
    id: "kinen",
    name: "祈年祭",
    month: 2,
    dateLabel: "2月17日",
    rule: { type: "fixed", month: 2, day: 17 },
  },
  {
    id: "hatsuuma",
    name: "三柱神社初午祭（例祭）",
    place: "三柱神社",
    month: 3,
    dateLabel: "3月初の午の日",
    rule: { type: "hatsuuma" },
    major: true,
    time: "午前10時より",
    description:
      "三柱神社の例祭で、本社・玉置神社の例祭（10月24日）に次いで盛大に行われます。特別祈祷も例年通り斉行され、年により祭典後の餅撒き行事やぜんざい奉仕などが行われます。",
  },
  {
    id: "izumo-shunbun",
    name: "出雲大社玉置教会祖霊祭",
    place: "出雲大社玉置教会",
    month: 3,
    dateLabel: "3月春分の日",
    rule: { type: "shunbun" },
  },
  {
    id: "hakusan",
    name: "白山社例祭",
    month: 5,
    dateLabel: "5月6日",
    rule: { type: "fixed", month: 5, day: 6 },
  },
  {
    id: "tamaishi",
    name: "玉石社例祭",
    place: "玉石社",
    month: 5,
    dateLabel: "5月13日",
    rule: { type: "fixed", month: 5, day: 13 },
  },
  {
    id: "izumo-reisai",
    name: "出雲大社玉置教会例祭",
    place: "出雲大社玉置教会",
    month: 5,
    dateLabel: "5月14日",
    rule: { type: "fixed", month: 5, day: 14 },
  },
  {
    id: "nagoshi",
    name: "夏越大祓",
    month: 6,
    dateLabel: "6月30日",
    rule: { type: "fixed", month: 6, day: 30 },
    major: true,
    time: "午後3時より（齋庭）",
    description:
      "大祓は年に二度行われ、六月の大祓を夏越の祓いと呼びます。記紀神話の伊弉諾尊の禊祓に由来し、日々の生活の中で知らず知らず身についてしまった心身の穢れ、災厄の原因となる諸々の罪・過ちを祓い清める神聖な行事です。どなたでも参列でき、この先半年間の無病息災と心身の成長をご祈願します。",
  },
  {
    id: "dainichido",
    name: "大日堂大祭",
    place: "大日堂前",
    month: 8,
    dateLabel: "8月8日",
    rule: { type: "fixed", month: 8, day: 8 },
    major: true,
    time: "午前10時より",
    description:
      "採灯護摩（さいとうごま）を焚き、天下太平、国家安穏、家内安全、五穀豊穣などをご祈願します。玉置神社の神仏習合の歴史に則り、神事と仏事が一体として執り行われ、どなたでも参列できます。御堂内部の御本尊も御開帳いたします。",
  },
  {
    id: "izumo-shubun",
    name: "出雲大社玉置教会祖霊祭",
    place: "出雲大社玉置教会",
    month: 9,
    dateLabel: "9月秋分の日",
    rule: { type: "shubun" },
  },
  {
    id: "yomiya",
    name: "玉置神社宵宮祭",
    month: 10,
    dateLabel: "10月23日",
    rule: { type: "fixed", month: 10, day: 23 },
  },
  {
    id: "reisai",
    name: "玉置神社例祭",
    place: "玉置神社御本殿",
    month: 10,
    dateLabel: "10月24日",
    rule: { type: "fixed", month: 10, day: 24 },
    major: true,
    time: "午前9時30分より",
    description:
      "当社の例大祭。例年、神輿が神社周辺を練り歩く勇壮な祭りです（近年は社務所工事に伴い神輿渡御を中止）。祭典終了後に餅撒きなどが行われ、当日は村営バスの臨時運行があります。",
  },
  {
    id: "yamanokami",
    name: "山の神例祭",
    month: 12,
    dateLabel: "12月7日",
    rule: { type: "fixed", month: 12, day: 7 },
  },
  {
    id: "susuharai",
    name: "煤祓い神事",
    month: 12,
    dateLabel: "12月26日",
    rule: { type: "fixed", month: 12, day: 26 },
  },
  {
    id: "toshikoshi",
    name: "年越大祓",
    month: 12,
    dateLabel: "12月31日",
    rule: { type: "fixed", month: 12, day: 31 },
    major: true,
    time: "午後3時より",
    description:
      "毎年12月の晦日に、日々の生活の中で知らずのうちに身についた「罪」や「ケガレ」を人形に移して心身を清め、新しい年を迎える儀式です。",
  },
  {
    id: "joya",
    name: "除夜祭",
    month: 12,
    dateLabel: "12月31日",
    rule: { type: "fixed", month: 12, day: 31 },
    description: "一年を締め括るお祭りです。年越大祓に引き続き行われます。",
  },
];

export interface MonthlyRite {
  name: string;
  /** e.g. "毎月24日" */
  dayLabel: string;
  /** Day of month, where it is a fixed day. */
  day: number;
  place: string;
  note?: string;
}

/** 月次祭 */
export const monthlyRites: MonthlyRite[] = [
  { name: "月次祭", dayLabel: "毎月1日", day: 1, place: "出雲大社玉置教会" },
  { name: "月次祭", dayLabel: "毎月15日", day: 15, place: "三柱神社" },
  { name: "月次祭", dayLabel: "毎月24日", day: 24, place: "玉置神社" },
  { name: "大日堂社開扉", dayLabel: "毎月8日", day: 8, place: "大日堂社", note: "堂宇の外扉を開けて六角堂を公開しています。" },
];

/** 日供祭 */
export const dailyRite = {
  name: "日供祭",
  label: "毎日朝",
  time: "早朝",
};

/** The two seasonal 大祓 and the year-end/new-year schedule published on 12月2日. */
export const newYearSchedule = [
  { name: "年越大祓", when: "12月31日　午後3時より" },
  { name: "除夜祭", when: "12月31日　年越大祓に引き続き" },
  { name: "新春一番太鼓", when: "1月1日　午前0時より" },
  { name: "歳旦祭", when: "1月1日　午前7時より" },
];

/** 春分・秋分の日（1980〜2099年の近似式）。 */
function equinoxDay(year: number, kind: "shunbun" | "shubun"): number {
  const base = kind === "shunbun" ? 20.8431 : 23.2488;
  return Math.floor(base + 0.242194 * (year - 1980) - Math.floor((year - 1980) / 4));
}

const MS_DAY = 86_400_000;
/** 2024-03-07 was an 午 day (三柱神社初午祭). 午 days recur every 12 days. */
const UMA_REF = Date.UTC(2024, 2, 7);

function hatsuumaDate(year: number): Date {
  for (let d = 1; d <= 12; d++) {
    const t = Date.UTC(year, 2, d);
    const diff = Math.round((t - UMA_REF) / MS_DAY);
    if (((diff % 12) + 12) % 12 === 0) return new Date(year, 2, d);
  }
  return new Date(year, 2, 1);
}

/** Calendar date (local time, midnight) of a festival in a given year. */
export function festivalDateInYear(f: Festival, year: number): Date {
  const r = f.rule;
  switch (r.type) {
    case "fixed":
      return new Date(year, r.month - 1, r.day);
    case "hatsuuma":
      return hatsuumaDate(year);
    case "shunbun":
      return new Date(year, 2, equinoxDay(year, "shunbun"));
    case "shubun":
      return new Date(year, 8, equinoxDay(year, "shubun"));
  }
}

/** Next occurrence of a festival on or after `from` (day granularity). Call from a client component only. */
export function nextOccurrence(f: Festival, from: Date): Date {
  const today = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  const thisYear = festivalDateInYear(f, today.getFullYear());
  return thisYear >= today ? thisYear : festivalDateInYear(f, today.getFullYear() + 1);
}

/** Upcoming festivals sorted soonest first. Call from a client component only. */
export function upcomingFestivals(from: Date, limit = 3, onlyMajor = false): { festival: Festival; date: Date }[] {
  return festivals
    .filter((f) => !onlyMajor || f.major)
    .map((festival) => ({ festival, date: nextOccurrence(festival, from) }))
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, limit);
}

/** 広報紙「玉置之巨杉」— 13 issues from /kouhoushi/. */

export interface KouhoushiIssue {
  no: number;
  /** Title as printed in the original list. */
  title: string;
  /** Date as printed on the original site (和暦). */
  dateLabel: string;
  /** ISO date (day set to 1 where only a month is given). */
  date: string;
  cover: string;
  pdf: string;
}

const T = "広報紙「玉置之巨杉」";
const cover = (n: number) => `/images/kouhoushi/issue-${String(n).padStart(2, "0")}.jpg`;

/** Newest first. */
export const kouhoushi: KouhoushiIssue[] = [
  { no: 13, title: `${T}第１３号`, dateLabel: "令和７年２月１日", date: "2025-02-01", cover: cover(13), pdf: "http://tamakijinja.or.jp/weblog/wp-content/uploads/2025/02/tamaki_no_oosugi-13.pdf" },
  { no: 12, title: `${T}第１２号`, dateLabel: "令和６年９月１日", date: "2024-09-01", cover: cover(12), pdf: "http://tamakijinja.or.jp/weblog/wp-content/uploads/2024/09/tamaki_no_oosugi-12.pdf" },
  { no: 11, title: `${T}第１１号`, dateLabel: "令和６年２月１日", date: "2024-02-01", cover: cover(11), pdf: "http://tamakijinja.or.jp/weblog/wp-content/uploads/2024/02/tamaki_no_oosugi-11.pdf" },
  { no: 10, title: `${T}第１０号`, dateLabel: "令和５年９月１日", date: "2023-09-01", cover: cover(10), pdf: "http://tamakijinja.or.jp/weblog/wp-content/uploads/2023/09/tamaki_no_oosugi-10.pdf" },
  { no: 9, title: `${T}第９号`, dateLabel: "令和５年２月１日", date: "2023-02-01", cover: cover(9), pdf: "http://tamakijinja.totsukawa-web.com/wp-content/uploads/2023/02/tamaki_no_oosugi-9.pdf" },
  { no: 8, title: `${T}第８号`, dateLabel: "令和４年９月１日", date: "2022-09-01", cover: cover(8), pdf: "http://tamakijinja.totsukawa-web.com/wp-content/uploads/2022/09/tamaki_no_oosugi-8.pdf" },
  { no: 7, title: `${T}第７号`, dateLabel: "令和４年２月１日", date: "2022-02-01", cover: cover(7), pdf: "http://tamakijinja.totsukawa-web.com/wp-content/uploads/2022/02/tamaki_no_oosugi-7.pdf" },
  { no: 6, title: `${T}第６号`, dateLabel: "令和３年６月１日", date: "2021-06-01", cover: cover(6), pdf: "http://tamakijinja.totsukawa-web.com/wp-content/uploads/2021/05/tamaki_no_oosugi-6.pdf" },
  { no: 5, title: `${T}第５号`, dateLabel: "令和３年１月１日", date: "2021-01-01", cover: cover(5), pdf: "http://tamakijinja.totsukawa-web.com/wp-content/uploads/2021/03/tamaki_no_oosugi-5.pdf" },
  { no: 4, title: `${T}第４号`, dateLabel: "令和２年６月１日", date: "2020-06-01", cover: cover(4), pdf: "http://tamakijinja.totsukawa-web.com/wp-content/uploads/2020/06/tamaki_no_oosugi-4.pdf" },
  { no: 3, title: `${T}第３号`, dateLabel: "令和２年１月１日", date: "2020-01-01", cover: cover(3), pdf: "http://tamakijinja.totsukawa-web.com/wp-content/uploads/2019/12/tamaki_no_oosugi-3.pdf" },
  { no: 2, title: `${T}第２号`, dateLabel: "令和元年６月吉日", date: "2019-06-01", cover: cover(2), pdf: "http://tamakijinja.totsukawa-web.com/wp-content/uploads/2019/06/tamaki_no_oosugi-2.pdf" },
  { no: 1, title: `${T}第１号`, dateLabel: "平成３１年１月吉日", date: "2019-01-01", cover: cover(1), pdf: "http://tamakijinja.or.jp/weblog/wp-content/uploads/2023/08/tamakinooosugi-1-2.pdf" },
];

export const kouhoushiIndexUrl = "https://tamakijinja.or.jp/kouhoushi/";

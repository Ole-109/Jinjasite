/** アクセス — transcribed from /wpaccess/. */

export interface CarRoute {
  from: string;
  /** Route as published, arrows kept. */
  route: string;
  duration: string;
}

export const carRoutes: CarRoute[] = [
  {
    from: "大阪方面から",
    route: "阪和自動車道・美原JCT→南阪奈道路・葛城IC→大和高田バイパス・新堂ランプ→京奈和自動車道・五條IC→R370→R168",
    duration: "美原JCTより約3時間",
  },
  {
    from: "名古屋方面から",
    route: "東名阪自動車道→亀山IC→名阪国道・西名阪自動車道・郡山IC→五條経由→R168",
    duration: "亀山ICより約5時間",
  },
  {
    from: "和歌山方面から",
    route: "阪和自動車道・南紀田辺IC→R42→R311→R168",
    duration: "南紀田辺ICより約2.5時間",
  },
  {
    from: "三重方面から",
    route: "紀勢自動車道・尾鷲北IC→R42→熊野尾鷲道・尾鷲南→熊野大泊IC→R42→新宮市→R168（若しくは、R42→R311→R169）",
    duration: "熊野大泊ICより約2.0時間",
  },
];

export const publicTransport = {
  heading: "電車・バスで十津川温泉（バス停）までの道のり",
  lines: [
    "奈良交通・八木新宮バスをご利用ください。",
    "奈良方面からお越しの場合：八木駅、五條駅から十津川温泉下車",
    "和歌山方面からお越しの場合：新宮駅から十津川温泉下車",
    "時刻表・運賃については奈良交通のホームページをご参照ください。",
  ],
  link: { label: "奈良交通 八木新宮線 時刻表", href: "http://www.narakotsu.co.jp/rosen/yagi-shingu/totsukawa-timetable.html" },
};

export const lastMile = {
  heading: "十津川温泉（バス停）から玉置神社までの道のり",
  weekday: {
    label: "平日",
    text: "タクシーをご利用ください。",
    taxi: { name: "三光タクシー", tel: "0746-64-0231", fare: "片道約4,000円程度", href: "http://totsukawa.info/joho/kyokai_tomaru_taberu_kau_asobu/9taxi.html" },
  },
  holiday: {
    label: "土・日・祝日",
    text: "世界遺産予約バスをご利用ください。（バス無料キャンペーンがある場合があります。）",
    inquiry: { name: "十津川村観光協会", tel: "0746-63-0200", href: "http://totsukawa.info/" },
  },
};

export const reservedBus = {
  title: "世界遺産予約バス（玉置山コース）",
  intro: "平成27年4月より土・日・祝日の運行となります。事前予約が必要です。皆さまのご利用をお待ちしています。",
  suspension: "毎年12月～3月までは運休となっております。",
  schedule: {
    days: "土・日・祝日（但し、完全予約制）",
    outbound: [
      { stop: "昴の郷", time: "8:40" },
      { stop: "十津川温泉", time: "8:44" },
      { stop: "玉置神社", time: "9:24" },
    ],
    inbound: [
      { stop: "玉置神社", time: "11:10" },
      { stop: "十津川温泉", time: "11:50" },
      { stop: "昴の郷", time: "11:54" },
    ],
  },
  fare: [
    { label: "片道", value: "810円（定額）" },
    { label: "往復", value: "1,620円（定額）" },
  ],
  booking: [
    { label: "予約先", value: "奈良交通（株）平谷営業所　電話0746-64-0408" },
    { label: "予約受付", value: "平日の8時30分から17時まで" },
    {
      label: "予約締め切り",
      value: "乗車日の前日17時までに必ずご予約下さい。（乗車日の前日が土・日・祝日等の休日の場合は、休日の前日17時迄。）",
    },
    { label: "予約人数", value: "1名様からご予約可能です。" },
  ],
};

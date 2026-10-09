/** 御祭神 — transcribed from /gosinsai/ with roles from /kyounainogoannai/. */

export interface Deity {
  name: string;
  reading: string;
  /** Short role / description taken from the 境内 text. */
  role?: string;
}

export interface DeityGroup {
  id: string;
  /** Shrine name, e.g. "本社". */
  shrine: string;
  /** Rank label, e.g. "主祭神" / "摂社" / "末社". */
  rank: string;
  summary?: string;
  image?: string;
  deities: Deity[];
}

export const deityGroups: DeityGroup[] = [
  {
    id: "honsha",
    shrine: "本社",
    rank: "本殿",
    summary:
      "本殿には三基の宮殿が安置され、合せて五柱の神々を奉祀しています。内陣の中央殿に国常立尊、相殿に伊弉諾尊・伊弉冉尊、右殿に天照大御神、左殿に神日本磐余彦命をお祀りしています。",
    image: "/images/honsha.jpg",
    deities: [
      {
        name: "国常立尊",
        reading: "くにとこたちのみこと",
        role: "「日本書紀」の神話において天地開闢の始めに現れたとされる神。内陣の中央殿に奉斎される主祭神です。",
      },
      {
        name: "伊弉諾尊",
        reading: "いざなぎのみこと",
        role: "日本の国土を創生した神。相殿に配祀されています。",
      },
      {
        name: "伊弉冉尊",
        reading: "いざなみのみこと",
        role: "日本の国土を創生した神。相殿に配祀されています。",
      },
      {
        name: "天照大御神",
        reading: "あまてらすおおみかみ",
        role: "伊弉諾・伊弉冉の御子神。右殿（向かって右）にお祀りしています。",
      },
      {
        name: "神日本磐余彦尊",
        reading: "かむやまといわれひこのみこと",
        role: "天照大御神の五世孫で初代天皇（神武天皇）。左殿にお祀りしています。",
      },
    ],
  },
  {
    id: "mihashira",
    shrine: "三柱神社",
    rank: "摂社",
    summary:
      "別名「稲荷社」。稲荷信仰が盛んになる前から地主神としてお祀りされており、厄除けや心願成就、精神の病（ノイローゼなど）、また海上安全にも特別の霊験があるとされています。",
    deities: [
      {
        name: "倉稲魂神",
        reading: "うがのみたまのかみ",
        role: "京都府の伏見稲荷大社で、農業や商売繁盛などの神様としてお祀りされています。",
      },
      {
        name: "天御柱神",
        reading: "あめのみはしらのかみ",
        role: "奈良県生駒郡の龍田大社で、風を司る神様としてお祀りされています。",
      },
      {
        name: "国御柱神",
        reading: "くにのみはしらのかみ",
        role: "奈良県生駒郡の龍田大社で、風を司る神様としてお祀りされています。",
      },
    ],
  },
  {
    id: "wakamiya",
    shrine: "若宮社",
    rank: "末社",
    summary: "本社の西隣りに鎮座。向かって右に若宮社、左に神武社が並びます。",
    image: "/images/wakamiya-jinmu.jpg",
    deities: [
      { name: "八幡大神", reading: "はちまんのおおかみ" },
      { name: "春日大神", reading: "かすがのおおかみ" },
      { name: "住吉大神", reading: "すみよしのおおかみ" },
    ],
  },
  {
    id: "jinmu",
    shrine: "神武社",
    rank: "末社",
    summary: "若宮社の左に並んで鎮座する末社です。",
    image: "/images/wakamiya-jinmu.jpg",
    deities: [
      { name: "速玉男神", reading: "はやたまおのかみ" },
      { name: "迦具土神", reading: "かぐつちのかみ" },
      { name: "高倉下神", reading: "たかくらじのかみ" },
    ],
  },
  {
    id: "tamaishi",
    shrine: "玉石社",
    rank: "末社",
    deities: [{ name: "大巳貴命", reading: "おおなむちのみこと" }],
  },
];

import { HomeHero } from "@/components/home/HomeHero";
import { HomeIntro } from "@/components/home/HomeIntro";
import { HomeDeities } from "@/components/home/HomeDeities";
import { HomePrecincts } from "@/components/home/HomePrecincts";
import { HomeFestivals } from "@/components/home/HomeFestivals";
import { VideoSection } from "@/components/home/VideoSection";
import { HeritageBand } from "@/components/home/HeritageBand";
import { HomeNews } from "@/components/home/HomeNews";
import { HomeAccess } from "@/components/home/HomeAccess";
import { site } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["PlaceOfWorship", "TouristAttraction"],
  name: site.name,
  alternateName: site.nameEn,
  description: site.description,
  url: site.url,
  telephone: site.tel,
  faxNumber: site.fax,
  image: `${site.url}/images/honsha.jpg`,
  address: {
    "@type": "PostalAddress",
    postalCode: site.postalCode.replace("〒", ""),
    addressRegion: "奈良県",
    addressLocality: "吉野郡十津川村",
    streetAddress: "玉置川１番地",
    addressCountry: "JP",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomeHero />
      <HomeIntro />
      <HomeDeities />
      <HomePrecincts />
      <HomeFestivals />
      <VideoSection />
      <HeritageBand />
      <HomeNews />
      <HomeAccess />
    </>
  );
}

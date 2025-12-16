
import Breadcrumb from '@/components/Breadcrumb';
import AlternatingSections from '@/components/Diamonds/AlternatingSections';
import AlternatingVideoSections from '@/components/AlternatingVideoSections';
import DiamondProductionSection from '@/components/DiamondProductionSection';
import GemstoneManufacturing from '@/components/Diamonds/GemstoneManufacturing';
import DistributionMap from '@/components/Gemstones/DistributionMap';
import Contact from '@/components/Diamonds/Contact';


import bgImage from '@/assets/images/banners/diamonds-banner-1.jpg';
import contactBg from '@/assets/images/diamonds-contacts.jpg';
import gemstoneBg from '@/assets/images/The-KGK-Difference.jpg';
import worldImg from '@/assets/images/gemstones/around-world.png';

import diamondImg from '@/assets/images/diamond1.jpg';

import img1 from "@/assets/images/diamond1.jpg";
import img2 from "@/assets/images/diamond2.jpg";
import img3 from "@/assets/images/diamond3.jpg";

import { getMetadata } from "@/lib/getMetadata";

export async function generateMetadata() {
  return getMetadata("/our-business/diamonds");
}

const sectionsData = [
  {
    title: "A Legacy of Expertise",
    description:
      "Since entering diamond distribution in 1969 and manufacturing finished diamonds in 1986, KGK Group has built a reputation for precision and excellence. Headquartered in Antwerp, the global diamond capital, the brand’s operations and processes are streamlined based on the same values at various locations around the world.",
    image: img2,
    reverse: true,
  },
  {
    title: "Unmatched Quality and Choice",
    description:
      "KGK Group’s diamond portfolio features an extraordinary range of natural, colorless, and colored stones in every popular size, shape, and shade, reflecting versatility and innovation.",
    image: img3,
    reverse: false,
    button: {
      text: "Visit KGK Diamonds",
      link: "https://kgkdiamonds.com/",
      newTab: true
    }
  },
];

const customCountries = [
  { name: 'Belgium', code: 'BE' },
  { name: 'China', code: 'CN' },
  { name: 'Chinese Taiwan', code: 'TW' },
  { name: 'Hong Kong SAR', code: 'HK' },
  { name: 'India', code: 'IN' },
  { name: 'Japan', code: 'JP' },
  { name: 'Namibia', code: 'NA' },
  { name: 'South Africa', code: 'ZA' },
  { name: 'SOUTH EAST ASIA', code: ['SG', 'MY', 'PH', 'VN', 'TH', 'ID'] },
  { name: 'Switzerland', code: 'CH' },
  { name: 'Thailand', code: 'TH' },
  { name: 'UAE', code: 'AE' },
  { name: 'USA', code: 'US' },
];

export default function Diamonds() {
  return (
    <>
      <Breadcrumb
        heading="Diamonds"
        subheading="Outstanding Brilliance"
        bgImage={bgImage}
      />
      <AlternatingVideoSections
        title="Integrated Supply Pipeline: From Rough to Radiant"
        description="KGK Group ensures full control over the supply chain by carrying only high-quality diamonds. Each diamond is meticulously tracked from its raw form to the finished product, reinforcing the brand’s commitment to sustainable gemstone sourcing and ethical practices."
        image={diamondImg}
        youtubeId="J2i96vBtpnQ"
      />
      <AlternatingSections sections={sectionsData} />
      <GemstoneManufacturing
        backgroundImage={gemstoneBg}
        heading={`Diamonds Direct from <br/> the Source`}
        descriptionTop="With a team of highly skilled diamond buyers renowned for their expertise in evaluating and grading rough stones, KGK Group ensures only the finest diamonds enter the value and supply chain. Each ethically sourced diamond is processed at their state-of-the-art manufacturing units in:"
        listItems={["Angola", "Botswana", "India", "Namibia", "South Africa"]}
      />
      <DiamondProductionSection />
      <DistributionMap 
        heading="Efficient Distribution Network"
        subheading="The KGK Group operates a sophisticated secure global distribution infrastructure bringing wholesale diamonds to:"
        footer="KGK Group’s global distribution network ensures that diamonds are delivered efficiently and securely to clients worldwide, maintaining the highest standards of quality and service."
        countries={customCountries}
      />
      <Contact backgroundImage={contactBg} />

    </>
  );
}


import Breadcrumb from '@/components/Breadcrumb';
import AlternatingSections from '@/components/Diamonds/AlternatingSections';
import SourcingWorld from '@/components/Diamonds/SourcingWorld';
import GemstoneManufacturing from '@/components/Diamonds/GemstoneManufacturing';
import DistributionMap from '@/components/Gemstones/DistributionMap';
import Contact from '@/components/Diamonds/Contact';
import Intro from '@/components/Intro';


import bgImage from '@/assets/images/banners/mining-banner-1.jpg';
import contactBg from '@/assets/images/mining-contacts.jpg';
import gemstoneBg from '@/assets/images/The-KGK-Difference-2.jpg';
import worldImg from '@/assets/images/gemstones/around-world.png';

import img1 from "@/assets/images/mining1.jpg";

import { getMetadata } from "@/lib/getMetadata";

export async function generateMetadata() {
  return getMetadata("/our-business/mining");
}

const sectionsData = [
  {
    title: "Exquisite Gemstones, Responsibly Sourced",
    description:
      "KGK’s advanced mining practices, coupled with the expertise of KGK gemologists and engineers, enable the brand to extract some of the world’s most unique and exotic colored gemstones, including emeralds, rubies and sapphires. These gemstones form an integral part of the brand’s gemstone and jewellery portfolio making them global leaders in the industry.",
    image: img1,
    reverse: true,
  },
];

export default function Mining() {
  return (
    <>
      <Breadcrumb
        heading="Mining"
        subheading="Value Direct from the Source"
        bgImage={bgImage}
        showGradient={true}
      />
      <Intro
        paragraphs={[
          "At KGK Group, exceptional quality begins at the source. As a global leader in diamonds and premium gemstones, the brand invests in primary mining operations across South America and Africa to ensure exceptional value and authenticity in every piece.",
          "The brand’s commitment to ethical sourcing and sustainable gemstone production defines every approach. Adhering to international best practices, the brand ensures all operations benefit local communities while maintaining a zero-tolerance policy towards conflict zone sourcing.",
        ]}
        pProps={{
          className: "text-base",
        }}
      />
      <AlternatingSections sections={sectionsData} />
      
      <Contact backgroundImage={contactBg} />

    </>
  );
}

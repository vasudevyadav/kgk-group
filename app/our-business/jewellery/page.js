
import Breadcrumb from '@/components/Breadcrumb';
import AlternatingVideoSections from '@/components/AlternatingVideoSections';
import KgkDifferenceSection from '@/components/KgkDifferenceSection';
import JewelleryExcellence from '@/components/JewelleryExcellence';
import DistributionMap from '@/components/Gemstones/DistributionMap';
import GemstoneManufacturing from '@/components/Diamonds/GemstoneManufacturing';
import Contact from '@/components/Diamonds/Contact';
import Image from 'next/image';

import bgImage from '@/assets/images/banners/jewellery-banner-1.jpg';
import contactBg from '@/assets/images/jewellery-contacts.jpg';
import gemstoneBg from '@/assets/images/The-KGK-Difference-3.jpg';

import craftsmanshipImg from '@/assets/images/jewellery-craftsmanship.jpg';

import { getMetadata } from "@/lib/getMetadata";

export async function generateMetadata() {
  return getMetadata("/our-business/jewellery");
}

const customCountries = [
  { name: 'Australia', code: 'AU' },
  { name: 'China', code: 'CN' },
  { name: 'Eurozone', code: ['BE', 'FR', 'DE', 'IT', 'ES', 'NL'] }, // grouped EU example
  { name: 'India', code: 'IN' },
  { name: 'Japan', code: 'JP' },
  { name: 'Middle East', code: ['AE', 'SA', 'QA', 'KW', 'OM'] },
  { name: 'South Africa', code: 'ZA' },
  { name: 'USA', code: 'US' },
];


export default function Jewellery() {

  return (
    <>
      <Breadcrumb
        heading="Jewellery"
        subheading="Stunning Masterpieces"
        bgImage={bgImage}
      />

      <AlternatingVideoSections
        title="Exquisite Craftsmanship, Limitless Potential"
        description="KGK Group’s jewellery collections represent timeless elegance, innovative designs, and unmatched quality. The leading global brand offers a comprehensive range of impeccable creations that resonate with style and sophistication."
        image={craftsmanshipImg}
        youtubeId="EaKYnxzx3Eg"
      />
      <KgkDifferenceSection />
      <JewelleryExcellence />
 
      
      <GemstoneManufacturing
        backgroundImage={gemstoneBg}
        heading={`The KGK Standard`}
        descriptionTop="From sustainable gemstone sourcing to sophisticated jewellery manufacturing, KGK Group’s global footprint and vertically integrated expertise position the brand as a leader in the industry."

        descriptionBottom="KGK jewellery is as diverse as the tastes of your markets. Talk to us about obtaining the collection perfect for you."
      />
      <DistributionMap 
        heading="Jewellery delivered worldwide"
        subheading="KGK is fully compliant with import/export regulations in numerous destinations including:"
        footer="The KGK Group has the resources and experience to deliver even the biggest jewellery order on time and quality assured."
        countries={customCountries}
      />
      
      <Contact backgroundImage={contactBg} />

    </>
  );
}

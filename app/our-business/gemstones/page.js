import { fetchFromAPI } from '@/lib/api';

import Breadcrumb from '@/components/Breadcrumb';
import Precious from '@/components/Gemstones/Precious';
import SemiPrecious from '@/components/Gemstones/SemiPrecious';
import SourcingWorld from '@/components/Gemstones/SourcingWorld';
import GemstoneManufacturing from '@/components/Gemstones/GemstoneManufacturing';
import DistributionMap from '@/components/Gemstones/DistributionMap';
import Contact from '@/components/Gemstones/Contact';

import bgImage from '@/assets/images/banners/gemstones-banner-1.jpg';

import { getMetadata } from "@/lib/getMetadata";

// ✅ Force dynamic rendering
export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getMetadata("/our-business/gemstones");
}

export default async function Gemstones() {
  let gemstoneData = null;

  try {
    gemstoneData = await fetchFromAPI('gemstones');
  } catch (err) {
    console.error('Failed to fetch gemstones data:', err);
  }

  const precious = Array.isArray(gemstoneData?.precious_gemstones) ? gemstoneData.precious_gemstones : [];
  const semiPrecious = Array.isArray(gemstoneData?.semi_precious_gemstones) ? gemstoneData.semi_precious_gemstones : [];
  const sourcingCountries = Array.isArray(gemstoneData?.sourcing_countries) ? gemstoneData.sourcing_countries : [];
  const manufacturingCountries = Array.isArray(gemstoneData?.manufacturing_countries) ? gemstoneData.manufacturing_countries : [];

  return (
    <>
      <Breadcrumb
        heading="Gemstones"
        subheading="An irresistible spectrum"
        bgImage={bgImage}
      />
      {precious.length > 0 && <Precious data={precious} />}
      {semiPrecious.length > 0 && <SemiPrecious data={semiPrecious} staticYoutubeId="4D8-d6sp5jE" />}
      {sourcingCountries.length > 0 && <SourcingWorld data={sourcingCountries} />}
      {manufacturingCountries.length > 0 && <GemstoneManufacturing data={manufacturingCountries} />}
      <DistributionMap />
      <Contact />
    </>
  );
}

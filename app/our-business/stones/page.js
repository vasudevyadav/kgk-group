import { fetchFromAPI } from '@/lib/api';
import Breadcrumb from '@/components/Breadcrumb';
import KGKStonesSection from '@/components/KGKStonesSection';
import StonesSemiPrecious from '@/components/StonesSemiPrecious';
import NaturalStones from '@/components/NaturalStones';
import HalfIntro from '@/components/HalfIntro';
import Newsletter from "@/components/Home/Newsletter";

import bgImage from '@/assets/images/banners/stones-banner.jpg';
import newsletterImg from '@/assets/images/stones-bg1.jpg';

import { getMetadata } from "@/lib/getMetadata";

// ✅ Force dynamic rendering
export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getMetadata("/our-business/stones");
}

export default async function Stones() {
  let data = null;

  try {
    data = await fetchFromAPI('stones');
  } catch (err) {
    console.error('Failed to fetch stones data:', err);
  }

  const stones = Array.isArray(data?.stones) ? data.stones : [];

  return (
    <>
      <Breadcrumb
        heading="Natural Stones"
        subheading="A SYMPHONY OF ART & ARCHITECTURE "
        bgImage={bgImage}
      />
      <KGKStonesSection />
      <StonesSemiPrecious />
      {stones.length > 0 && <NaturalStones data={stones} />}
      <HalfIntro buttonHref="https://kgkstones.com/" />
      <Newsletter
        img={newsletterImg}
        showHeading={
          <>
            Contact KGK
            <br />
            about Stones
          </>
        }
        showSubtext={false}
      />
    </>
  );
}

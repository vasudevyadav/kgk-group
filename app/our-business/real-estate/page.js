import { fetchFromAPI } from '@/lib/api';

import Breadcrumb from '@/components/Breadcrumb';
import RealEstateSection from '@/components/RealEstateSection';
import RealEstateCarousel from '@/components/RealEstateCarousel';
import KGKRealty from '@/components/KGKRealty';
import Newsletter from "@/components/Home/Newsletter";

import bgImage from '@/assets/images/banners/real-estate-banner.jpg';
import newsletterImg from '@/assets/images/real-estate-bg3.jpg';

import { getMetadata } from "@/lib/getMetadata";

// ✅ Force server-side dynamic rendering
export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getMetadata("/our-business/real-estate");
}

export default async function RealEstate() {
  let data;

  try {
    data = await fetchFromAPI('real-estate');
  } catch (err) {
    console.error('Failed to fetch real estate data:', err);
    data = null;
  }

  // ✅ Safe fallback
  const properties = Array.isArray(data?.properties) ? data.properties : [];

  return (
    <>
      <Breadcrumb
        heading="Real Estate"
        subheading="TRANSFORMING SPACES INTO LANDMARKS"
        bgImage={bgImage}
        subheadingClassName="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px]"
        showGradient={false}
      />
      <RealEstateSection />
      <RealEstateCarousel data={properties} />
      <KGKRealty />
      <Newsletter
        img={newsletterImg}
        showHeading={
          <>
            Contact KGK
            <br />
            about Real Estate
          </>
        }
        showSubtext={false}
      />
    </>
  );
}

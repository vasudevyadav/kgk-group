import { fetchFromAPI } from '@/lib/api';

import Breadcrumb from '@/components/Breadcrumb2';
import KGKAdvantage from '@/components/KGKAdvantage';
import TheLegacy from '@/components/TheLegacy';
import LeadershipSection from '@/components/LeadershipSection';
import MilestoneTimeline from '@/components/MilestoneTimeline';
import OurBusiness from "@/components/Home/OurBusiness";
import CertificationBanner from "@/components/CertificationBanner";
import Newsletter from "@/components/Home/Newsletter";

import bgImage from '@/assets/images/banners/about-banner-1.jpg';

import { getMetadata } from "@/lib/getMetadata";

// ✅ Force dynamic rendering
export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getMetadata("/about-us");
}

export default async function AboutUs() {
  let homeData = null;
  let data = null;

  try {
    homeData = await fetchFromAPI('homepage');
  } catch (err) {
    console.error('Failed to fetch homepage:', err);
  }

  try {
    data = await fetchFromAPI('about-us');
  } catch (err) {
    console.error('Failed to fetch About Us:', err);
  }

  const milestones = Array.isArray(data?.milestones) ? data.milestones : [];
  const businesses = Array.isArray(homeData?.businesses) ? homeData.businesses : [];

  return (
    <>
      <Breadcrumb
        heading="Brilliance Meets Integrity"
        subheading="Crafting Masterpieces, Inspiring Trust"
        bgImage={bgImage}
        showGradient={true}
      />
      <KGKAdvantage />
      <TheLegacy />
      <LeadershipSection />
      {milestones.length > 0 && <MilestoneTimeline data={milestones} />}
      {businesses.length > 0 && <OurBusiness data={businesses} />}
      <CertificationBanner />
      <Newsletter />
    </>
  );
}

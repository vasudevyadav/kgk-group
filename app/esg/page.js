import { fetchFromAPI } from '@/lib/api';

import Breadcrumb from '@/components/Breadcrumb4';
import ESGSection from '@/components/ESGSection';
import CommitmentSwiper from '@/components/CommitmentSwiper';

import bgImage from '@/assets/images/banners/esg-banner.jpg';
import { getMetadata } from "@/lib/getMetadata";

// ✅ Force server-side dynamic rendering
export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getMetadata("/esg");
}

export default async function ESG() {
  let data;

  try {
    data = await fetchFromAPI('esg');
  } catch (err) {
    console.error('Failed to fetch ESG data:', err);
    data = null;
  }

  const esgData = data?.esg || null;
  const commitmentData = Array.isArray(data?.commitment) ? data.commitment : [];

  return (
    <>
      <Breadcrumb
        heading="ESG"
        subheading={
          <>
            Our Commitment to People, Planet
            <span className="inline-block lg:hidden">&nbsp;</span>
            <br className="hidden lg:block" />
            & Principles
          </>
        }
        bgImage={bgImage}
      />
      {esgData && <ESGSection data={esgData} />}
      {commitmentData.length > 0 && <CommitmentSwiper data={commitmentData} />}
    </>
  );
}

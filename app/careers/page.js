import { fetchFromAPI } from '@/lib/api';

import Breadcrumb from '@/components/Breadcrumb3';
import JoinTeam from '@/components/JoinTeam';
import Transcending from '@/components/Transcending';
import LifeAtKGK from "@/components/Home/LifeAtKGK";

import bgImage from '@/assets/images/banners/career-banner.jpg';
import { getMetadata } from "@/lib/getMetadata";

// ✅ Force server-side dynamic rendering
export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getMetadata("/careers");
}

export default async function Career() {
  let data;

  try {
    data = await fetchFromAPI('careers');
  } catch (err) {
    console.error('Failed to fetch careers:', err);
    data = null;
  }

  const jobs = Array.isArray(data?.jobs) ? data.jobs : [];

  return (
    <>
      <Breadcrumb
        heading="Joining the KGK family"
        subheading="OPPORTUNITIES TO SHINE"
        bgImage={bgImage}
        showDivider={true}
      />
      <JoinTeam data={jobs} />
      <Transcending />
      <LifeAtKGK />
    </>
  );
}

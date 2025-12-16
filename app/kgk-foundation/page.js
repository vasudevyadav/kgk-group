
import Breadcrumb from '@/components/Breadcrumb3';
import FoundationSection from '@/components/FoundationSection';
import FoundationLegacy from '@/components/FoundationLegacy';

import bgImage from '@/assets/images/banners/foundation-banner.jpg';

import { getMetadata } from "@/lib/getMetadata";

export async function generateMetadata() {
  return getMetadata("/kgk-foundation");
}

export default function KgkFoundation() {
  return (
    <>
      <Breadcrumb
        heading="A Mission of Purpose"
        subheading="Inspiring Lives, Nurturing Dreams"
        bgImage={bgImage}
        showDivider={false}
      />
      <FoundationSection />
      <FoundationLegacy />
    </>
  );
}

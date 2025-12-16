import Breadcrumb from '@/components/Breadcrumb';
import DiamatricsSection from '@/components/DiamatricsSection';
import VisionMission from '@/components/VisionMission';
import TechnologicalCarousel from '@/components/TechnologicalCarousel';
import FocusAreasSection from '@/components/FocusAreasSection';
import ApplicationsSection from '@/components/ApplicationsSection';
import CollaborationSection from '@/components/CollaborationSection';
import PartnerSection from '@/components/PartnerSection';

import bgImage from '@/assets/images/banners/diamatrics-banner.jpg';

import { getMetadata } from "@/lib/getMetadata";

export async function generateMetadata() {
  return getMetadata("/diamatrics");
}

export default function Diamatrics() {
    return (
        <>
            <Breadcrumb
                heading="Crafting the Extraordinary"
                subheading="Where Innovation Meets the Strength of Diamonds"
                bgImage={bgImage}
            />
            <DiamatricsSection />
            <VisionMission />
            <TechnologicalCarousel />
            <FocusAreasSection />
            <ApplicationsSection />
            <CollaborationSection />
            <PartnerSection />
        </>
    );
}
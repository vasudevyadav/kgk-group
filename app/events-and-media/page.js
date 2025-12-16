import { fetchFromAPI } from '@/lib/api';

import Breadcrumb from '@/components/Breadcrumb3';
import VisitSection from '@/components/VisitSection';
import EventsSection from '@/components/EventsSection';

import bgImage from '@/assets/images/banners/event-banner.jpg';

import { getMetadata } from "@/lib/getMetadata";

// ✅ Force dynamic server-side rendering
export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getMetadata("/events-and-media");
}

export default async function EventsAndMedia() {
  let data;
  try {
    data = await fetchFromAPI('events');
  } catch (err) {
    console.error('Failed to fetch events:', err);
    data = null;
  }

  const featureData = data?.feature || null;
  const moreEvents = Array.isArray(data?.more) ? data.more : [];

  return (
    <>
      <Breadcrumb
        heading="Events & Media"
        bgImage={bgImage}
      />
      {featureData && <VisitSection data={featureData} />}
      {moreEvents.length > 0 && <EventsSection data={moreEvents} />}
    </>
  );
}

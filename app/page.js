import { fetchFromAPI } from '@/lib/api';

import HeroSlider from "@/components/Home/HeroSlider";
import Legacy from "@/components/Home/Legacy";
import OurBusiness from "@/components/Home/OurBusiness";
import OurPresence from "@/components/Home/OurPresence";
import LifeAtKGK from "@/components/Home/LifeAtKGK";
import BrandSlide from "@/components/Home/BrandSlide";
import EventsMedia from "@/components/Home/EventsMedia";
import Awards from "@/components/Home/Awards";
import UpcomingEvents from "@/components/Home/UpcomingEvents";
import Blogs from "@/components/Home/Blogs";
import Newsletter from "@/components/Home/Newsletter";

import { getMetadata } from "@/lib/getMetadata";

// ⚡ Force dynamic so Next.js won't try to prerender statically
export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getMetadata("/");
}

export default async function Home() {
  let data = {};
  let blogsData = {};
  let eventsData = {};
  let awardsData = [];

  try {
    [data, blogsData, eventsData, awardsData] = await Promise.all([
      fetchFromAPI("homepage").catch(() => ({})),
      fetchFromAPI("blogs").catch(() => ({})),
      fetchFromAPI("events").catch(() => ({})),
      fetchFromAPI("awards").catch(() => ([])),
    ]);
  } catch (err) {
    console.error('Failed to fetch homepage data:', err);
  }

  const heroSlider = Array.isArray(data?.hero_slider) ? data.hero_slider : [];
  const businesses = Array.isArray(data?.businesses) ? data.businesses : [];
  const blogs = Array.isArray(blogsData?.blogs) ? blogsData.blogs : [];
  const events = Array.isArray(eventsData?.more) ? eventsData.more : [];
  const awards = Array.isArray(awardsData) ? awardsData : [];

  return (
    <>
      <HeroSlider data={heroSlider} />
      <Legacy />
      {businesses.length > 0 && <OurBusiness data={businesses} />}
      <OurPresence />
      <LifeAtKGK />
      <BrandSlide />
      {events.length > 0 && <EventsMedia data={events} />}
      {awards.length > 0 && <Awards data={awards} />}
      <UpcomingEvents />
      {blogs.length > 0 && <Blogs data={blogs} />}
      <Newsletter />
    </>
  );
}

import WorldOfficeMap from '@/components/WorldOfficeMap';
import OfficeLocations from '@/components/OfficeLocations';
import ContactForm from '@/components/ContactForm';

import { getMetadata } from "@/lib/getMetadata";

export async function generateMetadata() {
  return getMetadata("/contact-us");
}

export default function ContactUs() {
  return (
    <main className="min-h-screen">
      <WorldOfficeMap />
      <OfficeLocations />
      <ContactForm />
    </main>
  );
}

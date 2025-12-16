'use client';

import dynamic from 'next/dynamic';

// Dynamically import the client-only map component with SSR disabled
const DistributionMapClient = dynamic(
  () => import('./DistributionMapClient'),
  { ssr: false }
);

export default function DistributionMap() {
  return <DistributionMapClient />;
}

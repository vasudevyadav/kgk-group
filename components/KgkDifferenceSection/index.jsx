'use client';

import {
  Gem,
  Paintbrush2,
  Layers,
  BadgeDollarSign,
  Rocket,
  Settings2,
} from 'lucide-react';

import Image from 'next/image';

import manufacturingExcellence from '@/assets/images/jewellery-manufacturing-excellence.jpg';

export default function KgkDifferenceSection() {
  return (
    <section className="py-14 bg-gradient-to-b from-[#f9f9f9] via-gray-50 to-white">
      <div className="container">
        <div className="px-0 lg:px-[50px]">

            {/* KGK Difference */}
            <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal mb-6">
                    The KGK Difference
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card
                    icon={<Gem className="text-purple-600" />}
                    title="Accountability & Transparency"
                    description="From mining to cutting and polishing, KGK maintains full control over the supply chain. As direct buyers from De Beers and Alrosa, we ensure traceability and quality."
                    />
                    <Card
                    icon={<Paintbrush2 className="text-pink-600" />}
                    title="Innovative & Creative Designs"
                    description="Our globally aware designers create collections that resonate across cultures, combining trends with timeless beauty."
                    />
                    <Card
                    icon={<Layers className="text-blue-600" />}
                    title="Comprehensive Portfolio"
                    description="Jewellery in platinum, gold, and silver with diamonds and gemstones, crafted to suit every customer segment and taste."
                    />
                    <Card
                    icon={<BadgeDollarSign className="text-green-600" />}
                    title="Exceptional Value"
                    description="Vertical integration empowers KGK to deliver real cost savings and unmatched value to customers."
                    />
                </div>
            </div>

           {/* Empowering + Manufacturing Together */}
          

        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-gray-100 rounded-full">{icon}</div>
        <div>
          <h4 className="text-xl font-medium mb-2">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

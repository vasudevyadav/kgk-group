
import Breadcrumb from '@/components/Breadcrumb';
import AlternatingSections from '@/components/Diamonds/AlternatingSections';
import SourcingWorld from '@/components/Diamonds/SourcingWorld';
import GemstoneManufacturing from '@/components/Diamonds/GemstoneManufacturing';
import DistributionMap from '@/components/Gemstones/DistributionMap';
import Contact from '@/components/Diamonds/Contact';
import Image from 'next/image';

import bgImage from '@/assets/images/banners/retail-banner-1.jpg';
import contactBg from '@/assets/images/retail-contacts.jpg';
import gemstoneBg from '@/assets/images/The-KGK-Difference.jpg';
import worldImg from '@/assets/images/gemstones/around-world.png';

import collectionImg from '@/assets/images/collection.jpg';
import craftsmanshipImg from '@/assets/images/craftsmanship.jpg';


export default function Retail() {
  return (
    <>
      <Breadcrumb
        heading="Retail"
        subheading="Jewels to Treasure"
        bgImage={bgImage}
      />
      
      <section className="py-20 bg-white">
      <div className="container">
      <div className="px-0 lg:px-[50px]">

        {/* Main Heading */}
        <div className="">
          <h2 className="text-3xl md:text-4xl mb-4">
            A Sparkling Jewel in the KGK Crown: From Mines to Brands
          </h2>
          <p className="text-gray-700 text-lg">
            <strong>Entice</strong>, the fine jewellery retail brand by KGK Group, represents the pinnacle of KGK’s vertically integrated journey, from mines to brand. Launched in 2004 under the creative vision of Manju Kothari, Entice brings the KGK Group’s legacy of craftsmanship, innovation, and passion to life in standalone boutiques across Hong Kong SAR and India.
          </p>
        </div>

        {/* Collections That Captivate */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Collections That Captivate</h3>
            <p className="text-gray-700">
              The Entice collections showcase a captivating range of fine jewellery, seamlessly blending the brilliance of precious stones with exceptional design and craftsmanship. Each piece embodies KGK Group’s expertise as a global leader in gemstone and jewellery production, offering a perfect harmony of timeless elegance and contemporary charm.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={collectionImg}
              alt="Collections That Captivate"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
              placeholder="blur"
            />
          </div>
        </div>

        {/* Where Design Meets Craftsmanship */}
        <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={craftsmanshipImg}
              alt="Where Design Meets Craftsmanship"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
              placeholder="blur"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Where Design Meets Craftsmanship</h3>
            <p className="text-gray-700">
              Each Entice creation is a tribute to the fusion of extraordinary gemstones and masterful artistry. Designed to inspire and enchant seekers of lasting splendor, these jewels are meticulously crafted with passion, precision, and an unwavering commitment to quality, capturing the essence of KGK’s exceptional gemstone and jewellery legacy.
            </p>
          </div>
          
        </div>

        {/* Indulge in Splendor */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Indulge in Splendor</h3>
          <p className="text-gray-700 mb-2">
            Discover the brilliance of Entice at:
          </p>
          <ul className="text-gray-700 font-medium space-y-1">
            <li>• Hong Kong SAR</li>
            <li>• India</li>
            <li>• Botswana</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Entice, a shining facet of KGK Group, redefines luxury and elegance, offering timeless treasures that captivate every jewellery enthusiast.
          </p>
        </div>

      </div>
      </div>
    </section>
      <Contact backgroundImage={contactBg} />

    </>
  );
}

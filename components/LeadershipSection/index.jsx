'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Leadership from '@/components/Leadership';

import leadershipBg1 from '@/assets/images/navrattan-kothari.jpg';
import leadershipBg2 from '@/assets/images/sanjay-kothari.jpg';
import leadershipBg3 from '@/assets/images/sandeep-kothari.jpg';

// You can import carrier images similarly
import carrierBg1 from '@/assets/images/saransh-kothari.jpg'; 
import carrierBg2 from '@/assets/images/vedant-kothari.jpg'; 
import carrierBg3 from '@/assets/images/arnav.jpg'; 

export default function LeadershipSection() {
  const [activeTab, setActiveTab] = useState('builders');

  const builders = [
    {
      index: 0,
      zIndex: 5,
      title: 'Navrattan Kothari',
      subtitle: 'Patriarch',
      backgroundImage: leadershipBg1.src,
      paragraph: (
        <>
          <p className="text-white xl:text-black">
            Since 1962, Mr. Navrattan Kothari has been the guiding force behind KGK Group, transforming it into a modern multinational with world-class infrastructure and operations. Under his visionary leadership, KGK has continually innovated, expanded into new markets, and earned global recognition.
          </p>
          <p className="text-white xl:text-black">
            More than just building a business, Mr. Kothari has shaped a company driven by values, placing trust, integrity, ethics, and corporate responsibility at its core. As the Patriarch, he continues to steer KGK with wisdom and foresight, inspiring teams worldwide with his experience and strategic acumen.
          </p>
        </>
      ),
    },
    {
      index: 1,
      zIndex: 10,
      title: 'Sanjay Kothari',
      subtitle: 'Vice Chairman',
      backgroundImage: leadershipBg2.src,
      paragraph: (
        <>
          <p className="text-white xl:text-black">
            Based in Hong Kong, Sanjay Kothari is driving KGK Group’s expansion into new markets, steering the business to new heights. Overseeing the entire gems and jewellery value chain, from mining to retail, he plays a pivotal role in the group’s continued success.
          </p>
          <p className="text-white xl:text-black">
            His journey with KGK began with establishing diamond manufacturing in Mumbai. Since then, he has spearheaded the development of multiple verticals, including international sales and marketing, jewellery manufacturing, gemstone mining, jewellery retail, and real estate. Additionally, he leads the group’s IT and corporate identity initiatives, ensuring a strong, cohesive global presence.
          </p>
        </>
      ),
    },
    {
      index: 2,
      zIndex: 15,
      title: 'Sandeep Kothari',
      subtitle: 'Managing Director',
      backgroundImage: leadershipBg3.src,
      paragraph: (
        <>
          <p className="text-white xl:text-black">
            Since joining KGK Group in 1990, Sandeep Kothari has played a pivotal role in the growth of the diamond procurement and processing business on a global scale. His strategic leadership has significantly expanded the group’s footprint in the industry.
          </p>
          <p className="text-white xl:text-black">
            Now based in Antwerp, the world’s leading diamond hub, he has been instrumental in driving polished diamond sales across Europe. His expertise in fostering strong, long-term partnerships with renowned mining companies has further solidified KGK’s reputation as a trusted leader in the global diamond trade.
          </p>
        </>
      ),
    },
  ];

  const carriers = [
    {
      index: 3,
      zIndex: 20,
      title: 'Saransh Kothari',
      subtitle: '',
      backgroundImage: carrierBg1.src,
      paragraph: (
        <>
          <p className="text-white xl:text-black">
            With a background in electrical engineering and global consulting experience, Saransh Kothari brings a future-facing mindset to KGK. He launched KGK Diamatrix in Hong Kong, positioning the Group at the intersection of technology and materials innovation through lab-grown diamonds for industrial applications. Simultaneously, he founded Prismara, a D2C lifestyle jewellery brand merging design, technology, and craftsmanship. His initiatives in data science and internal digital transformation are paving the way for smarter, agile operations, ensuring KGK stays relevant in emerging sectors and markets.
          </p>
        </>
      ),
    },
    {
      index: 4,
      zIndex: 20,
      title: 'Vedant Kothari',
      subtitle: '',
      backgroundImage: carrierBg2.src,
      paragraph: (
        <>
          <p className="text-white xl:text-black">
            Born in India and raised across Mumbai, Antwerp, and the U.S., Vedant Kothari brings global perspective and entrepreneurial spirit to KGK’s international expansion. After helping scale a U.S.-based e-commerce venture to $100M in revenue, he joined the KGK Group with a focus on augmenting KGK’s presence in the American market. Based in New York, he is driving exponential growth in diamond trading and retail, while also overseeing real estate investments across the U.S. His consumer-first thinking, analytical approach, and exposure to diverse business cultures position him as a key force in shaping KGK’s future.
          </p>
        </>
      ),
    },
    {
      index: 5,
      zIndex: 10,
      title: 'Arnav Kothari',
      subtitle: '',
      backgroundImage: carrierBg3.src,
      paragraph: (
        <>
          <p className="text-white xl:text-black">
            Arnav Kothari represents the fifth generation of KGK with a vision rooted in innovation and systems thinking. Since joining in 2023, he has led the Group’s digital transformation, building cross-functional teams across e-commerce, CRM, AI, and analytics. He launched KGKdiamonds.com and its companion app, both now central to global B2B sales. His rollout of a unified CRM and data intelligence framework has improved commercial efficiency across borders. With a focus on tech-enabled growth and performance, Arnav is redefining how KGK operates in a digitally evolving world.
          </p>
        </>
      ),
    },
    
    
  ];

  const dataToRender = activeTab === 'builders' ? builders : carriers;

  return (
    <div className="relative bg-[#1e1e1e] text-white py-8">
      <div className="container">
        <div className="px-0 lg:px-[50px]">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('builders')}
              className={`px-5 py-2 border ${
                activeTab === 'builders' ? 'bg-white text-black' : 'border-white'
              }`}
            >
              Legacy Builders
            </button>
            <button
              onClick={() => setActiveTab('carriers')}
              className={`px-5 py-2 border ${
                activeTab === 'carriers' ? 'bg-white text-black' : 'border-white'
              }`}
            >
              Legacy Carriers
            </button>
          </div>

          {/* Desktop */}
          <div className="hidden xl:block">
            {dataToRender.map((item) => (
              <Leadership key={item.index} {...item} />
            ))}
          </div>

          {/* Mobile */}
          <div className="xl:hidden">
            <Swiper spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }}>
              {dataToRender.map((item) => (
                <SwiperSlide key={item.index}>
                  <Leadership
                    {...item}
                    backgroundPositionMobile={item.imagePosition === 'left' ? 'left' : 'right'}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}


import Breadcrumb from '@/components/Breadcrumb4';
import HealthcareSection from '@/components/HealthcareSection';
import HealthcareInitiatives from '@/components/HealthcareInitiatives';
import BMCHRCSection from '@/components/BMCHRCSection';
import HalfIntro from '@/components/HalfIntro';

import bgImage from '@/assets/images/heritage/banner.jpg';

import healthcareImg from '@/assets/images/heritage/Revitalizing-History-with-Purpose.jpg'; 


import logo from '@/assets/images/bmchrc-logo.png';
import hospitalImg from '@/assets/images/heritage/Jal-Mahal.jpg';
import oncologyImg from '@/assets/images/heritage/Historians-&-Conservationis.jpg';
import ipdImg from '@/assets/images/heritage/Master-Craftsmen.jpg';
import careImg from '@/assets/images/heritage/Environmental-Experts.jpg';

export default function Heritage() {
  return (
    <>
      <Breadcrumb
        heading="Heritage Conservation"
        subheading={
            <>
                Guardians of the
                <span className="inline-block lg:hidden">&nbsp;</span>
                <br className="hidden lg:block" />
                Past
            </>
        }
        bgImage={bgImage}
      />
      <HealthcareSection
        image={healthcareImg}
        title="Preserving the Past for the Future"
        description={
          <>
            <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-white max-w-lg lg:pr-6 mb-3">
              Dedicated to preserving architectural heritage, ensuring historical treasures stand strong for future generations.
            </p>
            <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-white max-w-lg lg:pr-6 mt-4">
              KGK Foundation is dedicated to preserving architectural heritage, ensuring that historical landmarks continue to tell their stories for generations to come. More than just structures, these sites embody the artistry, traditions, and spirit of past eras. By restoring and maintaining these cultural treasures, the foundation ensures their legacy endures.
            </p>
          </>
        }
      />
       <HealthcareInitiatives
        heading="Revitalizing History with Purpose"
        highlightLabel="Key Restoration Highlights:"
        description={
          <>
            <p>
              Heritage conservation is not simply about preserving buildings, it is about breathing new life into history. KGK Foundation adopts a meticulous approach to restoration, ensuring that each project maintains its original grandeur while embracing modern sustainability practices.
            </p>
          </>
        }
        initiatives={[
          {
            title: 'Structural Rehabilitation',
            description:
              'Strengthening stairways, archways, and domes while preserving original aesthetics.',
          },
          {
            title: 'Chameli Bagh Revival',
            description:
              'Restoring the palace’s exquisite rooftop garden, once a royal retreat filled with aromatic blooms and tranquil pathways.',
          },
          {
            title: 'Water Quality Improvement',
            description:
              'Implementing measures to purify Man Sagar Lake, ensuring a thriving aquatic ecosystem.',
          },
        ]}
      />

      <BMCHRCSection
        title="Jal Mahal Restoration: Reviving an Architectural Masterpiece"
        description={
          <>
            <p>
              One of KGK Foundation’s most iconic conservation projects is the restoration of Jal Mahal, Jaipur’s famed floating palace. Once a symbol of regal splendor, the palace had fallen into neglect, along with the surrounding Man Sagar Lake. The foundation undertook a transformative restoration effort to revive its lost beauty and historical significance.
            </p>
          </>
        }
        hospitalImage={hospitalImg}
        cards={[
          {
            img: oncologyImg,
            title: 'Historians & Conservationists',
            desc: 'Ensuring meticulous reconstruction aligned with historical accuracy.',
          },
          {
            img: ipdImg,
            title: 'Master Craftsmen',
            desc: 'Restoring intricate architectural details using traditional techniques.',
          },
          {
            img: careImg,
            title: 'Environmental Experts',
            desc: 'Reviving the ecosystem of Man Sagar Lake for sustainable conservation.',
          },
        ]}
      />

      {/* <HalfIntro
            backgroundImage="/images/healthcare-bg2.jpg"
            title="The Importance of Heritage Conservation"
            description={
                <>
                <p className="mb-4">
                  For KGK Foundation, preserving history is not about looking back—it’s about moving forward with awareness and responsibility. Through projects like the Jal Mahal restoration, the foundation ensures that:
                </p>
                <p className="mb-2">
                  • Future generations experience India’s architectural marvels firsthand.
                </p>
                <p className="mb-2">
                  • Local communities take pride in their cultural heritage and contribute to its preservation.
                </p>
                <p className="mb-4">
                  • Tourism and cultural appreciation thrive in a sustainable, responsible manner.
                </p>
                <p>
                  By safeguarding the past, KGK Foundation inspires the future, one restored landmark at a time.
                </p>
              </>
            }
            textColor="text-heading"
            headingCustomClass = "max-w-xl lg:pr-0"
            descriptionCustomClass = "max-w-lg lg:pr-24"
            showButton={false}
            paddingLeftClass="pl-[50px]"
        /> */}
    </>
  );
}


import Breadcrumb from '@/components/Breadcrumb4';
import HealthcareSection from '@/components/HealthcareSection';
import HealthcareInitiatives from '@/components/HealthcareInitiatives';
import BMCHRCSection from '@/components/BMCHRCSection';
import HalfIntro from '@/components/HalfIntro';

import bgImage from '@/assets/images/skill/banner.jpg';

import healthcareImg from '@/assets/images/skill/Comprehensive-business-training.jpg'; 


import logo from '@/assets/images/bmchrc-logo.png';
import hospitalImg from '@/assets/images/skill/KGK-academy.jpg';
import oncologyImg from '@/assets/images/skill/Specialized-training.jpg';
import ipdImg from '@/assets/images/skill/Mentorship.jpg';
import careImg from '@/assets/images/skill/Transforming-Lives-Through-Skill-Development.jpg';

export default function SkillDevelopment() {
  return (
    <>
      <Breadcrumb
        heading="Skill Development"
        subheading={
            <>
                Empowering the Future Through
                <span className="inline-block lg:hidden">&nbsp;</span>
                <br className="hidden lg:block" />
                Knowledge & Innovation
            </>
        }
        bgImage={bgImage}
      />
      <HealthcareSection
        image={healthcareImg}
        title="Skill Development: Empowering Communities Through Learning"
        description={
          <>
            <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-white max-w-lg lg:pr-6 mb-3">
              Empowering individuals with industry-relevant skills, fostering economic independence, professional growth, and community development.
            </p>
            <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-white max-w-lg lg:pr-6 mt-4">
              KGK Foundation is committed to bridging the skill gap by providing industry-relevant training that fosters economic independence, professional growth, and community development. By equipping individuals with practical expertise and entrepreneurial skills, the foundation creates sustainable career pathways, empowering both individuals and industries to thrive.
            </p>
          </>
        }
      />
       <HealthcareInitiatives
        heading="Transforming Lives Through Skill Development"
        highlightLabel="Key Skill Development Initiatives:"
        description={
          <>
            <p>
              Recognizing that skill development is key to economic progress, KGK Foundation invests in training programs that enhance employability and entrepreneurship. Its initiatives focus on hands-on learning, industry mentorship, and career-oriented education, ensuring that individuals gain the expertise needed to excel in competitive markets.
            </p>
          </>
        }
        initiatives={[
          {
            title: 'Vocational Training & Certification',
            description:
              'Providing specialized skill-based education for sustainable employment.',
          },
          {
            title: 'Entrepreneurship Development',
            description:
              'Equipping individuals with business acumen to build and scale enterprises.',
          },
          {
            title: 'Women’s Empowerment Programs',
            description:
              'Creating opportunities for financial independence through targeted skill training.',
          },
        ]}
      />

      <BMCHRCSection
        title="KGK Academy: Shaping Skilled Professionals for a Thriving Industry"
        description={
          <>
            <p>
              With state-of-the-art training centers in Surat, Jaipur, and Botswana, KGK Academy is dedicated to developing expertise in diamond processing and jewellery design—two of the most sought-after skills in the global gems and jewellery industry.
            </p>
          </>
        }
        hospitalImage={hospitalImg}
        cards={[
          {
            img: oncologyImg,
            title: 'Specialized training',
            desc: 'in diamond cutting, grading, and jewellery craftsmanship',
          },
          {
            img: ipdImg,
            title: 'Mentorship and career guidance',
            desc: 'from industry leaders.',
          },
          {
            img: careImg,
            title: 'Employment opportunities',
            desc: 'that promote financial independence and professional success in a traditionally male-dominated field.',
          },
        ]}
      />

      {/* <HalfIntro
            backgroundImage="/images/healthcare-bg2.jpg"
            title="Driving Industry Growth and Economic Progress"
            description={
                <>
                <p>KGK Foundation’s skill development initiatives are not just about individual success—they are about strengthening local communities, fostering innovation, and building a skilled workforce that contributes to industry growth and economic progress. Through continuous learning and empowerment, the foundation is shaping a future where opportunity and expertise go hand in hand.</p>
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


import Breadcrumb from '@/components/Breadcrumb4';
import HealthcareSection from '@/components/HealthcareSection';
import HealthcareInitiatives from '@/components/HealthcareInitiatives';
import BMCHRCSection from '@/components/BMCHRCSection';
import HalfIntro from '@/components/HalfIntro';

import bgImage from '@/assets/images/education/banner.jpg';

import healthcareImg from '@/assets/images/education/Expanding-Access-to-Quality-Education-.jpg'; 


import logo from '@/assets/images/bmchrc-logo.png';
import hospitalImg from '@/assets/images/education/The-Shri-Ram-Universal-School.jpg';
import oncologyImg from '@/assets/images/education/Academic-Rigor.jpg';
import ipdImg from '@/assets/images/education/Innovation-&-Creativity.jpg';
import careImg from '@/assets/images/education/Leadership-&-Social-Responsibility.jpg';

export default function Education() {
  return (
    <>
      <Breadcrumb
        heading="Education"
        subheading={
          <>
            Shaping Tomorrow Through
            <span className="inline-block lg:hidden">&nbsp;</span>
            <br className="hidden lg:block" />
            Knowledge
          </>
        }
        bgImage={bgImage}
      />
      <HealthcareSection
        image={healthcareImg}
        title="Advancing Medical Care, Transforming Lives"
        description={
          <>
            <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-white max-w-lg lg:pr-6 mb-3">
              Dedicated to fostering a holistic learning environment that nurtures curiosity, innovation, and leadership for a brighter tomorrow.
            </p>
            <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-white max-w-lg lg:pr-6 mt-4">
              KGK Foundation believes that education is the key to unlocking potential, fostering innovation, and shaping the leaders of tomorrow. With a commitment to holistic development, the foundation works to create learning environments that go beyond traditional academics, equipping students with the skills, confidence, and values needed to excel in a rapidly changing world.
            </p>
          </>
        }
      />
       <HealthcareInitiatives
        heading="Expanding Access to Quality Healthcare"
        highlightLabel="Key Education Initiatives:"
        description={
          <>
            <p>
              Recognizing that education is a lifelong journey, KGK Foundation supports initiatives that enhance learning opportunities for students across diverse backgrounds. Through modern infrastructure, innovative teaching methodologies, and value-driven programs, the foundation nurtures future leaders who are not only academically strong but also socially responsible.
            </p>
          </>
        }
        initiatives={[
          {
            title: 'Scholarships & Financial Aid',
            description:
              'Supporting meritorious and underprivileged students to ensure education is accessible to all.',
          },
          {
            title: 'Teacher Training & Development',
            description:
              'Investing in educators to enhance teaching methodologies and student engagement.',
          },
          {
            title: 'Skill Development & Innovation Programs',
            description:
              'Encouraging experiential learning, critical thinking, and leadership skills to prepare students for the future.',
          },
        ]}
      />

      <BMCHRCSection
        title="The Shri Ram Universal School (TSUS), Jaipur"
        description={
          <>
            <p>
              As a premier initiative under the KGK Foundation, The Shri Ram Universal School (TSUS), Jaipur is committed to providing an educational experience that seamlessly blends academic excellence with character-building and innovation.
            </p>
          </>
        }
        hospitalImage={hospitalImg}
        cards={[
          {
            img: oncologyImg,
            title: 'Academic Rigor',
            desc: 'A strong foundation combined with modern teaching methodologies.',
          },
          {
            img: ipdImg,
            title: 'Innovation & Creativity',
            desc: 'Encouraging students to explore ideas and develop unique solutions.',
          },
          {
            img: careImg,
            title: 'Leadership & Social Responsibility',
            desc: 'Instilling values that extend beyond personal success to create meaningful impact in society.',
          },
        ]}
      />

      
    </>
  );
}

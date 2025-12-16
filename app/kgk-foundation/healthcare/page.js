
import Breadcrumb from '@/components/Breadcrumb4';
import HealthcareSection from '@/components/HealthcareSection';
import HealthcareInitiatives from '@/components/HealthcareInitiatives';
import BMCHRCSection from '@/components/BMCHRCSection';
import HalfIntro from '@/components/HalfIntro';

import bgImage from '@/assets/images/banners/healthcare-banner.jpg';

import healthcareImg from '@/assets/images/healthcare-1.jpg'; 

import logo from '@/assets/images/bmchrc-logo.png';
import hospitalImg from '@/assets/images/bmchrc-hospital.jpg';
import oncologyImg from '@/assets/images/oncology.jpg';
import ipdImg from '@/assets/images/ipd.jpg';
import careImg from '@/assets/images/cancer-care.jpg';

export default function Healthcare() {
  return (
    <>
      <Breadcrumb
        heading="Healthcare"
        subheading={
          <>
            Advancing Medical Care,
            <span className="inline-block lg:hidden">&nbsp;</span>
            <br className="hidden lg:block" />
            Transforming Lives
          </>
        }
        bgImage={bgImage}
      />
      <HealthcareSection
        image={healthcareImg}
        title="Advancing Medical Care, Transforming Lives"
        description={
          <p 
            className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-white max-w-lg lg:pr-6"
          >
            KGK Foundation is dedicated to ensuring that life-saving treatments, advanced medical care, 
            and compassionate support reach those who need them the most. Through a commitment to medical 
            excellence and accessibility, the foundation drives impactful healthcare initiatives that uplift 
            communities and create a healthier future.
          </p>
        }
      />
       <HealthcareInitiatives
        heading="Expanding Access to Quality Healthcare"
        highlightLabel="Key Healthcare Initiatives:"
        description={
          <>
            <p>
              Believing that healthcare is a fundamental right, KGK Foundation actively works to bridge the gap in medical accessibility. Through strategic partnerships, infrastructure development, and specialized programs, the foundation enhances healthcare services, bringing modern treatments and expert care to underserved populations.
            </p>
          </>
        }
        initiatives={[
          {
            title: 'Medical Outreach Programs',
            description:
              'Organizing free health check-ups, awareness drives, and diagnostic camps to promote early detection and prevention.',
          },
          {
            title: 'Infrastructure & Equipment Support',
            description:
              'Strengthening hospitals and clinics with modern technology and medical advancements.',
          },
          {
            title: 'Financial Aid for Treatments',
            description:
              'Providing support to underprivileged patients, ensuring that financial constraints never stand in the way of critical healthcare.',
          },
        ]}
      />

      <BMCHRCSection
        title="Bhagwan Mahaveer Cancer Hospital & Research Centre (BMCHRC)"
        description={
          <>
            <p>
             Established in 1997, BMCHRC stands as North India’s premier oncology center, offering comprehensive cancer care with cutting-edge medical technology and expert specialists. NABH-accredited and equipped with 350 beds, the hospital integrates advanced treatments with compassionate care to provide holistic cancer management.
            </p>
          </>
        }
        logo={logo}
        hospitalImage={hospitalImg}
        cards={[
          {
            img: oncologyImg,
            title: 'Multidisciplinary Treatment Approach',
            desc: 'Combining medical, surgical, and radiation oncology with personalized patient care.',
          },
          {
            img: ipdImg,
            title: 'Newly Inaugurated In-Patient Department (IPD) Block',
            desc: 'A seven-story facility designed to enhance patient comfort and streamline cancer treatment services.',
          },
          {
            img: careImg,
            title: 'All-Women Cancer Care Wing',
            desc: 'Extending financial aid and emotional support to underprivileged female patients, ensuring equitable access to life-saving treatments.',
          },
        ]}
      />

      <HalfIntro
          backgroundImage="/images/healthcare-bg2.jpg"
          title="A Commitment to Compassionate Healthcare"
          description={
              <>
              <p>KGK Foundation remains steadfast in its mission to bridge the healthcare gap, offering world-class treatment facilities and financial assistance to make a meaningful difference in people’s lives. Through continuous advancements and unwavering dedication, the foundation strives to create a healthier tomorrow for all.</p>
              </>
          }
          textColor="text-heading"
          headingCustomClass = "max-w-xl lg:pr-0"
          descriptionCustomClass = "max-w-lg lg:pr-24"
          showButton={false}
          paddingLeftClass="pl-[50px]"
      />
    </>
  );
}

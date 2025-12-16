
import Breadcrumb from '@/components/Breadcrumb';
import KGKHospitality from '@/components/KGKHospitality';
import HalfIntro from '@/components/HalfIntro';
import Newsletter from "@/components/Home/Newsletter";

import bgImage from '@/assets/images/banners/hospitality-banner.jpg';
import newsletterImg from '@/assets/images/hospitality-bg1.jpg';

import { getMetadata } from "@/lib/getMetadata";

export async function generateMetadata() {
  return getMetadata("/our-business/hospitality");
}

export default function Hospitality() {
  return (
    <>
        <Breadcrumb
            heading="Hospitality"
            subheading="precision, innovation, and tradition"
            bgImage={bgImage}
            showGradient={true}
        />
        <KGKHospitality />
        <HalfIntro
            backgroundImage="/images/hospitality-bg2.jpg"
            title="A Culinary Destination"
            description={
                <>
                <p className="mb-8">KGK Hospitality is more than just dining, it is about creating spaces where food, culture, and hospitality converge. Whether through elegant fine dining establishments or innovative culinary ventures, the brand is dedicated to delivering experiences that leave a lasting impression.</p>
                <p>Through this expansion, KGK Hospitality upholds the group’s legacy while embracing new opportunities, redefining luxury and sophistication</p>
                </>
            }
            buttonText="VISIT Meraaki kitchen"
            buttonHref="https://meraakikitchen.com/"
            buttonColor="bg-primary text-white hover:bg-primary"
            textColor="text-heading"
            headingCustomClass = "lg:pr-0"
            descriptionCustomClass = "lg:pr-[60px] lg:text-[17px]"
        />
        <Newsletter
            img={newsletterImg}
            showHeading={
                <>
                    Contact KGK
                    <br />
                    about Hospitality
                </>
                }
            showSubtext={false}
        />
    </>
  );
}
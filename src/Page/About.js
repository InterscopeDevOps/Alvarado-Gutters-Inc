import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import TransparentHeader from "../components/global/TransparentHeader";
import BaseLayout from "../components/global/BaseLayout";
import ValuesOne from "../components/values/ValuesOne";
import BlockPrincipal from "../components/block/Block_4";
import BlockSecondary from "../components/block/Block_1";

function About() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="About">
      <div className="md:max-w-full w-full">
        <TransparentHeader
          headertitle="About"
          Subheader="About"
          bgimg={`${rpdata?.stock?.[3]}`}
        />
        <BlockPrincipal
            title={'a little about us'}
            text={rpdata?.dbAbout?.[0]?.text}
            image1={rpdata?.gallery?.[0]}
            image2={rpdata?.gallery?.[1]}
            image3={rpdata?.gallery?.[2]}
            listAbout
          />
        <ValuesOne image={rpdata?.stock?.[5]} />

        <BlockSecondary
          title={rpdata?.dbSlogan?.[2]?.slogan}
          text={rpdata?.dbAbout?.[1]?.text}
          image={rpdata?.stock?.[0]}
        />
      </div>
    </BaseLayout>
  );
}

export default About;

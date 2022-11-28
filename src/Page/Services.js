import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import TransparentHeader from "../components/global/TransparentHeader";
import ContentServices from "../components/Services/ContentServices";
import BaseLayout from "../components/global/BaseLayout";

function Services() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="Services">
      <div className="md:max-w-full w-full">
        <TransparentHeader
          headertitle="Services"
          Subheader="Services"
          bgimg={`${rpdata?.gallery?.[0]}`}
        />
        <ContentServices/>
      </div>
    </BaseLayout>
  );
}

export default Services;

import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import TransparentHeader from "../components/global/TransparentHeader";
import Map from "../components/Contact/MapContent";
import BaseLayout from "../components/global/BaseLayout";
import ContactInfo from "../components/Contact/ContactInfo_3";

function Contact() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="Contact">
      <div className="md:max-w-full w-full">
        <TransparentHeader
          headertitle="Contact"
          Subheader="Contact"
          bgimg={`${rpdata?.stock?.[1]}`}
        />
        <ContactInfo />
        <Map />
      </div>
    </BaseLayout>
  );
}

export default Contact;

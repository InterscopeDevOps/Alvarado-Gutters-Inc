import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from "../global/boton/ButtonContent";
import ServicesHome from "../Services/ServicesHome_5";

function ContentServicesHome() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <>
      <div className="md:w-[98%] mx-auto my-12 text-center">
        <h2 className="text-center py-4">{rpdata?.labels?.general?.titleServices}</h2>
        <ButtonContent btnStyle="three" btnName="view all services" btnLink={'services'} />
        <div className="flex flex-wrap items-center justify-center">
          {rpdata?.dbServices?.slice(0, 8).map((item, index) => {
            return (
              <ServicesHome
                key={index}
                bgImg={item.description[0].img}
                serviceName={item.name}
                serviceText={item.description[0].text.substring(0, 160) + "..."}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ContentServicesHome;

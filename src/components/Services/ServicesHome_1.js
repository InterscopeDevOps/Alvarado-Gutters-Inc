import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from "../global/boton/ButtonContent";

function ServicesHome({ bgImg, serviceName, serviceText }) {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <div className="w-full">
      <div className="max-w-7xl">
        <div className="flex flex-wrap border-gray-200 shadow-lg pr-6 text-center md:text-start">
          <div className="md:w-[40%] w-full flex flex-col">
            <div
              className="w-full h-[250px] bg-cover bg-center"
              style={{ backgroundImage: `url("${bgImg}")` }}
            >
              <img
                src={rpdata?.dbPrincipal?.logo}
                alt="Not Found"
                className="relative w-[70px] bg-black rounded-full py-[10px]"
              />
            </div>
          </div>
          <div className="flex flex-col self-center py-4 px-8 md:w-[60%] w-full">
            <h5 className="text-[20px] leading-[24px] ">{serviceName}</h5>
            <p className="text-[15px] leading-[24px] pt-2">{serviceText}</p>
            <ButtonContent  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesHome;

import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from "./boton/ButtonContent";

function BloqueHome() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <>
    <div className="relative md:pt-[150px] pt-[200px] pb-[120px] md:w-4/5 w-full mx-auto flex md:flex-row flex-col p-6">
      <div className="md:w-1/2 w-full md:text-start text-center">
        <h1 className=" md:text-start text-center">
          {rpdata?.dbSlogan?.[1].slogan}
        </h1>
        <p className="md:text-start text-center">
          {rpdata?.dbValues?.[0].description}
        </p>
        <ButtonContent btnStyle="three" />
      </div>
      <div className="md:w-1/2 w-full p-4 text-center">
        <div className="bg-header md:w-full md:h-[800px] w-full md:mt-[-270px] md:mb-[-220px] md:ml-[300px]">
          <div className="w-full h-full flex justify-center align-middle items-center">
            <img
              src={rpdata?.gallery?.[4]}
              alt="Not Found"
              className="mx-auto rounded-full md:w-[500px] md:h-[500px] sm:w-[600px] sm:h-[600px] w-[350px] h-[350px]  object-cover md:mr-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default BloqueHome;

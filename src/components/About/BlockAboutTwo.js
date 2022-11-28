import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from "../global/boton/ButtonContent";


function BlockAboutTwo() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <div className="bgblockAboutbgImage bg-[#00a0e6]">
      <section className="w-full flex justify-center py-32">
        <div className="max-w-6xl md:flex md:flex-row flex flex-col md:p-0 md:px-6 px-2 content-reverse">
          <div className="md:w-[50%] block md:flex relative z-10">
            <div
              className="w-full md:w-[50%] mr-5 md:h-[600px] h-[350px] bg-cover bg-center "
              style={{ backgroundImage: `url("${rpdata?.stock?.[4]}")` }}
            ></div>
            <div
              className="w-full md:w-[50%] md:h-[600px] h-[350px] bg-cover bg-center"
              style={{ backgroundImage: `url("${rpdata?.stock?.[5]}")` }}
            ></div>
          </div>
          <div className="md:w-[50%] py-4 md:px-8 px-3 self-center md:text-start text-center">
            <h2 className="separator-about text-white">{rpdata?.dbSlogan?.[2].slogan}</h2>
            <p className="text-white">{rpdata?.dbAbout?.[1].text}</p>
            <ButtonContent />

            <div className="w-full">
              <span className="separator-about"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlockAboutTwo;

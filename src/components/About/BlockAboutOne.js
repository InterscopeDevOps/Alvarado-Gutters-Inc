import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from "../global/boton/ButtonContent";
import { VscDebugBreakpointData } from 'react-icons/vsc'

function BlockAboutOne() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <>
      <section className="w-full flex justify-center md:py-32 py-10">
        <div className="max-w-6xl md:flex md:p-0 px-2 content-reverse">
          <div className="md:w-[50%]">
            <div
              className="w-full md:h-[600px] h-[350px] bg-cover bg-center"
              style={{ backgroundImage: `url("${rpdata?.gallery?.[2]}")` }}
            ></div>
          </div>
          <div className="md:w-[50%] py-4 md:px-8 px-3 self-center md:text-start text-center">
            <h2 className="separator-about">A Little About Us</h2>
            <p>{rpdata?.dbAbout?.[0].text}</p>
            <ul className="list-inner-section pl-3 text-start">
              {
                rpdata?.dbAbout?.[0].list.length > 1 ?
                  rpdata?.dbAbout?.[0].list.map((item, index) => {
                    return (

                      <li key={index} className="py-2 flex items-center">
                        <VscDebugBreakpointData />
                        <span className="pl-2">{item}</span>
                      </li>
                  )
                })
              : null
              }
            </ul>
            <ButtonContent />
            <div className="w-full">
              <span className="separator-about"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlockAboutOne;

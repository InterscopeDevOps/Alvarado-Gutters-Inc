import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from "../global/boton/ButtonContent";
import {VscDebugBreakpointData} from 'react-icons/vsc'

function BlockHomeOne() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <>
      <section className="w-4/5 mx-auto md:py-32 py-10">
        <div className="md:flex md:flex-row flex flex-col md:p-0 px-2 content-reverse">
          <div className="md:w-[50%] relative">
            <div
              className="w-full md:h-[600px] h-[350px] bg-cover bg-center"
              style={{ backgroundImage: `url("${rpdata?.stock?.[5]}")` }}
            ></div>
            <div
              className="w-[60%] h-[50%]  absolute bottom-0 right-0 border-white border-[15px] z-10 bg-cover bg-center"
              style={{ backgroundImage: `url("${rpdata?.stock?.[2]}")`}}
            ></div>
          </div>

          <div className="md:w-[50%] py-4 md:px-8 px-3 self-center md:text-start text-center">
          {
            rpdata?.dbPrincipal?.licensed !== ' ' ?
            <h2 className="separator-about">we are licensed  <br /> {rpdata?.dbPrincipal?.licensed} </h2>
            :
            <h2 className="separator-about">We Have {rpdata?.dbPrincipal?.exprYears} Years Of Experience </h2>

          }
            <p className="pb-4">{rpdata?.dbHome?.[0].text}</p>
            <ul className="list-inner-section pl-3 text-start">
              {rpdata?.dbServices?.slice(0, 5).map((item, index) => {
                return (
                  <li key={index} className="py-1 flex items-center">
                    <VscDebugBreakpointData />
                    <span>{item.name}</span>
                  </li>
                )
              })}
            </ul>
            <ButtonContent  />
            <div className="w-full">
              <span className="separator-about"></span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default BlockHomeOne;

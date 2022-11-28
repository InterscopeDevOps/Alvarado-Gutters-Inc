import React from "react";
import { ButtonContent } from "../global/boton/ButtonContent";

const ServicesBlock = ({ ServiceName, TextService, bgimg, ClassesRow, DisplayNone, itemServices, classesMargin }) => {
  return (
    <div
      className="md:flex  md:flex-row content-text-bg md:p-0 px-2 my-[200px] "
      style={{
        flexDirection: `${ClassesRow}`
      }}
    >
      <div className={`md:w-[50%] md:self-center md:my-[-40px] ${classesMargin} md:p-10 p-4  shadow-lg bg-white z-10 rounded-xl`}>
        <h3 className={DisplayNone}>
          {ServiceName}
        </h3>
        {/* <div className={`md:w-[50%] w-full h-0.5 bg-black my-2 ${DisplayNone}`}></div> */}
        <p>{TextService}</p>
        <ul>
          {itemServices}
        </ul>
        <ButtonContent  btnStyle='three' />
      </div>
      <div className="md:w-[50%] w-full flex self-center">
        <div
          className="w-full md:h-[500px] h-[350px] bg-cover bg-center"
          style={{ backgroundImage: `url("${bgimg}")` }}
        ></div>
      </div>
    </div>
  );
};

export default ServicesBlock;
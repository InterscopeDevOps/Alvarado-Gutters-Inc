import React from "react";
import { ButtonContent } from "./boton/ButtonContent";

const CallToActionTwo = ({ SloganOne, SloganTwo, bgimg, phone }) => {
  return (
    <div>
      <div
        className="call-to-action-area bg-overlay"
        style={{ backgroundImage: `url("${bgimg}")` }}
      >
        <div className="w-full content-text md:flex md:text-start text-center">
            <div className="w-[50%]">

            </div>
          <div className="text-star max-w-4xl md:px-2 p-6 flex self-center justify-between">
            <div className="text-star md:max-w-4xl max-w-full w-full md:px-20 px-2">
              <h2 className="text-white">{SloganOne}</h2>
              <h4 className="text-white">{SloganTwo}</h4>
              <ButtonContent    btnName={phone}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionTwo;

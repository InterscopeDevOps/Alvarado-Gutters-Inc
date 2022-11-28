import React from "react";

const CallToAction = ({ SloganOne, SloganTwo, bgimg }) => {
  return (
    <div>
      <div
        className="call-to-action-area bg-overlay"
        style={{ backgroundImage: `url("${bgimg}")` }}
      >
        <div className="w-full content-text md:flex md:text-start text-center">
          <div className="text-star md:max-w-4xl max-w-full w-full md:px-32 px-2">
            <h2 className="text-white">{SloganOne}</h2>
            <h4 className="text-white">{SloganTwo}</h4>
          </div>
          <div className="text-star max-w-4xl md:px-20 p-6 flex self-center justify-between">
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

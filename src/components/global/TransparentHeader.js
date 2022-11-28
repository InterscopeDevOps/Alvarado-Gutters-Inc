import React from "react";

const TransparentHeader = ({ headertitle, bgimg, Subheader }) => {
  return (
    <div
      className="breadcrumb-area"
      style={{ backgroundImage: `url("${bgimg}")` }}
    >
      <div className="text-center relative">
        <h1 className="text-white">{headertitle}</h1>
        {
          headertitle === Subheader ?
            <h6 className="text-white">Home - {Subheader}</h6>
            :
            <h6 className="text-white">{Subheader}</h6>
        }
      </div>
    </div>
  );
};

export default TransparentHeader;

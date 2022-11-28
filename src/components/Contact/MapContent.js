/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext } from "react";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GlobalDataContext } from "../../context/context";

const Map = () => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <div>
      <div className="w-full mt-[60px]">
        {
          rpdata?.labels?.general?.titleMap ?
            <h2 className="text-center pb-5">
              {rpdata?.labels?.general?.titleMap}
            </h2>
            :
            <h2 className="text-center pb-5">
              We Cover {rpdata?.dbPrincipal?.miles} Miles Around {rpdata?.dbPrincipal?.location?.[0].address}
            </h2>
        }
        {
          rpdata?.dbPrincipal?.location.length > 2 ?
            <ul className="pt-4 pb-4 md:p-0 flex flex-wrap justify-between md:justify-center items-center ">
              {rpdata?.dbPrincipal?.location?.map((item, index) => {
                return (
                  <Link to="/contact" key={index}>
                    <li className="py-2 px-3 flex items-center">
                      <FiMapPin fontSize={25} />
                      <span className="pl-2">{item.address}</span>
                    </li>
                  </Link>
                );
              })}
            </ul>
            : null
        }
        <iframe src={rpdata?.dbPrincipal?.location?.[0].url} className="w-full h-[500px]" />
      </div>
    </div>
  )
}

export default Map

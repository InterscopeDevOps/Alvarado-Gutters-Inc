import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { FiPhoneCall } from "react-icons/fi";
import {BsArrowUpRightCircleFill} from "react-icons/bs";
import { NavLink } from "react-router-dom";

function ServicesHome_2({ bgImg, serviceName, serviceText }) {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <div
      className="md:w-[380px] h-[250px] bg-cover bg-center p-4 mx-4 my-6 relative before:bg-black before:bg-opacity-50 before:absolute before:inset-0 hover:transform hover:rotate-1 hover:scale-105 transition-all duration-500"
      style={{ backgroundImage: `url("${bgImg}")` }}
    >
      <div className="flex justify-between relative">
        <a
          href={`tel:+1${rpdata?.dbPrincipal?.phones?.[0].phone}`}
          className="py-1 px-3 bg-2 flex self-center text-white rounded-full"
          rel="noopener noreferrer"
        >
          <FiPhoneCall className="self-center mr-2" />
          Call Us Now
        </a>
        <img
          src={rpdata?.dbPrincipal?.favicon}
          alt="Not Found"
          className="relative w-[60px] h-[60px] rounded-full object-cover bg-white"
        />
      </div>
      <div className="flex flex-col self-center py-4 w-full relative md:text-start text-center">
        <h5 className="text-[20px] leading-[24px] text-white">{serviceName}</h5>
        <p className="text-[15px] leading-[24px] pt-2 text-gray-200">
          {serviceText}
        </p>
      </div>
      <NavLink to="/services" className="relative">
        <BsArrowUpRightCircleFill className="bg-2 p-1 text-[32px] text-white rounded-full" />
      </NavLink>
    </div>
  );
}

export default ServicesHome_2;

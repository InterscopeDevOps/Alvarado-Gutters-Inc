import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalDataContext } from "../../context/context";

function ServicesHome_5({bgImg, serviceName}) {
  const { rpdata } = useContext(GlobalDataContext);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="card html mx-10 my-8">
        <img
          src={rpdata?.dbPrincipal?.favicon}
          alt=""
          className="w-[45px] h-[45px] absolute object-cover mb-[250px] left-3 rounded-full z-10"
        />
        <div className="cor__cobertura"></div>
        <div className="circulo">
          <img
            src={bgImg}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <p className="font-bold mt-[30px] z-10 text-[18px]">{serviceName}</p>
        <div className="w-full flex justify-end">
          <Link to="/services" onClick={goToTop}>
            <FaArrowRight className="bg-white z-10 color-2 relative p-1 text-[25px] rounded-full mr-4" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default ServicesHome_5;
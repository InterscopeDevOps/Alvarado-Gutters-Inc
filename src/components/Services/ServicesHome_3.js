import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import {BsArrowBarRight} from "react-icons/bs";
import { Link } from "react-router-dom";
import { ButtonContent } from "../global/boton/ButtonContent";

function ServicesHome3({ bgImg, serviceName, serviceText }) {
  const { rpdata } = useContext(GlobalDataContext);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-4/5 mx-auto  py-10">
          <div className="flex flex-col  items-center md:justify-between md:items-center pb-8">
            <h3>Our Services</h3>
            <ButtonContent btnStyle='three' btnName='view all services' btnLink={'services'} />
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 ${rpdata?.dbServices?.length > 5 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}  gap-5`}>
            {
              rpdata?.dbServices?.slice(0, 6).map((serv, index) => {
                return (
                  <div key={index} className='p-5 border-[#E9E9E9] border-[1px] drop-shadow-lg flex relative'>
                    <div className="w-[50%]">
                      <img
                        src={serv.description[0].img}
                        alt="No fount"
                        className="w-full h-[180px]  object-cover"
                      />
                    </div>
                    <div className="w-[50%] flex flex-col justify-end ">
                      <img
                        src={rpdata?.dbPrincipal?.favicon}
                        alt="No fount"
                        className="w-[30%] h-[40%] absolute top-0 right-0 rounded-l-full object-cover"
                      />
                      <Link to='/services' onClick={goToTop}>
                        <h5 className="px-3 text-[18px]">{serv.name}</h5>
                        <div className="flex items-center">
                          <h5 className="px-3 text-[14px] text-[#0369B3]">More Services</h5>
                          <BsArrowBarRight color="#0369B3" />
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
  );
}

export default ServicesHome3;

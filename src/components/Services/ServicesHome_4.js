import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import {ButtonContent} from "../global/boton/ButtonContent"


function ServicesHome3({ bgImg, serviceName, serviceText }) {
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <div className="w-4/5 mx-auto pt-10 pb-0 md:py-10">
      <div className="flex flex-col  items-center md:justify-between md:items-center pb-8 mb-20">
        <h3>Our Services</h3>
        <ButtonContent btnStyle='three' btnName='view all services' btnLink={'services'} />
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 ${rpdata?.dbServices?.length > 5 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}  gap-5`}>
        {
          rpdata?.dbServices?.slice(0, 6).map((serv, index) => {
            return (
              <div
                key={index}
                className='relative mb-20'
                style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px' }}
              >
                <div className="absolute left-5 -top-10">
                  <img
                    src={rpdata?.dbPrincipal?.favicon}
                    alt='logo'
                    className="w-[30%] rounded-2xl"
                  />
                </div>
                <div>
                  {
                    serv?.description?.slice(0, 1).map((item, index) => {
                      return (
                        <div key={index} className='text-center md:text-start'>
                          <img
                            src={item.img}
                            alt={serv.name}
                            className='w-full h-[220px] md:h-[250px] lg:h-[300px] object-cover pb-3 rounded-md'
                          />
                          <div className="px-5 pb-5">
                            <h4 className="capitalize pb-3">{serv.name}</h4>
                            <p>{item.text.substring(0, 170)}...</p>
                            <ButtonContent btnName={'View More'} btnLink='services' />
                          </div>
                        </div>
                      )
                    })
                  }
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

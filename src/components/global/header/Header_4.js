import React, { useContext } from "react";
import { GlobalDataContext } from "../../../context/context";
import { ButtonContent } from "../boton/ButtonContent";
import { BiPhoneCall } from "react-icons/bi";
import { BsCalendar4Range, BsClockHistory } from "react-icons/bs";
import Navmenu from "./NavMenu";

const HeaderFour = () => {
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <header className="absolute right-[3%] left-[3%] z-20">
      <div className="flex justify-center md:flex-row flex-col py-3">
        <div className="w-full md:w-[20%] flex self-center bg-white">
          <img
            src={rpdata?.dbPrincipal?.logo}
            alt="logo"
            loading="lazy"
            className="md:w-[80%] w-[90%] py-2 mx-auto"
          />
        </div>

        <div className="block md:w-[80%] lg:w-[75%] w-full self-center">
          <div className="flex px-4 bg-white bg-opacity-30">
            <div className="w-[55%] lg:w-[70%] py-4 hidden md:block">
              <div className="flex justify-between">
                <div className="flex  text-white">
                  <div className="w-[15%] self-center mr-3">
                    <BiPhoneCall color="white" fontSize={30} />
                  </div>
                  <div>
                    <a
                      href={`tel:+1${rpdata?.dbPrincipal?.phones?.[0]?.phone}`}
                    >
                      <p className="-mb-3">Phone Number</p>
                      <h5 className="text-[16px]">
                        {rpdata?.dbPrincipal?.phones?.[0]?.phone}
                      </h5>
                    </a>
                  </div>
                </div>

                <div className="hidden text-white  lg:flex">
                  <div className="w-[15%] self-center mr-3">
                    <BsCalendar4Range color="white" fontSize={30} />
                  </div>
                  <div>
                    <p className="-mb-3">Workdays</p>
                    <h5 className="text-[16px]">
                      {rpdata?.dbPrincipal?.workdays?.[0]?.day}
                    </h5>
                  </div>
                </div>

                <div className="hidden lg:flex justify-end text-white">
                  <div className="w-[15%] self-center mr-3">
                    <BsClockHistory color="white" fontSize={30} />
                  </div>
                  <div>
                    <p className="-mb-3">Work Hours</p>
                    <h5 className="text-[16px]">
                      {rpdata?.dbPrincipal?.workHours?.[0]?.hour}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%] md:flex justify-center self-center hidden">
              <ul className="flex justify-center space-x-7 pr-5">
                {rpdata?.dbSocialMedia?.redes.map((item, index) => {
                  return (
                    <li key={index} className="text-white">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className={`fab fa-${item.icon}`}
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="bg-2 px-3 py-1">
            <div className="flex justify-between items-center">
              {
                rpdata?.simpleWidgets?.[3]?.activo ?
                  <div className="md:w-auto px-2 hidden md:block">
                    <h4 className="text-white ">{rpdata?.dbPrincipal?.name}</h4>
                  </div>
                  :
                  <nav className="md:w-auto w-[20%] px-2">
                    <Navmenu />
                  </nav>
              }
              {
                rpdata?.simpleWidgets?.[3]?.activo ?
                  <div className="md:w-[45%] lg:w-[25%] w-[100%] text-center md:text-end border-0 md:border-l ml-0 lg:ml-7">
                    <ButtonContent />
                  </div>
                  :
                  <div className="md:w-[45%] lg:w-[25%] w-[80%] text-end border-0 md:border-l ml-0 lg:ml-7">
                    <ButtonContent />
                  </div>
              }

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderFour;

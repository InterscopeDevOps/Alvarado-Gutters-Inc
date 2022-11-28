import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalDataContext } from "../../../context/context";
import { FaCheck, FaCreditCard } from 'react-icons/fa'
import { FiPhoneCall, FiMapPin, FiClock } from 'react-icons/fi'
import { GoCalendar } from 'react-icons/go'


function FooterOne() {
  const { rpdata } = useContext(GlobalDataContext);

  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  // agregar la pestaña de reviews al array de dbMenu

  const el = {
    name: `Reviews`,
    link: `/reviews`,
    child: false,
  }

  if (rpdata?.reviews?.activo && rpdata?.reviews?.isHomeOnly === false) {
    const num = menu.length - 1
    menu.splice(num, 0, el)
  }
  //  fin de agregar pestaña de reviews

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="w-full flex justify-center bg-gray-400 bg-opacity-5 p-3 py-14 bg-footer text-white">
        <div className="md:max-w-screen-lg w-full">
          <div className="block md:grid md:grid-cols-2 md:gap-5 lg:gap-7 lg:grid-flow-col">
            <div className="self-center pt-10">
              <img src={rpdata?.dbPrincipal?.logo} className="w-[100%] rounded-lg" alt="Not Found" />
            </div>
            <div className="pt-10">
              <h5>About</h5>
              <p className="pb-4">
                {
                  rpdata?.simpleWidgets?.[3]?.activo ?
                    rpdata?.dbAbout?.[1].text
                    :
                    rpdata?.dbAbout?.[1].text.substring(0, 182)
                }
              </p>
            </div>


            {/* Navigation */}
            {
              rpdata?.simpleWidgets?.[3]?.activo ?
                null :
                <div className="pt-10">
                  <h5>Navigation</h5>
                  <ul className="pl-2">
                    {
                      menu.map((item, index) => {
                        return (
                          <li className="py-2" onClick={goToTop} key={index}>
                            <Link to={item.link} className="flex">
                              <FaCheck className="self-center" />
                              <span className="pl-2">{item.name}</span>
                            </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
            }

            {/* Contact */}
            <div className="pt-10">
              <h5>Contact</h5>
              <ul className="pl-2">
                {rpdata?.dbPrincipal?.location?.slice(0, 1).map((item, index) => {
                  return (
                    <Link to="/contact" key={index}>
                      <li className="py-2 flex items-center">
                        <FiMapPin fontSize={25} />
                        <span className="pl-3">{item.address}</span>
                      </li>
                    </Link>
                  );
                })}
                {rpdata?.dbPrincipal?.phones?.map((item, index) => {
                  return (
                    <a href={`tel:+1${item.phone}`} key={index}>
                      <li className="py-2 flex items-center">
                        <FiPhoneCall fontSize={25} />
                        <span className="pl-3">{item.phone} {item.name}</span>
                      </li>
                    </a>
                  );
                })}
                {rpdata?.dbPrincipal?.workdays.map((item, index) => {
                  return (
                    <li className="py-2 flex items-center" key={index} >
                      <GoCalendar fontSize={25} />
                      <span className="pl-3">{item.day}</span>
                    </li>
                  );
                })}
                {rpdata?.dbPrincipal?.workHours.map((item, index) => {
                  return (
                    <li className="py-2 flex items-center" key={index}>
                      <FiClock fontSize={25} />
                      <span className="pl-3">{item.hour}</span>
                    </li>
                  );
                })}
                {

                  <li className="py-2 flex flex-col">
                    <span className="flex items-center">
                      <FaCreditCard fontSize={25} />
                      <span className="pl-3 capitalize">{rpdata?.dbPrincipal?.paymentMethod}</span>
                    </span>
                    {
                      rpdata?.tiposPago?.[0]?.activo ?
                        <img src={rpdata?.tiposPago?.[0]?.img} width={'300'} alt='no found' />
                        : null
                    }
                  </li>
                }

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-around md:flex-row items-center flex-col-reverse text-center text-white  py-4 bg-[#3B5997]">
        <p>
          ©2022, Copy Right By {rpdata?.dbPrincipal?.name}. All Rights Reserved
        </p>
        <ul className="flex">
          {rpdata?.dbSocialMedia?.redes.map((item, index) => {
            return (
              <li key={index} className='mr-7'>
                <a href={item.url} target="_blank" rel='noopener noreferrer' >
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
    </>
  );
}

export default FooterOne;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalDataContext } from "../../../context/context";
import { FaArrowRight, FaCreditCard } from "react-icons/fa";
import { FiPhoneCall, FiMapPin, FiClock, FiMail } from "react-icons/fi";
import { GoCalendar } from "react-icons/go";
import { ButtonContent } from "../boton/ButtonContent";

function Footer4() {
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
  };
  rpdata?.simpleWidgets?.forEach((element) => {
    const num = menu.length - 1;
    if (element.val === "ReviewTab" && element.activo === true) {
      menu.splice(num, 0, el);
    }
  });
  //  fin de agregar pestaña de reviews

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center bg-gray-400 bg-opacity-5 p-8 py-14 bg-footer text-white">
        <div className="md:w-3/4 mx-auto text-center flex justify-center mb-4 md:flex-row flex-col-reverse">
          <div className="w-full md:w-[70%] text-start self-center md:px-10">
            <h2 className="text-white md:pt-0 pt-6">
              {rpdata?.dbSlogan?.[3].slogan}
            </h2>
            <ButtonContent btnStyle="three" />
          </div>
          <div className="md:w-[30%] flex justify-center self-center">
            <img
              src={rpdata?.dbPrincipal?.logo}
              className="md:w-[400px] w-[280px] object-cover"
              alt="Frank Fence & Construction"
              loading="lazy"
            />
          </div>
        </div>
        <div className="md:w-4/5 mx-auto text-center flex justify-center"></div>
        <div className="md:w-4/5 mx-auto">
          <div className="flex md:flex-row flex-col">

          {/* About */}
            <div className={`pt-10 ${rpdata?.simpleWidgets?.[3]?.activo ? 'md:w-[60%]' : 'md:w-[40%]'} `}>
              <div className="my-2 md:mx-6 p-6 rounded-2xl text-white">
                <span className="text-[25px] font-bold">About</span>
                <p className="pb-4">
                  {
                    rpdata?.simpleWidgets?.[3]?.activo ?
                      rpdata?.dbAbout?.[1].text
                      :
                      rpdata?.dbAbout?.[1].text.substring(0, 181) + "..."
                  }
                </p>
              </div>
            </div>

            <div className="pt-10 md:w-[20%]">
              <span className="text-[25px] font-bold">Services</span>
              <ul className="pl-1">
                {rpdata?.dbServices?.slice(0, 6).map((item, index) => {
                  return (
                    rpdata?.simpleWidgets?.[3]?.activo ?
                      <li className="py-2" key={index}>
                        <a href={`tel:+1${rpdata?.dbPrincipal?.phones?.[0]?.phone}`} className="flex">
                          <FaArrowRight className="self-center bg1 p-2 text-[30px] rounded-md" />
                          <span className="pl-2">{item.name}</span>
                        </a>
                      </li>
                      :
                      <li className="py-2" onClick={goToTop} key={index}>
                        <Link to="/services" className="flex">
                          <FaArrowRight className="self-center bg1 p-2 text-[30px] rounded-md" />
                          <span className="pl-2">{item.name}</span>
                        </Link>
                      </li>
                  );
                })}
              </ul>
            </div>

            {
              rpdata?.simpleWidgets?.[3]?.activo ?
                null
                :
                <div className="pt-10 md:w-[15%]">
                  <span className="text-[25px] font-bold">Navigation</span>
                  <ul className="pb-3">
                    {menu.map((item, index) => {
                      return (
                        <li className="py-2 mx-3" onClick={goToTop} key={index}>
                          <Link to={item.link} className="flex">
                            <FaArrowRight className="self-center bg1 p-2 text-[30px] rounded-md" />
                            <span className="pl-2">{item.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
            }

            <div className="pt-10 md:w-[30%]">
              <span className="text-[25px] font-bold">Contact</span>
              <ul className="pl-2">
                {rpdata?.dbPrincipal?.location
                  ?.slice(0, 1)
                  .map((item, index) => {
                    return (
                      <li key={index}>
                        <Link to="/contact" className="py-2 flex items-center">
                          <FiMapPin className="bg1 p-2 text-[30px] rounded-md" />
                          <span className="pl-3">{item.address}</span>
                        </Link>
                      </li>
                    );
                  })}
                {rpdata?.dbPrincipal?.phones?.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={`tel:+1${item.phone}`}
                        className="py-2 flex items-center"
                      >
                        <FiPhoneCall className="bg1 p-2 text-[30px] rounded-md" />
                        <span className="pl-3">{item.phone}</span>
                      </a>
                    </li>
                  );
                })}

                {rpdata?.dbPrincipal?.emails?.[0].email.length > 0 ? (
                  <li>
                    <a
                      href={`mailto:${rpdata?.dbPrincipal?.emails[0].email}`}
                      className="py-2 flex items-center"
                    >
                      <FiMail className="bg1 p-2 text-[30px] rounded-md" />
                      <span className="pl-3">
                        {rpdata?.dbPrincipal?.emails[0].email}
                      </span>
                    </a>
                  </li>
                ) : null}

                {rpdata?.dbPrincipal?.workdays.length > 1 ? (
                  <li className="py-2 flex items-center">
                    <GoCalendar className="bg1 p-2 text-[30px] rounded-md" />
                    <div className="flex flex-col">
                      <span className="pl-3">
                        {rpdata?.dbPrincipal?.workdays?.[0].day}
                      </span>
                      <span className="pl-3">
                        {rpdata?.dbPrincipal?.workHours?.[0].hour}
                      </span>
                    </div>
                  </li>
                ) : (
                  <li className="py-2 flex items-center">
                    <GoCalendar className="bg1 p-2 text-[30px] rounded-md" />
                    <span className="pl-3">
                      {rpdata?.dbPrincipal?.workdays?.[0].day}
                    </span>
                  </li>
                )}
                {rpdata?.dbPrincipal?.workdays.length > 1 ? (
                  <li className="py-2 flex items-center">
                    <FiClock className="bg1 p-2 text-[30px] rounded-md" />
                    <div className="flex flex-col">
                      <span className="pl-3">
                        {rpdata?.dbPrincipal?.workdays?.[1].day}
                      </span>
                      <span className="pl-3">
                        {rpdata?.dbPrincipal?.workHours?.[1].hour}
                      </span>
                    </div>
                  </li>
                ) : (
                  <li className="py-2 flex items-center">
                    <FiClock className="bg1 p-2 text-[30px] rounded-md" />
                    <span className="pl-3">
                      {" "}
                      {rpdata?.dbPrincipal?.workHours?.[0].hour}
                    </span>
                  </li>
                )}
                <li className="py-2 flex items-center">
                  <FaCreditCard className="bg1 p-2 text-[30px] rounded-md" />
                  <span className="pl-3 capitalize">
                    {rpdata?.dbPrincipal?.paymentMethod}
                  </span>
                </li>
                {rpdata?.tiposPago?.[0]?.activo ? (
                  <li>
                    <img
                      src={rpdata?.tiposPago?.[0]?.img}
                      width={"80%"}
                      alt="no found"
                    />
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-around md:flex-row items-center flex-col-reverse text-center text-white  py-4 bg2">
        <p className="text-[20px]">
          ©2022, Copy Right By {rpdata?.dbPrincipal?.name}. All Rights Reserved
        </p>
        <ul className="flex">
          {rpdata?.dbSocialMedia?.redes.map((item, index) => {
            return (
              <li key={index} className="mr-7">
                <a
                  href={item.url}
                  alt={item.name}
                  aria-label={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${item.icon}`} aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Footer4;

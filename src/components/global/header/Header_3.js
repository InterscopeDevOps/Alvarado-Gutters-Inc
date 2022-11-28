import React, { useContext, useState } from "react";
import { GlobalDataContext } from "../../../context/context";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu, GiConcreteBag } from "react-icons/gi";
import { RiGalleryLine } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineViewGrid, HiQuestionMarkCircle } from "react-icons/hi";
import { BsBookmarkStar } from "react-icons/bs";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { BiCabinet } from "react-icons/bi";
import ScrollProgressBar from "../ScrollProgressBar";
import { ButtonContent } from "../boton/ButtonContent";

function NavBar_1() {
  const { rpdata } = useContext(GlobalDataContext);
  const [offCanvas, setOffCanvas] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //Recorrer el array de los servicios
  const subitems = rpdata?.dbServices?.map((item) => {
    return {
      link: `/${item.name.replace(" ", "-").toLowerCase()}`,
      name: item.name,
    };
  });

  const Navigation = [
    {
      name: "Home",
      path: "/",
      icon: <HiOutlineViewGrid className="mx-auto text-[20px]" />,
    },
    {
      name: "About",
      path: "/about",
      icon: <HiQuestionMarkCircle className="mx-auto text-[20px]" />,
    },
    {
      name: "Services",
      path: "/services",
      icon: <BiCabinet className="mx-auto text-[20px]" />,
      child: rpdata?.autoGntLandingFromService,
      submenu: [...(subitems ? subitems : [])],
    },
    {
      name: "Gallery",
      path: "/gallery",
      icon: <RiGalleryLine className="mx-auto text-[20px]" />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <FaEnvelopeOpenText className="mx-auto text-[20px]" />,
    },
  ];

  // agregar la pestaña de reviews al array de dbMenu

  const el = {
    name: `Reviews`,
    path: `/reviews`,
    icon: <BsBookmarkStar className="mx-auto text-[20px]" />,
    child: false,
  }

  if(rpdata?.reviews?.activo && rpdata?.reviews?.isHomeOnly === false){
    const num = Navigation.length - 1
    Navigation.splice(num, 0, el)
}
  //  fin de agregar pestaña de reviews


  return (
    <div className="relative z-50 w-full">
      <header className="md:block hidden">
        <ScrollProgressBar />
        <div className="bg-white p-2 text-black">
          <div className="md:w-4/5 mx-auto md:flex justify-between items-center">
            <ul className="flex justify-center space-x-4 pb-2 md:pb-0">
              <li className="md:text-[17px] text-[13px]">
                {rpdata?.dbPrincipal?.location[0]?.address}
              </li>
              <li className="md:text-[17px] text-[13px]">
                {rpdata?.dbPrincipal?.workdays[0]?.day}
              </li>
              <li className="md:text-[17px] text-[13px]">
                {rpdata?.dbPrincipal?.workHours[0]?.hour}
              </li>
            </ul>
            <ul className="flex justify-center space-x-7">
              {rpdata?.dbSocialMedia?.redes.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="text-white"
                    rel="noopener noreferrer"
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-social-media bg-white duration-500 border-1  w-8 h-8 transform hover:-translate-y-1 text-[16px] rounded-full">
                        <i
                          className={`fab fa-${item.icon}`}
                          aria-hidden="true"
                        />
                      </button>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <nav className="w-4/5 mx-auto flex flex-wrap items-center justify-between py-2 md:py-2 md:px-8 shadow-2xl rounded-full p-4 relative bg-white">
            <div className="md:w-[50%] w-[65%]">
              <img
                src={rpdata?.dbPrincipal?.logo}
                className="md:w-[35%] sm:w-[100%] p-4 rounded-lg mb-[-60px] bg-white"
                alt="Not Found"
                loading="lazy"
              />
            </div>
            <div className="text-center flex justify-center">
              <button
                className="btn01 bg-white text-red md:hidden p-3"
                onClick={() => {
                  setOffCanvas(!offCanvas);
                }}
              >
                <GiHamburgerMenu />
              </button>
            </div>
            <div
              className="w-full md:flex md:items-center md:w-[50%] justify-end md:bg-transparent bg-white rounded-sm hidden"
              id="menu"
            >
              <ul className="pt-4 text-base text-black md:flex md:justify-between md:pt-0 p-4">
                {Navigation.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="md:py-2 md:px-4 py-2 px-4 rounded-sm text-black bg-list-menu"
                    >
                      <NavLink
                        to={item.child ? "" : item.path}
                        className="flex self-center items-center"
                        onClick={() => {
                          setSubMenu(!subMenu);
                        }}
                      >
                        {item.name}
                        {item.child ? <BsPlusLg className="ml-1 pl-1" /> : null}
                      </NavLink>

                      {item.child ? (
                        subMenu ? (
                          <ul className="bg-[#AE1515] rounded-sm w-[200px] text-white absolute mt-10">
                            {item.submenu.map((item, index) => {
                              return (
                                <li key={index} className="py-2 px-4">
                                  <Link to={item.link} exact>
                                    {item.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        ) : null
                      ) : null}
                    </li>
                  );
                })}
              </ul>
              <div>
                <ButtonContent btnStyle="three" />
              </div>
            </div>
          </nav>
        </div>
      </header>
      <nav>
        {offCanvas ? (
          <nav className="side-slide z-10">
            <button
              className="text-white relative top-[-30px] left-[210px] bg-red-600 py-[6px] px-[15px] rounded-full"
              onClick={() => {
                setOffCanvas(false);
              }}
            >
              x
            </button>
            <div>
              <img
                src={rpdata?.dbPrincipal?.logo}
                alt="Company Logo"
                className="w-[80%] mb-8"
              />
            </div>
            <ul className="bg-navbar-movil">
              {Navigation.slice(2, 3).map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={item.child ? "#!" : item.path}
                      className="flex self-center items-center"
                      onClick={() => {
                        setSubMenu(!subMenu);
                      }}
                    >
                      {item.name}
                      {item.child ? <BsPlusLg className="ml-[140px]" /> : null}
                    </Link>
                    {item.child ? (
                      <ul className="rounded-sm w-[200px] text-white relative ml-2 off-canvas">
                        {item.submenu.map((item, index) => {
                          return (
                            <li key={index} className="py-2 px-4" onClick={() => {
                              setOffCanvas(false);
                            }}>
                              <Link to={item.link} exact>
                                {item.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </nav>
      <header className="header md:hidden bg-white">
        <div className="wrapper">
          <div className="flex flex-col justify-center items-center">
            <NavLink to="/" className="logo">
              <img
                src={rpdata?.dbPrincipal?.logo}
                alt="Company Logo"
                className="w-[80%] mx-auto"
              />
            </NavLink>
            <div>
              {rpdata?.dbSocialMedia?.redes.map((item, index) => {
                return (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" key={index}>
                    <button className="bg-social-media bg-white duration-500 border-1  w-6 h-6 transform hover:-translate-y-1 text-[14px] rounded-full my-2 mx-1">
                      <i className={`fab fa-${item.icon}`} aria-hidden="true" />
                    </button>
                  </a>
                );
              })}
            </div>
          </div>
          <nav className="nav w-full fixed bottom-0 z-50 bg-navbar-movil px-3">
            <ul className="flex list-none justify-between">
              {Navigation.map((item, index) => {
                return (
                  <li className="w-[13%]" key={index} onClick={goToTop}>
                    <NavLink to={item.path} className="link">
                      <span className="link active text-center block text-[0.75em] no-underline py-[0.5em] px-0">
                        {item.child ? (
                          <button
                            onClick={() => {
                              setOffCanvas(!offCanvas);
                            }}
                          >
                            <GiConcreteBag className="mx-auto text-[21px]" />
                          </button>
                        ) : (
                          <span className="w-[1.5em] h-[1.5em] block mx-auto m-[5px]">
                            {item.icon}
                          </span>
                        )}
                        {item.name}
                      </span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

      </header>
    </div>
  );
}

export default NavBar_1;

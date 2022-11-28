import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalDataContext } from '../../../context/context'
import { FaCreditCard, FaMinus, FaRegEnvelope } from 'react-icons/fa'
import { FiClock, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { GoCalendar } from 'react-icons/go';

const FooterTwo = () => {

    const { rpdata } = useContext(GlobalDataContext)

    const yearsActual = new Date();

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

    // agregar la pestaña de Video al array de dbMenu

    const yt = {
        name: `Our Videos`,
        link: `/our-videos`,
        child: false,
    }

    if (rpdata?.ytGallery?.linkCanalYT) {
        const num = menu.length - 1
        menu.splice(num, 0, yt)
    }
    //  fin de agregar pestaña de Video

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
            behavior: "smooth",
        });
    };



    return (
        <footer className='bg-footer'>
            <div className='w-[90%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='bg-white border-t-[8px] borderColor mr-0 md:mr-5 -mt-10 p-5'>
                        <img
                            src={rpdata?.dbPrincipal?.logo}
                            alt='logo'
                        />
                        <p className="p-5 text-center">
                            {rpdata?.dbAbout?.[1].text.substring(0, 181) + "..."}
                        </p>
                        <ul className="flex justify-center items-center">
                            {rpdata?.dbSocialMedia?.redes.map((item, index) => {
                                return (
                                    <li key={index} className="mr-7">
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

                    {/* Services */}
                    <div className='grid grid-cols-1 md:grid-cols-2 pt-16 pl-5 pb-0'>
                        <div className='pb-5'>
                            <h4 className='titleColorFt'>Services</h4>
                            <ul className="pl-1 text-white">
                                {rpdata?.dbServices?.slice(0, 8).map((item, index) => {
                                    return (
                                        rpdata?.simpleWidgets?.[3]?.activo ?
                                            <li className="py-2" onClick={goToTop} key={index}>
                                                <a href={`tel:+1${rpdata?.dbPrincipal?.phones?.[0]?.phone}`} className="flex">
                                                    <FaMinus className="self-center" />
                                                    <span className="pl-2">{item.name}</span>
                                                </a>
                                            </li>
                                            :
                                            <li className="py-2" onClick={goToTop} key={index}>
                                                <Link to="/services" className="flex">
                                                    <FaMinus className="self-center" />
                                                    <span className="pl-2">{item.name}</span>
                                                </Link>
                                            </li>
                                    );
                                })}
                            </ul>
                        </div>
                        {/* Navegation */}
                        {
                            rpdata?.simpleWidgets?.[3]?.activo ?
                                <div className='pl-0 pb-5 md:pl-8'>
                                    <ul className="text-white pt-0 -mt-5 md:mt-0 md:pt-12">
                                        {rpdata?.dbServices?.slice(8).map((item, index) => {
                                            return (
                                                <li className="py-2" onClick={goToTop} key={index}>
                                                    <a href={`tel:+1${rpdata?.dbPrincipal?.phones?.[0]?.phone}`} className="flex">
                                                        <FaMinus className="self-center" />
                                                        <span className="pl-2">{item.name}</span>
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                :
                                <div className='pl-0 pb-5 md:pl-8'>
                                    <h4 className='titleColorFt'>Navigation</h4>
                                    <ul className="text-white">
                                        {menu.map((item, index) => {
                                            return (
                                                <li className="py-2 mx-3" onClick={goToTop} key={index}>
                                                    <Link to={item.link} className="flex">
                                                        <FaMinus className="self-center" />
                                                        <span className="pl-2">{item.name}</span>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                        }
                    </div>

                    {/* Contact */}
                    <div className='pt-0 pl-5 pb-5 md:pl-10 md:pt-16 '>
                        <h4 className='titleColorFt'>Contact</h4>
                        <ul className="pl-2 text-white">
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
                            {
                                rpdata?.dbPrincipal?.phones.map((phone, index) => {
                                    return (
                                        <a href={`tel:+1${phone.phone}`} key={index}>
                                            <li className="py-2 flex items-center">
                                                <FiPhoneCall fontSize={25} />
                                                <span className="pl-3">
                                                    {phone.phone} {phone.name}
                                                </span>
                                            </li>
                                        </a>
                                    )
                                })
                            }
                            <a href={`mailto:${rpdata?.dbPrincipal?.emails[0].email}`}>
                                <li className="py-2 flex items-center">
                                    <FaRegEnvelope fontSize={25} />
                                    <span className="pl-3">
                                        {rpdata?.dbPrincipal?.emails[0].email}
                                    </span>
                                </li>
                            </a>
                            {
                                rpdata?.dbPrincipal?.workdays.length > 1 ?
                                    <li className="py-2 flex items-center">
                                        <GoCalendar fontSize={25} />
                                        <div className="flex flex-col">
                                            <span className="pl-3">
                                                {rpdata?.dbPrincipal?.workdays?.[0].day}
                                            </span>
                                            <span className="pl-3">
                                                {rpdata?.dbPrincipal?.workHours?.[0].hour}
                                            </span>
                                        </div>
                                    </li>
                                    :
                                    <li className="py-2 flex items-center">
                                        <GoCalendar fontSize={25} />
                                        <span className="pl-3">
                                            {rpdata?.dbPrincipal?.workdays?.[0].day}
                                        </span>
                                    </li>
                            }
                            {
                                rpdata?.dbPrincipal?.workdays.length > 1 ?
                                    <li className="py-2 flex items-center">
                                        <FiClock fontSize={25} />
                                        <div className="flex flex-col">
                                            <span className="pl-3">
                                                {rpdata?.dbPrincipal?.workdays?.[1].day}
                                            </span>
                                            <span className="pl-3">
                                                {rpdata?.dbPrincipal?.workHours?.[1].hour}
                                            </span>
                                        </div>
                                    </li>
                                    :
                                    <li className="py-2 flex items-center">
                                        <FiClock fontSize={25} />
                                        <span className="pl-3">
                                            {" "}
                                            {rpdata?.dbPrincipal?.workHours?.[0].hour}
                                        </span>
                                    </li>
                            }

                            <li className="py-2 flex items-center">
                                <FaCreditCard />
                                <span className="pl-3 capitalize">
                                    {rpdata?.dbPrincipal?.paymentMethod}
                                </span>
                            </li>
                            {
                                rpdata?.tiposPago?.[0]?.activo ?
                                    <li>
                                        <img src={rpdata?.tiposPago?.[0]?.img} width={'30%'} alt='no found' />
                                    </li>
                                    : null
                            }
                        </ul>
                    </div>
                </div>
                <div className='w-full border-t-[1px] border-white mt-16'>
                    <p className='py-5 text-white text-center'>
                        ©{yearsActual.getFullYear()}, Copy Right By {rpdata?.dbPrincipal?.name} All Rights Reserved

                    </p>
                </div>
            </div>
        </footer>
    )
}

export default FooterTwo
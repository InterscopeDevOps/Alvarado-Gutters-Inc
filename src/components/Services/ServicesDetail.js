import React, { useContext } from "react";
import { FaCaretRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { GlobalDataContext } from "../../context/context";
import BaseLayout from "../global/BaseLayout";
import TransparentHeader from "../global/TransparentHeader";
import { ButtonContent } from '../global/boton/ButtonContent'
import { BiPhoneCall, BiCalendar } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'
import { FaRegClock } from 'react-icons/fa'
import SocialMedia from "../global/SocialMedia";
import CounterUp from '../global/CounterUp'
import Values from "../About/Values";
import Map from "../Contact/MapContent";

function ServicesDetail() {
    const { rpdata } = useContext(GlobalDataContext);
    const { id } = useParams();
    // console.log(id);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <BaseLayout PageName={`${rpdata?.dbPrincipal?.name}`}>
            {
                rpdata?.dbServices?.map((item, index) => {
                    if (item.name.replace(" ", "-").toLowerCase() === id) {
                        return (
                            <div key={index}>
                                <TransparentHeader
                                    // imagen aleatoria
                                    bgimg={
                                        rpdata?.gallery?.length > 1 ?
                                            rpdata?.gallery[Math.floor(Math.random() * rpdata?.gallery?.length)]
                                            : rpdata?.stock[Math.floor(Math.random() * rpdata?.stock?.length)]
                                    }
                                    headertitle={item.name}
                                    Subheader={'Our Services'}
                                />
                                <div className="w-[95%] md:w-[90%] mx-auto my-10 block md:flex md:gap-5">
                                    <div className="w-full md:w-9/12 shadow-lg shadow-neutral-800/30 p-5 md:p-10 mb-5">
                                        <img
                                            src={item.description[0].img}
                                            alt='no found'
                                            className="w-full object-cover h-auto md:h-[500px]"
                                        />
                                        <h3>
                                            {
                                                rpdata?.dbSlogan[Math.floor(Math.random() * rpdata?.dbSlogan?.length)].slogan
                                            }
                                        </h3>
                                        {
                                            item.description.map((item, index) => {
                                                return (
                                                    <p key={index}>{item.text} <br /> <br /></p>

                                                )
                                            })
                                        }
                                        <ButtonContent />
                                    </div>
                                    <div className="w-full md:w-1/4 shadow-lg bgBloqueServicesDetail p-5 md:p-5 mb-5 text-white">
                                        <div className="pb-5">
                                            <h4 className="text-center md:text-start"> Our Services</h4>
                                            <ul className="px-1 md:px-4">
                                                {
                                                    rpdata?.dbServices?.slice(0, 7).map((nam, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <Link
                                                                    to={`/${nam.name.replace(" ", "-").toLowerCase()}`}
                                                                    onClick={goToTop}
                                                                    className='flex items-center text-white pb-3'
                                                                >
                                                                    <FaCaretRight />
                                                                    <span className="pl-2">
                                                                        {nam.name}
                                                                    </span>
                                                                </Link>
                                                            </li>

                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="pb-5">
                                            <h4 className="text-center md:text-start">Contact</h4>
                                            <ul className="px-1 md:px-4">
                                                {
                                                    rpdata?.dbPrincipal?.phones.map((phone, index) => {
                                                        return (
                                                            <li key={index} className='flex items-center text-white pb-3'>
                                                                <a
                                                                    href={`tel:+1${phone.phone}`}
                                                                    className='flex items-center'
                                                                >
                                                                    <BiPhoneCall />
                                                                    <span className="pl-2">
                                                                        {phone.phone}
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        )
                                                    })
                                                }
                                                {
                                                    rpdata?.dbPrincipal?.emails.map((email, index) => {
                                                        return (
                                                            <li
                                                                key={index}
                                                                className='flex items-center text-white pb-3'
                                                            >
                                                                <a
                                                                    href={`mailto:${email.email}`}
                                                                    className='flex items-center'
                                                                >
                                                                    <MdOutlineEmail />
                                                                    <span className="pl-2">
                                                                        {email.email}
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="pb-5">
                                            <h4 className="text-center md:text-start">Opening Hours</h4>
                                            <ul className="px-1 md:px-4">
                                                <li
                                                    key={index}
                                                    className='flex items-center text-white pb-3'
                                                >
                                                    <BiCalendar />
                                                    <span className="pl-2">
                                                        {rpdata?.dbPrincipal?.workdays?.[0]?.day}
                                                    </span>
                                                </li>
                                                <li
                                                    key={index}
                                                    className='flex items-center text-white pb-3'
                                                >
                                                    <FaRegClock />
                                                    <span className="pl-2">
                                                        {rpdata?.dbPrincipal?.workHours?.[0]?.hour}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        {
                                            rpdata?.dbSocialMedia?.redes?.length > 1 ?
                                                <div className="pb-5 text-center md:text-start">
                                                    <h4 >Follow Us</h4>
                                                    <SocialMedia />
                                                </div>
                                                : null
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    } else return console.log('Servicio no encontrado')

                })
            }

            <CounterUp image={rpdata?.gallery?.[6]} />

            <div className="mt-[-110px]">
                <Values />
            </div>
            <Map />

        </BaseLayout>
    );
}

export default ServicesDetail;
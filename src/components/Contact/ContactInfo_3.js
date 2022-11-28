import React, { useContext } from 'react';
import { GlobalDataContext } from '../../context/context';
import Form from './Form';

import { ImPhone } from 'react-icons/im';
import { FiPhoneCall } from 'react-icons/fi';
import { BsClockFill } from 'react-icons/bs';
import { TbCalendarTime } from 'react-icons/tb';
import { FaMapMarkerAlt, FaCalendarAlt, FaRegMap } from 'react-icons/fa';

const ContactInfo_3 = () => {

    const { rpdata } = useContext(GlobalDataContext);


    return (
        <div className='w-full pb-10'>
            <div className='w-full block md:flex py-14 md:py-[100px]'>
                <div className='w-full md:w-[55%] pb-10 pr-5 md:pr-8 md:pb-0'>
                    <div
                        className='h-[350px] md:h-full bg-cover mb-10 md:mb-0 shadow-2xl shadow-[#3f3f3f]'
                        style={{ backgroundImage: `url("${rpdata?.gallery?.[3]}")`, borderRadius: '0 100% 100% 0' }}
                    ></div>
                </div>
                <div className='w-full md:w-[45%]'>
                    <div className='w-[80%] md:w-[70%] text-center md:text-left mx-auto md:ml-10'>
                        <h1>Contact US</h1>
                        <Form />
                    </div>
                </div>
            </div>

            <div className='bgBtnMenu relative h-[600px] md:h-[650px] lg:h-40 py-20'>
                <div className='w-[90%] mx-auto absolute -top-10 left-[5%] right-[5%]'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

                        <div className='bgBloque py-10 px-5 rounded-xl shadow-lg shadow-[#07070745] text-white'>
                            <div className='flex flex-col justify-center items-center'>
                                <FiPhoneCall className='text-[40px]' />
                                <h4 className='capitalize'>Phone</h4>
                            </div>
                            {

                                rpdata?.dbPrincipal?.phones.map((phone, index) => {
                                    return (
                                        <a
                                            key={index}
                                            href={`tel:+1${phone.phone}`}
                                            className='flex items-center justify-center'
                                        >
                                            <ImPhone fontSize={'18px'} />
                                            <h5 className='pl-4 text-[22px]'>
                                                {phone.phone}
                                                <span className='pl-2'>
                                                    {phone.name}
                                                </span>
                                            </h5>
                                        </a>
                                    )
                                })

                            }
                        </div>

                        <div className='bgBloque py-10 px-5 rounded-xl shadow-lg shadow-[#07070745] text-white'>
                            <div className='flex flex-col justify-center items-center'>
                                <FaRegMap className='text-[40px]' />
                                <h4 className='capitalize'>location</h4>
                            </div>
                            <div
                                className='flex items-center justify-center'
                            >
                                <FaMapMarkerAlt fontSize={'18px'} />
                                <h5 className='pl-4 text-[22px]'>
                                    {rpdata?.dbPrincipal?.location?.[0]?.address}
                                </h5>
                            </div>
                        </div>

                        <div className='bgBloque py-10 px-5 rounded-xl shadow-lg shadow-[#07070745] text-white'>
                            <div className='flex flex-col justify-center items-center'>
                                <TbCalendarTime className='text-[40px]' />
                                <h4 className='capitalize'>opening hours</h4>
                            </div>
                            <div className='flex items-center justify-center'>
                                <FaCalendarAlt fontSize={'18px'} />
                                <h5 className='pl-4 text-[22px]'>
                                    {rpdata?.dbPrincipal?.workdays?.[0]?.day}
                                </h5>
                            </div>
                            <div className='flex items-center justify-center'>
                                <BsClockFill fontSize={'18px'} />
                                <h5 className='pl-4 text-[22px]'>
                                    {rpdata?.dbPrincipal?.workHours?.[0]?.hour}
                                </h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactInfo_3
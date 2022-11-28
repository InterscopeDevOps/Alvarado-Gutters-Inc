import React, { useContext } from 'react'
import { AiFillClockCircle } from 'react-icons/ai'
import { FaCalendarAlt } from 'react-icons/fa'
import { FiNavigation, FiPhoneCall } from 'react-icons/fi'
import { GlobalDataContext } from '../../context/context'
import Form from './Form'


const ContactInfo2 = () => {

    const { rpdata } = useContext(GlobalDataContext)



    const contentInfo = [
        {
            title: rpdata?.dbPrincipal?.workdays.length > 1 ? rpdata?.dbPrincipal?.workdays?.[0].day : 'Workdays',
            subTitle: rpdata?.dbPrincipal?.workdays.length > 1 ? rpdata?.dbPrincipal?.workHours?.[0].hour : rpdata?.dbPrincipal?.workdays?.[0].day,
            icon: <FaCalendarAlt fontSize={45} color={'#313131'} />,
        },
        {
            title: rpdata?.dbPrincipal?.workdays.length > 1 ? rpdata?.dbPrincipal?.workdays?.[1].day : 'Work Hours',
            subTitle: rpdata?.dbPrincipal?.workdays.length > 1 ? rpdata?.dbPrincipal?.workHours?.[1].hour : rpdata?.dbPrincipal?.workHours?.[0].hour,
            icon: <AiFillClockCircle fontSize={45} color={'#313131'} />,
        },
    ]
    return (
        <>

            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 mt-10'>
                <div className='relative'>
                    <div className='absolute bgBloque w-[40%] h-[60%] -z-10'></div>
                    <div className='mt-10 ml-[30px] md:ml-[50px] px-5 md:px-[40px] pt-[80px] bg-white'>
                        <h2>Get In Touch!</h2>
                        <p className='pb-5'>{rpdata?.dbAbout?.[1].text}</p>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <div className='flex mb-5'>
                                <div className='self-center'>
                                    <FiNavigation fontSize={45} color={'#313131'} />
                                </div>
                                <div className='self-center px-3'>
                                    <p className='text-[20px] font-normal'>Location</p>
                                    <p className='bgIconContact font-medium'>{rpdata?.dbPrincipal?.location?.[0].address}</p>
                                </div>
                            </div>
                            <div className='flex mb-5'>
                                <div className='self-center'>
                                    <FiPhoneCall fontSize={45} color={'#313131'} />
                                </div>
                                <div className='self-center px-3'>
                                    <p className='text-[20px] font-normal'>Phone</p>
                                    <p className='bgIconContact font-medium'>
                                        {
                                            rpdata?.dbPrincipal?.phones.map((phone, index) => {
                                                return (
                                                    <a
                                                        key={index}
                                                        href={`tel:+1${phone.phone}`}
                                                    >
                                                        <p className='text-[20px] font-normal'>{phone.phone}</p>
                                                    </a>
                                                )
                                            })
                                        }
                                    </p>
                                </div>
                            </div>
                            {
                                contentInfo.map((items, index) => {
                                    return (
                                        <div key={index} className='flex mb-5'>
                                            <div className='self-center'>
                                                {items.icon}
                                            </div>

                                            <div className='self-center px-3'>
                                                <p className='text-[20px] font-normal capitalize'>{items.title}</p>
                                                <p className='bgIconContact font-medium capitalize'>{items.subTitle}</p>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="flex flex-col ">
                            {
                                rpdata?.dbSocialMedia?.redes?.length > 0 ?
                                    <div>
                                        <h4 className='py-5'>Follow Us</h4>
                                        <ul className="flex space-x-7">
                                            {
                                                rpdata?.dbSocialMedia?.redes.map((item, index) => {
                                                    return (
                                                        <li key={index} className="bgIconContact transition-all ease-in-out duration-300">
                                                            <a href={item.url} target="_blank" rel='noopener noreferrer'>
                                                                <i
                                                                    className={`fab fa-${item.icon} text-[20px]`}
                                                                    aria-hidden="true"
                                                                />
                                                            </a>
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <div className='mb-10'>
                    <div className='relative'>
                        <img
                            src={rpdata?.stock?.[12]}
                            alt='no found'
                            className='w-full h-[500px] object-cover pr-[30px] md:pr-[80px] mt-10 md:mt-[200px]'
                        />
                        <div className='absolute -bottom-14 -z-10 right-0 bgBloque w-[40%] h-full'></div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="flex w-[1100px] py-24 md:flex-row flex-col text-center md:text-start">
                    <div
                        className="md:w-[50%] w-full md:px-14 px-2 bg-center bg-cover "
                        style={{ backgroundImage: `url("${rpdata?.stock?.[6]}")` }}
                    ></div>
                    <div className="md:w-[50%] w-full md:px-14 px-2">
                        <h3>Send Us A Message</h3>
                        <Form />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInfo2
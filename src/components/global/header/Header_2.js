import React, { useContext } from 'react'
import { GlobalDataContext } from '../../../context/context'
import { ButtonContent } from '../boton/ButtonContent'
import { BiPhoneCall } from 'react-icons/bi'
import { BsCalendar4Range, BsClockHistory } from 'react-icons/bs'
import Navmenu from './NavMenu'



const HeaderTwo = () => {

    const { rpdata } = useContext(GlobalDataContext)

    return (
        <header className='absolute right-[3%] left-[3%] z-[15]'>
            <div className='flex'>
                <div className='w-full mr-0 md:w-[35%] lg:w-[25%] lg:mr-10'>
                    <img
                        src={rpdata?.dbPrincipal?.logo}
                        alt='logo'
                        loading='lazy'
                        className='w-[80%] mx-auto pt-3 pb-5'
                    />
                </div>

                <div className='hidden md:block w-[65%] lg:w-[75%] self-center'>
                    <div className='flex'>
                        <div className='w-[55%] lg:w-[75%]'>
                            <div className='grid grid-cols-1 lg:grid-cols-3'>

                                <div className='flex  text-white'>
                                    <div className='w-[15%] self-center mr-3'>
                                        <BiPhoneCall color='white' fontSize={35} />
                                    </div>
                                    <div>
                                        <a
                                            href={`tel:+1${rpdata?.dbPrincipal?.phones?.[0]?.phone}`}
                                        >
                                            <p className='-mb-3'>Phone Number</p>
                                            <h5 className='text-[21px]'>
                                                {rpdata?.dbPrincipal?.phones?.[0]?.phone}
                                            </h5>
                                        </a>
                                    </div>
                                </div>

                                <div className='hidden text-white  lg:flex'>
                                    <div className='w-[15%] self-center mr-3'>
                                        <BsCalendar4Range color='white' fontSize={35} />
                                    </div>
                                    <div>
                                        <p className='-mb-3'>Workdays</p>
                                        <h5 className='text-[21px]'>
                                            {rpdata?.dbPrincipal?.workdays?.[0]?.day}
                                        </h5>
                                    </div>
                                </div>

                                <div className='hidden lg:flex justify-end text-white'>
                                    <div className='w-[15%] self-center mr-3'>
                                        <BsClockHistory color='white' fontSize={35} />
                                    </div>
                                    <div>
                                        <p className='-mb-3'>Work Hours</p>
                                        <h5 className='text-[21px]'>
                                            {rpdata?.dbPrincipal?.workHours?.[0]?.hour}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[45%] lg:w-[25%] text-end border-l ml-0 lg:ml-7'>
                            <ButtonContent />
                        </div>
                    </div>
                </div>

            </div>
            {
                rpdata?.simpleWidgets?.[3]?.activo ?
                    null
                    :
                    <div className='bgBloque px-3 py-4'>
                        <div className='flex justify-between items-center'>
                            <nav>
                                <Navmenu />
                            </nav>
                            <ul className="flex justify-center space-x-7 pr-5">
                                {rpdata?.dbSocialMedia?.redes.map((item, index) => {
                                    return (
                                        <li key={index} className="text-white">
                                            <a href={item.url} target="_blank" rel='noopener noreferrer'>
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
            }
        </header>
    )
}

export default HeaderTwo
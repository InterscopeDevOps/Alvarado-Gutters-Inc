import React, { useContext } from 'react'
import { GlobalDataContext } from '../../../context/context';
import { Link } from 'react-router-dom'
import Navmenu from './NavMenu';


const HeaderOne = () => {
    const { rpdata } = useContext(GlobalDataContext);

    return (
        <div>
            <div className="bgHeaderTop p-2">
                <div className="md:w-4/5 mx-auto md:flex justify-between items-center">
                    <ul className="flex justify-center space-x-4 pb-2 md:pb-0">
                        <li className="text-white md:text-[17px] text-[13px] hidden md:block ">
                            <span className="border-r-[1px] border-white pr-3">

                                {rpdata?.dbPrincipal?.location[0]?.address}
                            </span>
                        </li>
                        <li className="text-white md:text-[17px] text-[13px] ">
                            <span className="border-r-[1px] border-white pr-3">

                                {rpdata?.dbPrincipal?.workdays[0]?.day}
                            </span>
                        </li>
                        <li className="text-white md:text-[17px] text-[13px] ">
                            <span className="pr-3">

                                {rpdata?.dbPrincipal?.workHours[0]?.hour}
                            </span>
                        </li>
                    </ul>
                    <ul className="flex justify-center space-x-7">
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
            {
                rpdata?.simpleWidgets?.[3]?.activo ?
                    <div className='absolute right-[5%] left-[5%] z-50 pt-10  flex justify-center items-center'>
                        {/* logo */}
                        <div className='w-[70%] md:w-[20%] pr-3 md:pr-0'>
                            <Link to={'/'}>
                                <img
                                    src={`${rpdata?.dbPrincipal?.logo}`}
                                    alt='no found'
                                    className='w-full'
                                />
                            </Link>
                        </div>
                    </div>
                    :
                    <div className='absolute right-[5%] left-[5%] z-50 pt-3  flex justify-between items-center'>
                        {/* logo */}
                        <div className='w-[70%] md:w-[20%] pr-3 md:pr-0'>
                            <Link to={'/'}>
                                <img
                                    src={`${rpdata?.dbPrincipal?.logo}`}
                                    alt='no found'
                                    className='w-full'
                                />
                            </Link>
                        </div>
                        {/* nav menu */}
                        <nav className='w-[20%] md:w-[80%] flex justify-end'>
                            <div className='relative'>
                                <Navmenu />
                            </div>
                        </nav>
                    </div>
            }
        </div>
    )
}

export default HeaderOne
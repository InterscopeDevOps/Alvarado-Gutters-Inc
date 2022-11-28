import React, { useContext } from 'react'
import { VscDebugBreakpointData } from 'react-icons/vsc';
import { GlobalDataContext } from '../../context/context'
import { ButtonContent } from '../global/boton/ButtonContent';

import imgDefault from '../../assets/image/placeholder.png'


const BlockTwo = ({ title, text, listsAbout, listsServices, image, sloganPrincipal }) => {
    const { rpdata } = useContext(GlobalDataContext);

    return (
        <div className='bgContent-2 pt-28 pb-40 md:py-40'>
            <div className='w-[90%] md:w-4/5 mx-auto block lg:flex'>
                <div className='w-full flex justify-center lg:block lg:w-[30%]'>
                    <div
                        className='relative w-full h-[400px] md:w-[500px] md:h-[500px] overflow-hidden rounded-[50%]'
                        style={{
                            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
                        }}
                    >
                        <img
                            src={image ? image : imgDefault}
                            alt='no found'
                            loading='lazy'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
                <div className='w-full lg:w-[70%] -my-20 bg-white rounded-lg'>
                    <div className='text-center lg:text-start px-5 pt-32 pb-16 md:px-20 md:pt-32 lg:pl-[25%] lg:pr-[15%] lg:py-20'>
                        {
                            sloganPrincipal ?
                                rpdata?.dbPrincipal?.licensed ?
                                    <h2 className='pb-3 capitalize'>
                                        {rpdata?.dbPrincipal?.licensed}
                                    </h2>
                                    : <h3 className='pb-10 capitalize'>
                                        {
                                            rpdata?.dbPrincipal?.exprYears ?
                                                `we have ${rpdata?.dbPrincipal?.exprYears} years of experience`
                                                : 'we have many years of experience'
                                        }
                                    </h3>
                                :
                                <h2 className='pb-10 capitalize'>
                                    {
                                        title ? title :
                                            <span className='lowercase text-[18px]'>
                                                {`default title={'frase'}`} o
                                                {` agregar licencia o años de experienceias sloganPrincipal={true}`}
                                            </span>
                                    }
                                </h2>
                        }
                        <p className='pb-5'>
                            {
                                text ? text :
                                    <span>{`para agregar el texto -> text={'description'}`}
                                        <br />{'para agregar lista de about -> listsAbout={true}'}
                                        <br />{'para agregar lista de servicios -> listsServices={true}'}
                                    </span>
                            }
                        </p>
                        {
                            listsAbout ?
                                <ul className='grid grid-cols-1 md:grid-cols-2 pb-5'>
                                    {
                                        rpdata?.dbAbout?.[0].list.length > 1 ?
                                            rpdata?.dbAbout?.[0].list.map((item, index) => {
                                                return (

                                                    <li key={index} className="py-2 flex items-center">
                                                        <VscDebugBreakpointData />
                                                        <span className="pl-2">{item}</span>
                                                    </li>
                                                )
                                            })
                                            : null
                                    }
                                </ul>
                                : null
                        }
                        {
                            listsServices ?
                                <ul className="grid grid-cols-1 md:grid-cols-2 pb-5">
                                    {rpdata?.dbServices?.slice(0, 6).map((item, index) => {
                                        return (
                                            <li key={index} className="py-1 flex items-center">
                                                <VscDebugBreakpointData />
                                                <span>{item.name}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                                : null
                        }
                        <div>
                            <ButtonContent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlockTwo
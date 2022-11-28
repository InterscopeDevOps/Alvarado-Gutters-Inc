import React, { useContext } from 'react';
import { VscDebugBreakpointData } from 'react-icons/vsc';
import { GlobalDataContext } from '../../context/context';
import { ButtonContent } from '../global/boton/ButtonContent';

import imgDefault from '../../assets/image/placeholder.png'


const BlockOne = ({ title, text, listsAbout, listsServices, image, sloganPrincipal }) => {
    const { rpdata } = useContext(GlobalDataContext);

    return (
        <div className='bg-[#efefef] py-[150px]'>
            <div className='w-[95%] md:w-4/5 mx-auto'>
                <div className='border-[15px] borderColor flex flex-col-reverse md:flex-row px-5 md:px-10'>
                    <div className='w-full md:w-1/2 flex bg-white mr-0 -mb-20 mt-5 md:mr-2 md:-my-20 px-10 py-20 text-center md:text-start'>
                        <div className='flex flex-col justify-center '>
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
                                    <h2 className='text-[25px] md:text-[35px] pb-3 capitalize'>
                                        {
                                            title ? title :
                                                <span className='lowercase text-[18px]'>
                                                    {`default title={'frase'}`} o
                                                    {` agregar licencia o años de experienceias sloganPrincipal={true}`}
                                                </span>
                                        }
                                    </h2>
                            }
                            <p className='pb-3'>
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
                    <div className='w-full md:w-1/2 ml-0 -mt-20 mb-0 md:ml-2 md:-my-20'>
                        <img
                            src={image ? image : imgDefault}
                            alt='no found'
                            loading='lazy'
                            className='w-full h-[300px] md:h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BlockOne;
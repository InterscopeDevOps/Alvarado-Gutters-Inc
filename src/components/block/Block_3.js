import React, { useContext } from 'react'
import { GlobalDataContext } from '../../context/context'
import imgDots from '../../assets/image/dots.png'
import { ButtonContent } from '../global/boton/ButtonContent';
import { VscDebugBreakpointData } from 'react-icons/vsc';


import imgDefault from '../../assets/image/placeholder.png'


const BlockThree = ({ title, text, listsAbout, listsServices, image, sloganPrincipal }) => {
    const { rpdata } = useContext(GlobalDataContext);

    return (
        <div className='bgContent-3 w-full py-36'>
            <div className='w-4/5 mx-auto block lg:flex '>
                <div className='w-full lg:w-[60%] bg-white pt-20 pb-[150px] lg:py-10 px-5 md:pl-14 md:pr-40 flex flex-col justify-center text-center md:text-start'>
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
                            <h2 className='pb-5 capitalize'>
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
                <div className='w-[80%] lg:w-[40%] bgBloque ml-auto lg:ml-0 -my-20 lg:-my-10 h-[400px] md:h-[100vh] pt-[80px]'>
                    <div className='relative '>
                        <img
                            src={image ? image : imgDefault}
                            alt='no found'
                            loading='lazy'
                            className='relative z-10 w-[90%] h-[300px] md:h-[70vh] -ml-10 object-cover'
                        />
                        <img
                            src={imgDots}
                            alt='no found'
                            loading='lazy'
                            className='absolute -bottom-10 -left-20 w-[80%] h-[90%]'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlockThree;
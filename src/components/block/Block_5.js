import React, { useContext } from 'react'
import { VscDebugBreakpointData } from 'react-icons/vsc';
import { GlobalDataContext } from '../../context/context'
import { ButtonContent } from '../global/boton/ButtonContent';

import imgDefault from '../../assets/image/placeholder.png'


const Block = ({ title, text, listsAbout, listsServices, image, sloganPrincipal }) => {
    const { rpdata } = useContext(GlobalDataContext);

    return (
        <div className='bgContent-2 pt-28 pb-40 md:      after:py-40'>
            <div className='w-[90%] md:w-[80%] mx-auto block lg:flex'>
                <div className='w-full flex justify-center lg:block lg:w-[60%] z-10'>
                    <div className=' w-[350px] h-[350px] lg:w-full lg:h-full bg-center bg-cover' style={{ backgroundImage: `url("${image ? image : imgDefault}")` }}></div>
                </div>
                <div className='absolute bgBloque mt-[105%] -ml-8 lg:-mt-12 lg:right-[120px] w-[80px] h-[80px] lg:w-[200px] lg:h-[200px] rounded-full z-[2]'></div>
                <div className='absolute borderColor border-[8px] lg:border-[15px] -mt-[8%] ml-[76%] lg:mt-[34%] lg:-ml-[6%] w-[80px] h-[80px] rounded-full lg:w-[200px] lg:h-[200px] '></div>
                <div className='w-full lg:w-[40%] bg-white rounded-lg lg:mt-10 lg:mb-10 lg:p-6 lg:-ml-12 z-20'>
                    <div className='text-center lg:text-start px-6 pt-5 pb-4 lg:pt-12 lg:pb-12 '>
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
                                <h3 className='pb-2 capitalize'>
                                    {
                                        title ? title :
                                            <span className='lowercase text-[18px]'>
                                                {`default title={'frase'}`} o
                                                {` agregar licencia o años de experienceias sloganPrincipal={true}`}
                                            </span>
                                    }
                                </h3>
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

export default Block
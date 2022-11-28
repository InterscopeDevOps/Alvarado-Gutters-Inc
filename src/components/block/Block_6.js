import React, { useContext } from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';
import { GlobalDataContext } from '../../context/context';
import { ButtonContent } from '../global/boton/ButtonContent';

import imgDefault from '../../assets/image/placeholder.png'


const Block = ({ title, text, listsAbout, listsServices, image1, image2, image3, image4, sloganPrincipal }) => {
    const { rpdata } = useContext(GlobalDataContext);

    return (
        <div className='bg-[#efefef] py-[150px]'>
            <div className='w-[95%] md:w-[90%] mx-auto'>
                <div className='border-[10px] borderColor flex flex-col-reverse md:flex-row px-1 md:px-10'>
                    <div className='w-full md:w-1/2 bg-white mr-0 -mb-20 mt-5 md:mr-2 md:-my-20 px-10 py-12 flex flex-col justify-center text-center md:text-start'>
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
                                <h2 className='pb-3 capitalize'>
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
                                                        <BsArrowReturnRight />
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
                                                <BsArrowReturnRight />
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
                    <div className='w-full h-auto flex flex-wrap md:w-1/2 ml-0 -mt-20 mb-0 md:ml-2 md:-my-20'>
                        <div className='rounded-2xl  lg:mr-[5px] lg:mb-2 border-white border-[5px] shadow-sm w-[48%] h-[150px] md:h-[300px] bg-center bg-cover' style={{ backgroundImage: `url("${image1 ? image1 : imgDefault}")` }} ></div>
                        <div className='rounded-2xl lg:-mt-5 border-white border-[5px] shadow-sm w-[48%] h-[150px] md:h-[300px] bg-center bg-cover' style={{ backgroundImage: `url("${image2 ? image2 : imgDefault}")` }} ></div>
                        <div className='rounded-2xl lg:mr-[5px] lg:mt-2 border-white border-[5px] shadow-sm w-[48%] h-[150px] md:h-[300px] bg-center bg-cover' style={{ backgroundImage: `url("${image3 ? image3 : imgDefault}")` }} ></div>
                        <div className='rounded-2xl lg:-mt-4  border-white border-[5px] shadow-sm w-[48%] h-[150px] md:h-[300px] bg-center bg-cover' style={{ backgroundImage: `url("${image4 ? image4 : imgDefault}")` }}></div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Block;
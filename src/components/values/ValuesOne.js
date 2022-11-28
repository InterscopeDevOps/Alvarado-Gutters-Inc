import React, { useContext } from 'react'
import { GlobalDataContext } from '../../context/context'
import { GoPrimitiveDot } from 'react-icons/go'



const ValuesOne = ({image}) => {
    const { rpdata } = useContext(GlobalDataContext)


    return (
        <div
            className='py-[150px] bg-cover bg-no-repeat bg-fixed bg-center relative before:bg-zinc-900/50 before:absolute before:w-full before:h-full before:top-0'
            style={{ backgroundImage: `url("${image ? image : rpdata?.stock?.[0]}")` }}
        >
            <div className='relative w-4/5 mx-auto flex justify-end'>
                <div className='bg-white w-full lg:w-1/2 border-l-[15px] borderColor px-5 py-10'>
                    {
                        rpdata?.dbValues?.map((items, index) => {
                            return (
                                <div key={index} className='pb-5'>
                                    <h4 className='flex items-center'>
                                        <GoPrimitiveDot className='dotsColor' fontSize={35} />
                                        <span>{items.title} </span>
                                    </h4>
                                    <p className='pl-9'>{items.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ValuesOne
import React, { useContext } from 'react'
import { GlobalDataContext } from '../../context/context'

const Paletacolor = () => {

    const { rpdata } = useContext(GlobalDataContext);

    return (
        <div className='w-4/5 mx-auto mt-0 md:mt-10 py-10 border-t-[10px] borderColor'>
            <h2 className='capitalize text-center'>
                {
                    rpdata?.labels?.general?.titleBranding ?
                        rpdata?.labels?.general?.titleBranding
                        :
                        'Choose your favorite color through the following color palettes'
                }
            </h2>
            <div className='flex flex-wrap justify-center items-center gap-8 py-10'>
                {
                    rpdata?.brandingExtra?.map((item, index) => {
                        return (
                            <a href={item.link} target="_blank" rel="noreferrer" key={index}>
                                <img src={item.img} alt='no found' />
                            </a>
                        )
                    })
                }


            </div>
        </div>

    )
}


export default Paletacolor;
import React, {useContext} from 'react'
import { GlobalDataContext } from "../../context/context";
import CountUp from 'react-countup';



const CounterUp = ({image}) => {

    const { rpdata } = useContext(GlobalDataContext);


    const counterInfo = [
        {
            title: rpdata?.dbPrincipal?.exprYears ? 'Years Of Experience' : 'Best Service',
            number: rpdata?.dbPrincipal?.exprYears ? rpdata?.dbPrincipal?.exprYears : '100',
            simbolo: rpdata?.dbPrincipal?.exprYears ? '+' : '%',
        },
        {
            title: 'Professionals',
            number: 100,
            simbolo: '%',
        },
        {
            title: rpdata?.dbPrincipal?.miles ? `Miles Around ${rpdata?.dbPrincipal?.location[0]?.address}` : 'Cost-Effectiveness' ,
            number: rpdata?.dbPrincipal?.miles ? rpdata?.dbPrincipal?.miles : '100',
            simbolo: rpdata?.dbPrincipal?.miles ? '+' : '%',
        },
        {
            title: 'On Time',
            number: 100,
            simbolo: '%',
        },
    ]

    return (
        <div className='bgCountent' style={{backgroundImage: `url("${image ? image : rpdata?.stock?.[1]}")` }}>
            <h2 className='text-center py-4 relative text-white'>{rpdata?.dbSlogan?.[4].slogan}</h2>
            <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    counterInfo.map((items, index) => {
                        const colorContent = index % 2 === 0 ? 'bgColor1' : 'bgColor2'
                        return (
                            <div key={index} className={`text-center p-3 relative ${colorContent}`}>
                                <div>
                                    <CountUp
                                        end={items.number}
                                        duration={5}
                                        className='text-white text-[69px]'
                                    />
                                    <span className='text-white text-[69px]'>{items.simbolo}</span>
                                </div>
                                <p className='text-white text-[18px]'>{items.title}</p>
                            </div>
                        )
                    })
                }
                <div>

                </div>
            </div>
        </div>
    )
}
export default CounterUp

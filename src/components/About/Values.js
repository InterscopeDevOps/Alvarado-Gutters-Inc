import React, { useContext } from 'react';
import { GlobalDataContext } from "../../context/context";
import { FiTarget } from 'react-icons/fi'
import { MdRoofing } from 'react-icons/md'
import { FaHandshake } from 'react-icons/fa'


function Values() {
  const { rpdata } = useContext(GlobalDataContext);

  const valuesData = [
    {
      title: rpdata?.dbValues?.[0].title,
      description: rpdata?.dbValues?.[0].description,
      icon: <FiTarget fontSize={70} className='titleColorFt' />,
    },
    {
      title: rpdata?.dbValues?.[1].title,
      description: rpdata?.dbValues?.[1].description,
      icon: <MdRoofing fontSize={70} className='titleColorFt' />,
    },
    {
      title: rpdata?.dbValues?.[2].title,
      description: rpdata?.dbValues?.[2].description,
      icon: <FaHandshake fontSize={70} className='titleColorFt' />,
    },
  ]


  return (
    <>
      <div className="container mx-auto md:w-full py-10 flex md:flex-row flex-col justify-center items-center">
        {
          valuesData.map((items, index) => {
            return (
              <div key={index} className="bg-white w-80 h-[380px] md:text-start text-center m-4 p-5 shadow-lg cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out">
                <div className="flex justify-center">
                  {items.icon}
                </div>
                <div className="p-4 ">
                  <h2 className="text-2xl text-center uppercase">{items.title}</h2>
                  <p className='text-center pb-3'>
                    {items.description}
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default Values;

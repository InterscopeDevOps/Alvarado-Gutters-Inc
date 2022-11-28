import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { FiTarget } from "react-icons/fi";
import { MdOutlineVisibility } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

function Values_2() {
  const { rpdata } = useContext(GlobalDataContext);

  const valuesData = [
    {
      title: rpdata?.dbValues?.[1].title,
      description: rpdata?.dbValues?.[0].description,
      icon: (
        <FiTarget fontSize={70} className="bg-2 text-white rounded-full p-4" />
      ),
    },
    {
      title: rpdata?.dbValues?.[2].title,
      description: rpdata?.dbValues?.[1].description,
      icon: (
        <MdOutlineVisibility
          fontSize={70}
          className="bg-white color-2 rounded-full p-4 border-[2px] border-gray-500"
        />
      ),
    },
    {
      title: rpdata?.dbValues?.[2].title,
      description: rpdata?.dbValues?.[2].description,
      icon: (
        <FaHandshake
          fontSize={70}
          className="bg-2 text-white rounded-full p-4"
        />
      ),
    },
  ];

  return (
    <>
      <div className="md:w-2/3 w-full md:text-start text-center  md:mx-auto mt-6">
        <h5>{rpdata?.dbPrincipal?.name}</h5>
        <h4 className="color-2">{rpdata?.dbSlogan?.[2].slogan}</h4>
      </div>
      <div className="md:w-4/5 md:mx-auto w-full flex flex-col md:flex-row md:mb-0 mb-10">
        <div className="md:w-[60%]">
          {valuesData.map((items, index) => {
            return (
              <div
                key={index}
                className="bg-white w-4/5 mx-auto text-start flex md:flex-row flex-col my-6"
              >
                <div className="flex flex-col justify-center items-center md:p-4 md:text-center text-center md:w-[30%]">
                  {items.icon}
                  <span className="capitalize">{items.title}</span>
                </div>
                <div className="p-4 border-l-[1px] border-gray-500 md:w-[70%]">
                  <p className="md:text-start">{items.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:w-[40%] w-full md:h-auto h-[300px]">
          <div
            className="w-full md:h-[500px] h-[350px] bg-cover bg-center m-1 rounded-md"
            style={{ backgroundImage: `url("${rpdata?.stock?.[3]}")` }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Values_2;

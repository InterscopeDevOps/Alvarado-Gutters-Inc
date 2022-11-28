import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import SocialMedia from "../global/SocialMedia";
import Form from "./Form";
import { FiNavigation, FiPhoneCall } from 'react-icons/fi';
import { AiFillClockCircle } from 'react-icons/ai'
import { FaCalendarAlt } from 'react-icons/fa'


function ContactInfo() {
  const { rpdata } = useContext(GlobalDataContext);

  const contentInfo = [
    {
      title: 'Location',
      subTitle: rpdata?.dbPrincipal?.location?.[0].address,
      icon: <FiNavigation fontSize={45} color={'#1d1d1d'} />,
      links: '',
    },
    {
      title: 'Phone',
      subTitle: rpdata?.dbPrincipal?.phones?.[0].phone,
      icon: <FiPhoneCall fontSize={45} color={'#1d1d1d'} />,
      links: `tel:+1${rpdata?.dbPrincipal?.phones?.[0].phone}`,
    },
    {
      title: 'Workdays',
      subTitle: rpdata?.dbPrincipal?.workdays?.[0].day,
      icon: <FaCalendarAlt fontSize={45} color={'#1d1d1d'} />,
      links: '',
    },
    {
      title: 'Work Hours',
      subTitle: rpdata?.dbPrincipal?.workHours?.[0].hour,
      icon: <AiFillClockCircle fontSize={45} color={'#1d1d1d'} />,
      links: '',
    },
  ]

  return (
    <>
      <div className="w-full md:px-14 pt-8">
        <h2 className="text-center">Get In Touch!</h2>
        <div className="w-4/5 mx-auto pb-8 grid md:grid-cols-4 grid-cols-1 gap-5" >
          {
            contentInfo.map((items, index) => {
              return (
                <div className="px-5 py-8 shadow-lg" key={index}>
                  <div className="flex">
                    <div className="bg-[#1d1d1d] h-[1px] w-[20%] self-center mr-3"></div>
                    <h5>{items.title}</h5>
                  </div>
                  {
                    items.links.length > 1 ?
                      <a href={`${items.links}`}>
                        <div className="flex space-x-4">
                          {items.icon}
                          <h6>{items.subTitle}</h6>
                        </div>
                      </a>
                      :
                      <div className="flex space-x-4">
                        {items.icon}
                        <h6>{items.subTitle}</h6>
                      </div>
                  }
                </div>
              )
            })
          }
        </div>
        <div className="flex flex-col justify-center items-center">
          {
            rpdata?.dbSocialMedia?.redes?.[0].length > 1 ?
              <h2>Follow Us</h2>
              :null
        }
          <SocialMedia />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex w-[1100px] py-24 md:flex-row flex-col text-center md:text-start">
          <div
            className="
              md:w-[50%]
              w-full
              md:px-14
              px-2
              bg-center
              bg-cover
            "
            style={{ backgroundImage: `url("${rpdata?.stock?.[4]}")` }}
          ></div>
          <div className="md:w-[50%] w-full md:px-14 px-2">
            <h3>Send Us A Message</h3>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;

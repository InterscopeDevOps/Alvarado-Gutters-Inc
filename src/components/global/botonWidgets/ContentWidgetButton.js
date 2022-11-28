import React, { useContext, useState } from "react";
import { GlobalDataContext } from "../../../context/context";
import { FaWhatsapp, FaChartBar } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { BsCloudSun, BsTelephoneForward } from "react-icons/bs";
import Whatsapp from "./Whatsapp";
import VisorCounter from "./VisorCounter";
import Weather from "./Weather";
import ClickToCall from "./ClickToCall";

function WidgetButton() {
  const [active, setActive] = useState(false);
  const [widget, setWidget] = useState(true);
  const [visor, setVisor] = useState(false);
  const [weather, setWeather] = useState(false);
  const [clicktocall, SetClickToCall] = useState(false);

  const { rpdata } = useContext(GlobalDataContext);

  const handleButton = () => {
    setActive(false);
    setVisor(false);
    setWeather(false);
    SetClickToCall(false);
    setWidget(!widget);
  };

  const handleVisor = () => {
    setActive(false);
    setWeather(false);
    SetClickToCall(false);
    setVisor(!visor);
  };

  const handleWeather = () => {
    setActive(false);
    SetClickToCall(false);
    setVisor(false);
    setWeather(!weather);
  };

  const handleWhatsapp = () => {
    setActive(!active);
    SetClickToCall(false);
    setVisor(false);
    setWeather(false);
  };

  const handleClickToCall = () => {
    SetClickToCall(!clicktocall);
    setActive(false);
    setVisor(false);
    setWeather(false);
  };

  return (
    <div>
      <div className="container-floating-widget">
        {widget ? (
          <div className="fixed bottom-[150px] md:bottom-[95px] right-[40px] z-10 flex flex-col justify-between">
            {rpdata?.simpleWidgets?.map((item) => {
              if (item.val === "WhatsappBtn" && item.activo === true) {
                return (
                  <div className="relative">
                    <div
                      className="nd1 nds my-1"
                      onClick={() => handleWhatsapp()}
                    >
                      <FaWhatsapp className="item-widget text-white" />
                    </div>
                    {<Whatsapp stateChat={active} closeBtn={() => setActive(false)} />}
                  </div>
                );
              }
              if (item.val === "VisitsCounter" && item.activo === true) {
                return (
                  <div className="relative">
                    <div className="nd2 nds my-1" onClick={() => handleVisor()}>
                      <FaChartBar className="item-widget text-white" />
                    </div>
                    {visor ? <VisorCounter /> : null}
                  </div>
                );
              }
              if (item.val === "CallUsNow" && item.activo === true) {
                return (
                  <div className="relative">
                    <div
                      className="nd4 nds my-1"
                      onClick={() => handleClickToCall()}
                    >
                      <BsTelephoneForward className="item-widget text-white" />
                    </div>
                    {clicktocall ? <ClickToCall /> : null}
                  </div>
                );
              }
              if (item.val === "Wheather" && item.activo === true) {
                return (
                  <div className="relative">
                    <div className="nd3 nds my-1 relative">
                      <BsCloudSun
                        className="item-widget text-white"
                        onClick={() => handleWeather()}
                      />
                    </div>
                    {weather ? <Weather /> : null}
                  </div>
                );
              }
              return null;
            })}
          </div>
        ) : null}
        <div className="floating-button-widgets text-white">
          <BiCategoryAlt
            className="principal-btn text-white"
            onClick={() => handleButton()}
          />
          <BiCategoryAlt
            className="edit text-white"
            onClick={() => handleButton()}
          />
        </div>
      </div>
      
    </div>
  );
}

export default WidgetButton;

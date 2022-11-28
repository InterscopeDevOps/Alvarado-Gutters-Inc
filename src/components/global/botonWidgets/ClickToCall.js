
import React, { useContext, useState, useEffect } from "react";
import { GlobalDataContext } from "../../../context/context";
import { BsTelephoneOutbound } from "react-icons/bs";
import LoadingWidget from "./LoadingWidget";

function ClickToCall() {
  const [isLoading, setIsLoading] = useState(true);
  const { rpdata } = useContext(GlobalDataContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="absolute top-2 right-10">
        <LoadingWidget />
      </div>
    );
  }

  return (
    <div className="absolute bottom-0 right-12">
      <span class="glass-button-content w-[200px]">
        <div className="glass-button flex flex-row self-center align-middle justify-center items-center">
          <BsTelephoneOutbound className="mr-2"/>
          <a href={`tel:+1${rpdata?.dbPrincipal?.phones?.[0].phone}`}>
            {rpdata?.dbPrincipal?.phones?.[0].phone}
          </a>
        </div>
      </span>
    </div>

  );
}

export default ClickToCall;

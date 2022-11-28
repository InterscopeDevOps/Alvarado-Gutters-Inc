import React, { useContext, useState, useEffect } from "react";
import classes from "../botonWhatsapp/btnwhatsapp.module.css";
import { GlobalDataContext } from "../../../context/context";

function Message() {
  const [isLoading, setIsLoading] = useState(true);
  const { rpdata } = useContext(GlobalDataContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="relative">
        <div className={`${classes.loader}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className={`${classes.chat_box_message}`}>
        <span className={`${classes.text_name_body}`}>
          {rpdata?.dbPrincipal?.name}
        </span>{" "}
        <br />
        <span>
          Hi there 👋<br></br>
          How can we help you?
        </span>
      </div>
    </div>
  );
}

export default Message;

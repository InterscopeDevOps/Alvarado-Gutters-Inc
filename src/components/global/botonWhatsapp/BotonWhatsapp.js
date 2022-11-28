import React, { Fragment, useContext, useState } from "react";
import classes from "./btnwhatsapp.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

import { GlobalDataContext } from "../../../context/context";

function BotonWhatsapp(props) {
  const { rpdata } = useContext(GlobalDataContext);
  const [active, setActive] = useState(false);
  const [sendInput, setSendInput] = useState("");

  const sendWhatsapp = () => {
    const relmsg = sendInput.replace(/ /g, "%20");
    const phone = rpdata?.dbPrincipal?.phones[0].phone
      .replace("-", "")
      .replace("-", "");

    window.open(`https://wa.me/1${phone}?text=` + relmsg, "_blank");
    setSendInput("");
    setActive(false);
  };

  return (
    <Fragment>
      <div className={classes.nav_bottom}>
        <div
          className={`${classes.popup_whatsapp} ${classes.fadeIn} ${
            active ? classes.is_active_whatsapp_popup : ""
          }`}
        >
          <div className={`${classes.content_whatsapp_header} ${classes._top}`}>
            <div className={`${classes.self_content}`}>
              <div className={`${classes.online}`}></div>
              <img
                src={rpdata?.dbPrincipal?.favicon}
                width="80"
                alt="logo"
                className={`${classes.before_img}`}
              />

              <div className="flex flex-col">
                <span className="text-white text_name_company">
                  {rpdata?.dbPrincipal?.name}
                </span>
                <span className={`${classes.text_typically}`}>
                  Typically replies in minutes
                </span>
              </div>
              <div className={classes.contentClose}>
                <button
                  type="button"
                  className={`${classes.closePopup} bg-black `}
                  onClick={() => setActive(!active)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
          <div className={`${classes.chat_box_body}`}>
            {/* <div className={`${classes.loader}`}>
              <span></span>
              <span></span>
              <span></span>
            </div> */}
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
          <div className={`${classes.content_whatsapp} ${classes._bottom}`}>
            <input
              className={classes.whats_input}
              type="text"
              placeholder="Send Message..."
              value={sendInput}
              onChange={(e) => setSendInput(e.target.value)}
            />

            <button
              className={classes.send_msPopup}
              id="send_btn"
              type="button"
              onClick={() => sendWhatsapp()}
            >
              <IoMdSend className={`${classes.icon_font_color__black}`} />
            </button>
          </div>
        </div>
        <button
          type="button"
          id="whats_openPopup"
          className={classes.whatsapp_button}
          onClick={() => setActive(!active)}
        >
          <div className={classes.float}>
            <FaWhatsapp className={classes.my_float} />
          </div>
        </button>
        <div className={classes.circle_anime}></div>
      </div>
    </Fragment>
  );
}

export default BotonWhatsapp;

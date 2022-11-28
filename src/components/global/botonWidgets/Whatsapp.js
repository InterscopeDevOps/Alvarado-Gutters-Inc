import React, { useContext, useState } from "react";
import classes from "../botonWhatsapp/btnwhatsapp.module.css";
import { GlobalDataContext } from "../../../context/context";
import { IoMdSend } from "react-icons/io";
import Message from "./Message"

function Whatsapp({ stateChat, closeBtn }) {
  const { rpdata } = useContext(GlobalDataContext);
  const [sendInput, setSendInput] = useState("");
  const [setActive] = useState(false);

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
    <div>
      <div
        className={`${classes.popup_whatsapp} ${classes.fadeIn} ${
          stateChat ? classes.is_active_whatsapp_popup : ""
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
                onClick={closeBtn}
              >
                X
              </button>
            </div>
          </div>
        </div>
        <div className={`${classes.chat_box_body}`}>
          <Message/>
          {/* <div className={`${classes.chat_box_message}`}>
            <span className={`${classes.text_name_body}`}>
              {rpdata?.dbPrincipal?.name}
            </span>{" "}
            <br />
            <span>
              Hi there 👋<br></br>
              How can we help you?
            </span>
          </div> */}
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
    </div>
  );
}

export default Whatsapp;

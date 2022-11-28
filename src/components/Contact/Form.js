import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";

const Form = (props) => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <div className="">
      <form-contact
        to={rpdata?.dbPrincipal?.emails?.[0].email}
        services={rpdata?.dbServices?.slice(0, 6).map((item, service) => {
          return item.name;
        })}
        server={rpdata?.linkPostEmail}
        img={rpdata?.dbPrincipal?.logo}
        emailcolor="1"
        tname={rpdata?.labels?.formLabel?.tname}
        tlname={rpdata?.labels?.formLabel?.tlname}
        temail={rpdata?.labels?.formLabel?.temail}
        tphone={rpdata?.labels?.formLabel?.tphone}
        taddress={rpdata?.labels?.formLabel?.taddress}
        ttypeservice={rpdata?.labels?.formLabel?.ttypeservice}
        tbestway={rpdata?.labels?.formLabel?.tbestway}
        tcheckphone={rpdata?.labels?.formLabel?.tcheckphone}
        tcheckcorreo={rpdata?.labels?.formLabel?.tcheckcorreo}
        tmessage={rpdata?.labels?.formLabel?.tmessage}
        tbutton={rpdata?.labels?.formLabel?.tbutton}
        isenglish={rpdata?.labels?.formLabel?.isenglish}
      ></form-contact>
    </div >
  );
};

export default Form;


// variable del formulario:
// tname=""
// tlname=""
// temail=""
// tphone=""
// taddress=""
// ttypeservice=""
// tbestway=""
// tcheckphone=""
// tcheckcorreo=""
// tmessage=""
// tbutton=""
// isenglish="true"

import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";

function SocialMedia() {
  const  {rpdata}  = useContext(GlobalDataContext);
  return (
    <>
      <div className="wrapper">
        <ul className="social-icons icon-circle list-unstyled list-inline mt-6">
          {
            rpdata?.dbSocialMedia?.redes?.[0].url.length > 0 ?
              rpdata?.dbSocialMedia?.redes.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.url} target="_blank" rel='noopener noreferrer'>
                      <i
                        className={`fab fa-${item.icon} wp-icon`}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })
              : null
          }
        </ul>
      </div>
    </>
  );
}

export default SocialMedia;

import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";

function Directories() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <div>
      <div className="px-4 py-8">
        <div className="flex justify-center items-center pb-5">
          {
            rpdata?.gmb?.link.length > 1 ?
              <a href={rpdata?.gmb?.link} target="_blank" rel='noopener noreferrer'>
                <img src={rpdata?.gmb?.img} alt="Not found" width={'250px'} />
              </a>
              : null
          }
        </div>
        {
          rpdata?.dbSocialMedia?.redes.length > 0 || rpdata?.dbSocialMedia?.directorios.length > 0 ?
            <h2 className="text-center pb-5">
              Find Us On
            </h2>
            : null
        }
        {/* <div className={`grid ${rpdata?.dbSocialMedia?.directorios?.length > 3 || rpdata?.dbSocialMedia?.redes?.length > 3 ? 'md:grid-cols-4' : 'md:grid-flow-col' } grid-cols-1 gap-4 bg-auto md:bg-contain bg-top-[100px]`}> */}
        <div className={`w-4/5 mx-auto flex flex-wrap justify-center items-center gap-4 pb-5`}>
          {
            rpdata?.dbSocialMedia?.directorios.length > 0 ?
              rpdata?.dbSocialMedia?.directorios.map((item, index) => {
                return (
                  <div
                    className="text-center content-directorios"
                    key={index}
                  >
                    <a href={item.url} target="_blank" rel='noopener noreferrer'>
                      <img src={item.image} alt="Not found" width={'250px'} />
                    </a>
                  </div>
                );
              }) : null
          }
          {
            rpdata?.dbSocialMedia?.redes.length > 0 ?
              rpdata?.dbSocialMedia?.redes.map((item, index) => {
                return (
                  <div
                    className="text-center content-directorios"
                    key={index}
                  >
                    <a href={item.url} target="_blank" rel='noopener noreferrer'>
                      <img src={item.image} alt="Not Found" width={'250px'} />
                    </a>
                  </div>
                );
              }) : null
          }
        </div>
      </div>
    </div>
  );
}

export default Directories;

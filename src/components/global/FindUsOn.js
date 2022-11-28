import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { Helmet } from "react-helmet";

function FindUsOn() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <>
      <Helmet>
        <title>Find Us On | {`${rpdata?.dbPrincipal?.name}`}</title>
        <meta
          name="description"
          content={`${rpdata?.dbAbout?.[0].text.substring(0, 150) + "..."}`}
        />
        <meta
          name={` ${rpdata?.dbPrincipal?.name}`}
          content={` ${rpdata?.dbPrincipal?.name}`}
        ></meta>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <link rel="icon" href={rpdata?.dbPrincipal?.favicon} />
      </Helmet>
      <div className="bg-footer h-screen opacity-95">
        <div className="w-4/5 mx-auto">
          <div className="flex items-center flex-col pt-10">
            <img
              src={rpdata?.dbPrincipal?.logo}
              alt="logo"
              className="md:w-[20%] mb-6"
            />
            {rpdata?.gmb?.link?.length > 0 ? (
              <a
                href={rpdata?.gmb?.link}
                className="text-white bg-2 p-4 md:w-[500px] w-[250px] text-start my-2 rounded-lg"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-link mr-2"></i>
                Google My Business
              </a>
            ) : null}

            <a
              href={`https://api.whatsapp.com/send?phone=1${rpdata?.dbPrincipal?.phones?.[0].phone.replaceAll("-", "").toLowerCase()}`}
              className="text-white bg-2 p-4 md:w-[500px] w-[250px] text-start my-2 rounded-lg"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-link mr-2"></i>
              Whatsapp
            </a>

            {rpdata?.dbSocialMedia?.directorios?.[0].url.length > 0
              ? rpdata?.dbSocialMedia?.directorios?.map((directorio, index) => {
                  return (
                    <a
                      href={directorio.url}
                      key={index}
                      className="text-white bg-2 p-4 md:w-[500px] w-[250px] text-start my-2 rounded-lg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-link mr-2"></i>
                      {directorio.name}
                    </a>
                  );
                })
              : null}
            <ul className="social-icons icon-circle list-unstyled list-inline mt-6 mb-10">
              {rpdata?.dbSocialMedia?.redes?.[0].url.length > 0
                ? rpdata?.dbSocialMedia?.redes.map((item, index) => {
                    return (
                      <li key={index}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className={`fab fa-${item.icon} wp-icon`}
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindUsOn;
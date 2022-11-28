import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from "../global/boton/ButtonContent";
function HeroVideo({urlVideo}) {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <div>
            <div className="w-full relative content_video flex justify-center md:py-2 py-10">
                <video

                    playsInline
                    autoPlay
                    muted
                    loop
                    className="w-full md:h-full object-cover"
                >
                    <source
                        src={urlVideo}
                        type="video/mp4"
                    />
                </video>
                <div className="flex md:flex-row flex-col md:w-4/5 mx-auto absolute bottom-[30px] md:bottom-[100px] lg:bottom-[90px] md:text-start text-center text-white">
                    <div className="w-full text-center p-4">
                        <h1 className="text-[30px] md:text-[3em] lg:text-[4em]">{rpdata?.dbSlogan?.[0].slogan}</h1>
                        <p className="px-5 md:px-[20%]">{rpdata?.dbValues?.[0].description}</p>
                        <ButtonContent btnStyle="three" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeroVideo;
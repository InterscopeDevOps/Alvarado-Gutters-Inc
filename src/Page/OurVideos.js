import React, { useContext, useState } from "react";
import { GlobalDataContext } from "../context/context";
import TransparentHeader from "../components/global/TransparentHeader";
import BaseLayout from "../components/global/BaseLayout";


function OurVideos() {
    const { rpdata } = useContext(GlobalDataContext);
    
    const [open, setOpen] = useState(false);
    const handelOpen = () => {
        setOpen(!open)
    }

    return (
        <BaseLayout PageName="Our Videos">
            <div className="md:max-w-full w-full">
                <TransparentHeader
                    headertitle="Our Videos"
                    Subheader="Our Videos"
                    bgimg={`${rpdata?.stock?.[0]}`}
                />
            </div>
            <div className="w-4/5 mx-auto py-[100px]">
                <h1 className="text-center pb-10">Our Videos</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        rpdata?.ytGallery?.linkCanalYT ?
                            rpdata?.ytGallery?.links.map((item, index) => {
                                return (
                                    <div>
                                        <a href={`#${item}`} className="button" onClick={handelOpen}>
                                            <div className="relative before:absolute before:bg-zinc-900/5 before:w-full before:h-full before:top-0">
                                                <iframe
                                                    width="100%"
                                                    height="200"
                                                    src={`https://www.youtube.com/embed/${item}?controls=0`}
                                                    title="Video Player Interscope Media"
                                                    frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowfullscreen
                                                    className="rounded-2xl shadow-xl"
                                                />
                                            </div>

                                        </a>


                                        <div id={`${item}`} className={open ? "overlay" : "hidden"} >
                                            <div className={"modal"}>
                                            <button className="cancel" onClick={handelOpen}>X</button>
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src={`https://www.youtube.com/embed/${item}`}
                                                    title="Video Player Interscope Media"
                                                    frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowfullscreen
                                                    className="rounded-2xl shadow-xl"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                            : null
                    }


                </div>
            </div>
        </BaseLayout>
    );
}

export default OurVideos;
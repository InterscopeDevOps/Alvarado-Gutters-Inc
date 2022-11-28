import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalDataContext } from "../../context/context";
import BaseLayout from "../global/BaseLayout";
import TransparentHeader from "../global/TransparentHeader";
import GalleryContent from "./GalleryContent";



function GalleryDetail() {
    const { rpdata } = useContext(GlobalDataContext);
    const { id } = useParams();
    // console.log(id);

    return (
        <BaseLayout PageName={`${rpdata?.dbPrincipal?.name}`}>
            {
                rpdata?.landings?.map((item, index) => {
                    if (item.name.replace(" ", "-").toLowerCase() === id) {
                        return (
                            <div key={index}>
                                <TransparentHeader
                                    // imagen aleatoria
                                    bgimg={
                                        rpdata?.gallery?.length > 1 ?
                                            rpdata?.gallery[Math.floor(Math.random() * rpdata?.gallery?.length)]
                                            : rpdata?.stock[Math.floor(Math.random() * rpdata?.stock?.length)]
                                    }
                                    headertitle={item.name}
                                    Subheader={'Our Projects'}
                                />
                                <>
                                    <div className="w-[90%] mx-auto text-center pt-[100px] pb-[80px]">
                                        <h2 className="pb-5 ">our recent projects of:</h2>
                                        <h2>{item.name}</h2>
                                    </div>
                                    <div className="pb-[100px]">
                                        <GalleryContent galleryImages={item.gallery} />
                                    </div>
                                </>
                            </div>
                        );
                    } else return console.log('Servicio no encontrado')

                })
            }


        </BaseLayout>

    )
}

export default GalleryDetail;


import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";



function BeforeAfter() {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <div>
            {rpdata?.beforeAfterGall?.length > 0 ? (
                <div className="w-[90%] mx-auto py-14">
                    <h2 className="text-center capitalize pb-[50px]">Before & after</h2>
                    <div className={`flex flex-wrap justify-center gap-5`}>
                        {rpdata?.beforeAfterGall?.map((item, index) => {
                            return (
                                <img-comparison-slider key={index}>
                                    <div slot="first" class="before">
                                        <img
                                            slot="first"
                                            className="w-full h-full md:w-[400px] md:h-[400px]"
                                            src={`${item.beforeImg}`}
                                            alt="Not Found"
                                        />
                                        <figcaption>Before</figcaption>
                                    </div>
                                    <div slot="second" class="after">
                                        <img
                                            slot="second"
                                            className="w-full h-full md:w-[400px] md:h-[400px]"
                                            alt="Not Found"
                                            src={`${item.afterImg}`}
                                        />
                                        <figcaption>After</figcaption>
                                    </div>
                                </img-comparison-slider>
                            );
                        })}
                    </div>
                </div>
            ) : null}
        </div>
    );
}
export default BeforeAfter;
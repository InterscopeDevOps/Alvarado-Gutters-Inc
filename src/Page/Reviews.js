import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import TransparentHeader from "../components/global/TransparentHeader";
import BaseLayout from "../components/global/BaseLayout";


function Reviews() {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <BaseLayout PageName="Reviews">
            <div className="md:max-w-full w-full">
                <TransparentHeader
                    headertitle="Reviews"
                    Subheader="Reviews"
                    bgimg={`${rpdata?.stock?.[0]}`}
                />
            </div>
            <div className="w-4/5 mx-auto py-[100px]">
                <h1 className="text-center pb-10">{rpdata?.labels?.general?.titleReviews}</h1>
                <div className={`${rpdata?.reviews?.links?.[0]}`}></div>
            </div>
        </BaseLayout>
    );
}

export default Reviews;

import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import TransparentHeader from "../components/global/TransparentHeader";
import BaseLayout from "../components/global/BaseLayout";
import { ButtonContent } from "../components/global/boton/ButtonContent";

function ErrorPages() {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <BaseLayout PageName="page not found">
            <div className="md:max-w-full w-full">
                <TransparentHeader
                    headertitle="page not found"
                    Subheader="page not found"
                    bgimg={`${rpdata?.stock?.[0]}`}
                />
                <div className="py-[100px] text-center">
                    <h3 className="capitalize ">page not found</h3>
                    <ButtonContent 
                        btnName={'return to home'}
                        btnLink='/'
                    />
                </div>
            </div>
        </BaseLayout>
    );
}

export default ErrorPages;
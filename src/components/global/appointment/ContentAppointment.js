import { useState } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { UseContextProvider } from "../../../context/StepperContext";


import DetailsInfo from "./steps/DetailsInfo";
import Final from "./steps/Final";
import SelectServices from "./steps/SelectServices";
import ContentTime from "./steps/ContentTime";

function ContentAppointment() {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        "Step 1",
        "Step 2",
        "Step 3",
        "Step 4",
    ];

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <SelectServices />;
            case 2:
                return <ContentTime />;
            case 3:
                return <DetailsInfo />;
            case 4:
                return <Final />;
            default:
        }
    };

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-4/5">
            {/* Stepper */}
            <div className="horizontal container mt-5 ">
                <Stepper steps={steps} currentStep={currentStep} />

                <div className="my-10 p-10 ">
                    <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
                </div>
            </div>

            {/* navigation button */}
            {currentStep !== steps.length && (
                <StepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />
            )}
        </div>
    );
}

export default ContentAppointment;

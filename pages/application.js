

import React, { useState } from 'react';

import BasicInformation from '../components/forms/BasicInformation';
import ChurchRelatedInfo from '../components/forms/ChurchRelatedInfo';
import ChurchRelatedInfo2 from '../components/forms/ChurchRelatedInfo2';
import { UseContextProvider } from '../contexts/StepperContext';
import Stepper from '../components/Stepper';
import StepperControl from '../components/StepperControl';
import Final from '../components/forms/Final';


function Application() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    'Basic Information',
    'Church Related Info.',
    'Church Related Info 2',
    'Done',
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <BasicInformation />;
      case 2:
        return <ChurchRelatedInfo/>;
      case 3:
        return <ChurchRelatedInfo2/>;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === 'next' ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className= "bg-[#F7EDDB] w-fit md:w-full h-[100vmax] md:h-[65vmax]">
      <div>
        <UseContextProvider>
          <div className="">
            <div className="flex items-center">
              <div className="lg:w-4/5 mx-auto md:w-4/5 my-20 md:my-10  rounded-2xl  bg-white pb-2  font-sans">
                <div className="horizontal container">
                  <Stepper steps={steps} currentStep={currentStep} />

                  <div className="my-10 p-10 ">{displayStep(currentStep)}</div>
                </div>

                {currentStep !== steps.length && (
                  <StepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                  />
                )}
              </div>
            </div>
          </div>
        </UseContextProvider>
      </div>
    </div>
  );
}

export default Application

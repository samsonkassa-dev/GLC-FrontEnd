import React from "react";
import { useStepperContext } from "../../contexts/StepperContext";
import { FormControlLabel, Checkbox } from "@mui/material";
import { Box } from "@mui/system";

function ChurchRelatedInfo() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value, required } = e.target;
    setUserData({
      ...userData,
      [name]: {
        value,
        required,
        error: required ? validateInputs(name, value) : null,
      },
    });
  };
  return (
    <div>
      <div className="flex flex-col ">
        <div className="flex">
          <div className="mx-2 w-full mt-3 md:mt-0 sm:w-1/2 md:w-2/3  flex-1">
            <label className="label-style">When did you get saved?</label>
            <div className="input-div-style">
              <input
                type="text"
                onChange={handleChange}
                value={userData["getSaved"]?.value || ""}
                name="getSaved"
                className="input-style"
              />
            </div>
          </div>
          <div className="mx-2 w-full mt-3 md:-mt-0 sm:w-1/2 md:w-2/3  flex-1">
            <label className="label-style">
              Which Church did you get saved?
            </label>
            <div className="input-div-style">
              <input
                type="text"
                onChange={handleChange}
                value={userData["churchgetSaved"]?.value || ""}
                name="churchgetSaved"
                className="input-style"
              />
            </div>

            
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">Who invited you to GLC?</label>
          <label className="label-style flex text-xs">Full Name:</label>
          <p className="text-xs text-slate-400">Please fill their full name</p>
          <div className="input-div-style">
            <input
              type="text"
              onChange={handleChange}
              value={userData["inviterName"]?.value || ""}
              name="inviterName"
              className="input-style"
            />
          </div>
          <label className="label-style flex text-xs">Phone Number:</label>
          <div className="input-div-style">
            <input
              onChange={handleChange}
              value={userData["phoneNumber"]?.value || ""}
              name="phoneNumber"
              className="input-style"
            />
          </div>
          <div className="flex gap-10 mt-5">
            <div className="flex space-x-1 items-center">
              <label className=" flex font-semibold text-xs">
                Social Media
              </label>
              <input
                onChange={handleChange}
                value="Male"
                name="gender"
                type="radio"
              />
            </div>
            <div className="flex space-x-1 items-center">
              <label className=" flex font-semibold text-xs">Gospel TV</label>

              <input
                onChange={handleChange}
                value="Female"
                name="gender"
                type="radio"
              />
            </div>
          </div>
        </div>
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <div className="flex flex-col  mt-3">

            <FormControlLabel
              label="Restoration"
              control={<Checkbox color="warning" onChange={handleChange} />}
            />
            <FormControlLabel
              label="Foundation 1"
              control={<Checkbox color="warning" onChange={handleChange} />}
            />
            <FormControlLabel
              label="Foundation 2"
              control={<Checkbox color="warning" onChange={handleChange} />}
            />
            <FormControlLabel
              label="Minister's Training"
              control={<Checkbox color="warning" onChange={handleChange} />}
            />

            <div className=" w-full mt-3 sm:w-1/2 md:w-2/3  flex-1">
              <label className="label-style">
                Which departement do you serve?
              </label>
              <div className="input-div-style">
                <input
                  type="text"
                  onChange={handleChange}
                  value={userData["departmentServes"]?.value || ""}
                  name="departmentServes"
                  className="input-style"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
        

 
   
    </div>
  );
}

export default ChurchRelatedInfo;

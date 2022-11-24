import React from "react";
import { useStepperContext } from "../../contexts/StepperContext";
import { validateInputs } from "../../utils/validateInputs";
import Required from "../Required";
import { FormControlLabel, Checkbox } from "@mui/material";
import UploadFile from "./UploadImage";
import { TiUserAdd } from 'react-icons/ti';
function ChurchRelatedInfo2() {
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
    <div className="flex md:flex-col flex-row ">
      <div className="flex mx-2 mt-3 w-full">
        <div className="mx-2 w-full sm:w-1/2 md:w-2/ flex-col  flex flex-1">
          <label className="label-style text-[15px]">Marital Status</label>
          <FormControlLabel
            label="Married"
            control={<Checkbox color="warning" onChange={handleChange} />}
          />
          <FormControlLabel
            label="Single"
            control={<Checkbox color="warning" onChange={handleChange} />}
          />
          <FormControlLabel
            label="Divorced"
            control={<Checkbox color="warning" onChange={handleChange} />}
          />
          <FormControlLabel
            label="Widow"
            control={<Checkbox color="warning" onChange={handleChange} />}
          />

          <label className="label-style text-[15px]">
            Does your child come to church?
          </label>
          <div className="flex flex-row">
            <FormControlLabel
              label="Yes"
              control={<Checkbox color="warning" onChange={handleChange} />}
            />
            <FormControlLabel
              label="No"
              control={<Checkbox color="warning" onChange={handleChange} />}
            />
          </div>

          <div className="flex flex-col">
            <div className="w-96 sm:w-1/2 md:w-2/3  flex-1">
              <label className="label-style">Number of Children </label>
              <div className="input-div-style">
                <input
                  className="input-style"
                  onChange={handleChange}
                  value={userData["numberofChildren"]?.value || ""}
                  name="numberofChildren"
                  type="number"
                />
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div className="md:w-60 flex">
                <label className="label-style text-xs">Name of Children</label>
                <div className="input-div-style ml-3">
                  <input
                    className="input-style"
                    onChange={handleChange}
                    value={userData["numberofChildren"]?.value || ""}
                    name="nameofChildren"
                    type="text"
                  />
                </div>
              </div>
              <div className=" md:w-28 flex">
                <label className="label-style text-xs">Age</label>
                <div className="input-div-style ml-3">
                  <input
                    className="input-style"
                    onChange={handleChange}
                    value={userData["numberofChildren"]?.value || ""}
                    name="childAge"
                    type="number"
                  />
                </div>
              </div>
              <div className="flex h-8 mt-3">
                <button
                  className="px-2 py-1 rounded bg-[#497174]"
                  // onClick={addToList}
                >
                  <TiUserAdd/>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-2 mt-8 md:mt-4 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">
            Your Experiance on Ministry before? /ከዚ በፊት የነበራችው የአገልግሎት ልምድ?/
          </label>
          <Required />

          <div className="input-div-style">
            <textarea
              rows={2}
              required
              onChange={handleChange}
              value={userData["wdyeftp"]?.value || ""}
              name="wdyeftp"
              className="input-style"
            />
          </div>
          <label className="label-style">Upload your Image</label>
          <UploadFile />
        </div>
      </div>
    </div>
  );
}

export default ChurchRelatedInfo2;

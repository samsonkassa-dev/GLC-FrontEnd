import Required from "../Required";
import { useStepperContext } from "../../contexts/StepperContext";
import { validateInputs } from "../../utils/validateInputs";
import { useState } from 'react';


function BasicInformation() {
  const { userData, setUserData } = useStepperContext();
  const [workStatus, setWorkStatus] = useState('');

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
    <div className="flex flex-col  ">
      <div className="flex mx-2 mt-3 w-full">
        <div className="w-full sm:w-1/2 md:w-2/3 flex-1">
          <label className="label-style">Full Name:</label>
          <Required />
          <p className="text-xs text-slate-400">
            Please include your Grandfather's name
          </p>
          <div className="input-div-style">
            <input
              required
              className="input-style"
              onChange={handleChange}
              value={userData["fullName"]?.value || ""}
              name="fullName"
              type="text"
            />
          </div>
          <p className="text-xs text-red-500">{userData["fullName"]?.error}</p>
        </div>
        <div className=" mx-2 mt-8 md:mt-4 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">Phone Number :</label>
          <Required />
          <div className="input-div-style">
            <input
              required
              onChange={handleChange}
              value={userData["phoneNumber"]?.value || ""}
              name="phoneNumber"
              className="input-style"
            />
          </div>
        </div>
      </div>

      <div className="mx-2 mt-3 w-full flex">
        <div className="w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">City:</label>
          <p className="text-xs text-slate-400">City of Your Residence</p>

          <div className="input-div-style">
            <input
              required
              type="address"
              onChange={handleChange}
              value={userData["address"]?.value || ""}
              name="address"
              className="input-style"
            />
          </div>
        </div>
        <div className="mx-2 mt-4 md:mt-5 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">Sub-City :</label>
          <div className="input-div-style">
            <input
              onChange={handleChange}
              value={userData["subCity"]?.value || ""}
              name="subCity"
              className="input-style"
            />
          </div>
        </div>
      </div>
      <div className="mx-2 mt-3 w-full flex">
        <div className="w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">Work Status:</label>
          <div className="input-div-style">
            <select
              required
              name="WorkStatus"
              value={workStatus}
              onChange={(e) => setWorkStatus(e.target.value)}
              className="select-style md:w-2/3"
            >
              <option value="">- Select -</option>
              <option>Student</option>
              <option>Employee</option>
            </select>
          </div>
         { (workStatus !== '' && workStatus === "Student") ? 
            <div className="flex gap-4">
              <div className="w-full sm:w-1/2 md:w-2/3  flex-1">
                <label className="label-style">Where you do you learn?</label>
                <p className="text-xs text-slate-400">Place of your School</p>

                <div className="input-div-style">
                  <input
                    required
                    type="schoolName"
                    onChange={handleChange}
                    value={userData["schoolName"]?.value || ""}
                    name="schoolName"
                    className="input-style"
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-2/3  flex-1">
                <label className="label-style">What are you studying?</label>
                <p className="text-xs text-slate-400">Field of Study</p>

                <div className="input-div-style">
                  <input
                    required
                    type="fieldofStudy"
                    onChange={handleChange}
                    value={userData["fieldofStudy"]?.value || ""}
                    name="fieldofStudy"
                    className="input-style"
                  />
                </div>
              </div>
            </div>
           :   (workStatus !== '' && workStatus === "Employee") ?
            <>
              <div className="flex gap-4">
                <div className="w-full sm:w-1/2 md:w-2/3  flex-1">
                  <label className="label-style">What do you work?</label>
                  <p className="text-xs text-slate-400">Field of your job</p>

                  <div className="input-div-style">
                    <input
                      required
                      type="schoolName"
                      onChange={handleChange}
                      value={userData["schoolName"]?.value || ""}
                      name="schoolName"
                      className="input-style"
                    />
                  </div>
                </div>
                <div className=" w-full sm:w-1/2 md:w-2/3  flex-1">
                  <label className="label-style">Where do you work?</label>
                  <p className="text-xs text-slate-400">Company Name</p>

                  <div className="input-div-style">
                    <input
                      required
                      type="fieldofStudy"
                      onChange={handleChange}
                      value={userData["fieldofStudy"]?.value || ""}
                      name="fieldofStudy"
                      className="input-style"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-2/3  flex-1">
                <label className="label-style">Place of Work?</label>
                <p className="text-xs text-slate-400">City Name</p>

                <div className="input-div-style">
                  <input
                    required
                    type="fieldofStudy"
                    onChange={handleChange}
                    value={userData["fieldofStudy"]?.value || ""}
                    name="fieldofStudy"
                    className="input-style"
                  />
                </div>
              </div> 
            </> : ''}
        </div>
      </div>
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3  ">
          <label className="label-style">Education Status:</label>
          <div className="input-div-style">
            <select
              name="gradeLevel"
              value={userData["gradeLevel"]?.value || ""}
              onChange={handleChange}
              className="select-style md:w-2/3"
            >
              <option value="">- Select -</option>
              <option>Diploma</option>
              <option>Degree</option>
              <option>Masters</option>
              <option>Doctorate</option>
              <option>Other</option>
            </select>
          </div>
        </div>
    </div>
  );
}

export default BasicInformation;

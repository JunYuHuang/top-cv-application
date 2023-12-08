/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import GeneralSection from "./GeneralSection.jsx";
import "./../styles/index.css";

function App() {
  const [isEditMode, setIsEditMode] = useState(true);
  const [general, setGeneral] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  function toggleMode() {
    setIsEditMode(!isEditMode);
  }

  const generalSectionProps = { isEditMode, general, setGeneral };

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="max-w-screen-sm min-w-[200px] my-8">
        <h1 className="mb-6 text-7xl uppercase">CV Application</h1>
        <button
          type="button"
          className="border-black border-2 rounded-lg p-2 w-full bg-[#e9e9ed]"
          onClick={toggleMode}
        >
          {isEditMode ? "View CV" : "Edit CV"}
        </button>
        <GeneralSection {...generalSectionProps} />
        {/* VIEW TEMPLATES - start */}
        {/* <div className="mt-3">
          <h2 className="text-2xl font-bold uppercase">Education</h2>
          <div className="mb-3">
            <p className="">Undisclosed Study @ Undisclosed School</p>
            <p className="">Undisclosed Date - Undisclosed Date</p>
          </div>
        </div> */}
        {/* <div className="mt-3">
          <h2 className="text-2xl font-bold uppercase">Experience</h2>
          <div className="mb-3">
            <p className="">Undisclosed Position @ Undisclosed Company</p>
            <p className="">Undisclosed Date - Undisclosed Date</p>
            <p className="">Summary of Responsibilities</p>
          </div>
        </div> */}
        {/* VIEW TEMPLATES - end */}
        {/* EDIT TEMPLATES - start */}

        {/* <div className="mt-6 mb-3">
          <h2 className="text-2xl font-bold uppercase">Education</h2>
          <div className="mb-8">
            <h2 className="text-lg italic">Education 1</h2>
            <div className="mb-2">
              <label htmlFor="education-study-title" className="">Title of Study:</label>
              <br />
              <input
                type="text"
                name="education-study-title"
                id="education-study-title"
                className="border-black border-2 rounded-lg p-2"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="education-school-name" className="">School:</label>
              <br />
              <input
                type="text"
                name="education-school-name"
                id="education-school-name"
                className="border-black border-2 rounded-lg p-2"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="education-start-date" className="">Start Date:</label>
              <br />
              <input
                type="text"
                name="education-start-date"
                id="education-start-date"
                className="border-black border-2 rounded-lg p-2"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="education-end-date" className="">End Date:</label>
              <br />
              <input
                type="text"
                name="education-end-date"
                id="education-end-date"
                className="border-black border-2 rounded-lg p-2"
                required
              />
            </div>
            <button type="button" className="border-black border-2 rounded-lg p-2 bg-[#e9e9ed] mt-2">Delete</button>
          </div>
          <button type="button" className="border-black border-2 rounded-lg p-2 bg-[#e9e9ed]">Add Education</button>
        </div> */}
        {/* <div className="mt-6 mb-3">
          <h2 className="text-2xl font-bold uppercase">Experience</h2>
          <div className="mb-8">
            <h2 className="text-lg italic">Experience 1</h2>
            <div className="mb-2">
              <label htmlFor="experience-position-title" className="">Title of Position:</label>
              <br />
              <input
                type="text"
                name="experience-position-title"
                id="experience-position-title"
                className="border-black border-2 rounded-lg p-2"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="company-name" className="">Company:</label>
              <br />
              <input
                type="text"
                name="company-name"
                id="company-name"
                className="border-black border-2 rounded-lg p-2"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="experience-start-date" className="">Start Date:</label>
              <br />
              <input
                type="text"
                name="experience-start-date"
                id="experience-start-date"
                className="border-black border-2 rounded-lg p-2"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="education-end-date" className="">End Date:</label>
              <br />
              <input
                type="text"
                name="education-end-date"
                id="education-end-date"
                className="border-black border-2 rounded-lg p-2"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="experience-responsibilities" className="">Summary of Responsibilities:</label>
              <br />
              <textarea
                name="experience-responsibilities"
                id="experience-responsibilities"
                className="border-black border-2 rounded-lg p-2"
              ></textarea>
            </div>
            <button type="button" className="border-black border-2 rounded-lg p-2 bg-[#e9e9ed] mt-2">Delete</button>
          </div>
          <button type="button" className="border-black border-2 rounded-lg p-2 bg-[#e9e9ed]">Add Experience</button>
        </div> */}
        {/* EDIT TEMPLATES - end */}
        <button
          type="button"
          className="border-black border-2 rounded-lg p-2 w-full bg-[#e9e9ed]"
          onClick={toggleMode}
        >
          {isEditMode ? "Submit" : "Edit"}
        </button>
      </div>
    </main>
  );
}

export default App;

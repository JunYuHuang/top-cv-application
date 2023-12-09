import { useState } from "react";
import { v4 as uuid } from "uuid";
import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import "./../styles/index.css";

function App() {
  const [isEditMode, setIsEditMode] = useState(true);
  const [general, setGeneral] = useState({});
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  function toggleMode() {
    setIsEditMode(!isEditMode);
  }

  const generalProps = { isEditMode, general, setGeneral };
  const educationProps = { isEditMode, educations, setEducations, uuid };
  const experienceProps = { isEditMode, experiences, setExperiences, uuid };

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
        <General {...generalProps} />
        <Education {...educationProps} />
        <Experience {...experienceProps} />
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

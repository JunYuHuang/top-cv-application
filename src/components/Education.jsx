/* eslint-disable react/prop-types */
import { dummyEducation as dummy } from "../assets/dummyData.js";

function EducationViewItem({ education }) {
  const { titleOfStudy, schoolName, startDate, endDate } = education;

  return (
    <div className="mb-3">
      <p className="">
        {titleOfStudy ? titleOfStudy : dummy.titleOfStudy} @{" "}
        {schoolName ? schoolName : dummy.schoolName}
      </p>
      <p className="">
        {startDate ? startDate : dummy.startDate} -{" "}
        {endDate ? endDate : dummy.endDate}
      </p>
    </div>
  );
}

function EducationView({ educations }) {
  if (educations.length < 1) return null;

  return (
    <div className="mt-3 mb-8">
      <h2 className="text-2xl font-bold uppercase">Education</h2>
      {educations.map((education) => (
        <EducationViewItem key={education.id} education={education} />
      ))}
    </div>
  );
}

function EducationEditItem(props) {
  const {
    count,
    education,
    onDelete,
    onTitleChange,
    onSchoolChange,
    onStartDateChange,
    onEndDateChange,
  } = props;
  const { id, titleOfStudy, schoolName, startDate, endDate } = education;

  return (
    <div className="mb-8">
      <h2 className="text-lg italic">Education {count}</h2>
      <div className="mb-2">
        <label htmlFor={`${id}-education-study-title`} className="">
          Title of Study:
        </label>
        <br />
        <input
          type="text"
          name={`${id}-education-study-title`}
          id={`${id}-education-study-title`}
          className="border-black border-2 rounded-lg p-2"
          required
          value={titleOfStudy ? titleOfStudy : ""}
          onChange={onTitleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor={`${id}-education-school-name`} className="">
          School:
        </label>
        <br />
        <input
          type="text"
          name={`${id}-education-school-name`}
          id={`${id}-education-school-name`}
          className="border-black border-2 rounded-lg p-2"
          required
          value={schoolName ? schoolName : ""}
          onChange={onSchoolChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor={`${id}-education-start-date`} className="">
          Start Date:
        </label>
        <br />
        <input
          type="text"
          name={`${id}-education-start-date`}
          id={`${id}-education-start-date`}
          className="border-black border-2 rounded-lg p-2"
          required
          value={startDate ? startDate : ""}
          onChange={onStartDateChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor={`${id}-education-end-date`} className="">
          End Date:
        </label>
        <br />
        <input
          type="text"
          name={`${id}-education-end-date`}
          id={`${id}-education-end-date`}
          className="border-black border-2 rounded-lg p-2"
          required
          value={endDate ? endDate : ""}
          onChange={onEndDateChange}
        />
      </div>
      <button
        type="button"
        className="border-black border-2 rounded-lg p-2 bg-[#e9e9ed] mt-2"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
}

function EducationEdit(props) {
  const { educations, setEducations, uuid } = props;

  function onAdd() {
    const newEducation = {
      id: `education-${uuid()}`,
      titleOfStudy: "",
      schoolName: "",
      startDate: "",
      endDate: "",
    };
    setEducations((prevEducations) => [...prevEducations, newEducation]);
  }

  function deleteEducation(id) {
    setEducations((prevEducations) =>
      prevEducations.filter((education) => education.id !== id)
    );
  }

  function updateTitle(id, value) {
    setEducations((prevEducations) =>
      prevEducations.map((education) => {
        if (education.id !== id) return education;
        return { ...education, titleOfStudy: value };
      })
    );
  }

  function updateSchool(id, value) {
    setEducations((prevEducations) =>
      prevEducations.map((education) => {
        if (education.id !== id) return education;
        return { ...education, schoolName: value };
      })
    );
  }

  function updateStartDate(id, value) {
    setEducations((prevEducations) =>
      prevEducations.map((education) => {
        if (education.id !== id) return education;
        return { ...education, startDate: value };
      })
    );
  }

  function updateEndDate(id, value) {
    setEducations((prevEducations) =>
      prevEducations.map((education) => {
        if (education.id !== id) return education;
        return { ...education, endDate: value };
      })
    );
  }

  function educationEditItemProps(id, index) {
    return {
      count: index + 1,
      onAdd,
      onDelete: () => deleteEducation(id),
      onTitleChange: (e) => updateTitle(id, e.target.value),
      onSchoolChange: (e) => updateSchool(id, e.target.value),
      onStartDateChange: (e) => updateStartDate(id, e.target.value),
      onEndDateChange: (e) => updateEndDate(id, e.target.value),
    };
  }

  return (
    <>
      <div className="mt-6 mb-3">
        <h2 className="text-2xl font-bold uppercase">Education</h2>
        {educations.map((education, i) => (
          <EducationEditItem
            key={education.id}
            education={education}
            {...educationEditItemProps(education.id, i)}
          />
        ))}
        <button
          type="button"
          className="border-black border-2 rounded-lg p-2 bg-[#e9e9ed] mt-3"
          onClick={onAdd}
        >
          Add Education
        </button>
      </div>
    </>
  );
}

function Education(props) {
  return props.isEditMode ? (
    <EducationEdit {...props} />
  ) : (
    <EducationView {...props} />
  );
}

export default Education;

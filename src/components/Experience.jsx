/* eslint-disable react/prop-types */
import { dummyExperience as dummy } from "../assets/dummyData.js";

function ExperienceViewItem({ experience }) {
  const { positionTitle, companyName, startDate, endDate, summaryOfDuties } =
    experience;

  return (
    <div className="mb-3">
      <p className="">
        {positionTitle ? positionTitle : dummy.positionTitle} @{" "}
        {companyName ? companyName : dummy.companyName}
      </p>
      <p className="">
        {startDate ? startDate : dummy.startDate} -{" "}
        {endDate ? endDate : dummy.endDate}
      </p>
      <p className="whitespace-pre-wrap">
        {summaryOfDuties ? summaryOfDuties : dummy.summaryOfDuties}
      </p>
    </div>
  );
}

function ExperienceView({ experiences }) {
  if (experiences.length < 1) return null;

  return (
    <div className="mt-3 mb-8">
      <h2 className="text-2xl font-bold uppercase">Experience</h2>
      {experiences.map((experience) => (
        <ExperienceViewItem key={experience.id} experience={experience} />
      ))}
    </div>
  );
}

function ExperienceEditItem(props) {
  const {
    count,
    experience,
    onDelete,
    onTitleChange,
    onCompanyChange,
    onStartDateChange,
    onEndDateChange,
    onDutiesChange,
  } = props;
  const {
    id,
    positionTitle,
    companyName,
    startDate,
    endDate,
    summaryOfDuties,
  } = experience;

  return (
    <div className="mb-8">
      <h2 className="text-lg italic">Experience {count}</h2>
      <div className="mb-2">
        <label htmlFor={`${id}-experience-position-title`} className="">
          Position Title:
        </label>
        <br />
        <input
          type="text"
          name={`${id}-experience-position-title`}
          id={`${id}-experience-position-title`}
          className="border-black border-2 rounded-lg p-2"
          required
          value={positionTitle ? positionTitle : ""}
          onChange={onTitleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor={`${id}-experience-company-name`} className="">
          Company:
        </label>
        <br />
        <input
          type="text"
          name={`${id}-experience-company-name`}
          id={`${id}-experience-company-name`}
          className="border-black border-2 rounded-lg p-2"
          required
          value={companyName ? companyName : ""}
          onChange={onCompanyChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor={`${id}-experience-start-date`} className="">
          Start Date:
        </label>
        <br />
        <input
          type="text"
          name={`${id}-experience-start-date`}
          id={`${id}-experience-start-date`}
          className="border-black border-2 rounded-lg p-2"
          required
          value={startDate ? startDate : ""}
          onChange={onStartDateChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor={`${id}-experience-end-date`} className="">
          End Date:
        </label>
        <br />
        <input
          type="text"
          name={`${id}-experience-end-date`}
          id={`${id}-experience-end-date`}
          className="border-black border-2 rounded-lg p-2"
          required
          value={endDate ? endDate : ""}
          onChange={onEndDateChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor={`${id}-experience-duties`} className="">
          Summary of Responsibilities:
        </label>
        <br />
        <textarea
          name={`${id}-experience-duties`}
          id={`${id}-experience-duties`}
          className="border-black border-2 rounded-lg p-2"
          value={summaryOfDuties ? summaryOfDuties : ""}
          onChange={onDutiesChange}
        ></textarea>
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

function ExperienceEdit(props) {
  const { experiences, setExperiences, uuid } = props;

  function onAdd() {
    const newExperience = {
      id: `experience-${uuid()}`,
      positionTitle: "",
      companyName: "",
      startDate: "",
      endDate: "",
      summaryOfDuties: "",
    };
    setExperiences((prevExperiences) => [...prevExperiences, newExperience]);
  }

  function deleteExperience(id) {
    setExperiences((prevExperiences) =>
      prevExperiences.filter((experience) => experience.id !== id)
    );
  }

  function updateTitle(id, value) {
    setExperiences((prevExperiences) =>
      prevExperiences.map((experience) => {
        if (experience.id !== id) return experience;
        return { ...experience, positionTitle: value };
      })
    );
  }

  function updateCompany(id, value) {
    setExperiences((prevExperiences) =>
      prevExperiences.map((experience) => {
        if (experience.id !== id) return experience;
        return { ...experience, companyName: value };
      })
    );
  }

  function updateStartDate(id, value) {
    setExperiences((prevExperiences) =>
      prevExperiences.map((experience) => {
        if (experience.id !== id) return experience;
        return { ...experience, startDate: value };
      })
    );
  }

  function updateEndDate(id, value) {
    setExperiences((prevExperiences) =>
      prevExperiences.map((experience) => {
        if (experience.id !== id) return experience;
        return { ...experience, endDate: value };
      })
    );
  }

  function updateDuties(id, value) {
    setExperiences((prevExperiences) =>
      prevExperiences.map((experience) => {
        if (experience.id !== id) return experience;
        return { ...experience, summaryOfDuties: value };
      })
    );
  }

  function experienceEditItemProps(id, index) {
    return {
      count: index + 1,
      onAdd,
      onDelete: () => deleteExperience(id),
      onTitleChange: (e) => updateTitle(id, e.target.value),
      onCompanyChange: (e) => updateCompany(id, e.target.value),
      onStartDateChange: (e) => updateStartDate(id, e.target.value),
      onEndDateChange: (e) => updateEndDate(id, e.target.value),
      onDutiesChange: (e) => updateDuties(id, e.target.value),
    };
  }

  return (
    <>
      <div className="mt-6 mb-3">
        <h2 className="text-2xl font-bold uppercase">Experience</h2>
        {experiences.map((experience, i) => (
          <ExperienceEditItem
            key={experience.id}
            experience={experience}
            {...experienceEditItemProps(experience.id, i)}
          />
        ))}
        <button
          type="button"
          className="border-black border-2 rounded-lg p-2 bg-[#e9e9ed] mt-3"
          onClick={onAdd}
        >
          Add Experience
        </button>
      </div>
    </>
  );
}

function Experience(props) {
  return props.isEditMode ? (
    <ExperienceEdit {...props} />
  ) : (
    <ExperienceView {...props} />
  );
}

export default Experience;

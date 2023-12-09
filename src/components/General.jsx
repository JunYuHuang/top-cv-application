/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { dummyGeneral as dummy } from "../assets/dummyData.js";

function GeneralView(props) {
  const { general } = props;

  return (
    <>
      <div className="mt-6 mb-8">
        <h2 className="text-5xl font-bold uppercase">
          {general.fullName ? general.fullName : dummy.fullName}
        </h2>
        <ul className="">
          <li className="">{general.email ? general.email : dummy.email}</li>
          <li className="">
            {general.phoneNumber ? general.phoneNumber : dummy.phoneNumber}
          </li>
        </ul>
      </div>
    </>
  );
}

function GeneralEdit(props) {
  const { general, setGeneral } = props;

  function handleFullNameChange(e) {
    setGeneral((prevGeneral) => {
      return {
        ...prevGeneral,
        fullName: e.target.value,
      };
    });
  }

  function handleEmailChange(e) {
    setGeneral((prevGeneral) => {
      return {
        ...prevGeneral,
        email: e.target.value,
      };
    });
  }

  function handlePhoneNumberChange(e) {
    setGeneral((prevGeneral) => {
      return {
        ...prevGeneral,
        phoneNumber: e.target.value,
      };
    });
  }

  return (
    <>
      <div className="mt-6 mb-3">
        <h2 className="text-2xl font-bold uppercase">General</h2>
        <div className="mb-8">
          <div className="mb-2">
            <label htmlFor="general-full-name" className="">
              Full Name:
            </label>
            <br />
            <input
              type="text"
              name="general-full-name"
              id="general-full-name"
              className="border-black border-2 rounded-lg p-2"
              required
              value={general.fullName ? general.fullName : ""}
              onChange={handleFullNameChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="general-email" className="">
              Email:
            </label>
            <br />
            <input
              type="email"
              name="general-email"
              id="general-email"
              className="border-black border-2 rounded-lg p-2"
              required
              value={general.email ? general.email : ""}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="general-phone-number" className="">
              Phone Number:
            </label>
            <br />
            <input
              type="tel"
              name="general-phone-number"
              id="general-phone-number"
              className="border-black border-2 rounded-lg p-2"
              required
              value={general.phoneNumber ? general.phoneNumber : ""}
              onChange={handlePhoneNumberChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function General(props) {
  return props.isEditMode ? (
    <GeneralEdit {...props} />
  ) : (
    <GeneralView {...props} />
  );
}

export default General;

import React from "react";

const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All field are mandatory</p>
      <span title="close">x</span>

      <img
        src="data:image/png;base64,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"
        alt="mouse cursor"
      />

      <div data-testid="custom-element"> Custom HTML element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>

        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kindom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="LK">Sri Lanka</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button>Submit</button>
      </form>

      <div className="same-label-name">
        <h1>Same Label name</h1>
        <label htmlFor="username">Newname</label>
        <input
          type="text"
          id="username"
          placeholder="Fullname"
          value="Kajamohan"
          onChange={() => {}}
        />

        <label htmlFor="password">
          Newname<textarea></textarea>
        </label>
      </div>
    </>
  );
};
export default Application;

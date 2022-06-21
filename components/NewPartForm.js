import React, { useState } from "react";

const NewPartForm = () => {
  const [formSubSuccess, setFormSubSuccess] = useState(null);
  const addNewPart = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target[0].value,
      lotPrefix: e.target[1].value,
      STDLoss: e.target[2].value,
    };

    const JSONdata = JSON.stringify(data);
    // console.log(JSONdata);

    const endpoint = "https://scrap-tracker.herokuapp.com/api/part";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();
    setFormSubSuccess(result);
  };

  return (
    <>
      <form onSubmit={addNewPart}>
        <div className="mb-3">
          <label className="form-label">New Part Name</label>
          <input type="text" className="form-control" id="newPartNameInput" />
        </div>
        <div className="mb-3">
          <label className="form-label">Part Prefix</label>
          <input
            type="number"
            className="form-control"
            id="newPartPrefixInput"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Standard Coil Loss</label>
          <input
            type="number"
            className="form-control"
            id="newPartCoilLossInput"
            step="0.01"
          />
        </div>

        <button type="submit" className="btn btn-info">
          Submit
        </button>
      </form>
      {formSubSuccess ? (
        <div className="alert alert-success" role="alert">
          Part Added!
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default NewPartForm;

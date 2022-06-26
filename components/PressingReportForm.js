import React from "react";
import { useRouter } from "next/router";

const PressingReportForm = ({ lotId }) => {
  const router = useRouter();
  const handleScrapReportSubmit = async (e) => {
    e.preventDefault();
    const data = {
      PressingCounterTotal: e.target[0].value,
      PressingScrap: e.target[1].value,
    };
    console.log(data);
    const JSONdata = JSON.stringify(data);
    const endpoint = `https://scrap-tracker.herokuapp.com/api/lot/${lotId}`;

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();

    if (result) {
      router.push("/");
    }
  };
  return (
    <form onSubmit={handleScrapReportSubmit}>
      <div className="mb-3">
        <label className="form-label">Pressing Counter Total</label>
        <input
          type="number"
          className="form-control"
          id="inputPressingCounterTotal"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Scrap Weight / Kg</label>
        <input
          type="number"
          className="form-control"
          id="inputPressingScrapWeight"
          step={"0.01"}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default PressingReportForm;

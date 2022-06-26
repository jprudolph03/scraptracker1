import React from "react";
import { useRouter } from "next/router";
const ReportForm = ({ lotId }) => {
  const router = useRouter();
  const handleScrapReportSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ForgingCounterTotal: e.target[0].value,
      ForgingScrap: e.target[1].value,
    };
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
        <label className="form-label">Forging Counter Total</label>
        <input
          type="number"
          className="form-control"
          id="inputForgingCounterTotal"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" defaultValue={0}>
          Scrap Weight / Kg
        </label>
        <input
          type="number"
          className="form-control"
          id="inputForgingScrapWeight"
          step={"0.01"}
          defaultValue={0}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ReportForm;

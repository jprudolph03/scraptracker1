import React from "react";
import { useRouter } from "next/router";

const VSPackReportForm = ({ lotId }) => {
  const router = useRouter();
  const handleScrapReportSubmit = async (e) => {
    e.preventDefault();
    const data = {
      VSPackCounterTotal: e.target[0].value,
      VSPackScrap: e.target[1].value,
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
        <label className="form-label">VS/Pack Total</label>
        <input
          type="number"
          className="form-control"
          id="inputVSPackCounterTotal"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Scrap Pcs</label>
        <input
          type="number"
          className="form-control"
          id="inputVSPackPcs"
          defaultValue={0}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default VSPackReportForm;

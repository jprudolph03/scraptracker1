import React, { useState, useEffect } from "react";
import ReportForm from "../components/ReportForm";

const forging = () => {
  const [forgingLots, setForgingLots] = useState(null);

  useEffect(() => {
    fetch("https://scrap-tracker.herokuapp.com/api/lot")
      .then((res) => res.json())
      .then((data) => {
        setForgingLots(data.data);
      });
  }, []);

  const forgingReady = forgingLots?.filter(
    (l) => l.ForgingCounterTotal == undefined
  );

  const rdy = forgingReady?.map((fR) => (
    // console.log(fR.num);
    <div key={fR._id} className="accordion-item collapsed">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {fR.num} - {fR.partName}
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <ReportForm lotId={fR._id} />
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="display-2">Forging Scrap Reporting</h2>
      </div>
      <div className="accordion" id="accordionExample">
        {rdy}
      </div>
    </>
  );
};

export default forging;

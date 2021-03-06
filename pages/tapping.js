import React, { useState, useEffect } from "react";
import TappingReportForm from "../components/TappingReportForm";

const Tapping = () => {
  const [tappingLots, setTappingLots] = useState(null);
  useEffect(() => {
    fetch("https://scrap-tracker.herokuapp.com/api/lot")
      .then((res) => res.json())
      .then((data) => {
        setTappingLots(data.data);
      });
  }, []);
  const TappingReady = tappingLots?.filter(
    (l) => l.PressingCounterTotal > 1 && l.TappingCounterTotal == null
  );
  const rdy = TappingReady?.map((tR) => (
    // console.log(fR.num);
    <div key={tR._id} className="accordion-item collapsed">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {tR.num} - {tR.partName}
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <TappingReportForm lotId={tR._id} />
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="display-2">Tapping Scrap Reporting</h2>
      </div>
      <div className="accordion" id="accordionExample">
        {rdy}
      </div>
    </>
  );
};

export default Tapping;

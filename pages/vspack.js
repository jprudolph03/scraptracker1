import React, { useState, useEffect } from "react";
import VSPackReportForm from "../components/VSPackReportForm";

const Vspack = () => {
  const [vsPackLots, setVsPackLots] = useState(null);
  useEffect(() => {
    fetch("https://scrap-tracker.herokuapp.com/api/lot")
      .then((res) => res.json())
      .then((data) => {
        setVsPackLots(data.data);
      });
  }, []);
  const VSPackReady = vsPackLots?.filter(
    (l) => l.TappingCounterTotal > 1 && l.VSPackCounterTotal == null
  );
  const rdy = VSPackReady?.map((vR) => (
    // console.log(fR.num);
    <div key={vR._id} className="accordion-item collapsed">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {vR.num} - {vR.partName}
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <VSPackReportForm lotId={vR._id} />
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="display-2">VS/Pack Scrap Reporting</h2>
      </div>
      <div className="accordion" id="accordionExample">
        {rdy}
      </div>
    </>
  );
};

export default Vspack;

import React, { useState, useEffect } from "react";

const Pressing = () => {
  const [pressingLots, setPressingLots] = useState(null);
  useEffect(() => {
    fetch("https://scrap-tracker.herokuapp.com/api/lot", {
      mode: "no-cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setPressingLots(data.data);
      });
  }, []);
  const pressingReady = pressingLots?.filter((l) => l.ForgingCounterTotal > 1);
  const rdy = pressingReady?.map((pR) => (
    // console.log(fR.num);
    <div key={pR._id} className="accordion-item collapsed">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {pR.num} - {pR.partName}
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          Forging Counter Total: {pR.ForgingCounterTotal}
          {/* <ReportForm lotId={fR._id} /> */}
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="display-2">Pressing Scrap Reporting</h2>
      </div>
      <div className="accordion" id="accordionExample">
        {rdy}
      </div>
    </>
  );
};

export default Pressing;

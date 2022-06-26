import React, { useState, useEffect } from "react";

const gTable = null;

const ActiveLotTable = () => {
  const [activeLots, setActiveLots] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://scrap-tracker.herokuapp.com/api/lot")
      .then((res) => res.json())
      .then((data) => {
        setActiveLots(data.data);

        setLoading(false);
      });
  }, []);
  if (!activeLots) {
    console.log("No Lots...");
  } else {
    const gTable = activeLots.map((lot) => (
      <tr key={lot._id}>
        <td>
          {lot.num} - <span className="text-secondary">{lot.partName}</span>
        </td>
        <td>{lot.eXt}</td>
        <td>
          {parseInt(
            lot.ForgingCounterTotal -
              (lot.ForgingScrap / lot.singlePartWeight) * 1000
          )}
          <span className="badge rounded-pill text-bg-primary">
            {parseFloat(
              ((lot.ForgingCounterTotal -
                (lot.ForgingScrap / lot.singlePartWeight) * 1000) /
                lot.eXt) *
                100 -
                100,
              2
            ).toFixed(2)}{" "}
            %
          </span>
        </td>
        <td>
          {parseInt(
            lot.PressingCounterTotal -
              (lot.PressingScrap / lot.singlePartWeight) * 1000
          )}
          <span className="badge rounded-pill text-bg-warning">
            {parseFloat(
              ((lot.PressingCounterTotal -
                (lot.PressingScrap / lot.singlePartWeight) * 1000) /
                lot.eXt) *
                100 -
                100,
              2
            ).toFixed(2)}{" "}
            %
          </span>
        </td>
        <td>
          {parseInt(
            lot.TappingCounterTotal -
              (lot.TappingScrap / lot.singlePartWeight) * 1000
          )}
          <span className="badge rounded-pill text-bg-info">
            {parseFloat(
              ((lot.TappingCounterTotal -
                (lot.TappingScrap / lot.singlePartWeight) * 1000) /
                lot.eXt) *
                100 -
                100
            ).toFixed(2)}{" "}
            %
          </span>
        </td>
        <td>
          {lot.VSPackCounterTotal}
          <span className="badge rounded-pill text-bg-success">
            {parseFloat(
              ((lot.TappingCounterTotal -
                (lot.TappingScrap / lot.singlePartWeight) * 1000) /
                lot.eXt) *
                100 -
                100
            ).toFixed(2)}{" "}
            %
          </span>
        </td>
      </tr>
    ));
  }
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">100%</th>
              <th scope="col">Forging</th>
              <th scope="col">Pressing</th>
              <th scope="col">Tapping</th>
              <th scope="col">VS / Pack</th>
            </tr>
          </thead>
          <tbody>{gTable}</tbody>
        </table>
      </div>
    </>
  );
};

export default ActiveLotTable;

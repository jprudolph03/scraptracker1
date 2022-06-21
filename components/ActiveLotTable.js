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
          {lot.ForgingCounterTotal} ({lot.ForgingCounterTotal - lot.eXt})
        </td>
        <td></td>
        <td></td>
        <td></td>
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

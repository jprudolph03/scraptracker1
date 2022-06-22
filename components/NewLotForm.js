import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const NewLotForm = () => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newLotNumber, setNewLotNumber] = useState(null);
  const [prefixLookup, setPrefixLookup] = useState(null);
  const [selectedPart, setSelectedPart] = useState(null);
  const router = useRouter();

  //grab parts list, put in state
  useEffect(() => {
    setLoading(true);
    fetch("https://scrap-tracker.herokuapp.com/api/part")
      .then((res) => res.json())
      .then((data) => {
        setParts(data.data);

        setLoading(false);
      });
  }, []);

  const lookUpPrefix = (e) => {
    e.preventDefault();
    let lotPFix = e.target.value.slice(0, 2);
    const lookup = parts.find((el) => el.lotPrefix == lotPFix);
    setSelectedPart(lookup);
  };

  const handleNewLotSubmit = async (e) => {
    e.preventDefault();
    const newLotData = {
      num: e.target[0].value,
      partName: e.target[1].value,
      singlePartWeight: e.target[2].value,
      totalCoilWeight: e.target[3].value,
      lotLoss: e.target[4].value,
      eXt: parseInt(
        ((e.target[3].value - e.target[4].value) / e.target[2].value) * 1000
      ),
    };
    // console.log(newLotData);
    const JSONdata = JSON.stringify(newLotData);

    const endpoint = "https://scrap-tracker.herokuapp.com/api/lot";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();
    if (result) {
      router.push("/");
    }
  };

  return (
    <>
      <form onSubmit={handleNewLotSubmit}>
        <div className="mb-3">
          <label className="form-label">New Lot Number</label>
          <input
            type="text"
            className="form-control"
            id="newLotNumberForm"
            onChange={lookUpPrefix}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Part Name</label>
          <input
            type="text"
            className="form-control"
            id="newLotNumberPartName"
            value={selectedPart ? selectedPart.name : "Null"}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Single Part Weight <span className="text-secondary">g</span>
          </label>
          <input
            type="number"
            className="form-control"
            id="singlePartWeightInput"
            step={"0.01"}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Total Coil Weight <span className="text-secondary">Kg</span>
          </label>
          <input
            type="number"
            className="form-control"
            id="totalCoilWeightInput"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Standard Loss <span className="text-secondary">Kg</span>
          </label>
          <input
            type="number"
            className="form-control"
            id="totalCoilWeightInput"
            step={"0.01"}
            value={selectedPart ? selectedPart.STDLoss : 0}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default NewLotForm;

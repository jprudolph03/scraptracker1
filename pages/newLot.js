import React, { useState, useEffect } from "react";
import NewLotForm from "../components/NewLotForm";

const newLot = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="display-2">New Lot Form</h2>
      </div>
      <NewLotForm />
    </>
  );
};

export default newLot;

import React from "react";
import NewPartForm from "../components/NewPartForm";

const addNewPart = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="display-2">Add New Part *admin*</h2>
      </div>
      <NewPartForm />
    </>
  );
};

export default addNewPart;

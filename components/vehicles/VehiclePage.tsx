import React from "react";
import VehicleList from "./VehicleList";
import CreateVehicle from "./CreateVehicle";

const VehiclePage = () => {
  return (
    <div className="page-container">
      <CreateVehicle />
      <VehicleList />
    </div>
  );
};

export default VehiclePage;

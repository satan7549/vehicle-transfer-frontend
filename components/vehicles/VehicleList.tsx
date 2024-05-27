"use client";
import { fetchVehicles } from "@/utils/api";
import React, { useEffect, useState } from "react";
import Vehicle from "./Vehicle";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehiclesData = async () => {
      const data = await fetchVehicles();
      if (data) {
        setVehicles(data);
      }
    };

    fetchVehiclesData();
  }, []);

  const updateVehicleList = async () => {
    const data = await fetchVehicles(); // Fetch updated vehicle list
    if (data) {
      setVehicles(data); // Set the updated vehicle list
    }
  };

  return (
    <div className="flex flex-wrap -m-2">
      {vehicles.map((vehicle: any) => {
        return (
          <Vehicle
            key={vehicle.id}
            vehicle={vehicle}
            updateVehicleList={updateVehicleList}
          />
        );
      })}
    </div>
  );
};

export default VehicleList;

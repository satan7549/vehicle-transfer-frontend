"use client";
import { fetchDrivers } from "@/utils/api";
import React, { useEffect, useState } from "react";
import Drivers from "./Drivers";

const DriversLists = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDriversData = async () => {
      const data = await fetchDrivers();
      if (data) {
        setDrivers(data);
      }
    };

    fetchDriversData();
  }, []);

  return (
    <div className="flex flex-wrap -m-2">
      {drivers.map((driver: any) => {
        return <Drivers key={driver.id} driver={driver} />;
      })}
    </div>
  );
};

export default DriversLists;

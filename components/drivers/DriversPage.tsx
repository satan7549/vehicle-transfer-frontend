"use client";
import React, { useEffect, useState } from "react";
import DriversLists from "./DriversLists";
import { createDrivers, fetchDrivers } from "@/utils/api";
import CreateDriver from "./CreateDriver";

// Define the type for a driver object
interface Driver {
  id: number;
  name: string;
  phoneNumber: string;
  profilePhoto: string;
}

const DriversPage = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    fetchDriversData();
  }, []);

  const fetchDriversData = async () => {
    const data = await fetchDrivers();
    if (data) {
      setDrivers(data);
    }
  };

  const handleCreateDriver = async (driverData: any) => {
    const createdDriver = await createDrivers(driverData);

    if (createdDriver) {
      setDrivers([...drivers, createdDriver]); // Update drivers list with the new driver
    }
  };

  return (
    <>
      <CreateDriver onCreateDriver={handleCreateDriver} />
      <DriversLists />
    </>
  );
};

export default DriversPage;

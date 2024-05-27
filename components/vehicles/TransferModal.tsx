"use client";
import { fetchDrivers, fetchVehicles, transferVehicle } from "@/utils/api";
import React, { useEffect, useState } from "react";

const TransferModal = ({
  showModal,
  closeModal,
  vehicle,
  updateVehicleList,
}: any) => {
  const [drivers, setDrivers] = useState([]);
  const [toDriver, setToDriver] = useState();

  useEffect(() => {
    const fetchDriversData = async () => {
      const data = await fetchDrivers();
      if (data) {
        setDrivers(data);
      }
    };

    fetchDriversData();
  }, []);

  const handleSubmit = (e: any) => {
    const vehicleData = {
      toDriverId: toDriver,
      vehicleNumber: vehicle.vehicleNumber,
    };
    transferVehicle(vehicleData);
    updateVehicleList();
    closeModal();
  };

  return (
    showModal && (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <form
              onSubmit={handleSubmit}
              className="p-6"
              encType="multipart/form-data"
            >
              <div className="mb-4">
                <label
                  htmlFor="vehicleNumber"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Vehicle Number: {vehicle.vehicleNumber}
                </label>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="vehicleType"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Vehicle Type: {vehicle.vehicleType}
                </label>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="vehicleType"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Current Driver:
                  {vehicle.currentDriver
                    ? ` ${vehicle.currentDriver.name}`
                    : "Not Transfered Yet"}{" "}
                </label>
              </div>

              <div className="mb-4">
                <label className="block mt-4">
                  To Driver:
                  <select
                    className="mt-1 block w-full rounded border-gray-300"
                    value={toDriver}
                    onChange={(e: any) => {
                      setToDriver(e.target.value);
                    }}
                  >
                    <option value="">Select Driver</option>
                    {drivers.map((driver: any) => {
                      // Check if vehicle.currentDriver exists and if its id matches the current driver's id
                      if (
                        vehicle.currentDriver &&
                        vehicle.currentDriver.id === driver.id
                      ) {
                        // If it matches, skip rendering this driver as an option
                        return null;
                      } else {
                        // If it doesn't match, render this driver as an option
                        return (
                          <option key={driver.id} value={driver.id}>
                            {driver.name}
                          </option>
                        );
                      }
                    })}
                  </select>
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Create
                </button>
                <button
                  onClick={() => closeModal()}
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default TransferModal;

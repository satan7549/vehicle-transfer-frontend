"use client ";
import Image from "next/image";
import React, { useState } from "react";
import TransferModal from "./TransferModal";

const Vehicle = ({ vehicle, updateVehicleList }: any) => {
  const [showModal, setShowModal] = useState(false);

  const {
    vehicleNumber,
    vehicleType,
    pucCertificate,
    insuranceCertificate,
    currentDriver,
  } = vehicle;

  return (
    <>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
              {vehicleNumber}
            </h2>
            <p className="text-gray-500">{vehicleType}</p>
            <p className="text-gray-500">
              Current Driver:-{" "}
              {currentDriver ? ` ${currentDriver.name}` : "Not Transfered Yet"}{" "}
            </p>
          </div>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Transfer
            </button>
          </div>
        </div>
      </div>

      <TransferModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        vehicle={vehicle}
        updateVehicleList={updateVehicleList}
      />
    </>
  );
};

export default Vehicle;

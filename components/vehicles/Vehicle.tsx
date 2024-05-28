"use client ";
import Image from "next/image";
import React, { useState } from "react";
import TransferModal from "./TransferModal";
import { iconAssets } from "@/public/assets";

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
        <div className="h-full gap-2 items-center border-gray-200 border p-2 bg-white rounded-lg shadow-md">

          <div className="flex flex-row gap-2 justify-between mb-4">
            <Image
              alt="team"
              height={100}
              width={100}
              className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-2 mr-4"
              src={
                "https://res.cloudinary.com/dmogj5t3c/image/upload/v1716879830/vehicle_uploads/car_icon_u5mwyv.jpg"
              }
            />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">
                Vehicle Number:- {vehicleNumber}
              </h2>
              <p className="text-gray-500">vehicleType:- {vehicleType}</p>
              <p className="text-gray-500">
                Current Driver:-{" "}
                {currentDriver
                  ? ` ${currentDriver.name}`
                  : "Not Transfered Yet"}{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-2 justify-between">
            <a
              href={pucCertificate}
              target="_blank"
              className="view-button w-[50%] text-center"
            >
              PUC View
            </a>
            <a
              href={insuranceCertificate}
              target="_blank"
              className="view-button w-[50%] text-center"
            >
              Insurance View
            </a>
          </div>

          <div className="m-auto">
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
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

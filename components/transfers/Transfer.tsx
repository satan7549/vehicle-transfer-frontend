import Image from "next/image";
import React from "react";

const Transfer = ({ transfer }: any) => {
  const { fromDriver, toDriver, vehicle } = transfer;

  return (
    <div className="max-w-xl mx-auto w-[28%] bg-white shadow-md rounded-md overflow-hidden mb-8 ">
      <div className="p-6 bg-white flex flex-col gap-2 justify-between ">
        <h2 className="text-xl font-semibold ">Transfer Details</h2>
        <div className="flex flex-row  items-center gap-4">
          <div className=" bg-gray-100 items-center rounded-full mr-auto">
            <Image
              height={100}
              width={100}
              className="w-16 h-16 object-cover object-center rounded-full"
              src={
                fromDriver
                  ? fromDriver.profilePhoto
                  : "https://res.cloudinary.com/dmogj5t3c/image/upload/v1716839648/faceicon_vhrheu.png"
              }
              alt="Profile"
            />
          </div>
          <div className="w-[80%] h-[5.25rem]">
            <h3 className="text-lg font-semibold mb-1">From Driver:</h3>
            {fromDriver ? (
              <>
                <p className="text-sm text-gray-500 mb-1">
                  Name: {fromDriver.name}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  Phone: {fromDriver.phoneNumber}
                </p>
              </>
            ) : (
              <p className="text-sm text-gray-500 mb-1">No Record</p>
            )}
          </div>
        </div>

        <div className="flex flex-row  items-center gap-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full mr-auto">
            <Image
              height={100}
              width={100}
              className="w-16 h-16 object-cover object-center rounded-full"
              src={toDriver ? toDriver.profilePhoto : ""}
              alt="Profile"
            />
          </div>

          <div className="w-[80%] h-[5.25rem]">
            <h3 className="text-lg font-semibold mb-1">To Driver:</h3>
            <p className="text-sm text-gray-500 mb-1">Name: {toDriver.name}</p>
            <p className="text-sm text-gray-500 mb-1">
              Phone: {toDriver.phoneNumber}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold ">Vehicle Details:</h3>
            <p className=" ">Vehicle Number: {vehicle.vehicleNumber}</p>
            <p className="">Vehicle Type: {vehicle.vehicleType}</p>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href={vehicle.pucCertificate}
              target="_blank"
              className="view-button"
            >
              PUC View
            </a>
            <a
              href={vehicle.insuranceCertificate}
              target="_blank"
              className="view-button"
            >
              Insurance View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;

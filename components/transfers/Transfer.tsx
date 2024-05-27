import Image from "next/image";
import React from "react";

const Transfer = ({ transfer }: any) => {
  const { fromDriver, toDriver, vehicle } = transfer;

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-md overflow-hidden mb-8">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Transfer Details</h2>

        {/* <!-- From Driver Section --> */}
        {/* <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">From Driver:</h3>
          {fromDriver ? (
            <>
              <p className="mb-2">
                Name: {fromDriver ? fromDriver.name : "Unknown"}
              </p>
              <p className="mb-2">
                Phone Number: {fromDriver ? fromDriver.phoneNumber : "Unknown"}
              </p>
              <div className="flex items-center">
                <Image
                  height={100}
                  width={100}
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={fromDriver ? fromDriver.profilePhoto : ""}
                  alt="Profile"
                />
              </div>
            </>
          ) : (
            "No Record"
          )}
        </div> */}
        <div className="mb-6 flex items-center">
          <div className="w-16 h-16 bg-gray-100 object-cover object-center rounded-full mr-4">
            <Image
              height={100}
              width={100}
              className="w-16 h-16 rounded-full"
              src={
                fromDriver
                  ? fromDriver.profilePhoto
                  : "https://res.cloudinary.com/dmogj5t3c/image/upload/v1716839648/faceicon_vhrheu.png"
              }
              alt="Profile"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">From Driver:</h3>
            {fromDriver ? (
              <>
                <p className="text-sm text-gray-500 mb-1">
                  Name: {fromDriver.name}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  Phone Number: {fromDriver.phoneNumber}
                </p>
              </>
            ) : (
              <p className="text-sm text-gray-500 mb-1">No Record</p>
            )}
          </div>
        </div>

        <div className="mb-6 flex items-center">
          <div className="w-16 h-16 bg-gray-100 object-cover object-center rounded-full mr-4">
            <Image
              height={100}
              width={100}
              className="w-16 h-16 rounded-full"
              src={toDriver ? toDriver.profilePhoto : ""}
              alt="Profile"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">
              {toDriver ? toDriver.name : "Unknown"}
            </h3>
            <p className="text-sm text-gray-500 mb-1">
              {toDriver ? toDriver.phoneNumber : "Unknown"}
            </p>
          </div>
        </div>

        <div className="vehicle-details">
          <h3 className="text-lg font-semibold mb-2">Vehicle:</h3>
          <p className="mb-2">Vehicle Number: {vehicle.vehicleNumber}</p>
          <p className="mb-2">Vehicle Type: {vehicle.vehicleType}</p>
          <div className="flex flex-col gap-2 mb-4">
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

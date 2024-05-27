import Image from "next/image";
import React from "react";

const Transfer = ({ transfer }: any) => {
  const { fromDriver, toDriver, vehicle } = transfer;

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-md overflow-hidden mb-8">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Transfer Details</h2>

        {/* <!-- From Driver Section --> */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">From Driver:</h3>
          <p className="mb-2">
            Name: {fromDriver ? fromDriver.name : "Unknown"}
          </p>
          <p className="mb-2">
            Phone Number: {fromDriver ? fromDriver.phoneNumber : "Unknown"}
          </p>
          <div className="flex items-center">
            {/* <Image
              height={100}
              width={100}
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={fromDriver ? fromDriver.profilePhoto : ""}
              alt="Profile"
            /> */}
          </div>
        </div>

        {/* <!-- To Driver Section --> */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">To Driver:</h3>
          <p className="mb-2">Name: {toDriver ? toDriver.name : "Unknown"}</p>
          <p className="mb-2">
            Phone Number: {toDriver ? toDriver.phoneNumber : "Unknown"}
          </p>
          <div className="flex items-center">
            {/* <Image
              height={100}
              width={100}
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={toDriver ? toDriver.profilePhoto : ""}
              alt="Profile"
            /> */}
          </div>
        </div>

        {/* <!-- Vehicle Section --> */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Vehicle:</h3>
          <p className="mb-2">Vehicle Number: {vehicle.vehicleNumber}</p>
          <p className="mb-2">Vehicle Type: {vehicle.vehicleType}</p>
          <p className="mb-2">
            PUC Certificate:{" "}
            <a href={vehicle.pucCertificate} target="_blank">
              View
            </a>
          </p>
          <p className="mb-2">
            Insurance Certificate:{" "}
            <a href={vehicle.insuranceCertificate} target="_blank">
              View
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transfer;

"use client";
import { createVehicle } from "@/utils/api";
import React, { useState } from "react";

const CreateVehicle = () => {
  const [showModal, setShowModal] = useState(false);
  const [vehicleData, setVehicleData] = useState({
    vehicleNumber: "",
    vehicleType: "",
    pucCertificate: "",
    insuranceCertificate: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setVehicleData({ ...vehicleData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // createVehicle(vehicleData);

    console.log(vehicleData);

    setShowModal(false);
    // Reset form data if needed
    setVehicleData({
      vehicleNumber: "",
      vehicleType: "",
      pucCertificate: "",
      insuranceCertificate: "",
    });
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Create New Vehicle
      </button>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
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
                    Vehicle Number:
                  </label>
                  <input
                    type="text"
                    id="vehicleNumber"
                    name="vehicleNumber"
                    value={vehicleData.vehicleNumber}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="vehicleType"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Vehicle Type:
                  </label>
                  <input
                    type="text"
                    id="vehicleType"
                    name="vehicleType"
                    value={vehicleData.vehicleType}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="pucCertificate"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    PUC Certificate:
                  </label>
                  <input
                    type="file"
                    id="pucCertificate"
                    name="pucCertificate"
                    onChange={handleInputChange}
                    accept="image/*, .pdf"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="insuranceCertificate"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Insurance Certificate:
                  </label>
                  <input
                    type="file"
                    id="insuranceCertificate"
                    name="insuranceCertificate"
                    onChange={handleInputChange}
                    accept="image/*, .pdf"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Create
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
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
      )}
    </div>
  );
};

export default CreateVehicle;

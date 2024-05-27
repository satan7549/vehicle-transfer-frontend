"use client";
import { createDrivers } from "@/utils/api";
import uploadFileToCloudinary from "@/utils/fileUpload";
import React, { useState } from "react";

const CreateDriver = ({ onCreateDriver }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [driverData, setDriverData] = useState({
    name: " ",
    phoneNumber: "",
    profilePhoto: "" as string | File,
  });

  const handleInputChange = (e: any) => {
    const { name, value, files } = e.target;
    if (files) {
      setDriverData({ ...driverData, [name]: files[0] });
    } else {
      setDriverData({ ...driverData, [name]: value });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Upload PUC Certificate and Insurance Certificate
    const profileUrl =
      typeof driverData.profilePhoto === "string"
        ? driverData.profilePhoto
        : await uploadFileToCloudinary(driverData.profilePhoto, "vehicles");

    // Update driverData with file URLs
    const updatedDriverData = {
      ...driverData,
      profilePhoto: profileUrl,
      name: driverData.name.trim(),
      phoneNumber:`+91${driverData.phoneNumber}`,
    };

    onCreateDriver(updatedDriverData);

    setShowModal(false);
    // Reset form data if needed
    setDriverData({
      name: " ",
      phoneNumber: "",
      profilePhoto: " ",
    });
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Create New Driver
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
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Driver Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={driverData.name}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Phone Number:
                  </label>
                  <input
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={driverData.phoneNumber}
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
                    Driver Photo:
                  </label>
                  <input
                    type="file"
                    id="profilePhoto"
                    name="profilePhoto"
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

export default CreateDriver;

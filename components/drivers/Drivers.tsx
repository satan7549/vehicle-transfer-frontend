"use client";
import Image from "next/image";
import React, { useState } from "react";

const Drivers = ({ driver }: any) => {
  const { name, phoneNumber, profilePhoto } = driver;

  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-200 border bg-white p-4 rounded-lg shadow-md">
        <Image
          alt="team"
          height={100}
          width={100}
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={profilePhoto}
        />
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{name}</h2>
          <p className="text-gray-500">{phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Drivers;

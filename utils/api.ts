// utils/api.js
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchDrivers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/drivers`);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching drivers:", error);
    return error.response.data;
  }
};

export const createDrivers = async (driverData: any) => { 
  try {
    const response = await axios.post(
      `${API_BASE_URL}/drivers/create`,
      driverData
    );
    return response.data;
  } catch (error: any) {
    console.error("Error fetching drivers:", error);
    return error.response.data;
  }
};

export const fetchVehicles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/vehicles`);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching drivers:", error);
    return error.response.data;
  }
};

export const createVehicle = async (vehicleData: any) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/vehicles/create`,
      vehicleData
    );
    return response.data;
  } catch (error: any) {
    console.error("Error fetching drivers:", error);
    return error.response.data;
  }
};

export const fetchTransfers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/transfers`);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching drivers:", error);
    return error.response.data;
  }
};

export const transferVehicle = async (transferData: any) => {
  console.log(transferData, "transferData");
  try {
    const response = await axios.post(
      `${API_BASE_URL}/transfers/create`,
      transferData
    );
    return response.data;
  } catch (error: any) {
    console.error("Error fetching drivers:", error);
    return error.response.data;
  }
};

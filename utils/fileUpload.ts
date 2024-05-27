import axios from "axios";

// Define the function's parameter and return types
interface UploadFileResponse {
  secure_url: string;
}

const uploadFileToCloudinary = async (
  file: File,
  folder: string
): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string
  );
  formData.append("folder", folder);

  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;

  try {
    const response = await axios.post<UploadFileResponse>(
      cloudinaryUrl,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data.secure_url;
  } catch (error) {
    console.error("Error uploading file to Cloudinary", error);
    throw error;
  }
};

export default uploadFileToCloudinary;

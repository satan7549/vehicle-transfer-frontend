import axios from "axios";

const deleteImageFromCloudinary = async (secureUrl: string): Promise<void> => {
  // Extract public_id from secure_url
  const publicId = secureUrl.split("/").pop()?.split(".")[0];

  if (!publicId) {
    throw new Error("Unable to extract public_id from secure_url");
  }

  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/delete_by_token`;

  try {
    const response = await axios.post(
      cloudinaryUrl,
      {
        public_id: publicId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(
            `${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}:${process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}`
          ).toString("base64")}`,
        },
      }
    );
    if (response.status === 200) {
      console.log(`Image with public_id ${publicId} deleted successfully`);
    } else {
      throw new Error(`Failed to delete image with public_id ${publicId}`);
    }
  } catch (error) {
    console.error("Error deleting image from Cloudinary", error);
    throw error;
  }
};

export default deleteImageFromCloudinary;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{hostname:"example.com"},{hostname:"res.cloudinary.com"}]
    }
};

export default nextConfig;

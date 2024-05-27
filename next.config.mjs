/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{hostname:"example.com"},{hostname:""}]
    }
};

export default nextConfig;

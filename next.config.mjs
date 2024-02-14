/** @type {import('next').NextConfig} */
const nextConfig = {
    serverActions: {
        bodySizeLimit: '8000mb' // Set desired value here
    },
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;

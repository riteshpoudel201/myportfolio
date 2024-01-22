/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname:'**.pexels.com',
                port:'',
                pathname:'/photo/**'
            },
        ],
    },
}

module.exports = nextConfig

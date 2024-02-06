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
            {
                protocol:'https',
                hostname:'res.cloudinary.com',
                port:'',
                pathname:'**'
            }
                
        ],
    },
}

module.exports = nextConfig

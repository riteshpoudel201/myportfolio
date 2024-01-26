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
        domains: ['res.cloudinary.com'],
    },
}

module.exports = nextConfig

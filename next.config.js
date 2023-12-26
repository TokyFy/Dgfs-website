/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
       NEXT_PUBLIC_API_URL: "http://localhost:8000",
    },

    images: {
        unoptimized: true,
        domains : ["localhost"],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['ourfits3.s3.ap-northeast-2.amazonaws.com'],
    },
};

module.exports = nextConfig;

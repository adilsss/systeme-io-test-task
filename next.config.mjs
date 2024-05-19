/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/tables/pages",
        permanent: true
      }
    ]
  }
}

export default nextConfig

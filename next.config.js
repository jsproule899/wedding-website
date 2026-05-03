/** @type {import('next').NextConfig} */
const nextConfig = {
  // Outputs a Single-Page Application (SPA).
  distDir: './dist', // Changes the build output directory to `./dist/`.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  allowedDevOrigins: ['192.168.0.18', 'localhost', '127.0.0.1']
}

export default nextConfig
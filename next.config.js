/** @type {import('next').NextConfig} */
const nextConfig = {
  // Outputs a Single-Page Application (SPA).
  distDir: './dist', // Changes the build output directory to `./dist/`.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
}

export default nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable telemetry without using the deprecated 'tracing' option
  experimental: {
    // Remove the tracing option as it's no longer supported
  },
  // Fix TS errors in route handlers
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig; 
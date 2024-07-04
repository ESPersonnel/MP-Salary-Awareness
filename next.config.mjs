// Import the Next.js configuration type for better IntelliSense (optional)
/** @type {import('next').NextConfig} */

// Import the withPWA function from next-pwa using dynamic import
import withPWA from 'next-pwa';

const pwaConfig = {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
};

// Define your base Next.js configuration
const nextConfig = {
    // other configurations
};

// Export the configuration wrapped by withPWA to enable PWA features
export default withPWA(pwaConfig)(nextConfig);
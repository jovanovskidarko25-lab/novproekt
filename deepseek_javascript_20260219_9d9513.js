/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // генерира статички HTML/CSS/JS
  images: {
    unoptimized: true, // потребно за статички извоз ако користиш next/image
  },
};

module.exports = nextConfig;
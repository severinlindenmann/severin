const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
  images: {
    unoptimized: true,
  },
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // any configs you need
};

module.exports = withNextra(nextConfig);

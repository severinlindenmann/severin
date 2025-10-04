/** @type {import('next').NextConfig} */
const baseConfig = {
  output: 'export',
  distDir: '_static',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = async () => {
  const { default: nextra } = await import("nextra");

  const withNextra = nextra({
    theme: "nextra-theme-blog",
    themeConfig: "./theme.config.js",
    staticImage: true,
    defaultShowCopyCode: true,
  });

  return withNextra(baseConfig);
};

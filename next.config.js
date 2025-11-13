let withMDX;
try {
 
  require.resolve('@next/mdx');
  require.resolve('@mdx-js/loader');
 
  withMDX = require('@next/mdx')({ extension: /\.mdx?$/ });
} catch (err) {
  withMDX = (cfg) => cfg;
}

module.exports = withMDX({
  experimental: { appDir: true },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
});

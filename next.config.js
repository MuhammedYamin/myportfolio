let withMDX;
try {
  // Ensure both @next/mdx and @mdx-js/loader are resolvable before attempting to require.
  // @next/mdx will internally require @mdx-js/loader, which can cause a hard crash if missing.
  require.resolve('@next/mdx');
  require.resolve('@mdx-js/loader');
  // safe to require
  withMDX = require('@next/mdx')({ extension: /\.mdx?$/ });
} catch (err) {
  // fallback - no-op passthrough if MDX support isn't fully installed yet
  // This prevents startup errors; you can add MDX later by installing the packages.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  withMDX = (cfg) => cfg;
}

module.exports = withMDX({
  experimental: { appDir: true },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
});

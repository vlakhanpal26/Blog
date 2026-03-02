import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\\.mdx?$/
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
};

export default withMDX(nextConfig);

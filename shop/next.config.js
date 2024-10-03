/** @type {import('next').NextConfig} */

import NextFederationPlugin from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shop',
        remotes: {
          catalog: `catalog@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './header': './components/header/Header.tsx',
          './footer': './components/footer/Footer.tsx',
          './item-card': './components/item-card/ItemCard.tsx',
          './base-layout': './components/layout/components/base-layout/BaseLayout.tsx',
        },
      }),
    );

    return config;
  },
};

export default nextConfig;

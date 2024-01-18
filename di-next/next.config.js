/** @type {import('next').NextConfig} */

const { di } = require('@wessberg/di-compiler');
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // TypeScript 로더 구성
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            getCustomTransformers: (program) => di({ program }),
            // 필요한 경우 추가 ts-loader 설정을 여기에 추가합니다
          },
        },
      ],
    });

    // 다른 사용자 정의 Webpack 설정이 필요하다면 여기에 추가합니다

    return config;
  },
};

module.exports = nextConfig;

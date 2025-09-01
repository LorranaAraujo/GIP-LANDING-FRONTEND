import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Gera arquivos estáticos para exportação
  //basePath: '/GIP_LANDING', // Substitua pelo nome do repositório
  images: {
    unoptimized: true, // ❌ desativa otimização de imagens
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      os: false,
    };
    return config;
  },
};


module.exports = nextConfig;

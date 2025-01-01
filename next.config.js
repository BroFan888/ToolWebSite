/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true, // GitHub Pages 不支持 Next.js 的图片优化
  },
  basePath: '/ToolWebSite', // 确保这里的名称与你的仓库名完全匹配，区分大小写
}

module.exports = nextConfig 
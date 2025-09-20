// 网站配置
export const config = {
  // 网站基础URL
  baseUrl: import.meta.env.VITE_BASE_URL || 'http://localhost:5173',
  
  // 网站信息
  site: {
    name: '遐蝶 壁纸生成器',
    description: '来试试这个可爱的 遐蝶 壁纸生成器喵！',
  },
  
  // 图片相关配置
  images: {
    ogImage: '/og-image.png',
  },
  
  // 备案信息
  icp: {
    number: import.meta.env.VITE_ICP_NUMBER || '京ICP备XXXXXXXX号',
    url: 'https://beian.miit.gov.cn/'
  }
}

// 获取完整的URL
export const getFullUrl = (path: string = '') => {
  return `${config.baseUrl}${path}`
}
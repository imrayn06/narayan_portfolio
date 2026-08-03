import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Replace this URL with your actual domain when you have a custom one
  const baseUrl = 'https://narayan-portfolio.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/*", "/api/*"],
    },
    sitemap: `${process.env.DOMAIN}/sitemap.xml`,
    host: process.env.DOMAIN,
  };
}

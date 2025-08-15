import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.DOMAIN,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "yearly",
      alternates: {
        languages: {
          "id-ID": process.env.DOMAIN,
        },
      },
    },
  ];
}

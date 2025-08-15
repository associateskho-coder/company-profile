import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: "#ffffff",
    display: "standalone",
    background_color: "#ffffff",
    scope: "/",
    name: "Law Office KHO & ASSOSITE",
    short_name: "Law Office KHO & ASSOSITE",
    description:
      "Law Office KHO & ASSOSITE adalah Kantor hukum profesional yang berdedikasi memberikan layanan hukum berkualitas tinggi kepada individu, perusahaan, dan lembaga publik. Dengan mengedepankan integritas, profesionalisme, dan komitmen penuh kepada klien, kami hadir sebagai mitra strategis dalam penyelesaian permasalahan hukum secara efektif dan efisien.",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

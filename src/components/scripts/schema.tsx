import type { WithContext, LegalService } from "schema-dts";
import { LOGO_JPEG } from "../images";

export default function Schema() {
  const schema: WithContext<LegalService> = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Law Office KHO & ASSOSITE",
    image: LOGO_JPEG.src,
    "@id": "https://example.com",
    url: process.env.DOMAIN,
    logo: LOGO_JPEG.src,
    description:
      "Law Office KHO & ASSOSITE adalah Kantor hukum profesional yang berdedikasi memberikan layanan hukum berkualitas tinggi kepada individu, perusahaan, dan lembaga publik. Dengan mengedepankan integritas, profesionalisme, dan keahlian, kami siap membantu menyelesaikan berbagai permasalahan hukum Anda.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-812-3456-7890",
      contactType: "personal",
      areaServed: "ID",
      availableLanguage: ["Indonesian"],
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2),
      }}
    />
  );
}
